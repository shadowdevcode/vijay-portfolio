/**
 * geminiService.ts — Client-Side Chat Service
 * =============================================
 * Sends user messages to the backend /api/chat endpoint
 * which proxies them to the Gemini API. This keeps the
 * API key server-side and never exposes it to the browser.
 *
 * Usage:
 *   import { sendMessageToGemini } from './services/geminiService';
 *   const reply = await sendMessageToGemini("Tell me about your projects");
 */

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });
    const contentType = response.headers.get('content-type') || '';
    const text = await response.text();
    let data: { reply?: string; error?: { code?: string; message?: string } };
    try {
      data = text.length > 0 && contentType.includes('application/json') ? JSON.parse(text) : {};
    } catch {
      // Non-JSON response (e.g. HTML 404/502 from Vercel) — avoid generic "connecting" message
      if (!response.ok) {
        if (response.status === 404) {
          return "The chat API isn't available. Please ensure the deployment includes the /api/chat endpoint.";
        }
        if (response.status >= 500) {
          return "I'm having trouble connecting to the AI service. Please try again later.";
        }
      }
      return "I'm having trouble connecting right now. Please try again in a moment.";
    }

    if (!response.ok) {
      // Use the structured error from the API
      const errorMessage = data?.error?.message || 'Something went wrong.';

      if (response.status === 429) {
        return "I'm receiving too many requests right now. Please try again in a minute.";
      }
      if (response.status === 502) {
        return "I'm having trouble connecting to the AI service. Please try again later.";
      }

      return errorMessage;
    }

    return data.reply || "I didn't get a response regarding that.";
  } catch (error) {
    console.error('Chat service error:', error);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
};
