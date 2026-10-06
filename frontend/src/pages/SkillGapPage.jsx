import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Target, 
  BookOpen, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import SkillTag from '../components/SkillTag';

export default function SkillGapPage({ selectedCareer, profile, setStep }) {
  if (!selectedCareer) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-600 mb-4">No career selected.</p>
        <button
          onClick={() => setStep('matches')}
          className="px-6 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
        >
          View Matches
        </button>
      </div>
    );
  }

  const {
    title,
    matching_skills = [],
    missing_skills = [],
    priority_skill_gaps = []
  } = selectedCareer;

  const totalEvaluatedSkills = matching_skills.length + missing_skills.length;
  const completionPercentage = totalEvaluatedSkills > 0 
    ? Math.round((matching_skills.length / totalEvaluatedSkills) * 100) 
    : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Navigation Top */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep('details')}
          className="text-xs font-semibold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Career Details</span>
        </button>

        <button
          onClick={() => setStep('roadmap')}
          className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1 transition-all"
        >
          <span>View Free Learning Roadmap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Diagnostic Audit
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Skill Gap Analysis: {title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Candidate: <span className="font-semibold text-slate-800">Demo Candidate</span> ({profile?.location || "Warangal, Telangana, India"})
            </p>
          </div>

          <div className="sm:text-right">
            <span className="text-xs text-slate-500 font-semibold block mb-1">Skill Readiness</span>
            <div className="flex items-baseline sm:justify-end gap-1.5">
              <span className="text-3xl font-extrabold text-indigo-600">{completionPercentage}%</span>
              <span className="text-xs text-slate-500 font-medium">skills acquired</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 max-w-xs sm:ml-auto sm:text-right leading-tight">
              Skill readiness is based on matched skills compared with the total evaluated skills.
            </p>
            <div className="w-36 bg-slate-100 rounded-full h-2 mt-2 sm:ml-auto">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Priority Skill Gap Warning & Advisory */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-2">
          <div className="font-bold flex items-center gap-1.5 text-amber-950">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Targeted Upskilling Strategy for Tier-2/3 Candidates</span>
          </div>
          <p className="leading-relaxed text-amber-800">
            Focus first on the {priority_skill_gaps.length} highest-impact skills identified for this career path. The remaining {Math.max(0, missing_skills.length - priority_skill_gaps.length)} skills are complementary and can be developed afterward.
          </p>
        </div>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Verified Strengths */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Competencies You Already Have</span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
              {matching_skills.length} verified
            </span>
          </div>

          <div className="space-y-3">
            {matching_skills.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No skills directly matched yet.</p>
            ) : (
              matching_skills.map((s) => (
                <div key={s} className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold text-slate-800">{s}</span>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-700">Ready to Leverage</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Missing & Priority Skills */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 font-bold text-sm text-rose-800">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Missing High-Impact Skills</span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700">
              {missing_skills.length} to learn
            </span>
          </div>

          <div className="space-y-3">
            {missing_skills.length === 0 ? (
              <p className="text-xs text-emerald-600 font-medium">No missing skills detected! Ready to apply.</p>
            ) : (
              missing_skills.map((s) => {
                const isPriority = priority_skill_gaps.includes(s);
                return (
                  <div 
                    key={s} 
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      isPriority 
                        ? 'bg-rose-50/50 border-rose-200 text-rose-900' 
                        : 'bg-amber-50/40 border-amber-200 text-amber-900'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${isPriority ? 'bg-rose-500' : 'bg-amber-500'}`}></span>
                        <span className="text-xs font-bold text-slate-900">{s}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        {isPriority ? 'Core Required Skill for screening tests' : 'Useful complementary tool'}
                      </span>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isPriority 
                        ? 'bg-rose-100 text-rose-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                     {isPriority ? 'High Impact' : 'Complementary'}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 rounded-2xl bg-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-white">Proceed to Structured Learning Milestones</h4>
          <p className="text-xs text-indigo-200 mt-0.5">
            Follow our beginner-to-advanced curriculum powered by free verified learning platforms.
          </p>
        </div>
        <button
          onClick={() => setStep('roadmap')}
          className="px-6 py-2.5 rounded-xl bg-white text-indigo-950 font-bold text-xs shadow hover:bg-indigo-50 flex items-center gap-2 transition-all hover:scale-[1.02]"
        >
          <span>Open Milestone Roadmap</span>
          <ArrowRight className="w-4 h-4 text-indigo-600" />
        </button>
      </div>
    </div>
  );
}
