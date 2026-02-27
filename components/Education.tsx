import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap, Award, Sparkles, ExternalLink } from 'lucide-react';

const getIcon = (type: string) => {
    switch (type) {
        case 'degree': return <GraduationCap size={20} className="text-blue-600" />;
        case 'fellowship': return <Award size={20} className="text-amber-600" />;
        case 'certification': return <Sparkles size={20} className="text-purple-600" />;
        default: return <GraduationCap size={20} className="text-zinc-500" />;
    }
};

const Education: React.FC = () => {
    if (EDUCATION_DATA.length === 0) return null;

    const degrees = EDUCATION_DATA.filter(e => e.type === 'degree' || e.type === 'fellowship');
    const certs = EDUCATION_DATA.filter(e => e.type === 'certification');

    return (
        <section id="education" className="py-12 scroll-mt-20">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-3">
                    Education & Credentials
                </h2>
                <div className="h-1 w-16 bg-zinc-900"></div>
            </div>

            {/* Degrees & Fellowships — larger cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

            {/* Certifications — compact cards */}
            {certs.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {certs.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.credentialUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-lg border border-zinc-200 p-4 hover:shadow-md hover:border-zinc-300 transition-all flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                                    {getIcon(cert.type)}
                                </div>
                                <span className="text-[11px] text-zinc-400 font-medium">{cert.period}</span>
                            </div>
                            <h4 className="font-semibold text-zinc-900 text-sm mb-0.5 leading-snug">{cert.degree}</h4>
                            <p className="text-xs text-zinc-500 mb-2">{cert.institution}</p>
                            {cert.highlight && (
                                <p className="text-[11px] text-purple-600 bg-purple-50 rounded px-2 py-1 mt-auto">
                                    {cert.highlight}
                                </p>
                            )}
                            <span className="inline-flex items-center gap-1 mt-2 text-[11px] font-medium text-zinc-400 group-hover:text-blue-600 transition-colors">
                                View Certificate <ExternalLink size={10} />
                            </span>
                        </a>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Education;
