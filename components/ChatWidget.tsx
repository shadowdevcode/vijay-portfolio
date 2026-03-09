/**
 * ChatWidget — Floating AI Chat Assistant
 * ==========================================
 * A floating chat panel (bottom-right) powered by Google Gemini.
 * Users can ask questions about Vijay's experience, skills,
 * and projects. Includes quick-reply suggestions and a
 * typing indicator.
 *
 * API flow: sends messages to /api/chat (see geminiService.ts).
 * In dev mode, the Vite middleware handles this; in production,
 * the Vercel serverless function does.
 *
 * Accessibility: role="dialog", aria-modal, focus trapping,
 * focus restoration to trigger on close, Escape to close.
 */
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { CHAT_COOLDOWN_MS } from '../config';

const QUICK_REPLIES = [
  'What metrics did you impact?',
  'Tell me about your projects',
  'What tools do you use?',
];

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi! I'm Vijay's AI assistant. Ask me anything about his product experience, skills, or case studies.",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [lastSentAt, setLastSentAt] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Focus management: trap focus when open, restore when closed
  useEffect(() => {
    if (isOpen) {
      triggerRef.current?.blur();
      inputRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Focus trap: keep Tab/Shift+Tab within dialog
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;

      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      const visibleFocusables = focusables.filter((el) => el.offsetParent !== null);
      if (visibleFocusables.length === 0) return;

      const currentIndex = visibleFocusables.indexOf(document.activeElement as HTMLElement);
      if (currentIndex === -1) return;

      if (e.shiftKey) {
        if (currentIndex === 0) {
          e.preventDefault();
          visibleFocusables[visibleFocusables.length - 1]?.focus();
        }
      } else {
        if (currentIndex === visibleFocusables.length - 1) {
          e.preventDefault();
          visibleFocusables[0]?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText || isLoading) return;

    // Rate limiting
    const now = Date.now();
    if (now - lastSentAt < CHAT_COOLDOWN_MS) return;
    setLastSentAt(now);

    setInputValue('');
    setShowQuickReplies(false);
    setMessages((prev) => [...prev, { role: 'user', text: messageText }]);
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(messageText);
      setMessages((prev) => [...prev, { role: 'model', text: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Bold + URL rendering with HTML sanitization; URLs become clickable links
  const renderText = (text: string) => {
    const sanitized = text.replace(/<[^>]*>/g, '');
    const urlRegex = /(https?:\/\/[^\s<>"']+)/g;
    const segments = sanitized.split(urlRegex);
    return segments.map((segment, i) => {
      if (segment.match(/^https?:\/\//)) {
        return (
          <a
            key={i}
            href={segment}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-700 break-all"
          >
            {segment}
          </a>
        );
      }
      const parts = segment.split(/(\*\*[^*]+\*\*)/g);
      return (
        <React.Fragment key={i}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={j} className="font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-28 md:bottom-6 right-6 z-[60] bg-zinc-900 text-white p-4 rounded-full shadow-lg hover:bg-zinc-800 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-gentle-pulse ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open chat with Vijay's AI assistant"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Sparkles size={24} />
      </button>

      {isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-dialog-title"
          aria-describedby="chat-dialog-desc"
          className="fixed bottom-28 md:bottom-6 right-6 z-[70] w-[90vw] md:w-[400px] h-[520px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden"
        >
          {/* Header — branded gradient */}
          <div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-gradient-to-r from-zinc-900 to-zinc-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 id="chat-dialog-title" className="font-semibold text-sm text-white">
                  Ask Vijay&apos;s AI
                </h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-[10px] text-zinc-400">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-zinc-400 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            id="chat-dialog-desc"
            className="flex-1 overflow-y-auto p-4 space-y-3"
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
              >
                {msg.role === 'model' && (
                  <div className="shrink-0 w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center mt-1">
                    <Sparkles size={12} className="text-zinc-500" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-zinc-900 text-white rounded-br-sm'
                      : 'bg-zinc-100 text-zinc-800 rounded-bl-sm'
                  }`}
                >
                  {renderText(msg.text)}
                </div>
              </div>
            ))}

            {/* Quick reply chips */}
            {showQuickReplies && !isLoading && messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start gap-2">
                <div className="shrink-0 w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center mt-1">
                  <Sparkles size={12} className="text-zinc-500" />
                </div>
                <div className="bg-zinc-100 rounded-2xl px-4 py-3 rounded-bl-sm flex items-center gap-1 min-w-[60px] h-[40px]">
                  <div
                    className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  ></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-zinc-100 bg-zinc-50/50 shrink-0">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 border border-zinc-200 focus-within:border-zinc-400 focus-within:shadow-sm transition-all">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my experience..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-800 placeholder:text-zinc-400"
                aria-label="Message input"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isLoading}
                className="text-zinc-900 disabled:text-zinc-300 hover:text-blue-600 transition-colors"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-[10px] text-center text-zinc-400 mt-2">
              AI generated • Verify details in resume
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
