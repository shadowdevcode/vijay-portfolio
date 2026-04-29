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
 * System prompt lives in api/system-prompt.ts and is shared by production
 * and local dev middleware.
 *
 * Rate limiting: In-memory per instance (resets on cold start).
 * For production at scale, consider Upstash Redis or Vercel KV.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from './system-prompt';

// Inlined so the serverless function has no dependency on project root (../config)
const CHAT_MAX_MESSAGE_LENGTH = 1000;

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
      logEvent({
        event: 'chat_error',
        ip,
        status: 502,
        errorCode: 'MODEL_ERROR',
        message: errStr.slice(0, 200),
      });
      return res.status(502).json({
        error: {
          code: 'MODEL_ERROR',
          message: 'AI model is unavailable. Please try again later.',
        },
      });
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
