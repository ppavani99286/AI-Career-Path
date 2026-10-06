import React from 'react';
import { Check, AlertTriangle, Sparkles } from 'lucide-react';

export default function SkillTag({ skill, type = 'default', size = 'sm', onRemove }) {
  let badgeStyle = "bg-slate-100 text-slate-700 border-slate-200";
  let icon = null;

  if (type === 'matched') {
    badgeStyle = "bg-emerald-50 text-emerald-800 border-emerald-200 font-medium";
    icon = <Check className="w-3 h-3 text-emerald-600 stroke-[2.5]" />;
  } else if (type === 'missing') {
    badgeStyle = "bg-amber-50 text-amber-800 border-amber-200 font-medium";
    icon = <AlertTriangle className="w-3 h-3 text-amber-600" />;
  } else if (type === 'critical') {
    badgeStyle = "bg-rose-50 text-rose-800 border-rose-200 font-semibold";
    icon = <AlertTriangle className="w-3 h-3 text-rose-600" />;
  } else if (type === 'highlight') {
    badgeStyle = "bg-indigo-50 text-indigo-700 border-indigo-200 font-medium";
    icon = <Sparkles className="w-3 h-3 text-indigo-500" />;
  }

  const sizeStyle = size === 'xs' ? 'text-[11px] px-2 py-0.5' : size === 'lg' ? 'text-sm px-3.5 py-1.5' : 'text-xs px-2.5 py-1';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border ${badgeStyle} ${sizeStyle} transition-all`}>
      {icon}
      <span>{skill}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 text-slate-400 hover:text-slate-700 focus:outline-none"
        >
          ×
        </button>
      )}
    </span>
  );
}
