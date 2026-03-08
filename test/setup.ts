import '@testing-library/jest-dom/vitest';

// Polyfill IntersectionObserver for jsdom
class IntersectionObserverMock {
  observe = () => null;
  disconnect = () => null;
  unobserve = () => null;
  root = null;
  rootMargin = '';
  thresholds = [];
}
globalThis.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver;

// Polyfill scrollIntoView for jsdom
Element.prototype.scrollIntoView = () => undefined;
