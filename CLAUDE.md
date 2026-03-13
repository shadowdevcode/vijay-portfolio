# Project context (vijay-portfolio)

## Stack & commands
- Vite + React 19 + TypeScript + Tailwind. Dev: `npm run dev` (port 5173), build: `npm run build`, preview: `npm run preview`.
- Lint/format: `npm run lint`, `npm run lint:fix`, `npm run format`, `npm run format:check`.
- Unit: `npm run test` / `npm run test:watch` (Vitest). E2E: `npm run test:e2e`, `npm run test:e2e:ui` (Playwright).
- Playwright starts dev server automatically (baseURL http://localhost:5173); config: `playwright.config.ts`, tests in `e2e/`.

## Content & strategy
- Copy lives in `content/*.ts`: personalInfo, experience, education, projects, impactMetrics, hireInfo, nowNext, skills, socialLinks, blog. Edit these, not inline strings in components.
- Content/UX plan: `docs/portfolio-refresh-plan-merged.md`. Portfolio = conversion-first, proof-led; no career break on site (resume only).

## Testing
- E2E runs chromium, mobile (iPhone 12), tablet (iPad). Do not show "Career break" in Education UI; e2e asserts its absence.
