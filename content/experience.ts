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
      'AI Innovation Labs at Infinity Learn — building Full Circle, an AI-native product initiative inside one of India\'s leading K-12 EdTech platforms.',
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
      'Solo PM shipping products via a 12-stage AI Product OS; equivalent to 5 people, 3 months, ₹30–50L — actual: one PM, ₹5k API spend.',
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
    context: "India's leading K-12 live coding platform — ~150k students",
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
    context: 'Founded offline EdTech, 600+ students, project-based upskilling',
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
    context: 'EdTech upskilling (Acquired by Upgrad)',
    impactBullets: [
      'CSAT ~25%; placement-ready ~80% across 2 cohorts (n≈250)',
    ],
    achievements: [],
  },
];
