/**
 * HireStrip — "Hire Me" Banner
 * =============================
 * A prominent strip showing role targets, preferred locations,
 * availability, and a call-booking CTA. Designed for recruiter
 * scan-ability — the first component they should notice.
 */

import React from 'react';
import { HIRE_INFO } from '../constants';
import { Briefcase, MapPin, Clock, Calendar } from 'lucide-react';

const HireStrip: React.FC = () => {
    return (
        <section className="py-6 scroll-mt-20">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 md:p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left — Info */}
                    <div className="space-y-2.5">
                        {/* Roles */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <Briefcase size={16} className="text-blue-200 shrink-0" />
                            {HIRE_INFO.roles.map((role) => (
                                <span
                                    key={role}
                                    className="px-2.5 py-1 text-xs font-semibold bg-white/15 rounded-full backdrop-blur-sm"
                                >
                                    {role}
                                </span>
                            ))}
                        </div>

                        {/* Locations */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <MapPin size={16} className="text-blue-200 shrink-0" />
                            <span className="text-sm text-blue-100">
                                {HIRE_INFO.locations.join(' · ')}
                            </span>
                        </div>

                        {/* Availability */}
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-blue-200 shrink-0" />
                            <span className="text-sm font-medium text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                {HIRE_INFO.availability}
                            </span>
                        </div>
                    </div>

                    {/* Right — CTA */}
                    <a
                        href={HIRE_INFO.calLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors shrink-0 shadow-lg shadow-blue-800/20"
                    >
                        <Calendar size={16} />
                        Book a 20-min Call
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HireStrip;
