import json
from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime
from app.database import Base

class ProfileRecord(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    location = Column(String(150), nullable=False)
    education = Column(String(100), nullable=False)
    degree_branch = Column(String(150), nullable=False)
    current_status = Column(String(100), nullable=False)
    skills_json = Column(Text, nullable=False, default="[]")
    interests_json = Column(Text, nullable=False, default="[]")
    experience_level = Column(String(100), nullable=False)
    internships = Column(Text, nullable=True)
    projects = Column(Text, nullable=True)
    certifications = Column(Text, nullable=True)
    preferred_work_type = Column(String(50), nullable=False)
    relocation_preference = Column(String(50), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    def set_skills(self, skills_list):
        self.skills_json = json.dumps(skills_list)

    def get_skills(self):
        return json.loads(self.skills_json) if self.skills_json else []

    def set_interests(self, interests_list):
        self.interests_json = json.dumps(interests_list)

    def get_interests(self):
        return json.loads(self.interests_json) if self.interests_json else []

class AnalysisHistory(Base):
    __tablename__ = "analysis_history"

    id = Column(Integer, primary_key=True, index=True)
    profile_id = Column(Integer, nullable=True)
    top_career = Column(String(100), nullable=False)
    top_score = Column(Integer, nullable=False)
    result_json = Column(Text, nullable=False)
    ai_status = Column(String(50), default="fallback")
    created_at = Column(DateTime, default=datetime.utcnow)
