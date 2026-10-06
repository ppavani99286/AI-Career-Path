"""
Curated dataset of 15 Career Paths for AI Career Path & Job Guidance System.
Aligned with SDG 8: Decent Work and Economic Growth and Tier-2/3 employment context.
"""

CAREERS_DATA = [
    {
        "id": "data-analyst",
        "title": "Data Analyst",
        "category": "Data & AI",
        "description": "Analyzes raw data to uncover trends, build business dashboards, and help organizations make data-informed operational and strategic decisions.",
        "tier_2_3_opportunity_note": "High demand in regional business hubs and remote data-ops teams. Strong entry point for tier-2/3 graduates with SQL and spreadsheet skills.",
        "required_skills": ["SQL", "Python", "Excel", "Data Visualization", "Statistics"],
        "useful_skills": ["Power BI", "Tableau", "Pandas", "NumPy", "Business Intelligence", "Communication"],
        "interests": ["Data Science", "Business Analytics", "Problem Solving", "Visualization", "Research"],
        "education_background": ["B.Tech Computer Science", "B.Tech IT", "BCA", "MCA", "B.Sc Mathematics", "B.Sc Statistics", "B.Com Analytics"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "SQL", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Crucial for writing queries, joins, and aggregations from corporate databases."},
            {"skill": "Power BI / Tableau", "priority": "High", "time_estimate": "2-3 weeks", "reason": "Essential for presenting visual dashboards to non-technical stakeholders."},
            {"skill": "Statistics & EDA", "priority": "Medium", "time_estimate": "2-3 weeks", "reason": "Helps distinguish statistical signal from noise in business metrics."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Spreadsheets & SQL Foundations", "focus_areas": ["Advanced Excel (VLOOKUP, Pivot Tables)", "Relational DBs", "SQL Joins, Group By, Subqueries"], "duration_weeks": "4 weeks", "free_resources": ["IBM SkillsBuild Data Fundamentals", "Khan Academy SQL"]},
                {"step": 2, "title": "Business Intelligence & BI Tools", "focus_areas": ["Power BI Desktop", "DAX basics", "Building interactive multi-page dashboards"], "duration_weeks": "3 weeks", "free_resources": ["Microsoft Learn Power BI Track", "YouTube Chandoo Data"]}
            ],
            "intermediate": [
                {"step": 3, "title": "Python for Data Analysis", "focus_areas": ["Pandas DataFrames", "Data Wrangling & Cleaning", "Matplotlib & Seaborn visualizations"], "duration_weeks": "4 weeks", "free_resources": ["FreeCodeCamp Data Analysis with Python", "Kaggle Learn Pandas"]},
                {"step": 4, "title": "Applied Business Case Studies", "focus_areas": ["Cohort analysis", "Sales funnel tracking", "Customer churn modeling"], "duration_weeks": "3 weeks", "free_resources": ["NPTEL Business Analytics", "Kaggle Community Datasets"]}
            ],
            "advanced": [
                {"step": 5, "title": "Automated ETL & Cloud Warehousing", "focus_areas": ["Google BigQuery or Snowflake basics", "Scheduled pipeline scripts", "Data storytelling"], "duration_weeks": "4 weeks", "free_resources": ["IBM SkillsBuild Cloud & Big Data", "Coursera Audited Specializations"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "E-Commerce Customer Retention & Sales Dashboard",
                "level": "Beginner / Intermediate",
                "description": "Cleaned a 50,000-row transaction dataset using SQL & Python, and built an executive Power BI dashboard with KPI metrics, regional breakdown, and cohort retention.",
                "tech_stack": ["SQL", "Power BI", "Excel", "Python"],
                "resume_impact": "Demonstrates end-to-end data extraction, hygiene, and stakeholder-ready executive visualization."
            },
            {
                "title": "Tier-2/3 Regional Agricultural Price Trends Analyzer",
                "level": "Intermediate",
                "description": "Interactive dashboard analyzing local mandi pricing data across rural districts to predict seasonal commodity spikes.",
                "tech_stack": ["Python", "Pandas", "Streamlit", "Plotly"],
                "resume_impact": "Directly highlights real-world grassroots impact relevant to local regional economy and SDG 8."
            }
        ]
    },
    {
        "id": "data-scientist",
        "title": "Data Scientist",
        "category": "Data & AI",
        "description": "Blends mathematics, statistical modeling, machine learning, and domain knowledge to extract predictive insights from structured and unstructured data.",
        "tier_2_3_opportunity_note": "Great scope for remote roles in analytics agencies, fintech, and healthtech startups without needing to relocate immediately.",
        "required_skills": ["Python", "Machine Learning", "Statistics", "SQL", "Pandas"],
        "useful_skills": ["Scikit-Learn", "Deep Learning", "Data Visualization", "R", "Feature Engineering", "Storytelling"],
        "interests": ["Data Science", "Machine Learning", "Mathematics", "AI", "Research"],
        "education_background": ["B.Tech Computer Science", "B.Tech IT", "BCA", "MCA", "M.Sc Data Science", "B.Sc Statistics/Math"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Machine Learning Algorithms", "priority": "High", "time_estimate": "5-6 weeks", "reason": "Needed for regression, classification, clustering, and model validation."},
            {"skill": "Feature Engineering", "priority": "High", "time_estimate": "3 weeks", "reason": "Prepares real-world messy data into robust mathematical inputs."},
            {"skill": "Hypothesis Testing", "priority": "Medium", "time_estimate": "2 weeks", "reason": "Validates experiments and model significance rigorously."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Math & Applied Python Foundations", "focus_areas": ["Linear algebra, probability, inferential statistics", "NumPy & Pandas indexing", "Data cleanup"], "duration_weeks": "4 weeks", "free_resources": ["Khan Academy Linear Algebra", "IBM SkillsBuild Python Basics"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Supervised & Unsupervised ML", "focus_areas": ["Regression, Decision Trees, Random Forests, XGBoost", "Cross-validation & ROC-AUC", "K-Means"], "duration_weeks": "6 weeks", "free_resources": ["Scikit-Learn Official User Guide", "Andrew Ng Machine Learning Specialization (Audit)"]},
                {"step": 3, "title": "Model Deployment & Explainability", "focus_areas": ["FastAPI model serving", "SHAP / LIME interpretability", "Docker containerization"], "duration_weeks": "3 weeks", "free_resources": ["FastAPI Documentation", "FreeCodeCamp ML Deployment"]}
            ],
            "advanced": [
                {"step": 4, "title": "Production Data Science & Deep Learning", "focus_areas": ["PyTorch fundamentals", "MLflow tracking", "A/B testing in production"], "duration_weeks": "5 weeks", "free_resources": ["Fast.ai Deep Learning for Coders", "Papers with Code"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Loan Default Prediction Engine with Explainable AI",
                "level": "Intermediate",
                "description": "Trained an XGBoost model on financial credit risk data, reaching 89% AUC-ROC, with SHAP values explaining rejection factors transparently.",
                "tech_stack": ["Python", "Scikit-Learn", "XGBoost", "FastAPI", "SHAP"],
                "resume_impact": "Showcases end-to-end predictive modeling paired with ethical and explainable decision-making."
            }
        ]
    },
    {
        "id": "ml-engineer",
        "title": "ML Engineer",
        "category": "Data & AI",
        "description": "Designs, trains, tests, and deploys scalable machine learning pipelines and models into production software systems.",
        "tier_2_3_opportunity_note": "High remote-first demand with multinational engineering firms hiring distributed talent across India.",
        "required_skills": ["Python", "Machine Learning", "Deep Learning", "Docker", "Git", "REST APIs"],
        "useful_skills": ["PyTorch", "TensorFlow", "MLflow", "CI/CD", "Kubernetes", "Linux"],
        "interests": ["Machine Learning", "AI", "Cloud", "Software Engineering", "Mathematics"],
        "education_background": ["B.Tech Computer Science", "B.Tech IT", "BCA", "MCA", "M.Tech AI/Data"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Model Serving & APIs", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Bridges the gap between a Jupyter notebook model and live production service."},
            {"skill": "Docker & Containerization", "priority": "High", "time_estimate": "2 weeks", "reason": "Standardizes model execution environments across cloud infrastructure."},
            {"skill": "MLOps & CI/CD", "priority": "Medium", "time_estimate": "3 weeks", "reason": "Automates retraining and model artifact versioning."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Advanced Python & Software Architecture", "focus_areas": ["OOP in Python", "Data Structures & Algorithms", "Unit testing with pytest", "Git workflows"], "duration_weeks": "4 weeks", "free_resources": ["Python Morsels", "IBM SkillsBuild Git Course"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Deep Learning & Model Training", "focus_areas": ["PyTorch tensors, loss functions, optimizers", "CNNs and Transformers", "Hyperparameter tuning"], "duration_weeks": "6 weeks", "free_resources": ["PyTorch Official Tutorials", "DeepLearning.AI Short Courses"]},
                {"step": 3, "title": "Model Serving & Packaging", "focus_areas": ["Serving models with FastAPI / Triton", "ONNX runtime optimization", "Dockerizing inference apps"], "duration_weeks": "3 weeks", "free_resources": ["Full Stack Deep Learning Course"]}
            ],
            "advanced": [
                {"step": 4, "title": "MLOps Pipeline Automation", "focus_areas": ["MLflow experiment tracking", "Data validation with Great Expectations", "GitHub Actions CI/CD"], "duration_weeks": "4 weeks", "free_resources": ["Made With ML (Goku Mohandas)"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Automated Plant Disease Detection & Inference API",
                "level": "Intermediate / Advanced",
                "description": "Trained a MobileNetV3 vision model on crop leaves, exported to ONNX, and packaged in a Dockerized FastAPI service with sub-50ms latency.",
                "tech_stack": ["PyTorch", "FastAPI", "Docker", "ONNX", "OpenCV"],
                "resume_impact": "Proves proficiency in production-readiness, optimization, and practical deployment."
            }
        ]
    },
    {
        "id": "ai-engineer",
        "title": "AI Engineer",
        "category": "Data & AI",
        "description": "Builds generative AI applications, integrates Large Language Models (LLMs), constructs RAG systems, and develops autonomous agentic workflows.",
        "tier_2_3_opportunity_note": "The fastest-growing domain offering global remote opportunities for developers who can integrate LLM APIs and build practical AI tools.",
        "required_skills": ["Python", "Large Language Models", "Prompt Engineering", "REST APIs", "Vector Databases"],
        "useful_skills": ["LangChain", "LlamaIndex", "Embeddings", "FastAPI", "Git", "React"],
        "interests": ["AI", "Generative AI", "NLP", "Innovation", "Software Engineering"],
        "education_background": ["B.Tech Computer Science", "B.Tech IT", "BCA", "MCA", "Any Engineering Graduate"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "RAG (Retrieval-Augmented Generation)", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Connecting proprietary docs to LLMs is the #1 enterprise AI requirement."},
            {"skill": "Vector Databases & Embeddings", "priority": "High", "time_estimate": "2 weeks", "reason": "Crucial for semantic search and fast vector retrieval (Chroma, Pinecone)."},
            {"skill": "Prompt Engineering & Evaluation", "priority": "Medium", "time_estimate": "2 weeks", "reason": "Needed to reduce hallucinations and enforce structured JSON responses."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Foundational AI & LLM APIs", "focus_areas": ["Gemini / OpenAI API SDKs", "Structured outputs, system prompts", "Token budgeting & error handling"], "duration_weeks": "3 weeks", "free_resources": ["DeepLearning.AI Prompt Engineering", "Google AI Studio Quickstarts"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Vector Embeddings & RAG Architectures", "focus_areas": ["ChromaDB / FAISS", "Chunking strategies & hybrid search", "Building a Q&A knowledge engine"], "duration_weeks": "4 weeks", "free_resources": ["LangChain Documentation", "Pinecone Learn Guides"]},
                {"step": 3, "title": "Autonomous Agents & Function Calling", "focus_areas": ["Tool-use and tool-calling paradigms", "LangGraph workflows", "Guardrails and evaluation"], "duration_weeks": "4 weeks", "free_resources": ["LlamaIndex Tutorials", "Hugging Face Generative AI Track"]}
            ],
            "advanced": [
                {"step": 4, "title": "Fine-Tuning & Multi-Modal Systems", "focus_areas": ["LoRA / QLoRA fine-tuning", "Vision and Audio multi-modal pipelines", "Production monitoring"], "duration_weeks": "4 weeks", "free_resources": ["HuggingFace Course", "Weights & Biases Courses"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Government Schemes AI Assistant for Rural Citizens",
                "level": "Intermediate",
                "description": "Multilingual RAG assistant that ingests state and central welfare PDF guidelines, indexing them into ChromaDB to answer citizen questions in local languages.",
                "tech_stack": ["Python", "Google Gemini API", "ChromaDB", "FastAPI", "React"],
                "resume_impact": "Direct alignment with SDG 8, social welfare, and advanced generative AI implementation."
            }
        ]
    },
    {
        "id": "software-developer",
        "title": "Software Developer",
        "category": "Software Engineering",
        "description": "Constructs robust computer software, implements core algorithms, maintains codebase health, and solves problems across business domains.",
        "tier_2_3_opportunity_note": "Foundational role with widespread campus hiring and off-campus mass recruitment across Indian IT services (TCS, Infosys, Wipro, Accenture) and tech startups.",
        "required_skills": ["Data Structures", "Algorithms", "Java or Python", "Git", "SQL"],
        "useful_skills": ["OOP", "Design Patterns", "Unit Testing", "Operating Systems", "Computer Networks"],
        "interests": ["Software Engineering", "Problem Solving", "Coding", "Algorithms", "Technology"],
        "education_background": ["B.Tech (Any Branch)", "BCA", "MCA", "B.Sc Computer Science", "Diploma in CS"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Data Structures & Algorithms", "priority": "High", "time_estimate": "6-8 weeks", "reason": "Standard screening benchmark for IT service and product company interviews."},
            {"skill": "Object-Oriented Programming (OOP)", "priority": "High", "time_estimate": "2-3 weeks", "reason": "Critical for clean code design, inheritance, and modularity in team repos."},
            {"skill": "Git & Collaborative Development", "priority": "Medium", "time_estimate": "1-2 weeks", "reason": "Required from Day 1 on any software engineering team."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Core Programming & OOP", "focus_areas": ["Variables, loops, control flow", "Classes, inheritance, polymorphism", "Basic file I/O & exception handling"], "duration_weeks": "4 weeks", "free_resources": ["IBM SkillsBuild Programming Fundamentals", "W3Schools"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Data Structures & Algorithmic Problem Solving", "focus_areas": ["Arrays, Strings, Linked Lists, Stacks, Queues", "Trees, Graphs, Recursion, Binary Search", "Time & Space complexity (Big-O)"], "duration_weeks": "6 weeks", "free_resources": ["NeetCode 150", "GeeksforGeeks DSA Course"]},
                {"step": 3, "title": "Relational Databases & Clean Architecture", "focus_areas": ["Database normalization & SQL queries", "Layered application structure", "Writing unit tests"], "duration_weeks": "3 weeks", "free_resources": ["SQLBolt", "FreeCodeCamp"]}
            ],
            "advanced": [
                {"step": 4, "title": "Design Patterns & System Design Basics", "focus_areas": ["Factory, Singleton, Observer patterns", "Horizontal vs Vertical scaling", "Caching & message queues"], "duration_weeks": "4 weeks", "free_resources": ["Refactoring.Guru", "ByteByteGo YouTube Channel"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Hospital Bed & Clinic Appointment Allocation System",
                "level": "Beginner / Intermediate",
                "description": "Desktop or web-based management system with role-based access, concurrency handling, and automated priority queue scheduling for patients.",
                "tech_stack": ["Python or Java", "SQLite", "OOP Design", "Pytest / JUnit"],
                "resume_impact": "Proves understanding of data structures, relational integrity, and clean modular code."
            }
        ]
    },
    {
        "id": "frontend-developer",
        "title": "Frontend Developer",
        "category": "Web Development",
        "description": "Crafts interactive, responsive, and accessible user interfaces for web applications using modern JavaScript/TypeScript frameworks.",
        "tier_2_3_opportunity_note": "Abundant freelance, remote, and agency opportunities. Visual portfolio projects make it easy to demonstrate skills directly to hiring managers.",
        "required_skills": ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
        "useful_skills": ["Tailwind CSS", "TypeScript", "Next.js", "Git", "REST APIs", "Web Accessibility (a11y)"],
        "interests": ["Web Development", "UI/UX Design", "Frontend", "Creative Tech", "Design"],
        "education_background": ["B.Tech (Any Branch)", "BCA", "MCA", "B.Sc CS", "Any Graduate with coding aptitude"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "React & Component Lifecycle", "priority": "High", "time_estimate": "4-5 weeks", "reason": "Industry default framework for building interactive single-page apps."},
            {"skill": "Modern JavaScript (ES6+)", "priority": "High", "time_estimate": "3 weeks", "reason": "Async/await, Promises, closures, destructuring are essential for React."},
            {"skill": "Tailwind CSS & Mobile-First Design", "priority": "Medium", "time_estimate": "2 weeks", "reason": "Ensures apps look professional on mobile devices used widely in Tier-2/3 regions."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Web Foundations: Semantic HTML, Modern CSS, ES6 JS", "focus_areas": ["HTML5 semantic tags, flexbox, CSS Grid", "DOM manipulation & event listeners", "ES6 arrow functions, array methods, fetch API"], "duration_weeks": "5 weeks", "free_resources": ["MDN Web Docs", "FreeCodeCamp Responsive Web Design"]}
            ],
            "intermediate": [
                {"step": 2, "title": "React.js Core & State Management", "focus_areas": ["JSX, props, state, hooks (useState, useEffect, useMemo)", "Component modularity & lifting state", "Styling with Tailwind CSS"], "duration_weeks": "5 weeks", "free_resources": ["React.dev Official Documentation", "Scrimba React Track"]},
                {"step": 3, "title": "API Integration & Client Routing", "focus_areas": ["Axios / Fetch with error handling", "React Router v6", "Context API / Zustand"], "duration_weeks": "3 weeks", "free_resources": ["The Odin Project", "YouTube Dave Gray React"]}
            ],
            "advanced": [
                {"step": 4, "title": "Performance Optimization & TypeScript", "focus_areas": ["TypeScript with React", "Lighthouse audit scores & lazy loading", "PWA (Progressive Web Apps)"], "duration_weeks": "4 weeks", "free_resources": ["TypeScript for JS Programmers", "Web.dev by Google"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Interactive Local Artisan E-Commerce Marketplace UI",
                "level": "Intermediate",
                "description": "Responsive e-commerce showcase for handicraft artisans from Tier-2/3 towns, featuring category filters, cart state management, and mobile-first animations.",
                "tech_stack": ["React", "Vite", "Tailwind CSS", "Context API", "Lucide Icons"],
                "resume_impact": "Directly demonstrates mastery of responsive design, state handling, and component architecture."
            }
        ]
    },
    {
        "id": "backend-developer",
        "title": "Backend Developer",
        "category": "Web Development",
        "description": "Architects server-side logic, database schemas, RESTful/GraphQL APIs, security authorization, and background task pipelines.",
        "tier_2_3_opportunity_note": "High demand in product companies and IT service centers. Backend skills are universally transferable across industries.",
        "required_skills": ["Python or Node.js", "SQL", "REST APIs", "Git", "Database Design"],
        "useful_skills": ["FastAPI", "Express.js", "PostgreSQL", "Docker", "Authentication (JWT)", "Redis"],
        "interests": ["Backend", "Software Engineering", "Databases", "System Design", "Cloud"],
        "education_background": ["B.Tech CS/IT", "BCA", "MCA", "B.Sc CS", "Any Graduate"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "RESTful API Design & OpenAPI", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Standard protocol for backend communication with web and mobile clients."},
            {"skill": "Relational DB Modeling & ORMs", "priority": "High", "time_estimate": "3 weeks", "reason": "SQL schemas, foreign keys, indexing, and ORM abstractions like SQLAlchemy or Prisma."},
            {"skill": "Authentication & Security", "priority": "Medium", "time_estimate": "2 weeks", "reason": "JWT tokens, password hashing (bcrypt), and role-based permissions."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Server Fundamentals & HTTP Protocol", "focus_areas": ["HTTP verbs, status codes, headers", "Building simple web servers in Node or Python", "JSON serialization"], "duration_weeks": "4 weeks", "free_resources": ["MDN HTTP Guide", "IBM SkillsBuild Backend Basics"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Framework Mastery & Database ORMs", "focus_areas": ["FastAPI or Express.js", "PostgreSQL / SQLite with ORM models", "Authentication with JWT & OAuth"], "duration_weeks": "5 weeks", "free_resources": ["FastAPI Tutorial User Guide", "Traversy Media Backend Crash Courses"]},
                {"step": 3, "title": "Testing & API Documentation", "focus_areas": ["Swagger / OpenAPI spec", "Unit & integration testing with Pytest / Jest", "Environment configs & secret management"], "duration_weeks": "3 weeks", "free_resources": ["Postman Learning Center", "TestDriven.io Guides"]}
            ],
            "advanced": [
                {"step": 4, "title": "Scalability, Caching & Message Queues", "focus_areas": ["Redis caching", "Celery / RabbitMQ background jobs", "Dockerizing backend microservices"], "duration_weeks": "4 weeks", "free_resources": ["Docker Get Started", "System Design Primer on GitHub"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Scalable Multi-Tenant Learning Management API",
                "level": "Intermediate",
                "description": "Production-grade REST API with JWT role-based access (Student/Instructor/Admin), course enrollment workflows, and automated PDF certificate generation.",
                "tech_stack": ["FastAPI", "SQLAlchemy", "SQLite / PostgreSQL", "Pytest", "Docker"],
                "resume_impact": "Exhibits complete backend lifecycle: DB schemas, security, tests, and auto-generated documentation."
            }
        ]
    },
    {
        "id": "full-stack-developer",
        "title": "Full Stack Developer",
        "category": "Web Development",
        "description": "Builds complete web applications from visual frontend interfaces down to the server-side business logic, APIs, and databases.",
        "tier_2_3_opportunity_note": "The most versatile and highly requested profile in early-stage startups and remote agencies looking for independent problem solvers.",
        "required_skills": ["HTML", "CSS", "JavaScript", "React", "Python or Node.js", "SQL", "Git"],
        "useful_skills": ["Tailwind CSS", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "REST APIs"],
        "interests": ["Web Development", "Full Stack", "Software Engineering", "Product Building", "Innovation"],
        "education_background": ["B.Tech (Any Branch)", "BCA", "MCA", "B.Sc CS", "Self-Taught Developers"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Frontend-Backend Integration", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Connecting client-side state seamlessly with async REST APIs and handling edge cases."},
            {"skill": "Database Architecture & State", "priority": "High", "time_estimate": "3 weeks", "reason": "Designing schemas that cleanly map to frontend UI requirements."},
            {"skill": "End-to-End Deployment", "priority": "Medium", "time_estimate": "2 weeks", "reason": "Deploying apps to platforms like Vercel, Render, or Railway with CI/CD."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Full Stack Foundations", "focus_areas": ["HTML/CSS/JS frontend basics", "Python or Node.js backend fundamentals", "SQL databases"], "duration_weeks": "6 weeks", "free_resources": ["The Odin Project Foundations", "FreeCodeCamp"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Modern Frontend & RESTful Backend", "focus_areas": ["React with Tailwind CSS", "FastAPI or Express API", "JWT authentication & relational data modeling"], "duration_weeks": "6 weeks", "free_resources": ["FullStackOpen (University of Helsinki)", "IBM SkillsBuild Full Stack Track"]},
                {"step": 3, "title": "Deployment & Production Readiness", "focus_areas": ["CORS, environment variables", "Hosting on Render/Vercel", "Monitoring & logging"], "duration_weeks": "3 weeks", "free_resources": ["Render Deployment Docs", "Vercel Docs"]}
            ],
            "advanced": [
                {"step": 4, "title": "Full Stack Architecture & Monorepos", "focus_areas": ["TypeScript across the stack", "Next.js SSR / SSG", "Dockerized multi-container setups"], "duration_weeks": "4 weeks", "free_resources": ["Next.js Learn", "Docker for Web Developers"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Community Job & Internship Board for Regional Colleges",
                "level": "Intermediate",
                "description": "End-to-end portal allowing regional colleges to post verified student internships, review applicant resumes, and track hiring stages.",
                "tech_stack": ["React", "FastAPI", "SQLite / PostgreSQL", "Tailwind CSS", "JWT Auth"],
                "resume_impact": "Directly embodies SDG 8 (youth employment) while demonstrating end-to-end full stack execution."
            }
        ]
    },
    {
        "id": "java-developer",
        "title": "Java Developer",
        "category": "Enterprise Software",
        "description": "Engineers high-throughput enterprise systems, banking engines, microservices, and large-scale applications using Java and Spring Boot.",
        "tier_2_3_opportunity_note": "The primary hiring profile for large Indian enterprise technology recruiters (Infosys, TCS, Cognizant, Wipro, Capgemini, HCL).",
        "required_skills": ["Java", "OOP", "SQL", "Spring Boot", "Git"],
        "useful_skills": ["Hibernate/JPA", "Microservices", "Maven", "REST APIs", "Unit Testing (JUnit)", "Docker"],
        "interests": ["Software Engineering", "Enterprise Tech", "Backend", "Banking & Fintech", "Databases"],
        "education_background": ["B.Tech CS/IT/ECE/EEE", "MCA", "BCA", "B.Sc CS"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Spring Boot Framework", "priority": "High", "time_estimate": "4-5 weeks", "reason": "Standard enterprise backend framework across corporate India."},
            {"skill": "JPA / Hibernate", "priority": "High", "time_estimate": "3 weeks", "reason": "Simplifies relational database persistence and query generation in Java."},
            {"skill": "Core Java & Concurrency", "priority": "Medium", "time_estimate": "3 weeks", "reason": "Collections framework, multithreading, and streams are heavily tested in campus interviews."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Core Java & OOP Principles", "focus_areas": ["JVM architecture, data types, loops", "Inheritance, Interfaces, Polymorphism", "Java Collections Framework (List, Set, Map)"], "duration_weeks": "5 weeks", "free_resources": ["Java MOOC (University of Helsinki)", "IBM SkillsBuild Java Foundations"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Spring Boot & RESTful Services", "focus_areas": ["Dependency Injection & Spring IoC", "Building REST controllers", "Spring Data JPA with MySQL / PostgreSQL"], "duration_weeks": "6 weeks", "free_resources": ["Baeldung Spring Boot Tutorials", "Amigoscode Java Track"]},
                {"step": 3, "title": "Security & Testing with JUnit", "focus_areas": ["Spring Security basics", "Unit testing with JUnit 5 & Mockito", "Maven dependency builds"], "duration_weeks": "3 weeks", "free_resources": ["Spring.io Official Quickstart", "GeeksforGeeks Spring Track"]}
            ],
            "advanced": [
                {"step": 4, "title": "Microservices Architecture & Messaging", "focus_areas": ["Spring Cloud & API Gateway", "Kafka / RabbitMQ event streaming", "Docker containerization"], "duration_weeks": "4 weeks", "free_resources": ["Microservices.io", "Java Brains YouTube"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Online Banking Transaction & Account Ledger Service",
                "level": "Intermediate",
                "description": "Secure Spring Boot microservice handling atomic financial transfers, audit logs, and account statements with transactional integrity.",
                "tech_stack": ["Java 17", "Spring Boot", "Spring Data JPA", "H2 / MySQL", "JUnit 5"],
                "resume_impact": "Directly mirrors the production tech stack expected by top IT consulting and fintech employers."
            }
        ]
    },
    {
        "id": "python-developer",
        "title": "Python Developer",
        "category": "Software Engineering",
        "description": "Develops versatile backend services, automation scripts, web scrapers, data processing pipelines, and API integrations using Python.",
        "tier_2_3_opportunity_note": "Rapidly accessible language with broad industry utility across startups, automation agencies, and data engineering departments.",
        "required_skills": ["Python", "OOP", "SQL", "Git", "REST APIs"],
        "useful_skills": ["FastAPI", "Django", "Flask", "Pandas", "Web Scraping", "Docker"],
        "interests": ["Python", "Automation", "Software Engineering", "Data Science", "Backend"],
        "education_background": ["B.Tech (Any Branch)", "BCA", "MCA", "B.Sc (Any Science/Math)", "Diploma in Engineering"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Web Framework (FastAPI / Django)", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Enables writing production-grade web backends and microservices."},
            {"skill": "Object-Oriented & Modular Python", "priority": "High", "time_estimate": "2-3 weeks", "reason": "Moving beyond basic scripts to structured packages and classes."},
            {"skill": "Database Integration & Async I/O", "priority": "Medium", "time_estimate": "2-3 weeks", "reason": "Writing high-concurrency async endpoints with SQL backends."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Python Syntax & Foundations", "focus_areas": ["Data types, lists, dictionaries, sets", "Functions, file handling, modules", "OOP: classes, methods, inheritance"], "duration_weeks": "4 weeks", "free_resources": ["Automate the Boring Stuff with Python", "IBM SkillsBuild Python Course"]}
            ],
            "intermediate": [
                {"step": 2, "title": "FastAPI Web Backend Development", "focus_areas": ["Pydantic validation, path & query parameters", "SQLAlchemy ORM integration", "Async request handling"], "duration_weeks": "4 weeks", "free_resources": ["FastAPI Official Tutorial", "Corey Schafer Python Channel"]},
                {"step": 3, "title": "Automation & Web Scraping", "focus_areas": ["BeautifulSoup & Playwright", "Cron job task scheduling", "Automated email & report pipelines"], "duration_weeks": "3 weeks", "free_resources": ["Real Python Guides", "Scrapy Docs"]}
            ],
            "advanced": [
                {"step": 4, "title": "Packaging, Pytest & Performance", "focus_areas": ["Poetry package manager", "Comprehensive testing with Pytest", "Dockerizing Python applications"], "duration_weeks": "3 weeks", "free_resources": ["TestDriven.io", "Python Packaging User Guide"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Automated Civic Grievance Aggregator & Notifier",
                "level": "Intermediate",
                "description": "Python system that monitors municipal public notices, extracts key citizen announcements, parses PDF notices, and broadcasts alerts via webhooks.",
                "tech_stack": ["Python", "FastAPI", "BeautifulSoup", "SQLite", "Pytest"],
                "resume_impact": "Proves versatility in scraping, data transformation, and reliable automated workflows."
            }
        ]
    },
    {
        "id": "cloud-engineer",
        "title": "Cloud Engineer",
        "category": "Infrastructure & Cloud",
        "description": "Designs, deploys, and manages scalable cloud infrastructure, virtual networks, compute clusters, and storage across AWS, Azure, or GCP.",
        "tier_2_3_opportunity_note": "High demand in Tier-2 IT campuses and remote managed-services providers supporting global client infrastructure.",
        "required_skills": ["Linux", "Cloud Computing (AWS/Azure/GCP)", "Networking", "Git", "Bash Scripting"],
        "useful_skills": ["Docker", "Terraform", "Kubernetes", "CI/CD", "Python", "Monitoring"],
        "interests": ["Cloud", "DevOps", "Infrastructure", "Linux", "Networking"],
        "education_background": ["B.Tech CS/IT/ECE", "BCA", "MCA", "B.Sc CS", "Diploma in Computer Hardware/Networking"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Core Cloud Services (EC2, S3, IAM, VPC)", "priority": "High", "time_estimate": "4-5 weeks", "reason": "Foundational building blocks of 90% of enterprise cloud setups."},
            {"skill": "Linux Server Administration", "priority": "High", "time_estimate": "3 weeks", "reason": "Commands, permissions, shell scripts, and systemd service management."},
            {"skill": "Infrastructure as Code (Terraform)", "priority": "Medium", "time_estimate": "3 weeks", "reason": "Industry standard to spin up repeatable cloud environments automatically."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Linux & Computer Networking Essentials", "focus_areas": ["Linux CLI, file permissions, SSH keys", "TCP/IP, DNS, Subnets, CIDR notation", "Bash scripting basics"], "duration_weeks": "4 weeks", "free_resources": ["Linux Journey", "Professor Messer Network+ Videos"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Public Cloud Core (AWS / Azure)", "focus_areas": ["Compute (EC2/VMs), Object Storage (S3/Blob)", "Identity and Access Management (IAM)", "Virtual Private Clouds (VPC) & Security Groups"], "duration_weeks": "5 weeks", "free_resources": ["AWS Skill Builder (Free)", "Microsoft Learn Azure Fundamentals"]},
                {"step": 3, "title": "Containers & Automated Builds", "focus_areas": ["Docker container basics", "Deploying web apps to cloud compute", "Basic GitHub Actions CI/CD"], "duration_weeks": "3 weeks", "free_resources": ["IBM SkillsBuild Cloud Essentials", "FreeCodeCamp Docker"]}
            ],
            "advanced": [
                {"step": 4, "title": "Infrastructure as Code & Site Reliability", "focus_areas": ["Terraform configuration syntax", "CloudWatch / Prometheus metrics", "Cost optimization strategies"], "duration_weeks": "4 weeks", "free_resources": ["Terraform Learn", "Google SRE Books (Free Online)"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Automated Multi-Tier Web Architecture on AWS with Terraform",
                "level": "Intermediate",
                "description": "Automated IaC script provisioning a secure VPC with public/private subnets, load balancer, auto-scaling web tier, and encrypted S3 bucket.",
                "tech_stack": ["Terraform", "AWS (Free Tier)", "Linux", "Bash", "Nginx"],
                "resume_impact": "Tangible proof of cloud provisioning, networking hygiene, and industry-standard IaC automation."
            }
        ]
    },
    {
        "id": "cybersecurity-analyst",
        "title": "Cybersecurity Analyst",
        "category": "Security & Network",
        "description": "Monitors network traffic, analyzes security alerts, identifies vulnerabilities, and defends corporate digital assets from cyber threats.",
        "tier_2_3_opportunity_note": "A rapidly emerging national priority with Security Operations Centers (SOCs) scaling in Tier-2 capitals across India.",
        "required_skills": ["Networking", "Linux", "Cybersecurity Basics", "Information Security", "Risk Assessment"],
        "useful_skills": ["Wireshark", "SIEM (Splunk/Wazuh)", "Python", "Ethical Hacking", "OWASP Top 10", "Firewalls"],
        "interests": ["Cybersecurity", "Networking", "Ethical Hacking", "Investigation", "Problem Solving"],
        "education_background": ["B.Tech (Any Branch)", "BCA", "MCA", "B.Sc CS/IT", "Diploma in IT"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Network Protocols & Traffic Analysis", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Ability to inspect packet captures in Wireshark and spot anomalous traffic."},
            {"skill": "SOC Monitoring & SIEM Tools", "priority": "High", "time_estimate": "3 weeks", "reason": "Interpreting log streams and triage incident alerts in Splunk or open-source Wazuh."},
            {"skill": "OWASP Web Vulnerabilities", "priority": "Medium", "time_estimate": "2-3 weeks", "reason": "Understanding SQLi, XSS, and broken access controls."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Security Principles & Network Defense", "focus_areas": ["CIA triad, OSI model, ports and protocols", "Firewalls, IDS/IPS basics", "Linux security permissions"], "duration_weeks": "4 weeks", "free_resources": ["IBM SkillsBuild Cybersecurity Fundamentals", "Cisco Networking Academy Free Courses"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Vulnerability Analysis & Packet Inspection", "focus_areas": ["Wireshark packet sniffing", "Nmap port scanning & reconnaissance", "OWASP Top 10 web vulnerabilities"], "duration_weeks": "5 weeks", "free_resources": ["TryHackMe Pre-Security Path", "PortSwigger Web Security Academy"]},
                {"step": 3, "title": "Security Operations Center (SOC) Workflows", "focus_areas": ["SIEM log analysis with Wazuh/Splunk", "Incident response playbooks", "Phishing email header forensics"], "duration_weeks": "4 weeks", "free_resources": ["Splunk Free Training", "Cyberdefenders Blue Team Labs"]}
            ],
            "advanced": [
                {"step": 4, "title": "Threat Hunting & Compliance Frameworks", "focus_areas": ["MITRE ATT&CK framework", "ISO 27001 & CERT-In guidelines", "Python scripting for log automation"], "duration_weeks": "3 weeks", "free_resources": ["MITRE ATT&CK Official Docs", "SANS Reading Room"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Home/Lab Security Operations Center with Wazuh SIEM",
                "level": "Intermediate",
                "description": "Configured a virtualized Linux SOC collecting syslogs from multiple virtual machines, alerting on brute-force SSH attacks and abnormal outbound traffic.",
                "tech_stack": ["Linux", "Wazuh SIEM", "VirtualBox", "Wireshark", "Bash"],
                "resume_impact": "Direct, hands-on evidence of real defensive security monitoring and threat triage."
            }
        ]
    },
    {
        "id": "ui-ux-designer",
        "title": "UI/UX Designer",
        "category": "Design & Product",
        "description": "Researches user behaviors, crafts intuitive user journeys, wireframes, interactive prototypes, and modern visual design systems for digital products.",
        "tier_2_3_opportunity_note": "Thriving freelance and remote market. Global design studios hire purely based on Figma portfolio case studies rather than college pedigree.",
        "required_skills": ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping"],
        "useful_skills": ["Design Systems", "User Testing", "Information Architecture", "HTML/CSS Basics", "Micro-animations"],
        "interests": ["UI/UX Design", "Design", "Creativity", "Human Psychology", "Product Building"],
        "education_background": ["Any Degree (B.Des, B.Tech, B.A, B.Com, BCA, Architecture)"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "Figma Mastery (Components & Auto-layout)", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Industry standard design tool for responsive mobile and web interfaces."},
            {"skill": "User Research & Heuristic Evaluation", "priority": "High", "time_estimate": "2-3 weeks", "reason": "Differentiates genuine UX problem solvers from surface-level graphic makers."},
            {"skill": "Design Systems & Tokenization", "priority": "Medium", "time_estimate": "2 weeks", "reason": "Ensures scalable consistency across typography, color palettes, and components."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Design Foundations & Figma Tools", "focus_areas": ["Visual hierarchy, typography, color theory", "Figma frames, vectors, Auto-Layout", "Reusable components and variants"], "duration_weeks": "4 weeks", "free_resources": ["Figma for Beginners (Figma YouTube)", "Material Design 3 Guidelines"]}
            ],
            "intermediate": [
                {"step": 2, "title": "UX Research & Wireframing Methodologies", "focus_areas": ["User personas, journey mapping, empathy maps", "Low-fidelity wireframing", "Interactive prototyping with transitions"], "duration_weeks": "5 weeks", "free_resources": ["Nielsen Norman Group Articles", "IBM SkillsBuild Design Thinking Course"]},
                {"step": 3, "title": "Design Systems & Usability Testing", "focus_areas": ["Building design tokens", "Accessibility checks (WCAG 2.1)", "Conducting moderated user feedback sessions"], "duration_weeks": "3 weeks", "free_resources": ["Learn UX Free Curriculum", "Laws of UX (Jon Yablonski)"]}
            ],
            "advanced": [
                {"step": 4, "title": "Case Study Crafting & Portfolio Presentation", "focus_areas": ["Documenting problem statement and metrics", "Before/After redesign workflows", "Developer handoff in Figma"], "duration_weeks": "3 weeks", "free_resources": ["Case Study Club", "Mobbin Design Archive"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Vernacular FinTech Micro-Savings App for Rural Women",
                "level": "Intermediate",
                "description": "Comprehensive UX case study with user interviews, low-fi wireframes, and a high-fidelity interactive Figma prototype designed for low-literacy users in Tier-3 towns.",
                "tech_stack": ["Figma", "FigJam", "User Interviews", "WCAG Accessibility"],
                "resume_impact": "Direct alignment with SDG 8 and inclusive design principles, showcasing deep empathy and UX rigor."
            }
        ]
    },
    {
        "id": "business-analyst",
        "title": "Business Analyst",
        "category": "Business & Strategy",
        "description": "Acts as the strategic translator between business stakeholders and technical software engineering teams, defining software requirements and KPIs.",
        "tier_2_3_opportunity_note": "High hiring in banking, insurance, IT consulting, and operations management across regional hubs.",
        "required_skills": ["Business Analysis", "Requirements Gathering", "SQL Basics", "Excel", "Communication"],
        "useful_skills": ["Agile / Scrum", "Jira", "Process Mapping (BPMN)", "Data Visualization", "User Stories"],
        "interests": ["Business Analytics", "Strategy", "Management", "Problem Solving", "Technology"],
        "education_background": ["BBA", "MBA", "B.Tech (Any Branch)", "B.Com", "BCA", "Any Graduate"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "BRD & User Story Documentation", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Drafting Business Requirement Documents and Jira user acceptance criteria."},
            {"skill": "BPMN Process Flowcharts", "priority": "High", "time_estimate": "2 weeks", "reason": "Visualizing as-is vs to-be workflows in Lucidchart or Visio."},
            {"skill": "Agile & Scrum Practices", "priority": "Medium", "time_estimate": "2 weeks", "reason": "Participating in sprint planning, backlog grooming, and standups."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Business Analyst Fundamentals", "focus_areas": ["Role of a BA in SDLC", "Stakeholder interview techniques", "SWOT & GAP analysis"], "duration_weeks": "4 weeks", "free_resources": ["IBM SkillsBuild Working with Agile", "IIBA Free Academic Resources"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Requirements Engineering & Documentation", "focus_areas": ["Writing Epics and User Stories with INVEST criteria", "Functional vs Non-Functional requirements", "Process modeling with BPMN 2.0"], "duration_weeks": "4 weeks", "free_resources": ["Atlassian Agile Coach", "Lucidchart Process Mapping Guides"]},
                {"step": 3, "title": "Data-Driven Business Verification", "focus_areas": ["Writing SQL queries to validate business assumptions", "Excel modeling and pivot analysis", "User Acceptance Testing (UAT)"], "duration_weeks": "3 weeks", "free_resources": ["SQL for Business Analysts (Coursera Audit)", "Kaggle Business Data"]}
            ],
            "advanced": [
                {"step": 4, "title": "Jira Administration & Product Ownership", "focus_areas": ["Managing backlogs in Jira / Confluence", "Product roadmap alignment", "Value stream mapping"], "duration_weeks": "3 weeks", "free_resources": ["Atlassian University Free Badges", "Scrum.org Open Assessments"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Digital Transformation Requirement Specification for Rural Cooperative Bank",
                "level": "Intermediate",
                "description": "Full Business Requirements Document (BRD), BPMN process flows, and 25 Jira user stories for transitioning manual loan ledger records to a cloud portal.",
                "tech_stack": ["BRD Writing", "Jira", "BPMN / Lucidchart", "Excel", "SQL"],
                "resume_impact": "Directly demonstrates business acumen, clear technical writing, and readiness for IT consulting analyst roles."
            }
        ]
    },
    {
        "id": "digital-marketing-specialist",
        "title": "Digital Marketing Specialist",
        "category": "Marketing & Growth",
        "description": "Drives customer acquisition, brand awareness, search visibility, content strategy, and conversion funnels across online channels.",
        "tier_2_3_opportunity_note": "Massive growth in local business digitization, D2C regional brands, and remote performance marketing agencies.",
        "required_skills": ["SEO", "Content Marketing", "Social Media Strategy", "Google Analytics", "Copywriting"],
        "useful_skills": ["Google Ads", "Meta Ads", "Email Marketing", "Canva", "Keyword Research", "A/B Testing"],
        "interests": ["Digital Marketing", "Content Creation", "Creativity", "Social Media", "Business Analytics"],
        "education_background": ["Any Degree (BBA, B.Com, B.A, B.Sc, B.Tech)"],
        "experience_levels": ["Fresher (0 years)", "0-1 Year", "1-3 Years"],
        "skill_gap_requirements": [
            {"skill": "SEO & Technical Site Optimization", "priority": "High", "time_estimate": "3-4 weeks", "reason": "Driving unpaid organic traffic via on-page, off-page, and technical SEO."},
            {"skill": "Google Analytics 4 (GA4)", "priority": "High", "time_estimate": "2-3 weeks", "reason": "Tracking user funnels, bounce rates, conversions, and attribution channels."},
            {"skill": "Performance Marketing / Paid Ads", "priority": "Medium", "time_estimate": "2-3 weeks", "reason": "Budget management and ROAS calculation on Meta and Google Ads."}
        ],
        "roadmaps": {
            "beginner": [
                {"step": 1, "title": "Digital Marketing Foundations & Inbound Strategy", "focus_areas": ["Marketing funnels (TOFU, MOFU, BOFU)", "Content strategy & copywriting principles", "Social media brand management"], "duration_weeks": "4 weeks", "free_resources": ["HubSpot Inbound Marketing Certification", "Google Digital Garage"]}
            ],
            "intermediate": [
                {"step": 2, "title": "Search Engine Optimization (SEO) & GA4", "focus_areas": ["Keyword research with Ahrefs / Ubersuggest free tools", "On-page SEO, meta tags, schema markup", "Setting up GA4 events and conversions"], "duration_weeks": "5 weeks", "free_resources": ["Google Analytics Skillshop Free Certification", "Moz Beginner's Guide to SEO"]},
                {"step": 3, "title": "Paid Advertising & Conversion Optimization", "focus_areas": ["Google Search Ads setup", "Meta Ads Manager audience targeting", "Landing page CRO and A/B split testing"], "duration_weeks": "3 weeks", "free_resources": ["Meta Blueprint Free Courses", "Google Ads Certification"]}
            ],
            "advanced": [
                {"step": 4, "title": "Email Automation & Growth Loops", "focus_areas": ["Mailchimp drip sequences", "Customer retention marketing", "Marketing attribution modeling"], "duration_weeks": "3 weeks", "free_resources": ["Mailchimp Academy", "Reforge Growth Articles"]}
            ]
        },
        "portfolio_projects": [
            {
                "title": "Organic Growth Strategy & Campaign for Local Agri-Business",
                "level": "Intermediate",
                "description": "Engineered an end-to-end SEO keyword strategy, editorial calendar, and social media funnel for a regional food brand, increasing organic reach by 140%.",
                "tech_stack": ["Google Analytics 4", "SEMrush/Ubersuggest", "Canva", "Meta Business Suite"],
                "resume_impact": "Proves tangible ROI generation, analytical metric tracking, and local economic development (SDG 8)."
            }
        ]
    }
]

def get_all_careers():
    return CAREERS_DATA

def get_career_by_id(career_id: str):
    for c in CAREERS_DATA:
        if c["id"] == career_id:
            return c
    return None
