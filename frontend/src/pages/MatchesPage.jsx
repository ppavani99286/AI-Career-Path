import React, { useState } from 'react';
import { 
  Award, 
  ArrowRight, 
  Check, 
  AlertTriangle, 
  Sparkles, 
  Search, 
  TrendingUp,
  MapPin,
  ChevronRight,
  Info
} from 'lucide-react';
import MatchScoreBadge from '../components/MatchScoreBadge';
import SkillTag from '../components/SkillTag';

export default function MatchesPage({ 
  analysisResult, 
  selectedCareer, 
  setSelectedCareer, 
  setStep 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  if (!analysisResult || !analysisResult.top_matches) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="p-8 rounded-2xl bg-white border border-slate-200">
          <p className="text-slate-600 mb-4">No analysis results found yet.</p>
          <button
            onClick={() => setStep('profile')}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold"
          >
            Go to Career Profile
          </button>
        </div>
      </div>
    );
  }

  const matches = analysisResult.top_matches;
  const filteredMatches = matches.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleSelectCareer = (career, targetStep = 'details') => {
    setSelectedCareer(career);
    setStep(targetStep);
  };

  const primaryMatch = matches[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Banner: Top Recommended Role */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Award className="w-3.5 h-3.5" />
              <span>#1 Top Recommended Career Pathway</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {primaryMatch.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {primaryMatch.description}
            </p>

            {/* Tier-2/3 Note */}
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs text-indigo-100 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Regional & Remote Market Scope:</strong> {primaryMatch.tier_2_3_opportunity_note}
              </span>
            </div>
          </div>

          {/* Score & Direct Action */}
          <div className="flex-shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="text-center">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                Deterministic Compatibility
              </span>
              <div className="text-5xl font-extrabold text-emerald-400 tracking-tight">
                {primaryMatch.match_percentage}%
              </div>
              <span className="text-xs text-slate-300 font-medium">Strong Career Fit</span>
            </div>

            <button
              onClick={() => handleSelectCareer(primaryMatch, 'details')}
              className="w-full px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-xs shadow-md shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Explore Details & Gaps</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            All Evaluated Career Tracks ({matches.length})
          </h2>
          <p className="text-xs text-slate-500">
            Ranked deterministically using: Skills (40%), Interests (25%), Education (15%), Experience (10%), Preferences (10%).
          </p>
        </div>

        <div className="w-full sm:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search roles (e.g. AI, Full Stack)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
          />
        </div>
      </div>

      {/* Grid of Matches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredMatches.map((career, index) => {
          const isSelected = selectedCareer?.id === career.id;
          const isTop = index === 0;

          return (
            <div
              key={career.id}
              className={`p-6 rounded-2xl bg-white border transition-all flex flex-col justify-between ${
                isTop
                  ? 'border-indigo-300 shadow-md ring-1 ring-indigo-500/10'
                  : 'border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">#{index + 1}</span>
                      <h3 className="font-bold text-base text-slate-900">{career.title}</h3>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {career.description}
                    </p>
                  </div>
                  <MatchScoreBadge score={career.match_percentage} size="sm" />
                </div>

                {/* Score breakdown mini-bar */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-[11px] text-slate-600 space-y-1">
                  <div className="flex items-center justify-between font-medium">
                    <span>Skills Contribution:</span>
                    <span className="font-bold text-slate-900">{career.score_breakdown.skills_score} / 40 pts</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span>Interests Contribution:</span>
                    <span className="font-bold text-slate-900">{career.score_breakdown.interests_score} / 25 pts</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span>Edu & Exp Contribution:</span>
                    <span className="font-bold text-slate-900">
                      {(career.score_breakdown.education_score + career.score_breakdown.experience_score + career.score_breakdown.preferences_score).toFixed(1)} / 35 pts
                    </span>
                  </div>
                </div>

                {/* Matching Skills */}
                <div className="space-y-2 mb-4">
                  <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Matching Skills ({career.matching_skills.length}):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {career.matching_skills.length === 0 ? (
                      <span className="text-[11px] text-slate-400 italic">No direct skill overlap found</span>
                    ) : (
                      career.matching_skills.slice(0, 4).map((sk) => (
                        <SkillTag key={sk} skill={sk} type="matched" size="xs" />
                      ))
                    )}
                    {career.matching_skills.length > 4 && (
                      <span className="text-[10px] text-slate-500 self-center">
                        +{career.matching_skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Critical Gaps */}
                {career.priority_skill_gaps.length > 0 && (
                  <div className="space-y-2 mb-4">
                    <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Priority Skills to Learn:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {career.priority_skill_gaps.slice(0, 3).map((sk) => (
                        <SkillTag key={sk} skill={sk} type="missing" size="xs" />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleSelectCareer(career, 'details')}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs flex items-center gap-1"
                >
                  <span>Role Details</span>
                  <ChevronRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => handleSelectCareer(career, 'skill-gap')}
                  className="px-4 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-semibold text-xs flex items-center gap-1"
                >
                  <span>Skill Gap & Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
