/**
 * Education — degrees, fellowships, certifications (no career break on portfolio)
 * Used by Education section. Career break lives on resume only.
 * Last synced with resume: 2025-03
 */

import type { Education } from '../types';

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    institution: 'Kurukshetra University (HEC)',
    period: '2012 – 2016',
    highlight: 'Top 2% of the class | GPA 3.8/4.0 (All Rounder)',
    location: 'Haryana',
    type: 'degree',
  },
  {
    degree: 'AI-PM Launchpad Fellowship',
    institution: 'Airtribe',
    period: '2025',
    highlight: 'Top 3% (out of 150+ Fellows) | 9/10 Graduation Project (Swish)',
    type: 'fellowship',
    credentialUrl: 'https://www.airtribe.live/product-management/certificate/BPAGQ91T75AI',
  },
  {
    degree: 'GenAI: Vibe Coding, Prompt Engineering, AI Applications',
    institution: 'Superhuman, LinkedIn Learning, GrowthSchool',
    period: '2024 – 2025',
    highlight: 'AI productivity, GenAI for PM, MVP',
    type: 'certification',
    credentialUrl: 'https://education.superhuman.ai/certificates/dbkz2nh3fa',
  },
];
