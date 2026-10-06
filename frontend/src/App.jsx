import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DisclaimerBanner from './components/DisclaimerBanner';
import StepNavigation from './components/StepNavigation';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import MatchesPage from './pages/MatchesPage';
import CareerDetailsPage from './pages/CareerDetailsPage';
import SkillGapPage from './pages/SkillGapPage';
import RoadmapPage from './pages/RoadmapPage';
import ProjectsPage from './pages/ProjectsPage';
import DashboardPage from './pages/DashboardPage';

import { DEMO_PROFILE } from './data/demoProfile';
import { analyzeProfile } from './api/client';

export default function App() {
  const [currentStep, setCurrentStep] = useState('home');
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    education: 'B.Tech',
    degree_branch: '',
    current_status: 'Final-year student',
    skills: [],
    interests: [],
    experience_level: 'Fresher (0 years)',
    internships: '',
    projects: '',
    certifications: '',
    preferred_work_type: 'Remote / Hybrid',
    relocation_preference: 'Open to Relocate'
  });

  const [analysisResult, setAnalysisResult] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStart = () => {
    setCurrentStep('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadDemo = () => {
    setProfile({ ...DEMO_PROFILE });
    setCurrentStep('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeProfile(profile);
      setAnalysisResult(data);
      setSelectedCareer(data.primary_career);
      setCurrentStep('matches');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err.message || 'Failed to analyze profile. Please make sure the backend server is running on port 8000.');
    } finally {
      setLoading(false);
    }
  };

  const handleRetake = () => {
    setCurrentStep('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasResult = Boolean(analysisResult && analysisResult.top_matches);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Top Disclaimer & IBM Statement Banner */}
      <DisclaimerBanner />

      {/* Main Navbar */}
      <Navbar 
        currentStep={currentStep} 
        setStep={setCurrentStep} 
        hasResult={hasResult} 
      />

      {/* Workflow Step Tracker */}
      <StepNavigation 
        currentStep={currentStep} 
        setStep={setCurrentStep} 
        hasResult={hasResult} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentStep === 'home' && (
          <HomePage 
            onStart={handleStart} 
            onLoadDemo={handleLoadDemo} 
          />
        )}

        {currentStep === 'profile' && (
          <ProfilePage
            profile={profile}
            setProfile={setProfile}
            onAnalyze={handleAnalyze}
            loading={loading}
            error={error}
          />
        )}

        {currentStep === 'matches' && (
          <MatchesPage
            analysisResult={analysisResult}
            selectedCareer={selectedCareer}
            setSelectedCareer={setSelectedCareer}
            setStep={setCurrentStep}
          />
        )}

        {currentStep === 'details' && (
          <CareerDetailsPage
            selectedCareer={selectedCareer}
            setStep={setCurrentStep}
          />
        )}

        {currentStep === 'skill-gap' && (
          <SkillGapPage
            selectedCareer={selectedCareer}
            profile={profile}
            setStep={setCurrentStep}
          />
        )}

        {currentStep === 'roadmap' && (
          <RoadmapPage
            selectedCareer={selectedCareer}
            setStep={setCurrentStep}
          />
        )}

        {currentStep === 'projects' && (
          <ProjectsPage
            selectedCareer={selectedCareer}
            profile={analysisResult?.profile || profile}
            aiInsights={analysisResult?.ai_insights}
            setStep={setCurrentStep}
          />
        )}

        {currentStep === 'dashboard' && (
          <DashboardPage
            analysisResult={analysisResult}
            selectedCareer={selectedCareer}
            setStep={setCurrentStep}
            onRetake={handleRetake}
          />
        )}
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
