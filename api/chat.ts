/**
 * POST /api/chat — Gemini AI Chat Proxy
 * ======================================
 * Server-side handler that proxies chat requests to the
 * Google Gemini API. This keeps the API key safe on the
 * server and never exposes it to the browser.
 *
 * Request body:  { message: string }
 * Response body: { reply: string } | { error: { code: string; message: string } }
 *
 * Environment variable required:
 *   GEMINI_API_KEY — your Google AI / Gemini API key
 *     (set in Vercel dashboard → Settings → Environment Variables)
 *
 * System prompt is inlined so the Vercel serverless function has no local
 * file imports (api/system-prompt is not resolved in /var/task). Dev mode
 * still uses api/system-prompt.ts via vite.config.ts.
 *
 * Rate limiting: In-memory per instance (resets on cold start).
 * For production at scale, consider Upstash Redis or Vercel KV.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// Inlined so the serverless function has no dependency on project root (../config)
const CHAT_MAX_MESSAGE_LENGTH = 1000;

// Inlined so Vercel can resolve the function without ./system-prompt (ERR_MODULE_NOT_FOUND).
// Keep in sync with api/system-prompt.ts (used by vite.config.ts in dev).
const SYSTEM_PROMPT = `
You are an AI assistant representing Vijay Sehgal on his portfolio website.
Your goal is to answer questions about Vijay's professional experience, skills, and projects.

Name: Vijay Sehgal
Title: Product Manager — AI Innovation Labs
Location: Gurugram, India
Summary: PM with a builder's background — shipped LMS features as a backend developer, founded an EdTech startup to ₹1.2 Cr ARR, and led product-ops at WhiteHat Jr during hyper-growth. Completed Airtribe AI PM Fellowship in 2024 (top 3% of 150+ fellows). Currently Product Manager at Infinity Learn's AI Innovation Labs (since April 2026).

Current Role:
Product Manager — AI Innovation Labs at Infinity Learn (April 2026 – Present). Leading product for Full Circle, an AI-native initiative inside Infinity Learn — one of India's leading K-12 EdTech platforms. Early stage: defining scope, running user research, and shaping how AI earns its place in a student's workflow.

Skills:
Product: Product Management, User Research, Discovery, PRDs, Roadmapping, Experimentation, Metrics, GTM, OKRs
Execution: Agile, AI Agents, Rapid Prototyping, Stakeholder Communication, Mentorship, Cross-functional Leadership
Data/Tech: Figma/Miro, Jira, Mixpanel, GA4, A/B Testing, Wireframing, Funnel Analysis, LLMs, Multi-agent workflows

Experience:
Product Manager — AI Innovation Labs at Infinity Learn (April 2026 – Present). Leading Full Circle, an AI-native EdTech product. Defining scope, user research, AI integration strategy.
Independent PM Practice (2025 – April 2026). Shipped 3 products in 7 days using a self-built 16-agent AI OS (ProductOS). Built this portfolio with Gemini chatbot and serverless API. 100+ mock PM interviews on Stellar Peers. Case studies: Swish, Blinkit, WhatsApp, GitHub-for-PMs.
Product Owner: LMS & Curriculum at WhiteHat Jr (Byjus') (Nov 2020 – May 2022). Owned curriculum and LMS for ~150k students. Curriculum rollout: 10–15 → 5–7 days (−50%). Teacher onboarding: 60% → 78%. Support tickets: −50%. CSAT: 4.0 → 4.5.
Founder & Head of Operations at Delta Learning (Aug 2019 – Nov 2020). Founded offline EdTech from zero — 600+ students, project-based upskilling. ₹1.2 Cr ARR at ~30% net margin. Completion rate ~80% vs ~60% benchmark.
Software Developer (Backend) at AcadView (July 2018 – Aug 2019). EdTech upskilling platform (acquired by Upgrad). Built core LMS features including GitHub verification and duplicate detection. ~80% verified placement across 2 cohorts.

Projects:
ProductOS (Live MacOS Beta — beta.productos.dev): PM decision operating system. Ask one messy product question, get a cited decision brief in ~10 minutes. Multi-agent pipeline — planner, parallel workers (App Store, G2, Reddit, HN), synthesizer. Live MacOS desktop app with active beta users. Previously called "AI Product Operating System."
PaiseWise (Live on Vercel): Personal finance tracker built solo. Auto-imports UPI, credit card, debit, and net banking alerts from 20+ Indian bank email formats; categorizes into 17 spend buckets. AI advisor "Artha" answers natural-language questions like "Where am I wasting money?" Built to solve Vijay's own problem — Gmail receipts scattered, no consolidated view.
GitHub-for-PMs Agent: AI agent that reads a PM case study and generates a clean portfolio card. 78% activation in 2 weeks vs 42% benchmark.
Rasoi Planner (Live): Kitchen coordination app for Indian homes. Cook updates pantry in Hindi/English via AI; owner sees real-time updates. Built and shipped solo.
WhatsApp Smart Muting (Teardown + PRD): Category-based muting (Marketing vs Utility) to cut notification fatigue. Target: −15% Block Rate.
Swish Quick-Commerce (Airtribe Capstone · 9/10): Post-order UX redesign with habit hooks. 2× reorder rate, +12pp retention.
Blinkit Growth Teardown: AI pre-fill smart cart from purchase history. Projected +15% 7-day reorder, +5% basket size.
The Digital Health Coach: Hybrid AI + human accountability platform. >40% W4 retention, 8% paid conversion.

Now & Next (this quarter):
- At Work: PM at Infinity Learn's AI Innovation Labs — building Full Circle, defining how AI earns its place in a student's workflow.
- Building: ProductOS — merging Research pipeline into the live MacOS desktop app at beta.productos.dev. Goal: PM asks one question, gets a cited decision brief in ~10 minutes.
- Learning: AI agents and product-led growth. Lenny's Newsletter, Shreyas Doshi threads.
- Outside work: Chess when slowing down to think, soccer when stopping thinking entirely.

Education:
B.Tech, Computer Science & Engineering — Kurukshetra University (2012–2016). Top 2% | GPA 3.8/4.0.
AI-PM Launchpad Fellowship — Airtribe (2024). Top 3% of 150+ fellows | 9/10 graduation project.
Superhuman AI Certification (2025).
Generative AI for Product Managers — LinkedIn Learning (Dec 2025).
Generative AI Intensive — GrowthSchool (2024).

For more case studies: https://vijaybsehgal.notion.site/Vijay-s-Portfolio-25af8aca882d80bba710ec33c119b28e

Tone: Professional, insightful, concise, and product-focused.
If asked about contact info, provide vijay.b.sehgal@gmail.com.
If asked about something not covered here, politely say you don't have that specific information but can discuss his known skills and projects.
Keep answers under 100 words unless asked for more detail.
`;

// ---- Structured logging ----
type LogEvent = {
  event: 'chat_request' | 'chat_success' | 'chat_error' | 'chat_rate_limited';
  ip?: string;
  status?: number;
  errorCode?: string;
  message?: string;
};

function logEvent(event: LogEvent): void {
  console.log(JSON.stringify({ ...event, timestamp: new Date().toISOString() }));
}

// ---- Rate limiting (per-instance, resets on cold start) ----
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10; // max 10 requests per minute per IP

/** Prune expired entries to avoid unbounded memory growth */
function pruneRateLimitMap(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetAt) rateLimitMap.delete(key);
  }
}

