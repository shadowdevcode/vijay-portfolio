/**
 * Vite Configuration
 * ==================
 * - React plugin for JSX/TSX support
 * - Dev-only middleware that proxies /api/chat requests to
 *   the Gemini SDK so the chatbot works during local development.
 *   In production (Vercel), the /api/chat.ts serverless function
 *   handles this instead.
 *
 * The system prompt is shared via data/system-prompt.ts so
 * dev and prod give identical chatbot responses.
 */

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { SYSTEM_PROMPT } from './api/system-prompt';

export default defineConfig(({ mode }) => {
  // Load env vars (without VITE_ prefix) for server-side use
  const env = loadEnv(mode, process.cwd(), '');

  return {
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './test/setup.ts',
    },
    plugins: [
      react(),
      {
        name: 'gemini-dev-proxy',
        configureServer(server) {
          /**
           * Dev middleware: intercepts POST /api/chat and calls
           * the Gemini SDK directly (server-side, no key in browser).
           */
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({ error: { code: 'METHOD_NOT_ALLOWED', message: 'Use POST.' } })
              );
              return;
            }

            let body = '';
            req.on('data', (chunk: Buffer) => {
              body += chunk.toString();
            });
            req.on('end', async () => {
              try {
                const { message } = JSON.parse(body);

                if (!message || typeof message !== 'string' || !message.trim()) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(
                    JSON.stringify({
                      error: {
                        code: 'INVALID_INPUT',
                        message: 'A non-empty "message" is required.',
                      },
                    })
                  );
                  return;
                }

                const apiKey = env.GEMINI_API_KEY;
                if (!apiKey) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(
                    JSON.stringify({
                      error: { code: 'CONFIG_ERROR', message: 'GEMINI_API_KEY not set in .env' },
                    })
                  );
                  return;
                }

                // Dynamic import keeps the SDK out of the client bundle
                const { GoogleGenAI } = await import('@google/genai');
                const client = new GoogleGenAI({ apiKey });

                const response = await client.models.generateContent({
                  model: 'gemini-2.5-flash',
                  contents: message.trim(),
                  config: { systemInstruction: SYSTEM_PROMPT },
                });

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ reply: response.text || "I didn't get a response." }));
              } catch (error: unknown) {
                const err = error instanceof Error ? error : new Error(String(error));
                console.error('[Dev API] Gemini error:', err.message);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    error: {
                      code: 'DEV_ERROR',
                      message: 'Chat error in dev mode. Check terminal.',
                    },
                  })
                );
              }
            });
          });
        },
      },
    ],
  };
});
