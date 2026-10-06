import React from 'react';
import { ShieldCheck, Info, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800/80">
          {/* Column 1: Academic & Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white font-semibold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              AI Career Path & Job Guidance System
            </div>
            <p className="text-slate-400 leading-relaxed mb-3">
              Developed as an internship project under the <strong>IBM SkillsBuild AICTE Internship</strong> program.
              Focused on bridging the career awareness and employability divide for youth and graduates in Tier-2 and Tier-3 cities across India.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-indigo-300 font-mono text-[11px]">
              <span>UN SDG Target 8.6 • Youth Employment</span>
            </div>
          </div>

          {/* Column 2: SDG 8 Commitment */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">SDG 8 Alignment</h4>
            <p className="text-slate-400 leading-relaxed mb-2">
              <strong>Goal 8: Decent Work and Economic Growth.</strong> Promotes sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Provides verifiable skill gap roadmaps, free learning resources, and portfolio blueprints to empower students with genuine market-relevant capabilities.
            </p>
          </div>

          {/* Column 3: Critical Disclaimer & Limitations */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Safety & Educational Disclaimer
            </h4>
            <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 text-[11px] leading-relaxed">
              <strong>Guidance Only:</strong> This system provides educational recommendations and career exploration based on skill taxonomies. 
              It does <em>not</em> offer guaranteed job placement, salary guarantees, or live vacancy scraping. It is an independent student internship project and does <em>not</em> claim official IBM endorsement or partnership.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 AI Career Path & Job Guidance System • IBM SkillsBuild AICTE Internship
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with React, FastAPI & Google Gemini
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
