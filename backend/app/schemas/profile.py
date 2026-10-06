from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field

class UserProfile(BaseModel):
    name: str = Field(..., description="Full Name of the candidate")
    location: str = Field(..., description="City, State, Country (e.g. Warangal, Telangana, India)")
    education: str = Field(..., description="Highest Education Degree (e.g. B.Tech, BCA, MCA, B.Sc)")
    degree_branch: str = Field(..., description="Branch or Specialization (e.g. Computer Science, IT, Data Science)")
    current_status: str = Field(..., description="Current status (e.g. Final-year student, Fresher, Job Seeker)")
    skills: List[str] = Field(default_factory=list, description="List of technical and soft skills")
    interests: List[str] = Field(default_factory=list, description="List of career domains or professional interests")
    experience_level: str = Field("Fresher (0 years)", description="Experience level")
    internships: Optional[str] = Field("", description="Prior internships or industrial training details")
    projects: Optional[str] = Field("", description="Key academic or personal projects built")
    certifications: Optional[str] = Field("", description="Certificates or online courses completed")
    preferred_work_type: str = Field("Any", description="Remote, Hybrid, On-site, or Any")
    relocation_preference: str = Field("Open to Relocate", description="Relocation preference")

class ScoreBreakdown(BaseModel):
    skills_score: float
    interests_score: float
    education_score: float
    experience_score: float
    preferences_score: float
    total_score: int

class RoadmapMilestone(BaseModel):
    step: int
    title: str
    focus_areas: List[str]
    duration_weeks: str
    free_resources: List[str]

class CareerRoadmaps(BaseModel):
    beginner: List[RoadmapMilestone]
    intermediate: List[RoadmapMilestone]
    advanced: List[RoadmapMilestone]

class PortfolioProject(BaseModel):
    title: str
    level: str
    description: str
    tech_stack: List[str]
    resume_impact: str

class CareerMatch(BaseModel):
    id: str
    title: str
    match_percentage: int
    description: str
    matching_skills: List[str]
    missing_skills: List[str]
    priority_skill_gaps: List[str]
    explanation: str
    score_breakdown: ScoreBreakdown
    roadmaps: Dict[str, Any]
    portfolio_projects: List[Dict[str, Any]]
    tier_2_3_opportunity_note: str

class AIInsights(BaseModel):
    career_summary: str
    fit_explanation: str
    strengths: List[str]
    prioritized_skill_gaps: List[str]
    personalized_next_steps: List[str]
    learning_roadmap: Dict[str, Any]
    portfolio_recommendations: List[Dict[str, Any]]
    is_ai_generated: bool
    ai_status: str
    ai_badge_text: str
    provider: str

class AnalysisResponse(BaseModel):
    profile: UserProfile
    top_matches: List[CareerMatch]
    primary_career: CareerMatch
    ai_insights: AIInsights
    sdg_alignment: str
    disclaimer: str
    timestamp: str
