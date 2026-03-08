/**
 * constants.tsx — Portfolio Data Aggregator
 * ==========================================
 * Re-exports content from domain-specific modules in content/.
 * SOCIAL_LINKS attaches React icons here (decoupled from pure data).
 *
 * To update site content, edit files in content/:
 *   content/personalInfo.ts   → Hero, ContactCTA, Footer
 *   content/socialLinks.ts   → raw links (icons added here)
 *   content/experience.ts     → Experience section
 *   content/projects.ts      → Projects section
 *   content/skills.ts       → Skills section
 *   content/education.ts     → Education section
 *   content/blog.ts         → Blog section
 *   content/impactMetrics.ts → ProofOfImpact section
 *   content/hireInfo.ts     → HireStrip, ContactCTA
 *   content/nowNext.ts      → NowNext section
 */
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import type { SocialLink } from './types';
import { PERSONAL_INFO as PI } from './content/personalInfo';
import { SOCIAL_LINKS_RAW } from './content/socialLinks';
import { EXPERIENCE } from './content/experience';
import { PROJECTS } from './content/projects';
import { SKILLS } from './content/skills';
import { EDUCATION_DATA } from './content/education';
import { BLOG_POSTS } from './content/blog';
import { IMPACT_METRICS } from './content/impactMetrics';
import { HIRE_INFO } from './content/hireInfo';
import { NOW_NEXT } from './content/nowNext';

const ICON_MAP: Record<string, typeof Mail> = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Resume: FileText,
};

export const PERSONAL_INFO = PI;

export const SOCIAL_LINKS: SocialLink[] = SOCIAL_LINKS_RAW.map((link) => ({
  ...link,
  icon: ICON_MAP[link.name] ?? Mail,
}));

export {
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  EDUCATION_DATA,
  BLOG_POSTS,
  IMPACT_METRICS,
  HIRE_INFO,
  NOW_NEXT,
};
