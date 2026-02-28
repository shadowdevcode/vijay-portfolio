/**
 * constants.tsx — Portfolio Data (Single Source of Truth)
 * ========================================================
 * ALL portfolio content lives here: personal info, experience,
 * projects, skills, education, blog posts, impact metrics,
 * and hire info.
 *
 * To update the site content, edit ONLY this file.
 * Each constant is strongly typed via types.ts.
 *
 * Sections:
 *   PERSONAL_INFO  → Hero section (name, title, summary)
 *   SOCIAL_LINKS   → CTA buttons and footer links
 *   EXPERIENCE     → Work timeline cards
 *   PROJECTS       → Case study cards with filter chips
 *   SKILLS         → Skill tags grouped by category
 *   EDUCATION_DATA → Degrees, fellowships, certifications
 *   BLOG_POSTS     → Writing & insights feed
 *   IMPACT_METRICS → Proof of Impact metric cards
 *   HIRE_INFO      → Roles, locations, availability, cal link
 */
import {
  Github,
  Linkedin,
  Mail,
  FileText,
} from 'lucide-react';
import { Job, Project, Skill, SocialLink, BlogPost, Education, ImpactMetric, NowNextItem, HireInfo } from './types';

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
  email: "vijay.b.sehgal@gmail.com",
  phone: "+91-6362057001",
  summary: "PM with a builder's background: shipped LMS features as a backend developer, founded an EdTech startup to ₹1.2 Cr ARR at 30% net margin, and led product-ops at WhiteHat Jr during hyper-growth. Completed Airtribe AI PM Fellowship in 2024, graduating top 3% of 150+ fellows.",
  status: "Open to PM roles in Consumer Tech & B2B SaaS",
  avatar: "/Gemini-headshot.png",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/vijay-b-sehgal/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/shadowdevcode", icon: Github },
  { name: "Resume", url: "https://docs.google.com/document/d/1N8BkbgLhFauwj2cCHxCQa6_ICtIetR-DxGcZ_eHxS-c/edit?tab=t.0#heading=h.9z02xaghie3r", icon: FileText },
];

export const EXPERIENCE: Job[] = [
  {
    company: "Independent PM Practice",
    role: "AI Product Projects",
    period: "2025 - Present",
    location: "Remote",
    type: "Remote",
    logo: "stealth",
    featured: true,
    badges: ["Industry Case Studies", "AI Agents", "Teardowns", "Portfolio"],
    context: "Practising PM workflows across consumer tech and SaaS domains through structured case studies, prototypes, and AI-native tooling, reviewed by senior PMs and industry mentors",
    impactBullets: [
      "Diagnosed low repeat-purchase on Swish; redesigned post-order UX with nudges and habit hooks — projected 7-day reorder from 12% to 24% (2×)",
      "Reverse-engineered Blinkit's purchase history flow; designed AI pre-fill feature — projected +25% repeat conversion",
      "Completed 100+ mock PM interviews on Stellar Peers covering product sense, design, and execution",
      "Built this AI-powered portfolio website with a Gemini chatbot, serverless API, and recruiter-first UX"
    ],
    achievements: [],
    link: "https://vijaybsehgal.notion.site/Vijay-s-Portfolio-25af8aca882d80bba710ec33c119b28e"
  },
  {
    company: "WhiteHat Jr (Byjus')",
    role: "Product Operations Lead: LMS & Curriculum",
    period: "Nov 2020 – May 2022",
    location: "Mumbai",
    type: "Hybrid",
    logo: "whitehat",
    context: "India's leading K-12 live coding platform, 12k+ students",
    impactBullets: [
      "Curriculum rollout: 10-15 → 5-7 days (-50%)",
      "Teacher onboarding: 60% → 78% completion",
      "Support tickets: -50% (operationalised SOPs)",
      "CSAT: 4.0 → 4.5 for 12k students (A/B tested)"
    ],
    achievements: []
  },
  {
    company: "Delta Learning",
    role: "Founder & Head of Operations",
    period: "Aug 2019 – Nov 2020",
    location: "Haryana",
    type: "Hybrid",
    logo: "delta",
    context: "Founded offline EdTech, project-based upskilling for 600+ students",
    impactBullets: [
      "Revenue: ₹1.2 Cr ARR, 30% net margin",
      "Completion rate: 75% (vs 60% benchmark)",
      "TA efficiency: +20% via train-the-trainer program"
    ],
    achievements: []
  },
  {
    company: "AcadView",
    role: "Software Developer (Backend)",
    period: "July 2018 – Aug 2019",
    location: "Gurugram",
    type: "On Site",
    logo: "acadview",
    context: "EdTech upskilling graduates (Acquired by Upgrad)",
    impactBullets: [
      "Shipped Github verification & duplicate detection in LMS",
      "Verified placement rate: ~80% across 2 cohorts (n≈200)"
    ],
    achievements: []
  }
];

