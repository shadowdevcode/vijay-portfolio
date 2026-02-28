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
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '../data/system-prompt';

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
