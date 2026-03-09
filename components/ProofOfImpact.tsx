/**
 * ProofOfImpact — Compact Metric Cards
 * ======================================
 * Shows 3–5 measurable outcomes as compact cards.
 * Each card is a single "before → after" row with
 * the action as secondary text. Designed to be scannable
 * on mobile without excessive scrolling.
 *
 * Data source: constants.tsx → IMPACT_METRICS
 */

import React from 'react';
import { IMPACT_METRICS } from '../constants';
import { TrendingUp, ArrowRight } from 'lucide-react';
import type { ImpactMetric } from '../types';

/** Returns Tailwind classes for the confidence badge color */
const confidenceColor = (c: ImpactMetric['confidence']): string => {
  switch (c) {
    case 'Measured':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Estimated':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'Projected':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    default:
      return 'bg-zinc-50 text-zinc-600 border-zinc-200';
  }
};

const ProofOfImpact: React.FC = () => {
  if (IMPACT_METRICS.length === 0) return null;

  return (
    <section className="py-10 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-3">
          Proof of Impact
        </h2>
        <div className="h-1 w-16 bg-zinc-900"></div>
      </div>

      {/* Compact card grid — tighter spacing, less padding */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {IMPACT_METRICS.map((metric, index) => {
          const labelId = `impact-metric-${index}`;
          return (
          <div
            key={index}
            role="article"
            aria-labelledby={labelId}
            className="bg-white border border-zinc-200 rounded-xl p-4 hover:shadow-sm transition-all"
          >
            {/* Header row: icon + label + confidence */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <TrendingUp size={14} className="text-emerald-600 shrink-0" />
                <h3 id={labelId} className="text-xs font-bold text-zinc-900 break-words">
                  {metric.label}
                </h3>
              </div>
              <span
                className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border shrink-0 ml-2 ${confidenceColor(metric.confidence)}`}
              >
                {metric.confidence}
              </span>
            </div>

            {/* Before → After in compact layout */}
            <div className="flex items-center gap-2 mb-2 text-xs flex-wrap">
              <span className="text-zinc-500 break-words">{metric.baseline}</span>
              <ArrowRight size={10} className="text-zinc-300 shrink-0" />
              <span className="font-bold text-emerald-700 break-words">{metric.result}</span>
            </div>

            {/* Action — small italic, full text visible */}
            <p className="text-[11px] text-zinc-400 italic leading-snug">
              {metric.action}
            </p>

            {/* Source */}
            <div className="mt-2 pt-2 border-t border-zinc-50">
              <span className="text-[10px] text-zinc-400">@ {metric.source}</span>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProofOfImpact;