export const PROJECTS: Project[] = [
  {
    title: "GitHub-for-PMs Agent",
    subtitle: "Builder Tool",
    description: "Built a working AI Agent that auto-summarizes case studies and generates portfolio visuals. Functional prototype using prompt chaining on Replit.",
    tags: ["#AI Agent", "#Prototype", "#PromptChaining"],
    metrics: ["78% Activation", "90% Faster Builds"],
    highlights: [
      "Prompt-chained AI pipeline: input case study → structured summary → visual portfolio card",
      "Reduced PM portfolio creation time from hours to minutes"
    ],
    caseStudyAvailable: true,
    segment: "AI",
    link: "https://www.notion.so/vijaybsehgal/AI-PM-Portfolio-Generator-GitHub-for-PMs-26bf8aca882d80d4bcb1d31495dd4372?source=copy_link"
  },
  {
    title: "Swish Quick-Commerce",
    subtitle: "Retention Pilot",
    capstone: "Airtribe Capstone \u00b7 9/10 \u00b7 Industry PM Reviewed",
    description: "Redesigned post-order experience through targeted UX flows, nudges, and habit hooks to solve low repeat-engagement in quick-commerce.",
    tags: ["#Retention", "#UX Research", "#Growth"],
    metrics: ["2x Reorder Rate", "+12pp Retention"],
    highlights: [
      "Identified 3 key drop-off points in post-order flow via user interviews (n=15)",
      "Designed habit-forming nudge system with reorder triggers and social proof"
    ],
    caseStudyAvailable: true,
    segment: "Quick Commerce",
    link: "https://www.notion.so/vijaybsehgal/Swish-Retention-Post-Order-Experience-from-12-to-25-25af8aca882d80f78959d111f801f3f0?source=copy_link"
  },
  {
    title: "Blinkit Growth Teardown",
    subtitle: "Product Teardown",
    description: "Reverse-engineered Blinkit's purchase history flow and designed an AI pre-fill feature concept. Projected impact modelled from user research.",
    tags: ["#Growth Strategy", "#AI Feature", "#Quick-Commerce"],
    metrics: ["Projected +25% Conv.", "AI Pre-fill Design"],
    highlights: [
      "Mapped full purchase-to-reorder funnel identifying 95% time reduction opportunity",
      "Designed AI-powered smart cart that pre-fills from purchase history"
    ],
    caseStudyAvailable: true,
    segment: "Quick Commerce",
    link: "https://www.notion.so/vijaybsehgal/Product-Sense-Blinkit-Smart-Cart-Reducing-Reorder-Time-by-95-4m-10s-25af8aca882d81bc8c91eb7856407f87?source=copy_link"
  },
  {
    title: "WhatsApp: Smart Muting",
    subtitle: "Teardown + PRD",
    description: "Tackles notification fatigue for users in India by introducing category-based muting (Marketing vs. Utility) to reduce 'Block Business' rates while retaining critical OTPs.",
    tags: ["#PRD", "#Product Strategy", "#UX Research"],
    metrics: ["Target: -15% Block Rate"],
    highlights: [
      "Segmented business messages into Marketing vs Utility categories",
      "Designed granular muting UX preserving OTP/transaction notifications"
    ],
    caseStudyAvailable: true,
    segment: "Consumer",
    link: "https://vijaybsehgal.notion.site/WhatsApp-India-Smart-Muting-for-Business-Messages-Teardown-PRD-4113bc4217a34bbb865c4aaa4b7d84c9"
  },
  {
    title: "The Digital Health Coach",
    subtitle: "AI-First Health Platform",
    description: "A hybrid health coaching platform for urban professionals, combining AI-driven meal logging and chat onboarding with a human accountability layer to ensure habit formation and reduce churn.",
    tags: ["#GenAI", "#HealthTech", "#0-to-1"],
    metrics: [">40% W4 Retention", "8% Paid Conv."],
    highlights: [
      "AI chat onboarding replaced traditional forms — 3x completion rate",
      "Hybrid AI + human coach model reduced churn by keeping accountability high"
    ],
    caseStudyAvailable: true,
    segment: "HealthTech",
    link: "https://vijaybsehgal.notion.site/The-Digital-Health-Coach-145c0cb389634f28bf18242bad389dc3"
  }
];

