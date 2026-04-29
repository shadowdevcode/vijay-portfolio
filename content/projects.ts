/**
 * Projects / case studies (lead proof first, then strongest PM case studies)
 * Used by Projects section
 * Last synced with resume: 2026-04-29
 */

import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    title: 'ProductOS',
    subtitle: 'Live Beta · MacOS Desktop App',
    description:
      'PM decision operating system: ask one messy product question and get a cited decision brief in ~10 minutes.',
    tags: ['#Multi-agent', '#PM Tooling', '#0-to-1'],
    metrics: ['Live Beta', 'Beta Users Active', '~10 min to Decision Brief'],
    highlights: [
      'Planner, parallel evidence workers, and synthesizer cover App Store, G2, Reddit, HN, and more',
    ],
    caseStudyAvailable: false,
    segment: 'AI',
    link: 'https://productos.dev',
  },
  {
    title: 'WhatsApp: Smart Muting',
    subtitle: 'Teardown + PRD',
    description:
      'Category-based muting (Marketing vs Utility) to cut notification fatigue and reduce Block Business rates while keeping OTPs.',
    tags: ['#PRD', '#Product Strategy', '#UX Research'],
    metrics: ['Target: −15% Block Rate'],
    highlights: ['Segmented business messages; granular muting UX preserving OTPs'],
    caseStudyAvailable: true,
    segment: 'Consumer',
    link: 'https://vijaybsehgal.notion.site/WhatsApp-India-Smart-Muting-for-Business-Messages-Teardown-PRD-4113bc4217a34bbb865c4aaa4b7d84c9',
  },
  {
    title: 'GitHub-for-PMs Agent',
    subtitle: 'Builder Tool',
    description:
      'An AI agent that reads a PM case study and spits out a clean portfolio card. Built it because turning good work into visible work was taking too long.',
    tags: ['#AI Agent', '#Prototype', '#PromptChaining'],
    metrics: ['78% Activation', '~90% Time Reduction'],
    highlights: ['78% activation in 2 weeks vs 42% benchmark — PMs actually used it'],
    caseStudyAvailable: true,
    segment: 'AI',
    link: 'https://www.notion.so/vijaybsehgal/AI-PM-Portfolio-Generator-GitHub-for-PMs-26bf8aca882d80d4bcb1d31495dd4372?source=copy_link',
  },
  {
    title: 'Blinkit (QComm)',
    subtitle: 'Product Teardown',
    description:
      'AI-assisted cart from purchase history to reduce reorder friction for power users.',
    tags: ['#Growth Strategy', '#AI Feature', '#Quick-Commerce'],
    metrics: ['+15% 7-day Reorder', '+5% Basket Size'],
    highlights: ['Mapped purchase-to-reorder funnel; designed AI pre-fill smart cart'],
    caseStudyAvailable: true,
    segment: 'Quick Commerce',
    link: 'https://www.notion.so/vijaybsehgal/Product-Sense-Blinkit-Smart-Cart-Reducing-Reorder-Time-by-95-4m-10s-25af8aca882d81bc8c91eb7856407f87?source=copy_link',
  },
  {
    title: 'Rasoi Planner',
    subtitle: 'Personal Product · Built & Shipped',
    description:
      'Kitchen coordination app for Indian homes. The cook can tell the AI what ran out in Hindi or English, and the owner sees the pantry update in real time. Built and shipped solo because I wanted to solve a problem I actually had.',
    tags: ['#0-to-1', '#Consumer', '#AI Integration', '#Firebase', '#React'],
    metrics: ['Live Product', 'Dual-Role UX', 'Hindi + English AI'],
    highlights: [
      'Two separate roles with different views and permissions — owner plans meals, cook manages stock',
      'Natural language updates via Gemini so the cook never has to navigate a form',
    ],
    caseStudyAvailable: false,
    segment: 'Consumer',
    link: 'https://github.com/shadowdevcode/Rasoi-Planner',
  },
  {
    title: 'PaiseWise',
    subtitle: 'Personal Finance Tracker · Built Solo',
    description:
      'Built to solve my own problem: Gmail receipts scattered, no consolidated spending view. Auto-imports UPI, credit card, debit, and net banking alerts from 20+ Indian bank email formats; categorizes into 17 spend buckets. AI advisor "Artha" answers natural-language questions like "Where am I wasting money?"',
    tags: ['#0-to-1', '#AI Integration', '#FullStack', '#Gmail OAuth'],
    metrics: ['20+ Bank Formats', 'AI Advisor "Artha"', 'Live on Vercel'],
    highlights: [
      'Parsed 20+ Indian bank email formats from scratch — no SDK, pure regex + LLM classification',
      'Artha AI advisor has full transaction context — answers natural-language finance questions',
    ],
    caseStudyAvailable: false,
    segment: 'AI',
    link: 'https://github.com/shadowdevcode/paisewise',
  },
  {
    title: 'Swish Quick-Commerce',
    subtitle: 'Retention Pilot',
    capstone: 'Airtribe Capstone · 9/10 · Industry PM Reviewed',
    description:
      'Post-order UX redesign with habit hooks and reorder nudges. Doubled 7-day reorder from 12%.',
    tags: ['#Retention', '#UX Research', '#Growth'],
    metrics: ['2× Reorder Rate', '+12pp Retention'],
    highlights: ['User interviews (n=15); habit-forming nudge system'],
    caseStudyAvailable: true,
    segment: 'Quick Commerce',
    link: 'https://www.notion.so/vijaybsehgal/Swish-Retention-Post-Order-Experience-from-12-to-25-25af8aca882d80f78959d111f801f3f0?source=copy_link',
  },
  {
    title: 'The Digital Health Coach',
    subtitle: 'AI-First Health Platform',
    description:
      'Hybrid AI + human accountability for habit formation. >40% W4 retention, 8% paid conversion.',
    tags: ['#GenAI', '#HealthTech', '#0-to-1'],
    metrics: ['>40% W4 Retention', '8% Paid Conv.'],
    highlights: ['AI chat onboarding — 3× completion vs forms'],
    caseStudyAvailable: true,
    segment: 'HealthTech',
    link: 'https://vijaybsehgal.notion.site/The-Digital-Health-Coach-145c0cb389634f28bf18242bad389dc3',
  },
];
