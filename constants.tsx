import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Code, 
  Database, 
  Layout, 
  Brain, 
  Briefcase,
  Rocket,
  LineChart,
  Users
} from 'lucide-react';
import { Job, Project, Skill, SocialLink, BlogPost } from './types';

// ==========================================
// SETUP INSTRUCTIONS
// ==========================================
// 1. Resume: You can use a hosted link (Google Drive, Dropbox, etc) OR a local file.
//    - If using a Link: Paste the URL below. It will open in a new tab.
//    - If using a File: Place 'resume.pdf' in the 'public' folder and use "/resume.pdf".
// 2. Avatar: Replace the 'avatar' URL with your photo URL.
// 3. Socials: Update the links below.
// ==========================================

export const PERSONAL_INFO = {
  name: "Vijay Sehgal",
  title: "AI Product Manager & Builder",
  location: "Gurugram, India",
  email: "vijay.sehgal@example.com", // Placeholder
  phone: "+91-6362057001",
  summary: "AI Product Management Professional (5+ years) with engineering, founder, and product-operations background. I deliver activation (+78%) and retention (+12 pp) gains across 0-1 AI/consumer products and EdTech platforms. Transitioning into APM/PM roles in consumer tech with proof-of-work across AI workflow automation and growth product use cases.",
  // TODO: Replace with your actual photo URL or local file path (e.g., "/vijay.jpg")
  avatar: "https://raw.githubusercontent.com/shadowdevcode/vijay-portfolio/refs/heads/main/Gemini-headshot.png?token=GHSAT0AAAAAADQTEUP4MXUK5VFXWBWTBPJ62J67TUA&q=80&w=1000&auto=format&fit=crop", 
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: Linkedin }, 
  { name: "GitHub", url: "https://github.com/your-username", icon: Github }, 
  // TODO: Paste your hosted Resume Link here (e.g. "https://drive.google.com/...") OR keep "/resume.pdf"
  { name: "Resume", url: "/resume.pdf", icon: FileText }, 
];

export const EXPERIENCE: Job[] = [
  {
    company: "Stealth / Independent",
    role: "Product Builder & Product Management",
    period: "2022 - Present",
    location: "Remote",
    type: "Remote",
    logo: "stealth",
    featured: true,
    badges: ["Founder Mode", "AI Agents"],
    description: "Focused transition into PM. Built and shipped 6+ AI workflow prototypes for PM/creator communities. Achieved 78% activation in first 14 days for portfolio tools. Solved low repeat-engagement for Swish quick-commerce (2x reorders).",
    achievements: [] 
  },
  {
    company: "WhiteHat Jr (Byjus')",
    role: "Product Operations Lead: LMS & Curriculum",
    period: "Nov 2020 – May 2022",
    location: "Mumbai",
    type: "Remote",
    logo: "whitehat",
    description: "Reduced curriculum rollout time by 50% (10-15 to 5-7 days) by streamlining QA cycles. Improved teacher onboarding completion from 60% to 78% by redesigning training journeys. Cut support tickets by 50% by operationalizing SOPs.",
    achievements: []
  },
  {
    company: "Delta Learning",
    role: "Founder & Head of Operations",
    period: "Aug 2019 – Nov 2020",
    location: "Haryana",
    type: "Hybrid",
    logo: "delta",
    description: "Founded offline EdTech startup. Drove 1.2 crore ARR with 30% net margin. Launched offline upskilling project based program to 600+ concurrent students with 75% completion rate (vs 60% benchmark).",
    achievements: []
  }
];

