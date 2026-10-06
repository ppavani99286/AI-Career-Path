import React from 'react';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Printer, 
  RefreshCw, 
  MapPin, 
  BookOpen, 
  FolderGit2, 
  Calendar, 
  TrendingUp, 
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import MatchScoreBadge from '../components/MatchScoreBadge';
import SkillTag from '../components/SkillTag';

export default function DashboardPage({ 
  analysisResult, 
  selectedCareer, 
  setStep, 
  onRetake 
}) {
  if (!analysisResult) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="p-8 rounded-2xl bg-white border border-slate-200">
          <p className="text-slate-600 mb-4">No active assessment found.</p>
          <button
            onClick={() => setStep('profile')}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
          >
            Create Career Profile
          </button>
        </div>
      </div>
    );
  }

  const { profile, primary_career, ai_insights, top_matches } = analysisResult;
  const activeRole = selectedCareer || primary_career;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            Executive Summary
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Career Guidance Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Candidate: <strong className="text-slate-900">{profile.name}</strong> • Location: <span>{profile.location}</span> • Status: <span>{profile.current_status}</span>
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Print Report</span>
          </button>

          <button
            onClick={onRetake}
            className="px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-semibold text-xs flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>

      {/* AI Advisory Card - Distinctly Labeled */}
      <div className={`p-6 sm:p-7 rounded-3xl border shadow-xs relative overflow-hidden ${
        ai_insights.is_ai_generated
          ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white border-indigo-800'
          : 'bg-white text-slate-900 border-amber-300'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              ai_insights.is_ai_generated ? 'bg-indigo-500/30 text-indigo-300' : 'bg-amber-100 text-amber-800'
            }`}>
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-bold text-base sm:text-lg">
                {ai_insights.is_ai_generated ? "Personalized AI Career Advisory" : "Career Advisory Guidance"}
              </h2>
              <span className={`text-[11px] block ${ai_insights.is_ai_generated ? 'text-indigo-200' : 'text-slate-500'}`}>
                Evaluated for Tier-2/3 employment hurdles under UN SDG 8
              </span>
            </div>
          </div>

          {/* Genuine AI vs Fallback Badge */}
          <div className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 ${
            ai_insights.is_ai_generated
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'bg-amber-100 text-amber-800 border border-amber-300'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{ai_insights.ai_badge_text}</span>
          </div>
        </div>

        {/* AI Career Summary */}
        <div className="mt-4 space-y-3">
          <p className={`text-sm sm:text-base leading-relaxed ${ai_insights.is_ai_generated ? 'text-slate-200' : 'text-slate-700'}`}>
            {ai_insights.career_summary}
          </p>

          <div className={`p-4 rounded-2xl ${
            ai_insights.is_ai_generated ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'
          }`}>
            <strong className={`block text-xs font-bold uppercase tracking-wider mb-1 ${
              ai_insights.is_ai_generated ? 'text-indigo-300' : 'text-slate-600'
            }`}>
              Why Top Career Fits You:
            </strong>
            <p className={`text-xs leading-relaxed ${ai_insights.is_ai_generated ? 'text-slate-300' : 'text-slate-600'}`}>
              {ai_insights.fit_explanation}
            </p>
          </div>
        </div>

        {/* Actionable Next Steps (30 / 60 / 90 Days) */}
        {ai_insights.personalized_next_steps && (
          <div className="mt-5 pt-4 border-t border-white/10">
            <h3 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
              ai_insights.is_ai_generated ? 'text-indigo-300' : 'text-slate-700'
            }`}>
              Personalized Action Plan:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ai_insights.personalized_next_steps.map((stepText, idx) => (
                <div 
                  key={idx}
                  className={`p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                    ai_insights.is_ai_generated 
                      ? 'bg-white/5 text-slate-200 border border-white/5' 
                      : 'bg-indigo-50/50 text-slate-800 border border-indigo-100'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{stepText}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Top Career & Compatibility */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Top Match</span>
            <span className="text-[11px] font-semibold text-slate-400">Deterministic</span>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-slate-900">{activeRole.title}</h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{activeRole.description}</p>
          </div>

          <div className="py-2">
            <MatchScoreBadge score={activeRole.match_percentage} size="lg" />
          </div>

          {/* Mini score breakdown */}
          <div className="p-3 rounded-xl bg-slate-50 text-[11px] text-slate-600 space-y-1.5 border border-slate-100">
            <div className="flex justify-between">
              <span>Skills (40%):</span>
              <strong className="text-slate-900">{activeRole.score_breakdown.skills_score} pts</strong>
            </div>
            <div className="flex justify-between">
              <span>Interests (25%):</span>
              <strong className="text-slate-900">{activeRole.score_breakdown.interests_score} pts</strong>
            </div>
            <div className="flex justify-between">
              <span>Education (15%):</span>
              <strong className="text-slate-900">{activeRole.score_breakdown.education_score} pts</strong>
            </div>
            <div className="flex justify-between">
              <span>Experience & Work (20%):</span>
              <strong className="text-slate-900">
                {(activeRole.score_breakdown.experience_score + activeRole.score_breakdown.preferences_score).toFixed(1)} pts
              </strong>
            </div>
          </div>

          <button
            onClick={() => setStep('details')}
            className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
          >
            <span>Inspect Full Role Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: Candidate Strengths */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Strengths</span>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              {activeRole.matching_skills.length} Matched
            </span>
          </div>

          <div className="space-y-2.5">
            {ai_insights.strengths.map((str, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{str}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <span className="text-[11px] font-semibold text-slate-500 block mb-2">Verified Competencies:</span>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto custom-scrollbar">
              {activeRole.matching_skills.map((s) => (
                <SkillTag key={s} skill={s} type="matched" size="xs" />
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: Priority Skill Gaps */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Skill Gaps</span>
            <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
              {activeRole.priority_skill_gaps.length} Priority
            </span>
          </div>

          <div className="space-y-2">
            {activeRole.priority_skill_gaps.length === 0 ? (
              <p className="text-xs text-emerald-600">No high-priority missing skills!</p>
            ) : (
              activeRole.priority_skill_gaps.slice(0, 4).map((s) => (
                <div key={s} className="p-2.5 rounded-xl bg-rose-50/60 border border-rose-200 text-xs text-rose-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                    <span className="font-bold">{s}</span>
                  </div>
                  <span className="text-[10px] text-rose-700 font-semibold bg-rose-100 px-1.5 py-0.5 rounded">
                    Priority 1
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setStep('skill-gap')}
              className="w-full py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
            >
              <span>View Full Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Direct Jump Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div 
          onClick={() => setStep('roadmap')}
          className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 cursor-pointer transition-all flex items-start gap-4 group"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900">Personalized Learning Roadmap</h4>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Step-by-step beginner, intermediate, and advanced curriculum with zero-cost platforms (IBM SkillsBuild, NPTEL, Coursera).
            </p>
          </div>
        </div>

        <div 
          onClick={() => setStep('projects')}
          className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 cursor-pointer transition-all flex items-start gap-4 group"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900">Portfolio Project Blueprints</h4>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Real-world portfolio projects solving practical challenges to showcase in campus and off-campus technical interviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
