import React from 'react';

export default function MatchScoreBadge({ score, size = 'md', showLabel = true }) {
  let colorTheme = {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    bar: 'bg-emerald-500',
    tag: 'Strong Match'
  };

  if (score < 60) {
    colorTheme = {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      bar: 'bg-amber-500',
      tag: 'Moderate Match'
    };
  } else if (score < 40) {
    colorTheme = {
      bg: 'bg-slate-50',
      border: 'border-slate-200',
      text: 'text-slate-700',
      bar: 'bg-slate-400',
      tag: 'Foundational'
    };
  }

  if (size === 'sm') {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${colorTheme.bg} ${colorTheme.border} ${colorTheme.text} font-bold text-xs`}>
        <span>{score}%</span>
        {showLabel && <span className="text-[10px] font-normal opacity-90">• {colorTheme.tag}</span>}
      </div>
    );
  }

  if (size === 'lg') {
    return (
      <div className={`p-4 rounded-xl border ${colorTheme.bg} ${colorTheme.border} flex items-center justify-between`}>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
            Career Compatibility
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-extrabold ${colorTheme.text}`}>{score}%</span>
            <span className={`text-sm font-semibold ${colorTheme.text}`}>{colorTheme.tag}</span>
          </div>
        </div>
        <div className="w-24 bg-white/80 rounded-full h-3 p-0.5 border border-slate-200">
          <div 
            className={`h-full rounded-full ${colorTheme.bar} transition-all duration-700`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    );
  }

  // Medium (default)
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${colorTheme.bg} ${colorTheme.border}`}>
      <span className={`text-base font-extrabold ${colorTheme.text}`}>{score}%</span>
      {showLabel && (
        <span className={`text-xs font-semibold ${colorTheme.text} border-l border-slate-300/80 pl-2`}>
          {colorTheme.tag}
        </span>
      )}
    </div>
  );
}