export const PROJECTS: Project[] = [
  {
    title: "CarouselFlow",
    subtitle: "AI Agent Workflow",
    description: "Engineered a 'no-design' workflow using Replit Agents, transforming raw PRDs into branded visual assets instantly in 60s.",
    tags: ["#Replit", "#B2B SaaS", "#AI"],
    metrics: ["60s Gen Time", "Instant Branding"],
    caseStudyAvailable: true,
    link: "https://medium.com/@your-handle/carouselflow-case-study" // Add your actual link here
  },
  {
    title: "GitHub-for-PMs Agent",
    subtitle: "Portfolio Automation",
    description: "Built an AI Agent that auto-summarizes case studies and generates portfolio visuals. Cut portfolio build time by ~90% (45m to 5m).",
    tags: ["#Productivity", "#AI", "#PromptChaining"],
    metrics: ["90% Time Reduction", "78% Activation"],
    caseStudyAvailable: true,
    link: "#"
  },
  {
    title: "Jupiter SIP Habit MVP",
    subtitle: "Fintech Growth",
    description: "Solved novelty-drop and habit breaks through celebratory nudges and one-tap actions. Linked insights to rewards.",
    tags: ["#Fintech", "#Behavioral Design", "#Retention"],
    metrics: ["15-25% Est. Lift", "Habit Loops"],
    caseStudyAvailable: true,
    link: "#"
  },
  {
    title: "Swish Quick-Commerce",
    subtitle: "Retention Pilot",
    description: "Doubled D7 reorder rate (12% to 24%) through post-order engagement experiments and targeted UX flow changes.",
    tags: ["#Retention", "#UX Research", "#Growth"],
    metrics: ["2x Reorder Rate", "+12% Retention"],
    caseStudyAvailable: true,
    link: "#"
  }
];

// Skills mapped from "CORE SKILLS" in resume
export const SKILLS: Skill[] = [
  // Product
  { name: "Product Management", category: "Product" },
  { name: "User Research", category: "Product" },
  { name: "Discovery", category: "Product" },
  { name: "PRDs", category: "Product" },
  { name: "Product Roadmap", category: "Product" },
  { name: "Experimentation", category: "Product" },
  { name: "Metrics", category: "Product" },
  { name: "GTM Strategy", category: "Product" },
  { name: "OKRs", category: "Product" },

  // Execution
  { name: "Agile Delivery", category: "Execution" },
  { name: "AI Agents", category: "Execution" },
  { name: "Rapid Prototyping", category: "Execution" },
  { name: "Storytelling", category: "Execution" },
  { name: "Stakeholder Mgmt", category: "Execution" },
  { name: "Mentorship", category: "Execution" },
  { name: "Cross-functional Leadership", category: "Execution" },

  // Data/Tech
  { name: "Figma", category: "Data/Tech" },
  { name: "Miro", category: "Data/Tech" },
  { name: "Jira", category: "Data/Tech" },
  { name: "Mixpanel", category: "Data/Tech" },
  { name: "GA4", category: "Data/Tech" },
  { name: "MS Excel", category: "Data/Tech" },
  { name: "SQL (Basics)", category: "Data/Tech" },
  { name: "A/B Testing", category: "Data/Tech" },
  { name: "Wireframing", category: "Data/Tech" },
  { name: "Funnel Analysis", category: "Data/Tech" },
  { name: "LLMs", category: "Data/Tech" }
];

export const BLOG_POSTS: BlogPost[] = [
  // Example of a Medium/Blog link
  // {
  //   title: "The Future of PM Portfolios: AI-Driven & Dynamic",
  //   excerpt: "How I built an AI Agent that auto-summarizes case studies and generates portfolio visuals. Cut portfolio build time by ~90% (45m to 5m).",
  //   date: "2025-05-15",
  //   readTime: "5 min",
  //   tags: ["AI", "Career"],
  //   link: "https://medium.com/@your-handle/future-of-pm-portfolios"
  // },
  // {
  //   title: "Deconstructing Blinkit's 10-Minute Delivery UX",
  //   excerpt: "A deep dive into the psychological triggers and habit loops in quick commerce apps.",
  //   date: "2025-02-10",
  //   readTime: "8 min",
  //   tags: ["UX", "Product Teardown"],
  //   link: "#"
  // },
  ==========================================
  HOW TO ADD A LINKEDIN POST
  Copy the block below, uncomment it (remove //), and fill in your details.
  ==========================================
  {
    title: "My thoughts on the new Google maps new auto detects parking release",
    excerpt: "Google Maps - Auto-detects Your Parking Location.",
    date: "2025-06-20",
    readTime: "Post", // You can use "Post" instead of time for LinkedIn
    tags: ["LinkedIn", "AI Strategy"],
    link: "https://www.linkedin.com/posts/your-post-url"
  }
];
