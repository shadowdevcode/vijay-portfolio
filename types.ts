/**
 * types.ts — TypeScript Interfaces
 * ==================================
 * Defines the shape of every data structure used across
 * the portfolio. All content in constants.tsx is typed
 * against these interfaces.
 *
 * Interfaces:
 *   SocialLink   → Email, LinkedIn, GitHub, Resume links
 *   Job          → Work experience entries
 *   Project      → Case study / project cards
 *   Skill        → Skill tags (name + category)
 *   Education    → Degrees, fellowships, certifications
 *   BlogPost     → Blog / writing entries
 *   ChatMessage  → Chat widget message bubbles
 *   ImpactMetric → Proof of Impact cards
 *   NowNextItem  → (Deferred) Current activity items
 *   HireInfo     → Roles, locations, availability
 */
import { LucideIcon } from 'lucide-react';

// ---- Social / Contact ----
export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

// ---- Experience ----
export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description?: string;
  context?: string;
  impactBullets?: string[];
  achievements?: string[];
  type: 'Remote' | 'On Site' | 'Hybrid';
  featured?: boolean;
  badges?: string[];
  link?: string;
}

// ---- Projects / Case Studies ----
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics?: string[];
  highlights?: string[];
  link?: string;
  image?: string;
  caseStudyAvailable?: boolean;
  capstone?: string;
  /** Market segment for filter chips (e.g. "Quick Commerce", "EdTech") */
  segment?: string;
}

// ---- Skills ----
export type SkillCategory = 'Product' | 'Execution' | 'Data/Tech';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  featured?: boolean;
}

// ---- Education ----
export interface Education {
  degree: string;
  institution: string;
  period: string;
  highlight?: string;
  location?: string;
  type: 'degree' | 'fellowship' | 'certification';
  credentialUrl?: string;
}

// ---- Blog ----
export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link?: string;
  source?: 'linkedin' | 'medium' | 'blog';
  featured?: boolean;
}

// ---- Chat ----
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// ---- Proof of Impact (new) ----
export interface ImpactMetric {
  /** Short label, e.g. "Activation Rate" */
  label: string;
  /** Where you started: "60% completion" */
  baseline: string;
  /** What you did: "Guided onboarding redesign" */
  action: string;
  /** The outcome: "78% completion" */
  result: string;
  /** How confident is this number? */
  confidence: 'Measured' | 'Estimated' | 'Projected';
  /** Which company / project this came from */
  source: string;
}

// ---- Now / Next (new) ----
export interface NowNextItem {
  /** Category label */
  category: 'Learning' | 'Building' | 'Shipping' | 'Exploring' | 'At Work' | 'Outside work';
  /** What you're doing */
  text: string;
}

// ---- Hire Strip (new) ----
export interface HireInfo {
  /** Target role titles */
  roles: string[];
  /** Preferred cities / modes */
  locations: string[];
  /** Notice period / availability */
  availability: string;
  /** Scheduling link (cal.com, calendly, etc.) */
  calLink: string;
}
