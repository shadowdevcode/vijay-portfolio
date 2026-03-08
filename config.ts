/**
 * config.ts — Centralized Tunable Values
 * =======================================
 * Magic numbers and thresholds used across the app.
 * Tweak here for easier product tuning.
 */

/** Chat widget: cooldown between messages (ms) */
export const CHAT_COOLDOWN_MS = 2000;

/** Chat API: max message length (chars) */
export const CHAT_MAX_MESSAGE_LENGTH = 1000;

/** Chat API: rate limit window (ms) */
export const RATE_LIMIT_WINDOW_MS = 60_000;

/** Chat API: max requests per IP per window */
export const RATE_LIMIT_MAX = 10;

/** Scroll spy: top offset (px) — section is "active" when rect.top >= this */
export const SCROLL_SPY_TOP_OFFSET = -150;

/** Scroll spy: visibility ratio — section active when rect.top <= innerHeight / this */
export const SCROLL_SPY_VISIBILITY_RATIO = 2.5;

/** Intersection observer: threshold for fade-in (0–1) */
export const INTERSECTION_THRESHOLD = 0.1;

/** Intersection observer: root margin (e.g. "0px 0px -50px 0px") */
export const INTERSECTION_ROOT_MARGIN = '0px 0px -50px 0px';
