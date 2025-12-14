import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 scroll-mt-20 mb-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
           <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-4">
            Latest Thoughts
          </h2>
          <div className="h-1 w-20 bg-zinc-900"></div>
        </div>
        <a href="#" className="text-sm font-bold text-zinc-900 hover:text-blue-600 flex items-center gap-2 pb-2 border-b border-zinc-200 hover:border-blue-600 transition-all">
            READ ALL POSTS <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post, index) => (
          <a 
            key={index}
            href={post.link || "#"}
            target={post.link && post.link !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="block bg-white border border-zinc-200 p-8 rounded-2xl hover:border-zinc-400 transition-colors group cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-medium text-zinc-500 mb-4">
               <span className="flex items-center gap-1.5">
                 <Clock size={14} /> {post.date}
               </span>
               <span className="hidden sm:inline text-zinc-300">•</span>
               <span>{post.readTime} read</span>
               <div className="flex gap-2 ml-auto sm:ml-0">
                  {post.tags.map(tag => (
                      <span key={tag} className="bg-zinc-100 px-2 py-0.5 rounded text-zinc-600 uppercase tracking-wider text-[10px]">{tag}</span>
                  ))}
               </div>
            </div>
            
            <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-700 transition-colors font-serif">
                {post.title}
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed">
                {post.excerpt}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;