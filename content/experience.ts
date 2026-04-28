/**
 * Work experience — job timeline
 * Used by Experience section
 * Last synced with resume: 2026-04-29
 */

import type { Job } from '../types';

export const EXPERIENCE: Job[] = [
  {
    company: 'Infinity Learn',
    role: 'Product Manager — AI Innovation Labs',
    period: 'Apr 2026 – Present',
    location: 'Gurugram',
    type: 'Hybrid',
    logo: 'stealth',
    featured: true,
    badges: ['AI Innovation', 'EdTech', 'Full Circle'],
    context:
      'Leading product for Full Circle inside Infinity Learn\'s AI Innovation Labs — defining scope, running user research, and shaping how AI earns its place in a student\'s workflow.',
    impactBullets: [
      'Early-stage: defining product scope, user research, and AI integration strategy for Full Circle',
    ],
    achievements: [],
  },
  {
    company: 'Independent PM Practice',
    role: 'Product Strategy, Prototyping & AI Workflows',
    period: '2025 – Apr 2026',
    location: 'Remote',
    type: 'Remote',
    logo: 'stealth',
    featured: false,
    badges: ['Industry Case Studies', 'AI Agents', 'Teardowns', 'Portfolio'],
    context:
      'Ran my own PM practice: shipped 3 products in 7 days using a self-built 16-agent AI OS — what would cost ₹30–50L and 3 months with a team cost ₹5k and one sprint.',
    impactBullets: [
      'Shipped 3 products in 7 days (AI Product OS); no engineering team',
      'Built this portfolio with Gemini chatbot, serverless API, recruiter-first UX',
    ],
    achievements: [],
    link: 'https://vijaybsehgal.notion.site/Vijay-s-Portfolio-25af8aca882d80bba710ec33c119b28e',
  },
  {
    company: "WhiteHat Jr (Byjus')",
    role: 'Product Owner: LMS & Curriculum',
    period: 'Nov 2020 – May 2022',
    location: 'Mumbai',
    type: 'Hybrid',
    logo: 'whitehat',
    context: "Owned the LMS and curriculum product at India's leading K-12 live coding platform (~150k students) during a hyper-growth phase.",
    impactBullets: [
      'Curriculum rollout: 10–15 → 5–7 days (−50%)',
      'Teacher onboarding: 60% → 78% completion',
      'Support tickets: −50%; CSAT +12.5% (~150k students)',
    ],
    achievements: [],
  },
  {
    company: 'Delta Learning',
    role: 'Founder & Head of Operations',
    period: 'Aug 2019 – Nov 2020',
    location: 'Haryana',
    type: 'Hybrid',
    logo: 'delta',
    context: 'Founded and built an offline EdTech startup from zero — reached 600+ students with project-based upskilling and ran it to ₹1.2 Cr ARR.',
    impactBullets: [
      '₹1.2 Cr ARR, ~30% net margin',
      'Completion ~80% vs ~60% benchmark',
    ],
    achievements: [],
  },
  {
    company: 'AcadView',
    role: 'Software Developer (Backend)',
    period: 'July 2018 – Aug 2019',
    location: 'Gurugram',
    type: 'On Site',
    logo: 'acadview',
    context: 'Backend developer at an EdTech upskilling platform (later acquired by Upgrad) — built core LMS features that went live for 200+ students.',
    impactBullets: [
      'CSAT ~25%; placement-ready ~80% across 2 cohorts (n≈250)',
    ],
    achievements: [],
  },
];