// Skills matched exactly to resume "CORE SKILLS"
export const SKILLS: Skill[] = [
  // Product
  { name: "Product Management", category: "Product", featured: true },
  { name: "User Research", category: "Product", featured: true },
  { name: "Discovery", category: "Product", featured: true },
  { name: "PRDs", category: "Product" },
  { name: "Product Roadmap", category: "Product" },
  { name: "Experimentation", category: "Product", featured: true },
  { name: "Metrics", category: "Product", featured: true },
  { name: "GTM", category: "Product" },
  { name: "OKRs", category: "Product" },

  // Execution
  { name: "Agile Delivery", category: "Execution" },
  { name: "AI Agents", category: "Execution", featured: true },
  { name: "Rapid Prototyping", category: "Execution", featured: true },
  { name: "Stakeholder Communication", category: "Execution" },
  { name: "Mentorship", category: "Execution" },
  { name: "Cross-functional Leadership", category: "Execution", featured: true },

  // Data/Tech
  { name: "Figma/Miro", category: "Data/Tech" },
  { name: "Jira", category: "Data/Tech" },
  { name: "Mixpanel", category: "Data/Tech", featured: true },
  { name: "GA4", category: "Data/Tech" },
  { name: "A/B Testing", category: "Data/Tech", featured: true },
  { name: "Wireframing", category: "Data/Tech" },
  { name: "Funnel Analysis", category: "Data/Tech", featured: true },
  { name: "LLMs", category: "Data/Tech", featured: true },
  { name: "Workflows", category: "Data/Tech" }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Kurukshetra University (HEC)",
    period: "2012 – 2016",
    highlight: "Top 2% of the class | GPA 3.8/4.0 (All Rounder)",
    location: "Haryana",
    type: "degree"
  },
  {
    degree: "AI-PM Launchpad Fellowship",
    institution: "Airtribe",
    period: "2024",
    highlight: "Top 3% (out of 150+ Fellows) | Scored 9/10 Graduation Project (Swish)",
    type: "fellowship",
    credentialUrl: "https://www.airtribe.live/product-management/certificate/BPAGQ91T75AI"
  },
  {
    degree: "Superhuman AI Certification",
    institution: "Superhuman",
    period: "2025",
    highlight: "AI Productivity, Prompt Engineering",
    type: "certification",
    credentialUrl: "https://education.superhuman.ai/certificates/dbkz2nh3fa"
  },
  {
    degree: "Generative AI for Product Managers",
    institution: "LinkedIn Learning",
    period: "Dec 2025",
    highlight: "GenAI Tools, AI for Business Analysis, MVP",
    type: "certification",
    credentialUrl: "https://www.linkedin.com/learning/certificates/99a9f943a30663d8a1f033465849289baca00d2f7ec255d9bcc73eca738103aa"
  },
  {
    degree: "Generative AI Intensive Program",
    institution: "GrowthSchool",
    period: "2024",
    highlight: "Vibe Coding, Prompt Engineering, AI Applications",
    type: "certification",
    credentialUrl: "https://drive.google.com/file/d/1WgbfGod3OK2A_q67pVmT6AePBeDZsYJ-/view?usp=sharing"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Deconstructing Blinkit's 10-Minute Delivery UX",
    excerpt: "A deep dive into the psychological triggers and habit loops in quick commerce apps.",
    date: "2025-02-10",
    readTime: "8 min",
    tags: ["UX", "Product Teardown"],
    source: "blog",
    link: "https://www.notion.so/vijaybsehgal/Product-Sense-Blinkit-Smart-Cart-Reducing-Reorder-Time-by-95-4m-10s-25af8aca882d81bc8c91eb7856407f87?source=copy_link"
  },
  {
    title: "My thoughts on the new Google maps new auto detects parking release",
    excerpt: "Google Maps - Auto-detects Your Parking Location.",
    date: "2025-12-13",
    readTime: "2 min",
    tags: ["LinkedIn", "Google Maps"],
    source: "linkedin",
    link: "https://www.linkedin.com/posts/vijay-b-sehgal_if-youre-like-me-you-forget-where-you-park-activity-7405532075950243841-tJJV?utm_source=share&utm_medium=member_desktop&rcm=ACoAABSqsuoBfT1HtIwaRuMhswF-qHJnDIiMfGc"
  }
];

