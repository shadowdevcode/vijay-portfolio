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

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics?: string[];
  link?: string;
  image?: string;
  caseStudyAvailable?: boolean;
  capstone?: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  highlight?: string;
  location?: string;
  type: 'degree' | 'fellowship' | 'certification';
  credentialUrl?: string;
}

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

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}