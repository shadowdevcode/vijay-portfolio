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
    // #region agent log
    fetch('http://127.0.0.1:7562/ingest/3992f3db-233a-4379-baf3-f531599e3b34',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d564b1'},body:JSON.stringify({sessionId:'d564b1',location:'geminiService.ts:pre-fetch',message:'before fetch',data:{url:'/api/chat'},timestamp:Date.now(),hypothesisId:'H1'})}).catch(()=>{});
    // #endregion
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });
    // #region agent log
    fetch('http://127.0.0.1:7562/ingest/3992f3db-233a-4379-baf3-f531599e3b34',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d564b1'},body:JSON.stringify({sessionId:'d564b1',location:'geminiService.ts:after-fetch',message:'after fetch',data:{status:response.status,ok:response.ok,contentType:response.headers.get('content-type')},timestamp:Date.now(),hypothesisId:'H2'})}).catch(()=>{});
    // #endregion
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
      // #region agent log
      fetch('http://127.0.0.1:7562/ingest/3992f3db-233a-4379-baf3-f531599e3b34',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d564b1'},body:JSON.stringify({sessionId:'d564b1',location:'geminiService.ts:!ok',message:'api error response',data:{status:response.status,errorCode:data?.error?.code,errorMessage:data?.error?.message},timestamp:Date.now(),hypothesisId:'H_err'})}).catch(()=>{});
      // #endregion
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
    // #region agent log
    const err = error instanceof Error ? error : new Error(String(error));
    fetch('http://127.0.0.1:7562/ingest/3992f3db-233a-4379-baf3-f531599e3b34',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d564b1'},body:JSON.stringify({sessionId:'d564b1',location:'geminiService.ts:catch',message:'catch',data:{name:err.name,message:err.message},timestamp:Date.now(),hypothesisId:'H1_H2_H5'})}).catch(()=>{});
    // #endregion
    console.error('Chat service error:', error);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
};
