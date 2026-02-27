import React, { useState } from 'react';
import { SKILLS } from '../constants';
import {
  Target,
  Database,
  Layers,
  Zap,
  Layout
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Skills');

  const categories = ['All Skills', ...Array.from(new Set(SKILLS.map(s => s.category)))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'All Skills': return <Layers size={14} />;
      case 'Product': return <Target size={14} />;
      case 'Execution': return <Zap size={14} />;
      case 'Data/Tech': return <Database size={14} />;
      default: return <Layout size={14} />;
    }
  };

  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'Product': return <Target size={12} />;
      case 'Execution': return <Zap size={12} />;
      case 'Data/Tech': return <Database size={12} />;
      default: return <Layout size={12} />;
    }
  };

  const filteredSkills = activeCategory === 'All Skills'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  // Group skills by category for "All Skills" view
  const groupedSkills = activeCategory === 'All Skills'
    ? Array.from(new Set(SKILLS.map(s => s.category))).map(cat => ({
      category: cat,
      skills: SKILLS.filter(s => s.category === cat)
    }))
    : null;

  return (
    <section id="skills" className="py-12 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-3">
          Skills & Expertise
        </h2>
        <div className="h-1 w-16 bg-zinc-900 mb-6"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => {
          const count = category === 'All Skills'
            ? SKILLS.length
            : SKILLS.filter(s => s.category === category).length;
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-300
                ${isActive
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'}
              `}
            >
              {getCategoryIcon(category)}
              {category}
              <span className={`
                ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] 
                ${isActive ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-500'}
              `}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills — grouped when "All Skills" is active */}
      {groupedSkills ? (
        <div className="space-y-6">
          {groupedSkills.map(group => (
            <div key={group.category}>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">{group.category}</p>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-100 rounded-lg text-sm text-zinc-700 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 cursor-default select-none"
                  >
                    <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
                      {getSkillIcon(skill.category)}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2.5">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-100 rounded-lg text-sm text-zinc-700 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
                {getSkillIcon(skill.category)}
              </span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;