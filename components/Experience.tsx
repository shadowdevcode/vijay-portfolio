import React from 'react';
import { EXPERIENCE } from '../constants';
import { ArrowUpRight, Rocket, BookOpen, Laptop, Briefcase } from 'lucide-react';

const getLogo = (logoName: string) => {
  switch (logoName) {
    case 'stealth': return <Rocket size={24} className="text-purple-600" />;
    case 'whitehat': return <Laptop size={24} className="text-orange-500" />;
    case 'delta': return <BookOpen size={24} className="text-blue-500" />;
    default: return <Briefcase size={24} className="text-zinc-500" />;
  }
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-4">
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-zinc-900"></div>
      </div>

      <div className="relative border-l border-zinc-200 ml-4 md:ml-6 space-y-10">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className={`absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full border-2 border-white ring-1 ring-zinc-200 bg-zinc-400 ${job.featured ? 'bg-purple-500 ring-purple-200' : ''}`}></div>

            {/* Card */}
            <div className={`
              group relative flex flex-col p-6 rounded-xl border transition-all duration-300
              ${job.featured 
                ? 'bg-white border-purple-200 shadow-md shadow-purple-500/5' 
                : 'bg-white border-zinc-200 hover:shadow-lg hover:border-zinc-300'
              }
            `}>
                {job.featured && (
                    <div className="absolute top-0 right-0 p-3">
                        <ArrowUpRight size={16} className="text-purple-400" />
                    </div>
                )}

              {/* Layout matching resume screenshot */}
              <div className="flex gap-4 items-start mb-4">
                 {/* Logo Box */}
                 <div className="shrink-0 w-12 h-12 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center">
                    {getLogo(job.logo)}
                 </div>

                 {/* Content Structure */}
                 <div className="flex-1 w-full">
                    {/* Row 1: Company + Badge ...... Date */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-bold text-zinc-900">{job.company}</h3>
                            {job.badges && job.badges.map((badge, i) => (
                                <span key={i} className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wide">
                                    {badge}
                                </span>
                            ))}
                        </div>
                        <span className="text-sm text-zinc-500 font-medium whitespace-nowrap mt-1 sm:mt-0">{job.period}</span>
                    </div>

                    {/* Row 2: Role ...... Type */}
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-zinc-700">{job.role}</span>
                        <span className={`
                            text-[10px] font-bold px-2 py-0.5 rounded border
                            ${job.type === 'On Site' ? 'bg-zinc-100 text-zinc-600 border-zinc-200' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}
                        `}>
                            {job.type}
                        </span>
                    </div>
                 </div>
              </div>

              {/* Description */}
              {job.description && (
                <p className="text-zinc-600 text-sm leading-relaxed pl-16">
                  {job.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;