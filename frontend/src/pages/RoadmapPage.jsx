import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Award
} from 'lucide-react';

export default function RoadmapPage({ selectedCareer, setStep }) {
  const [activeTab, setActiveTab] = useState('beginner');

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

  const { title, roadmaps = {} } = selectedCareer;
  const currentMilestones = roadmaps[activeTab] || [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Navigation Top */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep('skill-gap')}
          className="text-xs font-semibold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Skill Gap</span>
        </button>

        <button
          onClick={() => setStep('projects')}
          className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1 transition-all"
        >
          <span>Explore Portfolio Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Step-by-Step Pathway
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Personalized Learning Roadmap: {title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curated free resources to reduce economic barriers to career development under UN SDG 8.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Zero-Cost Educational Pathways</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 pt-6">
          <button
            onClick={() => setActiveTab('beginner')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'beginner'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Level 1: Beginner Milestones
          </button>

          <button
            onClick={() => setActiveTab('intermediate')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'intermediate'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Level 2: Intermediate Specialization
          </button>

          <button
            onClick={() => setActiveTab('advanced')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'advanced'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Level 3: Advanced & Production
          </button>
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="space-y-4">
        {currentMilestones.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            No specific milestones listed for this tier. Review previous milestones.
          </div>
        ) : (
          currentMilestones.map((milestone, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-200 transition-all flex flex-col md:flex-row md:items-start gap-6"
            >
              {/* Step indicator */}
              <div className="flex-shrink-0 flex items-center md:flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-sm">
                  #{milestone.step || idx + 1}
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{milestone.duration_weeks}</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {milestone.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {milestone.focus_areas.map((focus, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Free Learning Resources */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Recommended Free Learning Platforms (SDG 8 Access):</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {milestone.free_resources.map((res, rIdx) => (
                      <li key={rIdx} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Navigation */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-white">Next: Build Verifiable Proof of Work</h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Recruiters hiring from Tier-2/3 colleges look for demonstrable GitHub projects.
          </p>
        </div>
        <button
          onClick={() => setStep('projects')}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
        >
          <span>Explore Recommended Projects</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
