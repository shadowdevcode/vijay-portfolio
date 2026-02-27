import React from 'react';
import { Home, User, Briefcase, Code, BookOpen, BrainCircuit } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: BrainCircuit, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Work' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'blog', icon: BookOpen, label: 'Writing' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <nav className="flex items-center gap-1 p-1.5 bg-white/90 backdrop-blur-lg border border-zinc-200/80 rounded-full shadow-lg shadow-zinc-900/10 overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative px-3.5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 shrink-0
                ${isActive
                  ? 'bg-zinc-900 text-white shadow-md scale-105'
                  : 'text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100'}
              `}
              aria-label={item.label}
            >
              <item.icon size={16} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className={`text-xs font-medium ${isActive ? 'block' : 'hidden sm:block'}`}>
                {item.label}
              </span>
              {/* Active dot indicator on mobile */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full sm:hidden"></span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;