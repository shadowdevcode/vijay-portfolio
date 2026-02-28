/**
 * NowNext — Current Activity Roadmap
 * ====================================
 * Shows what you're currently learning, building,
 * and exploring. Quick-scan format for hiring managers
 * who want to understand your trajectory.
 */

import React from 'react';
import { NOW_NEXT } from '../constants';
import { BookOpen, Hammer, Compass, Rocket } from 'lucide-react';

const categoryConfig: Record<string, { icon: React.ReactNode; color: string }> = {
    Learning: { icon: <BookOpen size={14} />, color: 'bg-blue-50 text-blue-700 border-blue-200' },
    Building: { icon: <Hammer size={14} />, color: 'bg-purple-50 text-purple-700 border-purple-200' },
    Shipping: { icon: <Rocket size={14} />, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    Exploring: { icon: <Compass size={14} />, color: 'bg-amber-50 text-amber-700 border-amber-200' },
};

const NowNext: React.FC = () => {
    if (NOW_NEXT.length === 0) return null;

    // Group items by category
    const groups = NOW_NEXT.reduce<Record<string, string[]>>((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item.text);
        return acc;
    }, {});

    return (
        <section className="py-12 scroll-mt-20">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-3">
                    Now &amp; Next
                </h2>
                <div className="h-1 w-16 bg-zinc-900 mb-2"></div>
                <p className="text-sm text-zinc-500">
                    What I'm focused on this quarter.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(groups).map(([category, items]) => {
                    const config = categoryConfig[category] || categoryConfig.Learning;
                    return (
                        <div key={category} className="bg-white border border-zinc-200 rounded-xl p-5 hover:shadow-md transition-all">
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${config.color}`}>
                                    {config.icon}
                                    {category}
                                </span>
                            </div>

                            {/* Items */}
                            <ul className="space-y-2">
                                {items.map((text, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 leading-relaxed">
                                        <span className="text-blue-400 mt-1 shrink-0">✦</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default NowNext;
