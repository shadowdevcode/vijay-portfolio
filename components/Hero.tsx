/**
 * Hero — Landing Section
 * =======================
 * The first thing visitors see. Shows name, title, location,
 * availability status, summary, and action CTAs. Also includes
 * an integrated hire strip with role targets, locations, and
 * a "Book a Call" button — consolidated here to avoid redundancy
 * with a separate component.
 *
 * Data source: constants.tsx → PERSONAL_INFO, SOCIAL_LINKS, HIRE_INFO
 */

import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, HIRE_INFO } from '../constants';
import { MapPin, Calendar, Briefcase, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const resumeLink = SOCIAL_LINKS.find((l) => l.name === 'Resume');
  const leadProof = 'leadBuilderProof' in PERSONAL_INFO ? (PERSONAL_INFO as { leadBuilderProof?: string }).leadBuilderProof : undefined;

  return (
    <section id="home" className="pt-8 pb-4 md:pt-24 md:pb-8 scroll-mt-20">
      <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8">
        {/* Text content */}
        <div className="flex-1">
          <p className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">
            Building products people love
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-2 font-serif">
            {PERSONAL_INFO.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className="text-base md:text-lg text-zinc-600 font-medium">{PERSONAL_INFO.title}</p>
            <span className="text-zinc-300">•</span>
            <span className="flex items-center gap-1 text-sm text-zinc-500">
              <MapPin size={14} /> {PERSONAL_INFO.location}
            </span>
          </div>

          {/* Status badge + role targets inline */}
          {PERSONAL_INFO.status && (
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                  {PERSONAL_INFO.status}
                </span>
              </div>
              {/* Role target pills */}
              {HIRE_INFO.roles.map((role) => (
                <span
                  key={role}
                  className="text-[11px] font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
          )}

          {/* Summary */}
          <p
            id="about"
            className="text-zinc-600 text-base md:text-lg leading-relaxed mb-4 max-w-xl scroll-mt-20"
          >
            {PERSONAL_INFO.summary}
          </p>

          {/* Lead builder proof — first 10 seconds */}
          {leadProof && (
            <p className="text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 mb-5 max-w-xl">
              {leadProof}
            </p>
          )}

          {/* Availability + location strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-green-500" />
              <span className="font-medium text-zinc-700">{HIRE_INFO.availability}</span>
            </span>
            <span className="text-zinc-300">•</span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} />
              {HIRE_INFO.locations.join(' · ')}
            </span>
          </div>

          {/* CTA Row */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Primary CTA: Book a call */}
            <a
              href={HIRE_INFO.calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20"
              aria-label="Book a 20-minute call"
            >
              <Calendar size={16} aria-hidden /> Book a 20-min call
            </a>
            {resumeLink && (
              <a
                href={resumeLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                <resumeLink.icon size={16} /> View Resume
              </a>
            )}
            {SOCIAL_LINKS.filter((l) => l.name !== 'Resume').map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 transition-all"
                aria-label={link.name}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar with fallback — explicit dimensions to avoid CLS */}
        <div className="shrink-0 mx-auto md:mx-0">
          <img
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            width={192}
            height={192}
            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-white shadow-lg ring-1 ring-zinc-100"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div
            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-zinc-200 items-center justify-center text-4xl font-bold text-zinc-500 border-2 border-white shadow-lg ring-1 ring-zinc-100"
            style={{ display: 'none' }}
          >
            {PERSONAL_INFO.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
