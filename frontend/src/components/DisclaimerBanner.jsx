import React, { useState } from 'react';
import { Target, Info, ChevronDown, ChevronUp, Globe } from 'lucide-react';

export default function DisclaimerBanner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside aria-label="Project context and disclaimers" className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white border-b border-indigo-950/60 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {/* Main Statement */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
              <Target className="w-3.5 h-3.5" />
            </span>
            <div className="text-xs sm:text-sm text-indigo-100 truncate">
              <strong className="text-white font-semibold">IBM Problem Statement:</strong>{" "}
              <span className="italic text-slate-200">
                “Many skilled individuals in Tier-2/3 cities face employment challenges. This AI project will suggest personalized job paths based on user skills and interests.”
              </span>
            </div>
          </div>

          {/* SDG 8 Badge & Details Toggle */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Globe className="w-3 h-3" />
              SDG 8: Decent Work & Economic Growth
            </span>

            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[11px] text-indigo-200 hover:text-white flex items-center gap-1 underline underline-offset-2 ml-1"
            >
              <span>{expanded ? 'Less' : 'Project Notice'}</span>
              {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Expandable Disclosure Details */}
        {expanded && (
          <div className="mt-2.5 pt-2.5 border-t border-indigo-800/60 text-xs text-indigo-200/90 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-3 pb-1">
            <div className="bg-indigo-950/40 p-2.5 rounded border border-indigo-800/40">
              <span className="font-semibold text-white block mb-1">Academic Internship Context:</span>
              Developed exclusively for the <strong>IBM SkillsBuild AICTE Internship</strong>. All recommendations are derived from structured skill mapping, algorithmic matching, and Google Gemini AI insights.
            </div>
            <div className="bg-indigo-950/40 p-2.5 rounded border border-indigo-800/40">
              <span className="font-semibold text-white block mb-1">Guidance Notice:</span>
              This system does not guarantee employment or specific salary packages, does not scrape live job vacancies, and is not an official product of or endorsed by IBM Corporation.
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
