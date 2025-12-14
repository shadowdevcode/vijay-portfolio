import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { MapPin, Download, FileText, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  // Find the resume URL dynamically from the constants
  const resumeUrl = SOCIAL_LINKS.find(link => link.name === 'Resume')?.url || "#";
  const isExternalLink = resumeUrl.startsWith('http');

  return (
    <section id="home" className="pt-8 pb-12 md:pt-40 md:pb-24">
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-start justify-between">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 space-y-6 md:space-y-8 w-full">
          {/* Header Info */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-[2.5rem] xs:text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 font-serif leading-[1.1]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-500 font-medium font-serif italic">
              {PERSONAL_INFO.title}
            </p>
             <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium pt-1">
                <MapPin size={16} />
                <span>{PERSONAL_INFO.location}</span>
             </div>
          </div>
          
          {/* About Section */}
          <div id="about" className="pt-6 scroll-mt-28">
             <h2 className="text-2xl font-bold text-zinc-900 mb-4 font-sans">About</h2>
             <p className="text-zinc-600 leading-relaxed text-lg font-light mb-6">
               {PERSONAL_INFO.summary}
             </p>
             
             <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 rounded-lg text-zinc-900 font-semibold text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm"
             >
                <FileText size={16} />
                More About Me
             </button>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-100 mt-4">
             <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20 text-sm font-medium group"
              >
                {isExternalLink ? (
                    <ExternalLink size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                    <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                )}
                {isExternalLink ? "View Resume" : "Download CV"}
              </a>
            {SOCIAL_LINKS.filter(link => link.name !== 'Resume').map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-white border border-zinc-200 rounded-lg text-zinc-600 hover:text-zinc-900 hover:border-zinc-400 transition-all shadow-sm"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative shrink-0 w-full md:w-auto flex justify-start md:justify-end">
          <div className="absolute inset-0 bg-zinc-200 rounded-2xl rotate-3 opacity-50 group-hover:rotate-6 transition-transform duration-500 hidden md:block"></div>
          <img
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            className="relative w-full aspect-square md:w-80 md:h-80 rounded-2xl object-cover shadow-xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700 ease-in-out md:rotate-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;