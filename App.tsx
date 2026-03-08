/**
 * App — Root Component
 * =====================
 * Assembles all portfolio sections in their display order.
 * Controls scroll-based nav highlighting and scroll-triggered
 * reveal animations.
 *
 * Section order (designed for PM recruiter scan flow):
 *   Hero → Proof of Impact → Case Studies → Experience
 *   → Skills → Education → Blog → Contact CTA
 *
 * "Show, don't tell" — projects come before work history
 * so recruiters see proof-of-work first.
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  SCROLL_SPY_TOP_OFFSET,
  SCROLL_SPY_VISIBILITY_RATIO,
  INTERSECTION_THRESHOLD,
  INTERSECTION_ROOT_MARGIN,
} from './config';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofOfImpact from './components/ProofOfImpact';
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

  /**
   * Scroll spy — detects which section is currently visible
   * and highlights the corresponding nav item.
   * Order matches the actual DOM layout (top to bottom).
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'education', 'blog'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top >= SCROLL_SPY_TOP_OFFSET &&
            rect.top <= window.innerHeight / SCROLL_SPY_VISIBILITY_RATIO
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Intersection Observer — triggers fade-in-up animation
   * when each section scrolls into view (fires once per section).
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: INTERSECTION_THRESHOLD, rootMargin: INTERSECTION_ROOT_MARGIN }
    );

    const sections = mainRef.current?.querySelectorAll('section:not(#home)');
    sections?.forEach((section) => {
      (section as HTMLElement).style.opacity = '0';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#fafafa] relative pb-28 md:pb-20">
        <main id="main-content" ref={mainRef} className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* ---- Above the fold ---- */}
          <Hero />
          <ProofOfImpact />

          {/* ---- Proof of work (projects first = "show, don't tell") ---- */}
          <Projects />

          {/* ---- Traditional credentials ---- */}
          <Experience />
          <Skills />
          <Education />

          {/* ---- Writing & Conversion ---- */}
          <Blog />
          <ContactCTA />
        </main>

        <Footer />

        {/* Floating UI elements */}
        <Navbar activeSection={activeSection} />
        <ChatWidget />
      </div>
    </ErrorBoundary>
  );
};

export default App;
