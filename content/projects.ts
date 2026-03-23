/**
 * Projects / case studies (hero 3: WhatsApp, GitHub-for-PMs, Blinkit first)
 * Used by Projects section
 * Last synced with resume: 2025-03
 */

import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    title: 'WhatsApp: Smart Muting',
    subtitle: 'Teardown + PRD',
    description:
      'Category-based muting (Marketing vs Utility) to cut notification fatigue and reduce Block Business rates while keeping OTPs.',
    tags: ['#PRD', '#Product Strategy', '#UX Research'],
    metrics: ['Target: −15% Block Rate'],
    highlights: [
      'Segmented business messages; granular muting UX preserving OTPs',
    ],
    caseStudyAvailable: true,
    segment: 'Consumer',
    link: 'https://vijaybsehgal.notion.site/WhatsApp-India-Smart-Muting-for-Business-Messages-Teardown-PRD-4113bc4217a34bbb865c4aaa4b7d84c9',
  },
  {
    title: 'AI Product Operating System',
    subtitle: 'Builder Infrastructure',
    description:
      '12-stage, 16-agent workflow so a solo PM can ship MVPs without an engineering team. 3 products in 7 days.',
    tags: ['#AI Agents', '#Systems Thinking', '#Product Ops'],
    metrics: ['3 Products Shipped', '0 Engineers'],
    highlights: [
      'Postmortem-to-learning loop; each build improves the next',
    ],
    caseStudyAvailable: true,
    segment: 'AI',
    link: 'https://www.notion.so/vijaybsehgal/AI-Product-Operating-System-Shipping-MVPs-Without-an-Engineering-Team-31ef8aca882d808d9a77f2d424006b9e?source=copy_link',
  },
  {
    title: 'GitHub-for-PMs Agent',
    subtitle: 'Builder Tool',
    description:
      'AI agent that turns case studies into portfolio cards. ~90% faster portfolio creation; 78% activation (vs 42% benchmark) in 2 weeks.',
    tags: ['#AI Agent', '#Prototype', '#PromptChaining'],
    metrics: ['78% Activation', '~90% Time Reduction'],
    highlights: [
      'Prompt-chained pipeline: case study → summary → portfolio card',
    ],
    caseStudyAvailable: true,
    segment: 'AI',
    link: 'https://www.notion.so/vijaybsehgal/AI-PM-Portfolio-Generator-GitHub-for-PMs-26bf8aca882d80d4bcb1d31495dd4372?source=copy_link',
  },
  {
    title: 'Rasoi Planner',
    subtitle: 'Personal Product · Built & Shipped',
    description:
      'Household kitchen coordination app for Indian homes — owners plan meals, cooks track pantry in real time, and an AI assistant handles inventory updates in Hindi and English. Shipped solo from idea to live product.',
    tags: ['#0-to-1', '#Consumer', '#AI Integration', '#Firebase', '#React'],
    metrics: ['Live Product', 'Dual-Role UX', 'Hindi + English AI'],
    highlights: [
      'Gemini-powered natural language pantry updates — cooks just describe what ran out',
      'Role-based access: Owner plans meals, Cook manages inventory with distinct permissions',
      'Real-time sync via Firestore; deployed on Vercel',
    ],
    caseStudyAvailable: false,
    segment: 'Consumer',
    link: 'https://github.com/shadowdevcode/Rasoi-Planner',
  },
  {
    title: 'Blinkit (QComm)',
    subtitle: 'Product Teardown',
    description:
      "AI-assisted cart from purchase history to cut cognitive load for power users. Projected +15% 7-day reorder, +5% basket size.",
    tags: ['#Growth Strategy', '#AI Feature', '#Quick-Commerce'],
    metrics: ['+15% 7-day Reorder', '+5% Basket Size'],
    highlights: [
      'Mapped purchase-to-reorder funnel; designed AI pre-fill smart cart',
    ],
    caseStudyAvailable: true,
    segment: 'Quick Commerce',
    link: 'https://www.notion.so/vijaybsehgal/Product-Sense-Blinkit-Smart-Cart-Reducing-Reorder-Time-by-95-4m-10s-25af8aca882d81bc8c91eb7856407f87?source=copy_link',
  },
  {
    title: 'Swish Quick-Commerce',
    subtitle: 'Retention Pilot',
    capstone: 'Airtribe Capstone · 9/10 · Industry PM Reviewed',
    description:
      'Post-order UX redesign with habit hooks and reorder nudges. Doubled 7-day reorder from 12%.',
    tags: ['#Retention', '#UX Research', '#Growth'],
    metrics: ['2× Reorder Rate', '+12pp Retention'],
    highlights: [
      'User interviews (n=15); habit-forming nudge system',
    ],
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
    highlights: [
      'AI chat onboarding — 3× completion vs forms',
    ],
    caseStudyAvailable: true,
    segment: 'HealthTech',
    link: 'https://vijaybsehgal.notion.site/The-Digital-Health-Coach-145c0cb389634f28bf18242bad389dc3',
  },
  {
    title: 'PM DEX',
    subtitle: 'AI-Native PM Operating System',
    description:
      'Terminal-first career OS for PMs: persistent markdown memory, 13 slash commands, 8 mentor personas, multi-model routing (Sonnet/Opus/Haiku/Perplexity), and a self-improvement loop. Built and used daily.',
    tags: ['#AI Agents', '#Systems Design', '#PM Tooling'],
    metrics: ['13 Commands', '8 Mentor Personas', 'Daily Active Use'],
    highlights: [
      'Compounding memory: every session updates career context, pipeline, and interview feedback',
    ],
    caseStudyAvailable: false,
    segment: 'AI',
    link: 'https://www.notion.so/vijaybsehgal/AI-Product-Operating-System-Shipping-MVPs-Without-an-Engineering-Team-31ef8aca882d808d9a77f2d424006b9e?source=copy_link',
  },
];
