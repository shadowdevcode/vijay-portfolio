import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Education from './components/Education';
import Footer from './components/Footer';
import ContactCTA from './components/ContactCTA';
import ErrorBoundary from './components/ErrorBoundary';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef<HTMLElement>(null);

  // Scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'blog'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  // Scroll-triggered reveal animations  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all sections (except hero which is already visible)
    const sections = mainRef.current?.querySelectorAll('section:not(#home)');
    sections?.forEach(section => {
      (section as HTMLElement).style.opacity = '0';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#fafafa] relative pb-28 md:pb-20">
        <main ref={mainRef} className="max-w-4xl mx-auto px-6 sm:px-8">
          <Hero />
          <Experience />
          <Skills />
          <Education />
          <Projects />
          <Blog />
          <ContactCTA />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Bottom Navigation */}
        <Navbar activeSection={activeSection} />

        {/* AI Chat Widget */}
        <ChatWidget />
      </div>
    </ErrorBoundary>
  );
};

export default App;