import React from 'react';
import { PROJECTS } from '../constants';
import { BookOpen, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-4">
          Selected Projects
        </h2>
        <div className="h-1 w-20 bg-zinc-900"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <a 
            key={index}
            href={project.link || "#"}
            target={project.link && project.link !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`
                flex flex-col bg-white border border-zinc-200 rounded-md p-4 transition-all duration-200 group h-full
                ${project.link && project.link !== "#" ? "hover:border-zinc-400 cursor-pointer" : "cursor-default"}
            `}
          >
            {/* Header: Icon + Title + Status */}
            <div className="flex items-center gap-2 mb-2">
                 <BookOpen size={16} className="text-zinc-500 shrink-0" />
                 <h3 className="text-sm font-bold text-blue-600 group-hover:underline truncate">
                    {project.title}
                 </h3>
                 <span className="ml-auto px-2 py-0.5 rounded-full border border-zinc-200 text-[10px] text-zinc-500 font-medium shrink-0">
                    {project.subtitle}
                 </span>
            </div>

            {/* Description - Compact and tight */}
            <p className="text-xs text-zinc-600 mb-3 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Footer Area - Stacked directly under description (No whitespace gap) */}
            <div className="space-y-3">
               {/* Metrics: Green Boxes (Recruiter Signal) */}
               {project.metrics && project.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {metric}
                    </span>
                  ))}
                </div>
              )}

              {/* Tags: Gray Repo Style */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
                {project.tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
                    {tag.replace('#', '')}
                  </span>
                ))}
                
                {project.caseStudyAvailable && (
                    <div className="ml-auto flex items-center gap-1 text-xs text-zinc-400 group-hover:text-zinc-900 transition-colors">
                        Read Case Study <ArrowUpRight size={12} />
                    </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;