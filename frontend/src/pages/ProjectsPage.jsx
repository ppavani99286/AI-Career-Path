import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  FolderGit2, 
  Code, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  Award,
  Terminal
} from 'lucide-react';
import SkillTag from '../components/SkillTag';

function getProjectFitExplanation(proj, profile, selectedCareer) {
  const candidateSkills = (profile?.skills && profile.skills.length > 0)
    ? profile.skills
    : (selectedCareer?.matching_skills || []);

  const formatList = (items) => {
    if (!items || items.length === 0) return '';
    if (items.length === 1) return items[0];
    return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
  };

  const existingSkillsText = candidateSkills.length > 0
    ? formatList(candidateSkills.slice(0, 5))
    : 'core computing and programming fundamentals';

  const gaps = selectedCareer?.missing_skills || [];
  const priorityGaps = selectedCareer?.priority_skill_gaps || [];
  const combinedGaps = [...new Set([...priorityGaps, ...gaps])];
  const projectStack = proj?.tech_stack || [];

  const targetedGaps = projectStack.filter(tech => 
    combinedGaps.some(gap => 
      gap.toLowerCase().includes(tech.toLowerCase()) || 
      tech.toLowerCase().includes(gap.toLowerCase())
    )
  );

  let skillsToStrengthen = targetedGaps;
  if (skillsToStrengthen.length === 0) {
    skillsToStrengthen = projectStack.filter(tech =>
      !candidateSkills.some(cs => cs.toLowerCase() === tech.toLowerCase())
    );
  }
  if (skillsToStrengthen.length === 0 && priorityGaps.length > 0) {
    skillsToStrengthen = priorityGaps;
  }
  if (skillsToStrengthen.length === 0 && combinedGaps.length > 0) {
    skillsToStrengthen = combinedGaps.slice(0, 3);
  }

  const strengthenText = skillsToStrengthen.length > 0
    ? formatList(skillsToStrengthen.slice(0, 4))
    : 'backend API development, database integration and deployment';

  const careerTitle = selectedCareer?.title || 'target role';
  const desc = ((proj?.description || '') + ' ' + (proj?.resume_impact || '') + ' ' + (proj?.title || '')).toLowerCase();

  const isSdgFocused = desc.includes('sdg') || desc.includes('job') || desc.includes('internship') || desc.includes('employ') || desc.includes('artisan') || desc.includes('mandi') || desc.includes('rural') || desc.includes('civic') || desc.includes('welfare');

  const problemContext = isSdgFocused
    ? 'while applying your skills to an employment-focused SDG 8 problem'
    : `while applying your skills toward becoming a ${careerTitle}`;

  return `You already have experience with ${existingSkillsText}. This project helps you strengthen ${strengthenText} ${problemContext}.`;
}

export default function ProjectsPage({ selectedCareer, profile, aiInsights, setStep }) {
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

  const { title, portfolio_projects = [] } = selectedCareer;
  const aiProjects = aiInsights?.portfolio_recommendations || [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Navigation Top */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep('roadmap')}
          className="text-xs font-semibold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Roadmap</span>
        </button>

        <button
          onClick={() => setStep('dashboard')}
          className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1 transition-all"
        >
          <span>View Comprehensive Dashboard</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Proof of Competence
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Portfolio Projects: {title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Building real working software helps candidates demonstrate practical skills beyond academic credentials.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold">
            <FolderGit2 className="w-4 h-4" />
            <span>Resume Differentiator</span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Practical projects and deployed demonstrations can help candidates showcase their skills beyond academic credentials. The projects below are selected to provide meaningful, demonstrable proof of work.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {portfolio_projects.map((proj, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                  #{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {proj.title}
                </h3>
              </div>
              <span className="inline-block self-start sm:self-auto px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
                {proj.level}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {proj.description}
            </p>

            {/* Tech Stack */}
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Suggested Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech_stack.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Why this project fits your profile */}
            <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-indigo-900 mb-0.5">Why this project fits your profile:</strong>
                <p className="leading-relaxed text-slate-700">{getProjectFitExplanation(proj, profile, selectedCareer)}</p>
              </div>
            </div>

            {/* Resume Impact */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 flex items-start gap-2.5">
              <Award className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-emerald-900 mb-0.5">Recruiter & Resume Impact:</strong>
                <span>{proj.resume_impact}</span>
              </div>
            </div>
          </div>
        ))}

        {/* AI Customized Recommendations */}
        {aiProjects.length > 0 && (
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h3 className="text-sm font-bold text-slate-900">
                AI Counselor Tailored Project Blueprint
              </h3>
            </div>

            {aiProjects.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-blue-50/40 border border-indigo-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-indigo-950">{p.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-200/60 text-indigo-900 font-semibold">
                    {p.level || 'Recommended'}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{p.description}</p>
                {p.tech_stack && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tech_stack.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[11px] bg-white border border-indigo-200 text-indigo-700 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {/* Why this project fits your profile */}
                <div className="p-3 rounded-xl bg-white/90 border border-indigo-200/80 text-xs text-indigo-950 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-indigo-900 mb-0.5">Why this project fits your profile:</strong>
                    <p className="leading-relaxed text-slate-700">{getProjectFitExplanation(p, profile, selectedCareer)}</p>
                  </div>
                </div>
                {p.resume_impact && (
                  <p className="text-[11px] text-indigo-800 font-medium pt-1">
                    Impact: {p.resume_impact}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-6 rounded-2xl bg-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-white">Review Complete Analysis Summary</h4>
          <p className="text-xs text-indigo-200 mt-0.5">
            Proceed to your centralized career dashboard with AI advisory and score breakdowns.
          </p>
        </div>
        <button
          onClick={() => setStep('dashboard')}
          className="px-6 py-2.5 rounded-xl bg-white text-indigo-950 font-bold text-xs shadow hover:bg-indigo-50 flex items-center gap-2 transition-all hover:scale-[1.02]"
        >
          <span>Open Full Dashboard</span>
          <ArrowRight className="w-4 h-4 text-indigo-600" />
        </button>
      </div>
    </div>
  );
}
