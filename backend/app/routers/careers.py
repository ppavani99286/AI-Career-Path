from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from app.data.careers_data import get_all_careers, get_career_by_id

router = APIRouter(prefix="/api/careers", tags=["Careers"])

@router.get("", response_model=List[Dict[str, Any]])
def list_careers():
    """Retrieve all 15 curated career pathways aligned with SDG 8."""
    return get_all_careers()

@router.get("/{career_id}", response_model=Dict[str, Any])
def get_career_detail(career_id: str):
    """Retrieve deep-dive metadata, skills, roadmaps, and projects for a single career."""
    career = get_career_by_id(career_id)
    if not career:
        raise HTTPException(status_code=404, detail=f"Career '{career_id}' not found.")
    return career
