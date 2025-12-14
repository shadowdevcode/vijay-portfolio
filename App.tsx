import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer to update active navigation state
  useEffect(() => {
    const handleScroll = () => {
      // Order matters for detection
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'blog'];
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Improved detection logic: 
          // If the top of the section is within the top half of the viewport
          // OR if the user has scrolled to bottom and this is the last section
          if (rect.top >= -150 && rect.top <= window.innerHeight / 2.5) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] relative pb-28 md:pb-20">
      <main className="max-w-3xl mx-auto px-6 sm:px-8">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
      </main>
      
      {/* Floating Bottom Navigation */}
      <Navbar activeSection={activeSection} />
      
      {/* AI Chat Widget */}
      <ChatWidget />
      
      {/* Decorative background element */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"></div>
    </div>
  );
};

export default App;