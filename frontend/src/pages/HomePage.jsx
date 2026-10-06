import React from 'react';
import { 
  Compass, 
  Sparkles, 
  ArrowRight, 
  Target, 
  Briefcase, 
  BookOpen, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  GraduationCap,
  MapPin,
  HelpCircle
} from 'lucide-react';

export default function HomePage({ onStart, onLoadDemo }) {
  const CAREER_PILLARS = [
    {
      title: "Data & AI",
      roles: ["Data Analyst", "Data Scientist", "ML Engineer", "AI Engineer"],
      color: "border-blue-200 bg-blue-50/50 text-blue-900"
    },
    {
      title: "Software & Web",
      roles: ["Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Python Developer", "Java Developer"],
      color: "border-indigo-200 bg-indigo-50/50 text-indigo-900"
    },
    {
      title: "Cloud & Cyber",
      roles: ["Cloud Engineer", "Cybersecurity Analyst"],
      color: "border-cyan-200 bg-cyan-50/50 text-cyan-900"
    },
    {
      title: "Design & Product",
      roles: ["UI/UX Designer", "Business Analyst", "Digital Marketing Specialist"],
      color: "border-violet-200 bg-violet-50/50 text-violet-900"
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          
          {/* Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              IBM SkillsBuild AICTE Internship
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              UN SDG 8: Decent Work & Economic Growth
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            AI Career Path & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
              Job Guidance System
            </span>
          </h1>

          {/* Exact IBM Statement Block */}
          <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-slate-200 shadow-xl">
            <p className="text-xs uppercase tracking-wider text-indigo-300 font-bold mb-1">
              Original IBM Problem Statement
            </p>
            <p className="text-sm sm:text-base italic text-slate-100 font-medium leading-relaxed">
              “Many skilled individuals in Tier-2/3 cities face employment challenges. This AI project will suggest personalized job paths based on user skills and interests.”
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Overcoming geographic employment barriers through <strong>explainable skill matching (40% Skills, 25% Interests, 15% Education, 10% Experience, 10% Preferences)</strong>, personalized Google Gemini AI guidance, and step-by-step free learning roadmaps.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onStart}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Build Career Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onLoadDemo}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Try Demo Profile (Warangal, TS)</span>
            </button>
          </div>

          <div className="text-xs text-slate-400 pt-2 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% Free Resources</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Transparent Weights</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Backend-Secured AI</span>
          </div>
        </div>
      </section>

      {/* Core Flow / Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How The System Bridges The Opportunity Gap
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A transparent 8-step journey engineered to empower graduates from Tier-2/3 regional institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">1. Skill & Intent Profile</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Captures your actual coding abilities, coursework, college background, and relocation or remote work preferences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">2. Explainable Match</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deterministic scoring formula ensures complete clarity: Skills (40%), Interests (25%), Education (15%), Experience (10%), Preferences (10%).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">3. Gemini AI Advisory</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Backend Google Gemini LLM produces personalized career strategies, strengths, and portfolio blueprints without altering scores.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">4. Free Action Roadmap</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Milestone learning paths paired with curated free learning materials (IBM SkillsBuild, NPTEL, Coursera) to overcome financial barriers.
            </p>
          </div>
        </div>
      </section>

      {/* 15 Curated Career Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-100/70 border border-slate-200">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Comprehensive Career Taxonomy
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              15 In-Demand Industry Career Paths
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curated specifically for viability in Tier-2/3 tech centers, remote engineering teams, and Indian IT services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAREER_PILLARS.map((col, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${col.color}`}>
                <h4 className="font-bold text-sm mb-3 border-b pb-1.5 opacity-90">{col.title}</h4>
                <ul className="space-y-1.5 text-xs font-medium">
                  {col.roles.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Notice Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-xs text-amber-900 leading-relaxed">
            <h4 className="font-bold text-sm text-amber-950">Ethical & Transparent AI Principles</h4>
            <p>
              This web application is an educational prototype developed for the <strong>IBM SkillsBuild AICTE Internship</strong> under UN SDG 8. 
              It provides guidance only and makes <strong>no claims of guaranteed employment, salary forecasts, or live job postings</strong>. 
              The numerical match percentage is computed strictly via deterministic weighting and is never artificially inflated by generative AI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
