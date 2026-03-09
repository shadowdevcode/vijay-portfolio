/**
 * Projects / case studies
 * Used by Projects section
 */

import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    title: 'AI Product Operating System',
    subtitle: 'Builder Infrastructure',
    description:
      'A 14-stage, 16-agent workflow engine that lets a solo PM ship validated MVPs without an engineering team. Every completed project writes its failures back as enforced guardrails, making each build faster and more reliable than the last.',
    tags: ['#AI Agents', '#Systems Thinking', '#Product Ops'],
    metrics: ['3 Products Shipped', '0 Engineers', 'Self-Improving'],
    highlights: [
      'Shipped 3 full products end-to-end: InboxPulse, AI Finance Advisor, AI PM Portfolio Generator',
      'Postmortem-to-learning loop enforces rules from past failures into future builds automatically',
    ],
    caseStudyAvailable: true,
    segment: 'AI',
    link: 'https://www.notion.so/vijaybsehgal/AI-Product-Operating-System-Shipping-MVPs-Without-an-Engineering-Team-31ef8aca882d808d9a77f2d424006b9e?source=copy_link',
  },
  {
    title: 'GitHub-for-PMs Agent',
    subtitle: 'Builder Tool',
    description:
      'Built a working AI Agent that auto-summarizes case studies and generates portfolio visuals. Functional prototype using prompt chaining on Replit.',
    tags: ['#AI Agent', '#Prototype', '#PromptChaining'],
    metrics: ['78% Activation', '90% Faster Builds'],
    highlights: [
      'Prompt-chained AI pipeline: input case study → structured summary → visual portfolio card',
      'Reduced PM portfolio creation time from hours to minutes',
    ],
    caseStudyAvailable: true,
    segment: 'AI',
    link: 'https://www.notion.so/vijaybsehgal/AI-PM-Portfolio-Generator-GitHub-for-PMs-26bf8aca882d80d4bcb1d31495dd4372?source=copy_link',
  },
  {
    title: 'Swish Quick-Commerce',
    subtitle: 'Retention Pilot',
    capstone: 'Airtribe Capstone · 9/10 · Industry PM Reviewed',
    description:
      'Redesigned post-order experience through targeted UX flows, nudges, and habit hooks to solve low repeat-engagement in quick-commerce.',
    tags: ['#Retention', '#UX Research', '#Growth'],
    metrics: ['2x Reorder Rate', '+12pp Retention'],
    highlights: [
      'Identified 3 key drop-off points in post-order flow via user interviews (n=15)',
      'Designed habit-forming nudge system with reorder triggers and social proof',
    ],
    caseStudyAvailable: true,
    segment: 'Quick Commerce',
    link: 'https://www.notion.so/vijaybsehgal/Swish-Retention-Post-Order-Experience-from-12-to-25-25af8aca882d80f78959d111f801f3f0?source=copy_link',
  },
  {
    title: 'Blinkit Growth Teardown',
    subtitle: 'Product Teardown',
    description:
      "Reverse-engineered Blinkit's purchase history flow and designed an AI pre-fill feature concept. Projected impact modelled from user research.",
    tags: ['#Growth Strategy', '#AI Feature', '#Quick-Commerce'],
    metrics: ['Projected +25% Conv.', 'AI Pre-fill Design'],
    highlights: [
      'Mapped full purchase-to-reorder funnel identifying 95% time reduction opportunity',
      'Designed AI-powered smart cart that pre-fills from purchase history',
    ],
    caseStudyAvailable: true,
    segment: 'Quick Commerce',
    link: 'https://www.notion.so/vijaybsehgal/Product-Sense-Blinkit-Smart-Cart-Reducing-Reorder-Time-by-95-4m-10s-25af8aca882d81bc8c91eb7856407f87?source=copy_link',
  },
  {
    title: 'WhatsApp: Smart Muting',
    subtitle: 'Teardown + PRD',
    description:
      "Tackles notification fatigue for users in India by introducing category-based muting (Marketing vs. Utility) to reduce 'Block Business' rates while retaining critical OTPs.",
    tags: ['#PRD', '#Product Strategy', '#UX Research'],
    metrics: ['Target: -15% Block Rate'],
    highlights: [
      'Segmented business messages into Marketing vs Utility categories',
      'Designed granular muting UX preserving OTP/transaction notifications',
    ],
    caseStudyAvailable: true,
    segment: 'Consumer',
    link: 'https://vijaybsehgal.notion.site/WhatsApp-India-Smart-Muting-for-Business-Messages-Teardown-PRD-4113bc4217a34bbb865c4aaa4b7d84c9',
  },
  {
    title: 'The Digital Health Coach',
    subtitle: 'AI-First Health Platform',
    description:
      'A hybrid health coaching platform for urban professionals, combining AI-driven meal logging and chat onboarding with a human accountability layer to ensure habit formation and reduce churn.',
    tags: ['#GenAI', '#HealthTech', '#0-to-1'],
    metrics: ['>40% W4 Retention', '8% Paid Conv.'],
    highlights: [
      'AI chat onboarding replaced traditional forms — 3x completion rate',
      'Hybrid AI + human coach model reduced churn by keeping accountability high',
    ],
    caseStudyAvailable: true,
    segment: 'HealthTech',
    link: 'https://vijaybsehgal.notion.site/The-Digital-Health-Coach-145c0cb389634f28bf18242bad389dc3',
  },
];
