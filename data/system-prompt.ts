/**
 * System Prompt for the AI Chat Assistant
 * =========================================
 * This module re-exports the canonical SYSTEM_PROMPT defined in
 * api/system-prompt.ts so that non-API code (like vite.config.ts)
 * can continue importing from the original path.
 *
 * To update the prompt, edit api/system-prompt.ts.
 */

export { SYSTEM_PROMPT } from '../api/system-prompt';
