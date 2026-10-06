import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Plus, 
  User, 
  MapPin, 
  GraduationCap, 
  Code, 
  Compass, 
  Briefcase, 
  FileCode, 
  Award, 
  RotateCcw,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import SkillTag from '../components/SkillTag';
import { DEMO_PROFILE, COMMON_SKILLS, COMMON_INTERESTS } from '../data/demoProfile';

export default function ProfilePage({ profile, setProfile, onAnalyze, loading, error }) {
  const [customSkillInput, setCustomSkillInput] = useState('');
  const [customInterestInput, setCustomInterestInput] = useState('');
  const [demoLoadedNotification, setDemoLoadedNotification] = useState(false);

  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = (skillToAdd) => {
    const trimmed = skillToAdd.trim();
    if (!trimmed) return;
    if (!profile.skills.some(s => s.toLowerCase() === trimmed.toLowerCase())) {
      setProfile(prev => ({ ...prev, skills: [...prev.skills, trimmed] }));
    }
    setCustomSkillInput('');
  };

  const removeSkill = (skillToRemove) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skillToRemove)
    }));
  };

  const addInterest = (interestToAdd) => {
    const trimmed = interestToAdd.trim();
    if (!trimmed) return;
    if (!profile.interests.some(i => i.toLowerCase() === trimmed.toLowerCase())) {
      setProfile(prev => ({ ...prev, interests: [...prev.interests, trimmed] }));
    }
    setCustomInterestInput('');
  };

  const removeInterest = (interestToRemove) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interestToRemove)
    }));
  };

  const loadDemo = () => {
    setProfile({ ...DEMO_PROFILE });
    setDemoLoadedNotification(true);
    setTimeout(() => setDemoLoadedNotification(false), 4000);
  };

  const handleCustomSkillKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(customSkillInput);
    }
  };

  const handleCustomInterestKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addInterest(customInterestInput);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile.skills.length === 0) {
      alert('Please add at least one technical or soft skill to proceed with career analysis.');
      return;
    }
    onAnalyze();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header & Demo Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            Step 1 of Analysis Flow
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-0.5">
            Student & Career Profile Intake
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Input your background, skills, and preferences to receive an explainable match.
          </p>
        </div>

        {/* Demo Button */}
        <div>
          <button
            type="button"
            onClick={loadDemo}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium text-xs sm:text-sm shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Try Demo Profile (Warangal, TS)</span>
          </button>
        </div>
      </div>

      {demoLoadedNotification && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>
            <strong>Official Demo Profile Loaded:</strong> Final-year B.Tech CS candidate from Warangal, Telangana with Python, SQL, Web Dev skills.
          </span>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
          <strong>Error:</strong> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Personal & Geographic Demographics */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900 font-bold text-sm">
            <User className="w-4 h-4 text-indigo-600" />
            <span>1. Identity & Location (Tier-2/3 Context)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="e.g. Demo Candidate"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Current Location (City, State) <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={profile.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="e.g. Warangal, Telangana, India"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Helps tailor regional IT hub matches and remote opportunities.
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Education & Academic Status */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900 font-bold text-sm">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span>2. Educational Background</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Degree / Qualification <span className="text-rose-500">*</span>
              </label>
              <select
                value={profile.education}
                onChange={(e) => handleInputChange('education', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
              >
                <option value="B.Tech">B.Tech / B.E.</option>
                <option value="BCA">BCA (Computer Applications)</option>
                <option value="MCA">MCA</option>
                <option value="B.Sc">B.Sc (Computer Science / Math / Stats)</option>
                <option value="M.Sc">M.Sc</option>
                <option value="BBA / MBA">BBA / MBA</option>
                <option value="B.Com">B.Com</option>
                <option value="Diploma">Diploma in Engineering</option>
                <option value="Other Graduate">Other Graduate Degree</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Branch / Specialization <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={profile.degree_branch}
                onChange={(e) => handleInputChange('degree_branch', e.target.value)}
                placeholder="e.g. Computer Science, IT, Data Science"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Current Status / Year <span className="text-rose-500">*</span>
              </label>
              <select
                value={profile.current_status}
                onChange={(e) => handleInputChange('current_status', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
              >
                <option value="Final-year student">Final-year student</option>
                <option value="Pre-final year student">Pre-final year student (3rd year)</option>
                <option value="Recent Graduate (Fresher)">Recent Graduate (Fresher)</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Working Professional (0-2 yrs)">Working Professional (0-2 yrs)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Technical & Soft Skills (40% Weight) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Code className="w-4 h-4 text-indigo-600" />
              <span>3. Your Current Skills</span>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
              40% Match Weight
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Selected Skills ({profile.skills.length}) <span className="text-rose-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2 min-h-12 p-3 rounded-xl bg-slate-50 border border-slate-200">
              {profile.skills.length === 0 ? (
                <span className="text-xs text-slate-400 italic">No skills selected yet. Click popular suggestions below or add custom skills.</span>
              ) : (
                profile.skills.map((s) => (
                  <SkillTag
                    key={s}
                    skill={s}
                    type="highlight"
                    onRemove={() => removeSkill(s)}
                  />
                ))
              )}
            </div>
          </div>

          {/* Add custom skill input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={customSkillInput}
              onChange={(e) => setCustomSkillInput(e.target.value)}
              onKeyDown={handleCustomSkillKeyDown}
              placeholder="Type custom skill and press Enter (e.g. Next.js, Express, Docker)..."
              className="flex-1 px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
            />
            <button
              type="button"
              onClick={() => addSkill(customSkillInput)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>

          {/* Popular skill quick suggestions */}
          <div>
            <span className="text-xs font-medium text-slate-500 block mb-2">
              Popular Quick-Add Skills:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto custom-scrollbar p-1">
              {COMMON_SKILLS.map((item) => {
                const isSelected = profile.skills.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => (isSelected ? removeSkill(item) : addSkill(item))}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}{item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 4: Professional Interests (25% Weight) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Compass className="w-4 h-4 text-indigo-600" />
              <span>4. Career & Domain Interests</span>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              25% Match Weight
            </span>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 min-h-10 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-3">
              {profile.interests.length === 0 ? (
                <span className="text-xs text-slate-400 italic">No interests selected. Select areas below that motivate you.</span>
              ) : (
                profile.interests.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200 text-xs font-medium"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() => removeInterest(item)}
                      className="text-blue-400 hover:text-blue-700 ml-1"
                    >
                      ×
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* Custom interest input */}
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={customInterestInput}
                onChange={(e) => setCustomInterestInput(e.target.value)}
                onKeyDown={handleCustomInterestKeyDown}
                placeholder="Type custom interest (e.g. Healthcare AI, Robotics, FinTech)..."
                className="flex-1 px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
              <button
                type="button"
                onClick={() => addInterest(customInterestInput)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>

            {/* Suggestion tags */}
            <div className="flex flex-wrap gap-1.5">
              {COMMON_INTERESTS.map((item) => {
                const isSelected = profile.interests.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => (isSelected ? removeInterest(item) : addInterest(item))}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white font-medium'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}{item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 5: Experience, Projects & Work Preferences */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>5. Practical Experience & Work Preferences</span>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
              Experience (10%) + Preferences (10%)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Experience Level</label>
              <select
                value={profile.experience_level}
                onChange={(e) => handleInputChange('experience_level', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
              >
                <option value="Fresher (0 years)">Fresher (0 years)</option>
                <option value="0-1 Year">0 - 1 Year</option>
                <option value="1-3 Years">1 - 3 Years</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Work Type</label>
              <select
                value={profile.preferred_work_type}
                onChange={(e) => handleInputChange('preferred_work_type', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
              >
                <option value="Remote / Hybrid">Remote / Hybrid (High Tier-2/3 Demand)</option>
                <option value="Remote Only">Remote Only</option>
                <option value="On-site">On-site</option>
                <option value="Any">Any Work Type</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Relocation Preference</label>
              <select
                value={profile.relocation_preference}
                onChange={(e) => handleInputChange('relocation_preference', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
              >
                <option value="Open to Relocate">Open to Relocate to Metro/Tech Hubs</option>
                <option value="Prefer Local Tier-2/3">Prefer Local Tier-2/3 Regional Hubs</option>
                <option value="Remote Only">Remote Only</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Internships & Training (Optional)
              </label>
              <textarea
                rows={2}
                value={profile.internships}
                onChange={(e) => handleInputChange('internships', e.target.value)}
                placeholder="e.g. 2-month virtual internship in web fundamentals & database design"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Academic or Personal Projects (Optional)
              </label>
              <textarea
                rows={2}
                value={profile.projects}
                onChange={(e) => handleInputChange('projects', e.target.value)}
                placeholder="e.g. Student Attendance Portal using Python & SQLite; Personal Portfolio in HTML/CSS"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Certifications & Badges (Optional)
            </label>
            <input
              type="text"
              value={profile.certifications}
              onChange={(e) => handleInputChange('certifications', e.target.value)}
              placeholder="e.g. IBM SkillsBuild Python Basics, FreeCodeCamp Responsive Web Design"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <button
            type="button"
            onClick={loadDemo}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset with Official Demo Profile</span>
          </button>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing Career Compatibility...</span>
              </>
            ) : (
              <>
                <span>Analyze Career Path & Generate Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
