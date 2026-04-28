/**
 * Blog posts / writing
 * Used by Blog section
 */

import type { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "I replaced an engineering team with a 16-agent AI system — here's how it works",
    excerpt:
      "A PM system that gets smarter after each failure. Every completed project writes postmortem lessons into enforced rules so the next build is faster and more reliable — no manual intervention.",
    date: '2025-03-09',
    readTime: '12 min',
    tags: ['AI', 'Product Ops', 'Systems Thinking'],
    source: 'blog',
    featured: true,
    link: 'https://www.notion.so/vijaybsehgal/AI-Product-Operating-System-Shipping-MVPs-Without-an-Engineering-Team-31ef8aca882d808d9a77f2d424006b9e?source=copy_link',
  },
  {
    title: "Deconstructing Blinkit's 10-Minute Delivery UX",
    excerpt: 'A deep dive into the psychological triggers and habit loops in quick commerce apps.',
    date: '2025-02-10',
    readTime: '8 min',
    tags: ['UX', 'Product Teardown'],
    source: 'blog',
    link: 'https://www.notion.so/vijaybsehgal/Product-Sense-Blinkit-Smart-Cart-Reducing-Reorder-Time-by-95-4m-10s-25af8aca882d81bc8c91eb7856407f87?source=copy_link',
  },
];
