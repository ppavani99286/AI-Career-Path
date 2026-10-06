from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import engine, Base
from app.routers import careers_router, analysis_router

# Initialize SQLite tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description=(
        f"**IBM SkillsBuild AICTE Internship Project**\n\n"
        f"**Goal**: {settings.SDG_GOAL}\n\n"
        f"**Original IBM Problem Statement**:\n"
        f"> *\"{settings.PROBLEM_STATEMENT}\"*\n\n"
        f"This API powers explainable career recommendation, skill-gap analysis, "
        f"and Google Gemini-assisted career roadmaps for students and job seekers in Tier-2/3 cities."
    ),
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration allowing local frontend access
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5174",
    "http://192.168.137.27:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    settings.FRONTEND_URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routers
app.include_router(careers_router)
app.include_router(analysis_router)

@app.get("/", tags=["Root"])
def root():
    return {
        "project": settings.PROJECT_NAME,
        "sdg": settings.SDG_GOAL,
        "problem_statement": settings.PROBLEM_STATEMENT,
        "version": settings.VERSION,
        "docs_url": "/docs",
        "status": "healthy"
    }

@app.get("/health", tags=["Health"])
def health_check():
    return {
        "status": "online",
        "database": "sqlite_connected",
        "version": settings.VERSION
    }
