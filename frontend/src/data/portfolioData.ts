import { Project, SkillCategory, ExperienceItem, HackathonItem, CertificationItem, AchievementItem } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: "Praveen L Kumbalur",
  moniker: "PRAVEEN",
  initials: "PK",
  role: "AI/ML Engineer | Full-Stack Developer",
  shortRole: "AI/ML Engineer & Full-Stack Developer",
  location: "Bengaluru, India",
  email: "praveenlk41@gmail.com",
  phone: "+91 8618118952",
  github: "https://github.com/reddy895",
  linkedin: "https://www.linkedin.com/in/praveen-reddy-21b101241/",
  profileImage: "/profile.jpg",
  headline: "BUILDING INTELLIGENT SYSTEMS THAT TURN IDEAS INTO REALITY.",
  supportingText: "Artificial Intelligence Engineering student focused on AI/ML, RAG, computer vision, NLP, and full-stack development.",
  aboutText: "I’m an Artificial Intelligence Engineering student focused on AI/ML, RAG, full-stack development, and intelligent systems. I enjoy turning complex real-world problems into practical, user-focused AI solutions.",
  mission: "BUILD USEFUL INTELLIGENCE",
  focus: "AI + FULL STACK",
  spiderSenseQuote: "Great power. Greater debugging."
};

