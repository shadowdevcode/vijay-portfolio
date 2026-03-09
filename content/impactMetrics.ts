/**
 * Impact metrics — proof of impact cards
 * Used by ProofOfImpact section
 * Baselines use published industry benchmarks where available.
 */

import type { ImpactMetric } from '../types';

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    label: 'Teacher Onboarding Completion',
    baseline: '60% (industry avg for LMS onboarding)',
    action: 'Redesigned guided onboarding with step-by-step examples & SOPs',
    result: '78% completion (+18 pp)',
    confidence: 'Measured',
    source: 'WhiteHat Jr',
  },
  {
    label: 'Curriculum Rollout Speed',
    baseline: '10–15 days per release cycle',
    action: 'Operationalised SOPs & standardised review workflows',
    result: '5–7 days (−50%)',
    confidence: 'Measured',
    source: 'WhiteHat Jr',
  },
  {
    label: 'Student CSAT',
    baseline: '4.0 / 5.0 (pre-intervention)',
    action: 'A/B tested content sequencing & feedback loops for 12k students',
    result: '4.5 / 5.0',
    confidence: 'Measured',
    source: 'WhiteHat Jr',
  },
  {
    label: 'Course Completion Rate',
    baseline: '~60% (avg for online upskilling programs in India)',
    action: 'Project-based curriculum + train-the-trainer TA model',
    result: '75% (+15 pp)',
    confidence: 'Measured',
    source: 'Delta Learning',
  },
  {
    label: 'Post-Order Retention',
    baseline: '~13% D30 (typical quick-commerce reorder rate)',
    action: 'Designed habit hooks, reorder nudges & social proof triggers',
    result: '+12 pp retention, 2× reorder rate',
    confidence: 'Estimated',
    source: 'Swish (Capstone)',
  },
  {
    label: 'Products Shipped (Solo PM, No Engineering Team)',
    baseline: '0 (ideas blocked without eng capacity)',
    action:
      'Built 14-stage, 16-agent AI Product OS; each project writes postmortem lessons back as enforced rules for future builds',
    result: '3+ products shipped end-to-end; system improves with every cycle — more in progress',
    confidence: 'Measured',
    source: 'AI Product OS (Personal)',
  },
];
