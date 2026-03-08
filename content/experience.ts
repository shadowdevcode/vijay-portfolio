/**
 * Work experience — job timeline
 * Used by Experience section
 */

import type { Job } from '../types';

export const EXPERIENCE: Job[] = [
  {
    company: 'Independent PM Practice',
    role: 'AI Product Projects',
    period: '2025 - Present',
    location: 'Remote',
    type: 'Remote',
    logo: 'stealth',
    featured: true,
    badges: ['Industry Case Studies', 'AI Agents', 'Teardowns', 'Portfolio'],
    context:
      'Practising PM workflows across consumer tech and SaaS domains through structured case studies, prototypes, and AI-native tooling, reviewed by senior PMs and industry mentors',
    impactBullets: [
      'Diagnosed low repeat-purchase on Swish; redesigned post-order UX with nudges and habit hooks — projected 7-day reorder from 12% to 24% (2×)',
      "Reverse-engineered Blinkit's purchase history flow; designed AI pre-fill feature — projected +25% repeat conversion",
      'Completed 100+ mock PM interviews on Stellar Peers covering product sense, design, and execution',
      'Built this AI-powered portfolio website with a Gemini chatbot, serverless API, and recruiter-first UX',
    ],
    achievements: [],
    link: 'https://vijaybsehgal.notion.site/Vijay-s-Portfolio-25af8aca882d80bba710ec33c119b28e',
  },
  {
    company: "WhiteHat Jr (Byjus')",
    role: 'Product Operations Lead: LMS & Curriculum',
    period: 'Nov 2020 – May 2022',
    location: 'Mumbai',
    type: 'Hybrid',
    logo: 'whitehat',
    context: "India's leading K-12 live coding platform, 12k+ students",
    impactBullets: [
      'Curriculum rollout: 10-15 → 5-7 days (-50%)',
      'Teacher onboarding: 60% → 78% completion',
      'Support tickets: -50% (operationalised SOPs)',
      'CSAT: 4.0 → 4.5 for 12k students (A/B tested)',
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
    context: 'Founded offline EdTech, project-based upskilling for 600+ students',
    impactBullets: [
      'Revenue: ₹1.2 Cr ARR, 30% net margin',
      'Completion rate: 75% (vs 60% benchmark)',
      'TA efficiency: +20% via train-the-trainer program',
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
    context: 'EdTech upskilling graduates (Acquired by Upgrad)',
    impactBullets: [
      'Shipped Github verification & duplicate detection in LMS',
      'Verified placement rate: ~80% across 2 cohorts (n≈200)',
    ],
    achievements: [],
  },
];
