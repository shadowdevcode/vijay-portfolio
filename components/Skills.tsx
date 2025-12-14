import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { 
  Brain, 
  Target, 
  Database, 
  Layers,
  Zap,
  Layout
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Skills');

  // Derive categories from the skills list
  const categories = ['All Skills', ...Array.from(new Set(SKILLS.map(s => s.category)))];
  
  // Map categories to icons for the filter buttons
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'All Skills': return <Layers size={14} />;
      case 'Product': return <Target size={14} />;
      case 'Execution': return <Zap size={14} />;
      case 'Data/Tech': return <Database size={14} />;
      default: return <Layout size={14} />;
    }
  };

  // Helper to get icon for individual skill chips based on their category
  const getSkillIcon = (category: string) => {
    switch(category) {
        case 'Product': return <Target size={12} />;
        case 'Execution': return <Zap size={12} />;
        case 'Data/Tech': return <Database size={12} />;
        default: return <Layout size={12} />;
    }
  };

  const filteredSkills = activeCategory === 'All Skills' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-4">
          Skills & Expertise
        </h2>
        <div className="h-1 w-20 bg-zinc-900 mb-6"></div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
        {/* Filter Buttons */}
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
                            flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300
                            ${isActive 
                                ? 'bg-zinc-900 text-white shadow-md' 
                                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}
                        `}
                    >
                        {getCategoryIcon(category)}
                        {category}
                        <span className={`
                            ml-1 px-1.5 py-0.5 rounded-full text-[10px] 
                            ${isActive ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-500'}
                        `}>
                            {count}
                        </span>
                    </button>
                );
            })}
        </div>

        {/* Skills Cloud */}
        <div className="flex flex-wrap gap-3">
            {filteredSkills.map((skill, index) => (
                <div 
                    key={`${skill.name}-${index}`}
                    className="group flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-lg text-sm text-zinc-700 hover:border-zinc-300 hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default select-none animate-in fade-in zoom-in-95 duration-300"
                >
                    <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
                        {getSkillIcon(skill.category)}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;