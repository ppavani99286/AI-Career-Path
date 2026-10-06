from typing import List, Dict, Any
from app.schemas.profile import UserProfile, CareerMatch, AIInsights

def generate_fallback_insights(profile: UserProfile, top_matches: List[CareerMatch]) -> AIInsights:
    primary = top_matches[0]
    secondary = top_matches[1] if len(top_matches) > 1 else None
    
    # Strengths based on matching skills & education
    strengths = []
    if primary.matching_skills:
        strengths.append(f"Strong foundation in core technical competencies: {', '.join(primary.matching_skills[:4])}.")
    else:
        strengths.append(f"Educational foundation in {profile.degree_branch} with strong motivation to transition into tech.")
    
    strengths.append(f"Clear focus and intent aligned with {', '.join(profile.interests[:3]) if profile.interests else 'practical technical domains'}.")
    strengths.append(f"Strategic positioning in {profile.location} with ability to leverage remote opportunities and regional hubs under SDG 8.")

    # Prioritized skill gaps
    priority_gaps = primary.priority_skill_gaps[:4]
    if not priority_gaps:
        priority_gaps = primary.missing_skills[:4] if primary.missing_skills else ["Industry-standard unit testing", "Cloud deployment"]

    # Fit explanation
    fit_explanation = (
        f"Based on your profile as a {profile.current_status} with expertise in {', '.join(profile.skills[:3]) if profile.skills else 'foundational computing'}, "
        f"the role of {primary.title} emerges as your top career match ({primary.match_percentage}% match). "
        f"Your competencies directly align with the core requirements of this role. "
        + (f"Additionally, {secondary.title} ({secondary.match_percentage}% match) serves as a complementary alternative career pathway." if secondary else "")
    )

    # Career summary
    career_summary = (
        f"Career Assessment for {profile.name} ({profile.location}): You demonstrate high readiness for {primary.title}. "
        f"By addressing your {len(priority_gaps)} primary skill gap(s) through targeted free coursework and building 2 verifiable portfolio projects, "
        f"you can overcome Tier-2/3 employment barriers and compete effectively for remote and regional tech opportunities."
    )

    # Next steps
    next_steps = [
        f"Dedicate 4-6 weeks to master {priority_gaps[0] if priority_gaps else 'advanced project development'} using free curriculum.",
        f"Build a showcase portfolio project addressing real local challenges (aligned with SDG 8) and publish the code on GitHub.",
        "Refine your LinkedIn and resume highlighting your verified competencies rather than just college coursework.",
        "Join remote developer communities and apply for internships and entry-level positions in regional tech clusters."
    ]

    # Roadmap copy from primary career
    learning_roadmap = primary.roadmaps

    # Portfolio project recommendations
    portfolio_recommendations = primary.portfolio_projects

    return AIInsights(
        career_summary=career_summary,
        fit_explanation=fit_explanation,
        strengths=strengths,
        prioritized_skill_gaps=priority_gaps,
        personalized_next_steps=next_steps,
        learning_roadmap=learning_roadmap,
        portfolio_recommendations=portfolio_recommendations,
        is_ai_generated=False,
        ai_status="fallback",
        ai_badge_text="AI Enhancement Unavailable (Deterministic Engine Active)",
        provider="Deterministic Rule Engine (Fallback)"
    )
