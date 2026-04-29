# Project context (vijay-portfolio)

## Stack & commands

- Vite + React 19 + TypeScript + Tailwind. Dev: `bun run dev` (port 5173), build: `bun run build`, preview: `bun run preview`.
- Lint/format: `bun run lint`, `bun run lint:fix`, `bun run format`, `bun run format:check`.
- Unit: `bun run test` / `bun run test:watch` (Vitest). E2E: `bun run test:e2e`, `bun run test:e2e:ui` (Playwright).
- Playwright starts dev server automatically (baseURL http://localhost:5173); config: `playwright.config.ts`, tests in `e2e/`.

## Content & strategy

- Copy lives in `content/*.ts`: personalInfo, experience, education, projects, impactMetrics, hireInfo, nowNext, skills, socialLinks, blog. Edit these, not inline strings in components.
- Content/UX plan: `docs/portfolio-refresh-plan-merged.md`. Portfolio = conversion-first, proof-led; no career break on site (resume only).

## Testing

- E2E runs chromium, mobile (iPhone 12), tablet (iPad). Do not show "Career break" in Education UI; e2e asserts its absence.
