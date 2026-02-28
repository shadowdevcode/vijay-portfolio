/**
 * Education — Degrees, Fellowships & Certifications
 * ===================================================
 * Shows academic credentials in two tiers:
 * 1. Degree + Fellowship as standard cards (high-signal)
 * 2. Certifications as compact inline badges with links
 *    (reduces vertical scroll vs. full cards)
 *
 * Data source: constants.tsx → EDUCATION_DATA
 */

import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap, Award, Sparkles, ExternalLink } from 'lucide-react';

/** Returns the icon component for each education type */
const getIcon = (type: string) => {
    switch (type) {
        case 'degree': return <GraduationCap size={20} className="text-blue-600" />;
        case 'fellowship': return <Award size={20} className="text-amber-600" />;
        case 'certification': return <Sparkles size={16} className="text-purple-600" />;
        default: return <GraduationCap size={20} className="text-zinc-500" />;
    }
};

const Education: React.FC = () => {
    if (EDUCATION_DATA.length === 0) return null;

    const degrees = EDUCATION_DATA.filter(e => e.type === 'degree' || e.type === 'fellowship');
    const certs = EDUCATION_DATA.filter(e => e.type === 'certification');

    return (
        <section id="education" className="py-10 scroll-mt-20">
            <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-3">
                    Education &amp; Credentials
                </h2>
                <div className="h-1 w-16 bg-zinc-900"></div>
            </div>

            {/* Degrees & Fellowships — standard cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {degrees.map((edu, index) => (
                    <div key={index} className="group bg-white rounded-xl border border-zinc-200 p-5 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center">
                                {getIcon(edu.type)}
                            </div>
                            <span className="text-sm text-zinc-400 font-medium">{edu.period}</span>
                        </div>
                        <h3 className="font-bold text-zinc-900 text-base mb-1">{edu.degree}</h3>
                        <p className="text-sm text-zinc-500 mb-2">
                            {edu.institution}{edu.location ? ` • ${edu.location}` : ''}
                        </p>
                        {edu.highlight && (
                            <p className="text-xs text-blue-700 bg-blue-50 border border-blue-100 rounded-md px-3 py-2 leading-relaxed">
                                {edu.highlight}
                            </p>
                        )}
                        {edu.credentialUrl && (
                            <a
                                href={edu.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-zinc-500 hover:text-blue-600 transition-colors"
                            >
                                View Certificate <ExternalLink size={12} />
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Certifications — compact inline badges (not full cards) */}
            {certs.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {certs.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.credentialUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all"
                        >
                            <span className="w-6 h-6 bg-purple-50 rounded flex items-center justify-center shrink-0">
                                {getIcon(cert.type)}
                            </span>
                            <span className="text-xs font-semibold text-zinc-800">{cert.degree}</span>
                            <span className="text-[10px] text-zinc-400">· {cert.institution}</span>
                            <ExternalLink size={10} className="text-zinc-300 group-hover:text-blue-500 transition-colors shrink-0" />
                        </a>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Education;
