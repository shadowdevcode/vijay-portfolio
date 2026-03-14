/**
 * ContactCTA — Bottom-of-page Conversion Section
 * =================================================
 * Primary conversion point with email, LinkedIn,
 * call booking (Cal.com), and resume view CTAs.
 */

import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, HIRE_INFO } from '../constants';
import { ArrowRight, Mail, Linkedin, Calendar } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const linkedIn = SOCIAL_LINKS.find((l) => l.name === 'LinkedIn');
  const resumeLink = SOCIAL_LINKS.find((l) => l.name === 'Resume');

  return (
    <section className="py-12">
      <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">
          Let&apos;s Build Something Together
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-8">
          I&apos;m exploring PM roles in consumer tech and B2B SaaS. If you&apos;re building
          something interesting, I&apos;d love to chat.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          {/* Book a Call — primary action */}
          <a
            href={HIRE_INFO.calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
          >
            <Calendar size={16} />
            Book a 20-min Call
          </a>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-colors"
          >
            <Mail size={16} />
            {PERSONAL_INFO.email}
          </a>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {linkedIn && (
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
              <ArrowRight size={14} />
            </a>
          )}

          {resumeLink && (
            <a
              href={resumeLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              <resumeLink.icon size={16} />
              View Resume
              <ArrowRight size={14} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
