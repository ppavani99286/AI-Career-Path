import os
from pathlib import Path
from dotenv import load_dotenv

# Try loading backend/.env then root .env
backend_dir = Path(__file__).resolve().parent.parent
root_dir = backend_dir.parent

load_dotenv(backend_dir / ".env")
load_dotenv(root_dir / ".env")

class Settings:
    PROJECT_NAME: str = "AI Career Path & Job Guidance System"
    VERSION: str = "1.0.0"
    SDG_GOAL: str = "SDG 8: Decent Work and Economic Growth"
    PROBLEM_STATEMENT: str = (
        "Many skilled individuals in Tier-2/3 cities face employment challenges. "
        "This AI project will suggest personalized job paths based on user skills and interests."
    )
    
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "").strip()
    HOST: str = os.getenv("HOST", "127.0.0.1")
    PORT: int = int(os.getenv("PORT", "8000"))
    FRONTEND_URL: str = os.getenv("FRONTEND_URL", "http://localhost:5173")
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./career_guidance.db")

settings = Settings()
