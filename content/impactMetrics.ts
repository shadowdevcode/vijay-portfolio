/**
 * Impact metrics — proof of impact cards (one-line baseline → result)
 * Used by ProofOfImpact section
 * Last synced with resume: 2025-03
 */

import type { ImpactMetric } from '../types';

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    label: 'Products Shipped (Solo PM, No Engineering Team)',
    baseline: '0 (blocked without eng)',
    action: 'AI Product OS',
    result: '3 products in 7 days',
    confidence: 'Measured',
    source: 'Independent Practice',
  },
  {
    label: 'Teacher Onboarding Completion',
    baseline: '60%',
    action: 'Guided onboarding + SOPs',
    result: '78% (+18 pp)',
    confidence: 'Measured',
    source: 'WhiteHat Jr',
  },
  {
    label: 'Curriculum Rollout Speed',
    baseline: '10–15 days',
    action: 'SOPs & review workflows',
    result: '5–7 days (−50%)',
    confidence: 'Measured',
    source: 'WhiteHat Jr',
  },
  {
    label: 'Student CSAT',
    baseline: '4.0 / 5.0',
    action: 'A/B tested sequencing',
    result: '4.5 / 5.0',
    confidence: 'Measured',
    source: 'WhiteHat Jr',
  },
  {
    label: 'Course Completion Rate',
    baseline: '~60% benchmark',
    action: 'Project-based curriculum',
    result: '~80% (+20 pp)',
    confidence: 'Measured',
    source: 'Delta Learning',
  },
  {
    label: 'Post-Order Retention (Quick-Commerce)',
    baseline: '~12% 7-day reorder',
    action: 'Habit hooks, reorder nudges',
    result: '2× reorder rate',
    confidence: 'Estimated',
    source: 'Swish (Capstone)',
  },
];
