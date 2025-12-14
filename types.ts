import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string; // Identifier for the logo icon
  description?: string;
  achievements?: string[]; // Made optional as description might be the main focus
  type: 'Remote' | 'On Site' | 'Hybrid';
  featured?: boolean; // For the purple highlight
  badges?: string[]; // For things like "Building a Research Lab"
  link?: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics?: string[]; // E.g., "+78% Activation"
  link?: string;
  image?: string;
  caseStudyAvailable?: boolean;
}

// Updated to support the new Tag Cloud layout
export interface Skill {
  name: string;
  category: string;
  icon?: string; // Optional identifier for specific icons
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}