// ==========================================
// HIRE INFO — Powers the "Hire Me" strip
// ==========================================
export const HIRE_INFO: HireInfo = {
  roles: ["Product Manager", "AI Product Manager", "0-1 Product"],
  locations: ["Remote (India)", "Gurugram", "Bangalore", "Mumbai"],
  availability: "Immediately available · No notice period",
  calLink: "https://cal.com/vijay-b-sehgal",
};

// ==========================================
// IMPACT METRICS — Powers "Proof of Impact"
// ==========================================
// Baselines use published industry benchmarks
// where available.
export const IMPACT_METRICS: ImpactMetric[] = [
  {
    label: "Teacher Onboarding Completion",
    baseline: "60% (industry avg for LMS onboarding)",
    action: "Redesigned guided onboarding with step-by-step examples & SOPs",
    result: "78% completion (+18 pp)",
    confidence: "Measured",
    source: "WhiteHat Jr",
  },
  {
    label: "Curriculum Rollout Speed",
    baseline: "10–15 days per release cycle",
    action: "Operationalised SOPs & standardised review workflows",
    result: "5–7 days (−50%)",
    confidence: "Measured",
    source: "WhiteHat Jr",
  },
  {
    label: "Student CSAT",
    baseline: "4.0 / 5.0 (pre-intervention)",
    action: "A/B tested content sequencing & feedback loops for 12k students",
    result: "4.5 / 5.0",
    confidence: "Measured",
    source: "WhiteHat Jr",
  },
  {
    label: "Course Completion Rate",
    baseline: "~60% (avg for online upskilling programs in India)",
    action: "Project-based curriculum + train-the-trainer TA model",
    result: "75% (+15 pp)",
    confidence: "Measured",
    source: "Delta Learning",
  },
  {
    label: "Post-Order Retention",
    baseline: "~13% D30 (typical quick-commerce reorder rate)",
    action: "Designed habit hooks, reorder nudges & social proof triggers",
    result: "+12 pp retention, 2× reorder rate",
    confidence: "Estimated",
    source: "Swish (Capstone)",
  },
];

// ==========================================
// NOW / NEXT — What you're up to this quarter
// ==========================================
export const NOW_NEXT: NowNextItem[] = [
  { category: "Learning", text: "Daily PM mock interviews & product case practice" },
  { category: "Learning", text: "Reading about AI agents, LLM applications & product-led growth" },
  { category: "Building", text: "Writing product insights & mini-teardowns" },
  { category: "Exploring", text: "Actively interviewing for PM roles via LinkedIn, Naukri & Instahyre" },
  { category: "Exploring", text: "Open to Consumer Tech, B2B SaaS, and AI-first product roles" },
];
