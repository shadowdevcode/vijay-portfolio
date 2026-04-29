# Vijay Sehgal — AI Product Manager Portfolio

A modern, recruiter-optimized portfolio built with **React 19 + Vite + Tailwind CSS**. Features an AI chat assistant (powered by Google Gemini), structured proof-of-impact metrics, filterable case studies, and a clear conversion funnel.

**Live site:** _deploy via Vercel + custom domain_

---

## Quick Start

```bash
# 1. Install dependencies
bun install

# 2. Set up environment variables
cp .env.example .env
# Edit .env → add your GEMINI_API_KEY (get one at https://aistudio.google.com)

# 3. Start the dev server (chatbot works locally via dev middleware)
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Tech Stack

| Layer         | Technology                                  |
| ------------- | ------------------------------------------- |
| **Framework** | React 19 + TypeScript                       |
| **Build**     | Vite 5                                      |
| **Styling**   | Tailwind CSS 3 (local pipeline, not CDN)    |
| **AI Chat**   | Google Gemini 2.5 Flash (server-side proxy) |
| **Icons**     | Lucide React                                |
| **Hosting**   | Vercel (serverless functions for API)       |

---

## Project Structure

```
vijay-portfolio/
├── api/                        # Vercel serverless functions (server-side only)
│   └── chat.ts                 #   POST /api/chat — Gemini proxy with rate limiting
├── components/                 # React UI components
│   ├── Hero.tsx                #   Landing: name, title, roles, availability, CTAs
│   ├── ProofOfImpact.tsx       #   Compact metric cards (before → after)
│   ├── Projects.tsx            #   Case studies with segment filter chips
│   ├── Experience.tsx          #   Work timeline with impact bullets
│   ├── Skills.tsx              #   Filterable skill tags by category
│   ├── Education.tsx           #   Degrees (cards) + certifications (inline badges)
│   ├── Blog.tsx                #   Writing & insights feed
│   ├── ContactCTA.tsx          #   Conversion: call booking, email, resume download
│   ├── ChatWidget.tsx          #   Floating AI chat assistant
│   ├── Navbar.tsx              #   Floating bottom nav with scroll-spy
│   ├── Footer.tsx              #   Footer with social links
│   └── ErrorBoundary.tsx       #   React error boundary
├── data/
│   └── system-prompt.ts        #   Shared chatbot prompt (dev + prod use same)
├── services/
│   └── geminiService.ts        #   Client-side chat service (calls /api/chat)
├── constants.tsx               #   All portfolio data — EDIT THIS TO UPDATE CONTENT
├── types.ts                    #   TypeScript interfaces for all data models
├── App.tsx                     #   Root component (section ordering + scroll spy)
├── index.tsx                   #   React DOM entry point
├── index.html                  #   HTML shell with SEO meta + structured data
├── index.css                   #   Tailwind directives + custom animations
├── tailwind.config.js          #   Tailwind theme config
├── postcss.config.js           #   PostCSS pipeline
├── vite.config.ts              #   Vite build + dev chat middleware
├── vercel.json                 #   Vercel SPA routing config
├── public/
│   ├── Gemini-headshot.png     #   Profile photo (optimize to < 100 KB)
│   ├── resume.pdf              #   (You add this) Downloadable resume
│   ├── sitemap.xml             #   SEO sitemap
│   └── robots.txt              #   Crawler directives
├── .env.example                #   Env variable template
├── .env                        #   (Gitignored) Your actual API key
├── CONTRIBUTING.md             #   Content refresh cadence + checklists
└── package.json
```

### Section Order (in `App.tsx`)

The page is structured for a **recruiter scan flow** — proof of work comes first:

```
Hero → Proof of Impact → Case Studies → Work Experience → Skills → Education → Writing → Contact CTA
```

Nav order matches: **Home → About → Projects → Work → Skills → Writing**

---

## How to Update Content

**All portfolio data lives in one file:** [`constants.tsx`](constants.tsx)

### Adding a new case study

Add an entry to the `PROJECTS` array:

```tsx
{
  title: "Project Name",
  subtitle: "Type",
  description: "One-line description...",
  tags: ["#Tag1", "#Tag2"],
  metrics: ["Metric 1", "Metric 2"],
  highlights: ["Bullet 1", "Bullet 2"],
  segment: "AI",               // Used for filter chips
  caseStudyAvailable: true,
  link: "https://notion.so/..."
}
```

### Adding a new impact metric

Add to the `IMPACT_METRICS` array:

```tsx
{
  label: "Metric Name",
  baseline: "Before state",
  action: "What you did",
  result: "After state",
  confidence: "Measured",        // "Measured" | "Estimated" | "Projected"
  source: "Company Name",
}
```

### Adding a blog post

Add to `BLOG_POSTS` with `title`, `excerpt`, `date`, `readTime`, `tags`, `link`, and `source`.

### Adding your resume PDF

Place your resume at **`public/resume.pdf`**. The "Download Resume" button in Hero and ContactCTA is already wired to `/resume.pdf`.

---

## Environment Variables

| Variable         | Required | Description                                                                                                                                   |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `GEMINI_API_KEY` | Yes      | Google Gemini API key. **Server-side only** — never exposed to the browser. In dev, read from `.env`. In production, set in Vercel dashboard. |

---

## Architecture: How the AI Chat Works

```
┌─ Development (bun run dev) ─────────────────────┐
│                                                  │
│  Browser → geminiService.ts → fetch('/api/chat') │
│                    ↓                             │
│  Vite dev middleware (vite.config.ts)             │
│     ├── Reads GEMINI_API_KEY from .env            │
│     ├── Calls Gemini SDK directly                 │
│     └── Returns { reply }                         │
└──────────────────────────────────────────────────┘

┌─ Production (Vercel) ───────────────────────────┐
│                                                  │
│  Browser → geminiService.ts → fetch('/api/chat') │
│                    ↓                             │
│  api/chat.ts (Vercel Serverless Function)        │
│     ├── Validates input (non-empty, <1000 chars) │
│     ├── Rate limits per IP (10 req/min)           │
│     ├── Reads GEMINI_API_KEY from env vars        │
│     ├── Calls Gemini 2.5 Flash                    │
│     └── Returns { reply }                         │
└──────────────────────────────────────────────────┘

Both use the same system prompt from data/system-prompt.ts
```

The API key **never** reaches the browser in either environment.

---

## Deployment (Vercel)

1. Push to GitHub.
2. Connect repo to [Vercel](https://vercel.com).
3. In Vercel dashboard → **Settings → Environment Variables**:
   - Add `GEMINI_API_KEY` = your Gemini API key.
4. Deploy. Vercel auto-detects the Vite build and `/api` serverless functions.

For a custom domain:

- Go to **Vercel → Settings → Domains** → Add your domain and follow DNS instructions.

---

## Scripts

| Command           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `bun run dev`     | Start local dev server (port 5173) with chat middleware |
| `bun run build`   | Production build to `dist/`                             |
| `bun run preview` | Preview the production build locally                    |

---

## License

© 2026 Vijay Sehgal. All rights reserved.
