import React, { useEffect, useState } from 'react';
import { Compass, Sparkles, CheckCircle2, AlertCircle, Award } from 'lucide-react';
import { checkAiStatus } from '../api/client';

export default function Navbar({ currentStep, setStep, hasResult }) {
  const [aiStatus, setAiStatus] = useState({ gemini_configured: false, mode: 'Checking...' });

  useEffect(() => {
    checkAiStatus().then(status => setAiStatus(status));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Project Title */}
          <div 
            onClick={() => setStep('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">
                  AI Career Path & Job Guidance System
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  SDG 8
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                IBM SkillsBuild AICTE Internship • Tier-2/3 Employment Focus
              </p>
            </div>
          </div>

          {/* Right Status Badges & Quick Action */}
          <div className="flex items-center gap-3">
            {/* AI Engine Status Badge */}
            <div 
              title={aiStatus.gemini_configured ? "Deterministic matching + Google Gemini AI enhancement active in backend" : "Using deterministic fallback engine"}
              className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                aiStatus.gemini_configured 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
            >
              {aiStatus.gemini_configured ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '3s' }} />
                  <span>AI Guidance: Deterministic Matching + AI Enhancement</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Fallback Engine (Offline Safe)</span>
                </>
              )}
            </div>

            {/* Quick Flow Links */}
            <nav className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setStep('home')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  currentStep === 'home' 
                    ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Overview
              </button>

              <button
                onClick={() => setStep('profile')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  currentStep === 'profile' 
                    ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Career Profile
              </button>

              {hasResult && (
                <button
                  onClick={() => setStep('dashboard')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all shadow-sm ${
                    currentStep === 'dashboard'
                      ? 'bg-indigo-600 text-white shadow-indigo-200'
                      : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                  }`}
                >
                  My Dashboard
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
