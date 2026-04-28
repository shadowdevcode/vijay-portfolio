/**
 * Blog — Writing & Insights Feed
 * ================================
 * Displays blog posts and LinkedIn insights with read time,
 * source icons, and external links. Featured posts get visual
 * emphasis.
 *
 * Data source: constants.tsx → BLOG_POSTS
 */
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Clock, Linkedin, ExternalLink, BookOpen } from 'lucide-react';
import type { BlogPost } from '../types';

// Format date from "2025-02-10" to "Feb 10, 2025"
const formatDate = (dateStr: string): string => {
  try {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
};

const getSourceIcon = (source?: BlogPost['source']) => {
  switch (source) {
    case 'linkedin':
      return <Linkedin size={14} className="text-blue-600" />;
    case 'medium':
      return <BookOpen size={14} className="text-zinc-700" />;
    default:
      return <ExternalLink size={14} className="text-zinc-400" />;
  }
};

const getSourceLabel = (source?: BlogPost['source']) => {
  switch (source) {
    case 'linkedin':
      return 'Open on LinkedIn';
    case 'medium':
      return 'Read on Medium';
    default:
      return 'Read Post';
  }
};

const Blog: React.FC = () => {
  if (BLOG_POSTS.length === 0) {
    return null; // Graceful empty state
  }

  return (
    <section id="blog" className="py-12 scroll-mt-20 mb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-3">
            Latest Thoughts
          </h2>
          <div className="h-1 w-16 bg-zinc-900"></div>
        </div>
        <a
          href="https://vijaybsehgal.notion.site/Vijay-s-Product-Work-25af8aca882d80bba710ec33c119b28e"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-zinc-900 hover:text-blue-600 flex items-center gap-2 transition-colors group"
        >
          READ ALL POSTS{' '}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid gap-5">
        {BLOG_POSTS.map((post, index) => {
          const isExternal = post.link && post.link !== '#';
          const isFeatured = post.featured === true;
          return (
            <a
              key={index}
              href={post.link || '#'}
              target={isExternal ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group flex bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                isFeatured
                  ? 'border-2 border-blue-200 hover:shadow-xl hover:border-blue-400 shadow-sm'
                  : 'border border-zinc-200 hover:shadow-lg hover:border-zinc-300'
              }`}
            >
              {/* Number indicator */}
              <div className={`hidden sm:flex shrink-0 w-16 items-center justify-center border-r ${isFeatured ? 'bg-blue-50 border-blue-100' : 'bg-zinc-50 border-zinc-100'}`}>
                <span className={`text-2xl font-bold font-serif ${isFeatured ? 'text-blue-200' : 'text-zinc-200'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-400 mb-3">
                  {/* Source icon */}
                  <span className="flex items-center gap-1.5">
                    {getSourceIcon(post.source)}
                    <span>{formatDate(post.date)}</span>
                  </span>
                  <span className="text-zinc-200">•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime} read
                  </span>
                  <div className="flex gap-2 sm:ml-auto">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-100 px-2 py-0.5 rounded text-zinc-500 uppercase tracking-wider text-[10px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors font-serif">
                    {post.title}
                  </h3>
                  {isFeatured && (
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>

                {/* Source-specific CTA */}
                {isExternal && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 group-hover:text-blue-600 transition-colors">
                    {getSourceIcon(post.source)}
                    {getSourceLabel(post.source)}
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                )}

                {/* Coming soon for placeholder links */}
                {!isExternal && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                    Coming Soon
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
