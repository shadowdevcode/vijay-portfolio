/**
 * Experience — Work Timeline
 * ===========================
 * Displays job history as a vertical timeline with company
 * logos, role details, impact bullets, and badges.
 *
 * Data source: constants.tsx → EXPERIENCE
 */
import React from 'react';
import { EXPERIENCE } from '../constants';
import { ArrowUpRight, Rocket, BookOpen, Laptop, Briefcase, Calendar, Code } from 'lucide-react';

const getLogo = (logoName: string) => {
  switch (logoName) {
    case 'stealth': return <Rocket size={22} className="text-purple-600" />;
    case 'whitehat': return <Laptop size={22} className="text-orange-500" />;
    case 'delta': return <BookOpen size={22} className="text-blue-500" />;
    case 'acadview': return <Code size={22} className="text-green-600" />;
    default: return <Briefcase size={22} className="text-zinc-500" />;
  }
};

const Experience: React.FC = () => {
  if (EXPERIENCE.length === 0) return null;

  return (
    <section id="experience" className="py-12 scroll-mt-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-3">
            Work Experience
          </h2>
          <div className="h-1 w-16 bg-zinc-900"></div>
        </div>
        {/* Years badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-600">
          <Calendar size={14} />
          5+ Years
        </div>
      </div>

      <div className="relative border-l-2 border-zinc-200 ml-4 md:ml-6 space-y-8">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className={`absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full border-[3px] border-white ${job.featured ? 'bg-purple-500 ring-2 ring-purple-200' : 'bg-zinc-400 ring-2 ring-zinc-200'}`}></div>

            {/* Card */}
            <div className={`
              group relative flex flex-col p-5 md:p-6 rounded-xl border transition-all duration-300
              ${job.featured
                ? 'bg-white border-l-4 border-l-purple-500 border-t border-r border-b border-t-purple-100 border-r-purple-100 border-b-purple-100 shadow-md shadow-purple-500/5'
                : 'bg-white border-zinc-200 hover:shadow-md hover:border-zinc-300'
              }
            `}>
              {job.featured && (
                <div className="absolute top-0 right-0 p-3">
                  <ArrowUpRight size={16} className="text-purple-400" />
                </div>
              )}

              <div className="flex gap-4 items-start mb-3">
                <div className="shrink-0 w-11 h-11 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center">
                  {getLogo(job.logo)}
                </div>

                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-zinc-900">{job.company}</h3>
                      {job.badges && job.badges.map((badge, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wide">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-zinc-400 font-medium whitespace-nowrap mt-1 sm:mt-0">{job.period}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-600 text-sm">{job.role}</span>
                    <span className={`
                            text-[10px] font-bold px-2 py-0.5 rounded border
                            ${job.type === 'On Site' ? 'bg-zinc-100 text-zinc-600 border-zinc-200' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}
                        `}>
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Context one-liner */}
              {job.context && (
                <p className="text-zinc-500 text-sm italic pl-0 md:pl-[60px] mb-2">
                  {job.context}
                </p>
              )}

              {/* Impact bullets */}
              {job.impactBullets && job.impactBullets.length > 0 && (
                <ul className="space-y-1.5 pl-0 md:pl-[60px]">
                  {job.impactBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 leading-relaxed">
                      <span className="text-blue-500 mt-1 shrink-0">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Fallback for old description format */}
              {!job.impactBullets && job.description && (
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed pl-0 md:pl-[60px]">
                  {job.description}
                </p>
              )}

              {/* Optional external link (e.g. Notion portfolio) */}
              {job.link && (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 pl-0 md:pl-[60px] text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View more case studies <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;