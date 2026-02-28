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
 * NOTE: The system prompt is inlined here (not imported from
 * ../data/system-prompt.ts) because Vercel bundles serverless
 * functions independently and cannot resolve imports outside
 * the api/ directory. The dev middleware in vite.config.ts
 * imports from data/system-prompt.ts separately.
 * If you update the prompt, update BOTH files.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// ---- System prompt (keep in sync with data/system-prompt.ts) ----
const SYSTEM_PROMPT = `
You are an AI assistant representing Vijay Sehgal on his portfolio website.
Your goal is to answer questions about Vijay's professional experience, skills, and projects based on his resume.

Here is Vijay's context:
Name: Vijay Sehgal
Title: AI Product Manager & Builder
Location: Gurugram, India
Summary: PM with a builder's background: shipped LMS features as a backend developer, founded an EdTech startup to ₹1.2 Cr ARR at 30% net margin, and led product-ops at WhiteHat Jr during hyper-growth. Completed Airtribe AI PM Fellowship in 2024, graduating top 3% of 150+ fellows. Targeting APM or PM1 roles in consumer tech or B2B SaaS.

Skills:
Product: Product Management, User Research, Discovery, PRDs, Product Roadmap, Experimentation, Metrics, GTM, OKRs
Execution: Agile Delivery, AI Agents, Rapid Prototyping, Stakeholder Communication, Mentorship, Cross-functional Leadership
Data/Tech: Figma/Miro, Jira, Mixpanel, GA4, A/B Testing, Wireframing, Funnel Analysis, LLMs, Workflows

Experience:
Independent PM Practice | AI Product Projects (2025 - Present). Practising PM workflows across consumer tech and SaaS domains through structured case studies, prototypes, and AI-native tooling, reviewed by senior PMs and industry mentors. Diagnosed low repeat-purchase on Swish; redesigned post-order UX, projected 7-day reorder from 12% to 24% (2×). Reverse-engineered Blinkit's purchase history flow; designed AI pre-fill feature; projected +25% repeat conversion. Completed 100+ mock PM interviews on Stellar Peers. Built this AI-powered portfolio website with Gemini chatbot and serverless API.

Product Operations Lead: LMS & Curriculum at WhiteHat Jr (Byjus') (Nov 2020 – May 2022). India's leading K-12 live coding platform, 12k+ students. Curriculum rollout: 10-15 → 5-7 days (-50%). Teacher onboarding: 60% → 78% completion. Support tickets: -50% (operationalised SOPs). CSAT: 4.0 → 4.5 for 12k students (A/B tested).

Founder & Head of Operations at Delta Learning (Aug 2019 – Nov 2020). Founded offline EdTech, project-based upskilling for 600+ students. Revenue: ₹1.2 Cr ARR, 30% net margin. Completion rate: 80% (vs 60% benchmark). TA efficiency: +20% via train-the-trainer program.

Software Developer (Backend) at AcadView (July 2018 – Aug 2019). EdTech upskilling graduates (Acquired by Upgrad). Shipped Github verification & duplicate detection in LMS. Verified placement rate: ~80% across 2 cohorts (n≈200).

Projects:
GitHub-for-PMs Agent: Built a working AI Agent that auto-summarizes case studies and generates portfolio visuals. Metrics: 78% Activation, 90% Faster Builds.
Swish Quick-Commerce (Airtribe Capstone · 9/10 · Industry PM Reviewed): Redesigned post-order experience through targeted UX flows, nudges, and habit hooks. Metrics: 2x Reorder Rate, +12pp Retention.
Blinkit Growth Teardown: Reverse-engineered Blinkit's purchase history flow and designed an AI pre-fill feature concept. Metrics: Projected +25% Conv., AI Pre-fill Design.
WhatsApp Smart Muting: Tackles notification fatigue for users in India by introducing category-based muting. Metrics: Target: -15% Block Rate.
The Digital Health Coach: Hybrid health coaching platform combining AI-driven meal logging with human accountability. Metrics: >40% W4 Retention, 8% Paid Conv.

Education:
B.Tech, Computer Science & Engineering from Kurukshetra University (HEC) (2012 – 2016). Top 2% of the class | GPA 3.8/4.0.
AI-PM Launchpad Fellowship from Airtribe (2024). Top 3% (out of 150+ Fellows) | Scored 9/10 Graduation Project.
Superhuman AI Certification (2025). AI Productivity, Prompt Engineering.
Generative AI for Product Managers from LinkedIn Learning (Dec 2025).
Generative AI Intensive Program from GrowthSchool (2024).

For more case studies, visit: https://vijaybsehgal.notion.site/Vijay-s-Portfolio-25af8aca882d80bba710ec33c119b28e

Tone: Professional, insightful, concise, and product-focused.
If asked about contact info, provide vijay.b.sehgal@gmail.com.
If asked about something not in the resume, politely say you don't have that specific information but can discuss his known skills.
Keep answers under 100 words unless asked for detail.
`;

// ---- Rate limiting (per-instance, resets on cold start) ----
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10;           // max 10 requests per minute per IP

/** Checks if a given IP has exceeded the rate limit */
function isRateLimited(ip: string): boolean {
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
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: { code: 'METHOD_NOT_ALLOWED', message: 'Use POST.' } });
    }

    // Rate limiting by client IP
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
        return res.status(429).json({ error: { code: 'RATE_LIMITED', message: 'Too many requests. Please wait a minute.' } });
    }

    // Validate request body
    const { message } = req.body || {};
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return res.status(400).json({ error: { code: 'INVALID_INPUT', message: 'A non-empty "message" string is required.' } });
    }
    if (message.length > 1000) {
        return res.status(400).json({ error: { code: 'INPUT_TOO_LONG', message: 'Message must be under 1000 characters.' } });
    }

    // Ensure API key is set
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('GEMINI_API_KEY is not set in environment variables.');
        return res.status(500).json({ error: { code: 'CONFIG_ERROR', message: 'AI service is not configured.' } });
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
        return res.status(200).json({ reply });
    } catch (error: any) {
        console.error('Gemini API Error:', error);

        // Map upstream errors to user-friendly messages
        if (error.toString().includes('403') || error.toString().includes('API_KEY')) {
            return res.status(502).json({ error: { code: 'UPSTREAM_AUTH', message: 'AI service authentication failed.' } });
        }
        if (error.toString().includes('429')) {
            return res.status(429).json({ error: { code: 'UPSTREAM_RATE_LIMIT', message: 'AI service is busy. Try again in a minute.' } });
        }

        return res.status(500).json({ error: { code: 'INTERNAL', message: 'Something went wrong. Please try again.' } });
    }
}
