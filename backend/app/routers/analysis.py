from datetime import datetime
import json
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.db_models import ProfileRecord, AnalysisHistory
from app.schemas.profile import UserProfile, AnalysisResponse
from app.services.matcher import rank_careers_for_profile
from app.services.ai_service import generate_career_insights
from app.config import settings

router = APIRouter(prefix="/api", tags=["Career Analysis"])

DEMO_PROFILE = {
    "name": "Demo Candidate",
    "location": "Warangal, Telangana, India",
    "education": "B.Tech",
    "degree_branch": "Computer Science",
    "current_status": "Final-year student",
    "skills": ["Python", "SQL", "HTML", "CSS", "JavaScript"],
    "interests": ["Data Science", "AI", "Web Development"],
    "experience_level": "Fresher (0 years)",
    "internships": "2-month virtual internship in web basics",
    "projects": "Student Attendance Portal using Python & SQLite; Personal Portfolio in HTML/CSS",
    "certifications": "Python for Everybody (Coursera Audit), Web Basics Badge",
    "preferred_work_type": "Remote / Hybrid",
    "relocation_preference": "Open to Relocate"
}

@router.get("/demo-profile", response_model=UserProfile)
def get_demo_profile():
    """Returns the official IBM SkillsBuild demo profile for testing."""
    return UserProfile(**DEMO_PROFILE)

@router.post("/analyze", response_model=AnalysisResponse)
async def analyze_career_profile(profile: UserProfile, db: Session = Depends(get_db)):
    """
    Submits user profile, calculates deterministic match scores (Skills 40%, Interests 25%,
    Education 15%, Experience 10%, Preferences 10%), runs backend Gemini AI guidance
    (with deterministic fallback), and logs the session to SQLite.
    """
    if not profile.skills:
        raise HTTPException(status_code=400, detail="Please provide at least one skill to analyze career paths.")

    # 1. Deterministic Career Ranking
    ranked_matches = rank_careers_for_profile(profile)
    if not ranked_matches:
        raise HTTPException(status_code=500, detail="Unable to calculate career matches.")

    primary = ranked_matches[0]

    # 2. AI Guidance (Gemini with Fallback)
    ai_insights = await generate_career_insights(profile, ranked_matches[:5])

    # 3. Store record into SQLite for persistence
    try:
        profile_row = ProfileRecord(
            name=profile.name,
            location=profile.location,
            education=profile.education,
            degree_branch=profile.degree_branch,
            current_status=profile.current_status,
            skills_json=json.dumps(profile.skills),
            interests_json=json.dumps(profile.interests),
            experience_level=profile.experience_level,
            internships=profile.internships,
            projects=profile.projects,
            certifications=profile.certifications,
            preferred_work_type=profile.preferred_work_type,
            relocation_preference=profile.relocation_preference
        )
        db.add(profile_row)
        db.commit()
        db.refresh(profile_row)

        history_row = AnalysisHistory(
            profile_id=profile_row.id,
            top_career=primary.title,
            top_score=primary.match_percentage,
            result_json=json.dumps({
                "top_career": primary.title,
                "top_score": primary.match_percentage,
                "matching_skills": primary.matching_skills,
                "missing_skills": primary.missing_skills
            }),
            ai_status=ai_insights.ai_status
        )
        db.add(history_row)
        db.commit()
    except Exception as db_err:
        # DB logging is non-blocking to prevent user flow interruption
        db.rollback()

    response_data = AnalysisResponse(
        profile=profile,
        top_matches=ranked_matches,
        primary_career=primary,
        ai_insights=ai_insights,
        sdg_alignment="Aligned with UN SDG 8: Decent Work and Economic Growth (Target 8.6: Substantially reduce youth not in employment, education or training).",
        disclaimer="Guidance Only: This system is developed as an educational project for the IBM SkillsBuild AICTE Internship. It does not guarantee employment, fixed salaries, or real-time corporate vacancies. It is not an official IBM product or endorsement.",
        timestamp=datetime.utcnow().isoformat()
    )

    return response_data

@router.get("/ai-status")
def get_ai_status():
    """Check whether Gemini AI is genuinely configured in the backend."""
    is_configured = bool(settings.GEMINI_API_KEY and settings.GEMINI_API_KEY != "your_gemini_api_key_here")
    return {
        "gemini_configured": is_configured,
        "mode": "Google Gemini (gemini-3.8-flash)" if is_configured else "Deterministic Fallback Engine",
        "notice": "Key is securely stored in backend environment variables and never exposed to the frontend."
    }

