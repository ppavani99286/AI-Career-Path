import asyncio
import json
from app.data.careers_data import get_all_careers
from app.schemas.profile import UserProfile
from app.services.matcher import rank_careers_for_profile
from app.services.ai_service import generate_career_insights

async def run_diagnostics():
    print("=== Testing Career Dataset ===")
    careers = get_all_careers()
    print(f"Total careers loaded: {len(careers)}")
    assert len(careers) >= 15, "Expected at least 15 career paths"
    titles = [c["title"] for c in careers]
    print(f"Sample titles: {titles[:5]}")

    print("\n=== Testing Demo Profile Matcher ===")
    demo_dict = {
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

    profile = UserProfile(**demo_dict)
    ranked = rank_careers_for_profile(profile)
    print(f"Ranked careers count: {len(ranked)}")
    top = ranked[0]
    print(f"Top match: {top.title} with {top.match_percentage}% match")
    print(f"Matching skills: {top.matching_skills}")
    print(f"Priority skill gaps: {top.priority_skill_gaps}")
    print(f"Score breakdown: {top.score_breakdown}")
    print(f"Explanation: {top.explanation}")

    print("\n=== Testing AI Guidance Service (Fallback Graceful Degradation) ===")
    insights = await generate_career_insights(profile, ranked[:5])
    print(f"AI Status: {insights.ai_status}")
    print(f"AI Badge: {insights.ai_badge_text}")
    print(f"Is AI Generated: {insights.is_ai_generated}")
    print(f"Provider: {insights.provider}")
    print(f"Summary: {insights.career_summary}")
    print(f"Strengths: {insights.strengths}")
    print(f"Next steps count: {len(insights.personalized_next_steps)}")

    print("\nALL BACKEND DIAGNOSTIC CHECKS PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    asyncio.run(run_diagnostics())
