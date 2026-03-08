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

    const data = await response.json();

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
