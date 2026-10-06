import React from 'react';
import { 
  Home, 
  UserCheck, 
  Award, 
  FileText, 
  GitFork, 
  MapPin, 
  FolderGit2, 
  LayoutDashboard,
  Check
} from 'lucide-react';

const STEPS = [
  { id: 'home', label: 'Home', icon: Home, short: 'Home' },
  { id: 'profile', label: 'Career Profile', icon: UserCheck, short: 'Profile' },
  { id: 'matches', label: 'Top Career Matches', icon: Award, short: 'Matches' },
  { id: 'details', label: 'Career Details', icon: FileText, short: 'Details' },
  { id: 'skill-gap', label: 'Skill Gap', icon: GitFork, short: 'Skill Gap' },
  { id: 'roadmap', label: 'Personalized Roadmap', icon: MapPin, short: 'Roadmap' },
  { id: 'projects', label: 'Portfolio Projects', icon: FolderGit2, short: 'Projects' },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, short: 'Dashboard' }
];

export default function StepNavigation({ currentStep, setStep, hasResult }) {
  const currentIndex = STEPS.findIndex(s => s.id === currentStep);

  return (
    <div className="bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Career Guidance Workflow Steps" className="overflow-x-auto custom-scrollbar pb-1">
          <ol className="flex items-center min-w-max space-x-1 sm:space-x-2">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isPast = idx < currentIndex;
              // If user has not analyzed yet, steps after profile are locked
              const isLocked = !hasResult && idx > 1;

              return (
                <li key={step.id} className="flex items-center">
                  {idx > 0 && (
                    <div className="w-4 sm:w-6 h-0.5 mx-1 bg-slate-200">
                      <div 
                        className={`h-full ${isPast ? 'bg-indigo-600' : 'bg-transparent'}`} 
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    disabled={isLocked}
                    onClick={() => setStep(step.id)}
                    className={`group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                        : isPast
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        : isLocked
                        ? 'bg-slate-50 text-slate-400 cursor-not-allowed opacity-60'
                        : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : isPast 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {isPast ? <Check className="w-3 h-3 stroke-[3]" /> : (idx + 1)}
                    </span>

                    <span className="hidden sm:inline">{step.label}</span>
                    <span className="sm:hidden">{step.short}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