/** Checks if a given IP has exceeded the rate limit */
function isRateLimited(ip: string): boolean {
  pruneRateLimitMap();
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// ---- Handler ----
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 'unknown';

  // Only allow POST
  if (req.method !== 'POST') {
    logEvent({ event: 'chat_request', ip, status: 405, errorCode: 'METHOD_NOT_ALLOWED' });
    return res.status(405).json({ error: { code: 'METHOD_NOT_ALLOWED', message: 'Use POST.' } });
  }

  // Rate limiting by client IP
  if (isRateLimited(ip)) {
    logEvent({ event: 'chat_rate_limited', ip, status: 429 });
    return res.status(429).json({
      error: { code: 'RATE_LIMITED', message: 'Too many requests. Please wait a minute.' },
    });
  }

  // Validate request body
  const { message } = req.body || {};
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    logEvent({ event: 'chat_error', ip, status: 400, errorCode: 'INVALID_INPUT' });
    return res.status(400).json({
      error: { code: 'INVALID_INPUT', message: 'A non-empty "message" string is required.' },
    });
  }
  if (message.length > CHAT_MAX_MESSAGE_LENGTH) {
    logEvent({ event: 'chat_error', ip, status: 400, errorCode: 'INPUT_TOO_LONG' });
    return res.status(400).json({
      error: {
        code: 'INPUT_TOO_LONG',
        message: `Message must be under ${CHAT_MAX_MESSAGE_LENGTH} characters.`,
      },
    });
  }

  // Ensure API key is set
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    logEvent({ event: 'chat_error', ip, status: 500, errorCode: 'CONFIG_ERROR' });
    return res
      .status(500)
      .json({ error: { code: 'CONFIG_ERROR', message: 'AI service is not configured.' } });
  }

  try {
    const client = new GoogleGenAI({ apiKey });
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message.trim(),
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });

    const reply = response.text || "I didn't get a response regarding that.";
    logEvent({ event: 'chat_success', ip, status: 200 });
    return res.status(200).json({ reply });
  } catch (error: unknown) {
    const errStr = error instanceof Error ? error.message : String(error);
    const errStack = error instanceof Error ? error.stack : undefined;
    console.error('[api/chat]', errStr, errStack ?? '');

    // Map upstream errors to user-friendly messages
    if (errStr.includes('403') || errStr.includes('API_KEY') || errStr.includes('API key')) {
      logEvent({ event: 'chat_error', ip, status: 502, errorCode: 'UPSTREAM_AUTH' });
      return res
        .status(502)
        .json({ error: { code: 'UPSTREAM_AUTH', message: 'AI service authentication failed.' } });
    }
    if (errStr.includes('429')) {
      logEvent({ event: 'chat_error', ip, status: 429, errorCode: 'UPSTREAM_RATE_LIMIT' });
      return res.status(429).json({
        error: {
          code: 'UPSTREAM_RATE_LIMIT',
          message: 'AI service is busy. Try again in a minute.',
        },
      });
    }
    if (errStr.includes('404') || errStr.includes('not found') || errStr.includes('model')) {
      logEvent({ event: 'chat_error', ip, status: 502, errorCode: 'MODEL_ERROR', message: errStr.slice(0, 200) });
      return res
        .status(502)
        .json({ error: { code: 'MODEL_ERROR', message: 'AI model is unavailable. Please try again later.' } });
    }

    logEvent({
      event: 'chat_error',
      ip,
      status: 500,
      errorCode: 'INTERNAL',
      message: errStr.slice(0, 200),
    });
    return res
      .status(500)
      .json({ error: { code: 'INTERNAL', message: 'Something went wrong. Please try again.' } });
  }
}
