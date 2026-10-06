import asyncio
import json
import logging
from typing import List, Dict, Any
import httpx
from app.config import settings
from app.schemas.profile import UserProfile, CareerMatch, AIInsights
from app.services.fallback_service import generate_fallback_insights

logger = logging.getLogger(__name__)

GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent"

async def generate_career_insights(profile: UserProfile, top_matches: List[CareerMatch]) -> AIInsights:
    api_key = settings.GEMINI_API_KEY
    if not api_key or api_key == "your_gemini_api_key_here":
        logger.info("GEMINI_API_KEY is not configured. Using deterministic fallback insights.")
        return generate_fallback_insights(profile, top_matches)

    primary = top_matches[0]
    secondary = top_matches[1] if len(top_matches) > 1 else None

    # Structured prompt for Gemini
    prompt = f"""
You are an expert AI Career Counselor and Technical Advisor specializing in SDG 8 (Decent Work and Economic Growth).
You are evaluating a candidate from a Tier-2/3 city to help them bridge regional employment barriers through personalized upskilling and remote/regional tech opportunities.

IMPORTANT INSTRUCTIONS:
- You MUST NOT change or recalculate the numerical match percentages. The deterministic recommendation engine has already computed them.
- Focus specifically on the candidate's real skills, interests, and Tier-2/3 background.
- Provide practical, realistic, and highly motivating guidance.
- Respond ONLY with valid, raw JSON matching the exact schema requested below. Do NOT include markdown code blocks, backticks, or preamble.

CANDIDATE PROFILE:
- Name: {profile.name}
- Location: {profile.location} (Tier-2/3 context)
- Education: {profile.education} in {profile.degree_branch}
- Current Status: {profile.current_status}
- Skills: {', '.join(profile.skills)}
- Interests: {', '.join(profile.interests)}
- Experience Level: {profile.experience_level}
- Internships: {profile.internships or 'None listed'}
- Projects: {profile.projects or 'None listed'}
- Certifications: {profile.certifications or 'None listed'}
- Work Preference: {profile.preferred_work_type}
- Relocation Preference: {profile.relocation_preference}

DETERMINISTIC CAREER RECOMMENDATION RESULTS:
1. Primary Match: {primary.title} ({primary.match_percentage}% match)
   - Matching Skills: {', '.join(primary.matching_skills)}
   - Missing Skills: {', '.join(primary.missing_skills)}
   - Priority Skill Gaps: {', '.join(primary.priority_skill_gaps)}
   - Score Breakdown: Skills {primary.score_breakdown.skills_score}/40, Interests {primary.score_breakdown.interests_score}/25, Education {primary.score_breakdown.education_score}/15, Experience {primary.score_breakdown.experience_score}/10, Preferences {primary.score_breakdown.preferences_score}/10.
{f"2. Secondary Match: {secondary.title} ({secondary.match_percentage}% match)" if secondary else ""}

REQUIRED JSON STRUCTURE:
{{
  "career_summary": "Comprehensive 2-3 sentence personalized career assessment for the candidate",
  "fit_explanation": "Detailed explanation of why the top career match fits the candidate's current skills and interests",
  "strengths": ["Strength 1 with specific skill context", "Strength 2", "Strength 3"],
  "prioritized_skill_gaps": ["Priority gap 1", "Priority gap 2", "Priority gap 3"],
  "personalized_next_steps": ["Actionable step 1 for immediate 30 days", "Step 2 for 60 days", "Step 3 for 90 days", "Step 4 for networking"],
  "learning_roadmap": {{
    "beginner": [
      {{"step": 1, "title": "Milestone title", "focus_areas": ["topic A", "topic B"], "duration_weeks": "3-4 weeks", "free_resources": ["Course 1", "Docs 2"]}}
    ],
    "intermediate": [
      {{"step": 2, "title": "Milestone title", "focus_areas": ["topic C", "topic D"], "duration_weeks": "4-5 weeks", "free_resources": ["Course 3", "Project 4"]}}
    ],
    "advanced": [
      {{"step": 3, "title": "Milestone title", "focus_areas": ["topic E", "topic F"], "duration_weeks": "4 weeks", "free_resources": ["Course 5"]}}
    ]
  }},
  "portfolio_recommendations": [
    {{
      "title": "Project Name",
      "level": "Intermediate",
      "description": "Specific project description addressing a real-world problem or Tier-2/3 local impact",
      "tech_stack": ["Skill1", "Skill2", "Tool3"],
      "resume_impact": "How this showcases competence to employers"
    }}
  ]
}}
"""

    payload = {
        "contents": [
            {
                "parts": [
                    {"text": prompt}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.3,
            "maxOutputTokens": 2048,
            "responseMimeType": "application/json"
        }
    }

    try:
        headers = {
            "Content-Type": "application/json",
            "x-goog-api-key": api_key,
        }
        retry_delays = (1.0, 2.5)
        max_retries = len(retry_delays)

        async with httpx.AsyncClient(timeout=25.0) as client:
            response = None
            for attempt in range(max_retries + 1):
                response = await client.post(
                    GEMINI_API_URL,
                    json=payload,
                    headers=headers
                )
                if response.status_code in (429, 503) and attempt < max_retries:
                    delay = retry_delays[attempt]
                    logger.warning(
                        f"Gemini API returned status code {response.status_code}. Retrying in {delay}s (attempt {attempt + 1}/{max_retries})..."
                    )
                    await asyncio.sleep(delay)
                    continue
                break
            
            if response is None or response.status_code != 200:
                logger.warning(f"Gemini API returned status code {response.status_code if response else 'None'}: {response.text if response else ''}")
                return generate_fallback_insights(profile, top_matches)

            data = response.json()
            candidates = data.get("candidates", [])
            if not candidates:
                logger.warning("Gemini returned empty candidates. Using fallback.")
                return generate_fallback_insights(profile, top_matches)

            raw_text = candidates[0].get("content", {}).get("parts", [{}])[0].get("text", "").strip()
            # Clean possible markdown wrap if LLM wrapped in ```json
            if raw_text.startswith("```"):
                lines = raw_text.splitlines()
                if lines[0].startswith("```"):
                    lines = lines[1:]
                if lines and lines[-1].startswith("```"):
                    lines = lines[:-1]
                raw_text = "\n".join(lines).strip()

            parsed = json.loads(raw_text)

            return AIInsights(
                career_summary=parsed.get("career_summary", primary.description),
                fit_explanation=parsed.get("fit_explanation", primary.explanation),
                strengths=parsed.get("strengths", [f"Strong background in {s}" for s in primary.matching_skills[:3]]),
                prioritized_skill_gaps=parsed.get("prioritized_skill_gaps", primary.priority_skill_gaps),
                personalized_next_steps=parsed.get("personalized_next_steps", [
                    f"Master {primary.priority_skill_gaps[0] if primary.priority_skill_gaps else 'core requirements'}",
                    "Build a real-world portfolio project",
                    "Contribute to open source or remote internships"
                ]),
                learning_roadmap=parsed.get("learning_roadmap", primary.roadmaps),
                portfolio_recommendations=parsed.get("portfolio_recommendations", primary.portfolio_projects),
                is_ai_generated=True,
                ai_status="gemini_active",
                ai_badge_text="Powered by Google Gemini AI (Backend Verified)",
                provider="Google Gemini (gemini-3.8-flash)"
            )

    except Exception as e:
        logger.exception("GEMINI ERROR - FULL DETAILS:")
        return generate_fallback_insights(profile, top_matches)