export const QUICK_STATS = [
  { label: "FOCUS", value: "AI/ML" },
  { label: "CORE", value: "FULL-STACK" },
  { label: "SPECIALTY", value: "RAG" },
  { label: "PERCEPTION", value: "COMPUTER VISION" },
  { label: "LANGUAGE", value: "NLP" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    skills: [
      { name: "Python", description: "Primary language for AI/ML pipelines, deep learning, NLP, and backend microservices." },
      { name: "JavaScript/TypeScript", description: "Type-safe modern web applications, async event handling, and API development." },
      { name: "SQL", description: "Relational querying, schema normalization, and complex database analytics." },
      { name: "C", description: "Foundational computer science, memory management, and algorithm optimization." }
    ]
  },
  {
    title: "AI / ML",
    skills: [
      { name: "RAG", description: "Retrieval-Augmented Generation for grounded question answering and semantic indexing." },
      { name: "Machine Learning", description: "Predictive modeling, feature extraction, evaluation metrics, and supervised learning." },
      { name: "Deep Learning", description: "Neural network architectures, tensor operations, and backpropagation." },
      { name: "NLP", description: "Text tokenization, sentiment extraction, classification, and language models." },
      { name: "Computer Vision", description: "Object segmentation, image classification, contour detection, and filtering." },
      { name: "PyTorch", description: "Dynamic neural computational graphs and model training." },
      { name: "OpenCV", description: "Real-time computer vision, image processing, and matrix transformations." }
    ]
  },
  {
    title: "WEB",
    skills: [
      { name: "React.js", description: "Declarative component-driven interfaces and reactive state management." },
      { name: "Next.js", description: "Production SSR/SSG framework, App Router, server actions, and route handlers." },
      { name: "Node.js", description: "Scalable backend JavaScript runtime, stream processing, and HTTP servers." },
      { name: "Express.js", description: "RESTful API middleware architecture and endpoint routing." },
      { name: "HTML", description: "Semantic markup, web accessibility, and structured document hierarchy." },
      { name: "CSS", description: "Modern responsive layouts, Flexbox, CSS Grid, and custom animations." },
      { name: "Tailwind CSS", description: "Utility-first rapid styling and design system tokens." }
    ]
  },
  {
    title: "DATABASE / TOOLS",
    skills: [
      { name: "PostgreSQL", description: "Enterprise relational database, indexes, and ACID-compliant storage." },
      { name: "MongoDB", description: "Document-oriented NoSQL storage for flexible schemas and high-velocity reads." },
      { name: "Git/GitHub", description: "Version control, feature branching, code reviews, and CI workflows." },
      { name: "Recharts", description: "Composable React data visualization and interactive charting." },
      { name: "Figma", description: "Interactive prototyping, UI/UX wireframing, and component design." }
    ]
  },
  {
    title: "LANGUAGES",
    skills: [
      { name: "Kannada", description: "Native language proficiency.", level: "Native" },
      { name: "English", description: "Fluent professional and technical communication.", level: "Fluent" },
      { name: "Hindi", description: "Fluent spoken and written communication.", level: "Fluent" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ssn-infotech",
    role: "AI/ML Developer",
    company: "SSN Infotech",
    period: "May 2026 – Aug 2026",
    type: "Professional Experience",
    description: [
      "Developed and evaluated machine learning models for classification and prediction tasks.",
      "Performed data cleaning, feature engineering, model training, and performance evaluation.",
      "Collaborated on testing and optimization of AI solutions for practical applications."
    ]
  },
  {
    id: "zidio-development",
    role: "Full Stack Developer Intern",
    company: "Zidio Development",
    period: "Aug 2026 – Present",
    type: "Internship",
    description: [
      "Developed responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Designed and integrated REST APIs, database schemas, and frontend components.",
      "Worked on debugging, testing, and integration to improve application functionality."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "loop",
    number: "01",
    title: "LOOP",
    subtitle: "AI Customer Feedback Intelligence Platform",
    description: "AI-powered SaaS platform that transforms customer feedback into structured intelligence using AI classification, RAG, theme clustering, analytics, and multi-tenant RBAC.",
    fullOverview: "LOOP provides a unified pipeline for ingesting high-volume customer feedback across omnichannel touchpoints. It leverages automated AI classification, vector embeddings for RAG-driven synthesis, dynamic theme clustering, VoC (Voice of Customer) reporting, and role-based access control.",
    problem: "Modern SaaS platforms receive thousands of unstructured reviews and tickets daily across disparate channels, making manual synthesis slow and prone to missed customer sentiment trends.",
    solution: "An automated intelligence engine that ingests, cleans, classifies, and clusters customer signals, paired with a contextual RAG assistant for executives to query customer pain points in natural language.",
    architecture: "Next.js App Router frontend with TypeScript, PostgreSQL database, vector similarity retrieval via RAG, and LLM orchestration with Gemini and Ollama models.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Gemini", "Ollama", "RAG"],
    highlights: [
      "AI Classification",
      "RAG Assistant",
      "Embeddings",
      "Vector Search",
      "Theme Clustering",
      "VoC Reports",
      "RBAC"
    ],
    githubUrl: "https://github.com/reddy895",
    category: "AI/ML",
    interactiveType: "loop"
  },
  {
    id: "civicpulse",
    number: "02",
    title: "CivicPulse",
    subtitle: "Multilingual AI Digital Public Good",
    description: "Multilingual AI platform that transforms citizen voice and text into structured civic intelligence, identifies geographic infrastructure hotspots, and prioritizes interventions.",
    fullOverview: "CivicPulse empowers urban authorities and public citizens by transcribing and translating citizen grievance submissions across regional dialects into structured geo-referenced incidents. Utilizing DBSCAN spatial clustering and MCDA algorithms, it flags critical civic repair priorities.",
    problem: "Civic grievances are frequently submitted in local languages and scattered across phone calls, notes, and portals without spatial coordination, delaying municipal emergency responses.",
    solution: "A multilingual pipeline utilizing Whisper NLP, geographic clustering via DBSCAN, and Leaflet GeoJSON GIS layers to highlight municipal intervention hotspots based on severity scores.",
    architecture: "Python FastAPI backend delivering spatial clustering services, React frontend with Leaflet GIS mapping, and NLP processing pipeline for multilingual citizen voice and text ingestion.",
    technologies: ["Python", "FastAPI", "React", "NLP", "DBSCAN", "GIS", "Leaflet", "GeoJSON"],
    highlights: [
      "Multilingual NLP",
      "Voice/Text ingestion",
      "DBSCAN clustering",
      "GIS",
      "MCDA",
      "Infrastructure prioritization"
    ],
    githubUrl: "https://github.com/reddy895",
    category: "AI/ML",
    interactiveType: "civicpulse"
  },
  {
    id: "krishimithra",
    number: "03",
    title: "KrishiMithra",
    subtitle: "AI Smart Agriculture Platform",
    description: "AI-powered agriculture platform using computer vision for crop disease detection with multilingual farmer assistance, weather insights, and crop recommendations.",
    fullOverview: "KrishiMithra bridges technological barriers for smallholder farmers. By uploading crop leaf photos, farmers receive instant computer vision diagnostics indicating pathogen type and severity, coupled with audio-guided agronomic treatment instructions in their native language.",
    problem: "Crop disease outbreaks can decimate harvests when agronomists are not physically available. Farmers need immediate, accessible guidance in their spoken native language.",
    solution: "An edge-capable computer vision system detecting leaf foliar blights, integrated with localized weather forecasting algorithms and multilingual speech/chat advisories.",
    architecture: "Computer vision processing pipeline using OpenCV and deep convolutional models, Python backend, React frontend, and Node.js/MongoDB microservices for weather telemetry and localized agronomy data.",
    technologies: ["Python", "OpenCV", "NLP", "React", "Node.js", "MongoDB"],
    highlights: [
      "Computer Vision",
      "Crop Disease Detection",
      "Multilingual Assistance",
      "Weather Intelligence",
      "AI Recommendations"
    ],
    githubUrl: "https://github.com/reddy895",
    category: "AI/ML",
    interactiveType: "krishimithra"
  },
  {
    id: "malware-detection",
    number: "04",
    title: "Malware Detection",
    subtitle: "Machine Learning Threat Classification System",
    description: "Machine learning system for detecting and classifying potentially malicious files using preprocessing, feature extraction, and model evaluation.",
    fullOverview: "A cybersecurity classification framework designed to analyze executable binaries and file signatures. It processes PE headers, byte entropy distributions, and structural opcode metrics to identify benign vs malicious files with high precision.",
    problem: "Polymorphic and obfuscated malware frequently evade static signature checks, necessitating behavioral and statistical pattern recognition through machine learning.",
    solution: "A machine learning pipeline utilizing feature extraction (entropy, section hashes, imported API routines) and ensemble classification models to detect anomalous files.",
    architecture: "Python data science stack with Scikit-learn, Pandas, and NumPy for feature engineering, model training, cross-validation, and ROC-AUC evaluation.",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    highlights: [
      "Machine Learning",
      "Feature Engineering",
      "Classification",
      "Threat Detection"
    ],
    githubUrl: "https://github.com/reddy895",
    category: "Systems",
    interactiveType: "malware"
  },
  {
    id: "women-safety-cctv",
    number: "05",
    title: "SafeWatch AI",
    subtitle: "Women Safety CCTV Surveillance Detector",
    description: "An intelligent, real-time video surveillance and threat detection system engineered specifically to enhance women's safety in public spaces, transport hubs, and campus environments.",
    fullOverview: "SafeWatch AI continuously monitors CCTV video feeds, tracks human interactions, analyzes body motion and gestures, accurately distinguishes harmless social interactions from physical assaults, and automatically dispatches immediate emergency alerts to authorities and designated contacts.",
    problem: "Women face physical threats in public spaces where human monitoring is infeasible at scale. Traditional CCTV systems are reactive — they record incidents but cannot detect or prevent threats in real time.",
    solution: "A real-time computer vision pipeline using pose estimation, motion vector analysis, and spatial proximity tracking to classify interactions as benign or threatening, triggering instant emergency alerts with geo-stamped evidence clips.",
    architecture: "Python + OpenCV real-time video pipeline with YOLOv8 for multi-person detection, MediaPipe Pose for skeletal keypoint tracking, custom LSTM classifier trained on threat-interaction sequences, FastAPI alert microservice, and React live dashboard.",
    technologies: ["Python", "OpenCV", "YOLOv8", "MediaPipe", "PyTorch", "LSTM", "FastAPI", "React"],
    highlights: [
      "Real-time CCTV Monitoring",
      "Pose Estimation",
      "Threat Classification",
      "Emergency Alert Dispatch",
      "Motion Vector Analysis",
      "Multi-Camera Support",
      "Geo-stamped Evidence"
    ],
    githubUrl: "https://github.com/reddy895",
    category: "AI/ML",
    interactiveType: "safewatchai"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "promptwars-winner",
    placement: "🏆 1ST PLACE WINNER",
    title: "Winner — PromptWars x Abhiyantrix",
    event: "Abhiyantrix // Google Developers Event",
    institution: "Google Developer Groups (GDG) Community",
    date: "2025",
    description: "Winner of the PromptWars generative AI showdown at Abhiyantrix, hosted in collaboration with Google Developers Community. Solved advanced generative AI challenges, context injection, prompt engineering optimizations, and agentic workflows under strict real-time evaluation criteria."
  },
  {
    id: "solution-expo-1st",
    placement: "🏆 1ST PLACE",
    title: "AI-Powered Solution Expo Demo Day",
    event: "Demo Day Competition",
    institution: "Aditya College of Engineering and Technology",
    date: "April 2026",
    description: "Awarded 1st place for architecting and demonstrating high-impact AI-powered solution prototypes addressing real-world engineering challenges."
  }
];

export const HACKATHONS: HackathonItem[] = [
  {
    id: "hackfest-gfg",
    role: "TEAM CAPTAIN",
    name: "HackFest",
    organizer: "GeeksforGeeks Classroom Program"
  },
  {
    id: "epoch-26",
    role: "PARTICIPANT",
    name: "EPOCH'26 Grand National Hackathon",
    organizer: "Grand National Competition"
  },
  {
    id: "advaya-2k26",
    role: "PARTICIPANT",
    name: "Advaya 2K26 24-Hour Hackathon",
    organizer: "24-Hour Technical Sprint"
  },
  {
    id: "hack-buza-2024",
    role: "PARTICIPANT",
    name: "Hack Buza",
    organizer: "IKYA 2024"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "ml-unified-mentor",
    title: "Machine Learning Professional Certificate",
    issuer: "Unified Mentor"
  },
  {
    id: "python-using-ai",
    title: "Python Using AI",
    issuer: "AI For Techies"
  },
  {
    id: "ai-data-analytics",
    title: "AI for Data & Analytics",
    issuer: "SkillDrift"
  },
  {
    id: "ai-tools-mastery",
    title: "AI Tools Mastery Workshop",
    issuer: "Clapingo"
  }
];
