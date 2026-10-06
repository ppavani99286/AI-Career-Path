import re
from typing import List, Dict, Any, Tuple
from app.schemas.profile import UserProfile, ScoreBreakdown, CareerMatch
from app.data.careers_data import get_all_careers

SYNONYMS = {
    "js": "javascript",
    "react.js": "react",
    "reactjs": "react",
    "node": "node.js",
    "nodejs": "node.js",
    "py": "python",
    "ml": "machine learning",
    "ai": "artificial intelligence",
    "dl": "deep learning",
    "html5": "html",
    "css3": "css",
    "tailwind": "tailwind css",
    "postgres": "postgresql",
    "fast api": "fastapi",
    "powerbi": "power bi",
    "bi": "business intelligence",
    "seo": "search engine optimization",
    "ui": "ui design",
    "ux": "ux research",
    "figma tool": "figma",
    "aws": "cloud computing (aws/azure/gcp)",
    "azure": "cloud computing (aws/azure/gcp)",
    "gcp": "cloud computing (aws/azure/gcp)",
    "cloud": "cloud computing (aws/azure/gcp)",
    "nlp": "large language models",
    "llm": "large language models",
    "generative ai": "large language models",
    "genai": "large language models",
    "dsa": "data structures",
    "data structures & algorithms": "data structures",
    "algorithms": "algorithms"
}

def normalize_text(text: str) -> str:
    cleaned = re.sub(r"[^a-zA-Z0-9\s/+#]", "", text.lower()).strip()
    return SYNONYMS.get(cleaned, cleaned)

def match_skill(user_skill: str, career_skill: str) -> bool:
    norm_user = normalize_text(user_skill)
    norm_career = normalize_text(career_skill)
    if norm_user == norm_career:
        return True
    if norm_user in norm_career or norm_career in norm_user:
        return True
    return False

def calculate_career_match(profile: UserProfile, career: Dict[str, Any]) -> CareerMatch:
    # 1. Skills Score (40% max: 28 for required, 12 for useful)
    req_skills = career.get("required_skills", [])
    useful_skills = career.get("useful_skills", [])
    user_skills = profile.skills

    matched_required = []
    missing_required = []
    for req in req_skills:
        if any(match_skill(u, req) for u in user_skills):
            matched_required.append(req)
        else:
            missing_required.append(req)

    matched_useful = []
    missing_useful = []
    for use in useful_skills:
        if any(match_skill(u, use) for u in user_skills):
            matched_useful.append(use)
        else:
            missing_useful.append(use)

    req_ratio = len(matched_required) / max(len(req_skills), 1)
    use_ratio = len(matched_useful) / max(len(useful_skills), 1)

    skills_score = round((req_ratio * 28.0) + (use_ratio * 12.0), 1)
    skills_score = min(max(skills_score, 0.0), 40.0)

    # 2. Interests Score (25% max)
    career_interests = career.get("interests", [])
    user_interests = profile.interests
    matched_interests = []
    for c_int in career_interests:
        if any(normalize_text(u) in normalize_text(c_int) or normalize_text(c_int) in normalize_text(u) for u in user_interests):
            matched_interests.append(c_int)

    interest_ratio = len(matched_interests) / max(len(career_interests), 1)
    interests_score = round(min(interest_ratio * 25.0 + (5.0 if matched_interests else 0.0), 25.0), 1)
    if not user_interests:
        interests_score = 12.0  # neutral mid-ground if omitted

    # 3. Education Score (15% max)
    edu_backgrounds = [normalize_text(e) for e in career.get("education_background", [])]
    user_edu_str = normalize_text(f"{profile.education} {profile.degree_branch}")
    
    education_score = 8.0
    for eb in edu_backgrounds:
        if eb in user_edu_str or any(word in user_edu_str for word in eb.split() if len(word) > 2):
            education_score = 15.0
            break
    if "computer" in user_edu_str or "it" in user_edu_str or "data" in user_edu_str:
        education_score = max(education_score, 14.0)

    # 4. Experience Score (10% max)
    experience_score = 8.0
    if profile.internships and len(profile.internships.strip()) > 5:
        experience_score += 1.0
    if profile.projects and len(profile.projects.strip()) > 5:
        experience_score += 1.0
    experience_score = min(experience_score, 10.0)

    # 5. Preferences Score (10% max)
    preferences_score = 10.0
    work_pref = profile.preferred_work_type.lower()
    if "remote" in work_pref and "remote" in career.get("tier_2_3_opportunity_note", "").lower():
        preferences_score = 10.0
    elif "relocate" in profile.relocation_preference.lower():
        preferences_score = 10.0
    else:
        preferences_score = 9.0

    total_score = int(round(skills_score + interests_score + education_score + experience_score + preferences_score))
    total_score = min(max(total_score, 10), 99)

    matching_skills = list(dict.fromkeys(matched_required + matched_useful))
    missing_skills = list(dict.fromkeys(missing_required + missing_useful))
    priority_skill_gaps = missing_required

    # Build human-readable deterministic explanation
    explanation = (
        f"Match Score: {total_score}%. "
        f"Skills component contributed {skills_score:.1f}/40 based on {len(matched_required)}/{len(req_skills)} core required skills verified. "
        f"Interests contributed {interests_score:.1f}/25, matching your enthusiasm for {', '.join(user_interests[:3]) if user_interests else 'technology'}. "
        f"Your educational foundation in {profile.degree_branch} ({profile.education}) contributes {education_score:.1f}/15, "
        f"and your current readiness and practical projects contribute {experience_score:.1f}/10 and {preferences_score:.1f}/10 for preferences."
    )

    score_breakdown = ScoreBreakdown(
        skills_score=skills_score,
        interests_score=interests_score,
        education_score=education_score,
        experience_score=experience_score,
        preferences_score=preferences_score,
        total_score=total_score
    )

    return CareerMatch(
        id=career["id"],
        title=career["title"],
        match_percentage=total_score,
        description=career["description"],
        matching_skills=matching_skills,
        missing_skills=missing_skills,
        priority_skill_gaps=priority_skill_gaps,
        explanation=explanation,
        score_breakdown=score_breakdown,
        roadmaps=career.get("roadmaps", {}),
        portfolio_projects=career.get("portfolio_projects", []),
        tier_2_3_opportunity_note=career.get("tier_2_3_opportunity_note", "")
    )

def rank_careers_for_profile(profile: UserProfile) -> List[CareerMatch]:
    all_careers = get_all_careers()
    results = [calculate_career_match(profile, c) for c in all_careers]
    # Sort descending by match percentage
    results.sort(key=lambda x: x.match_percentage, reverse=True)
    return results
