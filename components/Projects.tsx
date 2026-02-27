import React from 'react';
import { PROJECTS } from '../constants';
import { BookOpen, ArrowUpRight } from 'lucide-react';

// Accent colors for visual differentiation per project
const PROJECT_ACCENTS = [
  'border-l-blue-500',
  'border-l-purple-500',
  'border-l-amber-500',
  'border-l-emerald-500',
  'border-l-rose-500',
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-3">
          Selected Projects
        </h2>
        <div className="h-1 w-16 bg-zinc-900"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.link || "#"}
            target={project.link && project.link !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`
                flex flex-col bg-white border border-zinc-200 border-l-4 ${PROJECT_ACCENTS[index % PROJECT_ACCENTS.length]} rounded-xl p-5 md:p-6 transition-all duration-300 group h-full
                ${project.link && project.link !== "#" ? "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer" : "cursor-default hover:shadow-md"}
            `}
          >
            {/* Header: Icon + Title + Status */}
            <div className="flex items-center gap-2.5 mb-3">
              <BookOpen size={18} className="text-zinc-400 shrink-0" />
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors truncate">
                {project.title}
              </h3>
              <span className="ml-auto px-2.5 py-1 rounded-full border border-zinc-200 text-[10px] text-zinc-500 font-medium shrink-0 bg-zinc-50">
                {project.subtitle}
              </span>
            </div>

            {project.capstone && (
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                  🎓 {project.capstone}
                </span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-zinc-600 mb-3 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Inline highlights — hybrid case study preview */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="space-y-1 mb-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-500 leading-relaxed">
                    <span className="text-blue-400 mt-0.5 shrink-0">&#x2022;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Metrics — prominent recruiter signal */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {metric}
                  </span>
                ))}
              </div>
            )}

            {/* Tags + Case Study link — pushed to bottom */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 items-center mt-auto pt-3 border-t border-zinc-100">
              {project.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-zinc-300"></span>
                  {tag.replace('#', '')}
                </span>
              ))}

              {project.caseStudyAvailable && project.link && project.link !== "#" && (
                <div className="ml-auto flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-blue-600 transition-colors">
                  Read Case Study <ArrowUpRight size={12} />
                </div>
              )}
              {project.caseStudyAvailable && (!project.link || project.link === "#") && (
                <div className="ml-auto text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                  Coming Soon
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;