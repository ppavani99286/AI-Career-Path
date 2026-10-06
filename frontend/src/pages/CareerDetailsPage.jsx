import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Briefcase, 
  CheckCircle, 
  AlertCircle, 
  BookOpen, 
  FolderGit2, 
  MapPin, 
  Compass, 
  GraduationCap, 
  Calendar,
  Layers
} from 'lucide-react';
import MatchScoreBadge from '../components/MatchScoreBadge';
import SkillTag from '../components/SkillTag';

export default function CareerDetailsPage({ selectedCareer, setStep }) {
  if (!selectedCareer) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-600 mb-4">No career selected yet.</p>
        <button
          onClick={() => setStep('matches')}
          className="px-6 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
        >
          View All Matches
        </button>
      </div>
    );
  }

  const {
    title,
    match_percentage,
    description,
    tier_2_3_opportunity_note,
    matching_skills = [],
    missing_skills = [],
    priority_skill_gaps = [],
    score_breakdown,
    explanation
  } = selectedCareer;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Back and Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep('matches')}
          className="text-xs font-semibold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Matches</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStep('skill-gap')}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-semibold text-xs flex items-center gap-1"
          >
            <span>Analyze Skill Gap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Career Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Selected Career Profile
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {title}
            </h1>
          </div>
          <MatchScoreBadge score={match_percentage} size="lg" />
        </div>

        {/* Description */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Overview</h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tier-2/3 Opportunity Note */}
        <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-xs sm:text-sm text-indigo-950 flex items-start gap-3">
          <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold text-indigo-900 mb-0.5">
              Tier-2 & Tier-3 City Market Viability (SDG 8):
            </strong>
            <p className="text-indigo-800 leading-relaxed">{tier_2_3_opportunity_note}</p>
          </div>
        </div>

        {/* Explainable Recommendation Rationale */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-indigo-600" />
            <span>Algorithm Match Rationale:</span>
          </div>
          <p className="leading-relaxed">{explanation}</p>
        </div>

        {/* Score Breakdown Radar/Progress */}
        {score_breakdown && (
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Deterministic Score Breakdown (100% Total)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 block">Skills (40%)</span>
                <span className="text-lg font-bold text-slate-900">{score_breakdown.skills_score} pts</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 block">Interests (25%)</span>
                <span className="text-lg font-bold text-slate-900">{score_breakdown.interests_score} pts</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 block">Education (15%)</span>
                <span className="text-lg font-bold text-slate-900">{score_breakdown.education_score} pts</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 block">Experience (10%)</span>
                <span className="text-lg font-bold text-slate-900">{score_breakdown.experience_score} pts</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 block">Preference (10%)</span>
                <span className="text-lg font-bold text-slate-900">{score_breakdown.preferences_score} pts</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Skills Matrix: Matched vs Missing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Verified User Skills */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-emerald-800 font-bold text-sm">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Verified Matching Skills ({matching_skills.length})</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {matching_skills.length === 0 ? (
              <span className="text-xs text-slate-400 italic">No direct matches verified yet.</span>
            ) : (
              matching_skills.map((s) => (
                <SkillTag key={s} skill={s} type="matched" size="sm" />
              ))
            )}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            These competencies directly fulfill required or useful qualifications for this role.
          </p>
        </div>

        {/* Priority Skill Gaps */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-amber-800 font-bold text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Identified Skill Gaps ({missing_skills.length})</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {missing_skills.length === 0 ? (
              <span className="text-xs text-emerald-600 font-medium">All major core skills already matched!</span>
            ) : (
              missing_skills.map((s) => {
                const isPriority = priority_skill_gaps.includes(s);
                return (
                  <SkillTag
                    key={s}
                    skill={s}
                    type={isPriority ? "critical" : "missing"}
                    size="sm"
                  />
                );
              })
            )}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Focus first on high-priority missing skills highlighted in red.
          </p>
        </div>
      </div>

      {/* Next Flow Navigation Buttons */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-white">Ready to close your skill gaps?</h4>
          <p className="text-xs text-slate-300 mt-0.5">
            View the visual skill gap audit and access free step-by-step learning milestones.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setStep('skill-gap')}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all"
          >
            <span>Inspect Skill Gaps</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
