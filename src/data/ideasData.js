// MYSTORA — CREATIVA 300+ PROJECTS DATASET
// 12 Domains, minimum 25 distinct projects each (Total: 300 projects)

export const IDEA_DOMAINS = [
  "All",
  "AI & Machine Learning",
  "Web Development",
  "Education Technology",
  "Healthcare Technology",
  "Cybersecurity",
  "Data Science & Analytics",
  "Environment & Sustainability",
  "Smart Cities & IoT",
  "Finance & FinTech",
  "Travel & Tourism",
  "Productivity & Automation",
  "Social Impact & Community"
];

// Backward compatibility alias
export const IDEA_CATEGORIES = IDEA_DOMAINS;

export const DIFFICULTY_LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export const COLLECTIONS = [
  { id: 'all', label: 'All Projects', icon: 'Sparkles' },
  { id: 'beginner', label: 'Beginner-Friendly', icon: 'Smile' },
  { id: 'portfolio', label: 'Portfolio-Worthy', icon: 'Briefcase' },
  { id: 'hackathon', label: 'Hackathon Winners', icon: 'Trophy' },
  { id: 'ai', label: 'AI-Integrated', icon: 'Cpu' }
];

export const IDEAS_DATA = [
  {
    "id": "proj-ai-01",
    "title": "NeuroLex: Edge-Powered Offline Speech Translator",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Travelers and emergency teams in remote areas lack internet connectivity, disabling cloud translation tools.",
    "problemStatement": "Travelers and emergency teams in remote areas lack internet connectivity, disabling cloud translation tools.",
    "solution": "An on-device web app using quantized WebAssembly speech models to translate spoken audio offline.",
    "proposedSolution": "An on-device web app using quantized WebAssembly speech models to translate spoken audio offline.",
    "realWorldUseCase": "Disaster relief medical personnel communicating with non-English speakers without cellular connectivity.",
    "targetAudience": "Disaster relief medical personnel communicating with non-English speakers without cellular connectivity.",
    "mainFeatures": [
      "On-device speech-to-text via WASM",
      "Offline neural translation for 12 languages",
      "Waveform visualizer and confidence score",
      "IndexedDB local conversation history"
    ],
    "features": [
      "On-device speech-to-text via WASM",
      "Offline neural translation for 12 languages",
      "Waveform visualizer and confidence score",
      "IndexedDB local conversation history"
    ],
    "frontend": "React 19, Tailwind, Web Audio API",
    "backend": "Client-side WASM (Transformers.js)",
    "database": "IndexedDB / Dexie.js",
    "otherTech": "ONNX Runtime Web, Web Workers",
    "techStack": [
      "React",
      "Transformers.js",
      "WASM",
      "IndexedDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Operates 100% client-side with zero cloud calls, guaranteeing total privacy.",
    "roadmap": [
      "Audio streaming pipeline with Web Workers",
      "Quantized model loading and caching",
      "Translation UI and confidence badges",
      "PWA offline manifest packaging"
    ],
    "extensions": [
      "Regional dialect acoustic fine-tuning",
      "WebRTC direct peer-to-peer sync"
    ],
    "mvpScope": "5-second voice capture and browser-based English-to-Spanish translation.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-02",
    "title": "SymptoScan: Multimodal Clinical Note Summarizer",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Patients struggle to decipher complex medical discharge papers and doctor jargon.",
    "problemStatement": "Patients struggle to decipher complex medical discharge papers and doctor jargon.",
    "solution": "A multimodal AI agent that parses medical notes, highlights warnings, and explains diagnoses in plain language.",
    "proposedSolution": "A multimodal AI agent that parses medical notes, highlights warnings, and explains diagnoses in plain language.",
    "realWorldUseCase": "Post-discharge patient reviewing medication schedules and warning symptoms at home.",
    "targetAudience": "Post-discharge patient reviewing medication schedules and warning symptoms at home.",
    "mainFeatures": [
      "OCR prescription document upload",
      "Medical jargon simplification engine",
      "Medication schedule calendar extractor",
      "Red-flag symptom alert banner"
    ],
    "features": [
      "OCR prescription document upload",
      "Medical jargon simplification engine",
      "Medication schedule calendar extractor",
      "Red-flag symptom alert banner"
    ],
    "frontend": "Next.js 15, Tailwind, Lucide React",
    "backend": "FastAPI, LangChain, PyTorch",
    "database": "PostgreSQL with pgvector",
    "otherTech": "HuggingFace Transformers, Tesseract OCR",
    "techStack": [
      "Next.js",
      "FastAPI",
      "LangChain",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Provides interactive term definitions with layperson analogies and drug interaction checks.",
    "roadmap": [
      "Document upload & OCR pipeline",
      "RAG pipeline with medical dictionary",
      "Interactive terminology tooltip UI",
      "Printable medication calendar generator"
    ],
    "extensions": [
      "Voice-guided question-answering for seniors",
      "Integration with FHIR health records"
    ],
    "mvpScope": "Upload prescription photo and receive simplified 3-bullet summary with schedule.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-03",
    "title": "SynthTab: Differentially Private Synthetic Data Generator",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Data scientists cannot access realistic healthcare and finance datasets due to HIPAA/GDPR constraints.",
    "problemStatement": "Data scientists cannot access realistic healthcare and finance datasets due to HIPAA/GDPR constraints.",
    "solution": "A tabular GAN engine generating synthetic datasets matching statistical distributions without leaking PII.",
    "proposedSolution": "A tabular GAN engine generating synthetic datasets matching statistical distributions without leaking PII.",
    "realWorldUseCase": "Fintech startups training fraud detection models on synthetic transaction records.",
    "targetAudience": "Fintech startups training fraud detection models on synthetic transaction records.",
    "mainFeatures": [
      "Marginal distribution matching",
      "Differential privacy budget (epsilon) dial",
      "Correlation matrix drift inspector",
      "One-click CSV/Parquet export"
    ],
    "features": [
      "Marginal distribution matching",
      "Differential privacy budget (epsilon) dial",
      "Correlation matrix drift inspector",
      "One-click CSV/Parquet export"
    ],
    "frontend": "React, Vite, Chart.js, Tailwind",
    "backend": "Flask, PyTorch, CTGAN",
    "database": "DuckDB / Local File Storage",
    "otherTech": "Scikit-Learn, Pandas",
    "techStack": [
      "React",
      "PyTorch",
      "CTGAN",
      "DuckDB"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "5-6 weeks",
    "uniqueness": "Includes mathematical epsilon privacy guarantees and automated data leakage tests.",
    "roadmap": [
      "Tabular data profiling module",
      "CTGAN training worker process",
      "Drift and fidelity visualization dashboard",
      "Export pipeline with privacy report"
    ],
    "extensions": [
      "Synthetic image generator for skin lesions",
      "SQL schema auto-connector"
    ],
    "mvpScope": "Upload a 1,000-row CSV and generate 1,000 synthetic rows with correlation matching.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-04",
    "title": "PatchGuard: Autonomous Code Security Refactor Agent",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Developers miss subtle SQL injections, memory leaks, and XSS flaws during rapid hackathons.",
    "problemStatement": "Developers miss subtle SQL injections, memory leaks, and XSS flaws during rapid hackathons.",
    "solution": "An automated static analysis and LLM refactoring agent that suggests verified PR diffs.",
    "proposedSolution": "An automated static analysis and LLM refactoring agent that suggests verified PR diffs.",
    "realWorldUseCase": "Open-source maintainer triaging community PRs for OWASP Top 10 vulnerabilities.",
    "targetAudience": "Open-source maintainer triaging community PRs for OWASP Top 10 vulnerabilities.",
    "mainFeatures": [
      "AST parsing and taint analysis",
      "OWASP vulnerability highlight",
      "Side-by-side diff generator with patch explanation",
      "Automated regression test suite generator"
    ],
    "features": [
      "AST parsing and taint analysis",
      "OWASP vulnerability highlight",
      "Side-by-side diff generator with patch explanation",
      "Automated regression test suite generator"
    ],
    "frontend": "React, Monaco Editor, Tailwind",
    "backend": "Node.js, Tree-sitter, OpenAI API",
    "database": "SQLite / Redis",
    "otherTech": "Docker, GitHub API",
    "techStack": [
      "React",
      "Monaco Editor",
      "Node.js",
      "Docker"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Generates compensating test cases alongside patches to prove vulnerabilities are mitigated.",
    "roadmap": [
      "GitHub webhook PR listener",
      "Tree-sitter AST vulnerability scanner",
      "LLM patch synthesis prompt pipeline",
      "Interactive Monaco diff viewer"
    ],
    "extensions": [
      "VS Code IDE live extension",
      "Automated CI/CD GitHub Action runner"
    ],
    "mvpScope": "Paste vulnerable JavaScript snippet and view highlighted security flaw with 1-click fix.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-05",
    "title": "SignBridge: Real-Time ASL Video to Speech Bridge",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Deaf and hard-of-hearing individuals face communication barriers in daily public interactions.",
    "problemStatement": "Deaf and hard-of-hearing individuals face communication barriers in daily public interactions.",
    "solution": "A computer vision web app translating American Sign Language finger-spelling and gestures into synthesized voice.",
    "proposedSolution": "A computer vision web app translating American Sign Language finger-spelling and gestures into synthesized voice.",
    "realWorldUseCase": "Deaf customer ordering at a cafe or communicating with a government clerk.",
    "targetAudience": "Deaf customer ordering at a cafe or communicating with a government clerk.",
    "mainFeatures": [
      "Real-time 21-point hand landmark tracking",
      "Gesture sequence temporal classification",
      "Web Speech API voice synthesis",
      "Bidirectional speech-to-animated-hand replay"
    ],
    "features": [
      "Real-time 21-point hand landmark tracking",
      "Gesture sequence temporal classification",
      "Web Speech API voice synthesis",
      "Bidirectional speech-to-animated-hand replay"
    ],
    "frontend": "React, MediaPipe Hands, Tailwind",
    "backend": "FastAPI, TensorFlow.js / ONNX",
    "database": "IndexedDB",
    "otherTech": "Web Speech API, Canvas API",
    "techStack": [
      "React",
      "MediaPipe",
      "TensorFlow.js",
      "Web Speech API"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Runs completely inside client browser using MediaPipe with no expensive GPU cloud server.",
    "roadmap": [
      "Webcam feed & landmark stream capture",
      "LSTM/Transformer gesture classifier",
      "Speech synthesis playback integration",
      "Reverse speech-to-text text display"
    ],
    "extensions": [
      "Full continuous sentence ASL recognition",
      "Custom gesture training studio"
    ],
    "mvpScope": "Detect 26 ASL alphabet letters in real time from webcam with audio output.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-06",
    "title": "DialectFlow: Low-Resource Speech & Dialect Preserver",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Endangered indigenous languages and regional dialects lack modern language model representation.",
    "problemStatement": "Endangered indigenous languages and regional dialects lack modern language model representation.",
    "solution": "A crowdsourced audio recording and transfer-learning platform for preserving low-resource tongues.",
    "proposedSolution": "A crowdsourced audio recording and transfer-learning platform for preserving low-resource tongues.",
    "realWorldUseCase": "Linguistic researchers documenting regional indigenous stories and idioms.",
    "targetAudience": "Linguistic researchers documenting regional indigenous stories and idioms.",
    "mainFeatures": [
      "Sentence prompting and audio recording",
      "Spectrogram acoustic feature extractor",
      "Phonetic alignment visualizer",
      "Community dialect translation dictionary"
    ],
    "features": [
      "Sentence prompting and audio recording",
      "Spectrogram acoustic feature extractor",
      "Phonetic alignment visualizer",
      "Community dialect translation dictionary"
    ],
    "frontend": "Next.js 14, Wavesurfer.js, Tailwind",
    "backend": "Django REST, PyTorch, Torchaudio",
    "database": "PostgreSQL, AWS S3",
    "otherTech": "Wav2Vec2, Hugging Face Hub",
    "techStack": [
      "Next.js",
      "Django",
      "PyTorch",
      "Wavesurfer.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Focuses specifically on phonetic phoneme mapping for non-written oral traditions.",
    "roadmap": [
      "Microphone recording and waveform editor",
      "Audio annotation & transcript alignment",
      "Acoustic model fine-tuning runner",
      "Community dictionary search engine"
    ],
    "extensions": [
      "Offline mobile app with local audio caching",
      "Oral history interactive map"
    ],
    "mvpScope": "Record 10 audio phrases in a chosen language and generate an interactive soundboard dictionary.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-07",
    "title": "DocuPulse: Hybrid Dense-Sparse RAG Research Companion",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Students researching scientific papers get hallucinatory summaries from standard LLMs.",
    "problemStatement": "Students researching scientific papers get hallucinatory summaries from standard LLMs.",
    "solution": "A retrieval-augmented generation engine combining BM25 keyword search with dense vector embeddings.",
    "proposedSolution": "A retrieval-augmented generation engine combining BM25 keyword search with dense vector embeddings.",
    "realWorldUseCase": "Graduate student analyzing 50 PDF papers for literature review citations.",
    "targetAudience": "Graduate student analyzing 50 PDF papers for literature review citations.",
    "mainFeatures": [
      "PDF parsing with citation extraction",
      "Hybrid search with reciprocal rank fusion",
      "Verifiable inline citation backlinks",
      "Interactive concept dependency graph"
    ],
    "features": [
      "PDF parsing with citation extraction",
      "Hybrid search with reciprocal rank fusion",
      "Verifiable inline citation backlinks",
      "Interactive concept dependency graph"
    ],
    "frontend": "React, Tailwind, Lucide, Cytoscape.js",
    "backend": "Python FastAPI, LangChain",
    "database": "Qdrant / ChromaDB, SQLite",
    "otherTech": "PyMuPDF, Sentence-Transformers",
    "techStack": [
      "React",
      "FastAPI",
      "ChromaDB",
      "LangChain"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Highlights exact bounding-box coordinates on the source PDF page for every generated sentence.",
    "roadmap": [
      "PDF upload & chunking pipeline",
      "Dual indexing: BM25 + BGE Embeddings",
      "Chat UI with page-highlight preview",
      "Citation bibliography exporter"
    ],
    "extensions": [
      "Multi-document cross-comparison matrix",
      "Automated LaTeX bibtex generator"
    ],
    "mvpScope": "Upload a single 10-page research paper and ask queries with direct paragraph highlights.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-08",
    "title": "ForestEye: Satellite Deforestation Early Warning Radar",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Illegal logging operations destroy remote rainforests weeks before conservation rangers discover them.",
    "problemStatement": "Illegal logging operations destroy remote rainforests weeks before conservation rangers discover them.",
    "solution": "A computer vision model analyzing multi-spectral Sentinel-2 satellite imagery to detect canopy loss.",
    "proposedSolution": "A computer vision model analyzing multi-spectral Sentinel-2 satellite imagery to detect canopy loss.",
    "realWorldUseCase": "Environmental NGO monitoring protected Amazonian nature reserves.",
    "targetAudience": "Environmental NGO monitoring protected Amazonian nature reserves.",
    "mainFeatures": [
      "Sentinel-2 GeoTIFF imagery ingestion",
      "NDVI vegetation index delta calculator",
      "U-Net convolutional canopy loss detector",
      "Automated SMS/Email perimeter alerts"
    ],
    "features": [
      "Sentinel-2 GeoTIFF imagery ingestion",
      "NDVI vegetation index delta calculator",
      "U-Net convolutional canopy loss detector",
      "Automated SMS/Email perimeter alerts"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "FastAPI, Rasterio, PyTorch",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Sentinel Hub API, Celery",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "5 weeks",
    "uniqueness": "Calculates biomass carbon loss estimation in metric tons for every flagged sector.",
    "roadmap": [
      "Mapbox satellite tile overlay",
      "NDVI spectral delta calculation",
      "U-Net forest loss inference model",
      "Automated alerts & PDF audit generator"
    ],
    "extensions": [
      "Drone patrol waypoint dispatch exporter",
      "Wildfire scar detection extension"
    ],
    "mvpScope": "Select a geographic bounding box and detect forest cover change between two historical months.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-09",
    "title": "LexiClear: Plain-English Legal Contract Redlining Assistant",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Freelancers sign ambiguous client contracts with predatory non-compete clauses and IP traps.",
    "problemStatement": "Freelancers sign ambiguous client contracts with predatory non-compete clauses and IP traps.",
    "solution": "An NLP contract auditor that flags hazardous legal clauses and offers standard balanced replacements.",
    "proposedSolution": "An NLP contract auditor that flags hazardous legal clauses and offers standard balanced replacements.",
    "realWorldUseCase": "Freelance web designer reviewing an agency master services agreement.",
    "targetAudience": "Freelance web designer reviewing an agency master services agreement.",
    "mainFeatures": [
      "PDF/Docx contract ingestion",
      "Hazardous clause classifier (IP, Indemnity, Liability)",
      "Plain-English risk explanation",
      "1-click standard clause replacement generator"
    ],
    "features": [
      "PDF/Docx contract ingestion",
      "Hazardous clause classifier (IP, Indemnity, Liability)",
      "Plain-English risk explanation",
      "1-click standard clause replacement generator"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "FastAPI, Spacy, Llama-3 API",
    "database": "Supabase PostgreSQL",
    "otherTech": "PDF.js, Diff-match-patch",
    "techStack": [
      "React",
      "FastAPI",
      "Supabase",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Color-coded risk severity heatmaps (High/Med/Low) with freelancer-friendly leverage tips.",
    "roadmap": [
      "File drag-and-drop & text extractor",
      "Clause segmentation with Spacy",
      "Risk analysis prompt engine",
      "Side-by-side redlined document exporter"
    ],
    "extensions": [
      "Contract negotiation email drafter",
      "Multi-jurisdiction state law toggle"
    ],
    "mvpScope": "Upload NDA document and receive color-coded risk assessment with 3 suggested revisions.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-10",
    "title": "FableForge: Adaptive Illustrated Storybook Synthesizer",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Children with reading difficulties lose motivation when stories are static and not aligned to their reading level.",
    "problemStatement": "Children with reading difficulties lose motivation when stories are static and not aligned to their reading level.",
    "solution": "An AI storyteller that creates custom illustrated fables featuring the child as the hero with phonetic tuning.",
    "proposedSolution": "An AI storyteller that creates custom illustrated fables featuring the child as the hero with phonetic tuning.",
    "realWorldUseCase": "Parent creating bedtime phonics adventure for a child practicing 'ch' and 'sh' sounds.",
    "targetAudience": "Parent creating bedtime phonics adventure for a child practicing 'ch' and 'sh' sounds.",
    "mainFeatures": [
      "Phonetic target sound selector",
      "Branching interactive story tree",
      "Consistency-locked character image generation",
      "Text-to-speech with word-by-word karaoke highlight"
    ],
    "features": [
      "Phonetic target sound selector",
      "Branching interactive story tree",
      "Consistency-locked character image generation",
      "Text-to-speech with word-by-word karaoke highlight"
    ],
    "frontend": "React, Tailwind, Canvas API",
    "backend": "Node.js, Express, Stable Diffusion API",
    "database": "MongoDB",
    "otherTech": "ElevenLabs API, Web Speech API",
    "techStack": [
      "React",
      "Node.js",
      "MongoDB",
      "Canvas API"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Guarantees pedagogical phonics repetition while keeping the narrative engaging and non-repetitive.",
    "roadmap": [
      "Story wizard form (hero, theme, sounds)",
      "Branching narrative generator",
      "Illustrated scene generation pipeline",
      "Karaoke read-along audio player"
    ],
    "extensions": [
      "Printable PDF illustrated booklet export",
      "Multi-language bilingual side-by-side"
    ],
    "mvpScope": "Generate a 3-page interactive picture book with voice narration and choice buttons.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-11",
    "title": "DeepTruth: Multimodal Media Authenticity Inspector",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Viral misinformation and deepfake videos undermine elections, news credibility, and personal reputations.",
    "problemStatement": "Viral misinformation and deepfake videos undermine elections, news credibility, and personal reputations.",
    "solution": "A forensic web suite analyzing facial boundary artifacts, audio frequency anomalies, and metadata.",
    "proposedSolution": "A forensic web suite analyzing facial boundary artifacts, audio frequency anomalies, and metadata.",
    "realWorldUseCase": "Fact-checker investigating a suspicious viral political video clip.",
    "targetAudience": "Fact-checker investigating a suspicious viral political video clip.",
    "mainFeatures": [
      "Video frame facial landmark extraction",
      "Audio frequency spectral artifact detector",
      "EXIF and compression metadata inspector",
      "Confidence score with forensic breakdown"
    ],
    "features": [
      "Video frame facial landmark extraction",
      "Audio frequency spectral artifact detector",
      "EXIF and compression metadata inspector",
      "Confidence score with forensic breakdown"
    ],
    "frontend": "Next.js 14, Tailwind, Recharts",
    "backend": "FastAPI, OpenCV, Librosa, PyTorch",
    "database": "PostgreSQL",
    "otherTech": "FFmpeg, Hugging Face",
    "techStack": [
      "Next.js",
      "FastAPI",
      "OpenCV",
      "PyTorch"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "5-6 weeks",
    "uniqueness": "Combines temporal eye-blinking frequency checks with audio-visual lip synchronization lag.",
    "roadmap": [
      "Video upload & frame extraction with FFmpeg",
      "Facial artifact CNN inference worker",
      "Audio voiceprint spectrum analysis",
      "Forensic visual report dashboard"
    ],
    "extensions": [
      "Live webcam deepfake detection stream",
      "Browser extension for Twitter/YouTube"
    ],
    "mvpScope": "Analyze a 15-second MP4 video and output deepfake probability score with visual heatmaps.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-12",
    "title": "BriefMate: Meeting Audio Intelligence & Action Matrix",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Teams waste hours listening to meeting recordings or deciphering messy handwritten notes.",
    "problemStatement": "Teams waste hours listening to meeting recordings or deciphering messy handwritten notes.",
    "solution": "An audio meeting transcriber that separates speakers, extracts decisions, and exports Jira/Trello tasks.",
    "proposedSolution": "An audio meeting transcriber that separates speakers, extracts decisions, and exports Jira/Trello tasks.",
    "realWorldUseCase": "Project manager conducting a 45-minute sprint planning call with 5 teammates.",
    "targetAudience": "Project manager conducting a 45-minute sprint planning call with 5 teammates.",
    "mainFeatures": [
      "Diarization (Who spoke when)",
      "Key decision & action item extraction",
      "Deadlines and assigned owner auto-tagging",
      "One-click export to Trello and GitHub Issues"
    ],
    "features": [
      "Diarization (Who spoke when)",
      "Key decision & action item extraction",
      "Deadlines and assigned owner auto-tagging",
      "One-click export to Trello and GitHub Issues"
    ],
    "frontend": "React 19, Tailwind, Lucide React",
    "backend": "Node.js, Express, Whisper API",
    "database": "PostgreSQL, Prisma",
    "otherTech": "Trello REST API, GitHub API",
    "techStack": [
      "React",
      "Node.js",
      "Prisma",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Automatically drafts follow-up summary emails addressed to individual participants.",
    "roadmap": [
      "Audio upload & transcription pipeline",
      "Speaker diarization parser",
      "Action item NLP extraction prompt",
      "Task board sync integrations"
    ],
    "extensions": [
      "Live Google Meet bot companion",
      "Audio search by spoken keyword"
    ],
    "mvpScope": "Upload 10-minute MP3 audio, view speaker transcripts and copy 5 formatted action items.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-13",
    "title": "BioBeat: Heart-Rate Responsive Ambient Soundscape",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Students experience cognitive fatigue and stress while studying under static background noise.",
    "problemStatement": "Students experience cognitive fatigue and stress while studying under static background noise.",
    "solution": "A soundscape synthesizer that adjusts ambient frequencies and tempo based on webcam pulse estimation.",
    "proposedSolution": "A soundscape synthesizer that adjusts ambient frequencies and tempo based on webcam pulse estimation.",
    "realWorldUseCase": "College student studying for finals seeking calm focus without distracting beats.",
    "targetAudience": "College student studying for finals seeking calm focus without distracting beats.",
    "mainFeatures": [
      "Contactless webcam photoplethysmography (rPPG)",
      "Heart rate variability (HRV) estimation",
      "Dynamic generative Web Audio synth engine",
      "Focus session analytics and stress trends"
    ],
    "features": [
      "Contactless webcam photoplethysmography (rPPG)",
      "Heart rate variability (HRV) estimation",
      "Dynamic generative Web Audio synth engine",
      "Focus session analytics and stress trends"
    ],
    "frontend": "React, Web Audio API, Canvas API",
    "backend": "Client-Side Computer Vision",
    "database": "LocalStorage / IndexedDB",
    "otherTech": "Face-api.js, Tone.js",
    "techStack": [
      "React",
      "Tone.js",
      "Web Audio API",
      "Canvas API"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Generates music procedurally using Tone.js chords without copyright issues or streaming latency.",
    "roadmap": [
      "Webcam face ROI pulse tracker",
      "BPM heart rate calculation logic",
      "Tone.js ambient generative audio nodes",
      "Session focus timer & breathing guide"
    ],
    "extensions": [
      "Smartwatch Bluetooth HR sync",
      "Binaural beat frequency generator"
    ],
    "mvpScope": "Real-time webcam pulse tracker modulating an ambient drone synth chord.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-14",
    "title": "PitchVision: Automated Video Sports Technique Coach",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Aspiring athletes lack expensive private coaches to critique their swing, jump, or running form.",
    "problemStatement": "Aspiring athletes lack expensive private coaches to critique their swing, jump, or running form.",
    "solution": "A computer vision sports coach tracking biomechanical angles from smartphone video.",
    "proposedSolution": "A computer vision sports coach tracking biomechanical angles from smartphone video.",
    "realWorldUseCase": "Basketball player analyzing shooting form elbow angle and release trajectory.",
    "targetAudience": "Basketball player analyzing shooting form elbow angle and release trajectory.",
    "mainFeatures": [
      "Pose estimation (33 skeletal keypoints)",
      "Joint angle mathematical calculation",
      "Ghost overlay comparing against professional form",
      "Audio feedback on release timing and stance"
    ],
    "features": [
      "Pose estimation (33 skeletal keypoints)",
      "Joint angle mathematical calculation",
      "Ghost overlay comparing against professional form",
      "Audio feedback on release timing and stance"
    ],
    "frontend": "React, MediaPipe Pose, Tailwind",
    "backend": "FastAPI, OpenCV, NumPy",
    "database": "Supabase",
    "otherTech": "Chart.js, Canvas API",
    "techStack": [
      "React",
      "MediaPipe",
      "OpenCV",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Provides instant slow-motion playback with vector angle overlays directly on the phone browser.",
    "roadmap": [
      "Video upload or live webcam recorder",
      "Pose landmark tracking loop",
      "Biomechanical angle calculation module",
      "Comparison feedback summary dashboard"
    ],
    "extensions": [
      "Multi-sport presets (tennis, golf, squat)",
      "Community drill leaderboard"
    ],
    "mvpScope": "Record a basketball free-throw and receive elbow angle score with visual angle arcs.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-15",
    "title": "CodeCompass: Multi-Repo Semantic Search Engine",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Developers struggle to find how internal libraries or API patterns are used across dozens of repos.",
    "problemStatement": "Developers struggle to find how internal libraries or API patterns are used across dozens of repos.",
    "solution": "A semantic code search engine that parses ASTs and embeddings to answer natural language developer queries.",
    "proposedSolution": "A semantic code search engine that parses ASTs and embeddings to answer natural language developer queries.",
    "realWorldUseCase": "New hire searching 'how do we authenticate gRPC requests in our microservices?'.",
    "targetAudience": "New hire searching 'how do we authenticate gRPC requests in our microservices?'.",
    "mainFeatures": [
      "Tree-sitter code chunking across functions",
      "Code-specific embedding model indexing",
      "Natural language query to code matching",
      "Interactive code snippet preview with syntax colors"
    ],
    "features": [
      "Tree-sitter code chunking across functions",
      "Code-specific embedding model indexing",
      "Natural language query to code matching",
      "Interactive code snippet preview with syntax colors"
    ],
    "frontend": "React, PrismJS, Tailwind",
    "backend": "Go / Python FastAPI",
    "database": "Milvus / Qdrant Vector DB",
    "otherTech": "Tree-sitter, BGE-Code",
    "techStack": [
      "React",
      "FastAPI",
      "Qdrant",
      "Tree-sitter"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Understands semantic intent rather than literal keyword grep (e.g. finds token refresh logic).",
    "roadmap": [
      "GitHub repository clone & AST parser",
      "Function-level vector embedding generation",
      "Fast vector similarity search API",
      "Search results UI with copy-code snippet"
    ],
    "extensions": [
      "IDE extension for VS Code",
      "Automated code documentation generator"
    ],
    "mvpScope": "Index a public GitHub repo and search natural language queries to locate specific functions.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-16",
    "title": "FairLoan: Explainable Credit Default Predictor with SHAP",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Black-box AI credit scoring models discriminate against underrepresented groups without accountability.",
    "problemStatement": "Black-box AI credit scoring models discriminate against underrepresented groups without accountability.",
    "solution": "An explainable credit risk assessment dashboard showing SHAP/LIME feature contributions for every decision.",
    "proposedSolution": "An explainable credit risk assessment dashboard showing SHAP/LIME feature contributions for every decision.",
    "realWorldUseCase": "Loan officer reviewing a small business loan applicant with clear justification notes.",
    "targetAudience": "Loan officer reviewing a small business loan applicant with clear justification notes.",
    "mainFeatures": [
      "Credit risk probability prediction",
      "SHAP waterfall plot explaining every factor",
      "Counterfactual 'What-If' simulator",
      "Algorithmic bias audit across demographic groups"
    ],
    "features": [
      "Credit risk probability prediction",
      "SHAP waterfall plot explaining every factor",
      "Counterfactual 'What-If' simulator",
      "Algorithmic bias audit across demographic groups"
    ],
    "frontend": "React, Tailwind, Plotly.js",
    "backend": "Python Flask, Scikit-Learn, SHAP",
    "database": "SQLite",
    "otherTech": "Pandas, Fairlearn",
    "techStack": [
      "React",
      "Flask",
      "Scikit-Learn",
      "Plotly.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Gives the applicant actionable counterfactuals: 'Paying down $500 debt increases approval to 85%'.",
    "roadmap": [
      "Scikit-learn model training & SHAP explainer",
      "Interactive credit application form",
      "SHAP force plot & waterfall chart visualizer",
      "Counterfactual simulation sliders"
    ],
    "extensions": [
      "Fairness metric calculator (Disparate Impact)",
      "Automated compliance PDF report export"
    ],
    "mvpScope": "Fill out loan parameters and see interactive SHAP waterfall chart explaining the score.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-17",
    "title": "MindAnchor: Cognitive Behavioral Reflection Chatbot",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Students experiencing imposter syndrome and burnout lack immediate access to therapy exercises.",
    "problemStatement": "Students experiencing imposter syndrome and burnout lack immediate access to therapy exercises.",
    "solution": "An empathetic AI conversational assistant trained on CBT principles to identify cognitive distortions.",
    "proposedSolution": "An empathetic AI conversational assistant trained on CBT principles to identify cognitive distortions.",
    "realWorldUseCase": "Student spiraling before exams guided through evidence examination and reframing.",
    "targetAudience": "Student spiraling before exams guided through evidence examination and reframing.",
    "mainFeatures": [
      "Cognitive distortion classifier (catastrophizing, all-or-nothing)",
      "Guided Socratic questioning prompts",
      "Thought record journal with before/after mood ratings",
      "Crisis hotline emergency safety interceptor"
    ],
    "features": [
      "Cognitive distortion classifier (catastrophizing, all-or-nothing)",
      "Guided Socratic questioning prompts",
      "Thought record journal with before/after mood ratings",
      "Crisis hotline emergency safety interceptor"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "FastAPI, Llama-3, Guidance",
    "database": "IndexedDB (Private Local Storage)",
    "otherTech": "Web Crypto API",
    "techStack": [
      "React",
      "FastAPI",
      "IndexedDB",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Encrypted locally in browser: zero conversation data stored on servers for total student privacy.",
    "roadmap": [
      "Private chat interface with auto-scroll",
      "CBT distortion detection prompt pipeline",
      "Interactive thought reframing worksheet",
      "Mood tracking analytics dashboard"
    ],
    "extensions": [
      "Voice conversation with calm synth speech",
      "Guided breathing audio overlay"
    ],
    "mvpScope": "Chat conversation that detects 'I will fail everything' and guides user through a 3-step reframe.",
    "collections": [
      "ai",
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-18",
    "title": "AvisAcoustics: Real-Time Bird Song Bioacoustic Identifier",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Ecologists surveying biodiversity spend hundreds of hours manually listening to forest audio logs.",
    "problemStatement": "Ecologists surveying biodiversity spend hundreds of hours manually listening to forest audio logs.",
    "solution": "A real-time spectrogram classifier identifying bird species from ambient forest recordings.",
    "proposedSolution": "A real-time spectrogram classifier identifying bird species from ambient forest recordings.",
    "realWorldUseCase": "Hiker in national park identifying birds singing in the canopy above.",
    "targetAudience": "Hiker in national park identifying birds singing in the canopy above.",
    "mainFeatures": [
      "Live microphone audio spectrogram generator",
      "MobileNet CNN trained on bird song audio",
      "Species profile card with conservation status",
      "Offline sound library with audio comparison"
    ],
    "features": [
      "Live microphone audio spectrogram generator",
      "MobileNet CNN trained on bird song audio",
      "Species profile card with conservation status",
      "Offline sound library with audio comparison"
    ],
    "frontend": "React, Web Audio API, Canvas API",
    "backend": "TensorFlow.js / WebAssembly",
    "database": "IndexedDB",
    "otherTech": "Librosa, Xeno-Canto API",
    "techStack": [
      "React",
      "TensorFlow.js",
      "Web Audio API",
      "IndexedDB"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "3 weeks",
    "uniqueness": "Runs client-side in the browser using pre-compiled TensorFlow.js model without needing cell service.",
    "roadmap": [
      "Audio stream FFT spectrogram renderer",
      "TensorFlow.js model inference loop",
      "Species match card UI with photos",
      "Audio recording bookmarking list"
    ],
    "extensions": [
      "Global citizen science map submission",
      "Background continuous audio listening mode"
    ],
    "mvpScope": "Listen to 5 seconds of ambient bird chirp and display top 3 species matches with photos.",
    "collections": [
      "ai",
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-19",
    "title": "AgentScraper: Autonomous Self-Healing Web Data Agent",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Traditional web scrapers break constantly whenever websites update their CSS classes or HTML layout.",
    "problemStatement": "Traditional web scrapers break constantly whenever websites update their CSS classes or HTML layout.",
    "solution": "An LLM agent that navigates target websites, infers schema changes, and self-repairs extraction selectors.",
    "proposedSolution": "An LLM agent that navigates target websites, infers schema changes, and self-repairs extraction selectors.",
    "realWorldUseCase": "Price comparison aggregator monitoring e-commerce stores across redesigns.",
    "targetAudience": "Price comparison aggregator monitoring e-commerce stores across redesigns.",
    "mainFeatures": [
      "Natural language target schema definition",
      "DOM tree simplification & semantic parsing",
      "Self-healing selector generator",
      "Export pipeline to JSON/PostgreSQL"
    ],
    "features": [
      "Natural language target schema definition",
      "DOM tree simplification & semantic parsing",
      "Self-healing selector generator",
      "Export pipeline to JSON/PostgreSQL"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Playwright, LangChain",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Cheerio, OpenAI API",
    "techStack": [
      "React",
      "Node.js",
      "Playwright",
      "LangChain"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Automatically tests generated selectors against historical fixtures and updates code autonomously.",
    "roadmap": [
      "Playwright browser automation harness",
      "HTML DOM tree semantic summarizer",
      "LLM extraction logic with schema validation",
      "Scheduled monitoring cron & diff alerts"
    ],
    "extensions": [
      "Automated proxy rotation & CAPTCHA bypass",
      "One-click webhook push to Google Sheets"
    ],
    "mvpScope": "Enter product page URL and extract title, price, and specs even when classes change.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-20",
    "title": "MeshGen: Prompt-to-3D Low-Poly Asset Studio",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Indie game developers and student creators cannot afford 3D modeling software or assets.",
    "problemStatement": "Indie game developers and student creators cannot afford 3D modeling software or assets.",
    "solution": "A web-based generative tool converting descriptive text prompts into downloadable low-poly GLTF 3D meshes.",
    "proposedSolution": "A web-based generative tool converting descriptive text prompts into downloadable low-poly GLTF 3D meshes.",
    "realWorldUseCase": "Student game developer needing 10 medieval fantasy props for a hackathon game.",
    "targetAudience": "Student game developer needing 10 medieval fantasy props for a hackathon game.",
    "mainFeatures": [
      "Text-to-3D neural mesh inference",
      "Interactive Three.js 3D viewport with lighting controls",
      "Texture palette selector and wireframe toggle",
      "One-click GLTF/OBJ export"
    ],
    "features": [
      "Text-to-3D neural mesh inference",
      "Interactive Three.js 3D viewport with lighting controls",
      "Texture palette selector and wireframe toggle",
      "One-click GLTF/OBJ export"
    ],
    "frontend": "React, Three.js / React Three Fiber",
    "backend": "Python FastAPI, Shap-E / Point-E",
    "database": "AWS S3 / Cloudflare R2",
    "otherTech": "PyTorch, Trimesh",
    "techStack": [
      "React",
      "Three.js",
      "FastAPI",
      "PyTorch"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "5 weeks",
    "uniqueness": "Exports clean, game-ready low-poly meshes optimized for WebGL and mobile game engines.",
    "roadmap": [
      "Three.js interactive model canvas",
      "FastAPI inference worker with GPU queue",
      "PBR material & color adjuster",
      "GLTF exporter and asset gallery"
    ],
    "extensions": [
      "Rigging and basic animation auto-generation",
      "AR preview via WebXR on mobile phones"
    ],
    "mvpScope": "Type 'wooden treasure chest with gold trim' and view/rotate interactive 3D model in browser.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-21",
    "title": "PantryChef: Smart Refrigerator Vision & Meal Planner",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Families waste 30% of groceries because food items hide in the back of the fridge until spoiled.",
    "problemStatement": "Families waste 30% of groceries because food items hide in the back of the fridge until spoiled.",
    "solution": "A computer vision assistant that detects food ingredients from a fridge photo and suggests recipes.",
    "proposedSolution": "A computer vision assistant that detects food ingredients from a fridge photo and suggests recipes.",
    "realWorldUseCase": "Busy student looking at leftovers wondering what to cook before vegetables spoil.",
    "targetAudience": "Busy student looking at leftovers wondering what to cook before vegetables spoil.",
    "mainFeatures": [
      "Object detection for vegetables, dairy, and meats",
      "Expiration date estimator from purchase date",
      "Recipe synthesis constrained to detected items",
      "Missing ingredient shopping list generator"
    ],
    "features": [
      "Object detection for vegetables, dairy, and meats",
      "Expiration date estimator from purchase date",
      "Recipe synthesis constrained to detected items",
      "Missing ingredient shopping list generator"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "FastAPI, YOLOv8, OpenAI API",
    "database": "MongoDB / Supabase",
    "otherTech": "Pillow, Spoonacular API",
    "techStack": [
      "React",
      "FastAPI",
      "YOLOv8",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "3 weeks",
    "uniqueness": "Ranks suggested recipes by which ones use the ingredients closest to their expiration date.",
    "roadmap": [
      "Camera photo capture & upload component",
      "YOLOv8 object detection inference endpoint",
      "Dynamic recipe generator prompt",
      "Pantry inventory checklist & expiry tags"
    ],
    "extensions": [
      "Barcode scanner for packaged goods",
      "Calorie & dietary preference filters (vegan, gluten-free)"
    ],
    "mvpScope": "Upload a photo of 4 fridge ingredients and receive 3 step-by-step recipes using only those items.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-22",
    "title": "DebateBot: Multi-Agent Argument & Fact Verification",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Readers struggle to discern bias and omitted perspectives in controversial online news articles.",
    "problemStatement": "Readers struggle to discern bias and omitted perspectives in controversial online news articles.",
    "solution": "A multi-agent debate platform where two AI personas argue opposing sides using verified citations.",
    "proposedSolution": "A multi-agent debate platform where two AI personas argue opposing sides using verified citations.",
    "realWorldUseCase": "High school debate student researching renewable energy subsidies.",
    "targetAudience": "High school debate student researching renewable energy subsidies.",
    "mainFeatures": [
      "Dual persona synthesis (Pro vs Con)",
      "Real-time automated fact-checking referee agent",
      "Interactive fallacy detector (Ad Hominem, Strawman)",
      "Visual consensus & polarization meter"
    ],
    "features": [
      "Dual persona synthesis (Pro vs Con)",
      "Real-time automated fact-checking referee agent",
      "Interactive fallacy detector (Ad Hominem, Strawman)",
      "Visual consensus & polarization meter"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Python FastAPI, LangGraph",
    "database": "ChromaDB, SQLite",
    "otherTech": "DuckDuckGo Search API",
    "techStack": [
      "React",
      "FastAPI",
      "LangGraph",
      "ChromaDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "An unbiased referee agent scores arguments strictly based on empirical evidence and logical coherence.",
    "roadmap": [
      "Topic submission & persona configuration",
      "LangGraph multi-agent dialogue loop",
      "Evidence search & citation verification",
      "Interactive debate transcript with fallacy flags"
    ],
    "extensions": [
      "User participation as third debater",
      "Audio podcast generation of the debate"
    ],
    "mvpScope": "Submit a controversial debate proposition and watch 3 rounds of structured, cited arguments.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-23",
    "title": "LeetScribe: Context-Aware Coding Interview Coach",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Students get stuck on coding challenges without understanding where their logic broke down.",
    "problemStatement": "Students get stuck on coding challenges without understanding where their logic broke down.",
    "solution": "A browser extension that observes code in real time and provides progressive Socratic hints.",
    "proposedSolution": "A browser extension that observes code in real time and provides progressive Socratic hints.",
    "realWorldUseCase": "Student practicing dynamic programming on LeetCode without wanting full spoilers.",
    "targetAudience": "Student practicing dynamic programming on LeetCode without wanting full spoilers.",
    "mainFeatures": [
      "DOM code observer with debounce",
      "Time & space complexity prediction",
      "Progressive 3-tier Socratic hint system",
      "Edge-case test scenario generator"
    ],
    "features": [
      "DOM code observer with debounce",
      "Time & space complexity prediction",
      "Progressive 3-tier Socratic hint system",
      "Edge-case test scenario generator"
    ],
    "frontend": "React (Extension UI), Tailwind",
    "backend": "FastAPI / Node.js, Claude API",
    "database": "Supabase",
    "otherTech": "Chrome Extension Manifest V3",
    "techStack": [
      "React",
      "Chrome Extension",
      "FastAPI",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Never gives the direct solution; asks guiding questions to help the user derive the algorithm themselves.",
    "roadmap": [
      "Manifest V3 background worker & content script",
      "Code text extraction & prompt assembly",
      "Collapsible floating hint drawer",
      "Edge case simulation panel"
    ],
    "extensions": [
      "Mock voice interviewer mode",
      "Pattern categorization flashcards"
    ],
    "mvpScope": "Highlight stuck code and receive a targeted question pointing out an off-by-one boundary error.",
    "collections": [
      "ai",
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-ai-24",
    "title": "AccentEase: Real-Time Acoustic Accent Normalizer",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Non-native English speakers face unfair comprehension bias during remote international customer calls.",
    "problemStatement": "Non-native English speakers face unfair comprehension bias during remote international customer calls.",
    "solution": "An on-device audio filter that subtlely adjusts vowel articulation while preserving speaker timbre.",
    "proposedSolution": "An on-device audio filter that subtlely adjusts vowel articulation while preserving speaker timbre.",
    "realWorldUseCase": "International customer support agent conducting calls with overseas clients.",
    "targetAudience": "International customer support agent conducting calls with overseas clients.",
    "mainFeatures": [
      "Real-time audio buffer capture via WebRTC",
      "Formant frequency normalization filter",
      "Speaker identity voiceprint preservation",
      "Live latency monitor (under 120ms)"
    ],
    "features": [
      "Real-time audio buffer capture via WebRTC",
      "Formant frequency normalization filter",
      "Speaker identity voiceprint preservation",
      "Live latency monitor (under 120ms)"
    ],
    "frontend": "React, Web Audio API, Canvas API",
    "backend": "Python, PyTorch, C++ ONNX",
    "database": "IndexedDB",
    "otherTech": "WebRTC, Web Workers",
    "techStack": [
      "React",
      "PyTorch",
      "Web Audio API",
      "WebRTC"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "6 weeks",
    "uniqueness": "Preserves natural emotion, pitch, and timbre while improving acoustic clarity for global listeners.",
    "roadmap": [
      "Web Audio stream processor worklet",
      "Formant analysis & neural pitch shifter",
      "Low-latency buffer management",
      "Audio loopback testing dashboard"
    ],
    "extensions": [
      "Integration with Zoom/Teams virtual audio cable",
      "Custom dialect presets"
    ],
    "mvpScope": "Speak a sentence into mic and hear playback with enhanced phonetic vowel clarity in under 150ms.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-ai-25",
    "title": "NeRFSpace: 3D Room Visualizer from Smartphone Photos",
    "domain": "AI & Machine Learning",
    "category": "AI & Machine Learning",
    "problem": "Real estate buyers and renters cannot assess true room dimensions and lighting from flat photos.",
    "problemStatement": "Real estate buyers and renters cannot assess true room dimensions and lighting from flat photos.",
    "solution": "A neural radiance fields (NeRF) pipeline creating interactive 3D navigable rooms from 10 photos.",
    "proposedSolution": "A neural radiance fields (NeRF) pipeline creating interactive 3D navigable rooms from 10 photos.",
    "realWorldUseCase": "College student viewing off-campus rental apartments remotely before moving.",
    "targetAudience": "College student viewing off-campus rental apartments remotely before moving.",
    "mainFeatures": [
      "Photo sequence alignment with COLMAP",
      "Instant-NGP NeRF model training pipeline",
      "Interactive first-person WebGL walk-through",
      "Virtual tape measure tool for furniture fitting"
    ],
    "features": [
      "Photo sequence alignment with COLMAP",
      "Instant-NGP NeRF model training pipeline",
      "Interactive first-person WebGL walk-through",
      "Virtual tape measure tool for furniture fitting"
    ],
    "frontend": "React, Three.js, Tailwind",
    "backend": "FastAPI, PyTorch, Instant-NGP",
    "database": "AWS S3 / Cloudflare R2",
    "otherTech": "COLMAP, WebGL Shader",
    "techStack": [
      "React",
      "Three.js",
      "FastAPI",
      "Instant-NGP"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "6 weeks",
    "uniqueness": "Includes accurate centimeter-level scale calibration allowing users to test virtual couch placement.",
    "roadmap": [
      "Photo sequence upload & validation",
      "COLMAP camera pose estimation worker",
      "Instant-NGP training job dispatcher",
      "Three.js interactive first-person camera viewer"
    ],
    "extensions": [
      "AR walk-through via mobile WebXR",
      "Lighting time-of-day simulation"
    ],
    "mvpScope": "Upload 12 photos of a bedroom and navigate a continuous 3D walkthrough in the browser.",
    "collections": [
      "ai",
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-web-01",
    "title": "CryptDrop: Zero-Knowledge Ephemeral File Sharing",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Users sending sensitive documents risk data breaches when cloud providers store unencrypted files.",
    "problemStatement": "Users sending sensitive documents risk data breaches when cloud providers store unencrypted files.",
    "solution": "A browser-encrypted file sharing portal where keys are generated client-side and never reach the server.",
    "proposedSolution": "A browser-encrypted file sharing portal where keys are generated client-side and never reach the server.",
    "realWorldUseCase": "Investigative journalist receiving an anonymous confidential PDF.",
    "targetAudience": "Investigative journalist receiving an anonymous confidential PDF.",
    "mainFeatures": [
      "Web Crypto API AES-GCM 256-bit client encryption",
      "Self-destruct timer after single download",
      "Burn-after-reading link with password hash in URL anchor",
      "Chunked streaming upload with progress bar"
    ],
    "features": [
      "Web Crypto API AES-GCM 256-bit client encryption",
      "Self-destruct timer after single download",
      "Burn-after-reading link with password hash in URL anchor",
      "Chunked streaming upload with progress bar"
    ],
    "frontend": "React 19, Tailwind, Lucide React",
    "backend": "Node.js, Express, Multer",
    "database": "Redis (TTL expiring storage)",
    "otherTech": "Web Crypto API, Web Streams",
    "techStack": [
      "React",
      "Node.js",
      "Redis",
      "Web Crypto API"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Decryption key is stored exclusively in the URL fragment hash, meaning the server mathematically cannot decrypt the payload.",
    "roadmap": [
      "File chunking & AES-GCM client encryption",
      "Ephemeral Redis storage endpoint with TTL",
      "Decryption page with automatic wipe",
      "Download rate limiting & anti-abuse checks"
    ],
    "extensions": [
      "End-to-end encrypted direct WebRTC transfer for large gigabyte files",
      "Multi-recipient key derivation"
    ],
    "mvpScope": "Encrypt a 5MB image in browser, generate share link that deletes immediately upon one download.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-02",
    "title": "SyncCanvas: Collaborative Real-Time Infinite Whiteboard",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Remote engineering teams lack lightweight, free collaborative sketching tools during sprint architecture reviews.",
    "problemStatement": "Remote engineering teams lack lightweight, free collaborative sketching tools during sprint architecture reviews.",
    "solution": "A vector canvas board supporting simultaneous multiplayer drawing, sticky notes, and code blocks using CRDTs.",
    "proposedSolution": "A vector canvas board supporting simultaneous multiplayer drawing, sticky notes, and code blocks using CRDTs.",
    "realWorldUseCase": "Remote software team diagramming a distributed microservice event pipeline.",
    "targetAudience": "Remote software team diagramming a distributed microservice event pipeline.",
    "mainFeatures": [
      "Multiplayer cursor tracking and color tags",
      "Conflict-Free Replicated Data Types (Yjs)",
      "Infinite zoomable & pan-able canvas coordinates",
      "Export to SVG, PNG, and Mermaid.js syntax"
    ],
    "features": [
      "Multiplayer cursor tracking and color tags",
      "Conflict-Free Replicated Data Types (Yjs)",
      "Infinite zoomable & pan-able canvas coordinates",
      "Export to SVG, PNG, and Mermaid.js syntax"
    ],
    "frontend": "React, Canvas API, Tailwind",
    "backend": "Node.js, WebSockets (ws)",
    "database": "LevelDB / SQLite",
    "otherTech": "Yjs, Perfect-Freehand",
    "techStack": [
      "React",
      "Yjs",
      "WebSockets",
      "Canvas API"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Supports buttery-smooth pressure-sensitive ink strokes and zero-latency local undo/redo.",
    "roadmap": [
      "Infinite coordinate transformation engine",
      "Yjs CRDT state binding with WebSocket server",
      "Shape, line, and sticky note primitives",
      "Multi-cursor broadcast and export modal"
    ],
    "extensions": [
      "Integrated WebRTC peer audio channel",
      "Handwritten diagram to Mermaid code OCR"
    ],
    "mvpScope": "Draw simultaneously with 3 browser tabs and see instantaneous stroke synchronization.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-03",
    "title": "GitPress: Headless Markdown CMS with Git-Backed Publishing",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Non-technical writers find Git workflows intimidating, while developers hate database-heavy CMS engines.",
    "problemStatement": "Non-technical writers find Git workflows intimidating, while developers hate database-heavy CMS engines.",
    "solution": "A modern visual CMS that commits, branches, and opens pull requests directly on GitHub repositories.",
    "proposedSolution": "A modern visual CMS that commits, branches, and opens pull requests directly on GitHub repositories.",
    "realWorldUseCase": "Technical marketing writer creating blog posts that auto-deploy to a Hugo/Next.js site.",
    "targetAudience": "Technical marketing writer creating blog posts that auto-deploy to a Hugo/Next.js site.",
    "mainFeatures": [
      "WYSIWYG Markdown & MDX editor with live preview",
      "Direct GitHub API commit and PR creation",
      "Frontmatter metadata custom schema builder",
      "Image drag-and-drop auto-uploading to Git LFS/assets"
    ],
    "features": [
      "WYSIWYG Markdown & MDX editor with live preview",
      "Direct GitHub API commit and PR creation",
      "Frontmatter metadata custom schema builder",
      "Image drag-and-drop auto-uploading to Git LFS/assets"
    ],
    "frontend": "Next.js 15, Tailwind, Monaco Editor",
    "backend": "Next.js Route Handlers",
    "database": "GitHub Repo as Database",
    "otherTech": "Octokit, Gray-Matter",
    "techStack": [
      "Next.js",
      "GitHub API",
      "Monaco Editor",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Zero database hosting costs; your Git repository remains the single immutable source of truth.",
    "roadmap": [
      "GitHub OAuth token exchange flow",
      "Repo branch and directory file tree explorer",
      "MDX live split-pane visual editor",
      "Direct Git commit & PR dispatch button"
    ],
    "extensions": [
      "Automated preview deploy status indicator",
      "Editorial team comment review workflow"
    ],
    "mvpScope": "Sign in with GitHub, edit a markdown file in a clean Notion-like UI, and push a live commit.",
    "collections": [
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-04",
    "title": "AirBeam: Browser-to-Browser WebRTC Peer File Courier",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Sending 10GB video files over cloud links takes hours to upload and download twice.",
    "problemStatement": "Sending 10GB video files over cloud links takes hours to upload and download twice.",
    "solution": "A direct peer-to-peer browser file transfer tool streaming data directly between local devices via WebRTC.",
    "proposedSolution": "A direct peer-to-peer browser file transfer tool streaming data directly between local devices via WebRTC.",
    "realWorldUseCase": "Video editor sending raw footage directly to a collaborator on the same WiFi network.",
    "targetAudience": "Video editor sending raw footage directly to a collaborator on the same WiFi network.",
    "mainFeatures": [
      "Direct WebRTC DataChannel streaming",
      "Chunked file slicing and assembly via Streams API",
      "Local network mDNS discovery",
      "QR code pairing for rapid smartphone-to-laptop transfer"
    ],
    "features": [
      "Direct WebRTC DataChannel streaming",
      "Chunked file slicing and assembly via Streams API",
      "Local network mDNS discovery",
      "QR code pairing for rapid smartphone-to-laptop transfer"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Node.js (Signaling server only)",
    "database": "None (Peer-to-Peer)",
    "otherTech": "WebRTC, Web Streams API",
    "techStack": [
      "React",
      "WebRTC",
      "Node.js",
      "Streams API"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Bypasses cloud storage entirely: transfer speeds achieve maximum local WiFi router bandwidth.",
    "roadmap": [
      "Signaling server with WebSocket SDP exchange",
      "File chunking & DataChannel buffer backpressure",
      "Progress bar with real-time MB/s speed gauge",
      "QR code pairing UI"
    ],
    "extensions": [
      "End-to-end file chunk integrity hashing (SHA-256)",
      "Multi-peer torrent-style swarm distribution"
    ],
    "mvpScope": "Pair laptop and phone via QR code and stream a 50MB video file directly across local network.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-05",
    "title": "FolioCraft: Dynamic Developer Portfolio Synthesizer",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Junior developers struggle to design impressive, responsive portfolios that showcase their GitHub achievements.",
    "problemStatement": "Junior developers struggle to design impressive, responsive portfolios that showcase their GitHub achievements.",
    "solution": "A static site generator that pulls public GitHub repos, commits, and languages into customizable themes.",
    "proposedSolution": "A static site generator that pulls public GitHub repos, commits, and languages into customizable themes.",
    "realWorldUseCase": "Recent bootcamp graduate creating an interactive portfolio in under 10 minutes.",
    "targetAudience": "Recent bootcamp graduate creating an interactive portfolio in under 10 minutes.",
    "mainFeatures": [
      "GitHub GraphQL API profile data ingestion",
      "6 interactive themes (Cyberpunk, Minimalist, Bento, Terminal)",
      "Automated project card syntax badge generator",
      "1-click deploy to Vercel and GitHub Pages"
    ],
    "features": [
      "GitHub GraphQL API profile data ingestion",
      "6 interactive themes (Cyberpunk, Minimalist, Bento, Terminal)",
      "Automated project card syntax badge generator",
      "1-click deploy to Vercel and GitHub Pages"
    ],
    "frontend": "React 19, Tailwind, Framer Motion",
    "backend": "Next.js API Routes",
    "database": "LocalStorage / GitHub API",
    "otherTech": "GitHub GraphQL, Lucide React",
    "techStack": [
      "React",
      "Next.js",
      "GitHub API",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Includes an interactive terminal mode allowing recruiters to execute commands like 'skills' and 'contact'.",
    "roadmap": [
      "GitHub username input & GraphQL fetcher",
      "Theme customizer with live preview",
      "Editable bio, experience, and custom projects",
      "Exportable React/HTML ZIP or Vercel deploy hook"
    ],
    "extensions": [
      "Custom domain DNS config guide",
      "Blog RSS feed integration"
    ],
    "mvpScope": "Type a GitHub username and immediately view a fully responsive Bento-box styled portfolio.",
    "collections": [
      "portfolio",
      "hackathon",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-06",
    "title": "NodeFlow: Visual Workflow & Pipeline Automation Canvas",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Developers need a lightweight way to visually build and debug event-driven workflow graphs.",
    "problemStatement": "Developers need a lightweight way to visually build and debug event-driven workflow graphs.",
    "solution": "A node-based visual programming canvas that connects triggers, conditions, and actions into runnable JSON.",
    "proposedSolution": "A node-based visual programming canvas that connects triggers, conditions, and actions into runnable JSON.",
    "realWorldUseCase": "DevOps engineer designing an automated Slack alert pipeline triggered by GitHub webhooks.",
    "targetAudience": "DevOps engineer designing an automated Slack alert pipeline triggered by GitHub webhooks.",
    "mainFeatures": [
      "Draggable node canvas with typed input/output ports",
      "Bezier curve connection lines with loop validation",
      "JSON execution schema live exporter",
      "In-browser step-by-step test execution simulator"
    ],
    "features": [
      "Draggable node canvas with typed input/output ports",
      "Bezier curve connection lines with loop validation",
      "JSON execution schema live exporter",
      "In-browser step-by-step test execution simulator"
    ],
    "frontend": "React, React Flow, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "React Flow, Zod schema",
    "techStack": [
      "React",
      "React Flow",
      "Node.js",
      "Zod"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Provides real-time interactive dry-runs where visual data packets travel along cables between nodes.",
    "roadmap": [
      "React Flow canvas setup with custom nodes",
      "Connection line validation logic",
      "Pipeline test runner with mock payloads",
      "JSON import and export functionality"
    ],
    "extensions": [
      "Webhook receiver worker that executes pipelines live",
      "Third-party action integrations (Slack, Discord, Email)"
    ],
    "mvpScope": "Connect an HTTP Trigger node to a Filter node and an Email node, then trigger a test packet.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-07",
    "title": "MicroCSS: Zero-Runtime Atomic Utility Framework",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Modern CSS frameworks have large package sizes and complex build tools for lightweight static sites.",
    "problemStatement": "Modern CSS frameworks have large package sizes and complex build tools for lightweight static sites.",
    "solution": "A pure CSS utility stylesheet under 12KB with dark mode, fluid typography, and CSS variables.",
    "proposedSolution": "A pure CSS utility stylesheet under 12KB with dark mode, fluid typography, and CSS variables.",
    "realWorldUseCase": "Developer building high-speed static landing pages that require 100/100 Google Lighthouse scores.",
    "targetAudience": "Developer building high-speed static landing pages that require 100/100 Google Lighthouse scores.",
    "mainFeatures": [
      "100% pure CSS without JavaScript dependencies",
      "Native CSS variables for dark/light theme switching",
      "Fluid clamp() typography and spacing",
      "Accessible interactive components (dialog, details, tooltip)"
    ],
    "features": [
      "100% pure CSS without JavaScript dependencies",
      "Native CSS variables for dark/light theme switching",
      "Fluid clamp() typography and spacing",
      "Accessible interactive components (dialog, details, tooltip)"
    ],
    "frontend": "HTML5, Vanilla CSS, Vite",
    "backend": "Static Build Script (PostCSS)",
    "database": "None",
    "otherTech": "PostCSS, CSSNano",
    "techStack": [
      "CSS3",
      "Vite",
      "PostCSS",
      "HTML5"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Delivers complete modern layouts, grids, and components in under 8KB gzipped without build steps.",
    "roadmap": [
      "CSS custom property design token system",
      "Flexbox and modern CSS Grid layout utilities",
      "Accessible CSS-only dialog and dropdown states",
      "Interactive documentation playground with live code editor"
    ],
    "extensions": [
      "Sass preprocessor mixins bundle",
      "Figma design system token export"
    ],
    "mvpScope": "Create a responsive 3-column landing page with dark mode toggle using only pure CSS classes.",
    "collections": [
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-08",
    "title": "TriviaPulse: Multiplayer Real-Time Quiz Battle",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Virtual classrooms and hackathons need quick, engaging competitive games without paid Kahoot limits.",
    "problemStatement": "Virtual classrooms and hackathons need quick, engaging competitive games without paid Kahoot limits.",
    "solution": "A real-time multiplayer trivia platform where hundreds of players compete with live leaderboard scoreboards.",
    "proposedSolution": "A real-time multiplayer trivia platform where hundreds of players compete with live leaderboard scoreboards.",
    "realWorldUseCase": "High school teacher running a 5-minute review session before biology exam.",
    "targetAudience": "High school teacher running a 5-minute review session before biology exam.",
    "mainFeatures": [
      "WebSocket room lobby and player join PIN",
      "Host presentation screen with timer countdown",
      "Mobile-optimized player buzzer interface",
      "Live animated leaderboard with streak multiplier points"
    ],
    "features": [
      "WebSocket room lobby and player join PIN",
      "Host presentation screen with timer countdown",
      "Mobile-optimized player buzzer interface",
      "Live animated leaderboard with streak multiplier points"
    ],
    "frontend": "React, Tailwind, Howler.js",
    "backend": "Node.js, Socket.io",
    "database": "Redis (Lobby states & scores)",
    "otherTech": "Socket.io, Canvas Confetti",
    "techStack": [
      "React",
      "Node.js",
      "Socket.io",
      "Redis"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Supports sub-100ms buzzer latency and anti-cheat answer hashing over WebSockets.",
    "roadmap": [
      "Socket.io room creation and PIN code lobby",
      "Host controller with question progression timer",
      "Player mobile buzzer UI with instant feedback",
      "Real-time scoreboard calculating speed bonuses"
    ],
    "extensions": [
      "CSV question bank bulk import",
      "Custom audio buzzer soundboards"
    ],
    "mvpScope": "Host creates a room, 3 players join with PIN, answer a timed question, and view the live score podium.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-09",
    "title": "WebDAW: In-Browser WebAssembly Digital Audio Workstation",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Music students cannot afford $500 desktop DAWs like Ableton Live or Logic Pro.",
    "problemStatement": "Music students cannot afford $500 desktop DAWs like Ableton Live or Logic Pro.",
    "solution": "A browser-based multi-track audio workstation with loop recording, synthesizer plugins, and effect pedals.",
    "proposedSolution": "A browser-based multi-track audio workstation with loop recording, synthesizer plugins, and effect pedals.",
    "realWorldUseCase": "Electronic music producer sketching synth beats on a Chromebook.",
    "targetAudience": "Electronic music producer sketching synth beats on a Chromebook.",
    "mainFeatures": [
      "Multi-track audio timeline with drag-and-drop slicing",
      "Web Audio API synthesizer synth engines (Subtractive, FM)",
      "Real-time audio effects (Reverb, Delay, Distortion, EQ)",
      "WAV audio master bounce & export"
    ],
    "features": [
      "Multi-track audio timeline with drag-and-drop slicing",
      "Web Audio API synthesizer synth engines (Subtractive, FM)",
      "Real-time audio effects (Reverb, Delay, Distortion, EQ)",
      "WAV audio master bounce & export"
    ],
    "frontend": "React, Web Audio API, Canvas API",
    "backend": "Rust compiled to WebAssembly",
    "database": "IndexedDB",
    "otherTech": "Tone.js, AudioWorklet",
    "techStack": [
      "React",
      "Web Audio API",
      "Rust",
      "WASM"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "6 weeks",
    "uniqueness": "Employs dedicated AudioWorklet threads for sample-accurate zero-jitter playback and recording.",
    "roadmap": [
      "Canvas audio timeline with zoom and scroll",
      "AudioWorklet audio engine in Rust/WASM",
      "Synthesizer plugin UI with knob dials",
      "Audio buffer export to 16-bit WAV file"
    ],
    "extensions": [
      "MIDI controller keyboard plug-and-play via Web MIDI",
      "Community track remix cloud hub"
    ],
    "mvpScope": "Create a 4-track beat with drum loops and a playable keyboard synth, exporting to a downloadable WAV.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-10",
    "title": "SaaSPay: Open-Source Stripe Metered Billing Portal",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Developers building SaaS products struggle to implement metered billing and customer portal logic.",
    "problemStatement": "Developers building SaaS products struggle to implement metered billing and customer portal logic.",
    "solution": "A plug-and-play micro-SaaS billing portal with Stripe checkout, tiered subscriptions, and usage meters.",
    "proposedSolution": "A plug-and-play micro-SaaS billing portal with Stripe checkout, tiered subscriptions, and usage meters.",
    "realWorldUseCase": "Developer launching an API product charging $0.001 per API request.",
    "targetAudience": "Developer launching an API product charging $0.001 per API request.",
    "mainFeatures": [
      "Stripe Checkout & Billing Portal integration",
      "Metered usage ingestion API with idempotency keys",
      "Customer invoice history and payment method updates",
      "Role-based team seats management"
    ],
    "features": [
      "Stripe Checkout & Billing Portal integration",
      "Metered usage ingestion API with idempotency keys",
      "Customer invoice history and payment method updates",
      "Role-based team seats management"
    ],
    "frontend": "Next.js 15, Tailwind, Shadcn UI",
    "backend": "Next.js Route Handlers, Stripe SDK",
    "database": "PostgreSQL, Prisma",
    "otherTech": "Stripe API, Zod",
    "techStack": [
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "Prisma"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Features automated Stripe webhook reconcilers that prevent subscription desynchronization.",
    "roadmap": [
      "Stripe webhook signature validation listener",
      "Subscription tier pricing card UI",
      "Customer self-service billing management portal",
      "API usage tracking meter endpoint"
    ],
    "extensions": [
      "Multi-currency localized pricing",
      "Dunning email sequence triggers on failed payments"
    ],
    "mvpScope": "Click 'Upgrade to Pro', complete Stripe test card checkout, and view instant feature unlock in app.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-11",
    "title": "ChartCraft: Declarative SVG Data Visualization Builder",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Data journalists need customizable interactive charts without wrestling with heavyweight D3.js boilerplate.",
    "problemStatement": "Data journalists need customizable interactive charts without wrestling with heavyweight D3.js boilerplate.",
    "solution": "A declarative SVG chart builder that turns CSV data into animated, embeddable data visualizers.",
    "proposedSolution": "A declarative SVG chart builder that turns CSV data into animated, embeddable data visualizers.",
    "realWorldUseCase": "Student blogger creating interactive bar, line, and radar charts for an economics article.",
    "targetAudience": "Student blogger creating interactive bar, line, and radar charts for an economics article.",
    "mainFeatures": [
      "CSV file drag-and-drop parser",
      "10 chart types (Bar, Line, Area, Radar, Donut, Scatter)",
      "Customizable color palettes, axes, and animated tooltips",
      "Export to responsive SVG, PNG, and iframe embed code"
    ],
    "features": [
      "CSV file drag-and-drop parser",
      "10 chart types (Bar, Line, Area, Radar, Donut, Scatter)",
      "Customizable color palettes, axes, and animated tooltips",
      "Export to responsive SVG, PNG, and iframe embed code"
    ],
    "frontend": "React, SVG, Tailwind, Framer Motion",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "PapaParse, Lucide React",
    "techStack": [
      "React",
      "SVG",
      "Framer Motion",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Generates clean, standalone raw SVG markup that functions without any external JavaScript bundle.",
    "roadmap": [
      "CSV parsing and column data typing",
      "Mathematical SVG coordinate mapping engine",
      "Live chart design sidebar with color pickers",
      "Export modal for raw SVG and iframe snippet"
    ],
    "extensions": [
      "Dark/Light theme responsive SVG styling",
      "Live URL data feed auto-refresh"
    ],
    "mvpScope": "Paste CSV data and immediately customize an animated interactive radar chart exported as SVG.",
    "collections": [
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-12",
    "title": "MockPilot: Instant API Playground & Mock Server",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Frontend developers get blocked waiting for backend teams to design and deploy API endpoints.",
    "problemStatement": "Frontend developers get blocked waiting for backend teams to design and deploy API endpoints.",
    "solution": "A zero-config mock API generator where users define schemas and get instant public REST & GraphQL URLs.",
    "proposedSolution": "A zero-config mock API generator where users define schemas and get instant public REST & GraphQL URLs.",
    "realWorldUseCase": "Frontend team prototyping an e-commerce checkout before the backend microservices exist.",
    "targetAudience": "Frontend team prototyping an e-commerce checkout before the backend microservices exist.",
    "mainFeatures": [
      "Dynamic schema builder (Users, Products, Orders)",
      "Faker.js realistic mock data synthesizer",
      "Instant live public REST API endpoint (/api/v1/...)",
      "Customizable response delays, error rate simulation, and auth tokens"
    ],
    "features": [
      "Dynamic schema builder (Users, Products, Orders)",
      "Faker.js realistic mock data synthesizer",
      "Instant live public REST API endpoint (/api/v1/...)",
      "Customizable response delays, error rate simulation, and auth tokens"
    ],
    "frontend": "React, Tailwind, Monaco Editor",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / Redis",
    "otherTech": "Faker.js, Swagger UI",
    "techStack": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Supports relational mock data (e.g. Orders linked to Users) and simulates 500 error spikes for stress testing.",
    "roadmap": [
      "Visual schema entity builder with Faker types",
      "Dynamic Express routing engine",
      "Public endpoint gateway with CORS support",
      "Interactive Swagger test console"
    ],
    "extensions": [
      "GraphQL playground endpoint support",
      "Webhook trigger simulator on POST requests"
    ],
    "mvpScope": "Define a 'Product' schema and immediately make a real GET/POST fetch request to a live URL.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-13",
    "title": "TabZen: Intelligent Browser Session & Memory Manager",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Developers with 60 open browser tabs suffer from high RAM usage and lost project contexts.",
    "problemStatement": "Developers with 60 open browser tabs suffer from high RAM usage and lost project contexts.",
    "solution": "A browser extension that groups tabs into saved project workspaces and auto-suspends inactive tabs.",
    "proposedSolution": "A browser extension that groups tabs into saved project workspaces and auto-suspends inactive tabs.",
    "realWorldUseCase": "Full-stack developer switching between work project, side project, and job search tabs.",
    "targetAudience": "Full-stack developer switching between work project, side project, and job search tabs.",
    "mainFeatures": [
      "Automatic RAM suspension for tabs idle > 30 minutes",
      "Workspace groupings with custom color tags",
      "Fuzzy search across all open and archived tabs",
      "Export session state to JSON and Markdown link lists"
    ],
    "features": [
      "Automatic RAM suspension for tabs idle > 30 minutes",
      "Workspace groupings with custom color tags",
      "Fuzzy search across all open and archived tabs",
      "Export session state to JSON and Markdown link lists"
    ],
    "frontend": "React (Extension Popup), Tailwind",
    "backend": "Chrome Extension Background Service Worker",
    "database": "chrome.storage.local",
    "otherTech": "Chrome Tabs API",
    "techStack": [
      "React",
      "Chrome Extension",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Saves up to 80% browser memory by replacing background pages with lightweight frozen placeholders.",
    "roadmap": [
      "Chrome Tabs and Windows API listeners",
      "Tab suspension logic with screenshot preview",
      "Workspace group manager and search bar",
      "Import/Export session backup system"
    ],
    "extensions": [
      "Cloud sync across multiple laptops",
      "Automated duplicate tab closing"
    ],
    "mvpScope": "Group 15 open tabs into 'Project Mystora', close window, and restore all 15 tabs with one click.",
    "collections": [
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-14",
    "title": "MindGraph: Markdown Personal Knowledge Graph Base",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Students taking study notes lose connections between concepts stored in isolated folders.",
    "problemStatement": "Students taking study notes lose connections between concepts stored in isolated folders.",
    "solution": "A bidirectional linking markdown note app that renders an interactive force-directed concept graph.",
    "proposedSolution": "A bidirectional linking markdown note app that renders an interactive force-directed concept graph.",
    "realWorldUseCase": "Medical student visualizing pharmacology interactions and disease pathways.",
    "targetAudience": "Medical student visualizing pharmacology interactions and disease pathways.",
    "mainFeatures": [
      "Bidirectional wiki-links ([[Concept Name]])",
      "Interactive 2D/3D force-directed node graph",
      "Full-text search with fuzzy keyword matching",
      "Local filesystem access via File System Access API"
    ],
    "features": [
      "Bidirectional wiki-links ([[Concept Name]])",
      "Interactive 2D/3D force-directed node graph",
      "Full-text search with fuzzy keyword matching",
      "Local filesystem access via File System Access API"
    ],
    "frontend": "React, D3.js / ForceGraph2D, Tailwind",
    "backend": "Vite / Client-Side",
    "database": "Local Filesystem / IndexedDB",
    "otherTech": "D3-force, Gray-Matter, Markdown-it",
    "techStack": [
      "React",
      "D3.js",
      "Tailwind",
      "IndexedDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Stores all notes as plain Markdown files on user's hard drive: zero vendor lock-in.",
    "roadmap": [
      "File System Access API integration",
      "Wiki-link parser and adjacency matrix generator",
      "D3.js interactive force graph with zoom & drag",
      "Split-screen markdown editor with live preview"
    ],
    "extensions": [
      "Graph filtering by tag and link distance",
      "Flashcard mode from [[Concept]] definitions"
    ],
    "mvpScope": "Create 5 linked notes and explore the visual node graph updating in real time as links are typed.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-15",
    "title": "PantryOffline: Progressive Web App Recipe Manager",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Campers, boaters, and home cooks lose access to recipes when cooking in kitchens with poor WiFi.",
    "problemStatement": "Campers, boaters, and home cooks lose access to recipes when cooking in kitchens with poor WiFi.",
    "solution": "An offline-first PWA recipe manager with serving size scaling, timers, and grocery checklist.",
    "proposedSolution": "An offline-first PWA recipe manager with serving size scaling, timers, and grocery checklist.",
    "realWorldUseCase": "Home cook following a complicated sourdough recipe without internet in the basement kitchen.",
    "targetAudience": "Home cook following a complicated sourdough recipe without internet in the basement kitchen.",
    "mainFeatures": [
      "100% offline availability via Service Workers",
      "Ingredient serving multiplier (0.5x, 1x, 2x, 4x)",
      "Step-by-step cooking mode with built-in voice timers",
      "Grocery list with aisle categorizer and offline checkmarks"
    ],
    "features": [
      "100% offline availability via Service Workers",
      "Ingredient serving multiplier (0.5x, 1x, 2x, 4x)",
      "Step-by-step cooking mode with built-in voice timers",
      "Grocery list with aisle categorizer and offline checkmarks"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "PWA Service Worker / Cache API",
    "database": "IndexedDB (Dexie.js)",
    "otherTech": "Web Speech API, Canvas Confetti",
    "techStack": [
      "React",
      "PWA",
      "IndexedDB",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Features a screen-wake lock so your phone display stays lit while your hands are covered in flour.",
    "roadmap": [
      "PWA service worker setup and asset caching",
      "IndexedDB recipe schema and CRUD operations",
      "Interactive recipe scaler and step timer",
      "Screen Wake Lock API integration"
    ],
    "extensions": [
      "Recipe photo OCR from cookbooks",
      "Voice command step navigation ('Next Step')"
    ],
    "mvpScope": "Open app on airplane mode, scale a recipe from 2 to 6 servings, and start cooking with timer.",
    "collections": [
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-16",
    "title": "DevMatch: Tech-Stack Verified Developer Job Board",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Junior developers get ignored on LinkedIn by recruiters who don't understand tech stacks.",
    "problemStatement": "Junior developers get ignored on LinkedIn by recruiters who don't understand tech stacks.",
    "solution": "A specialized job board matching candidates based on verified GitHub code repositories and skills.",
    "proposedSolution": "A specialized job board matching candidates based on verified GitHub code repositories and skills.",
    "realWorldUseCase": "Self-taught developer showcasing a React/FastAPI portfolio to startup founders.",
    "targetAudience": "Self-taught developer showcasing a React/FastAPI portfolio to startup founders.",
    "mainFeatures": [
      "GitHub repository skill analyzer",
      "Candidate profile with verified technology badges",
      "Recruiter search filters by specific tech combinations",
      "Direct asynchronous interview messaging"
    ],
    "features": [
      "GitHub repository skill analyzer",
      "Candidate profile with verified technology badges",
      "Recruiter search filters by specific tech combinations",
      "Direct asynchronous interview messaging"
    ],
    "frontend": "Next.js 15, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "GitHub API, SendGrid",
    "techStack": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Eliminates inflated resumes by scoring candidates on actual committed code rather than keywords.",
    "roadmap": [
      "GitHub OAuth and repository repo scanner",
      "Job posting creation and company verification",
      "Applicant matching algorithm based on tech tags",
      "Candidate application dashboard"
    ],
    "extensions": [
      "Salary transparency filter and compensation charts",
      "One-click application with verified portfolio link"
    ],
    "mvpScope": "Post a job requiring 'Tailwind + Vite' and view top 5 candidates ranked by actual GitHub projects.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-17",
    "title": "SolarSim: WebGL 3D Planetary Orbit & Gravity Physics",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Science students struggle to visualize gravitational pull and orbital mechanics from 2D textbook drawings.",
    "problemStatement": "Science students struggle to visualize gravitational pull and orbital mechanics from 2D textbook drawings.",
    "solution": "An interactive 3D solar system simulator with accurate Keplerian orbits and n-body gravity physics.",
    "proposedSolution": "An interactive 3D solar system simulator with accurate Keplerian orbits and n-body gravity physics.",
    "realWorldUseCase": "Astronomy enthusiast experimenting with how changing Jupiter's mass would alter Earth's orbit.",
    "targetAudience": "Astronomy enthusiast experimenting with how changing Jupiter's mass would alter Earth's orbit.",
    "mainFeatures": [
      "Accurate orbital mechanics physics calculation",
      "Interactive Three.js 3D planet models with textures",
      "Time-lapse orbital speed scrubber (1 day/sec to 100 years/sec)",
      "Custom asteroid addition with gravity trajectory projection"
    ],
    "features": [
      "Accurate orbital mechanics physics calculation",
      "Interactive Three.js 3D planet models with textures",
      "Time-lapse orbital speed scrubber (1 day/sec to 100 years/sec)",
      "Custom asteroid addition with gravity trajectory projection"
    ],
    "frontend": "React, Three.js, React Three Fiber",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Three.js, GLTF Loader",
    "techStack": [
      "React",
      "Three.js",
      "WebGL",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Allows users to spawn rogue celestial bodies and watch real-time gravitational slingshot trajectories.",
    "roadmap": [
      "Three.js camera controller and lighting rig",
      "Keplerian orbit mathematical loop",
      "Planet selection modal with scientific facts",
      "Custom celestial body spawner physics"
    ],
    "extensions": [
      "Planet-to-planet space mission trajectory planner",
      "VR headset view via WebXR"
    ],
    "mvpScope": "Click Earth, accelerate orbital time speed, and watch seasonal orbit progression in 3D.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-18",
    "title": "ChronicleBlog: ActivityPub Federated Minimalist Blog",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Writers are tired of algorithm-driven platforms like Medium and want decentralized ownership.",
    "problemStatement": "Writers are tired of algorithm-driven platforms like Medium and want decentralized ownership.",
    "solution": "A featherweight blogging platform supporting RSS feeds and federated ActivityPub social subscriptions.",
    "proposedSolution": "A featherweight blogging platform supporting RSS feeds and federated ActivityPub social subscriptions.",
    "realWorldUseCase": "Independent blogger sharing tech essays directly with readers on Mastodon and the Fediverse.",
    "targetAudience": "Independent blogger sharing tech essays directly with readers on Mastodon and the Fediverse.",
    "mainFeatures": [
      "Ultra-fast sub-50ms page load times",
      "Automatic RSS/Atom feed generation",
      "ActivityPub actor protocol for Mastodon followers",
      "Clean typographic reading experience with dark mode"
    ],
    "features": [
      "Ultra-fast sub-50ms page load times",
      "Automatic RSS/Atom feed generation",
      "ActivityPub actor protocol for Mastodon followers",
      "Clean typographic reading experience with dark mode"
    ],
    "frontend": "Astro / Next.js, Tailwind, Markdown",
    "backend": "Node.js, Express",
    "database": "SQLite / Turso",
    "otherTech": "ActivityPub Protocol, Markdown-it",
    "techStack": [
      "Astro",
      "SQLite",
      "Node.js",
      "Tailwind"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Anyone on Mastodon can follow @yourname@yourblog.com and receive new blog posts in their social feed.",
    "roadmap": [
      "Astro markdown rendering pipeline",
      "ActivityPub webfinger and inbox/outbox endpoints",
      "Cryptographic HTTP signature validation",
      "Minimalist reader UI with typography toggle"
    ],
    "extensions": [
      "Webmentions integration for distributed comments",
      "Email newsletter broadcast via SendGrid"
    ],
    "mvpScope": "Publish a new markdown article and see it appear in an RSS reader and Mastodon feed simultaneously.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-19",
    "title": "CodeRoom: Real-Time Collaborative Technical Interviewer",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Hiring companies pay $300/month for CodeSignal rooms that lack customizable test suites.",
    "problemStatement": "Hiring companies pay $300/month for CodeSignal rooms that lack customizable test suites.",
    "solution": "A live collaborative code editor with video chat, syntax highlighting, and sandboxed test execution.",
    "proposedSolution": "A live collaborative code editor with video chat, syntax highlighting, and sandboxed test execution.",
    "realWorldUseCase": "Engineering manager conducting a 60-minute technical interview with a candidate.",
    "targetAudience": "Engineering manager conducting a 60-minute technical interview with a candidate.",
    "mainFeatures": [
      "Split-screen Monaco editor with shared cursor sync",
      "WebRTC peer-to-peer audio and video stream",
      "Multi-language execution sandbox (JS, Python, Java)",
      "Hidden test cases with automated pass/fail scoring"
    ],
    "features": [
      "Split-screen Monaco editor with shared cursor sync",
      "WebRTC peer-to-peer audio and video stream",
      "Multi-language execution sandbox (JS, Python, Java)",
      "Hidden test cases with automated pass/fail scoring"
    ],
    "frontend": "React, Monaco Editor, Tailwind",
    "backend": "Node.js, WebSockets, Docker",
    "database": "PostgreSQL, Redis",
    "otherTech": "WebRTC, Docker, Piston API",
    "techStack": [
      "React",
      "Monaco Editor",
      "WebSockets",
      "Docker"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "5 weeks",
    "uniqueness": "Includes interviewer secret notes panel and question timer that the candidate cannot see.",
    "roadmap": [
      "Monaco editor binding with WebSocket CRDT",
      "WebRTC video/audio peer connection setup",
      "Docker container sandbox execution worker",
      "Interviewer grading rubric and notes modal"
    ],
    "extensions": [
      "Interview recording and playback timeline",
      "Whiteboard diagramming tab inside the room"
    ],
    "mvpScope": "Create an interview room, share URL with a friend, write Python code together, and run tests live.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-20",
    "title": "MicroShell: Micro-Frontend Portal with Module Federation",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Large enterprise frontend web apps become unmaintainable monoliths that take 20 minutes to build.",
    "problemStatement": "Large enterprise frontend web apps become unmaintainable monoliths that take 20 minutes to build.",
    "solution": "A micro-frontend architecture shell loading independent React, Vue, and Vanilla JS modules dynamically.",
    "proposedSolution": "A micro-frontend architecture shell loading independent React, Vue, and Vanilla JS modules dynamically.",
    "realWorldUseCase": "Engineering architect orchestrating checkout, cart, and catalog teams into one unified interface.",
    "targetAudience": "Engineering architect orchestrating checkout, cart, and catalog teams into one unified interface.",
    "mainFeatures": [
      "Webpack / Vite Module Federation",
      "Shared state bus with event dispatchers",
      "Sandboxed CSS scoping to prevent style clashes",
      "Dynamic micro-app health monitoring & fallback UI"
    ],
    "features": [
      "Webpack / Vite Module Federation",
      "Shared state bus with event dispatchers",
      "Sandboxed CSS scoping to prevent style clashes",
      "Dynamic micro-app health monitoring & fallback UI"
    ],
    "frontend": "React 19, Tailwind, Vite Federation",
    "backend": "Node.js (Static hosting / CDN)",
    "database": "None",
    "otherTech": "Vite Module Federation, Custom Events",
    "techStack": [
      "React",
      "Vite",
      "Module Federation",
      "Tailwind"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Allows independent teams to deploy their micro-app without rebuilding or redeploying the root shell.",
    "roadmap": [
      "Root shell container layout with navigation",
      "Module Federation configuration across 3 micro-apps",
      "Cross-app event bus for cart/user state sharing",
      "Graceful error boundary fallbacks"
    ],
    "extensions": [
      "Server-Side Rendering (SSR) module federation",
      "Micro-app version rollout canary switches"
    ],
    "mvpScope": "Load 3 independent micro-apps seamlessly in one container page with shared authentication state.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-21",
    "title": "FleetRadar: Real-Time IoT GPS Fleet Telemetry Dashboard",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Logistics managers struggle to track delivery vehicle locations and fuel consumption in real time.",
    "problemStatement": "Logistics managers struggle to track delivery vehicle locations and fuel consumption in real time.",
    "solution": "A live operations dashboard streaming vehicle coordinates, speed telemetry, and geofence alerts.",
    "proposedSolution": "A live operations dashboard streaming vehicle coordinates, speed telemetry, and geofence alerts.",
    "realWorldUseCase": "Delivery dispatch manager tracking 20 delivery vans across a metropolitan area.",
    "targetAudience": "Delivery dispatch manager tracking 20 delivery vans across a metropolitan area.",
    "mainFeatures": [
      "Live vehicle map markers with smooth GPS interpolation",
      "Geofence boundary polygon builder with alert triggers",
      "Vehicle speed, fuel level, and engine health telemetry charts",
      "Historical route playback scrubber with speed multiplier"
    ],
    "features": [
      "Live vehicle map markers with smooth GPS interpolation",
      "Geofence boundary polygon builder with alert triggers",
      "Vehicle speed, fuel level, and engine health telemetry charts",
      "Historical route playback scrubber with speed multiplier"
    ],
    "frontend": "React, Leaflet / Mapbox GL, Tailwind",
    "backend": "Node.js, Express, WebSockets",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "Leaflet, Chart.js, Turf.js",
    "techStack": [
      "React",
      "Leaflet",
      "TimescaleDB",
      "WebSockets"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Simulates realistic GPS movement with spline curve smoothing along road networks.",
    "roadmap": [
      "Leaflet map tile setup with custom vehicle icons",
      "WebSocket GPS telemetry streaming simulator",
      "Geofencing polygon collision detection with Turf.js",
      "Vehicle telemetry HUD drawer with speed gauges"
    ],
    "extensions": [
      "Driver fatigue camera alert simulator",
      "Automated optimal route dispatcher"
    ],
    "mvpScope": "Watch 5 simulated delivery vans travel across a city map and trigger alerts when entering a geofence.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-22",
    "title": "HookRelay: Universal Webhook Inspection & Replay Console",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Developers debugging third-party webhooks (Stripe, GitHub) struggle without public tunnel tools.",
    "problemStatement": "Developers debugging third-party webhooks (Stripe, GitHub) struggle without public tunnel tools.",
    "solution": "A free public webhook catcher that logs incoming HTTP payloads and allows 1-click local replays.",
    "proposedSolution": "A free public webhook catcher that logs incoming HTTP payloads and allows 1-click local replays.",
    "realWorldUseCase": "Developer testing Stripe subscription webhooks on their local development machine.",
    "targetAudience": "Developer testing Stripe subscription webhooks on their local development machine.",
    "mainFeatures": [
      "Instant unique public URL generation (e.g. hookrelay.dev/abc123)",
      "Real-time payload inspection (Headers, Query, Body JSON)",
      "Payload editor with 1-click re-send/replay button",
      "Export requests to cURL commands"
    ],
    "features": [
      "Instant unique public URL generation (e.g. hookrelay.dev/abc123)",
      "Real-time payload inspection (Headers, Query, Body JSON)",
      "Payload editor with 1-click re-send/replay button",
      "Export requests to cURL commands"
    ],
    "frontend": "React, Tailwind, Monaco Editor",
    "backend": "Go / Node.js, WebSockets",
    "database": "Redis (Expiring payload logs)",
    "otherTech": "WebSockets, PrismJS",
    "techStack": [
      "React",
      "Node.js",
      "WebSockets",
      "Redis"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Includes a local CLI client that forwards received public webhooks directly to localhost:3000.",
    "roadmap": [
      "Dynamic webhook slug generator and listener",
      "WebSocket broadcast of incoming HTTP requests",
      "Monaco JSON body inspector with syntax highlighting",
      "cURL generator and replay request button"
    ],
    "extensions": [
      "Payload difference comparison tool",
      "Automated webhook signature verification tester"
    ],
    "mvpScope": "Send a POST request with curl to a generated URL and watch headers and JSON body appear instantly.",
    "collections": [
      "portfolio",
      "hackathon",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-23",
    "title": "TicketPass: Decentralized Event Ticketing & QR Check-in",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Concert attendees suffer from scalper ticket bots, counterfeit PDF tickets, and slow venue lines.",
    "problemStatement": "Concert attendees suffer from scalper ticket bots, counterfeit PDF tickets, and slow venue lines.",
    "solution": "A web ticketing portal with dynamic time-rotating QR codes that prevent screenshot sharing.",
    "proposedSolution": "A web ticketing portal with dynamic time-rotating QR codes that prevent screenshot sharing.",
    "realWorldUseCase": "College campus festival organizing a 500-attendee concert check-in line.",
    "targetAudience": "College campus festival organizing a 500-attendee concert check-in line.",
    "mainFeatures": [
      "Dynamic TOTP-based rotating QR code generator",
      "Staff camera scanner web app with instant beep feedback",
      "Ticket purchase checkout with email confirmation",
      "Real-time venue check-in statistics dashboard"
    ],
    "features": [
      "Dynamic TOTP-based rotating QR code generator",
      "Staff camera scanner web app with instant beep feedback",
      "Ticket purchase checkout with email confirmation",
      "Real-time venue check-in statistics dashboard"
    ],
    "frontend": "React, Tailwind, HTML5-QRCode",
    "backend": "Node.js, Express, JWT",
    "database": "PostgreSQL / Supabase",
    "otherTech": "HTML5-QRCode, Canvas API",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "JWT"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "QR code rotates every 15 seconds using cryptographic HMAC; screenshots cannot be resold or forwarded.",
    "roadmap": [
      "Event listing and ticket booking checkout",
      "Dynamic rotating QR code generation with TOTP",
      "Staff web camera scanner page with sound alerts",
      "Live capacity tracker counter"
    ],
    "extensions": [
      "Offline check-in mode with local SQLite cache",
      "Apple Wallet / Google Wallet pass generator"
    ],
    "mvpScope": "Display dynamic QR ticket on phone, scan it with laptop webcam, and watch entry confirmed in real time.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-web-24",
    "title": "FormSmith: Drag-and-Drop Form Builder with Zod Validation",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Companies waste hours manually coding repetitive lead capture and survey forms.",
    "problemStatement": "Companies waste hours manually coding repetitive lead capture and survey forms.",
    "solution": "A visual form designer that exports production-ready React components with Zod validation schemas.",
    "proposedSolution": "A visual form designer that exports production-ready React components with Zod validation schemas.",
    "realWorldUseCase": "Frontend engineer creating a multi-step user onboarding survey.",
    "targetAudience": "Frontend engineer creating a multi-step user onboarding survey.",
    "mainFeatures": [
      "Drag-and-drop form field builder (Text, Select, File, Rating)",
      "Conditional logic rules (Show field B if field A == 'Yes')",
      "Live preview with responsive mobile/tablet toggle",
      "Export clean React + Tailwind + Zod code"
    ],
    "features": [
      "Drag-and-drop form field builder (Text, Select, File, Rating)",
      "Conditional logic rules (Show field B if field A == 'Yes')",
      "Live preview with responsive mobile/tablet toggle",
      "Export clean React + Tailwind + Zod code"
    ],
    "frontend": "React, dnd-kit, Tailwind",
    "backend": "Vite / Client-Side",
    "database": "LocalStorage",
    "otherTech": "dnd-kit, Zod, Lucide React",
    "techStack": [
      "React",
      "dnd-kit",
      "Zod",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Outputs 100% human-readable, formatted React JSX and TypeScript validation code.",
    "roadmap": [
      "dnd-kit drag-and-drop field palette and canvas",
      "Field settings inspector (label, placeholder, required)",
      "Conditional logic rule builder",
      "Code export modal with 1-click copy"
    ],
    "extensions": [
      "Automated form submission backend webhook",
      "Multi-step wizard layout support"
    ],
    "mvpScope": "Drag 4 fields onto canvas, set one as required, and copy the ready-to-run React component code.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-web-25",
    "title": "A11yLens: Automated Accessibility & Screen Reader Auditor",
    "domain": "Web Development",
    "category": "Web Development",
    "problem": "Developers inadvertently create websites unusable by visually impaired and motor-impaired individuals.",
    "problemStatement": "Developers inadvertently create websites unusable by visually impaired and motor-impaired individuals.",
    "solution": "A browser extension auditing WCAG 2.1 contrast, missing ARIA tags, and keyboard focus traps.",
    "proposedSolution": "A browser extension auditing WCAG 2.1 contrast, missing ARIA tags, and keyboard focus traps.",
    "realWorldUseCase": "Frontend developer auditing an e-commerce checkout page for accessibility compliance.",
    "targetAudience": "Frontend developer auditing an e-commerce checkout page for accessibility compliance.",
    "mainFeatures": [
      "WCAG color contrast ratio scanner with live color picker",
      "Simulated color blindness vision filters (Protanopia, Deuteranopia)",
      "Missing alt tag and ARIA label highlighter",
      "Keyboard navigation visual tab-stop tracer"
    ],
    "features": [
      "WCAG color contrast ratio scanner with live color picker",
      "Simulated color blindness vision filters (Protanopia, Deuteranopia)",
      "Missing alt tag and ARIA label highlighter",
      "Keyboard navigation visual tab-stop tracer"
    ],
    "frontend": "React (Extension UI), Tailwind",
    "backend": "Chrome Extension Content Script",
    "database": "None",
    "otherTech": "axe-core, Chrome Extension API",
    "techStack": [
      "React",
      "Chrome Extension",
      "axe-core",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Draws an animated visual line across the page showing exact keyboard Tab key order and traps.",
    "roadmap": [
      "axe-core automated rule evaluation runner",
      "Visual element overlay highlighter in DOM",
      "Color blindness SVG filter injection engine",
      "Keyboard focus order line tracer"
    ],
    "extensions": [
      "Automated PDF accessibility report exporter",
      "Suggested HTML code fixes with copy button"
    ],
    "mvpScope": "Click extension on any webpage to see all accessibility flaws highlighted with actionable fixes.",
    "collections": [
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-01",
    "title": "AlgoPlay: Interactive Data Structure & Algorithm Step Visualizer",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Students struggle to build mental models of graph traversals and tree rebalancing from textbooks.",
    "problemStatement": "Students struggle to build mental models of graph traversals and tree rebalancing from textbooks.",
    "solution": "An interactive optical visualizer stepping forward/backward through Dijkstra, QuickSort, and Red-Black trees.",
    "proposedSolution": "An interactive optical visualizer stepping forward/backward through Dijkstra, QuickSort, and Red-Black trees.",
    "realWorldUseCase": "CS student preparing for technical coding interviews.",
    "targetAudience": "CS student preparing for technical coding interviews.",
    "mainFeatures": [
      "Step-by-step memory array and pointer animations",
      "Time and space complexity meters in real time",
      "Custom user array and graph input creator",
      "Synchronized source code line highlighter"
    ],
    "features": [
      "Step-by-step memory array and pointer animations",
      "Time and space complexity meters in real time",
      "Custom user array and graph input creator",
      "Synchronized source code line highlighter"
    ],
    "frontend": "React, Framer Motion, Tailwind",
    "backend": "Vite / Client-Side",
    "database": "LocalStorage",
    "otherTech": "Framer Motion, Lucide React",
    "techStack": [
      "React",
      "Framer Motion",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Allows learners to step backwards in time to pinpoint the exact moment an invariant is broken.",
    "roadmap": [
      "State history stack for step-backward playback",
      "Array bar and tree node SVG visual components",
      "Algorithm execution generator functions (yield)",
      "Speed slider and custom input modal"
    ],
    "extensions": [
      "Graph network drag-and-drop editor",
      "Audio pitch mapping to array values"
    ],
    "mvpScope": "Input an unsorted list [5, 2, 8, 1] and step through QuickSort with pointer highlights.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-02",
    "title": "NeuroRecall: FSRS-Powered Spaced Repetition Flashcards",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Traditional flashcard apps use outdated SM-2 algorithms that force unnecessary repetitive reviews.",
    "problemStatement": "Traditional flashcard apps use outdated SM-2 algorithms that force unnecessary repetitive reviews.",
    "solution": "A modern flashcard app using the Free Spaced Repetition Scheduler (FSRS) algorithm for optimal memory retention.",
    "proposedSolution": "A modern flashcard app using the Free Spaced Repetition Scheduler (FSRS) algorithm for optimal memory retention.",
    "realWorldUseCase": "Medical student memorizing 2,000 pharmacology mechanisms of action.",
    "targetAudience": "Medical student memorizing 2,000 pharmacology mechanisms of action.",
    "mainFeatures": [
      "FSRS memory retention mathematical decay model",
      "Rich Markdown, LaTeX math, and code syntax cards",
      "Deck import/export with Anki compatibility (.apkg)",
      "Daily retention forecast heatmaps and stats"
    ],
    "features": [
      "FSRS memory retention mathematical decay model",
      "Rich Markdown, LaTeX math, and code syntax cards",
      "Deck import/export with Anki compatibility (.apkg)",
      "Daily retention forecast heatmaps and stats"
    ],
    "frontend": "React 19, KaTeX, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "KaTeX, FSRS algorithm lib",
    "techStack": [
      "React",
      "KaTeX",
      "Node.js",
      "SQLite"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Calculates individualized memory stability and difficulty parameters per user.",
    "roadmap": [
      "FSRS algorithm scheduling logic implementation",
      "Flashcard review UI with 4 rating buttons (Again, Hard, Good, Easy)",
      "LaTeX math and code block markdown renderer",
      "Daily review heatmap calendar"
    ],
    "extensions": [
      "Image occlusion mask editor for anatomy diagrams",
      "Text-to-speech audio pronunciation"
    ],
    "mvpScope": "Create a deck of 5 physics formulas with LaTeX, review them, and see scheduled review dates.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-03",
    "title": "CodeQuest: Story-Driven Fantasy Coding RPG",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Introductory programming students lose motivation doing dry mathematical console exercises.",
    "problemStatement": "Introductory programming students lose motivation doing dry mathematical console exercises.",
    "solution": "A retro 16-bit RPG where players solve programming puzzles to cast spells, open doors, and defeat bosses.",
    "proposedSolution": "A retro 16-bit RPG where players solve programming puzzles to cast spells, open doors, and defeat bosses.",
    "realWorldUseCase": "Middle or high school student learning their first Python or JavaScript loops.",
    "targetAudience": "Middle or high school student learning their first Python or JavaScript loops.",
    "mainFeatures": [
      "Pixel art canvas adventure map",
      "In-game code editor executing real code to trigger events",
      "Progressive puzzle difficulty from variables to recursion",
      "Character inventory and experience leveling system"
    ],
    "features": [
      "Pixel art canvas adventure map",
      "In-game code editor executing real code to trigger events",
      "Progressive puzzle difficulty from variables to recursion",
      "Character inventory and experience leveling system"
    ],
    "frontend": "React, Canvas API / Phaser.js, Tailwind",
    "backend": "Vite / Client-Side",
    "database": "IndexedDB",
    "otherTech": "Phaser.js, Monaco Editor",
    "techStack": [
      "React",
      "Phaser.js",
      "Canvas API",
      "Monaco Editor"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Turns standard algorithm tests into entertaining in-game mechanics like calculating jump arcs.",
    "roadmap": [
      "Phaser 2D tilemap world rendering",
      "Sandboxed JavaScript code runner with game hooks",
      "Dialogue and quest progression state machine",
      "Character sprite animation controller"
    ],
    "extensions": [
      "Custom community dungeon and quest builder",
      "Multiplayer co-op puzzle solving"
    ],
    "mvpScope": "Write a 'while' loop to navigate a knight around obstacles and pick up a glowing key.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-edtech-04",
    "title": "AutoGrader: Automated Programming Assignment Grader",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Teaching assistants spend 30+ hours weekly manually compiling and testing student code submissions.",
    "problemStatement": "Teaching assistants spend 30+ hours weekly manually compiling and testing student code submissions.",
    "solution": "An automated code grading portal that runs student repos against private test suites inside Docker.",
    "proposedSolution": "An automated code grading portal that runs student repos against private test suites inside Docker.",
    "realWorldUseCase": "University CS professor grading 200 student homework submissions.",
    "targetAudience": "University CS professor grading 200 student homework submissions.",
    "mainFeatures": [
      "Git repo and ZIP file submission intake",
      "Isolated Docker container runner with memory/time limits",
      "Detailed grading breakdown with rubric points",
      "Automated code plagiarism and similarity checker (MOSS)"
    ],
    "features": [
      "Git repo and ZIP file submission intake",
      "Isolated Docker container runner with memory/time limits",
      "Detailed grading breakdown with rubric points",
      "Automated code plagiarism and similarity checker (MOSS)"
    ],
    "frontend": "Next.js 15, Tailwind, Monaco Editor",
    "backend": "Python FastAPI, Docker SDK",
    "database": "PostgreSQL, Celery",
    "otherTech": "Docker, PyTest, Tree-sitter",
    "techStack": [
      "Next.js",
      "FastAPI",
      "Docker",
      "PostgreSQL"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "5 weeks",
    "uniqueness": "Enforces strict sandboxing with CPU quotas, network isolation, and fork bomb prevention.",
    "roadmap": [
      "Student submission upload and authentication",
      "Docker sandboxing execution queue worker",
      "Test result parser and rubric calculation",
      "Plagiarism AST fingerprint analyzer"
    ],
    "extensions": [
      "Interactive inline code review comments for TAs",
      "Late submission automatic penalty deduction"
    ],
    "mvpScope": "Submit a Python file and receive an instant grade score with passed/failed test cases.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-05",
    "title": "MathLens: Step-by-Step Math Problem Solver & OCR",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Students get stuck on algebra and calculus homework with no explanation of intermediate steps.",
    "problemStatement": "Students get stuck on algebra and calculus homework with no explanation of intermediate steps.",
    "solution": "A math companion that extracts equations from photos and produces clear step-by-step symbolic solutions.",
    "proposedSolution": "A math companion that extracts equations from photos and produces clear step-by-step symbolic solutions.",
    "realWorldUseCase": "High school student solving quadratic equations and polynomial division.",
    "targetAudience": "High school student solving quadratic equations and polynomial division.",
    "mainFeatures": [
      "Camera capture and handwritten math OCR",
      "Symbolic math solver using SymPy",
      "Step-by-step intermediate algebraic factorization steps",
      "Interactive 2D Cartesian function grapher"
    ],
    "features": [
      "Camera capture and handwritten math OCR",
      "Symbolic math solver using SymPy",
      "Step-by-step intermediate algebraic factorization steps",
      "Interactive 2D Cartesian function grapher"
    ],
    "frontend": "React, Tailwind, Plotly.js",
    "backend": "FastAPI, SymPy, Tesseract/OCR",
    "database": "Supabase",
    "otherTech": "SymPy, KaTeX",
    "techStack": [
      "React",
      "FastAPI",
      "SymPy",
      "KaTeX"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Explains the underlying mathematical identity used at each step rather than just spitting an answer.",
    "roadmap": [
      "Camera upload & math OCR preprocessing",
      "SymPy symbolic algebra execution backend",
      "Step-by-step explanation formatting with KaTeX",
      "Interactive Plotly graph visualizer"
    ],
    "extensions": [
      "Calculus derivative and integral step explainer",
      "Similar practice problem generator"
    ],
    "mvpScope": "Type 'x^2 + 5x + 6 = 0' and view step-by-step factoring: (x+2)(x+3)=0 with root plots.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-06",
    "title": "PeerCritique: Blind Peer Review & Rubric Exchange",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Students receive feedback on essays too late to make meaningful revisions before final deadlines.",
    "problemStatement": "Students receive feedback on essays too late to make meaningful revisions before final deadlines.",
    "solution": "A double-blind peer review platform that distributes student work anonymously with structured rubrics.",
    "proposedSolution": "A double-blind peer review platform that distributes student work anonymously with structured rubrics.",
    "realWorldUseCase": "College literature course conducting peer revisions on argumentative essays.",
    "targetAudience": "College literature course conducting peer revisions on argumentative essays.",
    "mainFeatures": [
      "Double-blind document distribution algorithm",
      "Structured rubric criteria with sliding scale ratings",
      "Constructive feedback length validator and sentiment check",
      "Reviewer calibration and helpfulness scoring"
    ],
    "features": [
      "Double-blind document distribution algorithm",
      "Structured rubric criteria with sliding scale ratings",
      "Constructive feedback length validator and sentiment check",
      "Reviewer calibration and helpfulness scoring"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Zod",
    "techStack": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Prevents lazy one-word comments using automated minimum substance and constructive phrasing checks.",
    "roadmap": [
      "Assignment creation and submission portal",
      "Randomized anonymous review assignment worker",
      "Rubric evaluation form with inline highlights",
      "Aggregated feedback score report"
    ],
    "extensions": [
      "Instructor grade override and calibration dashboard",
      "Anonymous revision discussion thread"
    ],
    "mvpScope": "Submit a sample essay and complete 2 structured peer reviews using an interactive rubric.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-07",
    "title": "PaperCompanion: AI Science Paper De-Jargonizer",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Undergraduate students struggle to read dense academic papers with intimidating terminology.",
    "problemStatement": "Undergraduate students struggle to read dense academic papers with intimidating terminology.",
    "solution": "A paper reader that translates complex research abstracts and methodologies into intuitive metaphors.",
    "proposedSolution": "A paper reader that translates complex research abstracts and methodologies into intuitive metaphors.",
    "realWorldUseCase": "Freshman biology student reading a Nature paper on CRISPR gene editing.",
    "targetAudience": "Freshman biology student reading a Nature paper on CRISPR gene editing.",
    "mainFeatures": [
      "PDF paper upload and clean text extractor",
      "Interactive sentence-level jargon simplification tooltip",
      "Methodology flow-chart visualizer",
      "Q&A chat assistant grounded exclusively in paper text"
    ],
    "features": [
      "PDF paper upload and clean text extractor",
      "Interactive sentence-level jargon simplification tooltip",
      "Methodology flow-chart visualizer",
      "Q&A chat assistant grounded exclusively in paper text"
    ],
    "frontend": "React, Tailwind, Cytoscape.js",
    "backend": "FastAPI, LangChain, PyMuPDF",
    "database": "ChromaDB, SQLite",
    "otherTech": "PDF.js, OpenAI API",
    "techStack": [
      "React",
      "FastAPI",
      "LangChain",
      "ChromaDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Highlights scientific assertions and links them directly to the experimental evidence section.",
    "roadmap": [
      "PDF renderer with interactive text selection",
      "Jargon detection and layperson explanation prompt",
      "Flowchart generator for experimental methods",
      "In-context paper questioning assistant"
    ],
    "extensions": [
      "Audio podcast explainer generator",
      "BibTeX reference explorer"
    ],
    "mvpScope": "Upload a neuroscience PDF and click any complex sentence to view an intuitive real-world analogy.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-edtech-08",
    "title": "ChemLab3D: Virtual 3D Molecular Chemistry Simulator",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Schools in low-income districts cannot afford expensive chemistry lab reagents and fume hoods.",
    "problemStatement": "Schools in low-income districts cannot afford expensive chemistry lab reagents and fume hoods.",
    "solution": "A virtual interactive 3D chemistry lab where students mix virtual chemicals and observe reaction thermodynamics.",
    "proposedSolution": "A virtual interactive 3D chemistry lab where students mix virtual chemicals and observe reaction thermodynamics.",
    "realWorldUseCase": "Chemistry student exploring acid-base titrations and exothermic reactions safely.",
    "targetAudience": "Chemistry student exploring acid-base titrations and exothermic reactions safely.",
    "mainFeatures": [
      "3D beaker and test tube WebGL physics workbench",
      "Chemical reaction database with stoichiometric calculations",
      "Real-time pH, temperature, and color change simulation",
      "Hazard warning indicators and virtual safety glasses"
    ],
    "features": [
      "3D beaker and test tube WebGL physics workbench",
      "Chemical reaction database with stoichiometric calculations",
      "Real-time pH, temperature, and color change simulation",
      "Hazard warning indicators and virtual safety glasses"
    ],
    "frontend": "React, Three.js, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Three.js, Canvas API",
    "techStack": [
      "React",
      "Three.js",
      "WebGL",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Simulates realistic chemical equilibrium constants, bubbling gases, and precipitate formation.",
    "roadmap": [
      "Three.js 3D lab bench and glassware scene",
      "Chemical reaction stoichiometry calculation engine",
      "Visual liquid shader with dynamic color blending",
      "Titration curve graph visualizer"
    ],
    "extensions": [
      "Molecular bonding 3D ball-and-stick visualizer",
      "Custom lab experiment assignment builder for teachers"
    ],
    "mvpScope": "Pour virtual hydrochloric acid into sodium hydroxide, observe color indicator change, and view pH curve.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-edtech-09",
    "title": "LinguaSub: Dual-Language Video Immersion Extension",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Language learners struggle to transition from beginner apps to authentic foreign cinema and news.",
    "problemStatement": "Language learners struggle to transition from beginner apps to authentic foreign cinema and news.",
    "solution": "A browser extension displaying dual bilingual subtitles with interactive word definitions and audio replay.",
    "proposedSolution": "A browser extension displaying dual bilingual subtitles with interactive word definitions and audio replay.",
    "realWorldUseCase": "Spanish learner watching a documentary on Netflix or YouTube.",
    "targetAudience": "Spanish learner watching a documentary on Netflix or YouTube.",
    "mainFeatures": [
      "Synchronized dual-language subtitle overlay",
      "Click-to-define vocabulary tooltip with pronunciation",
      "Auto-pause video on difficult idioms",
      "One-click export of saved words to Anki flashcards"
    ],
    "features": [
      "Synchronized dual-language subtitle overlay",
      "Click-to-define vocabulary tooltip with pronunciation",
      "Auto-pause video on difficult idioms",
      "One-click export of saved words to Anki flashcards"
    ],
    "frontend": "React (Extension UI), Tailwind",
    "backend": "Chrome Extension Content Script",
    "database": "chrome.storage.local",
    "otherTech": "Web Speech API, AnkiConnect",
    "techStack": [
      "React",
      "Chrome Extension",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Allows 1-key replay of the exact current subtitle sentence with slowed audio pitch.",
    "roadmap": [
      "Video player DOM subtitle synchronization",
      "Floating dual-subtitle visual overlay",
      "Click-to-lookup dictionary with grammatical notes",
      "Anki flashcard export generator"
    ],
    "extensions": [
      "Grammar structure breakdown highlighter",
      "Speech shadowing audio recording comparator"
    ],
    "mvpScope": "Open a YouTube video and watch synchronized Spanish/English subtitles with instant word definitions.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-10",
    "title": "StudyPacer: Pomodoro Habit & Focus Energy Tracker",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Students experience afternoon study burnout from rigid, inflexible scheduling apps.",
    "problemStatement": "Students experience afternoon study burnout from rigid, inflexible scheduling apps.",
    "solution": "An adaptive focus timer that adjusts study session durations based on subjective cognitive energy ratings.",
    "proposedSolution": "An adaptive focus timer that adjusts study session durations based on subjective cognitive energy ratings.",
    "realWorldUseCase": "College student balancing 4 course exams during finals week.",
    "targetAudience": "College student balancing 4 course exams during finals week.",
    "mainFeatures": [
      "Dynamic focus timer (25 to 50 min) based on fatigue rating",
      "Subjective energy level logging before and after study blocks",
      "Weekly study focus heatmaps and subject distribution",
      "Ambient lofi audio tracks with binaural beat toggle"
    ],
    "features": [
      "Dynamic focus timer (25 to 50 min) based on fatigue rating",
      "Subjective energy level logging before and after study blocks",
      "Weekly study focus heatmaps and subject distribution",
      "Ambient lofi audio tracks with binaural beat toggle"
    ],
    "frontend": "React, Tailwind, Howler.js",
    "backend": "Client-Side (Vite)",
    "database": "IndexedDB / LocalStorage",
    "otherTech": "Chart.js, Lucide React",
    "techStack": [
      "React",
      "Chart.js",
      "Tailwind",
      "IndexedDB"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Correlates study times with energy levels to recommend the user's optimal biological study hours.",
    "roadmap": [
      "Customizable timer with circular SVG progress ring",
      "Energy level log modal with emoji ratings",
      "Study analytics dashboard with daily focus breakdown",
      "Integrated ambient sound player with volume slider"
    ],
    "extensions": [
      "Google Calendar study block synchronization",
      "Gamified focus garden with growing plants"
    ],
    "mvpScope": "Start a 25-minute study sprint, log your energy level, and view your weekly subject breakdown chart.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-11",
    "title": "TimeWarp: Interactive Historical Timeline & Primary Sources",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "History education often reduces dynamic global events to memorizing boring isolated dates.",
    "problemStatement": "History education often reduces dynamic global events to memorizing boring isolated dates.",
    "solution": "An interactive multi-track timeline connecting concurrent global events across art, science, and politics.",
    "proposedSolution": "An interactive multi-track timeline connecting concurrent global events across art, science, and politics.",
    "realWorldUseCase": "High school student exploring what was happening in Asia and Africa during the European Renaissance.",
    "targetAudience": "High school student exploring what was happening in Asia and Africa during the European Renaissance.",
    "mainFeatures": [
      "Multi-track zoomable horizontal timeline canvas",
      "Synchronized global events across 5 continents",
      "Primary source document & photograph archive integration",
      "Cause-and-effect dependency arrows connecting milestones"
    ],
    "features": [
      "Multi-track zoomable horizontal timeline canvas",
      "Synchronized global events across 5 continents",
      "Primary source document & photograph archive integration",
      "Cause-and-effect dependency arrows connecting milestones"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / Supabase",
    "otherTech": "Framer Motion, Lucide React",
    "techStack": [
      "React",
      "Framer Motion",
      "Supabase",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Features interactive 'What If?' speculative branching paths exploring alternative historical turns.",
    "roadmap": [
      "Interactive horizontal timeline scrolling canvas",
      "Category and continent filtering filters",
      "Historical event detail drawer with primary source photos",
      "Cause-and-effect relationship link overlay"
    ],
    "extensions": [
      "Interactive historical quiz game based on timeline",
      "Student custom timeline research project builder"
    ],
    "mvpScope": "Scroll through the year 1789 to see concurrent events across France, the Americas, and Qing Dynasty China.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-12",
    "title": "AudioQuiz: Screen-Reader Optimized Audio Quiz Engine",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Visually impaired students are excluded from visual-heavy online quiz platforms like Kahoot.",
    "problemStatement": "Visually impaired students are excluded from visual-heavy online quiz platforms like Kahoot.",
    "solution": "A voice-first accessible quiz platform fully navigable via keyboard audio cues and speech input.",
    "proposedSolution": "A voice-first accessible quiz platform fully navigable via keyboard audio cues and speech input.",
    "realWorldUseCase": "Blind student participating in an interactive classroom review.",
    "targetAudience": "Blind student participating in an interactive classroom review.",
    "mainFeatures": [
      "100% WCAG AAA accessible audio-first navigation",
      "Spatial stereo audio cues for timer countdowns and selections",
      "Voice answer recognition using Web Speech API",
      "Tactile keyboard-shortcut-only operation mode"
    ],
    "features": [
      "100% WCAG AAA accessible audio-first navigation",
      "Spatial stereo audio cues for timer countdowns and selections",
      "Voice answer recognition using Web Speech API",
      "Tactile keyboard-shortcut-only operation mode"
    ],
    "frontend": "React, Web Audio API, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Web Speech API, Soundfonts",
    "techStack": [
      "React",
      "Web Audio API",
      "Web Speech API",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Tested with NVDA and VoiceOver screen readers to ensure zero inaccessible UI barriers.",
    "roadmap": [
      "High-contrast accessible DOM structure with ARIA live regions",
      "Web Audio synthesizer for spatial stereo sound effects",
      "Speech recognition input hook",
      "Audio review score readout"
    ],
    "extensions": [
      "Braille display compatibility mode",
      "Teacher voice-recorded question upload"
    ],
    "mvpScope": "Navigate and answer a 5-question trivia quiz using only arrow keys and spatial audio prompts.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-13",
    "title": "ClassTrack: Privacy-Preserving Student Participation Log",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Instructors struggle to equitably call on quiet students and track classroom discussion balance.",
    "problemStatement": "Instructors struggle to equitably call on quiet students and track classroom discussion balance.",
    "solution": "A lightweight teacher companion tracking classroom participation equity without intrusive biometric cameras.",
    "proposedSolution": "A lightweight teacher companion tracking classroom participation equity without intrusive biometric cameras.",
    "realWorldUseCase": "High school teacher ensuring equal speaking time between all students in seminar.",
    "targetAudience": "High school teacher ensuring equal speaking time between all students in seminar.",
    "mainFeatures": [
      "Classroom seating chart drag-and-drop layout",
      "1-tap participation tracker (Question, Answer, Insight)",
      "Gender and demographic participation balance charts",
      "Random fair student cold-call picker"
    ],
    "features": [
      "Classroom seating chart drag-and-drop layout",
      "1-tap participation tracker (Question, Answer, Insight)",
      "Gender and demographic participation balance charts",
      "Random fair student cold-call picker"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Lucide React, Recharts",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Zero student surveillance; runs 100% offline on teacher's tablet without recording audio or video.",
    "roadmap": [
      "Visual seating grid layout builder",
      "1-tap student participation counter modal",
      "Real-time participation distribution pie chart",
      "Fair randomized student selector animation"
    ],
    "extensions": [
      "Exportable CSV gradebook participation scores",
      "Student self-reflection log sync"
    ],
    "mvpScope": "Set up a 15-student seating chart, record 10 speaking contributions, and view equity analytics.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-14",
    "title": "GeoSandbox: Interactive Geometry & Trigonometry Explorer",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Students struggle to grasp trigonometric sine, cosine, and unit circle concepts on static chalkboards.",
    "problemStatement": "Students struggle to grasp trigonometric sine, cosine, and unit circle concepts on static chalkboards.",
    "solution": "An interactive visual sandbox where moving points on a unit circle dynamically graphs sine and cosine waves.",
    "proposedSolution": "An interactive visual sandbox where moving points on a unit circle dynamically graphs sine and cosine waves.",
    "realWorldUseCase": "Trigonometry student learning why sin(90\u00b0) equals 1.",
    "targetAudience": "Trigonometry student learning why sin(90\u00b0) equals 1.",
    "mainFeatures": [
      "Interactive unit circle point dragger with angle readout",
      "Real-time synchronized sine and cosine wave graphing",
      "Triangle theorem visual proofs (Pythagorean, Thales, Law of Sines)",
      "Interactive angle challenge mini-games"
    ],
    "features": [
      "Interactive unit circle point dragger with angle readout",
      "Real-time synchronized sine and cosine wave graphing",
      "Triangle theorem visual proofs (Pythagorean, Thales, Law of Sines)",
      "Interactive angle challenge mini-games"
    ],
    "frontend": "React, Canvas API, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "None",
    "otherTech": "Canvas API, Lucide React",
    "techStack": [
      "React",
      "Canvas API",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Drag a point on the circle and watch the sine wave trace out in real time with synchronized color highlights.",
    "roadmap": [
      "Canvas unit circle coordinate rendering engine",
      "Trigonometric value calculator (sin, cos, tan, radians)",
      "Real-time wave plotter synchronized with angle",
      "Interactive visual challenge questions"
    ],
    "extensions": [
      "3D spherical trigonometry projection",
      "Fourier series square-wave synthesizer"
    ],
    "mvpScope": "Drag the unit circle angle to 45\u00b0 and see exact radical coordinates and wave peaks match.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-15",
    "title": "CurricuLab: Modular Micro-Curriculum Course Builder",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Educators and bootcamp mentors lack tools to break complex tech topics into 5-minute modular daily bites.",
    "problemStatement": "Educators and bootcamp mentors lack tools to break complex tech topics into 5-minute modular daily bites.",
    "solution": "A visual course builder that structures skills into dependency DAGs with micro-quizzes and code tasks.",
    "proposedSolution": "A visual course builder that structures skills into dependency DAGs with micro-quizzes and code tasks.",
    "realWorldUseCase": "DevOps mentor creating a 14-day 'Docker & Kubernetes Fundamentals' micro-course.",
    "targetAudience": "DevOps mentor creating a 14-day 'Docker & Kubernetes Fundamentals' micro-course.",
    "mainFeatures": [
      "Directed Acyclic Graph (DAG) lesson dependency editor",
      "Markdown lesson editor with interactive quiz builder",
      "Student progress tracking and skill unlock tree",
      "SCORM and JSON curriculum export"
    ],
    "features": [
      "Directed Acyclic Graph (DAG) lesson dependency editor",
      "Markdown lesson editor with interactive quiz builder",
      "Student progress tracking and skill unlock tree",
      "SCORM and JSON curriculum export"
    ],
    "frontend": "React, React Flow, Tailwind",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "React Flow, Zod",
    "techStack": [
      "React",
      "React Flow",
      "PostgreSQL",
      "Prisma"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Visualizes prerequisites as an interactive tech tree similar to RPG video game skill branches.",
    "roadmap": [
      "React Flow visual skill tree editor",
      "Lesson content creator with quiz integration",
      "Student learning view with unlocked milestone badges",
      "JSON course export and import"
    ],
    "extensions": [
      "Automated certificate of completion generation",
      "Integration with GitHub Classroom"
    ],
    "mvpScope": "Create a 3-node skill tree where completing 'HTML' unlocks 'CSS' and 'JavaScript'.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-16",
    "title": "MindCalm: Student Exam Anxiety Micro-Interventions",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Over 60% of students suffer acute panic symptoms right before major standardized exams.",
    "problemStatement": "Over 60% of students suffer acute panic symptoms right before major standardized exams.",
    "solution": "A 3-minute emergency calm web app delivering physiological sigh breathing guides and cognitive grounding.",
    "proposedSolution": "A 3-minute emergency calm web app delivering physiological sigh breathing guides and cognitive grounding.",
    "realWorldUseCase": "High school student feeling overwhelming heart palpitations 5 minutes before the SAT.",
    "targetAudience": "High school student feeling overwhelming heart palpitations 5 minutes before the SAT.",
    "mainFeatures": [
      "Physiological sigh dual-inhalation visual breathing circle",
      "5-4-3-2-1 sensory grounding interactive check-in",
      "Evidence-based somatic calm audio cues",
      "Pre-exam positive re-framing affirmations"
    ],
    "features": [
      "Physiological sigh dual-inhalation visual breathing circle",
      "5-4-3-2-1 sensory grounding interactive check-in",
      "Evidence-based somatic calm audio cues",
      "Pre-exam positive re-framing affirmations"
    ],
    "frontend": "React, Framer Motion, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Web Audio API, Framer Motion",
    "techStack": [
      "React",
      "Framer Motion",
      "Web Audio API",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Scientifically proven 2-breath physiological sigh technique that rapidly lowers autonomic heart rate.",
    "roadmap": [
      "Expanding breathing circle animation with duration timer",
      "5-4-3-2-1 sensory check-off interactive cards",
      "Calm ambient sound generator with Web Audio",
      "Emergency one-tap panic button for instant launch"
    ],
    "extensions": [
      "Offline PWA installation for zero-connectivity testing centers",
      "Haptic pulse feedback on mobile phones"
    ],
    "mvpScope": "Click 'Start 3-Minute Reset' and follow the visual expanding breathing circle with sound cues.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-17",
    "title": "RubricAI: Objective Student Essay Analysis & Feedback",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Students wait weeks for generic teacher essay grades without actionable revision pointers.",
    "problemStatement": "Students wait weeks for generic teacher essay grades without actionable revision pointers.",
    "solution": "An NLP essay assistant that evaluates thesis clarity, topic sentences, and evidence support.",
    "proposedSolution": "An NLP essay assistant that evaluates thesis clarity, topic sentences, and evidence support.",
    "realWorldUseCase": "College freshman writing an argumentative essay on renewable energy policies.",
    "targetAudience": "College freshman writing an argumentative essay on renewable energy policies.",
    "mainFeatures": [
      "Thesis statement strength and specificity detector",
      "Topic sentence paragraph cohesion checker",
      "Evidence-to-claim ratio balance analysis",
      "Grammar and passive voice style suggestions"
    ],
    "features": [
      "Thesis statement strength and specificity detector",
      "Topic sentence paragraph cohesion checker",
      "Evidence-to-claim ratio balance analysis",
      "Grammar and passive voice style suggestions"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "FastAPI, Spacy, OpenAI API",
    "database": "PostgreSQL / Supabase",
    "otherTech": "Spacy, Diff-match-patch",
    "techStack": [
      "Next.js",
      "FastAPI",
      "Spacy",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Provides heatmaps showing exactly which paragraphs lack empirical evidence or citations.",
    "roadmap": [
      "Rich text essay editor with word metrics",
      "NLP thesis statement and claim analyzer",
      "Paragraph cohesion and evidence heatmap visualizer",
      "Exportable PDF revision feedback checklist"
    ],
    "extensions": [
      "Citation format converter (APA, MLA, Chicago)",
      "Argumentative counter-claim detector"
    ],
    "mvpScope": "Paste a 500-word essay and see paragraph color heatmaps grading evidence strength.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-18",
    "title": "OERAnnotate: Open Educational Resource Collaborative Reader",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "College textbooks cost over $1,200 annually, forcing students into debt or pirated PDFs.",
    "problemStatement": "College textbooks cost over $1,200 annually, forcing students into debt or pirated PDFs.",
    "solution": "A collaborative digital reader for open-license textbooks allowing students to annotate and ask questions in margins.",
    "proposedSolution": "A collaborative digital reader for open-license textbooks allowing students to annotate and ask questions in margins.",
    "realWorldUseCase": "Study group reading an open-source University Physics textbook together.",
    "targetAudience": "Study group reading an open-source University Physics textbook together.",
    "mainFeatures": [
      "OpenStax textbook library integration",
      "Margin sticky notes and collaborative annotations",
      "Upvoted student explanations for difficult paragraphs",
      "Personal summary flashcard generator from highlighted text"
    ],
    "features": [
      "OpenStax textbook library integration",
      "Margin sticky notes and collaborative annotations",
      "Upvoted student explanations for difficult paragraphs",
      "Personal summary flashcard generator from highlighted text"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "PDF.js, Prisma",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "PDF.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Builds a shared crowd-sourced commentary margin where senior students help freshmen.",
    "roadmap": [
      "Textbook PDF viewer with text highlight selection",
      "Margin thread commenting and upvoting system",
      "Filtered search across all textbook annotations",
      "Flashcard generator from highlighted quotes"
    ],
    "extensions": [
      "Teacher verified answer badge for TA responses",
      "Offline chapter reader with local caching"
    ],
    "mvpScope": "Highlight a physics formula in the viewer and leave a sticky note visible to teammates.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-19",
    "title": "ConceptMesh: Dynamic Knowledge Prerequisite Mapper",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Self-taught learners get lost because they don't know which foundational concepts to master first.",
    "problemStatement": "Self-taught learners get lost because they don't know which foundational concepts to master first.",
    "solution": "A knowledge dependency graph mapping 500+ computer science concepts from binary logic to distributed systems.",
    "proposedSolution": "A knowledge dependency graph mapping 500+ computer science concepts from binary logic to distributed systems.",
    "realWorldUseCase": "Bootcamp student wondering what math is required before studying Machine Learning.",
    "targetAudience": "Bootcamp student wondering what math is required before studying Machine Learning.",
    "mainFeatures": [
      "Interactive directed graph of CS concepts",
      "Personal skill mastery toggle (Unlearned, Learning, Mastered)",
      "Recommended next optimal learning step calculator",
      "Curated free learning resources for every node"
    ],
    "features": [
      "Interactive directed graph of CS concepts",
      "Personal skill mastery toggle (Unlearned, Learning, Mastered)",
      "Recommended next optimal learning step calculator",
      "Curated free learning resources for every node"
    ],
    "frontend": "React, D3.js / Cytoscape.js, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage / IndexedDB",
    "otherTech": "Cytoscape.js, Lucide React",
    "techStack": [
      "React",
      "Cytoscape.js",
      "D3.js",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Calculates topological sorting to present the learner with the most efficient learning sequence.",
    "roadmap": [
      "Cytoscape.js interactive node-edge graph",
      "Node status selector and progress counter",
      "Topological sort algorithm for learning path",
      "Curated resource drawer with free tutorial links"
    ],
    "extensions": [
      "Community concept roadmap contribution portal",
      "Skill gap diagnostic quiz to auto-populate mastery"
    ],
    "mvpScope": "Click 'Machine Learning' to highlight the exact prerequisite tree: Linear Algebra -> Calculus -> Python.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-20",
    "title": "EarMaster: Interactive Music Theory & Ear Trainer",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Music students struggle to identify pitch intervals, chord qualities, and rhythms by ear.",
    "problemStatement": "Music students struggle to identify pitch intervals, chord qualities, and rhythms by ear.",
    "solution": "A gamified musical ear training app with piano keyboard input and real-time audio pitch evaluation.",
    "proposedSolution": "A gamified musical ear training app with piano keyboard input and real-time audio pitch evaluation.",
    "realWorldUseCase": "Beginner piano student learning to identify minor 3rd and perfect 5th intervals.",
    "targetAudience": "Beginner piano student learning to identify minor 3rd and perfect 5th intervals.",
    "mainFeatures": [
      "Web Audio polyphonic piano synthesizer",
      "Interval, chord quality (Maj, Min, Dim, Aug), and scale quiz",
      "Interactive on-screen piano keyboard for response input",
      "Pitch recognition streak counter and accuracy stats"
    ],
    "features": [
      "Web Audio polyphonic piano synthesizer",
      "Interval, chord quality (Maj, Min, Dim, Aug), and scale quiz",
      "Interactive on-screen piano keyboard for response input",
      "Pitch recognition streak counter and accuracy stats"
    ],
    "frontend": "React, Web Audio API, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Tone.js, Soundfonts",
    "techStack": [
      "React",
      "Web Audio API",
      "Tone.js",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Plays realistic acoustic piano samples and provides visual musical stave notation feedback.",
    "roadmap": [
      "Tone.js piano synthesizer audio engine",
      "Interval and chord generation quiz state machine",
      "Interactive SVG piano keyboard with note highlights",
      "Accuracy analytics by interval type"
    ],
    "extensions": [
      "Microphone singing pitch accuracy detector",
      "Rhythm tap accuracy evaluator with metronome"
    ],
    "mvpScope": "Listen to a 2-note chord, tap the notes on the visual piano keyboard, and receive instant pitch scoring.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-21",
    "title": "StudyLounge: Virtual Pomodoro Study Room with Lofi Beats",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Remote students studying alone at home suffer from isolation and lack of focus accountability.",
    "problemStatement": "Remote students studying alone at home suffer from isolation and lack of focus accountability.",
    "solution": "A virtual study lounge with synchronized Pomodoro timers, presence avatars, and procedural ambient lofi audio.",
    "proposedSolution": "A virtual study lounge with synchronized Pomodoro timers, presence avatars, and procedural ambient lofi audio.",
    "realWorldUseCase": "Solo student feeling lonely studying late at night.",
    "targetAudience": "Solo student feeling lonely studying late at night.",
    "mainFeatures": [
      "Synchronized group study rooms with shared timer",
      "Subtle presence avatars and current study goal badges",
      "Procedural Web Audio lofi hip-hop beat generator",
      "Group chat restricted strictly to break periods to prevent distraction"
    ],
    "features": [
      "Synchronized group study rooms with shared timer",
      "Subtle presence avatars and current study goal badges",
      "Procedural Web Audio lofi hip-hop beat generator",
      "Group chat restricted strictly to break periods to prevent distraction"
    ],
    "frontend": "React, Web Audio API, Tailwind",
    "backend": "Node.js, Socket.io",
    "database": "Redis",
    "otherTech": "Tone.js, Socket.io",
    "techStack": [
      "React",
      "Tone.js",
      "Socket.io",
      "Node.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Blocks chat messages during 25-minute focus sprints; opens social chat only during 5-minute rest breaks.",
    "roadmap": [
      "Socket.io real-time room presence and avatar list",
      "Shared synchronized countdown timer state",
      "Tone.js generative lofi drum and chord generator",
      "Study goal input badge and celebration confetti"
    ],
    "extensions": [
      "Custom room background video loops",
      "Spotify playlist API embed support"
    ],
    "mvpScope": "Join a study room, set your focus goal, and study alongside 4 other users while lofi chords play.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-edtech-22",
    "title": "BugHunter: Interactive Code Vulnerability Lab",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Computer science students rarely practice finding real-world security bugs in existing codebases.",
    "problemStatement": "Computer science students rarely practice finding real-world security bugs in existing codebases.",
    "solution": "A code review practice game where learners inspect buggy snippets to locate and patch vulnerabilities.",
    "proposedSolution": "A code review practice game where learners inspect buggy snippets to locate and patch vulnerabilities.",
    "realWorldUseCase": "Junior developer preparing for a code-auditing security interview.",
    "targetAudience": "Junior developer preparing for a code-auditing security interview.",
    "mainFeatures": [
      "Curated library of 40 real-world buggy snippets (SQLi, off-by-one, race condition)",
      "Interactive syntax-highlighted code inspector",
      "Hint ladder explaining vulnerability mechanics",
      "In-browser patch editor with automated regression tests"
    ],
    "features": [
      "Curated library of 40 real-world buggy snippets (SQLi, off-by-one, race condition)",
      "Interactive syntax-highlighted code inspector",
      "Hint ladder explaining vulnerability mechanics",
      "In-browser patch editor with automated regression tests"
    ],
    "frontend": "React, Monaco Editor, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Monaco Editor, PrismJS",
    "techStack": [
      "React",
      "Monaco Editor",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Provides instant feedback testing if the learner's fix breaks existing features or leaves holes.",
    "roadmap": [
      "Code snippet library with categorized vulnerability tags",
      "Monaco editor with line-click bug flagger",
      "Automated test suite verifying the learner's fix",
      "Scoreboard tracking vulnerabilities discovered"
    ],
    "extensions": [
      "Multiplayer race: First to spot and fix the bug wins",
      "Leaderboard with time-to-fix metrics"
    ],
    "mvpScope": "Inspect a Node.js authentication function, click the SQL injection vulnerability, and submit a parameterized fix.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-23",
    "title": "PodStudy: Flashcard-to-Podcast Audio Study Synthesizer",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Commuting students with busy work shifts cannot read flashcards while driving or walking.",
    "problemStatement": "Commuting students with busy work shifts cannot read flashcards while driving or walking.",
    "solution": "An audio generator that converts study notes and flashcards into conversational educational podcast dialogue.",
    "proposedSolution": "An audio generator that converts study notes and flashcards into conversational educational podcast dialogue.",
    "realWorldUseCase": "Student commuting on the subway reviewing 20 biology concepts with headphones.",
    "targetAudience": "Student commuting on the subway reviewing 20 biology concepts with headphones.",
    "mainFeatures": [
      "Note and flashcard text ingestion",
      "Two-host conversational dialogue script generator",
      "Neural text-to-speech with natural cadence and banter",
      "Downloadable MP3 audio track with chapter marks"
    ],
    "features": [
      "Note and flashcard text ingestion",
      "Two-host conversational dialogue script generator",
      "Neural text-to-speech with natural cadence and banter",
      "Downloadable MP3 audio track with chapter marks"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Python FastAPI, OpenAI API",
    "database": "AWS S3 / Supabase",
    "otherTech": "ElevenLabs API, PyDub",
    "techStack": [
      "React",
      "FastAPI",
      "ElevenLabs",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Creates natural conversational dialogue between a curious student persona and an expert tutor persona.",
    "roadmap": [
      "Flashcard deck parser and dialogue prompt builder",
      "Multi-voice neural audio synthesis pipeline",
      "Audio player with 1.5x speed toggle and chapter bookmarks",
      "One-click MP3 download button"
    ],
    "extensions": [
      "Quiz questions spoken aloud with pause for student to answer",
      "Apple Podcasts / Spotify RSS feed generator"
    ],
    "mvpScope": "Paste 5 flashcards on cell biology and listen to a 2-minute audio conversation explaining mitochondria.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-edtech-24",
    "title": "CareerPath: Tech Skill Gap Analyzer & Roadmap",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Graduating students don't know which specific tools and frameworks are required for target job roles.",
    "problemStatement": "Graduating students don't know which specific tools and frameworks are required for target job roles.",
    "solution": "A career roadmap tool comparing a student's current resume against 1,000 real job listings to identify skill gaps.",
    "proposedSolution": "A career roadmap tool comparing a student's current resume against 1,000 real job listings to identify skill gaps.",
    "realWorldUseCase": "Junior developer aiming to qualify for a Cloud DevOps Engineer role.",
    "targetAudience": "Junior developer aiming to qualify for a Cloud DevOps Engineer role.",
    "mainFeatures": [
      "Target job title selection (e.g. DevOps, Data Engineer, Fullstack)",
      "Student resume and skill inventory checklist",
      "Skill gap percentage score and prioritized missing tech",
      "Actionable 8-week project roadmap to bridge the gap"
    ],
    "features": [
      "Target job title selection (e.g. DevOps, Data Engineer, Fullstack)",
      "Student resume and skill inventory checklist",
      "Skill gap percentage score and prioritized missing tech",
      "Actionable 8-week project roadmap to bridge the gap"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / Supabase",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Recharts",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Recommends specific, free portfolio projects that demonstrate the exact missing skills.",
    "roadmap": [
      "Interactive skill inventory selection grid",
      "Job market requirement radar chart comparator",
      "Gap analysis summary with priority badges",
      "Personalized week-by-week study milestone generator"
    ],
    "extensions": [
      "Live job posting scraper integration",
      "Salary progression trajectory projection"
    ],
    "mvpScope": "Select 'Backend Engineer', check off Python & PostgreSQL, and see an instant radar chart highlighting Docker as missing.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-edtech-25",
    "title": "PhysLab: 2D Interactive Physics & Optics Playground",
    "domain": "Education Technology",
    "category": "Education Technology",
    "problem": "Physics concepts like projectile drag, Snell's law, and gravitational orbits feel abstract on paper.",
    "problemStatement": "Physics concepts like projectile drag, Snell's law, and gravitational orbits feel abstract on paper.",
    "solution": "A 2D interactive canvas physics sandbox where learners manipulate lenses, mirrors, gravity, and pendulum bobs.",
    "proposedSolution": "A 2D interactive canvas physics sandbox where learners manipulate lenses, mirrors, gravity, and pendulum bobs.",
    "realWorldUseCase": "AP Physics student testing refraction through glass prisms.",
    "targetAudience": "AP Physics student testing refraction through glass prisms.",
    "mainFeatures": [
      "Optics ray-tracing simulator with mirrors, lenses, and lasers",
      "Projectile motion with mass, air drag, and launch angle dials",
      "Double pendulum chaotic motion trajectory tracer",
      "Real-time energy conservation graphs (Kinetic vs Potential)"
    ],
    "features": [
      "Optics ray-tracing simulator with mirrors, lenses, and lasers",
      "Projectile motion with mass, air drag, and launch angle dials",
      "Double pendulum chaotic motion trajectory tracer",
      "Real-time energy conservation graphs (Kinetic vs Potential)"
    ],
    "frontend": "React, Canvas API, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "None",
    "otherTech": "Canvas API, Lucide React",
    "techStack": [
      "React",
      "Canvas API",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Calculates real-time Snell's law refraction vectors and refractive index sliders.",
    "roadmap": [
      "Canvas ray-tracing refraction physics engine",
      "Draggable optical elements (concave/convex lens, mirror)",
      "Real-time beam angle and focal point calculation",
      "Interactive optics challenge puzzles"
    ],
    "extensions": [
      "Gravitational slingshot simulator with multi-body physics",
      "Fluid buoyancy simulation with water tanks"
    ],
    "mvpScope": "Place a prism on canvas, shine a white laser through it, and see the beam refract according to Snell's law.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-01",
    "title": "VitalWatch: Web Bluetooth BLE Health Telemetry Hub",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Patients with chronic conditions need simple ways to log vitals without cumbersome proprietary mobile apps.",
    "problemStatement": "Patients with chronic conditions need simple ways to log vitals without cumbersome proprietary mobile apps.",
    "solution": "A web application connecting directly to Bluetooth blood pressure and pulse oximeter devices via Web Bluetooth.",
    "proposedSolution": "A web application connecting directly to Bluetooth blood pressure and pulse oximeter devices via Web Bluetooth.",
    "realWorldUseCase": "Hypertensive patient streaming blood pressure readings directly to their physician's dashboard.",
    "targetAudience": "Hypertensive patient streaming blood pressure readings directly to their physician's dashboard.",
    "mainFeatures": [
      "Direct Web Bluetooth API device pairing (BLE GATT services)",
      "Live systolic/diastolic and pulse rate telemetry stream",
      "Historical trend graphs with normal baseline bands",
      "Exportable PDF medical report for doctor visits"
    ],
    "features": [
      "Direct Web Bluetooth API device pairing (BLE GATT services)",
      "Live systolic/diastolic and pulse rate telemetry stream",
      "Historical trend graphs with normal baseline bands",
      "Exportable PDF medical report for doctor visits"
    ],
    "frontend": "React 19, Tailwind, Chart.js",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Web Bluetooth API, Chart.js",
    "techStack": [
      "React",
      "Web Bluetooth API",
      "Chart.js",
      "Node.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Requires zero mobile app store download; connects directly from Chrome on laptop or Android phone.",
    "roadmap": [
      "Web Bluetooth GATT characteristic discovery and subscription",
      "Real-time streaming data parser for standard BLE Heart Rate/BP",
      "Historical trend chart with hypertension stage alerts",
      "One-click CSV/PDF export generator"
    ],
    "extensions": [
      "Automated SMS emergency alert to family if vitals spike",
      "Multi-device simultaneous connection hub"
    ],
    "mvpScope": "Pair with a Bluetooth heart rate monitor or pulse simulator, stream heart rate live onto an animated graph.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-health-02",
    "title": "PillVision: On-Device Pill Identification & Schedule",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Elderly patients with multiple prescriptions get confused when pills lose their original pharmacy bottles.",
    "problemStatement": "Elderly patients with multiple prescriptions get confused when pills lose their original pharmacy bottles.",
    "solution": "A computer vision assistant identifying pills by color, imprint, and shape, matching them against FDA databases.",
    "proposedSolution": "A computer vision assistant identifying pills by color, imprint, and shape, matching them against FDA databases.",
    "realWorldUseCase": "Elderly patient verifying whether an unlabeled white round pill is aspirin or lisinopril.",
    "targetAudience": "Elderly patient verifying whether an unlabeled white round pill is aspirin or lisinopril.",
    "mainFeatures": [
      "Smartphone camera macro photo capture",
      "Pill shape, color, and imprint classification model",
      "FDA National Drug Code (NDC) database lookup",
      "Automated medication schedule and reminder calendar"
    ],
    "features": [
      "Smartphone camera macro photo capture",
      "Pill shape, color, and imprint classification model",
      "FDA National Drug Code (NDC) database lookup",
      "Automated medication schedule and reminder calendar"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "FastAPI, PyTorch / MobileNet",
    "database": "PostgreSQL (FDA Pill Database)",
    "otherTech": "OpenCV, FDA API",
    "techStack": [
      "React",
      "FastAPI",
      "PyTorch",
      "OpenCV"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Features high-contrast accessibility mode with large buttons and voice audio confirmation.",
    "roadmap": [
      "Camera photo capture with circular alignment guide",
      "Pill contour and color classification pipeline",
      "FDA imprint database fuzzy query matcher",
      "Medication schedule calendar with dosage notes"
    ],
    "extensions": [
      "Drug interaction cross-reference warnings",
      "Voice confirmation for visually impaired seniors"
    ],
    "mvpScope": "Upload photo of a pill, view top 3 FDA database matches with dosage and prescribing warnings.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-health-03",
    "title": "TrialMatch: Clinical Trial Matcher for Rare Diseases",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Patients with rare diseases miss life-saving experimental treatments because ClinicalTrials.gov search is confusing.",
    "problemStatement": "Patients with rare diseases miss life-saving experimental treatments because ClinicalTrials.gov search is confusing.",
    "solution": "An AI-powered search tool translating patient diagnoses and genetic markers into eligible clinical trials.",
    "proposedSolution": "An AI-powered search tool translating patient diagnoses and genetic markers into eligible clinical trials.",
    "realWorldUseCase": "Oncology patient seeking clinical trials targeting a specific KRAS gene mutation.",
    "targetAudience": "Oncology patient seeking clinical trials targeting a specific KRAS gene mutation.",
    "mainFeatures": [
      "ClinicalTrials.gov API daily synchronization",
      "Patient biomarker, age, and location eligibility filter",
      "Interactive geographic trial site distance map",
      "One-click trial coordinator inquiry email drafter"
    ],
    "features": [
      "ClinicalTrials.gov API daily synchronization",
      "Patient biomarker, age, and location eligibility filter",
      "Interactive geographic trial site distance map",
      "One-click trial coordinator inquiry email drafter"
    ],
    "frontend": "Next.js 14, Mapbox GL, Tailwind",
    "backend": "FastAPI, LangChain",
    "database": "PostgreSQL, pgvector",
    "otherTech": "ClinicalTrials.gov REST API",
    "techStack": [
      "Next.js",
      "FastAPI",
      "Mapbox",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Summarizes 40-page inclusion/exclusion criteria into plain bullet points explaining why a patient qualifies.",
    "roadmap": [
      "ClinicalTrials.gov API ingestion and vector indexing",
      "Patient questionnaire matching engine",
      "Mapbox trial center locator with driving distances",
      "Inquiry contact email template generator"
    ],
    "extensions": [
      "Automated email alerts when new trials open in patient's state",
      "Physician referral package exporter"
    ],
    "mvpScope": "Enter diagnosis 'Stage 3 NSCLC' and location to view top 5 matching clinical trials with distance pins.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-health-04",
    "title": "RecoveryPath: Post-Operative Patient Milestone Tracker",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Surgical patients get discharged with vague instructions and panic over normal healing symptoms.",
    "problemStatement": "Surgical patients get discharged with vague instructions and panic over normal healing symptoms.",
    "solution": "A structured day-by-day surgical recovery companion tracking wound healing, pain levels, and mobility.",
    "proposedSolution": "A structured day-by-day surgical recovery companion tracking wound healing, pain levels, and mobility.",
    "realWorldUseCase": "Patient recovering from knee replacement surgery over a 6-week timeline.",
    "targetAudience": "Patient recovering from knee replacement surgery over a 6-week timeline.",
    "mainFeatures": [
      "Day-by-day recovery milestones and physical therapy exercises",
      "Visual pain scale tracker (0-10) with medication correlation",
      "Wound healing photo journal with privacy encryption",
      "Emergency red-flag symptom triage (fever, swelling, clotting)"
    ],
    "features": [
      "Day-by-day recovery milestones and physical therapy exercises",
      "Visual pain scale tracker (0-10) with medication correlation",
      "Wound healing photo journal with privacy encryption",
      "Emergency red-flag symptom triage (fever, swelling, clotting)"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Web Crypto API, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Prisma",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Encrypts wound photos locally in the browser before storage to protect patient dignity and HIPAA privacy.",
    "roadmap": [
      "Day-by-day milestone roadmap view",
      "Pain rating slider with hourly medication log",
      "Client-side AES encrypted photo upload vault",
      "Emergency hotline triage checker modal"
    ],
    "extensions": [
      "Physical therapy video exercise player with timer",
      "Doctor weekly recovery summary report export"
    ],
    "mvpScope": "Log day 3 post-op pain rating, track prescribed walking minutes, and see next day's expected milestones.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-05",
    "title": "VoiceMood: Acoustic Vocal Biomarker Depression Tracker",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Mental health patients struggle to recognize gradual depressive slips until a severe crisis occurs.",
    "problemStatement": "Mental health patients struggle to recognize gradual depressive slips until a severe crisis occurs.",
    "solution": "A vocal biomarker journal that detects acoustic signs of fatigue and depression from 30-second daily voice notes.",
    "proposedSolution": "A vocal biomarker journal that detects acoustic signs of fatigue and depression from 30-second daily voice notes.",
    "realWorldUseCase": "Individual in outpatient therapy tracking emotional stability between monthly sessions.",
    "targetAudience": "Individual in outpatient therapy tracking emotional stability between monthly sessions.",
    "mainFeatures": [
      "30-second daily spoken voice journal recording",
      "Acoustic feature extractor (pitch variance, jitter, speaking rate)",
      "Longitudinal emotional trend graphs",
      "Private encrypted therapist share link"
    ],
    "features": [
      "30-second daily spoken voice journal recording",
      "Acoustic feature extractor (pitch variance, jitter, speaking rate)",
      "Longitudinal emotional trend graphs",
      "Private encrypted therapist share link"
    ],
    "frontend": "React, Web Audio API, Wavesurfer.js",
    "backend": "FastAPI, Librosa, PyTorch",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Web Audio API, Chart.js",
    "techStack": [
      "React",
      "FastAPI",
      "Web Audio API",
      "Chart.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Analyzes acoustic prosody and vocal energy rather than words spoken, ensuring private personal thoughts aren't judged.",
    "roadmap": [
      "Microphone audio recording and waveform visualizer",
      "Acoustic prosody feature extraction (Librosa)",
      "Longitudinal sentiment & energy trend line chart",
      "Emergency crisis resource drawer"
    ],
    "extensions": [
      "Integration with wearable sleep and step data",
      "Exportable psychiatric progress report"
    ],
    "mvpScope": "Record a 30-second daily voice note and view an acoustic energy and pitch variability rating.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-health-06",
    "title": "HealthBridge: Open-Source FHIR Patient Health Portal",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Patients struggle to gather their medical histories scattered across different hospital networks.",
    "problemStatement": "Patients struggle to gather their medical histories scattered across different hospital networks.",
    "solution": "A universal patient health portal supporting the HL7 FHIR standard for aggregating medical records.",
    "proposedSolution": "A universal patient health portal supporting the HL7 FHIR standard for aggregating medical records.",
    "realWorldUseCase": "Patient transferring medical history between three different hospital networks.",
    "targetAudience": "Patient transferring medical history between three different hospital networks.",
    "mainFeatures": [
      "HL7 FHIR JSON medical record ingestion",
      "Unified medical history timeline (Lab tests, Vaccinations, Conditions)",
      "Interactive laboratory test result trends with normal ranges",
      "One-click encrypted backup to Apple Health / local storage"
    ],
    "features": [
      "HL7 FHIR JSON medical record ingestion",
      "Unified medical history timeline (Lab tests, Vaccinations, Conditions)",
      "Interactive laboratory test result trends with normal ranges",
      "One-click encrypted backup to Apple Health / local storage"
    ],
    "frontend": "Next.js 15, Tailwind, Recharts",
    "backend": "FastAPI / Node.js, FHIR Client",
    "database": "PostgreSQL, Supabase",
    "otherTech": "FHIR Specification, Zod",
    "techStack": [
      "Next.js",
      "FastAPI",
      "FHIR",
      "PostgreSQL"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Converts obscure laboratory code jargon (e.g. LOINC 2345-7) into plain language descriptions with healthy ranges.",
    "roadmap": [
      "FHIR SMART-on-FHIR client authentication",
      "Clinical timeline visualizer with icon categories",
      "Interactive blood test trend graphs with reference ranges",
      "Exportable emergency medical summary card"
    ],
    "extensions": [
      "Medication allergy contraindication checker",
      "Family member proxy access manager"
    ],
    "mvpScope": "Import a standard FHIR patient JSON file and view an aggregated timeline of surgeries and lab tests.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-07",
    "title": "DermaCheck: On-Device Skin Lesion Screening Assistant",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Dermatology appointments have 6-month wait times while early melanoma detection is vital for survival.",
    "problemStatement": "Dermatology appointments have 6-month wait times while early melanoma detection is vital for survival.",
    "solution": "An educational skin spot screening tool using the ABCDE melanoma criteria and an on-device neural model.",
    "proposedSolution": "An educational skin spot screening tool using the ABCDE melanoma criteria and an on-device neural model.",
    "realWorldUseCase": "Individual monitoring an asymmetrical mole on their arm over time.",
    "targetAudience": "Individual monitoring an asymmetrical mole on their arm over time.",
    "mainFeatures": [
      "ABCDE melanoma criteria guide (Asymmetry, Border, Color, Diameter, Evolution)",
      "On-device image classification model for lesion screening",
      "Longitudinal photo alignment tracker with scale coin reference",
      "Recommendation summary: Routine vs Urgent Physician Review"
    ],
    "features": [
      "ABCDE melanoma criteria guide (Asymmetry, Border, Color, Diameter, Evolution)",
      "On-device image classification model for lesion screening",
      "Longitudinal photo alignment tracker with scale coin reference",
      "Recommendation summary: Routine vs Urgent Physician Review"
    ],
    "frontend": "React, Tailwind, Canvas API",
    "backend": "TensorFlow.js (Client-Side)",
    "database": "IndexedDB (Private Local Storage)",
    "otherTech": "Canvas API, Lucide React",
    "techStack": [
      "React",
      "TensorFlow.js",
      "Canvas API",
      "IndexedDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Runs entirely inside the browser without transmitting sensitive body photos over the internet.",
    "roadmap": [
      "Photo capture with calibration coin circle guide",
      "ABCDE visual segmentation and border calculation",
      "TensorFlow.js skin lesion inference pipeline",
      "Photo timeline gallery for tracking mole evolution"
    ],
    "extensions": [
      "Dermatologist referral finder with zip code search",
      "Automated calendar reminder for 30-day re-check"
    ],
    "mvpScope": "Upload a photo of a skin spot, view calculated asymmetry ratio, and see educational ABCDE breakdown.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-health-08",
    "title": "MacroScan: Nutritional Macro Estimator from Food Photos",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "People with dietary health conditions get fatigued from typing ingredient weights into calorie apps.",
    "problemStatement": "People with dietary health conditions get fatigued from typing ingredient weights into calorie apps.",
    "solution": "A food camera assistant estimating portion sizes, calories, and macronutrients from a single meal photo.",
    "proposedSolution": "A food camera assistant estimating portion sizes, calories, and macronutrients from a single meal photo.",
    "realWorldUseCase": "Diabetic person tracking carbohydrate intake before taking mealtime insulin.",
    "targetAudience": "Diabetic person tracking carbohydrate intake before taking mealtime insulin.",
    "mainFeatures": [
      "Single-photo meal food recognition",
      "Visual portion size and depth estimation heuristic",
      "Carbs, protein, fat, and fiber nutritional breakdown",
      "Daily nutritional target progress rings"
    ],
    "features": [
      "Single-photo meal food recognition",
      "Visual portion size and depth estimation heuristic",
      "Carbs, protein, fat, and fiber nutritional breakdown",
      "Daily nutritional target progress rings"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "FastAPI, YOLOv8, USDA FoodData API",
    "database": "Supabase / PostgreSQL",
    "otherTech": "Chart.js, USDA API",
    "techStack": [
      "React",
      "FastAPI",
      "YOLOv8",
      "Chart.js"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "3 weeks",
    "uniqueness": "Pulls official nutritional data directly from the verified USDA FoodData Central database.",
    "roadmap": [
      "Meal photo upload and bounding box detector",
      "Food category classification and USDA API query",
      "Macronutrient breakdown pie chart and calorie counter",
      "Daily intake log with carbohydrate target bars"
    ],
    "extensions": [
      "Barcode scanner for packaged snacks",
      "Exportable dietary log for nutritionists"
    ],
    "mvpScope": "Snap a photo of grilled chicken and rice, view estimated grams of protein and carbs with calorie counts.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-health-09",
    "title": "Glucolog: Glucose Pattern & Insulin Ratio Calculator",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Type 1 diabetics must do complex mental algebra for every meal to calculate insulin dosages.",
    "problemStatement": "Type 1 diabetics must do complex mental algebra for every meal to calculate insulin dosages.",
    "solution": "A smart diabetes companion that logs blood glucose, calculates insulin bolus, and identifies trend patterns.",
    "proposedSolution": "A smart diabetes companion that logs blood glucose, calculates insulin bolus, and identifies trend patterns.",
    "realWorldUseCase": "Type 1 diabetic calculating rapid-acting insulin dose for a 60g carbohydrate lunch.",
    "targetAudience": "Type 1 diabetic calculating rapid-acting insulin dose for a 60g carbohydrate lunch.",
    "mainFeatures": [
      "Insulin-to-carb ratio and correction factor calculator",
      "Continuous Glucose Monitor (CGM) trend arrow adjustment",
      "Hypoglycemia (low blood sugar) emergency rapid-treatment guide",
      "Time-in-Range (TIR) percentage analytics and A1c estimator"
    ],
    "features": [
      "Insulin-to-carb ratio and correction factor calculator",
      "Continuous Glucose Monitor (CGM) trend arrow adjustment",
      "Hypoglycemia (low blood sugar) emergency rapid-treatment guide",
      "Time-in-Range (TIR) percentage analytics and A1c estimator"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage / IndexedDB",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Calculates active insulin on board (IOB) using exponential insulin decay curves to prevent insulin stacking.",
    "roadmap": [
      "Bolus insulin calculator with configurable carb ratios",
      "Glucose log with time-in-range color badges",
      "Insulin-on-board (IOB) decay curve simulation",
      "Emergency low blood sugar quick-guide drawer"
    ],
    "extensions": [
      "Dexcom CGM API cloud synchronization",
      "Printable 14-day physician glucose log sheet"
    ],
    "mvpScope": "Enter current blood sugar 160 mg/dL and 45g carbs, see calculated insulin bolus accounting for target range.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-10",
    "title": "TriageFlow: Hospital Emergency Department Queue Simulator",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Hospital emergency departments suffer chaotic crowding due to inefficient triage prioritization.",
    "problemStatement": "Hospital emergency departments suffer chaotic crowding due to inefficient triage prioritization.",
    "solution": "A discrete-event simulation dashboard modeling ER patient arrival, triage category, and bed utilization.",
    "proposedSolution": "A discrete-event simulation dashboard modeling ER patient arrival, triage category, and bed utilization.",
    "realWorldUseCase": "Healthcare administrator testing how adding one triage nurse impacts average patient wait times.",
    "targetAudience": "Healthcare administrator testing how adding one triage nurse impacts average patient wait times.",
    "mainFeatures": [
      "Emergency Severity Index (ESI 1-5) triage classification",
      "Discrete-event simulation engine modeling patient arrival spikes",
      "Real-time bed occupancy, waiting room queue, and doctor allocation",
      "Scenario 'What-If' tester for staffing changes"
    ],
    "features": [
      "Emergency Severity Index (ESI 1-5) triage classification",
      "Discrete-event simulation engine modeling patient arrival spikes",
      "Real-time bed occupancy, waiting room queue, and doctor allocation",
      "Scenario 'What-If' tester for staffing changes"
    ],
    "frontend": "React, Tailwind, Chart.js",
    "backend": "Python FastAPI / SimPy",
    "database": "PostgreSQL / SQLite",
    "otherTech": "SimPy, Chart.js",
    "techStack": [
      "React",
      "FastAPI",
      "SimPy",
      "Chart.js"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Uses mathematical queuing theory and real-world SimPy discrete-event simulation to expose bottlenecks.",
    "roadmap": [
      "SimPy emergency department simulation runner",
      "Live ER floorplan with occupied bed indicators",
      "Patient wait time and length-of-stay distribution histograms",
      "Staffing scenario configuration sliders"
    ],
    "extensions": [
      "AI predictive model for seasonal flu surge arrivals",
      "Automated ambulance diversion alert system"
    ],
    "mvpScope": "Run a 24-hour ER simulation, change triage nurse count from 2 to 3, and observe average wait time drop 42%.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-11",
    "title": "ErgoVision: Real-Time Webcam Ergonomic Posture Monitor",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Remote desk workers develop chronic neck and spinal strain from unmonitored slouching.",
    "problemStatement": "Remote desk workers develop chronic neck and spinal strain from unmonitored slouching.",
    "solution": "A lightweight web app that uses webcam pose estimation to gently alert workers when they slouch.",
    "proposedSolution": "A lightweight web app that uses webcam pose estimation to gently alert workers when they slouch.",
    "realWorldUseCase": "Software engineer sitting at desk for 8 hours without ergonomic awareness.",
    "targetAudience": "Software engineer sitting at desk for 8 hours without ergonomic awareness.",
    "mainFeatures": [
      "Webcam skeletal shoulder and neck landmark tracking",
      "Ergonomic forward-head posture angle calculation",
      "Non-intrusive subtle audio chime or notification alert",
      "Daily posture health score and slouch duration analytics"
    ],
    "features": [
      "Webcam skeletal shoulder and neck landmark tracking",
      "Ergonomic forward-head posture angle calculation",
      "Non-intrusive subtle audio chime or notification alert",
      "Daily posture health score and slouch duration analytics"
    ],
    "frontend": "React, MediaPipe Pose, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "IndexedDB",
    "otherTech": "MediaPipe Pose, Web Audio API",
    "techStack": [
      "React",
      "MediaPipe",
      "Web Audio API",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Runs 100% locally on device: camera frames are processed in memory and never recorded or transmitted.",
    "roadmap": [
      "MediaPipe webcam pose detection initialization",
      "Cervical spine angle and slouch threshold detector",
      "Gentle audio chime and visual posture indicator widget",
      "Daily posture session summary and stretch break prompt"
    ],
    "extensions": [
      "Integrated 60-second guided desk stretch animations",
      "Smartwatch haptic buzz notification"
    ],
    "mvpScope": "Sit upright to calibrate, slouch forward, and hear a soft gentle chime reminding you to straighten.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-12",
    "title": "ImmuniTrack: Pediatric Immunization & Growth Tracker",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Parents miss critical pediatric vaccine windows and struggle to understand standard WHO growth charts.",
    "problemStatement": "Parents miss critical pediatric vaccine windows and struggle to understand standard WHO growth charts.",
    "solution": "A family health dashboard tracking pediatric vaccine schedules and plotting height/weight on WHO percentile curves.",
    "proposedSolution": "A family health dashboard tracking pediatric vaccine schedules and plotting height/weight on WHO percentile curves.",
    "realWorldUseCase": "New parents tracking 2-month, 4-month, and 6-month infant checkup vaccines.",
    "targetAudience": "New parents tracking 2-month, 4-month, and 6-month infant checkup vaccines.",
    "mainFeatures": [
      "CDC/WHO recommended pediatric vaccination schedule",
      "Automated email/SMS milestone appointment reminders",
      "WHO growth standard percentile curves (Height, Weight, Head Circumference)",
      "Digital vaccine record card with exportable PDF for daycare"
    ],
    "features": [
      "CDC/WHO recommended pediatric vaccination schedule",
      "Automated email/SMS milestone appointment reminders",
      "WHO growth standard percentile curves (Height, Weight, Head Circumference)",
      "Digital vaccine record card with exportable PDF for daycare"
    ],
    "frontend": "Next.js 14, Tailwind, Recharts",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Recharts, Zod",
    "techStack": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Recharts"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Plots infant measurements against official WHO statistical z-score percentile curves in real time.",
    "roadmap": [
      "Child profile setup with date-of-birth timeline",
      "Vaccine checklist with upcoming due dates and descriptions",
      "Interactive WHO growth percentile chart visualizer",
      "Exportable pediatrician visit summary PDF"
    ],
    "extensions": [
      "Multi-child family profile switching",
      "Tooth eruption timeline tracker"
    ],
    "mvpScope": "Enter baby's birthdate, view upcoming 2-month vaccines, and plot weight on WHO percentile curve.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-13",
    "title": "HopeCircle: Anonymous Chronic Illness Peer Support Hub",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Patients with rare chronic illnesses feel deeply isolated with nobody who understands their daily symptoms.",
    "problemStatement": "Patients with rare chronic illnesses feel deeply isolated with nobody who understands their daily symptoms.",
    "solution": "An anonymous peer support forum organized by verified condition tags with moderated micro-communities.",
    "proposedSolution": "An anonymous peer support forum organized by verified condition tags with moderated micro-communities.",
    "realWorldUseCase": "Lupus patient seeking practical tips for managing morning joint stiffness.",
    "targetAudience": "Lupus patient seeking practical tips for managing morning joint stiffness.",
    "mainFeatures": [
      "Anonymous user handles with optional verified condition tags",
      "Condition-specific discussion circles (Lupus, Crohn's, POTS)",
      "Daily positive coping tip sharing and reaction badges",
      "Strict automated moderation filtering medical misinformation"
    ],
    "features": [
      "Anonymous user handles with optional verified condition tags",
      "Condition-specific discussion circles (Lupus, Crohn's, POTS)",
      "Daily positive coping tip sharing and reaction badges",
      "Strict automated moderation filtering medical misinformation"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Socket.io",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Socket.io, DOMPurify",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Socket.io"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Provides a safe, non-toxic environment with dedicated rules preventing unscientific cures and snake oil.",
    "roadmap": [
      "User registration with pseudonym generator",
      "Condition circle discussion board and threads",
      "Real-time support chat room with Socket.io",
      "Report and automated moderation content filter"
    ],
    "extensions": [
      "Weekly virtual video support group scheduler",
      "Condition-specific symptom survival handbook"
    ],
    "mvpScope": "Post an anonymous question in the 'Crohn's Support' circle and receive empathetic tips from peers.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-14",
    "title": "SpeechPlay: Gamified Pediatric Articulation Therapy",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Children with speech articulation delays find repetitive speech therapy drills boring and resist practice.",
    "problemStatement": "Children with speech articulation delays find repetitive speech therapy drills boring and resist practice.",
    "solution": "A voice-interactive web game where kids practice phonetic sounds (e.g. 'R', 'S', 'TH') to move game characters.",
    "proposedSolution": "A voice-interactive web game where kids practice phonetic sounds (e.g. 'R', 'S', 'TH') to move game characters.",
    "realWorldUseCase": "Child practicing the 'S' sound: saying 'Sun' smoothly launches a virtual rocket.",
    "targetAudience": "Child practicing the 'S' sound: saying 'Sun' smoothly launches a virtual rocket.",
    "mainFeatures": [
      "Speech recognition focused on target phoneme pronunciation",
      "Interactive game animations triggered by clear speech",
      "Progress tracker logging target sound practice repetitions",
      "Printable speech therapy home practice certificate"
    ],
    "features": [
      "Speech recognition focused on target phoneme pronunciation",
      "Interactive game animations triggered by clear speech",
      "Progress tracker logging target sound practice repetitions",
      "Printable speech therapy home practice certificate"
    ],
    "frontend": "React, Web Speech API, Canvas API",
    "backend": "Client-Side (Vite)",
    "database": "IndexedDB",
    "otherTech": "Canvas API, Lucide React",
    "techStack": [
      "React",
      "Web Speech API",
      "Canvas API",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Turns dry clinical repetitions into an exciting arcade game with stars, rockets, and sound effects.",
    "roadmap": [
      "Web Speech API phoneme listener with confidence scoring",
      "Canvas 2D animated rocket flight game loop",
      "Sound collection and repetition counter",
      "Parent practice report card dashboard"
    ],
    "extensions": [
      "Custom sound library configured by certified SLP",
      "Multi-player sibling turn-taking mode"
    ],
    "mvpScope": "Pronounce the word 'Star' into the microphone to launch the on-screen rocket into space.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-health-15",
    "title": "FirstAidOffline: Offline Emergency First-Aid Triage Guide",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Hikers and disaster victims lose life-saving minutes searching for first-aid instructions without cellular signal.",
    "problemStatement": "Hikers and disaster victims lose life-saving minutes searching for first-aid instructions without cellular signal.",
    "solution": "An ultra-fast offline Progressive Web App with instant step-by-step guides for choking, burns, CPR, and fractures.",
    "proposedSolution": "An ultra-fast offline Progressive Web App with instant step-by-step guides for choking, burns, CPR, and fractures.",
    "realWorldUseCase": "Bystander assisting someone choking at a campsite without cell reception.",
    "targetAudience": "Bystander assisting someone choking at a campsite without cell reception.",
    "mainFeatures": [
      "100% offline access with instant sub-100ms search",
      "Visual step-by-step emergency CPR with metronome beat (100-120 BPM)",
      "Clear flowcharts for choking, severe bleeding, and snake bites",
      "Emergency GPS coordinate readout to read to 911 dispatchers"
    ],
    "features": [
      "100% offline access with instant sub-100ms search",
      "Visual step-by-step emergency CPR with metronome beat (100-120 BPM)",
      "Clear flowcharts for choking, severe bleeding, and snake bites",
      "Emergency GPS coordinate readout to read to 911 dispatchers"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "PWA Service Worker / Cache API",
    "database": "IndexedDB",
    "otherTech": "Web Audio API (CPR Metronome)",
    "techStack": [
      "React",
      "PWA",
      "IndexedDB",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Features an audible 110 BPM audio metronome guiding the exact chest compression rhythm for adult CPR.",
    "roadmap": [
      "PWA service worker setup and asset caching",
      "Visual step-by-step first-aid flowcharts with diagrams",
      "Web Audio CPR metronome clicker with BPM toggle",
      "One-tap GPS coordinate display via Geolocation API"
    ],
    "extensions": [
      "Dark mode red emergency night vision screen",
      "Voice-guided hands-free instructions"
    ],
    "mvpScope": "Turn phone to airplane mode, search 'Choking', and follow large visual Heimlich maneuver steps.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-16",
    "title": "BloodLink: Urgent Blood & Platelet Donor Network",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Blood banks face life-threatening shortages of rare blood types (O-, AB-) during local trauma emergencies.",
    "problemStatement": "Blood banks face life-threatening shortages of rare blood types (O-, AB-) during local trauma emergencies.",
    "solution": "A community blood donation portal matching urgent hospital requests with nearby registered donors.",
    "proposedSolution": "A community blood donation portal matching urgent hospital requests with nearby registered donors.",
    "realWorldUseCase": "Hospital trauma center needing 4 units of rare O-negative blood within 2 hours.",
    "targetAudience": "Hospital trauma center needing 4 units of rare O-negative blood within 2 hours.",
    "mainFeatures": [
      "Urgent blood request broadcast system by blood group",
      "Nearby donor SMS and push notification alerts",
      "Eligibility countdown timer (56 days since last whole blood donation)",
      "Community donor milestone badges and impact statistics"
    ],
    "features": [
      "Urgent blood request broadcast system by blood group",
      "Nearby donor SMS and push notification alerts",
      "Eligibility countdown timer (56 days since last whole blood donation)",
      "Community donor milestone badges and impact statistics"
    ],
    "frontend": "Next.js 14, Tailwind, Mapbox GL",
    "backend": "Node.js, Express, Twilio API",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Twilio, Mapbox",
    "techStack": [
      "Next.js",
      "Node.js",
      "Supabase",
      "Twilio"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Respects medical donation intervals and automatically disables notifications until the donor is legally eligible again.",
    "roadmap": [
      "Hospital blood shortage request form",
      "Donor profile with blood type and eligibility date",
      "Twilio SMS alert dispatch queue",
      "Mapbox blood bank drive donation center locator"
    ],
    "extensions": [
      "Integration with regional blood center inventory APIs",
      "Corporate blood drive team challenge leaderboard"
    ],
    "mvpScope": "Post an urgent need for B+ blood, and simulate SMS dispatch to all eligible nearby B+ donors.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-health-17",
    "title": "SleepApneaScan: Acoustic Sleep Breathing Disruption Monitor",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Over 80% of individuals with obstructive sleep apnea remain undiagnosed, risking heart failure.",
    "problemStatement": "Over 80% of individuals with obstructive sleep apnea remain undiagnosed, risking heart failure.",
    "solution": "An overnight audio monitor that records sleep sounds and detects snoring gasps and pauses in breathing.",
    "proposedSolution": "An overnight audio monitor that records sleep sounds and detects snoring gasps and pauses in breathing.",
    "realWorldUseCase": "Person wondering why they wake up exhausted despite sleeping 8 hours.",
    "targetAudience": "Person wondering why they wake up exhausted despite sleeping 8 hours.",
    "mainFeatures": [
      "Overnight ambient audio recording with silence compression",
      "Snoring and apnoea cessation sound classifier",
      "Apnea-Hypopnea Index (AHI) estimated severity score",
      "Audio playback scrubber for flagged breathing pause events"
    ],
    "features": [
      "Overnight ambient audio recording with silence compression",
      "Snoring and apnoea cessation sound classifier",
      "Apnea-Hypopnea Index (AHI) estimated severity score",
      "Audio playback scrubber for flagged breathing pause events"
    ],
    "frontend": "React, Web Audio API, Recharts",
    "backend": "FastAPI, Librosa, PyTorch",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Web Audio API, Chart.js",
    "techStack": [
      "React",
      "FastAPI",
      "Web Audio API",
      "Chart.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Stores all audio recordings privately on device without uploading bedroom audio to cloud servers.",
    "roadmap": [
      "Continuous Web Audio recording worklet with energy thresholding",
      "Snoring and cessation acoustic signature detector",
      "Sleep breathing timeline with flagged event markers",
      "Exportable sleep disruption report for pulmonologists"
    ],
    "extensions": [
      "Integration with smartwatch heart rate dips",
      "White noise sleep sound player with auto-shutoff"
    ],
    "mvpScope": "Upload a 10-minute nighttime audio recording and view flagged timestamps of breathing pauses.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-18",
    "title": "PrescriptoGuard: Prescription OCR & Drug Interaction Radar",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Patients taking multiple medications face dangerous adverse drug interactions that go unnoticed.",
    "problemStatement": "Patients taking multiple medications face dangerous adverse drug interactions that go unnoticed.",
    "solution": "A camera scanner reading prescription labels and checking active compounds against drug interaction APIs.",
    "proposedSolution": "A camera scanner reading prescription labels and checking active compounds against drug interaction APIs.",
    "realWorldUseCase": "Senior patient prescribed a new antibiotic while already taking a daily blood thinner.",
    "targetAudience": "Senior patient prescribed a new antibiotic while already taking a daily blood thinner.",
    "mainFeatures": [
      "Prescription label camera OCR extraction",
      "Active pharmaceutical ingredient (API) identification",
      "NIH National Library of Medicine Drug Interaction API query",
      "Color-coded interaction risk severity warnings (Mild, Moderate, Severe)"
    ],
    "features": [
      "Prescription label camera OCR extraction",
      "Active pharmaceutical ingredient (API) identification",
      "NIH National Library of Medicine Drug Interaction API query",
      "Color-coded interaction risk severity warnings (Mild, Moderate, Severe)"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "FastAPI, Tesseract OCR",
    "database": "Supabase, NIH NLM API",
    "otherTech": "NIH Drug Interaction API",
    "techStack": [
      "React",
      "FastAPI",
      "Supabase",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Explains the exact biological mechanism of the interaction: 'Antibiotic increases blood thinner potency, raising bleeding risk'.",
    "roadmap": [
      "Prescription bottle label camera photo uploader",
      "Tesseract text extraction and drug name parsing",
      "NIH interaction API querying module",
      "Risk severity warning alert card with pharmacist questions"
    ],
    "extensions": [
      "Customizable daily pill reminder notification",
      "Printable medication passport for ER doctors"
    ],
    "mvpScope": "Scan two prescription bottle labels and receive an immediate alert highlighting a dangerous interaction.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-19",
    "title": "FallBeacon: Accelerometer Fall Detection & Emergency SOS",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Elderly people living alone risk lying helpless on the floor for hours after an accidental fall.",
    "problemStatement": "Elderly people living alone risk lying helpless on the floor for hours after an accidental fall.",
    "solution": "A web application utilizing smartphone accelerometer and gyroscope sensors to detect rapid impact falls.",
    "proposedSolution": "A web application utilizing smartphone accelerometer and gyroscope sensors to detect rapid impact falls.",
    "realWorldUseCase": "Elderly individual carrying phone in pocket who trips and falls in the hallway.",
    "targetAudience": "Elderly individual carrying phone in pocket who trips and falls in the hallway.",
    "mainFeatures": [
      "DeviceMotionEvent accelerometer G-force spike detection",
      "Post-impact stillness verification window (30 seconds)",
      "Audible countdown alarm with cancel button to prevent false alarms",
      "Automated SMS beacon with GPS coordinates to family contacts"
    ],
    "features": [
      "DeviceMotionEvent accelerometer G-force spike detection",
      "Post-impact stillness verification window (30 seconds)",
      "Audible countdown alarm with cancel button to prevent false alarms",
      "Automated SMS beacon with GPS coordinates to family contacts"
    ],
    "frontend": "React, Tailwind, Howler.js",
    "backend": "Client-Side (Mobile Web)",
    "database": "LocalStorage",
    "otherTech": "DeviceMotionEvent, Geolocation API",
    "techStack": [
      "React",
      "Web Sensors",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Runs in mobile browser using native Web Device Motion APIs without requiring expensive smartwatches.",
    "roadmap": [
      "DeviceMotion accelerometer listener with high-G spike threshold",
      "30-second emergency countdown timer with loud alarm",
      "Geolocation GPS coordinate capture",
      "Emergency contact SMS webhook dispatcher"
    ],
    "extensions": [
      "Voice confirmation ('Are you okay?') speech recognition",
      "Automatic flashlight beacon strobe activation"
    ],
    "mvpScope": "Simulate a phone drop onto a couch: observe G-force trigger, countdown timer, and emergency beacon ready.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-health-20",
    "title": "RehabPose: Physical Therapy Range-of-Motion Tracker",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Patients recovering from joint injuries do physical therapy exercises with poor form, causing reinjury.",
    "problemStatement": "Patients recovering from joint injuries do physical therapy exercises with poor form, causing reinjury.",
    "solution": "A computer vision physical therapy coach measuring joint angles and counting repetitions from webcam.",
    "proposedSolution": "A computer vision physical therapy coach measuring joint angles and counting repetitions from webcam.",
    "realWorldUseCase": "Post-ACL surgery patient doing knee flexion and extension repetitions at home.",
    "targetAudience": "Post-ACL surgery patient doing knee flexion and extension repetitions at home.",
    "mainFeatures": [
      "Real-time 33-point skeletal pose landmark tracking",
      "Joint angle calculation (Knee, Shoulder, Elbow)",
      "Repetition counter registering only reps with full range of motion",
      "Real-time voice correction guidance ('Bend knee 5 degrees further')"
    ],
    "features": [
      "Real-time 33-point skeletal pose landmark tracking",
      "Joint angle calculation (Knee, Shoulder, Elbow)",
      "Repetition counter registering only reps with full range of motion",
      "Real-time voice correction guidance ('Bend knee 5 degrees further')"
    ],
    "frontend": "React, MediaPipe Pose, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "IndexedDB",
    "otherTech": "MediaPipe Pose, Web Speech API",
    "techStack": [
      "React",
      "MediaPipe",
      "Web Speech API",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Logs angle progression over 6 weeks so physical therapists can review objective home recovery data.",
    "roadmap": [
      "MediaPipe Pose landmark tracking setup",
      "Joint angle mathematical calculation logic",
      "Repetition state machine with full ROM threshold",
      "Weekly range-of-motion progress chart"
    ],
    "extensions": [
      "Custom exercise template builder for therapists",
      "Exportable compliance report for insurance"
    ],
    "mvpScope": "Stand in front of webcam, perform 5 squats, and watch the app count only repetitions reaching a 90-degree bend.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-health-21",
    "title": "DentalLens: Dental Plaque & Brushing Technique Coach",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Children and adults brush their teeth too fast and miss hard-to-reach molar surfaces, causing cavities.",
    "problemStatement": "Children and adults brush their teeth too fast and miss hard-to-reach molar surfaces, causing cavities.",
    "solution": "An interactive 2-minute brushing timer using webcam face tracking to guide cleaning all four dental quadrants.",
    "proposedSolution": "An interactive 2-minute brushing timer using webcam face tracking to guide cleaning all four dental quadrants.",
    "realWorldUseCase": "Child brushing teeth before bed guided by an entertaining animated dental mascot.",
    "targetAudience": "Child brushing teeth before bed guided by an entertaining animated dental mascot.",
    "mainFeatures": [
      "Face landmark tracking ensuring brush is in mouth",
      "2-minute quadrant timer (30 seconds per quadrant)",
      "Visual 3D tooth model showing active target cleaning zone",
      "Gamified brushing streak and sparkling smile badges"
    ],
    "features": [
      "Face landmark tracking ensuring brush is in mouth",
      "2-minute quadrant timer (30 seconds per quadrant)",
      "Visual 3D tooth model showing active target cleaning zone",
      "Gamified brushing streak and sparkling smile badges"
    ],
    "frontend": "React, Three.js / Canvas, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Three.js, Face-api.js",
    "techStack": [
      "React",
      "Three.js",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Ensures users spend the dentist-recommended full 30 seconds on each quadrant with fun animations.",
    "roadmap": [
      "Webcam face landmark tracking loop",
      "2-minute circular timer with quadrant progress indicators",
      "3D animated tooth model highlighting active quadrant",
      "Brushing calendar streak tracker"
    ],
    "extensions": [
      "Morning vs night brushing reminder push notifications",
      "Dentist appointment countdown tracker"
    ],
    "mvpScope": "Start 2-minute brushing timer, follow the 3D tooth quadrant guide, and unlock a daily dental hygiene badge.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-22",
    "title": "BayesTriage: Probabilistic Clinical Symptom Evaluator",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Patients using Google for medical symptoms panic over unlikely worst-case diagnoses like rare tumors.",
    "problemStatement": "Patients using Google for medical symptoms panic over unlikely worst-case diagnoses like rare tumors.",
    "solution": "A probabilistic Bayesian symptom evaluator that calculates disease likelihood based on age and prevalence.",
    "proposedSolution": "A probabilistic Bayesian symptom evaluator that calculates disease likelihood based on age and prevalence.",
    "realWorldUseCase": "Person with a mild sore throat, low-grade fever, and runny nose.",
    "targetAudience": "Person with a mild sore throat, low-grade fever, and runny nose.",
    "mainFeatures": [
      "Symptom intake questionnaire with severity and duration",
      "Bayesian probabilistic belief network evaluating common vs rare conditions",
      "Clear triage recommendation (Home Care, Telehealth, Urgent Care, ER)",
      "Questions to ask your doctor at the visit"
    ],
    "features": [
      "Symptom intake questionnaire with severity and duration",
      "Bayesian probabilistic belief network evaluating common vs rare conditions",
      "Clear triage recommendation (Home Care, Telehealth, Urgent Care, ER)",
      "Questions to ask your doctor at the visit"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Python FastAPI / Node.js",
    "database": "SQLite",
    "otherTech": "Bayesian Network Logic, Zod",
    "techStack": [
      "React",
      "FastAPI",
      "SQLite",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Prioritizes common benign conditions statistically while strictly flagging true clinical red flags.",
    "roadmap": [
      "Interactive symptom selector with body map",
      "Bayesian probability calculator backend",
      "Triage outcome card with level-of-care recommendation",
      "Red-flag warning indicators with emergency hotline buttons"
    ],
    "extensions": [
      "Pediatric vs adult symptom pathway switch",
      "Printable symptom summary for doctor visits"
    ],
    "mvpScope": "Select 'Sore throat + fever', view 85% probability for common viral pharyngitis with home care guidance.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-23",
    "title": "WebDICOM: In-Browser WebGL Medical Imaging Radiography Viewer",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Medical students and patients cannot easily open 500MB CD-ROM DICOM medical scans on modern laptops.",
    "problemStatement": "Medical students and patients cannot easily open 500MB CD-ROM DICOM medical scans on modern laptops.",
    "solution": "A zero-install browser DICOM radiography viewer with window leveling, zoom, and distance measurements.",
    "proposedSolution": "A zero-install browser DICOM radiography viewer with window leveling, zoom, and distance measurements.",
    "realWorldUseCase": "Medical student reviewing an MRI scan of a lumbar spine.",
    "targetAudience": "Medical student reviewing an MRI scan of a lumbar spine.",
    "mainFeatures": [
      "DICOM file parsing (.dcm) completely in browser",
      "Window leveling presets (Bone, Lung, Soft Tissue, Brain)",
      "Pan, zoom, measurement caliper, and angle calculation tools",
      "Multi-frame CT/MRI slice scroll wheel navigation"
    ],
    "features": [
      "DICOM file parsing (.dcm) completely in browser",
      "Window leveling presets (Bone, Lung, Soft Tissue, Brain)",
      "Pan, zoom, measurement caliper, and angle calculation tools",
      "Multi-frame CT/MRI slice scroll wheel navigation"
    ],
    "frontend": "React, Cornerstone.js / WebGL, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "IndexedDB",
    "otherTech": "Cornerstone.js, DICOM Parser",
    "techStack": [
      "React",
      "Cornerstone.js",
      "WebGL",
      "Tailwind"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Renders high-resolution 16-bit grayscale medical imaging scans at 60 FPS using WebGL shaders.",
    "roadmap": [
      "Cornerstone.js canvas and WebGL image loader integration",
      "DICOM metadata header inspector (Patient ID, slice thickness)",
      "Window width and window center contrast adjustment tool",
      "Interactive measurement caliper tool"
    ],
    "extensions": [
      "3D volume reconstruction with Three.js",
      "Anonymous image sharing with metadata stripping"
    ],
    "mvpScope": "Drag and drop a medical DICOM file, adjust window contrast with mouse drag, and measure bone width in mm.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-24",
    "title": "CareCoord: Alzheimer's Family Caregiver Coordination Hub",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Family members caring for elderly relatives with dementia suffer burnout from fragmented communication.",
    "problemStatement": "Family members caring for elderly relatives with dementia suffer burnout from fragmented communication.",
    "solution": "A private coordination hub for family caregivers to log medication, mood swings, meals, and shift handoffs.",
    "proposedSolution": "A private coordination hub for family caregivers to log medication, mood swings, meals, and shift handoffs.",
    "realWorldUseCase": "Three siblings sharing round-the-clock care for their mother with dementia.",
    "targetAudience": "Three siblings sharing round-the-clock care for their mother with dementia.",
    "mainFeatures": [
      "Shared daily care timeline (Meds given, meals eaten, mood)",
      "Shift handoff notes and urgent alert board",
      "Caregiver task assignment checklist (Groceries, doctor rides)",
      "Dementia behavioral symptom tracker and soothing music library"
    ],
    "features": [
      "Shared daily care timeline (Meds given, meals eaten, mood)",
      "Shift handoff notes and urgent alert board",
      "Caregiver task assignment checklist (Groceries, doctor rides)",
      "Dementia behavioral symptom tracker and soothing music library"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Includes a 'Soothe Mode' with family photo slideshows and calming 1950s music for sundowning episodes.",
    "roadmap": [
      "Daily care event logging form with time stamps",
      "Family task delegation checklist with volunteer claims",
      "Mood and agitation behavioral trend chart",
      "Soothe mode photo album and music player"
    ],
    "extensions": [
      "Emergency wandering alert button with geofencing",
      "Doctor appointment question collaborative list"
    ],
    "mvpScope": "Log morning medication given at 9:00 AM; two siblings immediately receive sync update on their dashboard.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-health-25",
    "title": "HydroCoach: Smart Hydration & Electrolyte Intake Coach",
    "domain": "Healthcare Technology",
    "category": "Healthcare Technology",
    "problem": "Kidney stone patients and athletes fail to maintain adequate daily hydration during busy workdays.",
    "problemStatement": "Kidney stone patients and athletes fail to maintain adequate daily hydration during busy workdays.",
    "solution": "An intelligent water tracking companion that calculates custom fluid needs based on temperature and exercise.",
    "proposedSolution": "An intelligent water tracking companion that calculates custom fluid needs based on temperature and exercise.",
    "realWorldUseCase": "Person recovering from kidney stones requiring strict 3-liter daily water intake.",
    "targetAudience": "Person recovering from kidney stones requiring strict 3-liter daily water intake.",
    "mainFeatures": [
      "Dynamic fluid target calculator based on weight, weather, and activity",
      "1-tap quick log buttons (8oz glass, 16oz bottle, coffee)",
      "Electrolyte and caffeine balance monitor",
      "Hourly ambient reminder chimes during active waking hours"
    ],
    "features": [
      "Dynamic fluid target calculator based on weight, weather, and activity",
      "1-tap quick log buttons (8oz glass, 16oz bottle, coffee)",
      "Electrolyte and caffeine balance monitor",
      "Hourly ambient reminder chimes during active waking hours"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Canvas API, Lucide React",
    "techStack": [
      "React",
      "Framer Motion",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Features a visual 3D water bottle wave animation that fills up as you log glasses of water.",
    "roadmap": [
      "Wave animation water container SVG renderer",
      "Quick log beverage buttons with hydration coefficient calculation",
      "Daily hydration progress circle and streak tracker",
      "Weather API temperature integration for dynamic goal adjustment"
    ],
    "extensions": [
      "Smart water bottle Bluetooth telemetry sync",
      "Printable monthly urology hydration chart"
    ],
    "mvpScope": "Log two 12oz glasses of water and watch the interactive animated wave bottle fill to 40% of target.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-01",
    "title": "GitSentinel: Automated Git Secret & Vulnerability Scanner",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Developers accidentally commit AWS keys, Stripe tokens, and database passwords to public repositories.",
    "problemStatement": "Developers accidentally commit AWS keys, Stripe tokens, and database passwords to public repositories.",
    "solution": "A real-time scanner parsing Git commit diffs for high-entropy secrets and exposed credentials.",
    "proposedSolution": "A real-time scanner parsing Git commit diffs for high-entropy secrets and exposed credentials.",
    "realWorldUseCase": "Software development team preventing security leaks in continuous integration.",
    "targetAudience": "Software development team preventing security leaks in continuous integration.",
    "mainFeatures": [
      "High-entropy regex and Shannon entropy secret detector",
      "Support for 60+ token patterns (AWS, GitHub, Slack, Stripe)",
      "Pre-commit hook and GitHub Action integration",
      "Automated secret revocation advice & dummy key generator"
    ],
    "features": [
      "High-entropy regex and Shannon entropy secret detector",
      "Support for 60+ token patterns (AWS, GitHub, Slack, Stripe)",
      "Pre-commit hook and GitHub Action integration",
      "Automated secret revocation advice & dummy key generator"
    ],
    "frontend": "React 19, Tailwind, Lucide React",
    "backend": "Go / Python FastAPI",
    "database": "SQLite / PostgreSQL",
    "otherTech": "Tree-sitter, Git API",
    "techStack": [
      "React",
      "FastAPI",
      "Go",
      "Git"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Includes Shannon entropy analysis to detect custom cryptographic keys that lack standard prefixes.",
    "roadmap": [
      "Git commit diff parser and hook script generator",
      "Secret pattern detection engine with entropy calculation",
      "Web dashboard showing flagged commits and severity",
      "False-positive suppression and allowlist manager"
    ],
    "extensions": [
      "Automatic cloud credential revocation webhook",
      "Public GitHub repo scanner bot"
    ],
    "mvpScope": "Paste a code commit diff containing an AWS secret key and view instant red alert with remediation steps.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-sec-02",
    "title": "PhishBuster: Email Header & Phishing Link Analyzer Sandbox",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Employees get tricked by convincing spear-phishing emails masquerading as company IT or banks.",
    "problemStatement": "Employees get tricked by convincing spear-phishing emails masquerading as company IT or banks.",
    "solution": "A safe email inspection sandbox checking DKIM/SPF/DMARC headers and rendering suspicious links in a sandbox.",
    "proposedSolution": "A safe email inspection sandbox checking DKIM/SPF/DMARC headers and rendering suspicious links in a sandbox.",
    "realWorldUseCase": "IT security analyst analyzing a suspicious invoice email reported by HR.",
    "targetAudience": "IT security analyst analyzing a suspicious invoice email reported by HR.",
    "mainFeatures": [
      "Raw email EML/MSG file upload and header parser",
      "SPF, DKIM, and DMARC cryptographic signature validator",
      "URL reputation query against Google Safe Browsing and VirusTotal",
      "Isolated sandboxed screenshot preview of target links"
    ],
    "features": [
      "Raw email EML/MSG file upload and header parser",
      "SPF, DKIM, and DMARC cryptographic signature validator",
      "URL reputation query against Google Safe Browsing and VirusTotal",
      "Isolated sandboxed screenshot preview of target links"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "FastAPI, Python Email Lib",
    "database": "PostgreSQL / Supabase",
    "otherTech": "VirusTotal API, Playwright",
    "techStack": [
      "Next.js",
      "FastAPI",
      "Playwright",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Captures an isolated, headless browser screenshot of the suspicious landing page so users can inspect it safely.",
    "roadmap": [
      "EML file parser and authentication header extractor",
      "DNS lookup tool for SPF and DMARC TXT records",
      "Headless browser sandbox link screenshot capture",
      "Phishing risk score (0-100) breakdown card"
    ],
    "extensions": [
      "Automated training simulation campaign creator",
      "Employee reporting Outlook/Gmail add-in"
    ],
    "mvpScope": "Upload an .eml phishing email, view failed SPF/DKIM flags, and see a safe visual screenshot of the fake login page.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-sec-03",
    "title": "HostGuard: Lightweight Host-Based Intrusion Detection System",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Small Linux servers get breached via brute-force SSH attacks and unauthorized file modifications.",
    "problemStatement": "Small Linux servers get breached via brute-force SSH attacks and unauthorized file modifications.",
    "solution": "A lightweight HIDS monitoring auth logs, listening ports, and system binary checksums with alerts.",
    "proposedSolution": "A lightweight HIDS monitoring auth logs, listening ports, and system binary checksums with alerts.",
    "realWorldUseCase": "Developer securing a $5/month cloud VPS hosting side projects.",
    "targetAudience": "Developer securing a $5/month cloud VPS hosting side projects.",
    "mainFeatures": [
      "Auth.log parser detecting SSH brute force attempts",
      "Real-time listening port and active network connection monitor",
      "File Integrity Monitoring (FIM) tracking changes to /etc and /bin",
      "Telegram and Discord alert webhooks for security incidents"
    ],
    "features": [
      "Auth.log parser detecting SSH brute force attempts",
      "Real-time listening port and active network connection monitor",
      "File Integrity Monitoring (FIM) tracking changes to /etc and /bin",
      "Telegram and Discord alert webhooks for security incidents"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python (Daemon Agent) + FastAPI",
    "database": "SQLite",
    "otherTech": "psutil, pyinotify, Telegram API",
    "techStack": [
      "React",
      "Python",
      "FastAPI",
      "SQLite"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Low CPU footprint (<1% RAM) making it ideal for budget cloud VPS instances.",
    "roadmap": [
      "System metrics and log file watcher daemon",
      "File integrity SHA-256 hash snapshot comparator",
      "FastAPI metrics endpoint and WebSocket event stream",
      "Web dashboard with live connection map and IP ban button"
    ],
    "extensions": [
      "Automated fail2ban iptables IP blocking rules",
      "Docker container breakout attempt detector"
    ],
    "mvpScope": "Run agent on VPS or local machine, simulate an unauthorized file edit, and receive instant Telegram alert.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-04",
    "title": "PassKeyVault: FIDO2 WebAuthn & Biometric Authenticator",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Traditional password authentication is vulnerable to credential stuffing, phishing, and database breaches.",
    "problemStatement": "Traditional password authentication is vulnerable to credential stuffing, phishing, and database breaches.",
    "solution": "A modern authentication demonstration portal showcasing biometric WebAuthn passkeys without passwords.",
    "proposedSolution": "A modern authentication demonstration portal showcasing biometric WebAuthn passkeys without passwords.",
    "realWorldUseCase": "Web developer learning how to implement passwordless login in modern web applications.",
    "targetAudience": "Web developer learning how to implement passwordless login in modern web applications.",
    "mainFeatures": [
      "W3C WebAuthn / FIDO2 public-key registration and login",
      "Biometric TouchID, FaceID, and Windows Hello hardware support",
      "Passkey device management and synchronization guide",
      "Interactive cryptographic handshake educational inspector"
    ],
    "features": [
      "W3C WebAuthn / FIDO2 public-key registration and login",
      "Biometric TouchID, FaceID, and Windows Hello hardware support",
      "Passkey device management and synchronization guide",
      "Interactive cryptographic handshake educational inspector"
    ],
    "frontend": "React 19, Tailwind, Lucide React",
    "backend": "Node.js, Express, @simplewebauthn",
    "database": "PostgreSQL, Prisma",
    "otherTech": "@simplewebauthn, WebAuthn API",
    "techStack": [
      "React",
      "WebAuthn",
      "Node.js",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Visualizes the complete cryptographic challenge-response signature exchange between browser and server.",
    "roadmap": [
      "WebAuthn registration and authentication endpoints",
      "Hardware authenticator prompt integration",
      "Cryptographic challenge inspection drawer",
      "User passkey credential revocation manager"
    ],
    "extensions": [
      "Multi-device passkey backup recovery workflows",
      "OAuth2 provider bridge integration"
    ],
    "mvpScope": "Register your device's fingerprint or FaceID in 1 click, log out, and sign in without typing a password.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-05",
    "title": "HoneyPotty: SSH Honeypot with Attacker Telemetry",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Security researchers need visibility into automated botnet scan attacks and dictionary passwords.",
    "problemStatement": "Security researchers need visibility into automated botnet scan attacks and dictionary passwords.",
    "solution": "A low-interaction SSH honeypot logging attacker IP addresses, attempted passwords, and commands in real time.",
    "proposedSolution": "A low-interaction SSH honeypot logging attacker IP addresses, attempted passwords, and commands in real time.",
    "realWorldUseCase": "Cybersecurity student analyzing geographic sources of automated botnet attacks.",
    "targetAudience": "Cybersecurity student analyzing geographic sources of automated botnet attacks.",
    "mainFeatures": [
      "Emulated SSH shell logging attacker keystrokes",
      "Global attacker IP geolocation world map",
      "Top 50 attempted usernames and passwords wordcloud",
      "Downloadable pcap packet captures and session replay"
    ],
    "features": [
      "Emulated SSH shell logging attacker keystrokes",
      "Global attacker IP geolocation world map",
      "Top 50 attempted usernames and passwords wordcloud",
      "Downloadable pcap packet captures and session replay"
    ],
    "frontend": "React, Mapbox GL, Tailwind, D3.js",
    "backend": "Python Twisted / Paramiko",
    "database": "PostgreSQL / Redis",
    "otherTech": "Paramiko, MaxMind GeoIP",
    "techStack": [
      "React",
      "Python",
      "Mapbox",
      "PostgreSQL"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Allows administrators to watch real-time attacker terminal sessions replayed keystroke by keystroke.",
    "roadmap": [
      "Paramiko SSH server emulator with fake shell",
      "Attacker session logging and MaxMind GeoIP lookup",
      "WebSocket real-time attacker map dashboard",
      "Keystroke playback terminal emulator"
    ],
    "extensions": [
      "Automated threat intelligence feed export",
      "Fake filesystem download bait with canary files"
    ],
    "mvpScope": "Deploy honeypot on public port, watch botnet login attempts light up the world map in real time.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-sec-06",
    "title": "CloudPosture: Multi-Cloud Security Misconfiguration Auditor",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Startups leave AWS S3 buckets public and security groups wide open, exposing customer data.",
    "problemStatement": "Startups leave AWS S3 buckets public and security groups wide open, exposing customer data.",
    "solution": "A cloud security posture manager auditing AWS/GCP resources against CIS benchmarks.",
    "proposedSolution": "A cloud security posture manager auditing AWS/GCP resources against CIS benchmarks.",
    "realWorldUseCase": "DevOps engineer auditing an AWS infrastructure account before a compliance audit.",
    "targetAudience": "DevOps engineer auditing an AWS infrastructure account before a compliance audit.",
    "mainFeatures": [
      "Automated S3 bucket public access scanner",
      "Security group 0.0.0.0/0 open port checker (SSH, RDP, MySQL)",
      "IAM role excessive privilege & root account MFA audit",
      "One-click JSON compliance remediation script generator"
    ],
    "features": [
      "Automated S3 bucket public access scanner",
      "Security group 0.0.0.0/0 open port checker (SSH, RDP, MySQL)",
      "IAM role excessive privilege & root account MFA audit",
      "One-click JSON compliance remediation script generator"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Python FastAPI, Boto3 (AWS SDK)",
    "database": "PostgreSQL / Supabase",
    "otherTech": "Boto3, CIS Benchmarks",
    "techStack": [
      "React",
      "FastAPI",
      "AWS SDK",
      "Boto3"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4 weeks",
    "uniqueness": "Generates copy-paste AWS CLI commands to remediate every flagged misconfiguration immediately.",
    "roadmap": [
      "AWS IAM read-only credential verification",
      "Boto3 infrastructure audit scanning modules",
      "Compliance score percentage card and severity breakdown",
      "1-click AWS CLI fix script generator"
    ],
    "extensions": [
      "Google Cloud Platform (GCP) audit module",
      "Automated weekly PDF compliance audit report"
    ],
    "mvpScope": "Connect read-only AWS test credentials and view immediate color-coded dashboard of open ports and unencrypted buckets.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-07",
    "title": "CTFPlatform: Interactive Web Security Capture-The-Flag",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Students learning ethical hacking lack legal, sandboxed environments to practice attacking vulnerabilities.",
    "problemStatement": "Students learning ethical hacking lack legal, sandboxed environments to practice attacking vulnerabilities.",
    "solution": "A gamified CTF web application with 15 deliberate vulnerabilities (SQLi, XSS, CSRF, JWT tampering).",
    "proposedSolution": "A gamified CTF web application with 15 deliberate vulnerabilities (SQLi, XSS, CSRF, JWT tampering).",
    "realWorldUseCase": "College cybersecurity club hosting a 24-hour ethical hacking tournament.",
    "targetAudience": "College cybersecurity club hosting a 24-hour ethical hacking tournament.",
    "mainFeatures": [
      "15 categorized hands-on vulnerability challenge rooms",
      "In-browser live vulnerable target web applications",
      "Flag submission and automated scoreboard engine",
      "Guided hint ladder and educational vulnerability post-mortems"
    ],
    "features": [
      "15 categorized hands-on vulnerability challenge rooms",
      "In-browser live vulnerable target web applications",
      "Flag submission and automated scoreboard engine",
      "Guided hint ladder and educational vulnerability post-mortems"
    ],
    "frontend": "Next.js 14, Tailwind, Monaco Editor",
    "backend": "Node.js, Express, Docker",
    "database": "PostgreSQL, Redis",
    "otherTech": "Docker, Prisma",
    "techStack": [
      "Next.js",
      "Docker",
      "Node.js",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Runs each vulnerable challenge inside an ephemeral isolated Docker container reset every 15 minutes.",
    "roadmap": [
      "Dynamic Docker container spawner per user session",
      "Flag verification and points leaderboard system",
      "Vulnerability walkthrough write-ups with secure code fixes",
      "Tournament countdown timer and team management"
    ],
    "extensions": [
      "Custom challenge authoring studio for teachers",
      "Real-time scoreboard animations with sound effects"
    ],
    "mvpScope": "Exploit an intentional SQL injection in Challenge 1, extract the hidden flag string, and earn 100 points on the board.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-sec-08",
    "title": "PacketSniff: Browser-Based Network Packet Analyzer",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Networking students find Wireshark overwhelming due to dense menus and thousands of obscure fields.",
    "problemStatement": "Networking students find Wireshark overwhelming due to dense menus and thousands of obscure fields.",
    "solution": "An intuitive visual PCAP packet analyzer in the browser that dissects TCP handshakes and HTTP payloads.",
    "proposedSolution": "An intuitive visual PCAP packet analyzer in the browser that dissects TCP handshakes and HTTP payloads.",
    "realWorldUseCase": "Computer science student studying the 3-way TCP SYN-SYN/ACK-ACK handshake.",
    "targetAudience": "Computer science student studying the 3-way TCP SYN-SYN/ACK-ACK handshake.",
    "mainFeatures": [
      "PCAP and PCAPNG file drag-and-drop parser",
      "Visual packet protocol ladder diagram (Ethernet, IP, TCP/UDP, HTTP)",
      "TCP conversation stream reconstructor",
      "Search and filter packets by IP, port, or protocol"
    ],
    "features": [
      "PCAP and PCAPNG file drag-and-drop parser",
      "Visual packet protocol ladder diagram (Ethernet, IP, TCP/UDP, HTTP)",
      "TCP conversation stream reconstructor",
      "Search and filter packets by IP, port, or protocol"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Client-Side (WebAssembly)",
    "database": "IndexedDB",
    "otherTech": "pcap-parser, WASM",
    "techStack": [
      "React",
      "WASM",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Runs 100% inside client browser using WebAssembly without needing desktop Wireshark installed.",
    "roadmap": [
      "PCAP binary file parser in WebAssembly / JS",
      "Visual network packet list with color-coded protocols",
      "Interactive TCP 3-way handshake sequence diagram",
      "Hex viewer with synchronized ASCII payload inspector"
    ],
    "extensions": [
      "Export filtered packets to new PCAP file",
      "DNS query-response tree visualizer"
    ],
    "mvpScope": "Drag and drop a 1MB network capture file and see a visual timeline of all HTTP requests and IP handshakes.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-09",
    "title": "EntropyGuard: Passphrase Strength & Breach Auditor",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Users still choose weak passwords like 'Summer2024!' that easily bypass simple character-type requirements.",
    "problemStatement": "Users still choose weak passwords like 'Summer2024!' that easily bypass simple character-type requirements.",
    "solution": "An educational password entropy calculator that visualizes crack times and checks the HaveIBeenPwned database.",
    "proposedSolution": "An educational password entropy calculator that visualizes crack times and checks the HaveIBeenPwned database.",
    "realWorldUseCase": "User evaluating the true cryptographic security of a new master password.",
    "targetAudience": "User evaluating the true cryptographic security of a new master password.",
    "mainFeatures": [
      "Mathematical entropy calculation in bits (log2(N^L))",
      "Offline crack-time simulator across GPU cluster speeds",
      "K-anonymity HaveIBeenPwned API breach lookup (zero password leakage)",
      "Diceware passphrase generator with memorable word combinations"
    ],
    "features": [
      "Mathematical entropy calculation in bits (log2(N^L))",
      "Offline crack-time simulator across GPU cluster speeds",
      "K-anonymity HaveIBeenPwned API breach lookup (zero password leakage)",
      "Diceware passphrase generator with memorable word combinations"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Client-Side (Vite)",
    "database": "None",
    "otherTech": "Web Crypto API, HIBP API",
    "techStack": [
      "React",
      "Web Crypto API",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Uses strict k-anonymity SHA-1 prefix hashing: your password is never sent to HaveIBeenPwned or any server.",
    "roadmap": [
      "Password entropy mathematical calculator",
      "HIBP k-anonymity 5-character SHA-1 prefix query module",
      "Visual brute-force crack time comparison visualizer",
      "Cryptographic Diceware passphrase generator"
    ],
    "extensions": [
      "Password pattern analyzer (detecting common dates and substitutions)",
      "Printable emergency master password recovery sheet"
    ],
    "mvpScope": "Type a passphrase and watch the real-time entropy bits update with mathematical crack-time calculations.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-10",
    "title": "SBOMGuard: Software Bill of Materials & CVE Matcher",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Development teams have no idea what transitive open-source dependencies are running in production.",
    "problemStatement": "Development teams have no idea what transitive open-source dependencies are running in production.",
    "solution": "An SBOM analyzer that scans package.json and requirements.txt to map every library against the NIST NVD database.",
    "proposedSolution": "An SBOM analyzer that scans package.json and requirements.txt to map every library against the NIST NVD database.",
    "realWorldUseCase": "Release engineer verifying zero critical CVEs before a major production deployment.",
    "targetAudience": "Release engineer verifying zero critical CVEs before a major production deployment.",
    "mainFeatures": [
      "package-lock.json and requirements.txt dependency parser",
      "CycloneDX and SPDX standard SBOM JSON/XML export",
      "National Vulnerability Database (NVD) CVE severity matching",
      "Dependency vulnerability graph with direct upgrade paths"
    ],
    "features": [
      "package-lock.json and requirements.txt dependency parser",
      "CycloneDX and SPDX standard SBOM JSON/XML export",
      "National Vulnerability Database (NVD) CVE severity matching",
      "Dependency vulnerability graph with direct upgrade paths"
    ],
    "frontend": "React, Tailwind, Cytoscape.js",
    "backend": "Python FastAPI / Node.js",
    "database": "PostgreSQL, SQLite",
    "otherTech": "NVD API, OSV.dev API",
    "techStack": [
      "React",
      "FastAPI",
      "Cytoscape.js",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Visualizes deep transitive dependency trees so users can see which sub-package introduced a vulnerability.",
    "roadmap": [
      "Dependency file parser supporting npm, pip, and Cargo",
      "OSV.dev vulnerability database batch query client",
      "Interactive Cytoscape dependency tree visualizer",
      "Exportable CycloneDX standard SBOM document"
    ],
    "extensions": [
      "Automated GitHub PR creation for security patch upgrades",
      "License compliance checker (MIT vs GPL conflicts)"
    ],
    "mvpScope": "Upload a package.json file, view complete dependency tree, and see 2 flagged CVEs with safe patch versions.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-11",
    "title": "LinterSec: Static AST Security Linter for JavaScript",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Developers rely on heavy cloud linters when a lightweight AST security checker could catch bugs locally.",
    "problemStatement": "Developers rely on heavy cloud linters when a lightweight AST security checker could catch bugs locally.",
    "solution": "An educational static application security testing (SAST) linter parsing JavaScript ASTs for vulnerabilities.",
    "proposedSolution": "An educational static application security testing (SAST) linter parsing JavaScript ASTs for vulnerabilities.",
    "realWorldUseCase": "Student learning how static analysis detects eval() and prototype pollution bugs.",
    "targetAudience": "Student learning how static analysis detects eval() and prototype pollution bugs.",
    "mainFeatures": [
      "Acorn / Babel AST code parser",
      "Custom rule engine for dangerous patterns (eval, innerHTML, child_process)",
      "Source code line and column vulnerability highlighter",
      "Educational explanation of why each pattern is dangerous with remediation"
    ],
    "features": [
      "Acorn / Babel AST code parser",
      "Custom rule engine for dangerous patterns (eval, innerHTML, child_process)",
      "Source code line and column vulnerability highlighter",
      "Educational explanation of why each pattern is dangerous with remediation"
    ],
    "frontend": "React, Monaco Editor, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Babel Parser, Monaco Editor",
    "techStack": [
      "React",
      "Babel",
      "Monaco Editor",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Allows users to write their own custom AST linting rules using simple JSON pattern selectors.",
    "roadmap": [
      "Babel parser AST generation and traversal engine",
      "Rule checking pipeline for common OWASP JS flaws",
      "Monaco editor with red underline diagnostics",
      "Custom security rule authoring sandbox"
    ],
    "extensions": [
      "Automated 1-click code refactoring fix",
      "CLI version for npm package usage"
    ],
    "mvpScope": "Type 'document.getElementById('out').innerHTML = userInput;' and see instant XSS vulnerability warning.",
    "collections": [
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-12",
    "title": "CanaryToken: Honey-Token Canary Trap Generator",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Companies only discover data breaches months after hackers exfiltrate database records and files.",
    "problemStatement": "Companies only discover data breaches months after hackers exfiltrate database records and files.",
    "solution": "A deception security platform generating fake sensitive files (Word, PDF, SQL) that trigger alerts when opened.",
    "proposedSolution": "A deception security platform generating fake sensitive files (Word, PDF, SQL) that trigger alerts when opened.",
    "realWorldUseCase": "Sysadmin placing a decoy 'Executive_Salaries_2024.docx' file on an internal file share.",
    "targetAudience": "Sysadmin placing a decoy 'Executive_Salaries_2024.docx' file on an internal file share.",
    "mainFeatures": [
      "Generate tracking canary files (Word doc, PDF, SQL dummy records)",
      "DNS and HTTP webhook beacon listeners",
      "Immediate email and Slack alert when an attacker opens a canary",
      "Attacker IP, user-agent, and timestamp forensic logging"
    ],
    "features": [
      "Generate tracking canary files (Word doc, PDF, SQL dummy records)",
      "DNS and HTTP webhook beacon listeners",
      "Immediate email and Slack alert when an attacker opens a canary",
      "Attacker IP, user-agent, and timestamp forensic logging"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, DNS Server",
    "database": "PostgreSQL / Supabase",
    "otherTech": "DNS API, SendGrid",
    "techStack": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Uses hidden web bugs and DNS canary queries that trigger even when document macros are disabled.",
    "roadmap": [
      "Canary file generator for Word, PDF, and URL tokens",
      "DNS token resolution and HTTP beacon capture endpoints",
      "Instant notification dispatch to email and Slack",
      "Incident forensics dashboard with attacker geo-location"
    ],
    "extensions": [
      "Database canary row generator with honeypot triggers",
      "AWS API key canary generator that alerts on use"
    ],
    "mvpScope": "Generate a canary PDF document, open it on your phone, and watch your dashboard register an immediate alert.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-sec-13",
    "title": "WAFTester: Web Application Firewall Rule Visualizer",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Engineers configuring ModSecurity or AWS WAF struggle to test whether complex regex rules block attacks.",
    "problemStatement": "Engineers configuring ModSecurity or AWS WAF struggle to test whether complex regex rules block attacks.",
    "solution": "An interactive regex testing and simulation workbench for web application firewall rules.",
    "proposedSolution": "An interactive regex testing and simulation workbench for web application firewall rules.",
    "realWorldUseCase": "DevOps engineer fine-tuning WAF regex to block SQL injection without breaking legitimate user inputs.",
    "targetAudience": "DevOps engineer fine-tuning WAF regex to block SQL injection without breaking legitimate user inputs.",
    "mainFeatures": [
      "WAF regex rule editor with live evaluation",
      "Payload test suite with 100+ standard attack vectors (SQLi, XSS, Path Traversal)",
      "Confusion matrix showing True Positives vs False Positives",
      "Export rules to AWS WAF, Cloudflare, and ModSecurity syntax"
    ],
    "features": [
      "WAF regex rule editor with live evaluation",
      "Payload test suite with 100+ standard attack vectors (SQLi, XSS, Path Traversal)",
      "Confusion matrix showing True Positives vs False Positives",
      "Export rules to AWS WAF, Cloudflare, and ModSecurity syntax"
    ],
    "frontend": "React, Tailwind, Monaco Editor",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Monaco Editor, Lucide React",
    "techStack": [
      "React",
      "Monaco Editor",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Calculates real-time precision and recall against an included test bank of 50 attacks and 50 benign queries.",
    "roadmap": [
      "Regex compilation and test vector execution harness",
      "Attack payload library organized by OWASP category",
      "Confusion matrix and false positive rate dashboard",
      "Multi-platform WAF configuration syntax exporter"
    ],
    "extensions": [
      "Automated regex bypass fuzzer",
      "Cloudflare WAF API sync connector"
    ],
    "mvpScope": "Paste a WAF regex rule, run it against 20 test inputs, and see exactly which attack payloads slip through.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-14",
    "title": "CanaryWatch: Ransomware Canary File Watcher",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Ransomware encrypts entire hard drives silently before victims notice that files are being scrambled.",
    "problemStatement": "Ransomware encrypts entire hard drives silently before victims notice that files are being scrambled.",
    "solution": "A background file system sentinel that monitors sacrificial canary files and terminates rogue encryptor processes.",
    "proposedSolution": "A background file system sentinel that monitors sacrificial canary files and terminates rogue encryptor processes.",
    "realWorldUseCase": "System administrator protecting sensitive shared company file directories from ransomware.",
    "targetAudience": "System administrator protecting sensitive shared company file directories from ransomware.",
    "mainFeatures": [
      "Canary file creation in strategic file system locations",
      "Real-time file modification and high-entropy event watcher",
      "Automatic kill signal to processes modifying multiple canary files",
      "Emergency network adapter disconnect to contain lateral spread"
    ],
    "features": [
      "Canary file creation in strategic file system locations",
      "Real-time file modification and high-entropy event watcher",
      "Automatic kill signal to processes modifying multiple canary files",
      "Emergency network adapter disconnect to contain lateral spread"
    ],
    "frontend": "React (Dashboard UI), Tailwind",
    "backend": "Python / Go System Daemon",
    "database": "SQLite",
    "otherTech": "psutil, watchdog",
    "techStack": [
      "React",
      "Python",
      "Go",
      "SQLite"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Detects the mathematical entropy jump that occurs when plain text files are encrypted with AES.",
    "roadmap": [
      "System filesystem watcher using OS native hooks",
      "File entropy calculation module (detecting encryption)",
      "Process termination and network isolation logic",
      "Web management and alert log console"
    ],
    "extensions": [
      "Automated shadow copy volume restore command",
      "Windows / Linux cross-platform service installer"
    ],
    "mvpScope": "Simulate an encryptor modifying 3 canary files; watch the sentinel kill the process and alert the dashboard in 100ms.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-15",
    "title": "CertRadar: SSL/TLS Certificate Expiration & Cipher Health",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Websites go offline unexpectedly when operations teams forget to renew SSL certificates.",
    "problemStatement": "Websites go offline unexpectedly when operations teams forget to renew SSL certificates.",
    "solution": "A domain security scanner monitoring SSL/TLS expiration, weak cipher suites, and Certificate Transparency logs.",
    "proposedSolution": "A domain security scanner monitoring SSL/TLS expiration, weak cipher suites, and Certificate Transparency logs.",
    "realWorldUseCase": "IT manager monitoring 30 company domain certificates.",
    "targetAudience": "IT manager monitoring 30 company domain certificates.",
    "mainFeatures": [
      "TLS handshake certificate expiration date monitor",
      "Weak cipher suite audit (flags deprecated TLS 1.0/1.1 and RC4)",
      "Certificate Transparency (CT) log monitor detecting rogue certs",
      "Automated Slack/Email renewal reminder alerts at 30, 14, and 3 days"
    ],
    "features": [
      "TLS handshake certificate expiration date monitor",
      "Weak cipher suite audit (flags deprecated TLS 1.0/1.1 and RC4)",
      "Certificate Transparency (CT) log monitor detecting rogue certs",
      "Automated Slack/Email renewal reminder alerts at 30, 14, and 3 days"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js / Python FastAPI",
    "database": "PostgreSQL / SQLite",
    "otherTech": "OpenSSL, Node TLS",
    "techStack": [
      "React",
      "Node.js",
      "FastAPI",
      "PostgreSQL"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Scans public Certificate Transparency logs to alert if a rogue certificate was issued for your domain.",
    "roadmap": [
      "TLS socket connection and x509 certificate parser",
      "Cipher suite grade calculator (A+ to F)",
      "Certificate Transparency log query client",
      "Alert notification dispatcher via Slack webhooks"
    ],
    "extensions": [
      "DNS CAA record configuration verification",
      "HSTS header pre-load status auditor"
    ],
    "mvpScope": "Type any domain (e.g. github.com) and view remaining certificate days, cipher grade, and issuer chain.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-16",
    "title": "CryptoPaste: End-to-End PGP Encrypted Ephemeral Pastebin",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Whistleblowers and security teams need to share sensitive keys without relying on plain-text pastebins.",
    "problemStatement": "Whistleblowers and security teams need to share sensitive keys without relying on plain-text pastebins.",
    "solution": "A zero-knowledge pastebin encrypting text with client-side OpenPGP keys before storage.",
    "proposedSolution": "A zero-knowledge pastebin encrypting text with client-side OpenPGP keys before storage.",
    "realWorldUseCase": "Security engineer securely sharing a temporary root password with a colleague.",
    "targetAudience": "Security engineer securely sharing a temporary root password with a colleague.",
    "mainFeatures": [
      "Client-side OpenPGP / Web Crypto AES-256 encryption",
      "Configurable expiration timers (1 hour, 1 day, Burn on read)",
      "Password protection with PBKDF2 key derivation",
      "Clean cryptographic public key share interface"
    ],
    "features": [
      "Client-side OpenPGP / Web Crypto AES-256 encryption",
      "Configurable expiration timers (1 hour, 1 day, Burn on read)",
      "Password protection with PBKDF2 key derivation",
      "Clean cryptographic public key share interface"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express",
    "database": "Redis (TTL expiring storage)",
    "otherTech": "openpgp.js, Web Crypto API",
    "techStack": [
      "React",
      "openpgp.js",
      "Node.js",
      "Redis"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "The server only ever sees ciphertext blobs; encryption keys are encoded solely in the client URL anchor.",
    "roadmap": [
      "openpgp.js client encryption and decryption modules",
      "Ephemeral Redis storage with automatic TTL expiry",
      "Burn-after-reading one-time download mechanics",
      "Password protected decrypt prompt"
    ],
    "extensions": [
      "Client-side file attachment encryption",
      "QR code mobile decryption scanner"
    ],
    "mvpScope": "Paste a secret note, set to 'Burn after reading', and share the link: after one view, the note vanishes forever.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-17",
    "title": "ADAuditor: Active Directory Misconfiguration Inspector",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Ransomware groups compromise corporate networks by exploiting neglected Active Directory misconfigurations.",
    "problemStatement": "Ransomware groups compromise corporate networks by exploiting neglected Active Directory misconfigurations.",
    "solution": "An audit visualizer identifying risky Active Directory configurations like Kerberoasting and AS-REP roasting.",
    "proposedSolution": "An audit visualizer identifying risky Active Directory configurations like Kerberoasting and AS-REP roasting.",
    "realWorldUseCase": "Security analyst auditing domain controller permissions.",
    "targetAudience": "Security analyst auditing domain controller permissions.",
    "mainFeatures": [
      "BloodHound-compatible JSON telemetry ingestion",
      "Attack path visualizer identifying privilege escalation paths",
      "Weak Kerberos configuration and unconstrained delegation auditor",
      "Step-by-step remediation guide for domain administrators"
    ],
    "features": [
      "BloodHound-compatible JSON telemetry ingestion",
      "Attack path visualizer identifying privilege escalation paths",
      "Weak Kerberos configuration and unconstrained delegation auditor",
      "Step-by-step remediation guide for domain administrators"
    ],
    "frontend": "React, Cytoscape.js, Tailwind",
    "backend": "Python FastAPI",
    "database": "PostgreSQL, Neo4j / SQLite",
    "otherTech": "Cytoscape.js, NetworkX",
    "techStack": [
      "React",
      "Cytoscape.js",
      "FastAPI",
      "Python"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Renders the shortest path to Domain Admin privilege in an intuitive interactive node graph.",
    "roadmap": [
      "JSON Active Directory dump parser",
      "Graph analysis engine calculating shortest attack paths",
      "Interactive Cytoscape node graph visualization",
      "Security risk priority scorecard with remediation steps"
    ],
    "extensions": [
      "Automated PowerShell audit script generator",
      "CIS benchmark compliance scoring"
    ],
    "mvpScope": "Upload a sample AD export file and see the visual attack graph showing how a guest user escalates to admin.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-18",
    "title": "SafeLink: Real-Time Browser Malicious Link Inspector",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Users fall for typosquatting domains and malicious link redirects on social media.",
    "problemStatement": "Users fall for typosquatting domains and malicious link redirects on social media.",
    "solution": "A browser extension analyzing links before users click them, checking typosquatting and domain age.",
    "proposedSolution": "A browser extension analyzing links before users click them, checking typosquatting and domain age.",
    "realWorldUseCase": "Remote worker browsing social media and checking incoming link authenticity.",
    "targetAudience": "Remote worker browsing social media and checking incoming link authenticity.",
    "mainFeatures": [
      "Hover-over link inspection card with destination preview",
      "Typosquatting and Levenshtein distance brand impostor detector",
      "WHOIS domain registration age lookup (flags domains < 30 days old)",
      "HTTPS certificate and redirect chain visualizer"
    ],
    "features": [
      "Hover-over link inspection card with destination preview",
      "Typosquatting and Levenshtein distance brand impostor detector",
      "WHOIS domain registration age lookup (flags domains < 30 days old)",
      "HTTPS certificate and redirect chain visualizer"
    ],
    "frontend": "React (Extension UI), Tailwind",
    "backend": "Chrome Extension Content Script",
    "database": "chrome.storage.local",
    "otherTech": "WHOIS API, Chrome Extension API",
    "techStack": [
      "React",
      "Chrome Extension",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Intercepts link clicks and warns users if a domain uses lookalike Cyrillic characters (IDN homograph attack).",
    "roadmap": [
      "Content script hover listener for all anchor tags",
      "Levenshtein distance detector for popular brands",
      "WHOIS API domain registration age fetcher",
      "Visual warning modal with safe preview bypass"
    ],
    "extensions": [
      "Full redirect chain tracer",
      "Phishing report button submitting to community feed"
    ],
    "mvpScope": "Hover over a fake link like 'paypa1.com' and view an instant red warning card highlighting the typosquatting domain.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-19",
    "title": "ThreatFeed: Cyber Threat Intelligence STIX/TAXII Aggregator",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "SOC analysts are overwhelmed by dozens of disjointed threat intelligence feeds.",
    "problemStatement": "SOC analysts are overwhelmed by dozens of disjointed threat intelligence feeds.",
    "solution": "A centralized threat intelligence dashboard parsing STIX/TAXII feeds into actionable IOC search tables.",
    "proposedSolution": "A centralized threat intelligence dashboard parsing STIX/TAXII feeds into actionable IOC search tables.",
    "realWorldUseCase": "Incident responder investigating an IP address found in firewall logs.",
    "targetAudience": "Incident responder investigating an IP address found in firewall logs.",
    "mainFeatures": [
      "STIX 2.1 and TAXII 2.1 threat feed ingestion",
      "Indicator of Compromise (IOC) search (IP, Hash, Domain)",
      "Threat actor attribution and MITRE ATT&CK tactic mapping",
      "Exportable firewall blocklists (Suricata, Snort, iptables)"
    ],
    "features": [
      "STIX 2.1 and TAXII 2.1 threat feed ingestion",
      "Indicator of Compromise (IOC) search (IP, Hash, Domain)",
      "Threat actor attribution and MITRE ATT&CK tactic mapping",
      "Exportable firewall blocklists (Suricata, Snort, iptables)"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python FastAPI",
    "database": "PostgreSQL, Elasticsearch / SQLite",
    "otherTech": "STIX2, TAXII Client",
    "techStack": [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Recharts"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Automatically maps every detected IOC to official MITRE ATT&CK enterprise tactics and threat groups.",
    "roadmap": [
      "STIX 2.1 JSON parser and feed poller",
      "IOC search engine with threat score weighting",
      "MITRE ATT&CK tactic visual matrix",
      "Automated Snort and iptables blocklist exporter"
    ],
    "extensions": [
      "Automated IP reputation enrichment via AbuseIPDB",
      "Threat actor campaign timeline visualizer"
    ],
    "mvpScope": "Search a suspicious IP address and see which threat actor campaigns and malware families are linked to it.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-20",
    "title": "BufferLab: Memory Safety & Buffer Overflow Playground",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Students struggle to understand low-level C memory safety vulnerabilities without an interactive visualization.",
    "problemStatement": "Students struggle to understand low-level C memory safety vulnerabilities without an interactive visualization.",
    "solution": "An educational web sandbox visualizer showing stack memory, buffer boundaries, and stack smashing.",
    "proposedSolution": "An educational web sandbox visualizer showing stack memory, buffer boundaries, and stack smashing.",
    "realWorldUseCase": "Computer engineering student learning how buffer overflows overwrite function return pointers.",
    "targetAudience": "Computer engineering student learning how buffer overflows overwrite function return pointers.",
    "mainFeatures": [
      "Interactive visual stack diagram (Local variables, EBP, Return Pointer)",
      "Step-by-step C string copying simulation",
      "Visual demonstration of stack canary protection",
      "Interactive buffer overflow puzzle challenges"
    ],
    "features": [
      "Interactive visual stack diagram (Local variables, EBP, Return Pointer)",
      "Step-by-step C string copying simulation",
      "Visual demonstration of stack canary protection",
      "Interactive buffer overflow puzzle challenges"
    ],
    "frontend": "React, Canvas API / SVG, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "None",
    "otherTech": "Monaco Editor, Canvas API",
    "techStack": [
      "React",
      "Monaco Editor",
      "Canvas API",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Watch memory addresses light up and turn red as an 8-byte buffer overflows into adjacent register memory.",
    "roadmap": [
      "Visual memory stack layout component with hexadecimal addresses",
      "C code execution step simulator",
      "Buffer overflow trigger and return pointer overwrite animation",
      "Interactive mitigation toggles (ASLR, Stack Canaries)"
    ],
    "extensions": [
      "Format string vulnerability visualizer",
      "Heap chunk allocation and free-list visualizer"
    ],
    "mvpScope": "Type a 12-character input into an 8-byte buffer and watch the visual return pointer get overwritten.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-sec-21",
    "title": "APISentry: Zero-Trust API Security Gateway & Rate Limiter",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Public APIs get abused by credential-stuffing bots and denial-of-service spam.",
    "problemStatement": "Public APIs get abused by credential-stuffing bots and denial-of-service spam.",
    "solution": "A lightweight API security reverse proxy enforcing token rate limiting, JWT validation, and SQLi filtering.",
    "proposedSolution": "A lightweight API security reverse proxy enforcing token rate limiting, JWT validation, and SQLi filtering.",
    "realWorldUseCase": "Backend engineer protecting microservices from unauthorized API scrapers.",
    "targetAudience": "Backend engineer protecting microservices from unauthorized API scrapers.",
    "mainFeatures": [
      "Token bucket and sliding window rate limiting via Redis",
      "Cryptographic JWT signature and expiration validation",
      "Request body inspection filtering SQL injection and XSS patterns",
      "Real-time API traffic metrics and blocked IP dashboard"
    ],
    "features": [
      "Token bucket and sliding window rate limiting via Redis",
      "Cryptographic JWT signature and expiration validation",
      "Request body inspection filtering SQL injection and XSS patterns",
      "Real-time API traffic metrics and blocked IP dashboard"
    ],
    "frontend": "React, Tailwind, Chart.js",
    "backend": "Go / Node.js, Express",
    "database": "Redis, PostgreSQL",
    "otherTech": "Redis, jsonwebtoken",
    "techStack": [
      "React",
      "Go",
      "Node.js",
      "Redis"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4 weeks",
    "uniqueness": "Handles 10,000 requests per second with under 2ms latency overhead using Redis token bucket algorithms.",
    "roadmap": [
      "Reverse proxy request interception middleware",
      "Redis sliding window rate limiting logic",
      "JWT token verification and role-based access control",
      "Real-time metrics dashboard with blocked traffic charts"
    ],
    "extensions": [
      "Automated IP reputation banning rules",
      "GraphQL query depth limit protector"
    ],
    "mvpScope": "Send 10 rapid API requests in 2 seconds; watch the 11th request return 429 Too Many Requests with retry headers.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-22",
    "title": "WiFiBeacon: Rogue Access Point & Evil Twin Detector",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Coffee shop remote workers get their credentials intercepted by malicious Wi-Fi 'Evil Twin' routers.",
    "problemStatement": "Coffee shop remote workers get their credentials intercepted by malicious Wi-Fi 'Evil Twin' routers.",
    "solution": "A lightweight network monitor alerting when two Wi-Fi access points share the same SSID with mismatched BSSIDs.",
    "proposedSolution": "A lightweight network monitor alerting when two Wi-Fi access points share the same SSID with mismatched BSSIDs.",
    "realWorldUseCase": "Remote traveler connecting to public airport Wi-Fi.",
    "targetAudience": "Remote traveler connecting to public airport Wi-Fi.",
    "mainFeatures": [
      "Local Wi-Fi beacon frame monitor (SSID vs BSSID)",
      "Signal strength anomaly and sudden MAC address shift alert",
      "Captive portal SSL certificate validator",
      "Visual network safety checklist for public Wi-Fi users"
    ],
    "features": [
      "Local Wi-Fi beacon frame monitor (SSID vs BSSID)",
      "Signal strength anomaly and sudden MAC address shift alert",
      "Captive portal SSL certificate validator",
      "Visual network safety checklist for public Wi-Fi users"
    ],
    "frontend": "React (Dashboard UI), Tailwind",
    "backend": "Python (Scapy / NetworkManager)",
    "database": "SQLite",
    "otherTech": "Scapy, PyWiFi",
    "techStack": [
      "React",
      "Python",
      "Scapy",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Detects deauthentication attack packets that force client devices to disconnect and reconnect to an evil twin.",
    "roadmap": [
      "Scapy Wi-Fi packet listener for 802.11 beacon frames",
      "Evil twin detection logic (duplicate SSID with different MAC)",
      "Deauth attack packet spike alert trigger",
      "Desktop notification dispatcher"
    ],
    "extensions": [
      "Automated VPN tunnel activation on alert",
      "Historical Wi-Fi access point fingerprint database"
    ],
    "mvpScope": "Run the monitor, detect an access point with conflicting MAC addresses, and view an immediate warning alert.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-23",
    "title": "BreachAlert: Dark Web Credential Breach Webhook Sentinel",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Companies don't realize employee credentials have been leaked until ransomware gangs log in.",
    "problemStatement": "Companies don't realize employee credentials have been leaked until ransomware gangs log in.",
    "solution": "A sentinel service monitoring public paste sites and breach feeds to alert organizations on leaked domain emails.",
    "proposedSolution": "A sentinel service monitoring public paste sites and breach feeds to alert organizations on leaked domain emails.",
    "realWorldUseCase": "Company security officer protecting @company.com corporate accounts.",
    "targetAudience": "Company security officer protecting @company.com corporate accounts.",
    "mainFeatures": [
      "Corporate domain email monitoring across breach databases",
      "Real-time webhook and Slack alerts when employee credentials leak",
      "Automated password reset dispatch flow",
      "Historical corporate breach risk scorecard"
    ],
    "features": [
      "Corporate domain email monitoring across breach databases",
      "Real-time webhook and Slack alerts when employee credentials leak",
      "Automated password reset dispatch flow",
      "Historical corporate breach risk scorecard"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express",
    "database": "PostgreSQL, Supabase",
    "otherTech": "HIBP API, SendGrid",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Allows organizations to register a corporate domain and receive instant webhooks the moment a leak is indexed.",
    "roadmap": [
      "Domain verification via DNS TXT record check",
      "Breach database API integration and scheduled poller",
      "Slack and email webhook notification pipeline",
      "Security posture dashboard with affected departments"
    ],
    "extensions": [
      "Employee self-service credential verification portal",
      "Automated security awareness training assignment"
    ],
    "mvpScope": "Register your domain, simulate a leak notification, and receive an instant Slack message with affected email addresses.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-24",
    "title": "APKInspect: Mobile Android APK Static Security Analyzer",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Android users download third-party APKs containing hidden ad-trackers, malware, and intrusive permissions.",
    "problemStatement": "Android users download third-party APKs containing hidden ad-trackers, malware, and intrusive permissions.",
    "solution": "An in-browser APK static analyzer that decompiles Android manifests and reports dangerous permissions.",
    "proposedSolution": "An in-browser APK static analyzer that decompiles Android manifests and reports dangerous permissions.",
    "realWorldUseCase": "Security-conscious user auditing a third-party open-source Android app.",
    "targetAudience": "Security-conscious user auditing a third-party open-source Android app.",
    "mainFeatures": [
      "Android APK file upload and unzip in browser/backend",
      "AndroidManifest.xml extraction and permission auditor",
      "Dangerous permission flags (SMS, Location, Camera, Contacts)",
      "Hardcoded API keys and plaintext HTTP endpoint extractor"
    ],
    "features": [
      "Android APK file upload and unzip in browser/backend",
      "AndroidManifest.xml extraction and permission auditor",
      "Dangerous permission flags (SMS, Location, Camera, Contacts)",
      "Hardcoded API keys and plaintext HTTP endpoint extractor"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Python FastAPI, Androguard",
    "database": "SQLite / Supabase",
    "otherTech": "Androguard, Chart.js",
    "techStack": [
      "React",
      "FastAPI",
      "Androguard",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Calculates a privacy privacy risk index from 0 to 100 based on the dangerous permission combinations found.",
    "roadmap": [
      "APK upload handling and Androguard parsing pipeline",
      "Dangerous permissions auditor with risk descriptions",
      "String extraction scanning for hardcoded secrets and URLs",
      "Exportable security audit report PDF"
    ],
    "extensions": [
      "VirusTotal APK hash reputation lookup",
      "Decompiled Java source code viewer"
    ],
    "mvpScope": "Upload an Android APK file and view an immediate visual breakdown of all requested permissions and hardcoded URLs.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-sec-25",
    "title": "CipherLab: Interactive Cryptographic Algorithm Lab",
    "domain": "Cybersecurity",
    "category": "Cybersecurity",
    "problem": "Computer science students memorize RSA and AES formulas without understanding the underlying math.",
    "problemStatement": "Computer science students memorize RSA and AES formulas without understanding the underlying math.",
    "solution": "An interactive cryptographic laboratory demonstrating RSA key generation, AES block modes, and Diffie-Hellman.",
    "proposedSolution": "An interactive cryptographic laboratory demonstrating RSA key generation, AES block modes, and Diffie-Hellman.",
    "realWorldUseCase": "CS student learning how modular exponentiation powers public-key RSA cryptography.",
    "targetAudience": "CS student learning how modular exponentiation powers public-key RSA cryptography.",
    "mainFeatures": [
      "Step-by-step RSA key generation (Prime p & q, Euler's totient, e, d)",
      "Interactive modular arithmetic calculator",
      "AES block cipher mode visualizer (ECB vs CBC penguin image demo)",
      "Diffie-Hellman key exchange interactive two-party simulator"
    ],
    "features": [
      "Step-by-step RSA key generation (Prime p & q, Euler's totient, e, d)",
      "Interactive modular arithmetic calculator",
      "AES block cipher mode visualizer (ECB vs CBC penguin image demo)",
      "Diffie-Hellman key exchange interactive two-party simulator"
    ],
    "frontend": "React, Canvas API, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "None",
    "otherTech": "Web Crypto API, Canvas API",
    "techStack": [
      "React",
      "Web Crypto API",
      "Canvas API",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Features the famous 'ECB Penguin' visual demonstration showing why ECB mode fails to hide patterns.",
    "roadmap": [
      "RSA key generation math engine with step-by-step proofs",
      "Diffie-Hellman color mixing analogy and mathematical exchange",
      "AES block mode visualizer demonstrating ECB vs CBC patterns",
      "Interactive encryption/decryption text sandbox"
    ],
    "extensions": [
      "Elliptic Curve Cryptography (ECC) point doubling visualizer",
      "SHA-256 avalanche effect bit-flip visualizer"
    ],
    "mvpScope": "Select two small primes (e.g. 61 and 53), calculate RSA public/private keys, and encrypt a message step-by-step.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-01",
    "title": "AutoEDA: Automated Exploratory Data Analysis & Report Engine",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Data scientists spend hours writing repetitive code for histograms, null checks, and correlation matrices.",
    "problemStatement": "Data scientists spend hours writing repetitive code for histograms, null checks, and correlation matrices.",
    "solution": "An automated EDA tool that ingests CSV/Parquet files and produces an interactive data profiling report in seconds.",
    "proposedSolution": "An automated EDA tool that ingests CSV/Parquet files and produces an interactive data profiling report in seconds.",
    "realWorldUseCase": "Junior data analyst exploring a new 50,000-row customer dataset.",
    "targetAudience": "Junior data analyst exploring a new 50,000-row customer dataset.",
    "mainFeatures": [
      "Automated data type inference (Numeric, Categorical, Datetime)",
      "Missing value heatmaps and outlier box plots",
      "Pearson and Spearman correlation matrix visualizer",
      "One-click exportable HTML profiling report"
    ],
    "features": [
      "Automated data type inference (Numeric, Categorical, Datetime)",
      "Missing value heatmaps and outlier box plots",
      "Pearson and Spearman correlation matrix visualizer",
      "One-click exportable HTML profiling report"
    ],
    "frontend": "React, Tailwind, Plotly.js",
    "backend": "Python FastAPI, Pandas, DuckDB",
    "database": "DuckDB (In-Memory)",
    "otherTech": "Pandas, Scikit-Learn",
    "techStack": [
      "React",
      "FastAPI",
      "Pandas",
      "Plotly.js"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Detects skewed distributions and automatically suggests log or power transformations for machine learning.",
    "roadmap": [
      "File upload and DuckDB in-memory ingestion",
      "Statistical profiling engine (mean, median, skew, kurtosis)",
      "Plotly interactive histogram and correlation charts",
      "Standalone HTML export report generator"
    ],
    "extensions": [
      "Automated feature importance baseline model",
      "Data quality score card (0-100)"
    ],
    "mvpScope": "Upload a CSV file and view interactive correlation heatmaps and distribution histograms in 3 seconds.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-02",
    "title": "CryptoPulse: Real-Time Crypto & Stock Sentiment Pipeline",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Retail traders make emotional decisions without tracking retail sentiment trends across social feeds.",
    "problemStatement": "Retail traders make emotional decisions without tracking retail sentiment trends across social feeds.",
    "solution": "A streaming sentiment pipeline analyzing social media posts to calculate real-time bullish/bearish market indicators.",
    "proposedSolution": "A streaming sentiment pipeline analyzing social media posts to calculate real-time bullish/bearish market indicators.",
    "realWorldUseCase": "Crypto trader analyzing whether a Bitcoin price breakout is accompanied by positive sentiment.",
    "targetAudience": "Crypto trader analyzing whether a Bitcoin price breakout is accompanied by positive sentiment.",
    "mainFeatures": [
      "Social media and news headline streaming ingestion",
      "Financial RoBERTa sentiment classification (Bullish, Neutral, Bearish)",
      "Real-time sentiment index overlaid on price candlestick charts",
      "Volume spike and sentiment divergence alert triggers"
    ],
    "features": [
      "Social media and news headline streaming ingestion",
      "Financial RoBERTa sentiment classification (Bullish, Neutral, Bearish)",
      "Real-time sentiment index overlaid on price candlestick charts",
      "Volume spike and sentiment divergence alert triggers"
    ],
    "frontend": "React 19, Lightweight Charts, Tailwind",
    "backend": "FastAPI, PyTorch, FinBERT",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "TradingView Lightweight Charts, FinBERT",
    "techStack": [
      "React",
      "FastAPI",
      "FinBERT",
      "TimescaleDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Overlays sentiment sentiment indicators directly on TradingView financial candlestick charts in real time.",
    "roadmap": [
      "Social media API poller / mock WebSocket feed",
      "FinBERT financial sentiment classification pipeline",
      "TradingView Lightweight Charts integration",
      "Sentiment-to-price divergence calculation engine"
    ],
    "extensions": [
      "Automated paper-trading backtester based on sentiment",
      "Multi-token portfolio sentiment heatmap"
    ],
    "mvpScope": "Watch a live candlestick chart update with an overlay showing 74% bullish social sentiment in real time.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": true
  },
  {
    "id": "proj-data-03",
    "title": "UrbanHeat: Geospatial Urban Heat Island & Canopy Visualizer",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Low-income urban neighborhoods suffer up to 10\u00b0F higher summer temperatures due to lack of tree cover.",
    "problemStatement": "Low-income urban neighborhoods suffer up to 10\u00b0F higher summer temperatures due to lack of tree cover.",
    "solution": "A geospatial mapping tool correlating satellite thermal data with urban tree canopy density and income levels.",
    "proposedSolution": "A geospatial mapping tool correlating satellite thermal data with urban tree canopy density and income levels.",
    "realWorldUseCase": "Urban city planner designing green corridor tree planting initiatives.",
    "targetAudience": "Urban city planner designing green corridor tree planting initiatives.",
    "mainFeatures": [
      "Landsat thermal infrared surface temperature ingestion",
      "NDVI vegetation canopy layer overlay",
      "Census tract demographic and median income correlation",
      "Interactive neighborhood tree planting simulator with cooling estimates"
    ],
    "features": [
      "Landsat thermal infrared surface temperature ingestion",
      "NDVI vegetation canopy layer overlay",
      "Census tract demographic and median income correlation",
      "Interactive neighborhood tree planting simulator with cooling estimates"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "Python FastAPI, GeoPandas",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, Rasterio",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Allows users to virtually 'plant' 500 trees in a neighborhood and view predicted temperature drops.",
    "roadmap": [
      "Mapbox satellite and thermal layer rendering",
      "GeoPandas raster processing and zonal statistics",
      "Socioeconomic census tract correlation charts",
      "Interactive tree planting simulation scenario tool"
    ],
    "extensions": [
      "3D building shadow analysis throughout the day",
      "Exportable municipal policy briefing PDF"
    ],
    "mvpScope": "Click a downtown census tract to see surface temperature 98\u00b0F vs 86\u00b0F in a nearby wooded suburb.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-04",
    "title": "ChurnRadar: Customer Churn Predictor with Survival Analysis",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Subscription businesses only discover customer churn after users cancel, when it is too late to retain them.",
    "problemStatement": "Subscription businesses only discover customer churn after users cancel, when it is too late to retain them.",
    "solution": "A customer retention platform using Kaplan-Meier survival analysis and XGBoost to predict churn probability.",
    "proposedSolution": "A customer retention platform using Kaplan-Meier survival analysis and XGBoost to predict churn probability.",
    "realWorldUseCase": "SaaS product manager identifying high-value accounts at risk of cancelling in the next 30 days.",
    "targetAudience": "SaaS product manager identifying high-value accounts at risk of cancelling in the next 30 days.",
    "mainFeatures": [
      "Customer behavioral event telemetry ingestion (Logins, Feature usage)",
      "XGBoost churn risk classification model",
      "Kaplan-Meier customer lifetime survival curves",
      "Actionable retention intervention triggers (Discount, Customer Success outreach)"
    ],
    "features": [
      "Customer behavioral event telemetry ingestion (Logins, Feature usage)",
      "XGBoost churn risk classification model",
      "Kaplan-Meier customer lifetime survival curves",
      "Actionable retention intervention triggers (Discount, Customer Success outreach)"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI, XGBoost, Lifelines",
    "database": "PostgreSQL / SQLite",
    "otherTech": "XGBoost, Scikit-Learn",
    "techStack": [
      "React",
      "FastAPI",
      "XGBoost",
      "Recharts"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Uses survival analysis to estimate customer expected lifetime value in months rather than binary churn.",
    "roadmap": [
      "Customer event data ingestion and feature engineering",
      "XGBoost model training and survival curve calculation",
      "Interactive customer risk table with individual risk factors",
      "Automated email trigger webhook integration"
    ],
    "extensions": [
      "What-if simulator: Impact of customer success calls",
      "Cohort retention heatmap visualizer"
    ],
    "mvpScope": "Upload subscription usage metrics and see a ranked list of top 20 customers likely to churn with reasons.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-05",
    "title": "RecEngine: E-Commerce Collaborative Filtering Recommendation Lab",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Small online store owners cannot afford expensive recommendation engines like Amazon's.",
    "problemStatement": "Small online store owners cannot afford expensive recommendation engines like Amazon's.",
    "solution": "An educational recommendation engine demonstrating matrix factorization and cosine similarity on product ratings.",
    "proposedSolution": "An educational recommendation engine demonstrating matrix factorization and cosine similarity on product ratings.",
    "realWorldUseCase": "E-commerce student learning how collaborative filtering vs content-based recommendations work.",
    "targetAudience": "E-commerce student learning how collaborative filtering vs content-based recommendations work.",
    "mainFeatures": [
      "Matrix factorization (Truncated SVD / ALS) model",
      "Item-item cosine similarity product matcher",
      "Interactive user preference profile builder",
      "Cold-start handling with category popular items"
    ],
    "features": [
      "Matrix factorization (Truncated SVD / ALS) model",
      "Item-item cosine similarity product matcher",
      "Interactive user preference profile builder",
      "Cold-start handling with category popular items"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Python FastAPI, Scikit-Learn",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Surprise library, Pandas",
    "techStack": [
      "React",
      "FastAPI",
      "Scikit-Learn",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Allows learners to inspect the exact mathematical dot products that generated a product recommendation.",
    "roadmap": [
      "MovieLens / E-commerce dataset ingestion",
      "Collaborative filtering matrix factorization pipeline",
      "Interactive user rating slider interface",
      "Recommendation explanation drawer showing similarity scores"
    ],
    "extensions": [
      "Hybrid recommender blending user ratings with product descriptions",
      "Real-time session-based recommendations"
    ],
    "mvpScope": "Rate 3 sci-fi movies, click 'Generate Recommendations', and see 5 suggested movies with match percentages.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-06",
    "title": "PriceTracker: Web Scraping Time-Series Price Trend Forecaster",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Shoppers overpay for electronics because prices fluctuate wildly around holiday sales.",
    "problemStatement": "Shoppers overpay for electronics because prices fluctuate wildly around holiday sales.",
    "solution": "A price tracking dashboard that scrapes product prices across multiple retailers and forecasts future sales.",
    "proposedSolution": "A price tracking dashboard that scrapes product prices across multiple retailers and forecasts future sales.",
    "realWorldUseCase": "Consumer deciding whether to buy a laptop now or wait 3 weeks for Black Friday.",
    "targetAudience": "Consumer deciding whether to buy a laptop now or wait 3 weeks for Black Friday.",
    "mainFeatures": [
      "Automated scheduled web scraping of e-commerce prices",
      "Time-series price history charts with all-time low indicators",
      "ARIMA / Prophet price drop forecasting model",
      "Email alert when price drops below user's target threshold"
    ],
    "features": [
      "Automated scheduled web scraping of e-commerce prices",
      "Time-series price history charts with all-time low indicators",
      "ARIMA / Prophet price drop forecasting model",
      "Email alert when price drops below user's target threshold"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js / Python FastAPI, Playwright",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Playwright, Prophet / Statsmodels",
    "techStack": [
      "React",
      "FastAPI",
      "Playwright",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Calculates a 'Deal Score' rating whether the current price is genuinely discounted or an inflated fake deal.",
    "roadmap": [
      "Product URL intake and Playwright scraper",
      "Time-series price storage and database models",
      "Interactive price history chart with target price line",
      "Price drop email notification worker"
    ],
    "extensions": [
      "Multi-retailer price comparison table",
      "Browser extension for 1-click price tracking"
    ],
    "mvpScope": "Paste an Amazon product link, view a 6-month historical price chart, and set a $50 drop alert.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-07",
    "title": "InfoGraph: Social Media Misinformation Propagation Analyzer",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "False rumors and conspiracy theories spread 6 times faster on social networks than verified news.",
    "problemStatement": "False rumors and conspiracy theories spread 6 times faster on social networks than verified news.",
    "solution": "A network analysis visualizer mapping the viral spread of claims across retweets and social nodes.",
    "proposedSolution": "A network analysis visualizer mapping the viral spread of claims across retweets and social nodes.",
    "realWorldUseCase": "Digital journalism student studying how bot accounts amplify divisive political hashtags.",
    "targetAudience": "Digital journalism student studying how bot accounts amplify divisive political hashtags.",
    "mainFeatures": [
      "Twitter/Mastodon social graph data ingestion",
      "Force-directed network visualization of retweets and quote-posts",
      "Bot detection heuristic scoring based on account creation date and posting frequency",
      "Epidemic SIR (Susceptible-Infectious-Recovered) model simulation"
    ],
    "features": [
      "Twitter/Mastodon social graph data ingestion",
      "Force-directed network visualization of retweets and quote-posts",
      "Bot detection heuristic scoring based on account creation date and posting frequency",
      "Epidemic SIR (Susceptible-Infectious-Recovered) model simulation"
    ],
    "frontend": "React, D3.js / ForceGraph2D, Tailwind",
    "backend": "Python FastAPI, NetworkX",
    "database": "Neo4j / SQLite",
    "otherTech": "D3.js, NetworkX",
    "techStack": [
      "React",
      "D3.js",
      "NetworkX",
      "FastAPI"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Applies epidemiological SIR virus spread models to mathematically simulate how counter-fact checks slow rumors.",
    "roadmap": [
      "NetworkX graph construction from tweet edges",
      "Interactive D3.js force-directed graph with node sizing by degree centrality",
      "Bot score classifier and community cluster detector",
      "SIR information diffusion simulation playback"
    ],
    "extensions": [
      "Topic sentiment propagation heatmaps",
      "Key influencer node identification report"
    ],
    "mvpScope": "Upload a tweet propagation network and watch an interactive animated graph showing how 3 bot nodes seeded the rumor.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-08",
    "title": "MatchPredict: Bayesian Sports Match Outcome Forecaster",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Sports fans rely on biased gut instincts rather than probabilistic models when predicting games.",
    "problemStatement": "Sports fans rely on biased gut instincts rather than probabilistic models when predicting games.",
    "solution": "A probabilistic Bayesian inference model predicting soccer and basketball game outcomes with uncertainty bounds.",
    "proposedSolution": "A probabilistic Bayesian inference model predicting soccer and basketball game outcomes with uncertainty bounds.",
    "realWorldUseCase": "Soccer enthusiast evaluating probability distributions for an upcoming Premier League derby.",
    "targetAudience": "Soccer enthusiast evaluating probability distributions for an upcoming Premier League derby.",
    "mainFeatures": [
      "Historical match score and team performance database",
      "Bayesian Poisson goal distribution model",
      "Monte Carlo simulation of 10,000 matches",
      "Outcome probability charts with expected goals (xG)"
    ],
    "features": [
      "Historical match score and team performance database",
      "Bayesian Poisson goal distribution model",
      "Monte Carlo simulation of 10,000 matches",
      "Outcome probability charts with expected goals (xG)"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python FastAPI, PyMC / Scikit-Learn",
    "database": "PostgreSQL / SQLite",
    "otherTech": "PyMC, SciPy",
    "techStack": [
      "React",
      "FastAPI",
      "SciPy",
      "Recharts"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Produces full probability distributions rather than flat percentages, showing exact chances of draws and clean sheets.",
    "roadmap": [
      "Historical sports match dataset ingestion",
      "Bayesian Poisson attack/defense parameter estimation",
      "Monte Carlo 10,000 match simulation runner",
      "Interactive match prediction card with probability gauges"
    ],
    "extensions": [
      "Live in-game probability updates via sports APIs",
      "Player injury impact weighting modifier"
    ],
    "mvpScope": "Select Liverpool vs Arsenal; run 10,000 simulations and view predicted 2-1 outcome probability curves.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-09",
    "title": "LogAnomaly: Streaming Log Anomaly Detector with Isolation Forests",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "System administrators cannot spot rare microservice failure patterns buried in gigabytes of daily server logs.",
    "problemStatement": "System administrators cannot spot rare microservice failure patterns buried in gigabytes of daily server logs.",
    "solution": "A streaming log analyzer using unsupervised Isolation Forests to flag anomalous error bursts.",
    "proposedSolution": "A streaming log analyzer using unsupervised Isolation Forests to flag anomalous error bursts.",
    "realWorldUseCase": "DevOps engineer troubleshooting an intermittent database connection pool exhaustion.",
    "targetAudience": "DevOps engineer troubleshooting an intermittent database connection pool exhaustion.",
    "mainFeatures": [
      "Streaming server log ingestion via WebSockets",
      "Log parsing and feature extraction (status code, latency, IP count)",
      "Unsupervised Isolation Forest anomaly detection model",
      "Interactive anomaly timeline with drill-down raw log viewer"
    ],
    "features": [
      "Streaming server log ingestion via WebSockets",
      "Log parsing and feature extraction (status code, latency, IP count)",
      "Unsupervised Isolation Forest anomaly detection model",
      "Interactive anomaly timeline with drill-down raw log viewer"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python FastAPI, Scikit-Learn",
    "database": "TimescaleDB, Redis",
    "otherTech": "Scikit-Learn, WebSockets",
    "techStack": [
      "React",
      "FastAPI",
      "Scikit-Learn",
      "TimescaleDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Requires zero labeled training data; unsupervised Isolation Forest mathematically isolates abnormal outlier logs.",
    "roadmap": [
      "Log file ingestion pipeline and regex token parser",
      "Streaming Isolation Forest anomaly scoring worker",
      "Real-time timeline chart highlighting anomaly spikes in red",
      "Drill-down modal displaying exact offending raw log lines"
    ],
    "extensions": [
      "Automated Slack notification on anomaly spikes",
      "Log cluster grouping by root cause signature"
    ],
    "mvpScope": "Feed 5,000 simulated Nginx access logs and watch the system automatically flag 3 abnormal latency spikes.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-10",
    "title": "TransitDelay: Public Transit Bus Delay Forecaster",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Commuters miss connections because scheduled bus arrival times don't account for rain and traffic.",
    "problemStatement": "Commuters miss connections because scheduled bus arrival times don't account for rain and traffic.",
    "solution": "A machine learning pipeline ingesting GTFS real-time transit data and weather feeds to predict route delays.",
    "proposedSolution": "A machine learning pipeline ingesting GTFS real-time transit data and weather feeds to predict route delays.",
    "realWorldUseCase": "City commuter checking whether the 8:15 AM bus will arrive on time in rainy weather.",
    "targetAudience": "City commuter checking whether the 8:15 AM bus will arrive on time in rainy weather.",
    "mainFeatures": [
      "General Transit Feed Specification (GTFS-RT) live data ingestion",
      "Open-Meteo weather API rainfall and temperature correlation",
      "Random Forest delay regression model by bus stop",
      "Interactive transit route map with delay status color pins"
    ],
    "features": [
      "General Transit Feed Specification (GTFS-RT) live data ingestion",
      "Open-Meteo weather API rainfall and temperature correlation",
      "Random Forest delay regression model by bus stop",
      "Interactive transit route map with delay status color pins"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Python FastAPI, Scikit-Learn",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "GTFS API, Mapbox GL",
    "techStack": [
      "React",
      "FastAPI",
      "Mapbox",
      "Scikit-Learn"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Combines real-time GPS transit pings with weather precipitation data to predict bottlenecks.",
    "roadmap": [
      "GTFS-RT public transit feed poller",
      "Weather feature engineering pipeline",
      "Regression model predicting stop-by-stop delay in minutes",
      "Mapbox interactive route map with live bus icons"
    ],
    "extensions": [
      "Alternate route suggestion during severe delays",
      "Commuter favorite bus stop push notification"
    ],
    "mvpScope": "Select Route 42 in rainy conditions; view predicted 7-minute delay with historical bottleneck points.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-11",
    "title": "DataCleanse: Automated Data Cleaning & Imputation Pipeline",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Data scientists spend 80% of project time manually cleaning dirty, corrupted, and inconsistent CSVs.",
    "problemStatement": "Data scientists spend 80% of project time manually cleaning dirty, corrupted, and inconsistent CSVs.",
    "solution": "A visual data cleaning pipeline that automatically detects outliers, imputes missing values, and fixes dates.",
    "proposedSolution": "A visual data cleaning pipeline that automatically detects outliers, imputes missing values, and fixes dates.",
    "realWorldUseCase": "Student cleaning a messy survey dataset with inconsistent date formats and missing ages.",
    "targetAudience": "Student cleaning a messy survey dataset with inconsistent date formats and missing ages.",
    "mainFeatures": [
      "Automatic dirty data pattern detector (Nulls, Outliers, Typo categories)",
      "Imputation strategies (Mean, Median, KNN, Forward Fill)",
      "String standardization and datetime format unifier",
      "Export cleaned dataset with reproducible Python cleaning code"
    ],
    "features": [
      "Automatic dirty data pattern detector (Nulls, Outliers, Typo categories)",
      "Imputation strategies (Mean, Median, KNN, Forward Fill)",
      "String standardization and datetime format unifier",
      "Export cleaned dataset with reproducible Python cleaning code"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Python FastAPI, Pandas",
    "database": "DuckDB (In-Memory)",
    "otherTech": "Pandas, Scikit-Learn",
    "techStack": [
      "React",
      "FastAPI",
      "Pandas",
      "DuckDB"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Exports a complete, formatted Python cleaning script so users can audit and reproduce the cleaning steps.",
    "roadmap": [
      "Messy dataset upload and data health scorecard",
      "Interactive column cleaning action cards",
      "Outlier removal and missing value imputation preview",
      "One-click export of clean CSV and Python script"
    ],
    "extensions": [
      "Automated fuzzy string matching for misspelled city names",
      "Column type converter with Zod validation"
    ],
    "mvpScope": "Upload a dirty CSV with missing rows, apply median imputation with 1 click, and download clean data.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-12",
    "title": "WasmBI: In-Browser Parquet & DuckDB Analytics Dashboard",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Business analysts cannot run SQL queries on 500MB Parquet files without spinning up expensive cloud databases.",
    "problemStatement": "Business analysts cannot run SQL queries on 500MB Parquet files without spinning up expensive cloud databases.",
    "solution": "A zero-cloud business intelligence dashboard running DuckDB in WebAssembly directly in the client browser.",
    "proposedSolution": "A zero-cloud business intelligence dashboard running DuckDB in WebAssembly directly in the client browser.",
    "realWorldUseCase": "Financial analyst analyzing a 200MB transaction Parquet file on an airplane.",
    "targetAudience": "Financial analyst analyzing a 200MB transaction Parquet file on an airplane.",
    "mainFeatures": [
      "100% in-browser SQL querying via DuckDB-Wasm",
      "Direct drag-and-drop Parquet and CSV file ingestion",
      "Interactive SQL query console with autocomplete",
      "Dynamic chart builder (Bar, Line, Pivot Table, Scatter)"
    ],
    "features": [
      "100% in-browser SQL querying via DuckDB-Wasm",
      "Direct drag-and-drop Parquet and CSV file ingestion",
      "Interactive SQL query console with autocomplete",
      "Dynamic chart builder (Bar, Line, Pivot Table, Scatter)"
    ],
    "frontend": "React, DuckDB-Wasm, Tailwind",
    "backend": "Client-Side (Wasm)",
    "database": "None (Browser Memory)",
    "otherTech": "DuckDB-Wasm, Plotly.js",
    "techStack": [
      "React",
      "DuckDB",
      "Wasm",
      "Plotly.js"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Processes 10 million rows in under 200ms using vectorized SIMD WebAssembly without sending 1 byte to a server.",
    "roadmap": [
      "DuckDB-Wasm initialization and virtual file system setup",
      "Monaco SQL editor with schema table introspection",
      "Fast query execution engine and result table pagination",
      "Plotly chart builder bound to SQL query results"
    ],
    "extensions": [
      "Dashboard layout save/load as JSON",
      "Export query results to Parquet or Excel"
    ],
    "mvpScope": "Drag and drop a 50MB Parquet file, run 'SELECT category, SUM(revenue) GROUP BY 1', and view instant charts.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-data-13",
    "title": "BoxOfficeIQ: Movie Success & Revenue Prediction Model",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Film students and indie producers struggle to gauge commercial viability of film ideas.",
    "problemStatement": "Film students and indie producers struggle to gauge commercial viability of film ideas.",
    "solution": "A machine learning model predicting box office revenue and IMDb ratings from genre, budget, and release date.",
    "proposedSolution": "A machine learning model predicting box office revenue and IMDb ratings from genre, budget, and release date.",
    "realWorldUseCase": "Film student testing how shifting a release date from January to July impacts projected ticket sales.",
    "targetAudience": "Film student testing how shifting a release date from January to July impacts projected ticket sales.",
    "mainFeatures": [
      "TMDB movie metadata historical database",
      "Feature engineering (Budget, Genre combination, Star power, Season)",
      "Gradient Boosting regression model predicting opening weekend gross",
      "Interactive scenario simulator: adjust budget and test release months"
    ],
    "features": [
      "TMDB movie metadata historical database",
      "Feature engineering (Budget, Genre combination, Star power, Season)",
      "Gradient Boosting regression model predicting opening weekend gross",
      "Interactive scenario simulator: adjust budget and test release months"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI, Scikit-Learn, XGBoost",
    "database": "PostgreSQL / SQLite",
    "otherTech": "TMDB API, XGBoost",
    "techStack": [
      "React",
      "FastAPI",
      "XGBoost",
      "Recharts"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Visualizes the seasonal impact factor: how horror movies peak in October while blockbusters surge in July.",
    "roadmap": [
      "TMDB historical movie dataset scraper and cleaner",
      "Feature correlation and regression model training",
      "Interactive movie parameter configuration sliders",
      "Predicted box office revenue breakdown chart"
    ],
    "extensions": [
      "Cast star-power metric calculator using historical averages",
      "Sentiment analysis of movie trailer YouTube comments"
    ],
    "mvpScope": "Configure a $15M budget Sci-Fi movie releasing in October; view predicted $28M box office gross with confidence intervals.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-14",
    "title": "FraudShield: Credit Card Fraud Detection Pipeline",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Credit card fraud costs banks $30 billion annually, with fraudulent transactions hiding in 99.9% normal data.",
    "problemStatement": "Credit card fraud costs banks $30 billion annually, with fraudulent transactions hiding in 99.9% normal data.",
    "solution": "A fraud detection pipeline handling severe class imbalance using SMOTE and precision-recall tuning.",
    "proposedSolution": "A fraud detection pipeline handling severe class imbalance using SMOTE and precision-recall tuning.",
    "realWorldUseCase": "Fintech developer evaluating how decision thresholds affect false positive fraud declines.",
    "targetAudience": "Fintech developer evaluating how decision thresholds affect false positive fraud declines.",
    "mainFeatures": [
      "Extreme class imbalance handling (SMOTE & Random Under-Sampling)",
      "Precision-Recall curve optimizer (balancing fraud caught vs annoyed users)",
      "Real-time transaction risk scoring API endpoint (<50ms latency)",
      "Feature contribution inspector explaining why a card was flagged"
    ],
    "features": [
      "Extreme class imbalance handling (SMOTE & Random Under-Sampling)",
      "Precision-Recall curve optimizer (balancing fraud caught vs annoyed users)",
      "Real-time transaction risk scoring API endpoint (<50ms latency)",
      "Feature contribution inspector explaining why a card was flagged"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python FastAPI, Scikit-Learn, Imbalanced-Learn",
    "database": "PostgreSQL, Redis",
    "otherTech": "Scikit-Learn, Imbalanced-Learn",
    "techStack": [
      "React",
      "FastAPI",
      "Scikit-Learn",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Includes an interactive financial threshold slider calculating dollars saved vs legitimate customers declined.",
    "roadmap": [
      "Kaggle credit card fraud dataset ingestion",
      "SMOTE oversampling and Random Forest model training",
      "Interactive threshold slider adjusting Precision vs Recall",
      "Live transaction test simulator with risk badge"
    ],
    "extensions": [
      "Geographic velocity anomaly detector (transactions 500 miles apart in 10 minutes)",
      "Device fingerprinting integration"
    ],
    "mvpScope": "Submit a simulated $2,500 foreign transaction at 3:00 AM; watch the model flag it as 94% fraud probability.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-15",
    "title": "PropVal: Real Estate Geospatial Price Estimator",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Homebuyers find generic Zillow estimates inaccurate because they ignore nearby transit, parks, and school quality.",
    "problemStatement": "Homebuyers find generic Zillow estimates inaccurate because they ignore nearby transit, parks, and school quality.",
    "solution": "A geospatial valuation model incorporating distance to transit, school ratings, and historical sales.",
    "proposedSolution": "A geospatial valuation model incorporating distance to transit, school ratings, and historical sales.",
    "realWorldUseCase": "First-time homebuyer comparing real market value of two suburban homes.",
    "targetAudience": "First-time homebuyer comparing real market value of two suburban homes.",
    "mainFeatures": [
      "OpenStreetMap transit and park distance calculation",
      "GreatSchools rating integration and geospatial neighborhood clustering",
      "LightGBM price prediction model with feature contribution breakdown",
      "Interactive map with price-per-square-foot neighborhood heatmaps"
    ],
    "features": [
      "OpenStreetMap transit and park distance calculation",
      "GreatSchools rating integration and geospatial neighborhood clustering",
      "LightGBM price prediction model with feature contribution breakdown",
      "Interactive map with price-per-square-foot neighborhood heatmaps"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Python FastAPI, LightGBM, GeoPandas",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, GeoPandas",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Shows the exact dollar contribution of each feature: 'Proximity to metro adds $32,000 to estimated value'.",
    "roadmap": [
      "Mapbox interactive property search and pin placer",
      "GeoPandas spatial distance calculation module",
      "LightGBM valuation model with SHAP explanations",
      "Comparable sales nearby property table"
    ],
    "extensions": [
      "Mortgage monthly payment and property tax calculator",
      "Historical neighborhood gentrification price trend chart"
    ],
    "mvpScope": "Drop a pin on a house location; view estimated valuation with a breakdown showing transit proximity bonus.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-16",
    "title": "CohortLTV: SaaS Cohort Retention & Lifetime Value Visualizer",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Founders misjudge startup health by looking at aggregate revenue rather than cohort retention decays.",
    "problemStatement": "Founders misjudge startup health by looking at aggregate revenue rather than cohort retention decays.",
    "solution": "A SaaS metrics visualizer rendering triangular cohort retention heatmaps and LTV/CAC ratios.",
    "proposedSolution": "A SaaS metrics visualizer rendering triangular cohort retention heatmaps and LTV/CAC ratios.",
    "realWorldUseCase": "Startup founder analyzing whether customers acquired in January churn faster than March cohorts.",
    "targetAudience": "Startup founder analyzing whether customers acquired in January churn faster than March cohorts.",
    "mainFeatures": [
      "Triangular cohort retention heatmap visualizer (Months 1 through 12)",
      "Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC) metrics",
      "Net Revenue Retention (NRR) and logo churn rates",
      "CSV customer subscription event importer (Stripe compatible)"
    ],
    "features": [
      "Triangular cohort retention heatmap visualizer (Months 1 through 12)",
      "Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC) metrics",
      "Net Revenue Retention (NRR) and logo churn rates",
      "CSV customer subscription event importer (Stripe compatible)"
    ],
    "frontend": "React, Tailwind, D3.js",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "D3.js, PapaParse",
    "techStack": [
      "React",
      "D3.js",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Renders the standard venture capital triangular cohort retention matrix with color-graded percentage cells.",
    "roadmap": [
      "Stripe-compatible CSV subscription upload parser",
      "Cohort grouping and retention calculation algorithm",
      "D3.js interactive triangular heatmap table",
      "LTV and Net Revenue Retention summary cards"
    ],
    "extensions": [
      "Revenue churn vs user churn comparison toggle",
      "Export presentation-ready PNG slides for investors"
    ],
    "mvpScope": "Upload customer subscription CSV and view an immediate color-graded triangular cohort retention matrix.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-17",
    "title": "FunnelFlow: E-Commerce Conversion Funnel & Sankey Visualizer",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "E-commerce stores lose 70% of potential buyers at checkout without knowing where customers drop off.",
    "problemStatement": "E-commerce stores lose 70% of potential buyers at checkout without knowing where customers drop off.",
    "solution": "A visual conversion funnel mapping user drop-offs between Landing, Product, Cart, and Purchase with Sankey flows.",
    "proposedSolution": "A visual conversion funnel mapping user drop-offs between Landing, Product, Cart, and Purchase with Sankey flows.",
    "realWorldUseCase": "Growth marketer identifying that a broken shipping calculator causes 40% of cart abandonment.",
    "targetAudience": "Growth marketer identifying that a broken shipping calculator causes 40% of cart abandonment.",
    "mainFeatures": [
      "Multi-step conversion funnel builder",
      "Interactive Sankey diagram visualizing alternative user exit paths",
      "Segment comparison (Mobile vs Desktop, Organic vs Paid ads)",
      "Revenue impact calculator: 'Fixing checkout step 2 recovers $14,000/mo'"
    ],
    "features": [
      "Multi-step conversion funnel builder",
      "Interactive Sankey diagram visualizing alternative user exit paths",
      "Segment comparison (Mobile vs Desktop, Organic vs Paid ads)",
      "Revenue impact calculator: 'Fixing checkout step 2 recovers $14,000/mo'"
    ],
    "frontend": "React, D3.js / Recharts, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "D3-sankey, Lucide React",
    "techStack": [
      "React",
      "D3.js",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Interactive Sankey diagram showing where dropping-off users go instead of completing checkout.",
    "roadmap": [
      "Funnel step configuration builder",
      "D3-sankey flow diagram generator",
      "Drop-off percentage and financial loss calculation cards",
      "Device and channel segment breakdown filters"
    ],
    "extensions": [
      "A/B test statistical significance calculator on funnel steps",
      "Exportable growth recommendation report"
    ],
    "mvpScope": "Create a 4-step e-commerce funnel, view Sankey diagram, and click the cart step to see mobile drop-off rate.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-18",
    "title": "GenreSonic: Audio Acoustic Feature Extractor & Genre Classifier",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Music producers and DJ platforms need automated ways to classify musical tempo, key, and mood.",
    "problemStatement": "Music producers and DJ platforms need automated ways to classify musical tempo, key, and mood.",
    "solution": "An audio feature visualizer that analyzes uploaded MP3s to extract BPM, key, danceability, and genre.",
    "proposedSolution": "An audio feature visualizer that analyzes uploaded MP3s to extract BPM, key, danceability, and genre.",
    "realWorldUseCase": "Music student analyzing why a jazz track feels complex compared to a pop song.",
    "targetAudience": "Music student analyzing why a jazz track feels complex compared to a pop song.",
    "mainFeatures": [
      "Client-side Web Audio API FFT audio spectrum extraction",
      "BPM tempo detection and musical key identification (Camelot Wheel)",
      "Danceability, acousticness, and energy feature radar charts",
      "Convolutional neural network audio genre classifier"
    ],
    "features": [
      "Client-side Web Audio API FFT audio spectrum extraction",
      "BPM tempo detection and musical key identification (Camelot Wheel)",
      "Danceability, acousticness, and energy feature radar charts",
      "Convolutional neural network audio genre classifier"
    ],
    "frontend": "React, Wavesurfer.js, Tailwind, Recharts",
    "backend": "FastAPI, Librosa, PyTorch",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Wavesurfer.js, Librosa",
    "techStack": [
      "React",
      "FastAPI",
      "Librosa",
      "Wavesurfer.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Visualizes the musical key on the DJ Camelot Harmonic Mixing Wheel for effortless harmonic transitions.",
    "roadmap": [
      "Wavesurfer.js audio waveform player with spectrogram toggle",
      "Librosa audio feature extraction pipeline (BPM, Key, Spectral Centroid)",
      "Feature radar chart comparing against genre averages",
      "Camelot Harmonic Mixing Wheel visualizer"
    ],
    "extensions": [
      "Automated playlist transition compatibility matcher",
      "Export ID3 audio tags with verified BPM and Key"
    ],
    "mvpScope": "Upload an MP3 song, view detected 128 BPM and A Minor key, and see an audio feature radar chart.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-data-19",
    "title": "BayesAB: Sequential Bayesian A/B Testing Experiment Engine",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Marketers make poor decisions with frequentist p-values by stopping tests early (peeking problem).",
    "problemStatement": "Marketers make poor decisions with frequentist p-values by stopping tests early (peeking problem).",
    "solution": "An A/B testing calculator using Bayesian sequential analysis to calculate true probability to beat control.",
    "proposedSolution": "An A/B testing calculator using Bayesian sequential analysis to calculate true probability to beat control.",
    "realWorldUseCase": "Growth engineer testing whether a purple signup button outperforms a green button.",
    "targetAudience": "Growth engineer testing whether a purple signup button outperforms a green button.",
    "mainFeatures": [
      "Bayesian Beta-Binomial conversion rate probability distributions",
      "Expected loss and 'Probability to be Best' calculation",
      "Interactive prior distribution selector (Uninformative vs Skeptical)",
      "Sample size and sequential peeking simulation charts"
    ],
    "features": [
      "Bayesian Beta-Binomial conversion rate probability distributions",
      "Expected loss and 'Probability to be Best' calculation",
      "Interactive prior distribution selector (Uninformative vs Skeptical)",
      "Sample size and sequential peeking simulation charts"
    ],
    "frontend": "React, Tailwind, Plotly.js",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Plotly.js, SciPy logic",
    "techStack": [
      "React",
      "Plotly.js",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Immune to the p-hacking 'peeking problem'; provides clear business language like '94% chance B is better'.",
    "roadmap": [
      "Conversion rate input form for Variant A and Variant B",
      "Bayesian posterior distribution curve generator with Plotly",
      "Expected loss calculation and clear decision recommendation card",
      "Interactive sample size simulator"
    ],
    "extensions": [
      "Multi-armed bandit simulation mode (Thompson Sampling)",
      "Multi-variant A/B/C/D test comparison"
    ],
    "mvpScope": "Enter 100 conversions from 1,000 visitors on A vs 125 on B; view overlapping Bayesian posterior bell curves.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-20",
    "title": "GitVelocity: Open-Source Repository Health & Contributor Analytics",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Engineering leaders struggle to measure code review velocity and bus-factor risk in open-source projects.",
    "problemStatement": "Engineering leaders struggle to measure code review velocity and bus-factor risk in open-source projects.",
    "solution": "A GitHub repository analytics dashboard measuring PR review time, issue response lag, and contributor bus-factor.",
    "proposedSolution": "A GitHub repository analytics dashboard measuring PR review time, issue response lag, and contributor bus-factor.",
    "realWorldUseCase": "Engineering manager evaluating whether an open-source library is actively maintained or abandoned.",
    "targetAudience": "Engineering manager evaluating whether an open-source library is actively maintained or abandoned.",
    "mainFeatures": [
      "GitHub REST/GraphQL API commit and PR history ingestion",
      "PR cycle time and review response latency metrics",
      "Bus factor risk score (concentration of commits in top 1 contributor)",
      "Contributor geographic time-zone distribution map"
    ],
    "features": [
      "GitHub REST/GraphQL API commit and PR history ingestion",
      "PR cycle time and review response latency metrics",
      "Bus factor risk score (concentration of commits in top 1 contributor)",
      "Contributor geographic time-zone distribution map"
    ],
    "frontend": "Next.js 14, Tailwind, Recharts",
    "backend": "Next.js Route Handlers",
    "database": "PostgreSQL / Supabase",
    "otherTech": "GitHub API, Recharts",
    "techStack": [
      "Next.js",
      "GitHub API",
      "Recharts",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Calculates the 'Bus Factor'\u2014revealing if a critical open-source project depends on a single overwhelmed maintainer.",
    "roadmap": [
      "GitHub repo URL input and GraphQL data fetcher",
      "PR cycle time and issue resolution histogram charts",
      "Contributor commit distribution and bus factor calculator",
      "Maintainer health grade scorecard (A to F)"
    ],
    "extensions": [
      "Automated monthly repository health digest email",
      "Comparison mode between two competing libraries"
    ],
    "mvpScope": "Type 'facebook/react' and view average PR review turnaround time, top contributor distribution, and health score.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-21",
    "title": "InventoryAI: Supply Chain Reorder Point & Stockout Predictor",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Retailers lose sales to stockouts or waste capital holding excess inventory during seasonal demand shifts.",
    "problemStatement": "Retailers lose sales to stockouts or waste capital holding excess inventory during seasonal demand shifts.",
    "solution": "A supply chain forecasting tool calculating economic order quantity (EOQ) and probabilistic stockout risk.",
    "proposedSolution": "A supply chain forecasting tool calculating economic order quantity (EOQ) and probabilistic stockout risk.",
    "realWorldUseCase": "Small retail business owner managing inventory for 50 SKU products.",
    "targetAudience": "Small retail business owner managing inventory for 50 SKU products.",
    "mainFeatures": [
      "Historical sales time-series ingestion and seasonality decomposition",
      "Probabilistic lead-time demand distribution model",
      "Safety stock and Economic Order Quantity (EOQ) calculator",
      "Priority restock alert table ranking products by days-until-stockout"
    ],
    "features": [
      "Historical sales time-series ingestion and seasonality decomposition",
      "Probabilistic lead-time demand distribution model",
      "Safety stock and Economic Order Quantity (EOQ) calculator",
      "Priority restock alert table ranking products by days-until-stockout"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI, Statsmodels, Pandas",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Statsmodels, Lucide React",
    "techStack": [
      "React",
      "FastAPI",
      "Pandas",
      "Recharts"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Calculates safety stock based on supplier delivery delay variance rather than fixed guess-work.",
    "roadmap": [
      "Product SKU inventory table with current stock levels",
      "Demand forecasting model with lead-time standard deviations",
      "EOQ and reorder point calculation cards",
      "Automated purchase order draft generator"
    ],
    "extensions": [
      "Multi-warehouse inventory transfer recommendations",
      "Supplier lead-time reliability scorecard"
    ],
    "mvpScope": "View an inventory list; see product SKU #104 flagged with 'Stockout in 4 days' and recommended reorder quantity.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-22",
    "title": "CiteGraph: Academic Citation Network & Impact Explorer",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Researchers waste days tracing bibliographic footnotes to find seminal breakthrough papers in a field.",
    "problemStatement": "Researchers waste days tracing bibliographic footnotes to find seminal breakthrough papers in a field.",
    "solution": "An interactive citation network graph connecting papers, co-citations, and author impact over time.",
    "proposedSolution": "An interactive citation network graph connecting papers, co-citations, and author impact over time.",
    "realWorldUseCase": "PhD student exploring foundational papers on Transformer neural networks.",
    "targetAudience": "PhD student exploring foundational papers on Transformer neural networks.",
    "mainFeatures": [
      "Semantic Scholar / Crossref academic API ingestion",
      "Interactive citation node-edge graph with paper sizing by citation count",
      "Chronological landmark paper timeline discovery",
      "BibTeX bibliography bundle exporter"
    ],
    "features": [
      "Semantic Scholar / Crossref academic API ingestion",
      "Interactive citation node-edge graph with paper sizing by citation count",
      "Chronological landmark paper timeline discovery",
      "BibTeX bibliography bundle exporter"
    ],
    "frontend": "React, D3.js / Cytoscape.js, Tailwind",
    "backend": "FastAPI, NetworkX",
    "database": "PostgreSQL / Neo4j",
    "otherTech": "Cytoscape.js, Semantic Scholar API",
    "techStack": [
      "React",
      "Cytoscape.js",
      "FastAPI",
      "D3.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Visualizes citation velocity to surface emerging rising-star papers published within the last 12 months.",
    "roadmap": [
      "Semantic Scholar API paper search and citation fetcher",
      "Cytoscape citation network graph with community clustering",
      "Paper abstract drawer with direct PDF links",
      "Exportable BibTeX citation manager"
    ],
    "extensions": [
      "Co-author collaboration network visualizer",
      "Topic research trend keyword growth chart"
    ],
    "mvpScope": "Search 'Attention Is All You Need' and explore an interactive visual web of all foundational papers citing it.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-23",
    "title": "SkillTrend: Tech Job Market Skill Demand & Salary Tracker",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Computer science students don't know which technologies (e.g. Rust, Go, Kubernetes) command the highest demand.",
    "problemStatement": "Computer science students don't know which technologies (e.g. Rust, Go, Kubernetes) command the highest demand.",
    "solution": "A job market analytics dashboard analyzing 50,000 public tech job postings for skill frequency and salaries.",
    "proposedSolution": "A job market analytics dashboard analyzing 50,000 public tech job postings for skill frequency and salaries.",
    "realWorldUseCase": "Student choosing which backend language to specialize in for maximum job opportunities.",
    "targetAudience": "Student choosing which backend language to specialize in for maximum job opportunities.",
    "mainFeatures": [
      "Public job posting skill tag extraction across tech hubs",
      "Skill co-occurrence matrix (e.g. Python frequently paired with Docker)",
      "Salary distribution box plots by primary technology",
      "Quarter-over-quarter tech popularity growth index"
    ],
    "features": [
      "Public job posting skill tag extraction across tech hubs",
      "Skill co-occurrence matrix (e.g. Python frequently paired with Docker)",
      "Salary distribution box plots by primary technology",
      "Quarter-over-quarter tech popularity growth index"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python FastAPI, Scikit-Learn",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Recharts"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Reveals high-value skill pairings: 'Pairing React with TypeScript increases median job salary by 18%'.",
    "roadmap": [
      "Job market dataset scraper and skill entity extractor",
      "Interactive skill search bar with salary box plot visualizer",
      "Skill co-occurrence chord diagram",
      "Trending fast-growing skills leaderboard"
    ],
    "extensions": [
      "Regional tech hub cost-of-living salary normalizer",
      "Personal resume skill checker against top postings"
    ],
    "mvpScope": "Search 'TypeScript' to see its 3-year market demand growth curve and most common paired backend frameworks.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-24",
    "title": "BasketAffinity: Market Basket Analysis & Product Affinity Engine",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "Supermarkets place peanut butter next to jelly because market basket algorithms prove they are bought together.",
    "problemStatement": "Supermarkets place peanut butter next to jelly because market basket algorithms prove they are bought together.",
    "solution": "An e-commerce product association rule mining tool demonstrating the Apriori and FP-Growth algorithms.",
    "proposedSolution": "An e-commerce product association rule mining tool demonstrating the Apriori and FP-Growth algorithms.",
    "realWorldUseCase": "Online store owner configuring 'Frequently Bought Together' checkout bundle recommendations.",
    "targetAudience": "Online store owner configuring 'Frequently Bought Together' checkout bundle recommendations.",
    "mainFeatures": [
      "Transaction transaction database CSV ingestion",
      "Apriori / FP-Growth association rule mining engine",
      "Support, Confidence, and Lift metric calculators",
      "Interactive network graph of product association clusters"
    ],
    "features": [
      "Transaction transaction database CSV ingestion",
      "Apriori / FP-Growth association rule mining engine",
      "Support, Confidence, and Lift metric calculators",
      "Interactive network graph of product association clusters"
    ],
    "frontend": "React, D3.js, Tailwind",
    "backend": "Python FastAPI, mlxtend, Pandas",
    "database": "SQLite / DuckDB",
    "otherTech": "mlxtend, D3.js",
    "techStack": [
      "React",
      "FastAPI",
      "mlxtend",
      "D3.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Calculates Lift metrics to prove items are genuinely correlated rather than just individually popular.",
    "roadmap": [
      "Transaction item-list CSV parser",
      "FP-Growth association rule generation pipeline",
      "Interactive Lift and Confidence threshold slider controls",
      "D3.js force-directed graph of product bundle affinities"
    ],
    "extensions": [
      "Automated dynamic discount bundle generator",
      "Seasonal basket composition shift tracker"
    ],
    "mvpScope": "Upload 1,000 grocery receipts, set Lift > 2.0, and view an interactive graph linking coffee to oat milk.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-data-25",
    "title": "ClimateGlobe: Interactive 3D Global Climate Anomaly Globe",
    "domain": "Data Science & Analytics",
    "category": "Data Science & Analytics",
    "problem": "People struggle to comprehend abstract +1.5\u00b0C global warming statistics without interactive visual context.",
    "problemStatement": "People struggle to comprehend abstract +1.5\u00b0C global warming statistics without interactive visual context.",
    "solution": "A 3D interactive globe visualizing 140 years of NASA GISTEMP temperature anomalies across planetary coordinates.",
    "proposedSolution": "A 3D interactive globe visualizing 140 years of NASA GISTEMP temperature anomalies across planetary coordinates.",
    "realWorldUseCase": "Science educator presenting global warming historical trends to a high school assembly.",
    "targetAudience": "Science educator presenting global warming historical trends to a high school assembly.",
    "mainFeatures": [
      "NASA GISTEMP gridded temperature anomaly dataset ingestion",
      "Interactive 3D WebGL globe with dynamic thermal shaders",
      "Time-lapse timeline scrubber spanning 1880 to present day",
      "Regional temperature anomaly time-series drilldown charts"
    ],
    "features": [
      "NASA GISTEMP gridded temperature anomaly dataset ingestion",
      "Interactive 3D WebGL globe with dynamic thermal shaders",
      "Time-lapse timeline scrubber spanning 1880 to present day",
      "Regional temperature anomaly time-series drilldown charts"
    ],
    "frontend": "React, Three.js, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "None (Pre-processed JSON)",
    "otherTech": "Three.js, D3-geo",
    "techStack": [
      "React",
      "Three.js",
      "WebGL",
      "Recharts"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Allows users to scrub through 140 years of temperature data and watch the Arctic shift into intense crimson red.",
    "roadmap": [
      "Three.js interactive 3D textured globe with rotation and zoom",
      "NASA temperature anomaly coordinate grid shader",
      "Historical year scrubber with play/pause animation",
      "Regional coordinate click inspector with historical line chart"
    ],
    "extensions": [
      "Sea ice extent annual animation overlay",
      "Extreme weather events historical marker layer"
    ],
    "mvpScope": "Drag the year slider from 1910 to 2024 and watch global temperature anomalies shift across continents on a 3D globe.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-env-01",
    "title": "CarbonLedger: Bank Transaction Carbon Footprint Calculator",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Individuals want to reduce their environmental impact but have no idea which daily purchases generate emissions.",
    "problemStatement": "Individuals want to reduce their environmental impact but have no idea which daily purchases generate emissions.",
    "solution": "A personal finance tool estimating carbon emissions in kg CO2e from categorized bank transactions.",
    "proposedSolution": "A personal finance tool estimating carbon emissions in kg CO2e from categorized bank transactions.",
    "realWorldUseCase": "Eco-conscious consumer evaluating the carbon cost of flights vs grocery shopping.",
    "targetAudience": "Eco-conscious consumer evaluating the carbon cost of flights vs grocery shopping.",
    "mainFeatures": [
      "Bank transaction CSV or Plaid category ingestion",
      "EPA / Climatiq carbon emission factors per dollar spent",
      "Monthly carbon footprint breakdown by category (Transport, Food, Energy)",
      "Actionable swap recommendations: 'Swapping 2 beef meals saves 42kg CO2e'"
    ],
    "features": [
      "Bank transaction CSV or Plaid category ingestion",
      "EPA / Climatiq carbon emission factors per dollar spent",
      "Monthly carbon footprint breakdown by category (Transport, Food, Energy)",
      "Actionable swap recommendations: 'Swapping 2 beef meals saves 42kg CO2e'"
    ],
    "frontend": "React 19, Tailwind, Recharts",
    "backend": "Node.js, Express",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Climatiq API, Recharts",
    "techStack": [
      "React",
      "Node.js",
      "Climatiq",
      "Recharts"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Pulls official emission factors from the Climatiq environmental database for accurate scientific calculations.",
    "roadmap": [
      "Transaction CSV uploader with category auto-mapper",
      "Climatiq carbon API calculation pipeline",
      "Monthly emissions donut chart with national average comparison",
      "Eco-friendly lifestyle swap recommendations card"
    ],
    "extensions": [
      "Certified carbon offset purchase integration",
      "Neighborhood sustainability leaderboard"
    ],
    "mvpScope": "Upload a bank statement CSV and view a colorful donut chart showing your monthly 480 kg CO2e footprint.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-02",
    "title": "WasteVision: Edge-AI Trash Sorting & Recycling Assistant",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Consumers toss recyclables into garbage bins because complex recycling numbers (PETE 1, HDPE 2) are confusing.",
    "problemStatement": "Consumers toss recyclables into garbage bins because complex recycling numbers (PETE 1, HDPE 2) are confusing.",
    "solution": "An edge computer vision camera app classifying waste items into Compost, Paper, Plastic, or Landfill.",
    "proposedSolution": "An edge computer vision camera app classifying waste items into Compost, Paper, Plastic, or Landfill.",
    "realWorldUseCase": "Student in a university dining hall wondering which bin an oily pizza box goes into.",
    "targetAudience": "Student in a university dining hall wondering which bin an oily pizza box goes into.",
    "mainFeatures": [
      "Webcam / smartphone photo waste classifier",
      "Local municipal recycling rule database by zip code",
      "Clear bin destination instruction with reasoning",
      "Gamified zero-waste streak and diverted plastic counter"
    ],
    "features": [
      "Webcam / smartphone photo waste classifier",
      "Local municipal recycling rule database by zip code",
      "Clear bin destination instruction with reasoning",
      "Gamified zero-waste streak and diverted plastic counter"
    ],
    "frontend": "React, TensorFlow.js, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "IndexedDB",
    "otherTech": "MobileNet, TensorFlow.js",
    "techStack": [
      "React",
      "TensorFlow.js",
      "Webcam API",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Accounts for local municipal zip codes\u2014what is recyclable in Seattle may be trash in Dallas.",
    "roadmap": [
      "TensorFlow.js pre-trained trash classifier running client-side",
      "Municipal recycling rules lookup table by zip code",
      "Instant color-coded bin recommendation UI (Green/Blue/Black)",
      "Waste diversion counter and eco-badge trophies"
    ],
    "extensions": [
      "Barcode scanner for packaged consumer goods",
      "Classroom waste audit tally tool for schools"
    ],
    "mvpScope": "Point webcam at an aluminum soda can; watch the screen flash blue: 'Recycle (Rinse first!)'.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-env-03",
    "title": "SolarShare: Peer-to-Peer Neighborhood Microgrid Ledger",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Homeowners with rooftop solar panels export surplus energy to the utility grid for pennies on the dollar.",
    "problemStatement": "Homeowners with rooftop solar panels export surplus energy to the utility grid for pennies on the dollar.",
    "solution": "A localized peer-to-peer microgrid platform allowing neighbors with solar panels to trade surplus kilowatt-hours.",
    "proposedSolution": "A localized peer-to-peer microgrid platform allowing neighbors with solar panels to trade surplus kilowatt-hours.",
    "realWorldUseCase": "Homeowner with solar selling surplus battery power to a neighbor charging an electric car.",
    "targetAudience": "Homeowner with solar selling surplus battery power to a neighbor charging an electric car.",
    "mainFeatures": [
      "Smart meter kWh production and consumption telemetry",
      "Peer-to-peer localized energy trading order book",
      "Dynamic pricing between utility buy rate and retail grid rate",
      "Virtual battery storage state-of-charge visualizer"
    ],
    "features": [
      "Smart meter kWh production and consumption telemetry",
      "Peer-to-peer localized energy trading order book",
      "Dynamic pricing between utility buy rate and retail grid rate",
      "Virtual battery storage state-of-charge visualizer"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js, Express, WebSockets",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "Recharts, Socket.io",
    "techStack": [
      "React",
      "Node.js",
      "WebSockets",
      "TimescaleDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Features a local double-auction market matching clean energy buyers and sellers at fair mid-market prices.",
    "roadmap": [
      "Simulated smart meter telemetry streaming generator",
      "Energy double-auction matching engine",
      "Interactive neighborhood energy flow map",
      "Monthly savings and clean energy impact statements"
    ],
    "extensions": [
      "Blockchain smart contract settlement simulator",
      "Grid storm resilience emergency reserve lock"
    ],
    "mvpScope": "Watch a live dashboard match 12 kWh of surplus solar power from House A directly to House B next door.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-env-04",
    "title": "FoodSaver: Local Bakery & Grocer Surplus Marketplace",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Bakeries and grocery stores throw out tons of fresh bread and produce daily while food insecurity rises.",
    "problemStatement": "Bakeries and grocery stores throw out tons of fresh bread and produce daily while food insecurity rises.",
    "solution": "A marketplace app connecting local food businesses with consumers to buy end-of-day surplus bags at a 70% discount.",
    "proposedSolution": "A marketplace app connecting local food businesses with consumers to buy end-of-day surplus bags at a 70% discount.",
    "realWorldUseCase": "University student picking up a $5 mystery bag of gourmet pastries worth $20 at 8:00 PM.",
    "targetAudience": "University student picking up a $5 mystery bag of gourmet pastries worth $20 at 8:00 PM.",
    "mainFeatures": [
      "Store surplus bag listing with pickup time windows",
      "Interactive local map with available surplus counts",
      "Instant reservation and digital pickup voucher pass",
      "Total food waste diverted counter (kg food and CO2 saved)"
    ],
    "features": [
      "Store surplus bag listing with pickup time windows",
      "Interactive local map with available surplus counts",
      "Instant reservation and digital pickup voucher pass",
      "Total food waste diverted counter (kg food and CO2 saved)"
    ],
    "frontend": "Next.js 14, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Stripe",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Mapbox GL, Stripe API",
    "techStack": [
      "Next.js",
      "Node.js",
      "Mapbox",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Inspired by Too Good To Go; saves businesses disposal fees while providing affordable food to students.",
    "roadmap": [
      "Merchant portal to post surprise bags with pickup hours",
      "Consumer map view with location pins and remaining bag count",
      "Stripe checkout and digital claim ticket with countdown timer",
      "Merchant one-tap redemption confirmation scanner"
    ],
    "extensions": [
      "Food bank direct donation routing for unsold bags",
      "Push notifications when favorite bakeries post bags"
    ],
    "mvpScope": "Find a nearby bakery on the map, reserve a $4 surplus bread bag, and show the digital claim ticket.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-env-05",
    "title": "TreeCanopy: Urban Heat Mitigation & Green Corridor Planner",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "City councils lack visual tools to plan where tree planting generates the greatest cooling benefits.",
    "problemStatement": "City councils lack visual tools to plan where tree planting generates the greatest cooling benefits.",
    "solution": "A planning visualizer analyzing satellite tree canopy coverage and simulating neighborhood cooling impacts.",
    "proposedSolution": "A planning visualizer analyzing satellite tree canopy coverage and simulating neighborhood cooling impacts.",
    "realWorldUseCase": "City council member prioritizing 1,000 grant-funded street trees across municipal districts.",
    "targetAudience": "City council member prioritizing 1,000 grant-funded street trees across municipal districts.",
    "mainFeatures": [
      "Satellite vegetation index (NDVI) overlay",
      "Neighborhood heat vulnerability index calculation",
      "Interactive tree planting drag-and-drop simulation tool",
      "Estimated stormwater absorption and carbon sequestration report"
    ],
    "features": [
      "Satellite vegetation index (NDVI) overlay",
      "Neighborhood heat vulnerability index calculation",
      "Interactive tree planting drag-and-drop simulation tool",
      "Estimated stormwater absorption and carbon sequestration report"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Python FastAPI, GeoPandas",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, GeoPandas",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Calculates both temperature reduction and stormwater runoff absorption gallons per planted tree species.",
    "roadmap": [
      "Mapbox tile layer integration with NDVI canopy data",
      "Socioeconomic equity and heat vulnerability scoring module",
      "Interactive tree placement tool with species selection (Oak, Maple)",
      "Environmental impact report generator"
    ],
    "extensions": [
      "3D virtual street-level preview of mature tree growth",
      "Volunteer community tree watering schedule coordinator"
    ],
    "mvpScope": "Place 50 virtual oak trees along a downtown boulevard and view projected 3.5\u00b0F cooling and stormwater savings.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-06",
    "title": "LeakDetect: Smart Water Meter Acoustic Leak Sentinel",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Hidden toilet and pipe leaks waste 10,000 gallons per household annually before high bills arrive.",
    "problemStatement": "Hidden toilet and pipe leaks waste 10,000 gallons per household annually before high bills arrive.",
    "solution": "An acoustic and flow anomaly sentinel alerting homeowners to continuous micro-leaks within 2 hours.",
    "proposedSolution": "An acoustic and flow anomaly sentinel alerting homeowners to continuous micro-leaks within 2 hours.",
    "realWorldUseCase": "Homeowner notified of a running toilet valve while away on vacation.",
    "targetAudience": "Homeowner notified of a running toilet valve while away on vacation.",
    "mainFeatures": [
      "Smart water meter pulse flow rate ingestion",
      "Continuous trickle and anomalous baseline leak detector",
      "Estimated cost impact calculator in dollars per day",
      "Step-by-step DIY leak diagnosis guide (Flapper valve, faucet)"
    ],
    "features": [
      "Smart water meter pulse flow rate ingestion",
      "Continuous trickle and anomalous baseline leak detector",
      "Estimated cost impact calculator in dollars per day",
      "Step-by-step DIY leak diagnosis guide (Flapper valve, faucet)"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "TimescaleDB, PostgreSQL",
    "otherTech": "Recharts, Twilio API",
    "techStack": [
      "React",
      "FastAPI",
      "TimescaleDB",
      "Twilio"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Detects constant micro-flows as small as 0.05 gallons per minute running during 3:00 AM sleep hours.",
    "roadmap": [
      "Simulated water flow rate telemetry streaming generator",
      "Baseline nighttime continuous flow anomaly algorithm",
      "Interactive hourly water consumption bar chart",
      "Automated SMS leak alert dispatcher with emergency shutoff guide"
    ],
    "extensions": [
      "Acoustic audio leak frequency classifier from mic",
      "Municipal water tier billing calculator"
    ],
    "mvpScope": "Simulate a 0.1 GPM toilet flapper leak; watch the system trigger an alert highlighting $45/month in wasted water.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-07",
    "title": "EWasteDrop: Electronic Waste Recycling & Material Recovery",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Consumers hoard old smartphones and lithium batteries in drawers because recycling drop-offs are unknown.",
    "problemStatement": "Consumers hoard old smartphones and lithium batteries in drawers because recycling drop-offs are unknown.",
    "solution": "A localized directory mapping certified e-waste drop-offs with a precious metal recovery calculator.",
    "proposedSolution": "A localized directory mapping certified e-waste drop-offs with a precious metal recovery calculator.",
    "realWorldUseCase": "Individual recycling 3 old laptops and learning they contain 0.6g of recoverable gold.",
    "targetAudience": "Individual recycling 3 old laptops and learning they contain 0.6g of recoverable gold.",
    "mainFeatures": [
      "Interactive certified e-waste recycler map (R2, e-Stewards)",
      "Precious metal recovery calculator (Gold, Copper, Lithium, Cobalt)",
      "Drop-off preparation checklist (Secure data wipe, battery safety)",
      "Gamified corporate and community e-waste collection drive organizer"
    ],
    "features": [
      "Interactive certified e-waste recycler map (R2, e-Stewards)",
      "Precious metal recovery calculator (Gold, Copper, Lithium, Cobalt)",
      "Drop-off preparation checklist (Secure data wipe, battery safety)",
      "Gamified corporate and community e-waste collection drive organizer"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / Supabase",
    "otherTech": "Mapbox GL, Lucide React",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Calculates exact grams of rare earth metals recovered per device to inspire responsible recycling.",
    "roadmap": [
      "Device type selector (iPhone, Laptop, CRT Monitor)",
      "Rare earth metal recovery algorithm and environmental equivalent badges",
      "Mapbox certified recycling center directory with filter by accepted items",
      "Data sanitization guide with 1-click DBAN links"
    ],
    "extensions": [
      "Community e-waste drive fundraising portal",
      "Mail-in prepaid recycling box shipping label generator"
    ],
    "mvpScope": "Select '2 iPhone 8s and 1 Dell Laptop'; view 0.4g gold recovered and nearest certified drop-off depot on map.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-08",
    "title": "EcoFashion: Sustainable Apparel Transparency Directory",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Fast fashion brands use vague greenwashing claims like 'eco-conscious' without third-party proof.",
    "problemStatement": "Fast fashion brands use vague greenwashing claims like 'eco-conscious' without third-party proof.",
    "solution": "A searchable fashion transparency directory grading clothing brands on labor ethics, water, and microplastics.",
    "proposedSolution": "A searchable fashion transparency directory grading clothing brands on labor ethics, water, and microplastics.",
    "realWorldUseCase": "Consumer shopping for a winter jacket checking brand supply chain sustainability scores.",
    "targetAudience": "Consumer shopping for a winter jacket checking brand supply chain sustainability scores.",
    "mainFeatures": [
      "Brand sustainability scorecard (Materials, Carbon, Labor ethics)",
      "Third-party certification filter (GOTS Organic, Fair Trade, B Corp)",
      "Material impact explainer (Recycled Wool vs Virgin Polyester)",
      "Sustainable alternative brand recommender"
    ],
    "features": [
      "Brand sustainability scorecard (Materials, Carbon, Labor ethics)",
      "Third-party certification filter (GOTS Organic, Fair Trade, B Corp)",
      "Material impact explainer (Recycled Wool vs Virgin Polyester)",
      "Sustainable alternative brand recommender"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Zod",
    "techStack": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Exposes greenwashing by rating brands strictly on verified third-party audits rather than marketing slogans.",
    "roadmap": [
      "Searchable directory of 200+ global clothing brands",
      "Multi-factor rating radar chart (Fair Labor, Water, Carbon, Circularity)",
      "Material composition database with microplastic risk tags",
      "One-click filter for certified Fair Trade brands"
    ],
    "extensions": [
      "Browser extension displaying brand rating on shopping sites",
      "Clothing swap community board"
    ],
    "mvpScope": "Search a major fast fashion brand; view 'D' rating breakdown and 3 ethical alternative recommendations.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-09",
    "title": "WildfireWatch: Satellite Fire Perimeter & Air Quality Radar",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Wildfires spread faster than official evacuation updates, leaving rural communities trapped.",
    "problemStatement": "Wildfires spread faster than official evacuation updates, leaving rural communities trapped.",
    "solution": "A real-time wildfire tracker aggregating NASA FIRMS thermal satellite hotspots and wind direction vectors.",
    "proposedSolution": "A real-time wildfire tracker aggregating NASA FIRMS thermal satellite hotspots and wind direction vectors.",
    "realWorldUseCase": "Rural resident monitoring a wildfire 15 miles away with shifting high winds.",
    "targetAudience": "Rural resident monitoring a wildfire 15 miles away with shifting high winds.",
    "mainFeatures": [
      "NASA FIRMS active satellite thermal hotspot ingestion",
      "NOAA wind direction and speed vector overlay on Mapbox",
      "EPA AirNow hyperlocal PM2.5 smoke plume heatmap",
      "Evacuation zone perimeter warnings with emergency route guidance"
    ],
    "features": [
      "NASA FIRMS active satellite thermal hotspot ingestion",
      "NOAA wind direction and speed vector overlay on Mapbox",
      "EPA AirNow hyperlocal PM2.5 smoke plume heatmap",
      "Evacuation zone perimeter warnings with emergency route guidance"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Python FastAPI, GeoPandas",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "NASA FIRMS API, Mapbox GL",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Projects 6-hour fire spread direction based on real-time NOAA wind vectors and fuel terrain slope.",
    "roadmap": [
      "NASA FIRMS MODIS/VIIRS thermal fire hotspot fetcher",
      "Mapbox satellite layer with animated wind particle vectors",
      "Wildfire perimeter polygon calculation and distance calculator",
      "Hyperlocal air quality PM2.5 smoke index drawer"
    ],
    "extensions": [
      "SMS wildfire proximity alert dispatcher",
      "Community shelter pet-friendly status tracker"
    ],
    "mvpScope": "View live active satellite fire hotspots with animated wind vector arrows showing smoke drift directions.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-env-10",
    "title": "OceanClean: Drone Plastic Cleanup Tracking & Beach Log",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Coastal cleanup organizations waste volunteer hours cleaning beaches that have minimal plastic accumulation.",
    "problemStatement": "Coastal cleanup organizations waste volunteer hours cleaning beaches that have minimal plastic accumulation.",
    "solution": "A crowdsourced marine debris mapping platform using drone imagery and volunteer beach audit logs.",
    "proposedSolution": "A crowdsourced marine debris mapping platform using drone imagery and volunteer beach audit logs.",
    "realWorldUseCase": "Conservation NGO organizing a 50-person Saturday beach cleanup drive.",
    "targetAudience": "Conservation NGO organizing a 50-person Saturday beach cleanup drive.",
    "mainFeatures": [
      "Beach plastic debris density heatmap",
      "Volunteer cleanup event organizer with RSVP and supply checklists",
      "Trash item classification log (Plastic bottles, Cigarette butts, Fishing nets)",
      "Historical debris trend charts for local ocean currents"
    ],
    "features": [
      "Beach plastic debris density heatmap",
      "Volunteer cleanup event organizer with RSVP and supply checklists",
      "Trash item classification log (Plastic bottles, Cigarette butts, Fishing nets)",
      "Historical debris trend charts for local ocean currents"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Mapbox GL, Recharts",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Identifies specific corporate packaging brands most frequently polluting local coastlines.",
    "roadmap": [
      "Mapbox coastal map with high-density trash report pins",
      "Cleanup event creation and volunteer sign-up system",
      "Standardized Ocean Conservancy debris item audit form",
      "Debris composition pie chart and brand audit scorecard"
    ],
    "extensions": [
      "Computer vision plastic bottle detector for drone photos",
      "Sponsor-a-beach corporate matching donation portal"
    ],
    "mvpScope": "Create a coastal cleanup event, log 150 plastic bottles collected, and view real-time beach cleanup progress.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-11",
    "title": "HomeAudit: Residential Energy Efficiency & Thermal Loss Simulator",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Homeowners pay $400/month in winter heating bills due to poor attic insulation and drafty windows.",
    "problemStatement": "Homeowners pay $400/month in winter heating bills due to poor attic insulation and drafty windows.",
    "solution": "An energy efficiency auditor calculating heat loss and estimating ROI for heat pumps and insulation.",
    "proposedSolution": "An energy efficiency auditor calculating heat loss and estimating ROI for heat pumps and insulation.",
    "realWorldUseCase": "Homeowner deciding whether upgrading attic insulation pays for itself in heating bill savings.",
    "targetAudience": "Homeowner deciding whether upgrading attic insulation pays for itself in heating bill savings.",
    "mainFeatures": [
      "Home square footage, window type, and heating fuel intake form",
      "Degree-day heat loss thermodynamic calculation engine",
      "Estimated annual energy savings in dollars and metric tons CO2",
      "Local government rebate and tax credit finder (Inflation Reduction Act)"
    ],
    "features": [
      "Home square footage, window type, and heating fuel intake form",
      "Degree-day heat loss thermodynamic calculation engine",
      "Estimated annual energy savings in dollars and metric tons CO2",
      "Local government rebate and tax credit finder (Inflation Reduction Act)"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Calculates exact payback periods in years for heat pumps, triple-pane windows, and attic insulation.",
    "roadmap": [
      "Home parameter input wizard with interactive sliders",
      "Thermodynamic heat loss calculation engine",
      "Cost savings vs investment payback period timeline chart",
      "State and federal heat pump rebate database lookup"
    ],
    "extensions": [
      "Thermal camera smartphone photo upload analyzer",
      "Contractor quote comparison worksheet"
    ],
    "mvpScope": "Input a 1970s 1,800 sq ft home; view $850/year projected heating savings with a 3-year insulation payback.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-12",
    "title": "CampusCompost: University Dining Organic Waste Diverter",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "University dining halls dump hundreds of tons of food scraps into landfills, emitting methane gas.",
    "problemStatement": "University dining halls dump hundreds of tons of food scraps into landfills, emitting methane gas.",
    "solution": "A campus organic waste tracking portal monitoring compost bin weights and calculating renewable soil yields.",
    "proposedSolution": "A campus organic waste tracking portal monitoring compost bin weights and calculating renewable soil yields.",
    "realWorldUseCase": "Campus sustainability director tracking student dining hall food waste diversion rates.",
    "targetAudience": "Campus sustainability director tracking student dining hall food waste diversion rates.",
    "mainFeatures": [
      "Smart scale IoT / manual compost bin weight logging",
      "Methane greenhouse gas emissions avoided calculator",
      "Campus garden compost distribution schedule",
      "Dormitory waste reduction competition leaderboard"
    ],
    "features": [
      "Smart scale IoT / manual compost bin weight logging",
      "Methane greenhouse gas emissions avoided calculator",
      "Campus garden compost distribution schedule",
      "Dormitory waste reduction competition leaderboard"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / Supabase",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Recharts"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Gamifies sustainability by ranking college dormitories on lowest food waste per student.",
    "roadmap": [
      "Dining hall daily compost weight entry form",
      "CO2e and methane emissions avoided equivalency cards",
      "Interactive inter-dormitory monthly waste leaderboard",
      "Compost maturity countdown tracker for university gardens"
    ],
    "extensions": [
      "QR code bin check-in for dining hall students",
      "Student volunteer shift scheduler for campus farm"
    ],
    "mvpScope": "Log 250 lbs of dining hall food scraps diverted; see equivalent greenhouse gases saved equal to 12 trees.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-13",
    "title": "HyperAQI: Hyperlocal Air Quality IoT Sensor Mesh",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Government air quality monitoring stations are 20 miles apart, missing toxic localized wildfire smoke pockets.",
    "problemStatement": "Government air quality monitoring stations are 20 miles apart, missing toxic localized wildfire smoke pockets.",
    "solution": "A community IoT dashboard ingesting open-source PurpleAir and DIY laser dust sensor telemetry.",
    "proposedSolution": "A community IoT dashboard ingesting open-source PurpleAir and DIY laser dust sensor telemetry.",
    "realWorldUseCase": "Asthma sufferer checking neighborhood air quality before going for a morning run.",
    "targetAudience": "Asthma sufferer checking neighborhood air quality before going for a morning run.",
    "mainFeatures": [
      "PurpleAir and open EPA AQI sensor streaming API ingestion",
      "Real-time PM2.5, PM10, and ozone particulate heatmaps",
      "Hourly air quality forecast based on wind and humidity",
      "Automated alert when local AQI exceeds sensitive health thresholds"
    ],
    "features": [
      "PurpleAir and open EPA AQI sensor streaming API ingestion",
      "Real-time PM2.5, PM10, and ozone particulate heatmaps",
      "Hourly air quality forecast based on wind and humidity",
      "Automated alert when local AQI exceeds sensitive health thresholds"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "TimescaleDB, PostgreSQL",
    "otherTech": "PurpleAir API, Mapbox GL",
    "techStack": [
      "React",
      "Mapbox",
      "TimescaleDB",
      "FastAPI"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Applies EPA humidity calibration equations to raw optical laser particle counts for medical accuracy.",
    "roadmap": [
      "Mapbox sensor map with color-coded AQI circles",
      "EPA temperature/humidity calibration mathematical adjustment",
      "24-hour historical air particulate trend line chart",
      "Push notification alert when AQI crosses 100 (Unhealthy)"
    ],
    "extensions": [
      "DIY ESP32 sensor firmware and assembly guide",
      "Indoor vs outdoor air quality comparison dashboard"
    ],
    "mvpScope": "Click a neighborhood sensor circle to see live 42 AQI (Good) with hourly PM2.5 trends.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-env-14",
    "title": "AudioRanger: Acoustic Wildlife Poaching Early Warning Radar",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Park rangers in wildlife reserves cannot patrol thousands of square miles against armed poachers.",
    "problemStatement": "Park rangers in wildlife reserves cannot patrol thousands of square miles against armed poachers.",
    "solution": "An acoustic monitoring system analyzing audio sensor streams to detect gunshots and chain saws in real time.",
    "proposedSolution": "An acoustic monitoring system analyzing audio sensor streams to detect gunshots and chain saws in real time.",
    "realWorldUseCase": "Conservation ranger protecting endangered rhinos in an African national park.",
    "targetAudience": "Conservation ranger protecting endangered rhinos in an African national park.",
    "mainFeatures": [
      "Continuous audio stream spectrogram feature extraction",
      "Gunshot and chainsaw acoustic signature CNN classifier",
      "Acoustic triangulation calculating shooter coordinates from 3 sensors",
      "Instant radio and SMS dispatch alert to ranger patrol units"
    ],
    "features": [
      "Continuous audio stream spectrogram feature extraction",
      "Gunshot and chainsaw acoustic signature CNN classifier",
      "Acoustic triangulation calculating shooter coordinates from 3 sensors",
      "Instant radio and SMS dispatch alert to ranger patrol units"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "FastAPI, Librosa, PyTorch",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Librosa, Mapbox GL",
    "techStack": [
      "React",
      "FastAPI",
      "PyTorch",
      "Mapbox"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "5 weeks",
    "uniqueness": "Uses time-difference-of-arrival (TDOA) multilateration to pinpoint gunshot coordinates within 25 meters.",
    "roadmap": [
      "Audio stream FFT spectrogram processing pipeline",
      "PyTorch acoustic event detection neural network",
      "TDOA mathematical triangulation coordinate solver",
      "Ranger dispatch map dashboard with audible alert beacon"
    ],
    "extensions": [
      "Drone automated waypoint dispatch to shot coordinates",
      "Wildlife bioacoustic animal herd location tracker"
    ],
    "mvpScope": "Simulate a gunshot audio spike on 3 sensors; watch the system triangulate the exact GPS coordinate on the map.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-env-15",
    "title": "EVChargeMap: Crowdsourced EV Charger Reliability Radar",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Electric vehicle drivers get stranded at broken public charging stations that report 'Available' in apps.",
    "problemStatement": "Electric vehicle drivers get stranded at broken public charging stations that report 'Available' in apps.",
    "solution": "A crowdsourced charging station reliability tracker logging broken plugs, cable cuts, and real charging speeds.",
    "proposedSolution": "A crowdsourced charging station reliability tracker logging broken plugs, cable cuts, and real charging speeds.",
    "realWorldUseCase": "EV road-tripper looking for a reliable 150kW fast charger along an interstate highway.",
    "targetAudience": "EV road-tripper looking for a reliable 150kW fast charger along an interstate highway.",
    "mainFeatures": [
      "Open Charge Map API public station integration",
      "Crowdsourced reliability score (Working, Broken, Slow, Blocked)",
      "Real-time user check-ins with photo proof and verified kW speed",
      "Trip planner routing exclusively through 90%+ reliable charging stations"
    ],
    "features": [
      "Open Charge Map API public station integration",
      "Crowdsourced reliability score (Working, Broken, Slow, Blocked)",
      "Real-time user check-ins with photo proof and verified kW speed",
      "Trip planner routing exclusively through 90%+ reliable charging stations"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Mapbox GL, OpenChargeMap API",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Calculates true delivered charging speed vs advertised speed based on recent driver telemetry.",
    "roadmap": [
      "Mapbox charger station locator with fast-charger filters",
      "Crowdsourced 1-tap check-in and speed verification form",
      "Reliability percentage score badge per charging station",
      "Road trip route corridor planner with reliable charger stops"
    ],
    "extensions": [
      "Automated report dispatch to charging network operators",
      "Queuing wait-time estimator when all stalls are full"
    ],
    "mvpScope": "Search 'Interstate 80 chargers', view stations color-coded by reliability, and read driver reviews.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-16",
    "title": "RainHarvest: Residential Rainwater Harvesting Calculator",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Homeowners facing severe summer droughts don't know how much rainwater their roof can capture.",
    "problemStatement": "Homeowners facing severe summer droughts don't know how much rainwater their roof can capture.",
    "solution": "A rainwater potential calculator modeling roof catchment area, local rainfall, and storage tank sizing.",
    "proposedSolution": "A rainwater potential calculator modeling roof catchment area, local rainfall, and storage tank sizing.",
    "realWorldUseCase": "Urban gardener sizing rain barrels to irrigate a vegetable garden without municipal water.",
    "targetAudience": "Urban gardener sizing rain barrels to irrigate a vegetable garden without municipal water.",
    "mainFeatures": [
      "Roof square footage and slope catchment area calculator",
      "Historical monthly NOAA precipitation database integration",
      "Runoff coefficient by roofing material (Metal, Shingle, Tile)",
      "Optimal water tank capacity recommendations and garden watering days"
    ],
    "features": [
      "Roof square footage and slope catchment area calculator",
      "Historical monthly NOAA precipitation database integration",
      "Runoff coefficient by roofing material (Metal, Shingle, Tile)",
      "Optimal water tank capacity recommendations and garden watering days"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, NOAA API",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Calculates exact water collection: 1,000 sq ft of roof collects 620 gallons of water per inch of rain.",
    "roadmap": [
      "Roof dimensions and catchment calculator wizard",
      "Local rainfall monthly database lookup by zip code",
      "Monthly water harvesting bar chart vs irrigation needs",
      "Optimal rain barrel storage capacity recommendation card"
    ],
    "extensions": [
      "Municipal rain barrel rebate program directory",
      "Automated overflow diversion drainage guide"
    ],
    "mvpScope": "Enter 1,500 sq ft roof in Atlanta; view 45,000 gallons annual rainwater potential and 3-barrel sizing advice.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-17",
    "title": "BioSpot: Citizen Science Biodiversity Observer & Geo-Tag",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Biologists need millions of geographic observation points to map shifting species ranges under climate change.",
    "problemStatement": "Biologists need millions of geographic observation points to map shifting species ranges under climate change.",
    "solution": "A citizen science web app allowing users to photograph flora and fauna, geolocating observations for research.",
    "proposedSolution": "A citizen science web app allowing users to photograph flora and fauna, geolocating observations for research.",
    "realWorldUseCase": "Hiker photographing a rare monarch butterfly caterpillar on milkweed.",
    "targetAudience": "Hiker photographing a rare monarch butterfly caterpillar on milkweed.",
    "mainFeatures": [
      "Camera photo capture with automatic GPS geolocation metadata",
      "iNaturalist / GBIF species taxonomy database integration",
      "Species rarity and endangered status indicator",
      "Local biodiversity observation map with monthly species counts"
    ],
    "features": [
      "Camera photo capture with automatic GPS geolocation metadata",
      "iNaturalist / GBIF species taxonomy database integration",
      "Species rarity and endangered status indicator",
      "Local biodiversity observation map with monthly species counts"
    ],
    "frontend": "Next.js 14, Mapbox GL, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "iNaturalist API, Mapbox GL",
    "techStack": [
      "Next.js",
      "Mapbox",
      "PostGIS",
      "Node.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Contributes observation data directly to scientific open biodiversity databases like GBIF.",
    "roadmap": [
      "Mobile-friendly camera photo upload with EXIF GPS parsing",
      "Species search and verification suggestion engine",
      "Mapbox local sightings map with species filter",
      "Personal citizen scientist field journal and badges"
    ],
    "extensions": [
      "AI computer vision species identification assistance",
      "Bioblitz community weekend event leaderboard"
    ],
    "mvpScope": "Take a photo of a native wildflower, confirm GPS location, and see it added to the local biodiversity map.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-env-18",
    "title": "PlanetDiet: Low-Emission Sustainable Meal Transition Coach",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Consumers want to reduce dietary greenhouse emissions without adopting an extreme, unsustainable diet.",
    "problemStatement": "Consumers want to reduce dietary greenhouse emissions without adopting an extreme, unsustainable diet.",
    "solution": "A meal planner suggesting small, enjoyable dietary swaps that cut individual carbon emissions by 40%.",
    "proposedSolution": "A meal planner suggesting small, enjoyable dietary swaps that cut individual carbon emissions by 40%.",
    "realWorldUseCase": "Meat eater transitioning to low-emission meals by replacing beef with chicken or lentils.",
    "targetAudience": "Meat eater transitioning to low-emission meals by replacing beef with chicken or lentils.",
    "mainFeatures": [
      "Dietary habit survey and baseline food emissions calculator",
      "High-impact swap generator: 'Swap beef for mushroom-lentil blend'",
      "Weekly low-emission recipes with grocery shopping list",
      "Emissions saved milestone badges (Equivalent miles driven avoided)"
    ],
    "features": [
      "Dietary habit survey and baseline food emissions calculator",
      "High-impact swap generator: 'Swap beef for mushroom-lentil blend'",
      "Weekly low-emission recipes with grocery shopping list",
      "Emissions saved milestone badges (Equivalent miles driven avoided)"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Lucide React, Chart.js",
    "techStack": [
      "React",
      "Node.js",
      "Chart.js",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Focuses on high-impact low-friction swaps rather than preaching strict 100% veganism.",
    "roadmap": [
      "Dietary intake assessment questionnaire",
      "Carbon reduction recipe discovery gallery",
      "Weekly meal planner with drag-and-drop schedule",
      "Cumulative CO2 emissions avoided savings tracker"
    ],
    "extensions": [
      "Grocery store aisle budget cost comparator",
      "Seasonal local produce availability calendar"
    ],
    "mvpScope": "Swap 2 beef burgers for turkey or bean burgers; view 18kg CO2 saved this week with full recipe guides.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-19",
    "title": "OffsetVerify: Carbon Credit Quality & Additionality Auditor",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Companies buy fraudulent carbon offsets that protect trees that were never under threat of deforestation.",
    "problemStatement": "Companies buy fraudulent carbon offsets that protect trees that were never under threat of deforestation.",
    "solution": "A verification dashboard auditing carbon credit projects on additionality, permanence, and satellite canopy proof.",
    "proposedSolution": "A verification dashboard auditing carbon credit projects on additionality, permanence, and satellite canopy proof.",
    "realWorldUseCase": "Corporate sustainability officer reviewing carbon offset purchases for ESG compliance.",
    "targetAudience": "Corporate sustainability officer reviewing carbon offset purchases for ESG compliance.",
    "mainFeatures": [
      "Verra and Gold Standard registry project ID search",
      "Time-series satellite canopy verification over the offset project area",
      "Additionality risk score (High, Medium, Low)",
      "Transparency audit report for public ESG disclosures"
    ],
    "features": [
      "Verra and Gold Standard registry project ID search",
      "Time-series satellite canopy verification over the offset project area",
      "Additionality risk score (High, Medium, Low)",
      "Transparency audit report for public ESG disclosures"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Python FastAPI, Rasterio",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Sentinel Hub API, Mapbox GL",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostgreSQL"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Checks satellite imagery to prove trees in offset conservation zones actually remained standing.",
    "roadmap": [
      "Carbon registry project ID search and metadata fetcher",
      "Historical satellite NDVI time-series canopy evaluator",
      "Additionality and permanence risk calculation matrix",
      "Comprehensive ESG offset audit scorecard PDF exporter"
    ],
    "extensions": [
      "Soil carbon sequestration project sensor validator",
      "Direct carbon removal technology registry (Direct Air Capture)"
    ],
    "mvpScope": "Search an offset project ID; view satellite imagery proving forest canopy remained intact over 5 years.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-20",
    "title": "GreenHost: Website Carbon Intensity & Energy Auditor",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Software developers are unaware that poorly optimized, bloated web pages generate 2g CO2 per page view.",
    "problemStatement": "Software developers are unaware that poorly optimized, bloated web pages generate 2g CO2 per page view.",
    "solution": "A web performance auditor calculating the kilowatt-hours and carbon emissions generated by any website URL.",
    "proposedSolution": "A web performance auditor calculating the kilowatt-hours and carbon emissions generated by any website URL.",
    "realWorldUseCase": "Web agency auditing client websites to achieve green hosting certifications.",
    "targetAudience": "Web agency auditing client websites to achieve green hosting certifications.",
    "mainFeatures": [
      "Website page weight, transfer size, and asset breakdown analyzer",
      "Green Web Foundation API hosting energy check (Renewable vs Fossil)",
      "Carbon emissions calculation in grams CO2 per page view (Sustainable Web Design model)",
      "Actionable optimization roadmap (Image compression, font subsets, caching)"
    ],
    "features": [
      "Website page weight, transfer size, and asset breakdown analyzer",
      "Green Web Foundation API hosting energy check (Renewable vs Fossil)",
      "Carbon emissions calculation in grams CO2 per page view (Sustainable Web Design model)",
      "Actionable optimization roadmap (Image compression, font subsets, caching)"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js, Express, Puppeteer",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Puppeteer, Green Web API",
    "techStack": [
      "React",
      "Node.js",
      "Puppeteer",
      "Recharts"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Calculates total annual carbon emissions based on page weight and estimated monthly site visitors.",
    "roadmap": [
      "URL input form and Puppeteer headless network asset auditor",
      "Green Web Foundation renewable hosting verification API check",
      "Grams CO2 per page view gauge and annual emissions calculation",
      "Asset optimization checklist with potential carbon savings"
    ],
    "extensions": [
      "Badge embed snippet: 'This page generates 0.18g CO2 (A+)'",
      "CI/CD GitHub Action failing PRs that exceed carbon budgets"
    ],
    "mvpScope": "Enter any website URL and view a detailed report showing 0.45g CO2 per visit with green hosting status.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-21",
    "title": "SlipDigit: Paperless Permission Slip & School Waiver System",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Schools print and lose 50,000 paper permission slips annually, wasting trees and delaying field trips.",
    "problemStatement": "Schools print and lose 50,000 paper permission slips annually, wasting trees and delaying field trips.",
    "solution": "A digital permission slip portal with mobile digital signatures and instant parent notifications.",
    "proposedSolution": "A digital permission slip portal with mobile digital signatures and instant parent notifications.",
    "realWorldUseCase": "Elementary school teacher collecting signed permission slips for a science museum field trip.",
    "targetAudience": "Elementary school teacher collecting signed permission slips for a science museum field trip.",
    "mainFeatures": [
      "Digital permission slip builder with custom emergency contact fields",
      "Mobile-friendly touch screen signature pad",
      "Automated SMS/Email reminders to parents who haven't signed",
      "Real-time class roster completion dashboard with one-click emergency export"
    ],
    "features": [
      "Digital permission slip builder with custom emergency contact fields",
      "Mobile-friendly touch screen signature pad",
      "Automated SMS/Email reminders to parents who haven't signed",
      "Real-time class roster completion dashboard with one-click emergency export"
    ],
    "frontend": "React, Tailwind, Canvas API",
    "backend": "Node.js, Express, Twilio",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Canvas API, Twilio API",
    "techStack": [
      "React",
      "Node.js",
      "Canvas API",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Eliminates crumpled paper in backpacks; parents sign on their smartphones in 15 seconds.",
    "roadmap": [
      "Teacher permission slip form creator with date and cost fields",
      "Canvas API mobile digital signature pad",
      "Parent signature status class roster table",
      "Automated Twilio SMS reminder dispatch button"
    ],
    "extensions": [
      "Multi-language translation for non-English speaking parents",
      "Stripe payment integration for field trip fees"
    ],
    "mvpScope": "Create a field trip waiver, sign on your smartphone screen, and see status update to 'Signed' on roster.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-22",
    "title": "UpcycleHub: Community Material Upcycling & Craft Exchange",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Old wooden pallets, glass bottles, and textile scraps end up in landfills despite creative reuse value.",
    "problemStatement": "Old wooden pallets, glass bottles, and textile scraps end up in landfills despite creative reuse value.",
    "solution": "A community exchange platform where makers share DIY upcycling blueprints for common household scrap items.",
    "proposedSolution": "A community exchange platform where makers share DIY upcycling blueprints for common household scrap items.",
    "realWorldUseCase": "Home crafter turning discarded wooden shipping pallets into a garden planter box.",
    "targetAudience": "Home crafter turning discarded wooden shipping pallets into a garden planter box.",
    "mainFeatures": [
      "Scrap material search (Wine bottles, Pallets, Denim jeans, Cardboard)",
      "Step-by-step DIY upcycling blueprints with tool lists",
      "Community showcase gallery with before/after photos",
      "Material scrap giveaway board connecting donors with local crafters"
    ],
    "features": [
      "Scrap material search (Wine bottles, Pallets, Denim jeans, Cardboard)",
      "Step-by-step DIY upcycling blueprints with tool lists",
      "Community showcase gallery with before/after photos",
      "Material scrap giveaway board connecting donors with local crafters"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Categorizes projects by required tool difficulty: 'Zero-tool crafts' vs 'Power-tool woodworking'.",
    "roadmap": [
      "Material scrap catalog and search filters",
      "Step-by-step project guide with photo instructions",
      "Community project showcase with upvote and comment system",
      "Local scrap material giveaway classifieds board"
    ],
    "extensions": [
      "Laser cutter and 3D printing scrap upcycling blueprints",
      "Calculated pounds of waste diverted trophy metrics"
    ],
    "mvpScope": "Search 'Wooden Pallets' to discover a 4-step tutorial for building a vertical herb planter.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-23",
    "title": "PollinatorPath: Native Plant Garden Planner for Bees & Butterflies",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Urban lawns form biological deserts where honeybees and native monarch butterflies starve.",
    "problemStatement": "Urban lawns form biological deserts where honeybees and native monarch butterflies starve.",
    "solution": "A garden design tool recommending native wildflower species by zip code to sustain local pollinators.",
    "proposedSolution": "A garden design tool recommending native wildflower species by zip code to sustain local pollinators.",
    "realWorldUseCase": "Suburban homeowner replacing 200 sq ft of grass with a native pollinator flower garden.",
    "targetAudience": "Suburban homeowner replacing 200 sq ft of grass with a native pollinator flower garden.",
    "mainFeatures": [
      "Zip code native plant database lookup (USDA / Xerces Society)",
      "Bloom time calendar ensuring continuous nectar from March to October",
      "Target pollinator selection (Monarch butterflies, Bumblebees, Hummingbirds)",
      "Interactive garden bed layout designer with plant spacing guides"
    ],
    "features": [
      "Zip code native plant database lookup (USDA / Xerces Society)",
      "Bloom time calendar ensuring continuous nectar from March to October",
      "Target pollinator selection (Monarch butterflies, Bumblebees, Hummingbirds)",
      "Interactive garden bed layout designer with plant spacing guides"
    ],
    "frontend": "React, Canvas API / SVG, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "USDA Plant API, Canvas API",
    "techStack": [
      "React",
      "Canvas API",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Guarantees continuous bloom succession so pollinators have nectar across all four seasons.",
    "roadmap": [
      "Zip code plant hardiness zone database lookup",
      "Pollinator target filter (Bees, Butterflies, Hummingbirds)",
      "Continuous bloom calendar timeline showing flower months",
      "Interactive 2D garden grid layout planner with plant symbols"
    ],
    "extensions": [
      "Sunlight and soil moisture filter options",
      "Printable local native plant nursery shopping list"
    ],
    "mvpScope": "Type your zip code, select 'Monarch Butterflies', and view 6 native milkweed and aster species with bloom charts.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-24",
    "title": "WindCast: Wind Turbine Power Output & Weather Forecaster",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Wind farm operators struggle to forecast power generation due to turbulent gust changes.",
    "problemStatement": "Wind farm operators struggle to forecast power generation due to turbulent gust changes.",
    "solution": "A renewable power forecast model ingesting NOAA wind speeds at 100m hub heights to predict megawatt output.",
    "proposedSolution": "A renewable power forecast model ingesting NOAA wind speeds at 100m hub heights to predict megawatt output.",
    "realWorldUseCase": "Wind energy technician forecasting electricity generation for an offshore wind turbine array.",
    "targetAudience": "Wind energy technician forecasting electricity generation for an offshore wind turbine array.",
    "mainFeatures": [
      "NOAA GFS high-altitude wind speed and direction ingestion",
      "Wind turbine power curve mathematical physics model",
      "24-hour forecasted power output generation curves in Megawatts",
      "Turbine curtailment and high-wind storm safety shutoff warnings"
    ],
    "features": [
      "NOAA GFS high-altitude wind speed and direction ingestion",
      "Wind turbine power curve mathematical physics model",
      "24-hour forecasted power output generation curves in Megawatts",
      "Turbine curtailment and high-wind storm safety shutoff warnings"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI, Scikit-Learn",
    "database": "PostgreSQL / SQLite",
    "otherTech": "NOAA API, Recharts",
    "techStack": [
      "React",
      "FastAPI",
      "SciPy",
      "Recharts"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Models realistic aerodynamic power curves with cut-in, rated, and cut-out wind speed thresholds.",
    "roadmap": [
      "NOAA weather API high-altitude wind fetcher",
      "Turbine aerodynamic power curve physics calculation engine",
      "Interactive 24-hour power generation forecast line chart",
      "Curtailment and safety shutoff warning triggers"
    ],
    "extensions": [
      "Multi-turbine wake effect deficit simulator",
      "Estimated revenue generation based on wholesale electricity prices"
    ],
    "mvpScope": "Input a 3MW turbine and local wind forecast; view hourly power generation curves topping at 2.8MW.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-env-25",
    "title": "RiverWatch: Industrial Water Pollution & Sensor Sentinel",
    "domain": "Environment & Sustainability",
    "category": "Environment & Sustainability",
    "problem": "Illegal industrial chemical dumping into rivers occurs at midnight when environmental inspectors are off duty.",
    "problemStatement": "Illegal industrial chemical dumping into rivers occurs at midnight when environmental inspectors are off duty.",
    "solution": "An IoT river monitoring sentinel tracking pH, conductivity, and dissolved oxygen to detect illegal chemical dumping.",
    "proposedSolution": "An IoT river monitoring sentinel tracking pH, conductivity, and dissolved oxygen to detect illegal chemical dumping.",
    "realWorldUseCase": "River watershed conservation group protecting local trout streams.",
    "targetAudience": "River watershed conservation group protecting local trout streams.",
    "mainFeatures": [
      "Continuous river sensor telemetry ingestion (pH, Turbidity, Dissolved Oxygen, Temp)",
      "Chemical dumping spike anomaly detection algorithm",
      "Interactive river basin GIS map with sensor alert pins",
      "Automated SMS alerts dispatched to environmental protection authorities"
    ],
    "features": [
      "Continuous river sensor telemetry ingestion (pH, Turbidity, Dissolved Oxygen, Temp)",
      "Chemical dumping spike anomaly detection algorithm",
      "Interactive river basin GIS map with sensor alert pins",
      "Automated SMS alerts dispatched to environmental protection authorities"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "TimescaleDB, PostgreSQL",
    "otherTech": "Mapbox GL, Recharts",
    "techStack": [
      "React",
      "Mapbox",
      "TimescaleDB",
      "FastAPI"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Correlates sudden conductivity surges with industrial shift hours to identify midnight dumping events.",
    "roadmap": [
      "River basin Mapbox map with water sensor stations",
      "Water quality index (WQI) multi-parameter health calculation",
      "Real-time chemical spike alert notification module",
      "Historical pollution incident timeline for regulatory reporting"
    ],
    "extensions": [
      "Drone automated water sampling dispatch trigger",
      "Citizen water testing kit photo logging integration"
    ],
    "mvpScope": "Simulate a midnight pH drop to 4.2; watch the sensor turn bright red and trigger an urgent contamination alert.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-01",
    "title": "SmartLumen: Adaptive LED Streetlight Energy Optimizer",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Cities waste millions powering bright streetlights on empty suburban roads at 3:00 AM.",
    "problemStatement": "Cities waste millions powering bright streetlights on empty suburban roads at 3:00 AM.",
    "solution": "An adaptive streetlight controller dimming lights to 20% and brightening dynamically when pedestrians or cars approach.",
    "proposedSolution": "An adaptive streetlight controller dimming lights to 20% and brightening dynamically when pedestrians or cars approach.",
    "realWorldUseCase": "Municipal energy manager cutting city public lighting electricity bills by 60%.",
    "targetAudience": "Municipal energy manager cutting city public lighting electricity bills by 60%.",
    "mainFeatures": [
      "Radar/Infrared motion sensor telemetry ingestion",
      "Dynamic light dimming schedule and ambient daylight sensor",
      "Municipal electricity cost savings dashboard in dollars and kWh",
      "Failed bulb and LED driver hardware failure locator map"
    ],
    "features": [
      "Radar/Infrared motion sensor telemetry ingestion",
      "Dynamic light dimming schedule and ambient daylight sensor",
      "Municipal electricity cost savings dashboard in dollars and kWh",
      "Failed bulb and LED driver hardware failure locator map"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "Node.js, Express, WebSockets",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "Mapbox GL, Recharts",
    "techStack": [
      "React",
      "Mapbox",
      "WebSockets",
      "TimescaleDB"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Simulates realistic motion wave propagation where streetlights brighten ahead of moving vehicles.",
    "roadmap": [
      "Mapbox streetlight grid map with live illumination circles",
      "Vehicle and pedestrian movement simulator engine",
      "Dynamic streetlight dimming logic over WebSockets",
      "Municipal energy and financial savings calculator dashboard"
    ],
    "extensions": [
      "Solar-powered battery status monitoring per pole",
      "Emergency blue-light strobe mode for police calls"
    ],
    "mvpScope": "Watch a simulated car drive down a dark boulevard; streetlights ahead illuminate to 100% and dim after it passes.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-02",
    "title": "ParkRadar: Real-Time Urban Parking Space Sensor Map",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Urban drivers circling blocks looking for parking cause 30% of downtown traffic congestion.",
    "problemStatement": "Urban drivers circling blocks looking for parking cause 30% of downtown traffic congestion.",
    "solution": "A smart parking map streaming real-time parking space occupancy from ultrasonic street sensors.",
    "proposedSolution": "A smart parking map streaming real-time parking space occupancy from ultrasonic street sensors.",
    "realWorldUseCase": "Driver navigating downtown seeking an available curbside parking spot.",
    "targetAudience": "Driver navigating downtown seeking an available curbside parking spot.",
    "mainFeatures": [
      "Curbside parking space sensor occupancy telemetry (Occupied / Open)",
      "Real-time navigation routing to the closest open parking spot",
      "Parking meter rate schedule and mobile payment link",
      "Historical occupancy heatmap predicting probability of finding a spot by hour"
    ],
    "features": [
      "Curbside parking space sensor occupancy telemetry (Occupied / Open)",
      "Real-time navigation routing to the closest open parking spot",
      "Parking meter rate schedule and mobile payment link",
      "Historical occupancy heatmap predicting probability of finding a spot by hour"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "FastAPI / Node.js, WebSockets",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Mapbox GL, Turf.js",
    "techStack": [
      "React",
      "Mapbox",
      "PostGIS",
      "WebSockets"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Predicts parking availability probability using historical time-of-day machine learning models.",
    "roadmap": [
      "Mapbox street-level parking space polygon rendering",
      "WebSocket real-time occupancy state streaming",
      "Closest open spot navigation path calculation",
      "Time-of-day parking availability probability slider"
    ],
    "extensions": [
      "License plate recognition (ALPR) validation simulator",
      "EV charging parking spot status filter"
    ],
    "mvpScope": "Zoom into a downtown avenue; see 3 green open parking spots and click to get instant turn-by-turn walking directions.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-03",
    "title": "PotholePatrol: Crowdsourced Accelerometer Road Defect Radar",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "City public works departments take months to discover hazardous potholes that damage car suspensions.",
    "problemStatement": "City public works departments take months to discover hazardous potholes that damage car suspensions.",
    "solution": "A road hazard platform collecting smartphone accelerometer vibration telemetry to map road surface potholes.",
    "proposedSolution": "A road hazard platform collecting smartphone accelerometer vibration telemetry to map road surface potholes.",
    "realWorldUseCase": "City driver whose smartphone automatically records and reports road bumps while commuting.",
    "targetAudience": "City driver whose smartphone automatically records and reports road bumps while commuting.",
    "mainFeatures": [
      "Smartphone DeviceMotionEvent accelerometer vibration spike logging",
      "GPS coordinate geo-tagging of significant road shocks",
      "Clustering algorithm combining multiple driver reports to verify true potholes",
      "Municipal road repair priority map and public works dispatch queue"
    ],
    "features": [
      "Smartphone DeviceMotionEvent accelerometer vibration spike logging",
      "GPS coordinate geo-tagging of significant road shocks",
      "Clustering algorithm combining multiple driver reports to verify true potholes",
      "Municipal road repair priority map and public works dispatch queue"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "FastAPI, GeoPandas",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, DeviceMotionEvent",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Clusters sensor spikes from 5+ independent vehicles to distinguish genuine potholes from speed bumps.",
    "roadmap": [
      "Smartphone vibration data capture with G-force thresholding",
      "Spatial clustering algorithm (DBSCAN) grouping nearby shocks",
      "Mapbox road hazard heatmap color-coded by severity",
      "Municipal repair work-order export list"
    ],
    "extensions": [
      "Dashcam video optical pothole verification model",
      "Bike lane surface smoothness audit layer"
    ],
    "mvpScope": "Simulate an accelerometer bump spike; watch a new pothole pin appear on the city map with severity metrics.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-04",
    "title": "BinFill: Municipal Waste Receptacle Telemetry & Route Optimizer",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Garbage trucks waste fuel checking empty public bins while overflowing bins spill litter into streets.",
    "problemStatement": "Garbage trucks waste fuel checking empty public bins while overflowing bins spill litter into streets.",
    "solution": "A smart city waste management platform tracking ultrasonic bin fill levels and optimizing collection truck routes.",
    "proposedSolution": "A smart city waste management platform tracking ultrasonic bin fill levels and optimizing collection truck routes.",
    "realWorldUseCase": "City sanitation supervisor dispatching garbage collection trucks efficiently.",
    "targetAudience": "City sanitation supervisor dispatching garbage collection trucks efficiently.",
    "mainFeatures": [
      "Ultrasonic sensor bin fill-level telemetry (0% to 100%)",
      "Overflow hazard alert when bin exceeds 85% capacity",
      "Vehicle routing problem (VRP) optimization for garbage trucks",
      "Fuel savings and emissions avoided calculation dashboard"
    ],
    "features": [
      "Ultrasonic sensor bin fill-level telemetry (0% to 100%)",
      "Overflow hazard alert when bin exceeds 85% capacity",
      "Vehicle routing problem (VRP) optimization for garbage trucks",
      "Fuel savings and emissions avoided calculation dashboard"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Python FastAPI, OR-Tools",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, Google OR-Tools",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "OR-Tools"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Solves the Vehicle Routing Problem (VRP) using Google OR-Tools to generate the shortest fuel-saving route.",
    "roadmap": [
      "Mapbox smart bin map with fill-level color indicators",
      "Google OR-Tools route optimization solver",
      "Garbage truck turn-by-turn collection manifest",
      "Sanitation department fuel savings scorecard"
    ],
    "extensions": [
      "Recycling contamination sensor alert",
      "Public citizen bin overflow report QR code"
    ],
    "mvpScope": "Click 'Optimize Route'; watch the system route 1 truck to empty only the 8 full bins, saving 14 miles of driving.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-05",
    "title": "BusCrowd: Real-Time Transit Crowding & Arrival Beacon",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Commuters squeeze into overcrowded buses while an empty bus is running just 3 minutes behind.",
    "problemStatement": "Commuters squeeze into overcrowded buses while an empty bus is running just 3 minutes behind.",
    "solution": "A public transit companion displaying real-time passenger crowding levels (Empty, Many Seats, Standing Room Only).",
    "proposedSolution": "A public transit companion displaying real-time passenger crowding levels (Empty, Many Seats, Standing Room Only).",
    "realWorldUseCase": "Commuter deciding whether to board an overcrowded bus or wait 4 minutes for an empty one.",
    "targetAudience": "Commuter deciding whether to board an overcrowded bus or wait 4 minutes for an empty one.",
    "mainFeatures": [
      "Passenger count sensor telemetry ingestion (APC automated passenger counters)",
      "Real-time crowding indicator badges on bus route stops",
      "Estimated seat availability vs standing room only status",
      "Next-bus arrival countdown with historical crowding patterns"
    ],
    "features": [
      "Passenger count sensor telemetry ingestion (APC automated passenger counters)",
      "Real-time crowding indicator badges on bus route stops",
      "Estimated seat availability vs standing room only status",
      "Next-bus arrival countdown with historical crowding patterns"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, WebSockets",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "Mapbox GL, Socket.io",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "WebSockets"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Allows commuters to make comfortable travel decisions by highlighting when an empty bus is close behind.",
    "roadmap": [
      "Live transit route map with moving bus markers",
      "Color-coded crowding icon badges (Green/Yellow/Red)",
      "Arrival countdown timer for consecutive buses on the line",
      "Crowdsourced passenger confirmation voting button"
    ],
    "extensions": [
      "Wheelchair and bicycle rack availability status",
      "Push notification alert for uncrowded departures"
    ],
    "mvpScope": "View Bus #14 with 'Standing Room Only' and see Bus #14B arriving 4 minutes later with 'Many Seats Available'.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-06",
    "title": "HVACBalance: Smart Commercial Building Thermal Zone Balancer",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Commercial office buildings waste 30% of energy overcooling conference rooms while corner offices overheat.",
    "problemStatement": "Commercial office buildings waste 30% of energy overcooling conference rooms while corner offices overheat.",
    "solution": "A building management dashboard balancing multi-zone HVAC dampers based on occupancy and sun exposure.",
    "proposedSolution": "A building management dashboard balancing multi-zone HVAC dampers based on occupancy and sun exposure.",
    "realWorldUseCase": "Facilities manager balancing temperatures across a 4-story university library.",
    "targetAudience": "Facilities manager balancing temperatures across a 4-story university library.",
    "mainFeatures": [
      "Multi-zone temperature, humidity, and CO2 sensor telemetry",
      "Occupancy sensor counts and solar facade heat gain calculations",
      "Automated VAV damper position recommendation (0-100% open)",
      "Building energy consumption and peak kilowatt demand charts"
    ],
    "features": [
      "Multi-zone temperature, humidity, and CO2 sensor telemetry",
      "Occupancy sensor counts and solar facade heat gain calculations",
      "Automated VAV damper position recommendation (0-100% open)",
      "Building energy consumption and peak kilowatt demand charts"
    ],
    "frontend": "React, Tailwind, Three.js, Recharts",
    "backend": "Python FastAPI / Node.js",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "Three.js, Recharts",
    "techStack": [
      "React",
      "Three.js",
      "FastAPI",
      "TimescaleDB"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Includes an interactive 3D floor plan visualizer color-coding thermal zones from cold blue to hot red.",
    "roadmap": [
      "3D interactive building floor plan rendered in Three.js",
      "Zone-by-zone thermodynamic temperature balancing algorithm",
      "HVAC VAV damper control slider interface",
      "Energy consumption and peak demand cost analytics"
    ],
    "extensions": [
      "Pre-cooling algorithm taking advantage of cheap off-peak electricity",
      "Indoor air quality CO2 ventilation booster"
    ],
    "mvpScope": "Select Conference Room B; view high CO2 and 76\u00b0F, and watch damper open to 80% to restore comfort.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-07",
    "title": "CrossSafe: Smart Crosswalk Pedestrian Beacon with Camera Warning",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Pedestrians are struck by distracted drivers at poorly illuminated un-signaled suburban crosswalks.",
    "problemStatement": "Pedestrians are struck by distracted drivers at poorly illuminated un-signaled suburban crosswalks.",
    "solution": "An intelligent crosswalk system using computer vision to detect pedestrians and trigger high-visibility flashing beacons.",
    "proposedSolution": "An intelligent crosswalk system using computer vision to detect pedestrians and trigger high-visibility flashing beacons.",
    "realWorldUseCase": "Pedestrian walking a dog at night stepping toward a street crossing.",
    "targetAudience": "Pedestrian walking a dog at night stepping toward a street crossing.",
    "mainFeatures": [
      "Computer vision pedestrian and wheelchair crosswalk detection",
      "Automated high-visibility flashing LED warning beacon trigger",
      "Vehicle speed radar alerting pedestrian if approaching car isn't slowing",
      "Municipal crosswalk usage and near-miss pedestrian safety analytics"
    ],
    "features": [
      "Computer vision pedestrian and wheelchair crosswalk detection",
      "Automated high-visibility flashing LED warning beacon trigger",
      "Vehicle speed radar alerting pedestrian if approaching car isn't slowing",
      "Municipal crosswalk usage and near-miss pedestrian safety analytics"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Python FastAPI, OpenCV / YOLO",
    "database": "PostgreSQL / SQLite",
    "otherTech": "OpenCV, Canvas API",
    "techStack": [
      "React",
      "FastAPI",
      "OpenCV",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Alerts both the driver with amber flashers and the pedestrian with an audible cue if a vehicle is speeding.",
    "roadmap": [
      "Webcam crosswalk simulator with pedestrian bounding box detection",
      "Flashing warning light activation state machine",
      "Vehicle approach speed estimator and warning alert",
      "Crosswalk safety metrics dashboard"
    ],
    "extensions": [
      "Thermal camera sensor mode for rain and heavy fog",
      "Blind pedestrian tactile audio guidance tone"
    ],
    "mvpScope": "Simulate a pedestrian entering the crosswalk bounding box; watch the visual amber beacon activate immediately.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-08",
    "title": "NoiseHeatmap: Urban Sound Pollution & Decibel Mesh",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Chronic traffic and construction noise causes sleep disorders and cardiovascular stress in urban residents.",
    "problemStatement": "Chronic traffic and construction noise causes sleep disorders and cardiovascular stress in urban residents.",
    "solution": "A community decibel mapping platform collecting sound level sensor telemetry across urban neighborhoods.",
    "proposedSolution": "A community decibel mapping platform collecting sound level sensor telemetry across urban neighborhoods.",
    "realWorldUseCase": "Apartment renter checking historical nighttime noise levels before signing a lease.",
    "targetAudience": "Apartment renter checking historical nighttime noise levels before signing a lease.",
    "mainFeatures": [
      "Calibrated decibel (dBA) audio telemetry ingestion",
      "Interactive noise pollution heatmap layer on Mapbox",
      "Day-Evening-Night level (Lden) environmental acoustic metrics",
      "Construction and loud motorcycle noise event spike logger"
    ],
    "features": [
      "Calibrated decibel (dBA) audio telemetry ingestion",
      "Interactive noise pollution heatmap layer on Mapbox",
      "Day-Evening-Night level (Lden) environmental acoustic metrics",
      "Construction and loud motorcycle noise event spike logger"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "TimescaleDB, PostgreSQL",
    "otherTech": "Mapbox GL, Web Audio API",
    "techStack": [
      "React",
      "Mapbox",
      "Web Audio API",
      "TimescaleDB"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Renders legal Day-Night sound level (Ldn) contours showing whether an apartment exceeds WHO guidelines.",
    "roadmap": [
      "Microphone decibel meter measurement tool in browser",
      "Mapbox urban noise contour heatmap layer",
      "24-hour decibel trend line chart with WHO 55 dBA limit line",
      "Noise complaint log with event timestamps"
    ],
    "extensions": [
      "Acoustic frequency analyzer identifying construction vs traffic noise",
      "Quiet green walking route generator avoiding noisy avenues"
    ],
    "mvpScope": "Drop a pin on a residential street; view 68 dBA daytime traffic noise vs 48 dBA quiet nighttime levels.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-09",
    "title": "SirenRelay: Municipal Disaster Emergency Push Siren",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Severe weather sirens are inaudible to residents with insulated double-pane windows or headphones.",
    "problemStatement": "Severe weather sirens are inaudible to residents with insulated double-pane windows or headphones.",
    "solution": "A hyperlocal emergency siren relay broadcasting instant audio siren tones and evacuation maps to smartphones.",
    "proposedSolution": "A hyperlocal emergency siren relay broadcasting instant audio siren tones and evacuation maps to smartphones.",
    "realWorldUseCase": "Resident inside a soundproof apartment when a flash flood or tornado warning is issued.",
    "targetAudience": "Resident inside a soundproof apartment when a flash flood or tornado warning is issued.",
    "mainFeatures": [
      "Severe weather and municipal emergency alert broadcast intake",
      "Loud audible siren alert overriding phone silent modes",
      "Evacuation zone boundary map with safe high-ground shelters",
      "Emergency safety check-in button ('I am safe' / 'Need help')"
    ],
    "features": [
      "Severe weather and municipal emergency alert broadcast intake",
      "Loud audible siren alert overriding phone silent modes",
      "Evacuation zone boundary map with safe high-ground shelters",
      "Emergency safety check-in button ('I am safe' / 'Need help')"
    ],
    "frontend": "React, Tailwind, Mapbox GL",
    "backend": "Node.js, Express, WebSockets",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Web Audio API, Mapbox GL",
    "techStack": [
      "React",
      "Mapbox",
      "Web Audio API",
      "WebSockets"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Generates high-penetration multi-tone audio siren frequencies using the native Web Audio API directly in the browser.",
    "roadmap": [
      "Emergency alert broadcast authoring console for officials",
      "Client web receiver with loud Web Audio siren tone generator",
      "Mapbox evacuation route and emergency shelter locator",
      "One-tap resident safety status ping accumulator"
    ],
    "extensions": [
      "Offline SMS emergency fallback dispatch",
      "Multi-language emergency translation broadcast"
    ],
    "mvpScope": "Trigger a simulated Tornado Emergency; listen to the loud audio siren and view nearest storm shelter on the map.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-10",
    "title": "PipeLeak: Water Distribution Network Acoustic Pressure Monitor",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Municipal water utilities lose 20% of treated drinking water to hidden underground main breaks.",
    "problemStatement": "Municipal water utilities lose 20% of treated drinking water to hidden underground main breaks.",
    "solution": "A water infrastructure monitoring dashboard tracking pipeline acoustic pressure spikes to locate pipe bursts.",
    "proposedSolution": "A water infrastructure monitoring dashboard tracking pipeline acoustic pressure spikes to locate pipe bursts.",
    "realWorldUseCase": "Municipal water utility engineer locating an underground water main leak before streets flood.",
    "targetAudience": "Municipal water utility engineer locating an underground water main leak before streets flood.",
    "mainFeatures": [
      "Acoustic pressure transient sensor telemetry along water mains",
      "Pressure wave delta-T calculation to localize leak position",
      "Automated isolation valve shutdown recommendation",
      "Interactive GIS municipal water pipeline network map"
    ],
    "features": [
      "Acoustic pressure transient sensor telemetry along water mains",
      "Pressure wave delta-T calculation to localize leak position",
      "Automated isolation valve shutdown recommendation",
      "Interactive GIS municipal water pipeline network map"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "Python FastAPI, SciPy",
    "database": "PostGIS, TimescaleDB",
    "otherTech": "Mapbox GL, SciPy",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Calculates acoustic time-of-flight between two pressure sensors to localize pipe bursts within 10 feet.",
    "roadmap": [
      "Mapbox pipeline network GIS layer with sensor nodes",
      "Acoustic cross-correlation algorithm for leak localization",
      "Pressure transient anomaly chart showing burst signature",
      "Emergency valve shutoff sequence advisor"
    ],
    "extensions": [
      "Pump station energy optimization controller",
      "Water quality chlorine residual decay tracker"
    ],
    "mvpScope": "Simulate a pipe burst between Sensor 12 and 14; watch the system pinpoint the exact rupture point on the road map.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-11",
    "title": "BikeDock: Micro-Mobility Bicycle Dock & Battery Health Station",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "City bikeshare systems suffer from stranded empty stations and electric bikes with dead batteries.",
    "problemStatement": "City bikeshare systems suffer from stranded empty stations and electric bikes with dead batteries.",
    "solution": "A smart bicycle sharing dock dashboard tracking dock capacity, rebalancing vans, and e-bike charging.",
    "proposedSolution": "A smart bicycle sharing dock dashboard tracking dock capacity, rebalancing vans, and e-bike charging.",
    "realWorldUseCase": "Bikeshare fleet operator dispatching a van to refill an empty morning commuter station.",
    "targetAudience": "Bikeshare fleet operator dispatching a van to refill an empty morning commuter station.",
    "mainFeatures": [
      "Dock slot occupancy and e-bike battery charge state telemetry",
      "Predictive station empty/full probability forecast",
      "Bikeshare rebalancing truck routing and work orders",
      "User app integration showing nearest open return dock"
    ],
    "features": [
      "Dock slot occupancy and e-bike battery charge state telemetry",
      "Predictive station empty/full probability forecast",
      "Bikeshare rebalancing truck routing and work orders",
      "User app integration showing nearest open return dock"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "Node.js, Express",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Mapbox GL, Recharts",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "PostGIS"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Predicts which docking stations will run empty 45 minutes before morning rush hour based on historical trends.",
    "roadmap": [
      "Mapbox bikeshare dock station map with battery level icons",
      "Station empty/full predictive heuristic model",
      "Rebalancing truck route generator with dock priorities",
      "E-bike battery health degradation tracker"
    ],
    "extensions": [
      "User incentive dynamic discounts for riding bikes to empty stations",
      "Faulty dock mechanical latch report logger"
    ],
    "mvpScope": "Click a subway station dock; see 2 open slots remaining and watch an alert dispatching a refill van.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-12",
    "title": "FloodRadar: Urban Stormwater Drain & Underpass Flood Warning",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Drivers drown every year driving into flooded highway underpasses during severe flash rainstorms.",
    "problemStatement": "Drivers drown every year driving into flooded highway underpasses during severe flash rainstorms.",
    "solution": "An urban flood monitoring network using ultrasonic sensors in stormwater drains to close flooded roads.",
    "proposedSolution": "An urban flood monitoring network using ultrasonic sensors in stormwater drains to close flooded roads.",
    "realWorldUseCase": "Police department deploying automated barricades at a flooded downtown railroad underpass.",
    "targetAudience": "Police department deploying automated barricades at a flooded downtown railroad underpass.",
    "mainFeatures": [
      "Ultrasonic water level sensor telemetry in storm drains and underpasses",
      "Road inundation depth threshold alerts (6 inches, 12 inches, 24 inches)",
      "Automated digital signage warning display updates",
      "Real-time road closure routing detour navigation for emergency vehicles"
    ],
    "features": [
      "Ultrasonic water level sensor telemetry in storm drains and underpasses",
      "Road inundation depth threshold alerts (6 inches, 12 inches, 24 inches)",
      "Automated digital signage warning display updates",
      "Real-time road closure routing detour navigation for emergency vehicles"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "FastAPI / Node.js, WebSockets",
    "database": "PostGIS, TimescaleDB",
    "otherTech": "Mapbox GL, PostGIS",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Automatically triggers digital road closure warnings when water depth exceeds 6 inches.",
    "roadmap": [
      "Storm drain water depth sensor simulator with rapid rainfall spikes",
      "Mapbox flood map highlighting submerged roadway segments",
      "Digital roadside warning sign status controller",
      "Detour routing engine diverting traffic around flooded zones"
    ],
    "extensions": [
      "Hydrological watershed drainage basin flow model",
      "Citizen flood photo verification portal"
    ],
    "mvpScope": "Simulate a 10-inch flood in an underpass; watch the map turn red and calculate detour routes around the hazard.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-13",
    "title": "ParkSprinkle: Weather-Adaptive Municipal Park Irrigation",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "City parks run automated lawn sprinklers during rainstorms, wasting hundreds of thousands of gallons.",
    "problemStatement": "City parks run automated lawn sprinklers during rainstorms, wasting hundreds of thousands of gallons.",
    "solution": "An IoT smart irrigation controller syncing soil moisture sensors with precipitation forecasts.",
    "proposedSolution": "An IoT smart irrigation controller syncing soil moisture sensors with precipitation forecasts.",
    "realWorldUseCase": "City park groundskeeper managing automated sprinkler schedules for 12 public soccer fields.",
    "targetAudience": "City park groundskeeper managing automated sprinkler schedules for 12 public soccer fields.",
    "mainFeatures": [
      "Soil volumetric water content (VWC) capacitive sensor telemetry",
      "Open-Meteo precipitation forecast integration (72-hour window)",
      "Automated sprinkler valve schedule cancellation if rain is forecasted",
      "Municipal water bill and gallons conserved tracking dashboard"
    ],
    "features": [
      "Soil volumetric water content (VWC) capacitive sensor telemetry",
      "Open-Meteo precipitation forecast integration (72-hour window)",
      "Automated sprinkler valve schedule cancellation if rain is forecasted",
      "Municipal water bill and gallons conserved tracking dashboard"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "Open-Meteo API, Recharts",
    "techStack": [
      "React",
      "FastAPI",
      "Open-Meteo",
      "Recharts"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Cancels scheduled sprinkler cycles automatically if rainfall probability exceeds 70% in the next 24 hours.",
    "roadmap": [
      "Park zone soil moisture sensor telemetry cards",
      "Weather API forecast integration showing rainfall timeline",
      "Smart valve schedule optimizer with manual override toggle",
      "Cumulative municipal water gallons conserved scorecard"
    ],
    "extensions": [
      "Evapotranspiration (ET0) solar radiation calculator",
      "Recycled greywater tank level monitor"
    ],
    "mvpScope": "View Park Zone 3 at 45% moisture; watch system postpone tonight's sprinkler run because rain is due tomorrow.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-14",
    "title": "TrafficOpt: Real-Time Traffic Light Queue Length Controller",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Fixed-timer traffic lights force drivers to wait at red lights when no cross-traffic is present.",
    "problemStatement": "Fixed-timer traffic lights force drivers to wait at red lights when no cross-traffic is present.",
    "solution": "An intelligent intersection controller adjusting green light durations based on computer vision vehicle queue counts.",
    "proposedSolution": "An intelligent intersection controller adjusting green light durations based on computer vision vehicle queue counts.",
    "realWorldUseCase": "Traffic engineer optimizing an intersection experiencing heavy morning left-turn congestion.",
    "targetAudience": "Traffic engineer optimizing an intersection experiencing heavy morning left-turn congestion.",
    "mainFeatures": [
      "Camera vehicle queue length and waiting time detection",
      "Dynamic green light extension and green-wave coordination algorithm",
      "Intersection throughput vehicles-per-hour analytics",
      "Emergency vehicle preemption priority simulation (Fire truck green corridor)"
    ],
    "features": [
      "Camera vehicle queue length and waiting time detection",
      "Dynamic green light extension and green-wave coordination algorithm",
      "Intersection throughput vehicles-per-hour analytics",
      "Emergency vehicle preemption priority simulation (Fire truck green corridor)"
    ],
    "frontend": "React, Canvas API / SVG, Tailwind",
    "backend": "Python FastAPI, OpenCV",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Canvas API, Chart.js",
    "techStack": [
      "React",
      "Canvas API",
      "FastAPI",
      "Chart.js"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Includes an emergency vehicle green-wave preemption simulator clearing a path for ambulances.",
    "roadmap": [
      "Interactive 4-way intersection canvas visualizer with traffic flow",
      "Vehicle queue counter and dynamic phase duration state machine",
      "Emergency vehicle approach trigger clearing cross-traffic",
      "Intersection delay reduction metrics chart"
    ],
    "extensions": [
      "Pedestrian crosswalk demand integration",
      "Multi-intersection synchronized green-wave corridor planner"
    ],
    "mvpScope": "Increase vehicle count on Northbound lane; watch the controller extend green light time to clear the queue.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-15",
    "title": "LockBox: Smart Apartment Package Delivery Locker Portal",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Apartment residents suffer package theft from doorsteps while courier drivers waste time buzzing apartments.",
    "problemStatement": "Apartment residents suffer package theft from doorsteps while courier drivers waste time buzzing apartments.",
    "solution": "A smart delivery locker system generating dynamic one-time PINs for delivery couriers and resident pickup QR codes.",
    "proposedSolution": "A smart delivery locker system generating dynamic one-time PINs for delivery couriers and resident pickup QR codes.",
    "realWorldUseCase": "Courier delivering an Amazon package to an automated secure apartment locker.",
    "targetAudience": "Courier delivering an Amazon package to an automated secure apartment locker.",
    "mainFeatures": [
      "Courier carrier locker reservation (FedEx, UPS, USPS)",
      "One-time delivery PIN generation with compartment size allocation (S, M, L)",
      "Resident SMS/Email notification with one-time pickup QR code",
      "Locker compartment occupancy and security sensor dashboard"
    ],
    "features": [
      "Courier carrier locker reservation (FedEx, UPS, USPS)",
      "One-time delivery PIN generation with compartment size allocation (S, M, L)",
      "Resident SMS/Email notification with one-time pickup QR code",
      "Locker compartment occupancy and security sensor dashboard"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Twilio",
    "database": "PostgreSQL, Supabase",
    "otherTech": "HTML5-QRCode, Twilio API",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Twilio"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Compartment doors unlock automatically when the resident scans their QR code at the locker terminal.",
    "roadmap": [
      "Courier delivery check-in screen with compartment size selection",
      "One-time OTP code generator and validation endpoint",
      "Resident pickup QR code pass with push notification dispatch",
      "Locker bank physical compartment status grid"
    ],
    "extensions": [
      "Package weight sensor verification inside compartment",
      "Security camera snapshot log upon locker open"
    ],
    "mvpScope": "Courier enters PIN 4821, compartment door 4 pops open; resident receives SMS with instant QR pickup pass.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-16",
    "title": "ScootFence: Electric Scooter Geofencing & Speed Governor",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Rogue electric scooters speed down crowded pedestrian sidewalks and get dumped in handicap ramps.",
    "problemStatement": "Rogue electric scooters speed down crowded pedestrian sidewalks and get dumped in handicap ramps.",
    "solution": "A micro-mobility fleet management dashboard enforcing GPS geofenced no-ride zones and slow-speed zones.",
    "proposedSolution": "A micro-mobility fleet management dashboard enforcing GPS geofenced no-ride zones and slow-speed zones.",
    "realWorldUseCase": "City transit regulator requiring e-scooters to automatically slow to 5 MPH in pedestrian plazas.",
    "targetAudience": "City transit regulator requiring e-scooters to automatically slow to 5 MPH in pedestrian plazas.",
    "mainFeatures": [
      "GPS geofence polygon boundary creator on Mapbox",
      "Speed governor telemetry (Normal 15 MPH, Plaza 5 MPH, No-Ride 0 MPH)",
      "Sidewalk riding detector using accelerometer vibration signatures",
      "Improper parking detection and rider penalty fine management"
    ],
    "features": [
      "GPS geofence polygon boundary creator on Mapbox",
      "Speed governor telemetry (Normal 15 MPH, Plaza 5 MPH, No-Ride 0 MPH)",
      "Sidewalk riding detector using accelerometer vibration signatures",
      "Improper parking detection and rider penalty fine management"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, WebSockets",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Mapbox GL, Turf.js",
    "techStack": [
      "React",
      "Mapbox",
      "PostGIS",
      "WebSockets"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Simulates real-time e-scooter telemetry automatically throttling maximum speed upon entering a geofenced plaza.",
    "roadmap": [
      "Mapbox geofence polygon editor with speed limit configuration",
      "Simulated scooter GPS stream with automatic speed governor logic",
      "Scooter fleet status table with battery and location pins",
      "Sidewalk riding violation log and rider dispute interface"
    ],
    "extensions": [
      "End-of-ride parking photo verification model",
      "Scooter battery swap technician dispatch routing"
    ],
    "mvpScope": "Drive simulated scooter into 'Pedestrian Plaza' polygon; watch speed instantly cap at 5 MPH with dashboard warning.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-17",
    "title": "AirClass: Indoor Classroom CO2 & Ventilation Air Exchanger",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "High carbon dioxide levels (>1,200 ppm) in closed classrooms reduce student cognitive focus and test scores by 20%.",
    "problemStatement": "High carbon dioxide levels (>1,200 ppm) in closed classrooms reduce student cognitive focus and test scores by 20%.",
    "solution": "An IoT classroom air monitor tracking CO2, VOCs, and temperature to alert teachers when fresh air is needed.",
    "proposedSolution": "An IoT classroom air monitor tracking CO2, VOCs, and temperature to alert teachers when fresh air is needed.",
    "realWorldUseCase": "Teacher opening windows when CO2 climbs during a 90-minute examination.",
    "targetAudience": "Teacher opening windows when CO2 climbs during a 90-minute examination.",
    "mainFeatures": [
      "NDIR optical CO2 sensor telemetry (ppm) and TVOC index",
      "Indoor air quality health rating (Fresh <800 ppm, Drowsy >1,200 ppm, Poor >1,800 ppm)",
      "Subtle visual traffic light indicator (Green/Yellow/Red)",
      "HVAC fresh air damper modulation integration or window prompt"
    ],
    "features": [
      "NDIR optical CO2 sensor telemetry (ppm) and TVOC index",
      "Indoor air quality health rating (Fresh <800 ppm, Drowsy >1,200 ppm, Poor >1,800 ppm)",
      "Subtle visual traffic light indicator (Green/Yellow/Red)",
      "HVAC fresh air damper modulation integration or window prompt"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "TimescaleDB, SQLite",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "FastAPI",
      "TimescaleDB",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Correlates high afternoon CO2 spikes with student sleepiness and recommends 5-minute ventilation breaks.",
    "roadmap": [
      "CO2 ppm gauge component with color-coded safety bands",
      "24-hour classroom air quality timeline line chart",
      "Gentle alert banner prompting teacher to open classroom door",
      "Multi-classroom school dashboard for facilities managers"
    ],
    "extensions": [
      "Ventilation air change per hour (ACH) calculator",
      "Viral transmission risk aerosol index model"
    ],
    "mvpScope": "Slide CO2 level to 1,400 ppm; watch the gauge turn amber with alert: 'Ventilation recommended: Open windows'.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-18",
    "title": "SmartReceptacle: Optical Waste Sorting Bin with Flap Actuator",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Office workers throw soda cans into paper bins, ruining entire bales of clean recycling.",
    "problemStatement": "Office workers throw soda cans into paper bins, ruining entire bales of clean recycling.",
    "solution": "A prototype recycling bin using a top camera and servo flap to drop items into the correct compartment.",
    "proposedSolution": "A prototype recycling bin using a top camera and servo flap to drop items into the correct compartment.",
    "realWorldUseCase": "Office employee dropping an empty plastic water bottle onto the bin opening.",
    "targetAudience": "Office employee dropping an empty plastic water bottle onto the bin opening.",
    "mainFeatures": [
      "Top-down webcam item classification (Can, Bottle, Paper, Trash)",
      "Servo motor mechanical flap position simulator (Tilt Left, Tilt Right, Drop Center)",
      "Contamination prevention buzzer if an unrecyclable liquid cup is placed",
      "Office recycling diversion percentage and contamination scorecard"
    ],
    "features": [
      "Top-down webcam item classification (Can, Bottle, Paper, Trash)",
      "Servo motor mechanical flap position simulator (Tilt Left, Tilt Right, Drop Center)",
      "Contamination prevention buzzer if an unrecyclable liquid cup is placed",
      "Office recycling diversion percentage and contamination scorecard"
    ],
    "frontend": "React, Canvas API, Tailwind",
    "backend": "Python FastAPI, YOLOv8",
    "database": "SQLite / Supabase",
    "otherTech": "OpenCV, Canvas API",
    "techStack": [
      "React",
      "FastAPI",
      "OpenCV",
      "Canvas API"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Simulates the physical two-way mechanical sorting door dropping recyclables left and trash right.",
    "roadmap": [
      "Webcam waste item bounding box detection pipeline",
      "Mechanical sorting door animation simulator",
      "Item classification audio feedback sound effects",
      "Office floor waste diversion competition dashboard"
    ],
    "extensions": [
      "Ultrasonic bin level sensor integration",
      "Material contamination rate logging for custodial staff"
    ],
    "mvpScope": "Drop a virtual aluminum soda can into the scanner; watch the mechanical flap tilt left to drop it in the metal bin.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-19",
    "title": "FootfallRadar: Urban Retail Foot Traffic & Pedestrian Density",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Small businesses sign expensive retail leases without knowing actual pedestrian foot traffic volume.",
    "problemStatement": "Small businesses sign expensive retail leases without knowing actual pedestrian foot traffic volume.",
    "solution": "A privacy-preserving computer vision footfall counter tracking pedestrian counts without recording faces.",
    "proposedSolution": "A privacy-preserving computer vision footfall counter tracking pedestrian counts without recording faces.",
    "realWorldUseCase": "Small coffee shop owner choosing between two street corner locations.",
    "targetAudience": "Small coffee shop owner choosing between two street corner locations.",
    "mainFeatures": [
      "Pedestrian line-crossing direction counter (In / Out)",
      "Hourly foot traffic density distribution charts",
      "Weather condition footfall correlation (Rain vs Sunny days)",
      "Retail window conversion rate estimation (Passersby vs Store Entrants)"
    ],
    "features": [
      "Pedestrian line-crossing direction counter (In / Out)",
      "Hourly foot traffic density distribution charts",
      "Weather condition footfall correlation (Rain vs Sunny days)",
      "Retail window conversion rate estimation (Passersby vs Store Entrants)"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python FastAPI, OpenCV / YOLO",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "OpenCV, Recharts",
    "techStack": [
      "React",
      "FastAPI",
      "OpenCV",
      "Recharts"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Processes video strictly in RAM without saving face recordings to guarantee citizen privacy.",
    "roadmap": [
      "Video stream pedestrian tracking and virtual tripwire line counter",
      "Hourly pedestrian footfall volume bar charts",
      "Peak foot traffic hours summary and weekend vs weekday comparisons",
      "Retail site selection comparison scorecard"
    ],
    "extensions": [
      "Dwell time duration counter in front of shop window",
      "Bicycle vs pedestrian mobility mode split counter"
    ],
    "mvpScope": "Upload a 1-minute street video; watch the virtual tripwire count 28 pedestrians moving East and 19 West.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-20",
    "title": "MicroMeteo: Rooftop IoT Micro-Climate Weather Telemetry",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "City temperatures and wind gusts vary dramatically between waterfront avenues and concrete canyons.",
    "problemStatement": "City temperatures and wind gusts vary dramatically between waterfront avenues and concrete canyons.",
    "solution": "A decentralized network of compact rooftop weather stations providing hyperlocal micro-climate forecasts.",
    "proposedSolution": "A decentralized network of compact rooftop weather stations providing hyperlocal micro-climate forecasts.",
    "realWorldUseCase": "Sailboat captain checking real-time wind gusts at a harbor before departing dock.",
    "targetAudience": "Sailboat captain checking real-time wind gusts at a harbor before departing dock.",
    "mainFeatures": [
      "Anemometer wind speed, barometric pressure, rain gauge, and UV telemetry",
      "Hyperlocal 15-minute micro-forecast model",
      "Storm gust front detection and sudden pressure drop alerts",
      "Public REST API for local neighborhood weather widgets"
    ],
    "features": [
      "Anemometer wind speed, barometric pressure, rain gauge, and UV telemetry",
      "Hyperlocal 15-minute micro-forecast model",
      "Storm gust front detection and sudden pressure drop alerts",
      "Public REST API for local neighborhood weather widgets"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "TimescaleDB, PostgreSQL",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "FastAPI",
      "TimescaleDB",
      "Recharts"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Captures micro-climate variations: a waterfront dock station can be 12\u00b0F cooler than a concrete avenue.",
    "roadmap": [
      "Live weather dials (Wind direction compass, Temperature, Barometer, UV)",
      "Historical 48-hour pressure and wind speed graph",
      "Rapid thunderstorm pressure drop alert trigger",
      "Public embeddable weather card widget snippet"
    ],
    "extensions": [
      "DIY ESP32 rooftop weather station hardware guide",
      "Neighborhood rooftop weather sensor network map"
    ],
    "mvpScope": "View live weather station dashboard showing 18 MPH South wind, 72\u00b0F, and 29.92 inHg barometric pressure.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-21",
    "title": "EVQueue: Public EV Charger Reservation & Fair Queue Dispatcher",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "EV drivers arrive at single public chargers only to find someone parked there fully charged for 4 hours.",
    "problemStatement": "EV drivers arrive at single public chargers only to find someone parked there fully charged for 4 hours.",
    "solution": "A public EV charger queue management system dispatching chargers with 15-minute reservation windows.",
    "proposedSolution": "A public EV charger queue management system dispatching chargers with 15-minute reservation windows.",
    "realWorldUseCase": "EV commuter reserving the next available charging slot at a municipal commuter rail lot.",
    "targetAudience": "EV commuter reserving the next available charging slot at a municipal commuter rail lot.",
    "mainFeatures": [
      "Live charger stall plug status and charging progress telemetry",
      "15-minute grace-period reservation slot queue",
      "Idle fee penalty clock starting when charging hits 100%",
      "Next-in-line SMS notification when a charging car unplugs"
    ],
    "features": [
      "Live charger stall plug status and charging progress telemetry",
      "15-minute grace-period reservation slot queue",
      "Idle fee penalty clock starting when charging hits 100%",
      "Next-in-line SMS notification when a charging car unplugs"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Twilio",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Twilio API, Prisma",
    "techStack": [
      "Next.js",
      "Node.js",
      "Supabase",
      "Twilio"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Enforces fair idle fees ($0.50/min) after a car finishes charging, encouraging drivers to move cars promptly.",
    "roadmap": [
      "Charger stall status board with live state-of-charge percentage",
      "Driver reservation queue system with estimated ready time",
      "Twilio SMS notification dispatcher: 'Your charger is ready in Stall 2'",
      "Idle penalty timer and fee calculation card"
    ],
    "extensions": [
      "Plug & Charge automatic vehicle MAC address handshake",
      "Solar canopy energy generation synchronization"
    ],
    "mvpScope": "Join virtual charger queue; receive SMS notification when Stall 3 opens with a 10-minute hold.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-22",
    "title": "TreeHydrate: Municipal Street Tree Irrigation Sensor Network",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Cities spend $500 planting young sapling trees only for them to die in summer droughts from lack of watering.",
    "problemStatement": "Cities spend $500 planting young sapling trees only for them to die in summer droughts from lack of watering.",
    "solution": "An IoT soil moisture monitoring network tracking street tree watering bags and dispatching water trucks.",
    "proposedSolution": "An IoT soil moisture monitoring network tracking street tree watering bags and dispatching water trucks.",
    "realWorldUseCase": "City forestry department routing municipal water trucks to parched young trees.",
    "targetAudience": "City forestry department routing municipal water trucks to parched young trees.",
    "mainFeatures": [
      "Street tree soil moisture sensor telemetry in root balls",
      "Slow-release watering bag (Gator bag) empty status indicator",
      "Prioritized tree watering route map for municipal tanker trucks",
      "Citizen 'Adopt-A-Tree' volunteer watering log and streak badges"
    ],
    "features": [
      "Street tree soil moisture sensor telemetry in root balls",
      "Slow-release watering bag (Gator bag) empty status indicator",
      "Prioritized tree watering route map for municipal tanker trucks",
      "Citizen 'Adopt-A-Tree' volunteer watering log and streak badges"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, Lucide React",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "PostGIS"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Prevents municipal tree loss by routing watering trucks exclusively to trees with critical root dryness.",
    "roadmap": [
      "Mapbox municipal tree inventory map with moisture status color pins",
      "Watering truck prioritized route generator",
      "Citizen tree adoption portal with watering confirmation button",
      "Tree survival rate analytics by city council district"
    ],
    "extensions": [
      "NFC tree tag scanning for city arborists",
      "Tree species canopy shade and carbon benefits card"
    ],
    "mvpScope": "Click a young oak tree pin; see 15% root moisture (Critical) and watch it added to the tanker truck route.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-23",
    "title": "BarkTag: Municipal Tree Inventory with NFC & QR Bark Badges",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "City arborists struggle to maintain health records and pruning schedules for 100,000 public street trees.",
    "problemStatement": "City arborists struggle to maintain health records and pruning schedules for 100,000 public street trees.",
    "solution": "A mobile municipal forestry database linking physical NFC/QR bark tags to digital tree health records.",
    "proposedSolution": "A mobile municipal forestry database linking physical NFC/QR bark tags to digital tree health records.",
    "realWorldUseCase": "City arborist inspecting an ash tree for emerald ash borer beetle infestation.",
    "targetAudience": "City arborist inspecting an ash tree for emerald ash borer beetle infestation.",
    "mainFeatures": [
      "NFC tag and QR code scanning to pull up tree passport",
      "Tree botanical profile (Species, DBH diameter, Planting date, Health grade)",
      "Pruning, pest treatment, and hazardous limb work order logging",
      "Citizen interactive tree benefits scanner ('This tree absorbs 48 lbs CO2/yr')"
    ],
    "features": [
      "NFC tag and QR code scanning to pull up tree passport",
      "Tree botanical profile (Species, DBH diameter, Planting date, Health grade)",
      "Pruning, pest treatment, and hazardous limb work order logging",
      "Citizen interactive tree benefits scanner ('This tree absorbs 48 lbs CO2/yr')"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Prisma, HTML5-QRCode",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Allows pedestrians to tap their phone on a tree's tag to discover its species, age, and ecological benefits.",
    "roadmap": [
      "QR code scanner interface pulling up instant tree health record",
      "Arborist inspection log form with photo attachment",
      "Ecological benefit calculator (Stormwater absorbed, CO2 sequestered)",
      "Scheduled maintenance and hazardous limb work-order queue"
    ],
    "extensions": [
      "Tree risk assessment formula (TRAQ standard)",
      "Volunteer citizen tree watering log integration"
    ],
    "mvpScope": "Scan tree tag QR code; view tree profile: 45-year-old Sugar Maple absorbing 48 lbs CO2 annually.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-iot-24",
    "title": "BotCourier: Sidewalk Delivery Robot Fleet Coordinator",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Autonomous delivery robots block wheelchair curb cuts and get stuck in sidewalk snowbanks.",
    "problemStatement": "Autonomous delivery robots block wheelchair curb cuts and get stuck in sidewalk snowbanks.",
    "solution": "A teleoperation dispatch dashboard monitoring autonomous sidewalk delivery rovers and clearing sidewalk blockages.",
    "proposedSolution": "A teleoperation dispatch dashboard monitoring autonomous sidewalk delivery rovers and clearing sidewalk blockages.",
    "realWorldUseCase": "Fleet supervisor overseeing 15 autonomous sidewalk grocery delivery robots.",
    "targetAudience": "Fleet supervisor overseeing 15 autonomous sidewalk grocery delivery robots.",
    "mainFeatures": [
      "Real-time rover GPS position and forward camera video stream",
      "Sidewalk obstacle detection and stuck-rover alert triggers",
      "Manual teleoperation remote steering override for difficult crosswalks",
      "Pedestrian encounter courtesy rating and sidewalk etiquette metrics"
    ],
    "features": [
      "Real-time rover GPS position and forward camera video stream",
      "Sidewalk obstacle detection and stuck-rover alert triggers",
      "Manual teleoperation remote steering override for difficult crosswalks",
      "Pedestrian encounter courtesy rating and sidewalk etiquette metrics"
    ],
    "frontend": "React, Mapbox GL, Tailwind, WebRTC",
    "backend": "Python FastAPI, WebSockets",
    "database": "PostgreSQL, TimescaleDB",
    "otherTech": "Mapbox GL, WebRTC",
    "techStack": [
      "React",
      "Mapbox",
      "WebRTC",
      "FastAPI"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Allows remote human operators to take manual control of a stuck rover over WebRTC video within 2 seconds.",
    "roadmap": [
      "Mapbox city sidewalk map with live rover movement pins",
      "WebRTC low-latency camera streaming view with HUD telemetry",
      "Remote gamepad / keyboard steering control override",
      "Delivery mission status and battery level monitoring table"
    ],
    "extensions": [
      "Pedestrian collision avoidance safety log",
      "Winter sidewalk snow depth obstacle detection"
    ],
    "mvpScope": "Select Rover #07 stuck at a curb; take manual keyboard control over video to guide it safely across the crosswalk.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-iot-25",
    "title": "PureFountain: Smart Public Drinking Fountain Water Sentinel",
    "domain": "Smart Cities & IoT",
    "category": "Smart Cities & IoT",
    "problem": "Parks shut down public water fountains over unverified lead contamination fears, forcing single-use plastic bottles.",
    "problemStatement": "Parks shut down public water fountains over unverified lead contamination fears, forcing single-use plastic bottles.",
    "solution": "An IoT drinking fountain monitor tracking water flow, lead filter lifespan, and temperature in public parks.",
    "proposedSolution": "An IoT drinking fountain monitor tracking water flow, lead filter lifespan, and temperature in public parks.",
    "realWorldUseCase": "Park runner verifying that a public drinking fountain has a certified active lead filter.",
    "targetAudience": "Park runner verifying that a public drinking fountain has a certified active lead filter.",
    "mainFeatures": [
      "Water fountain water flow usage and filter volume countdown (gallons)",
      "Filter cartridge replacement alert to park maintenance",
      "Chilled water temperature readout and microbiological safety indicator",
      "Interactive city drinking water fountain finder map with bottle refill counter"
    ],
    "features": [
      "Water fountain water flow usage and filter volume countdown (gallons)",
      "Filter cartridge replacement alert to park maintenance",
      "Chilled water temperature readout and microbiological safety indicator",
      "Interactive city drinking water fountain finder map with bottle refill counter"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "FastAPI / Node.js",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Mapbox GL, Lucide React",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Empowers park visitors to ditch plastic bottles by providing verified clean fountain locations on their phone.",
    "roadmap": [
      "Mapbox public drinking fountain locator with filter health status",
      "Live filter capacity percentage gauge and replacement alert",
      "Total single-use plastic bottles saved counter for the park",
      "Maintenance work-order generator when filter reaches 10%"
    ],
    "extensions": [
      "Accessible ADA wheelchair height fountain filter option",
      "Winter freeze shutoff protection status"
    ],
    "mvpScope": "Find the nearest park fountain on the map, verify its filter is at 92% life, and see 4,200 bottles saved this month.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-01",
    "title": "CoinSpare: Spare-Change Round-Up Mock Investment App",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Young adults struggle to start investing because they believe it requires thousands of dollars upfront.",
    "problemStatement": "Young adults struggle to start investing because they believe it requires thousands of dollars upfront.",
    "solution": "A micro-investing simulator rounding up purchases to the nearest dollar and auto-investing the spare change.",
    "proposedSolution": "A micro-investing simulator rounding up purchases to the nearest dollar and auto-investing the spare change.",
    "realWorldUseCase": "College student learning how rounding up a $3.40 coffee to $4.00 ($0.60 invested) compounds over 10 years.",
    "targetAudience": "College student learning how rounding up a $3.40 coffee to $4.00 ($0.60 invested) compounds over 10 years.",
    "mainFeatures": [
      "Mock bank transaction stream with spare change round-up calculator",
      "Automated recurring allocation into ETF portfolio baskets",
      "10-year compound interest growth simulator chart",
      "Financial milestone badges celebrating first $100 and $500 invested"
    ],
    "features": [
      "Mock bank transaction stream with spare change round-up calculator",
      "Automated recurring allocation into ETF portfolio baskets",
      "10-year compound interest growth simulator chart",
      "Financial milestone badges celebrating first $100 and $500 invested"
    ],
    "frontend": "React 19, Tailwind, Recharts",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Recharts",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Simulates realistic market returns with historical S&P 500 volatility so users learn risk management without real money.",
    "roadmap": [
      "Mock bank account transaction generator with round-up logic",
      "Portfolio asset allocation slider (Stocks, Bonds, Real Estate)",
      "Compound interest projection chart with inflation adjustment",
      "Milestone savings achievement cards"
    ],
    "extensions": [
      "Plaid sandbox bank API integration",
      "Weekly automated investment challenge rules"
    ],
    "mvpScope": "Log a $4.25 coffee; watch $0.75 routed to your virtual investment portfolio and see 10-year growth.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-02",
    "title": "ZeroBudget: Zero-Based Budgeting & Envelope System",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Generic budgeting apps show where money went last month instead of giving every dollar a job in advance.",
    "problemStatement": "Generic budgeting apps show where money went last month instead of giving every dollar a job in advance.",
    "solution": "A modern digital envelope budgeting app where users allocate 100% of income before spending.",
    "proposedSolution": "A modern digital envelope budgeting app where users allocate 100% of income before spending.",
    "realWorldUseCase": "Person breaking the paycheck-to-paycheck cycle using the zero-based budgeting methodology.",
    "targetAudience": "Person breaking the paycheck-to-paycheck cycle using the zero-based budgeting methodology.",
    "mainFeatures": [
      "Zero-based income allocation (Income minus Budgeted equals $0)",
      "Virtual spending envelopes (Rent, Groceries, Dining, Emergencies)",
      "Drag-and-drop envelope money transfers when unexpected expenses occur",
      "Monthly net worth and debt payoff progression charts"
    ],
    "features": [
      "Zero-based income allocation (Income minus Budgeted equals $0)",
      "Virtual spending envelopes (Rent, Groceries, Dining, Emergencies)",
      "Drag-and-drop envelope money transfers when unexpected expenses occur",
      "Monthly net worth and debt payoff progression charts"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Recharts",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Enforces the disciplined 'Every Dollar Has A Job' rule: unassigned money must be routed to debt or savings.",
    "roadmap": [
      "Monthly income intake and envelope allocation wizard",
      "Transaction entry with automatic envelope deduction",
      "Interactive envelope balance visual cards with warning badges",
      "Monthly zero-balance celebration banner"
    ],
    "extensions": [
      "Split transaction allocation across multiple envelopes",
      "Recurring subscription auto-fill envelopes"
    ],
    "mvpScope": "Enter a $3,000 monthly paycheck, allocate it across envelopes until zero remains, and log your first grocery trip.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-03",
    "title": "DebtSnowball: Student Loan Avalanche vs Snowball Visualizer",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Graduates are paralyzed by multiple student loans and don't know which payoff strategy saves the most money.",
    "problemStatement": "Graduates are paralyzed by multiple student loans and don't know which payoff strategy saves the most money.",
    "solution": "An interactive payoff simulator comparing the mathematical Avalanche (highest interest first) vs psychological Snowball method.",
    "proposedSolution": "An interactive payoff simulator comparing the mathematical Avalanche (highest interest first) vs psychological Snowball method.",
    "realWorldUseCase": "College graduate with 4 student loans totaling $38,000 deciding how to apply an extra $200/month.",
    "targetAudience": "College graduate with 4 student loans totaling $38,000 deciding how to apply an extra $200/month.",
    "mainFeatures": [
      "Loan portfolio intake (Principal, Interest rate, Minimum payment)",
      "Side-by-side Avalanche vs Snowball payoff timeline comparison",
      "Total interest paid calculator showing exact dollar savings of Avalanche",
      "Payoff celebration countdown calendar with debt-free date"
    ],
    "features": [
      "Loan portfolio intake (Principal, Interest rate, Minimum payment)",
      "Side-by-side Avalanche vs Snowball payoff timeline comparison",
      "Total interest paid calculator showing exact dollar savings of Avalanche",
      "Payoff celebration countdown calendar with debt-free date"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Clearly shows the trade-off: Avalanche saves $2,400 in interest, while Snowball eliminates the first loan 8 months faster.",
    "roadmap": [
      "Loan debt entry table with interactive APR inputs",
      "Payoff timeline calculation engine (Avalanche vs Snowball)",
      "Monthly debt balance area chart visualizer",
      "Debt-free target date countdown card"
    ],
    "extensions": [
      "Extra lump-sum payment simulation slider",
      "Loan refinancing interest rate comparison tool"
    ],
    "mvpScope": "Enter 3 loans, add an extra $100/month, and see your debt-free date move up by 18 months.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-04",
    "title": "TabSplit: Minimized Debt Graph Expense Balancer",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Roommates and travel groups struggle with messy IOUs where 5 people owe small debts in a web of confusion.",
    "problemStatement": "Roommates and travel groups struggle with messy IOUs where 5 people owe small debts in a web of confusion.",
    "solution": "A group expense splitter that runs minimum-cash-flow graph algorithms to simplify 20 debts into 3 payments.",
    "proposedSolution": "A group expense splitter that runs minimum-cash-flow graph algorithms to simplify 20 debts into 3 payments.",
    "realWorldUseCase": "Four roommates splitting rent, utilities, wifi, and grocery receipts.",
    "targetAudience": "Four roommates splitting rent, utilities, wifi, and grocery receipts.",
    "mainFeatures": [
      "Group expense entry with custom split ratios (Equal, Exact, Percentage)",
      "Minimum cash-flow graph optimization algorithm reducing settlement transactions",
      "Individual settlement payment instruction cards ('Bob pays Alice $42')",
      "Direct Venmo, CashApp, and PayPal deep links for 1-tap payment"
    ],
    "features": [
      "Group expense entry with custom split ratios (Equal, Exact, Percentage)",
      "Minimum cash-flow graph optimization algorithm reducing settlement transactions",
      "Individual settlement payment instruction cards ('Bob pays Alice $42')",
      "Direct Venmo, CashApp, and PayPal deep links for 1-tap payment"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Graph Algorithms, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Uses graph network flow simplification so instead of 10 circular repayments, everyone settles in 2 or 3 direct transfers.",
    "roadmap": [
      "Group creation and member invitation links",
      "Expense logging form with category tags and receipt photo upload",
      "Minimum cash-flow debt simplification algorithm",
      "One-tap settlement card with payment links"
    ],
    "extensions": [
      "Multi-currency conversion support for international trips",
      "Export group balance summary as PDF"
    ],
    "mvpScope": "Enter 6 shared restaurant and Uber receipts among 4 friends; view simplified settlement: just 2 payments settle all debts.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-05",
    "title": "InvoiceFast: Freelancer Invoice Generator with Stripe Links",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Freelancers waste hours in Word formatting invoices and chasing late client bank transfers.",
    "problemStatement": "Freelancers waste hours in Word formatting invoices and chasing late client bank transfers.",
    "solution": "A professional invoice builder that generates clean PDF invoices with integrated one-click Stripe payment links.",
    "proposedSolution": "A professional invoice builder that generates clean PDF invoices with integrated one-click Stripe payment links.",
    "realWorldUseCase": "Freelance web developer sending a $2,500 milestone invoice to a corporate client.",
    "targetAudience": "Freelance web developer sending a $2,500 milestone invoice to a corporate client.",
    "mainFeatures": [
      "Line-item invoice editor with tax, discount, and currency support",
      "Stripe payment link integration embedded directly in invoice",
      "One-click export to print-ready vector PDF",
      "Invoice status tracker (Draft, Sent, Viewed, Paid)"
    ],
    "features": [
      "Line-item invoice editor with tax, discount, and currency support",
      "Stripe payment link integration embedded directly in invoice",
      "One-click export to print-ready vector PDF",
      "Invoice status tracker (Draft, Sent, Viewed, Paid)"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Next.js Route Handlers, Stripe SDK",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Stripe API, @react-pdf/renderer",
    "techStack": [
      "Next.js",
      "Stripe",
      "@react-pdf/renderer",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Clients can click 'Pay Now' directly inside the PDF or email and pay via Apple Pay, card, or ACH.",
    "roadmap": [
      "Interactive live-preview invoice builder interface",
      "Stripe payment link generation API integration",
      "Vector PDF download generator using @react-pdf",
      "Client invoice view tracking and payment webhook handler"
    ],
    "extensions": [
      "Automated late payment reminder email sequence",
      "Recurring subscription invoice auto-scheduler"
    ],
    "mvpScope": "Fill out client name, add 2 line items, click 'Generate', and preview a beautiful branded PDF invoice.",
    "collections": [
      "portfolio",
      "beginner"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-06",
    "title": "BacktestLab: Algorithmic Trading Strategy Backtester",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Retail algorithmic traders lose money deploying untested indicator trading strategies live.",
    "problemStatement": "Retail algorithmic traders lose money deploying untested indicator trading strategies live.",
    "solution": "A web-based backtesting engine running moving average crossover and RSI strategies on 5 years of historical price data.",
    "proposedSolution": "A web-based backtesting engine running moving average crossover and RSI strategies on 5 years of historical price data.",
    "realWorldUseCase": "Quant enthusiast testing whether a 50/200-day Simple Moving Average Golden Cross beats buying and holding.",
    "targetAudience": "Quant enthusiast testing whether a 50/200-day Simple Moving Average Golden Cross beats buying and holding.",
    "mainFeatures": [
      "5-year historical daily stock and crypto price database",
      "Strategy configuration builder (SMA Crossover, RSI, Bollinger Bands)",
      "Backtesting performance metrics (Sharpe ratio, Max Drawdown, Total Return)",
      "Interactive equity curve chart compared against benchmark (S&P 500)"
    ],
    "features": [
      "5-year historical daily stock and crypto price database",
      "Strategy configuration builder (SMA Crossover, RSI, Bollinger Bands)",
      "Backtesting performance metrics (Sharpe ratio, Max Drawdown, Total Return)",
      "Interactive equity curve chart compared against benchmark (S&P 500)"
    ],
    "frontend": "React, Tailwind, Lightweight Charts, Recharts",
    "backend": "Python FastAPI, Pandas, Backtrader",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Backtrader, Lightweight Charts",
    "techStack": [
      "React",
      "FastAPI",
      "Pandas",
      "Lightweight Charts"
    ],
    "difficulty": "Advanced",
    "estimatedTime": "4-5 weeks",
    "uniqueness": "Calculates maximum drawdown percentage and Sharpe ratio to expose strategies that take reckless risks.",
    "roadmap": [
      "Historical price data ingestion and caching pipeline",
      "Algorithmic backtesting execution engine with commission fees",
      "TradingView Lightweight Charts equity curve visualizer",
      "Trade log table listing every buy/sell trigger and profit"
    ],
    "extensions": [
      "Custom Python strategy code editor with sandboxing",
      "Walk-forward optimization parameter grid search"
    ],
    "mvpScope": "Run a 50/200 SMA crossover strategy on Apple stock over 3 years; view 42% return vs 28% max drawdown.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-07",
    "title": "MicroLend: Peer-to-Peer Community Micro-Lending Portal",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Underbanked entrepreneurs in developing nations cannot get small $200 loans from traditional banks.",
    "problemStatement": "Underbanked entrepreneurs in developing nations cannot get small $200 loans from traditional banks.",
    "solution": "A micro-lending platform connecting community lenders with micro-entrepreneurs using social reputation collateral.",
    "proposedSolution": "A micro-lending platform connecting community lenders with micro-entrepreneurs using social reputation collateral.",
    "realWorldUseCase": "Artisan in Kenya borrowing $150 to buy a commercial sewing machine, funded by 3 community lenders.",
    "targetAudience": "Artisan in Kenya borrowing $150 to buy a commercial sewing machine, funded by 3 community lenders.",
    "mainFeatures": [
      "Borrower micro-loan proposal with business plan and milestones",
      "Lender crowdfunding contribution pool ($25 increments)",
      "Community vouching and social reputation trust score",
      "Repayment schedule with transparent 0% or low-interest terms"
    ],
    "features": [
      "Borrower micro-loan proposal with business plan and milestones",
      "Lender crowdfunding contribution pool ($25 increments)",
      "Community vouching and social reputation trust score",
      "Repayment schedule with transparent 0% or low-interest terms"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Inspired by Kiva; replaces predatory payday lenders with transparent, community-vouched interest-free lending.",
    "roadmap": [
      "Borrower loan application and storytelling profile page",
      "Crowdfunding progress bar and lender contribution modal",
      "Repayment schedule tracker with milestone updates",
      "Social endorsement and community guarantor system"
    ],
    "extensions": [
      "Multi-currency conversion with local mobile money (M-Pesa)",
      "Impact measurement metrics (Jobs created, income uplift)"
    ],
    "mvpScope": "Browse open loan requests, pledge $25 toward a farmer's irrigation pump, and watch the funding bar hit 100%.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-08",
    "title": "GasRadar: Ethereum & L2 Crypto Gas Fee Optimizer",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Crypto users waste $50 in transaction gas fees by executing smart contract calls during peak network congestion.",
    "problemStatement": "Crypto users waste $50 in transaction gas fees by executing smart contract calls during peak network congestion.",
    "solution": "A real-time gas tracking radar forecasting Ethereum and Layer-2 (Arbitrum, Optimism) gas fees by day and hour.",
    "proposedSolution": "A real-time gas tracking radar forecasting Ethereum and Layer-2 (Arbitrum, Optimism) gas fees by day and hour.",
    "realWorldUseCase": "DeFi user waiting for lowest weekend gas fees to claim staking rewards.",
    "targetAudience": "DeFi user waiting for lowest weekend gas fees to claim staking rewards.",
    "mainFeatures": [
      "Real-time EIP-1559 gas price tracking (Base fee, Priority fee)",
      "Layer-2 gas fee comparison table (Arbitrum, Optimism, Base, Polygon)",
      "Historical 7-day gas heatmaps showing cheapest weekend hours",
      "Gas alert webhook when gas price drops below target Gwei"
    ],
    "features": [
      "Real-time EIP-1559 gas price tracking (Base fee, Priority fee)",
      "Layer-2 gas fee comparison table (Arbitrum, Optimism, Base, Polygon)",
      "Historical 7-day gas heatmaps showing cheapest weekend hours",
      "Gas alert webhook when gas price drops below target Gwei"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js, Express, Ethers.js",
    "database": "TimescaleDB, Redis",
    "otherTech": "Ethers.js, Recharts",
    "techStack": [
      "React",
      "Node.js",
      "Ethers.js",
      "TimescaleDB"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Reveals that executing transactions on Sunday at 4:00 AM UTC saves up to 75% in Ethereum gas fees.",
    "roadmap": [
      "Ethereum RPC node connection and pending block gas listener",
      "L2 rollup transaction fee comparison widget",
      "7-day hour-by-hour historical gas price heatmap matrix",
      "Custom Gwei threshold notification alert modal"
    ],
    "extensions": [
      "Gas savings calculator for common DeFi operations (Uniswap Swap, Mint NFT)",
      "Telegram bot alert integration"
    ],
    "mvpScope": "Check live gas radar; see Ethereum at 18 Gwei vs Arbitrum at $0.05, with Sunday morning flagged as cheapest.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-09",
    "title": "TaxDeduct: Freelancer Mileage & Expense Tax Shield",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Freelancers overpay thousands in self-employment taxes by failing to log business deductions and mileage.",
    "problemStatement": "Freelancers overpay thousands in self-employment taxes by failing to log business deductions and mileage.",
    "solution": "A quarterly tax estimator tracking Schedule C business deductions and calculating quarterly estimated tax payments.",
    "proposedSolution": "A quarterly tax estimator tracking Schedule C business deductions and calculating quarterly estimated tax payments.",
    "realWorldUseCase": "Freelance photographer logging camera gear expenses and client mileage.",
    "targetAudience": "Freelance photographer logging camera gear expenses and client mileage.",
    "mainFeatures": [
      "Schedule C tax deductible expense categorizer (Gear, Travel, Software, Home Office)",
      "Mileage tracker calculating standard IRS mileage rate deductions",
      "Quarterly estimated tax payment calculator (Federal, State, Self-Employment tax)",
      "Exportable Schedule C tax summary report for CPA/TurboTax"
    ],
    "features": [
      "Schedule C tax deductible expense categorizer (Gear, Travel, Software, Home Office)",
      "Mileage tracker calculating standard IRS mileage rate deductions",
      "Quarterly estimated tax payment calculator (Federal, State, Self-Employment tax)",
      "Exportable Schedule C tax summary report for CPA/TurboTax"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage / IndexedDB",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Calculates exact self-employment tax (15.3% FICA) so freelancers are never blindsided by tax bills.",
    "roadmap": [
      "Expense entry form with Schedule C tax category selector",
      "IRS standard mileage log with deduction dollar calculation",
      "Quarterly tax deadline payment countdown clock",
      "Annual tax savings summary scorecard"
    ],
    "extensions": [
      "Plaid bank transaction auto-categorizer",
      "Receipt photo attachment and OCR deduction logger"
    ],
    "mvpScope": "Log $1,200 in business expenses and 450 miles driven; view $420 in tax liability eliminated immediately.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-10",
    "title": "SubCancel: Subscription Audit & Recurring Bill Sentinel",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Consumers lose $300 annually to forgotten recurring software subscriptions and trial auto-renewals.",
    "problemStatement": "Consumers lose $300 annually to forgotten recurring software subscriptions and trial auto-renewals.",
    "solution": "A subscription audit dashboard tracking recurring charges, renewal dates, and providing 1-click cancellation guides.",
    "proposedSolution": "A subscription audit dashboard tracking recurring charges, renewal dates, and providing 1-click cancellation guides.",
    "realWorldUseCase": "User realizing they have been paying for 3 gym and streaming services they haven't used in 6 months.",
    "targetAudience": "User realizing they have been paying for 3 gym and streaming services they haven't used in 6 months.",
    "mainFeatures": [
      "Recurring subscription tracker with monthly and annual cost totals",
      "Calendar view of upcoming renewal dates and free trial expiration warnings",
      "Step-by-step cancellation guide and customer support links for 50+ services",
      "Unused subscription detector based on last-used date"
    ],
    "features": [
      "Recurring subscription tracker with monthly and annual cost totals",
      "Calendar view of upcoming renewal dates and free trial expiration warnings",
      "Step-by-step cancellation guide and customer support links for 50+ services",
      "Unused subscription detector based on last-used date"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Lucide React, Chart.js",
    "techStack": [
      "React",
      "Node.js",
      "Chart.js",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Sends proactive alert 3 days before a free trial renews into an expensive annual subscription.",
    "roadmap": [
      "Subscription entry form with billing cycle selector (Monthly/Annual)",
      "Monthly subscription spend donut chart by category",
      "Upcoming bill renewal timeline calendar",
      "One-click cancellation instructions modal with direct unsubscribe links"
    ],
    "extensions": [
      "Plaid transaction auto-discovery of recurring charges",
      "Virtual burner debit card integration with spending limits"
    ],
    "mvpScope": "Add 4 subscriptions; see total $68/month ($816/year) spend and set a 3-day renewal warning for Netflix.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-11",
    "title": "CDLadder: Certificate of Deposit & Yield Curve Visualizer",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Savers keep cash in 0.01% checking accounts because they don't understand how to build a CD ladder.",
    "problemStatement": "Savers keep cash in 0.01% checking accounts because they don't understand how to build a CD ladder.",
    "solution": "An interactive cash management tool visualizer demonstrating how staggered CD maturities maximize liquidity and yield.",
    "proposedSolution": "An interactive cash management tool visualizer demonstrating how staggered CD maturities maximize liquidity and yield.",
    "realWorldUseCase": "Saver building a 12-month CD ladder with $10,000 across 3-month, 6-month, and 12-month maturities.",
    "targetAudience": "Saver building a 12-month CD ladder with $10,000 across 3-month, 6-month, and 12-month maturities.",
    "mainFeatures": [
      "CD ladder configuration wizard (Staggered maturity dates)",
      "Cash liquidity calendar showing when principal unlocks each quarter",
      "Compound interest yield comparison vs standard checking account",
      "Federal Reserve interest rate yield curve educational explainer"
    ],
    "features": [
      "CD ladder configuration wizard (Staggered maturity dates)",
      "Cash liquidity calendar showing when principal unlocks each quarter",
      "Compound interest yield comparison vs standard checking account",
      "Federal Reserve interest rate yield curve educational explainer"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Demonstrates how rolling 3-month maturities ensures access to cash every 90 days while earning higher rates.",
    "roadmap": [
      "Initial investment amount and CD term selection sliders",
      "Interactive rolling maturity visual timeline chart",
      "Total annual interest earned calculation comparison table",
      "Inflation-adjusted purchasing power preservation metrics"
    ],
    "extensions": [
      "High-yield savings account (HYSA) comparison toggle",
      "Bank APY rate comparison directory"
    ],
    "mvpScope": "Allocate $10,000 into a 4-rung CD ladder; view quarterly $125 interest payouts and maturity dates.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-12",
    "title": "CreditSim: FICO Credit Score Simulator & Action Planner",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Young adults damage their credit score with maxed-out credit cards without understanding utilization math.",
    "problemStatement": "Young adults damage their credit score with maxed-out credit cards without understanding utilization math.",
    "solution": "An interactive credit simulator showing how paying down balances, opening new cards, or late payments impact credit.",
    "proposedSolution": "An interactive credit simulator showing how paying down balances, opening new cards, or late payments impact credit.",
    "realWorldUseCase": "Young adult planning to apply for an auto loan in 6 months wanting to raise their credit score from 650 to 720.",
    "targetAudience": "Young adult planning to apply for an auto loan in 6 months wanting to raise their credit score from 650 to 720.",
    "mainFeatures": [
      "FICO 5-factor scoring model simulator (Payment history, Utilization, Length, Types, Inquiries)",
      "Credit card balance payoff simulation slider showing utilization drops below 30% and 10%",
      "Actionable 6-month roadmap to target credit score milestones",
      "Hard inquiry impact calculator and dispute letter template"
    ],
    "features": [
      "FICO 5-factor scoring model simulator (Payment history, Utilization, Length, Types, Inquiries)",
      "Credit card balance payoff simulation slider showing utilization drops below 30% and 10%",
      "Actionable 6-month roadmap to target credit score milestones",
      "Hard inquiry impact calculator and dispute letter template"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Framer Motion, Lucide React",
    "techStack": [
      "React",
      "Framer Motion",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Demonstrates the dramatic impact of credit utilization: paying balances before statement close boosts score immediately.",
    "roadmap": [
      "Credit factor breakdown interactive radar chart",
      "Interactive 'What-If' scenario builder (e.g. 'Pay off $1,000 card balance')",
      "Credit score gauge needle with real-time simulated score shift",
      "Personalized step-by-step credit improvement checklist"
    ],
    "extensions": [
      "Authorized user credit boost simulator",
      "Credit report error dispute letter generator"
    ],
    "mvpScope": "Drag the credit card balance slider down $800; watch your simulated credit score jump from 645 to 682.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-13",
    "title": "EmergencyFund: Emergency Savings Milestone & Runway Tracker",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Nearly 50% of Americans cannot afford an unexpected $400 car repair without taking on high-interest credit debt.",
    "problemStatement": "Nearly 50% of Americans cannot afford an unexpected $400 car repair without taking on high-interest credit debt.",
    "solution": "An emergency savings companion calculating essential living expenses and tracking 1, 3, and 6-month runway.",
    "proposedSolution": "An emergency savings companion calculating essential living expenses and tracking 1, 3, and 6-month runway.",
    "realWorldUseCase": "Worker building a 3-month emergency fund to protect against sudden layoffs.",
    "targetAudience": "Worker building a 3-month emergency fund to protect against sudden layoffs.",
    "mainFeatures": [
      "Essential baseline living expense intake (Rent, Food, Utilities, Healthcare)",
      "Runway calculator in months and days of financial freedom",
      "Staged milestone roadmap ($500 starter buffer, 1 month, 3 months, 6 months)",
      "Celebration confetti animation and emergency fund safety badge unlock"
    ],
    "features": [
      "Essential baseline living expense intake (Rent, Food, Utilities, Healthcare)",
      "Runway calculator in months and days of financial freedom",
      "Staged milestone roadmap ($500 starter buffer, 1 month, 3 months, 6 months)",
      "Celebration confetti animation and emergency fund safety badge unlock"
    ],
    "frontend": "React, Tailwind, Canvas Confetti",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Canvas Confetti, Lucide React",
    "techStack": [
      "React",
      "Canvas Confetti",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Differentiates essential survival expenses from non-essential spending to calculate true emergency runway.",
    "roadmap": [
      "Monthly survival budget calculation worksheet",
      "Emergency runway progress bar with milestone checkpoints",
      "Interactive savings deposit logger with visual tank animation",
      "Emergency expense withdrawal audit log with replenishment plan"
    ],
    "extensions": [
      "High-yield savings account interest calculator on emergency fund",
      "Automated weekly micro-savings goal generator"
    ],
    "mvpScope": "Enter $2,200 essential monthly expenses, log $1,000 in savings, and see 14 days of financial runway unlocked.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-14",
    "title": "ReceiptLens: Expense Receipt OCR & Merchant Matcher",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Business travelers waste Sunday evenings manually typing paper hotel and restaurant receipts into spreadsheets.",
    "problemStatement": "Business travelers waste Sunday evenings manually typing paper hotel and restaurant receipts into spreadsheets.",
    "solution": "A camera receipt scanner extracting total amount, date, tax, and merchant name into categorized CSVs.",
    "proposedSolution": "A camera receipt scanner extracting total amount, date, tax, and merchant name into categorized CSVs.",
    "realWorldUseCase": "Consultant scanning 12 paper dinner and taxi receipts for a corporate expense reimbursement report.",
    "targetAudience": "Consultant scanning 12 paper dinner and taxi receipts for a corporate expense reimbursement report.",
    "mainFeatures": [
      "Camera photo capture and optical receipt OCR",
      "Regex parsing of Total, Date, Tax, and Merchant Name",
      "Automatic IRS business expense category tagging",
      "One-click export to CSV and Excel expense report"
    ],
    "features": [
      "Camera photo capture and optical receipt OCR",
      "Regex parsing of Total, Date, Tax, and Merchant Name",
      "Automatic IRS business expense category tagging",
      "One-click export to CSV and Excel expense report"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "FastAPI, Tesseract OCR",
    "database": "PostgreSQL / Supabase",
    "otherTech": "Tesseract, PapaParse",
    "techStack": [
      "React",
      "FastAPI",
      "Tesseract",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Extracts merchant name, sales tax, and total with 95% accuracy without requiring expensive commercial OCR APIs.",
    "roadmap": [
      "Receipt photo upload and cropping tool",
      "Tesseract OCR parsing pipeline and entity extraction",
      "Editable expense table with confidence highlight badges",
      "One-click CSV/Excel expense report export button"
    ],
    "extensions": [
      "Multi-currency conversion using receipt date FX rate",
      "Split business vs personal expense toggle"
    ],
    "mvpScope": "Upload a photo of a restaurant receipt; view parsed $42.50 total and date populated into an editable table.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-15",
    "title": "EquityVest: Startup Stock Option & Vesting Schedule Simulator",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Startup employees accept equity compensation offers without understanding 4-year vesting, cliffs, or taxes.",
    "problemStatement": "Startup employees accept equity compensation offers without understanding 4-year vesting, cliffs, or taxes.",
    "solution": "A startup stock option simulator calculating vesting schedules, AMT tax exposure, and potential exit payoffs.",
    "proposedSolution": "A startup stock option simulator calculating vesting schedules, AMT tax exposure, and potential exit payoffs.",
    "realWorldUseCase": "Software engineer evaluating a job offer with 15,000 stock options and a $1.20 strike price.",
    "targetAudience": "Software engineer evaluating a job offer with 15,000 stock options and a $1.20 strike price.",
    "mainFeatures": [
      "Standard 4-year vesting with 1-year cliff visual timeline",
      "Exercise cost and Alternative Minimum Tax (AMT) liability calculator",
      "Company exit valuation scenario model ($50M, $200M, $1B IPO)",
      "Dilution impact calculator across subsequent Series A/B/C funding rounds"
    ],
    "features": [
      "Standard 4-year vesting with 1-year cliff visual timeline",
      "Exercise cost and Alternative Minimum Tax (AMT) liability calculator",
      "Company exit valuation scenario model ($50M, $200M, $1B IPO)",
      "Dilution impact calculator across subsequent Series A/B/C funding rounds"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Calculates the notorious Alternative Minimum Tax (AMT) risk when exercising ISOs before a liquidity event.",
    "roadmap": [
      "Option grant details intake (Shares, Strike price, Vesting start date)",
      "Interactive vesting schedule area chart with 1-year cliff marker",
      "Exit scenario slider calculating net proceeds after strike cost and tax",
      "Startup equity glossary and guide for tech workers"
    ],
    "extensions": [
      "83(b) election deadline countdown tracker",
      "Secondary market share sale price estimator"
    ],
    "mvpScope": "Input 10,000 options at $1.00 strike; simulate a $200M company acquisition and view $75,000 net payout after taxes.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-16",
    "title": "FIRERoadmap: Financial Independence Retire Early Calculator",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "People dreaming of early retirement don't know their exact 'FIRE Number' or safe withdrawal rate.",
    "problemStatement": "People dreaming of early retirement don't know their exact 'FIRE Number' or safe withdrawal rate.",
    "solution": "A retirement planning engine calculating FIRE numbers based on the Trinity Study 4% rule and Monte Carlo simulation.",
    "proposedSolution": "A retirement planning engine calculating FIRE numbers based on the Trinity Study 4% rule and Monte Carlo simulation.",
    "realWorldUseCase": "30-year-old software engineer planning to retire at age 45.",
    "targetAudience": "30-year-old software engineer planning to retire at age 45.",
    "mainFeatures": [
      "Annual living expense intake and 25x FIRE number calculation",
      "Savings rate percentage impact calculator (50% savings rate = retirement in 17 years)",
      "Coast FIRE, Lean FIRE, and Fat FIRE milestones",
      "10,000-iteration Monte Carlo historical market sequence-of-returns simulator"
    ],
    "features": [
      "Annual living expense intake and 25x FIRE number calculation",
      "Savings rate percentage impact calculator (50% savings rate = retirement in 17 years)",
      "Coast FIRE, Lean FIRE, and Fat FIRE milestones",
      "10,000-iteration Monte Carlo historical market sequence-of-returns simulator"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, SciPy logic",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Demonstrates the Trinity Study 4% rule and tests portfolios against historical crashes (1929, 2008).",
    "roadmap": [
      "Income, expenses, and current investment portfolio intake",
      "Interactive FIRE number gauge and target retirement age calculator",
      "Monte Carlo portfolio survival probability curve across 40 years",
      "Savings rate acceleration slider showing retirement years saved"
    ],
    "extensions": [
      "Post-retirement healthcare cost estimator before Medicare",
      "Geographic arbitrage cost-of-living relocator"
    ],
    "mvpScope": "Enter $40,000 annual spending; see your $1,000,000 FIRE target and test portfolio survival through the 2008 recession.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-17",
    "title": "FXWallet: Multi-Currency Travel Wallet & Rate Arbitrage",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "International travelers lose 5% to predatory airport currency exchange booths and hidden bank markups.",
    "problemStatement": "International travelers lose 5% to predatory airport currency exchange booths and hidden bank markups.",
    "solution": "A travel wallet tracking multi-currency balances and alerting when foreign exchange rates reach 30-day highs.",
    "proposedSolution": "A travel wallet tracking multi-currency balances and alerting when foreign exchange rates reach 30-day highs.",
    "realWorldUseCase": "Traveler exchanging USD to Japanese Yen before a summer vacation in Tokyo.",
    "targetAudience": "Traveler exchanging USD to Japanese Yen before a summer vacation in Tokyo.",
    "mainFeatures": [
      "Real-time central bank foreign exchange (FX) rates for 35 currencies",
      "Multi-currency virtual wallet balance tracker (USD, EUR, JPY, GBP)",
      "Historical 90-day currency rate trend charts with all-time high/low bands",
      "Target exchange rate alert notifications"
    ],
    "features": [
      "Real-time central bank foreign exchange (FX) rates for 35 currencies",
      "Multi-currency virtual wallet balance tracker (USD, EUR, JPY, GBP)",
      "Historical 90-day currency rate trend charts with all-time high/low bands",
      "Target exchange rate alert notifications"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "ExchangeRate API, Recharts",
    "techStack": [
      "React",
      "Node.js",
      "Recharts",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Compares real mid-market interbank exchange rates against typical airport exchange booths, exposing hidden markups.",
    "roadmap": [
      "Currency conversion calculator with mid-market rate lock",
      "Multi-currency balance card with aggregated portfolio total",
      "90-day currency exchange rate trend line chart",
      "Rate alert threshold configuration modal"
    ],
    "extensions": [
      "Offline currency converter with cached rates",
      "Travel expense receipt currency auto-converter"
    ],
    "mvpScope": "Convert $500 to Japanese Yen at mid-market rates; see exactly how much airport booths would skim in hidden fees.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-18",
    "title": "StockArena: High School Virtual Stock Market Trading Game",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Students find macroeconomics dry and finish high school without basic stock market literacy.",
    "problemStatement": "Students find macroeconomics dry and finish high school without basic stock market literacy.",
    "solution": "A real-time paper trading game where students manage a $100,000 virtual portfolio with real stock market data.",
    "proposedSolution": "A real-time paper trading game where students manage a $100,000 virtual portfolio with real stock market data.",
    "realWorldUseCase": "High school economics class running a 6-week stock market simulation tournament.",
    "targetAudience": "High school economics class running a 6-week stock market simulation tournament.",
    "mainFeatures": [
      "Real-time stock price lookup and paper trading order execution (Market, Limit orders)",
      "Interactive portfolio holdings table with unrealized gain/loss",
      "Classroom tournament leaderboard ranked by portfolio return",
      "Educational company profile drawer with P/E ratios and business summaries"
    ],
    "features": [
      "Real-time stock price lookup and paper trading order execution (Market, Limit orders)",
      "Interactive portfolio holdings table with unrealized gain/loss",
      "Classroom tournament leaderboard ranked by portfolio return",
      "Educational company profile drawer with P/E ratios and business summaries"
    ],
    "frontend": "Next.js 14, Tailwind, Recharts",
    "backend": "Node.js, Express, Finnhub API",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Finnhub API, Recharts",
    "techStack": [
      "Next.js",
      "Finnhub",
      "Supabase",
      "Node.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Includes realistic trading limits preventing students from putting 100% of money into a single penny stock.",
    "roadmap": [
      "Virtual trading order entry modal (Buy/Sell with share counts)",
      "Portfolio summary cards (Cash, Equity, Total Return %)",
      "Tournament classroom leaderboard table with real-time ranks",
      "Stock research modal with 1-year historical chart and news"
    ],
    "extensions": [
      "Option trading simulation mode for advanced classes",
      "Weekly economics quiz unlocking virtual investment cash"
    ],
    "mvpScope": "Buy 10 virtual shares of Microsoft; watch portfolio update in real time with live market price movements.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-fin-19",
    "title": "CharityRound: E-Commerce Micro-Donation Checkout Widget",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "E-commerce shoppers want to support charities but won't fill out long standalone donation forms.",
    "problemStatement": "E-commerce shoppers want to support charities but won't fill out long standalone donation forms.",
    "solution": "An embeddable checkout API allowing merchants to offer 1-click order round-up donations to verified non-profits.",
    "proposedSolution": "An embeddable checkout API allowing merchants to offer 1-click order round-up donations to verified non-profits.",
    "realWorldUseCase": "Shopper buying a $28.40 book rounding up to $30.00, donating $1.60 to ocean cleanup.",
    "targetAudience": "Shopper buying a $28.40 book rounding up to $30.00, donating $1.60 to ocean cleanup.",
    "mainFeatures": [
      "Order total spare change round-up calculation",
      "Non-profit partner selection dropdown (Environmental, Children, Animal welfare)",
      "Stripe checkout split payment integration",
      "Merchant CSR sustainability dashboard tracking total community funds raised"
    ],
    "features": [
      "Order total spare change round-up calculation",
      "Non-profit partner selection dropdown (Environmental, Children, Animal welfare)",
      "Stripe checkout split payment integration",
      "Merchant CSR sustainability dashboard tracking total community funds raised"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Stripe",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Stripe API, Prisma",
    "techStack": [
      "React",
      "Node.js",
      "Stripe",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Includes a real-time merchant impact widget showing collective customer micro-donations over time.",
    "roadmap": [
      "Embeddable checkout round-up checkbox component",
      "Stripe split transfer payment processing integration",
      "Non-profit partner directory with verified 501(c)(3) badges",
      "Merchant impact counter: total dollars raised and trees planted"
    ],
    "extensions": [
      "Custom donation matching by merchant",
      "Tax deductible annual donation summary receipt for buyers"
    ],
    "mvpScope": "At checkout, check 'Round up $1.40 for local food bank'; see receipt updated and confirmation badge.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-20",
    "title": "EscrowPay: Milestone Freelance Escrow Smart Contract",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Freelancers fear doing work and not getting paid, while clients fear paying upfront and receiving nothing.",
    "problemStatement": "Freelancers fear doing work and not getting paid, while clients fear paying upfront and receiving nothing.",
    "solution": "A milestone escrow platform locking project funds in escrow and releasing payments upon deliverable approval.",
    "proposedSolution": "A milestone escrow platform locking project funds in escrow and releasing payments upon deliverable approval.",
    "realWorldUseCase": "Web designer completing Phase 1 wireframes for a $2,000 web design contract.",
    "targetAudience": "Web designer completing Phase 1 wireframes for a $2,000 web design contract.",
    "mainFeatures": [
      "Milestone project contract creation with deliverable descriptions",
      "Escrow deposit vault locking funds before work begins",
      "Deliverable submission with review and revision request workflow",
      "Arbitration and dispute resolution state machine"
    ],
    "features": [
      "Milestone project contract creation with deliverable descriptions",
      "Escrow deposit vault locking funds before work begins",
      "Deliverable submission with review and revision request workflow",
      "Arbitration and dispute resolution state machine"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Stripe",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Stripe Escrow API, Prisma",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Stripe"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Guarantees payment for completed work while protecting client deposits until milestones are delivered.",
    "roadmap": [
      "Contract authoring wizard with phased milestone amounts",
      "Client deposit funding simulation with escrow hold status",
      "Freelancer work submission with file attachments",
      "Milestone approval and instant payment release button"
    ],
    "extensions": [
      "Dispute resolution evidence upload portal",
      "Multi-signature escrow approval workflow"
    ],
    "mvpScope": "Client deposits $500 for Phase 1; freelancer submits wireframe link, client clicks 'Approve', releasing payment.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-21",
    "title": "RunwayForecaster: Small Business Cash Flow & Burn Runway",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "82% of small businesses fail due to cash flow mismanagement even when showing paper profits.",
    "problemStatement": "82% of small businesses fail due to cash flow mismanagement even when showing paper profits.",
    "solution": "A visual cash flow forecaster projecting accounts receivable, payroll, and cash runway across 90 days.",
    "proposedSolution": "A visual cash flow forecaster projecting accounts receivable, payroll, and cash runway across 90 days.",
    "realWorldUseCase": "Coffee shop owner verifying they have enough cash for next week's inventory order before payroll clears.",
    "targetAudience": "Coffee shop owner verifying they have enough cash for next week's inventory order before payroll clears.",
    "mainFeatures": [
      "Starting bank cash balance and accounts receivable schedule",
      "Recurring payroll, rent, and vendor expense calendar",
      "Daily cash trajectory line chart forecasting 90-day cash balance",
      "Critical cash deficit warning alerting 14 days before potential overdraft"
    ],
    "features": [
      "Starting bank cash balance and accounts receivable schedule",
      "Recurring payroll, rent, and vendor expense calendar",
      "Daily cash trajectory line chart forecasting 90-day cash balance",
      "Critical cash deficit warning alerting 14 days before potential overdraft"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Exposes the dangerous timing gap between making sales and actually collecting customer payments.",
    "roadmap": [
      "Cash balance and recurring expense input forms",
      "Interactive 90-day cash flow projection line chart",
      "Minimum safe cash reserve buffer line with alert triggers",
      "Upcoming cash crunch calendar days highlighted in red"
    ],
    "extensions": [
      "Scenario 'What-If' simulator: Delaying vendor payment by 14 days",
      "Integration with QuickBooks / Xero export CSVs"
    ],
    "mvpScope": "Input current $12,000 cash; view 90-day trajectory showing a danger dip to -$500 on day 42 if payroll hits before invoices clear.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-22",
    "title": "FraudWebhooks: Banking Transaction Anomaly Webhook Sandbox",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Fintech engineers need safe test environments to simulate fraud webhooks and automated card locks.",
    "problemStatement": "Fintech engineers need safe test environments to simulate fraud webhooks and automated card locks.",
    "solution": "An interactive banking sandbox allowing developers to trigger fraudulent transaction webhooks and test card locks.",
    "proposedSolution": "An interactive banking sandbox allowing developers to trigger fraudulent transaction webhooks and test card locks.",
    "realWorldUseCase": "Backend engineer testing whether an unauthorized $3,000 transaction triggers card freeze webhooks.",
    "targetAudience": "Backend engineer testing whether an unauthorized $3,000 transaction triggers card freeze webhooks.",
    "mainFeatures": [
      "Simulated transaction generator with configurable merchant, amount, and geo-location",
      "Fraud rule engine (Velocity check, Out-of-state transaction, High amount)",
      "Outgoing webhook dispatcher with retry logic and HMAC signatures",
      "Real-time webhook delivery inspection log"
    ],
    "features": [
      "Simulated transaction generator with configurable merchant, amount, and geo-location",
      "Fraud rule engine (Velocity check, Out-of-state transaction, High amount)",
      "Outgoing webhook dispatcher with retry logic and HMAC signatures",
      "Real-time webhook delivery inspection log"
    ],
    "frontend": "React, Tailwind, Monaco Editor",
    "backend": "Node.js, Express, WebSockets",
    "database": "Redis, PostgreSQL",
    "otherTech": "WebSockets, Crypto",
    "techStack": [
      "React",
      "Node.js",
      "WebSockets",
      "Redis"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Sends cryptographic HMAC-SHA256 signatures in headers so developers can verify signature validation.",
    "roadmap": [
      "Transaction generation form with instant fraud trigger buttons",
      "Webhook destination URL configuration with signing secret",
      "Cryptographic HMAC webhook dispatcher worker",
      "Monaco JSON payload inspector with HTTP response status log"
    ],
    "extensions": [
      "Automated webhook replay and retry queue simulation",
      "Mobile push notification simulation trigger"
    ],
    "mvpScope": "Trigger a 'Card Transaction: Paris, France' event and watch your local backend receive the signed webhook in 50ms.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-fin-23",
    "title": "RetireCompound: 401(k) & IRA Compound Growth Visualizer",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Young workers underestimate the power of early 401(k) contributions due to linear thinking.",
    "problemStatement": "Young workers underestimate the power of early 401(k) contributions due to linear thinking.",
    "solution": "An interactive visualizer demonstrating employer 401(k) matches and the exponential difference between starting at 22 vs 32.",
    "proposedSolution": "An interactive visualizer demonstrating employer 401(k) matches and the exponential difference between starting at 22 vs 32.",
    "realWorldUseCase": "22-year-old worker deciding whether to contribute 6% of salary to get a 100% employer 401(k) match.",
    "targetAudience": "22-year-old worker deciding whether to contribute 6% of salary to get a 100% employer 401(k) match.",
    "mainFeatures": [
      "Salary, contribution percentage, and employer match intake",
      "Interactive compound growth comparison: Starting at age 22 vs age 32",
      "Historical inflation-adjusted purchasing power toggle",
      "Total interest earned vs principal invested stacked area chart"
    ],
    "features": [
      "Salary, contribution percentage, and employer match intake",
      "Interactive compound growth comparison: Starting at age 22 vs age 32",
      "Historical inflation-adjusted purchasing power toggle",
      "Total interest earned vs principal invested stacked area chart"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Shows the staggering $600,000 difference caused by starting 10 years earlier with identical monthly contributions.",
    "roadmap": [
      "Interactive age and monthly contribution sliders",
      "Employer 401(k) match calculation logic ('Free money' highlight)",
      "Stacked area chart separating personal contributions from compound growth",
      "Summary card showing total retirement nest egg at age 65"
    ],
    "extensions": [
      "Roth IRA vs Traditional IRA tax difference comparator",
      "Required Minimum Distribution (RMD) retirement withdrawal simulator"
    ],
    "mvpScope": "Slide start age from 32 down to 22; watch projected retirement nest egg double from $450,000 to $920,000.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-24",
    "title": "DividendTrack: Real-Time Dividend Income & DRIP Calculator",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Dividend growth investors struggle to project future passive income when dividends are automatically reinvested.",
    "problemStatement": "Dividend growth investors struggle to project future passive income when dividends are automatically reinvested.",
    "solution": "A portfolio income tracker modeling dividend payment calendars and compound DRIP (Dividend Reinvestment Plan) growth.",
    "proposedSolution": "A portfolio income tracker modeling dividend payment calendars and compound DRIP (Dividend Reinvestment Plan) growth.",
    "realWorldUseCase": "Retiree tracking monthly dividend checks from 8 dividend aristocrat stocks.",
    "targetAudience": "Retiree tracking monthly dividend checks from 8 dividend aristocrat stocks.",
    "mainFeatures": [
      "Stock portfolio holding intake (Ticker, Shares, Annual dividend yield)",
      "Monthly dividend payment calendar showing expected cash payouts by month",
      "DRIP compound growth simulator reinvesting quarterly dividend payouts",
      "Yield-on-Cost (YOC) calculation honoring historical buy prices"
    ],
    "features": [
      "Stock portfolio holding intake (Ticker, Shares, Annual dividend yield)",
      "Monthly dividend payment calendar showing expected cash payouts by month",
      "DRIP compound growth simulator reinvesting quarterly dividend payouts",
      "Yield-on-Cost (YOC) calculation honoring historical buy prices"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js / Client-Side, Finnhub API",
    "database": "LocalStorage / Supabase",
    "otherTech": "Finnhub API, Recharts",
    "techStack": [
      "React",
      "Recharts",
      "Finnhub",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Projects exponential share accumulation over 20 years when dividends continuously buy fractional shares.",
    "roadmap": [
      "Stock holding entry form with dividend yield fetcher",
      "Monthly dividend income bar chart across 12 calendar months",
      "20-year DRIP reinvestment growth simulation chart",
      "Portfolio dividend safety score and payout ratio indicators"
    ],
    "extensions": [
      "Dividend ex-date reminder push notifications",
      "Taxable vs tax-advantaged account dividend tax comparison"
    ],
    "mvpScope": "Add 100 shares of Johnson & Johnson; view quarterly $124 dividend payments and 20-year DRIP projection.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-fin-25",
    "title": "ChoreBank: Family Financial Literacy & Allowance Chore App",
    "domain": "Finance & FinTech",
    "category": "Finance & FinTech",
    "problem": "Parents struggle to teach kids money management in a modern cashless society where physical coins don't exist.",
    "problemStatement": "Parents struggle to teach kids money management in a modern cashless society where physical coins don't exist.",
    "solution": "A gamified family banking app where kids complete household chores to earn digital allowances and learn budgeting.",
    "proposedSolution": "A gamified family banking app where kids complete household chores to earn digital allowances and learn budgeting.",
    "realWorldUseCase": "Parent assigning Saturday chores (folding laundry, cleaning room) with $2 allowance rewards.",
    "targetAudience": "Parent assigning Saturday chores (folding laundry, cleaning room) with $2 allowance rewards.",
    "mainFeatures": [
      "Parent chore creator with reward amounts and photo verification",
      "Child visual goal tracker (Saving for a $40 video game)",
      "Three-jar budgeting system: Spend (50%), Save (40%), Give (10%)",
      "Parent virtual interest payouts on child savings accounts to teach compound growth"
    ],
    "features": [
      "Parent chore creator with reward amounts and photo verification",
      "Child visual goal tracker (Saving for a $40 video game)",
      "Three-jar budgeting system: Spend (50%), Save (40%), Give (10%)",
      "Parent virtual interest payouts on child savings accounts to teach compound growth"
    ],
    "frontend": "React, Tailwind, Canvas Confetti",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Canvas Confetti, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Canvas Confetti"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Includes a 'Parent Interest Rate' feature paying 10% monthly interest on savings to make compound interest thrilling.",
    "roadmap": [
      "Parent chore dashboard with approval workflow",
      "Child goal progress visualizer with piggy bank animation",
      "Automatic 3-jar allocation (Spend, Save, Give)",
      "Parent interest payment simulation button"
    ],
    "extensions": [
      "Chore photo proof upload for child",
      "Printable chore reward coupon vouchers"
    ],
    "mvpScope": "Child marks 'Clean Room' complete; parent approves on phone, transferring $3 into the child's 'Save for Bicycle' jar.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-01",
    "title": "GroupItinerary: Collaborative Group Trip Itinerary & Polls",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Group trips end in chaotic WhatsApp arguments over restaurant bookings, budget, and daily activities.",
    "problemStatement": "Group trips end in chaotic WhatsApp arguments over restaurant bookings, budget, and daily activities.",
    "solution": "A collaborative trip planner where friends propose itinerary items and vote with ranked-choice polls.",
    "proposedSolution": "A collaborative trip planner where friends propose itinerary items and vote with ranked-choice polls.",
    "realWorldUseCase": "Group of 6 friends planning a 5-day vacation in Barcelona.",
    "targetAudience": "Group of 6 friends planning a 5-day vacation in Barcelona.",
    "mainFeatures": [
      "Drag-and-drop daily timeline with travel times between stops",
      "Ranked-choice activity voting polls with deadline timers",
      "Shared expense estimation per person per day",
      "Exportable offline Google Maps KML point-of-interest bundle"
    ],
    "features": [
      "Drag-and-drop daily timeline with travel times between stops",
      "Ranked-choice activity voting polls with deadline timers",
      "Shared expense estimation per person per day",
      "Exportable offline Google Maps KML point-of-interest bundle"
    ],
    "frontend": "React 19, Tailwind, dnd-kit",
    "backend": "Node.js, Express, Socket.io",
    "database": "PostgreSQL, Supabase",
    "otherTech": "dnd-kit, Socket.io",
    "techStack": [
      "React",
      "dnd-kit",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Prevents group gridlock using ranked-choice voting where the top-voted dinner spot automatically locks onto the schedule.",
    "roadmap": [
      "Interactive drag-and-drop daily schedule board",
      "Group voting poll component with real-time tally",
      "Total per-person trip budget accumulator",
      "Shared trip link with invite permissions"
    ],
    "extensions": [
      "Packing list collaborative checklist with item claims",
      "Weather forecast sync for trip dates"
    ],
    "mvpScope": "Create a 3-day Paris itinerary, add 4 museum stops, and have friends vote on Friday dinner in real time.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-travel-02",
    "title": "HiddenWalk: Anti-Tourist Local City Walking Guide",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Tourists waste vacations standing in 2-hour lines at crowded traps while charming local alleys go undiscovered.",
    "problemStatement": "Tourists waste vacations standing in 2-hour lines at crowded traps while charming local alleys go undiscovered.",
    "solution": "A curated walking tour generator prioritizing local neighborhood cafes, bookstores, and hidden courtyards.",
    "proposedSolution": "A curated walking tour generator prioritizing local neighborhood cafes, bookstores, and hidden courtyards.",
    "realWorldUseCase": "Traveler in Rome looking for artisan bakeries and quiet piazzas away from Colosseum crowds.",
    "targetAudience": "Traveler in Rome looking for artisan bakeries and quiet piazzas away from Colosseum crowds.",
    "mainFeatures": [
      "Crowd density avoidance algorithm routing around tourist bottlenecks",
      "Curated neighborhood audio stories and historic architectural notes",
      "Interactive step-by-step walking map with estimated pace time",
      "Local etiquette and tipping advice for residential neighborhood shops"
    ],
    "features": [
      "Crowd density avoidance algorithm routing around tourist bottlenecks",
      "Curated neighborhood audio stories and historic architectural notes",
      "Interactive step-by-step walking map with estimated pace time",
      "Local etiquette and tipping advice for residential neighborhood shops"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, Turf.js",
    "techStack": [
      "React",
      "Mapbox",
      "PostGIS",
      "Node.js"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Routs walkers along tree-lined pedestrian lanes and alleys that have 80% fewer tourist footfalls.",
    "roadmap": [
      "Mapbox pedestrian route generator with custom waypoints",
      "Audio narration player with point-of-interest triggers",
      "Stop-by-stop photo cards with local menu recommendations",
      "Offline map caching for international roaming"
    ],
    "extensions": [
      "Filter walks by theme (Literary history, Street art, Pastry crawl)",
      "User hidden-gem submission with community moderation"
    ],
    "mvpScope": "Select '2-Hour Quiet Walk in Paris'; follow a scenic route through hidden covered passages and courtyards.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-03",
    "title": "BackpackRoute: Budget Backpacker Route & Hostel Cost Optimizer",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Backpackers burn through travel savings by choosing expensive backtracking train routes across Europe.",
    "problemStatement": "Backpackers burn through travel savings by choosing expensive backtracking train routes across Europe.",
    "solution": "A travel route optimizer finding the cheapest circular backpacking route between multiple European cities.",
    "proposedSolution": "A travel route optimizer finding the cheapest circular backpacking route between multiple European cities.",
    "realWorldUseCase": "Student planning a 30-day budget backpacking trip across 6 European cities on a $1,500 budget.",
    "targetAudience": "Student planning a 30-day budget backpacking trip across 6 European cities on a $1,500 budget.",
    "mainFeatures": [
      "Multi-city Traveling Salesperson Problem (TSP) cost optimizer",
      "Budget hostel and Flixbus / Eurail train fare comparison",
      "Daily survival budget tracker (Dorm bed, Street food, Museum entry)",
      "Visa stay calculator (Schengen 90/180-day rule countdown)"
    ],
    "features": [
      "Multi-city Traveling Salesperson Problem (TSP) cost optimizer",
      "Budget hostel and Flixbus / Eurail train fare comparison",
      "Daily survival budget tracker (Dorm bed, Street food, Museum entry)",
      "Visa stay calculator (Schengen 90/180-day rule countdown)"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python FastAPI, NetworkX",
    "database": "PostgreSQL / SQLite",
    "otherTech": "NetworkX, Recharts",
    "techStack": [
      "React",
      "FastAPI",
      "NetworkX",
      "Recharts"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Solves the Traveling Salesperson Problem weighted by actual inter-city bus and train ticket costs.",
    "roadmap": [
      "Multi-city route input wizard with date range selection",
      "Cheapest circular route solver using NetworkX graph algorithms",
      "Day-by-day budget breakdown table with hostel averages",
      "Schengen 90-day visa countdown safety clock"
    ],
    "extensions": [
      "Backpacker hostel social board connecting solo travelers",
      "Hostel laundry and kitchen facility filter"
    ],
    "mvpScope": "Enter Berlin, Prague, Budapest, and Vienna; view the optimal circular route saving $180 in train fares.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-04",
    "title": "OffMapCache: Offline Travel Guide & Point-of-Interest Cache",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers arriving at international airports without mobile roaming get stranded without transport guides.",
    "problemStatement": "Travelers arriving at international airports without mobile roaming get stranded without transport guides.",
    "solution": "An offline-first travel companion caching essential city transit maps, emergency phrases, and offline directions.",
    "proposedSolution": "An offline-first travel companion caching essential city transit maps, emergency phrases, and offline directions.",
    "realWorldUseCase": "Traveler landing in Tokyo without internet needing train instructions to their hotel.",
    "targetAudience": "Traveler landing in Tokyo without internet needing train instructions to their hotel.",
    "mainFeatures": [
      "100% offline access via IndexedDB and Service Workers",
      "Downloadable city starter packs (Airport transit guide, Subway map, Emergency numbers)",
      "Offline phonetic phrasebook with emergency medical terms",
      "Offline GPS compass pointing directly toward booked hotel coordinates"
    ],
    "features": [
      "100% offline access via IndexedDB and Service Workers",
      "Downloadable city starter packs (Airport transit guide, Subway map, Emergency numbers)",
      "Offline phonetic phrasebook with emergency medical terms",
      "Offline GPS compass pointing directly toward booked hotel coordinates"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "PWA Service Worker / Cache API",
    "database": "IndexedDB (Dexie.js)",
    "otherTech": "Geolocation API, PWA",
    "techStack": [
      "React",
      "PWA",
      "IndexedDB",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Features an offline GPS vector compass that points an arrow toward your hotel coordinates even without map tiles.",
    "roadmap": [
      "City selection and 1-click offline package download manager",
      "Subway map viewer with pan and zoom capabilities",
      "Essential phrases accordion with audio pronunciation playback",
      "Offline GPS distance and directional bearing compass"
    ],
    "extensions": [
      "Custom pin drop with offline note taking",
      "Exchange rate cheat-sheet table"
    ],
    "mvpScope": "Switch phone to airplane mode; open Tokyo guide, view airport train route, and consult Japanese phrases.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-05",
    "title": "EcoVoyage: Flight vs Train Carbon & Scenic Route Planner",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers want to travel sustainably but don't realize high-speed rail is often faster door-to-door than flying.",
    "problemStatement": "Travelers want to travel sustainably but don't realize high-speed rail is often faster door-to-door than flying.",
    "solution": "A multi-modal journey planner comparing trains vs flights on door-to-door travel time, cost, and CO2 emissions.",
    "proposedSolution": "A multi-modal journey planner comparing trains vs flights on door-to-door travel time, cost, and CO2 emissions.",
    "realWorldUseCase": "Traveler choosing between a 1-hour flight and a 3.5-hour high-speed train between London and Paris.",
    "targetAudience": "Traveler choosing between a 1-hour flight and a 3.5-hour high-speed train between London and Paris.",
    "mainFeatures": [
      "Door-to-door travel time calculator (Including airport security and transit)",
      "Carbon emission comparison in kg CO2 per passenger (Train vs Flight)",
      "Scenic route highlights and panoramic window view ratings",
      "Carbon tax equivalency calculation in trees planted"
    ],
    "features": [
      "Door-to-door travel time calculator (Including airport security and transit)",
      "Carbon emission comparison in kg CO2 per passenger (Train vs Flight)",
      "Scenic route highlights and panoramic window view ratings",
      "Carbon tax equivalency calculation in trees planted"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Recharts",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Reveals true door-to-door journey time: trains arrive city-center to city-center without 2-hour airport security waits.",
    "roadmap": [
      "City departure and destination search input",
      "Door-to-door time breakdown stacked bar chart",
      "CO2 emissions comparison gauge showing 90% savings for rail",
      "Scenic train line photography and booking links"
    ],
    "extensions": [
      "Overnight sleeper train route discovery directory",
      "Rail pass pass-holder seat reservation guide"
    ],
    "mvpScope": "Compare London to Amsterdam: see the high-speed train saves 140kg CO2 and matches flight time door-to-door.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-06",
    "title": "StreetEats: Culturally Verified Street Food & Allergen Guide",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers with celiac disease or peanut allergies miss local food cultures in Asia due to fear of anaphylaxis.",
    "problemStatement": "Travelers with celiac disease or peanut allergies miss local food cultures in Asia due to fear of anaphylaxis.",
    "solution": "A cultural street food directory with dietary filter cards and emergency chef translation allergy cards.",
    "proposedSolution": "A cultural street food directory with dietary filter cards and emergency chef translation allergy cards.",
    "realWorldUseCase": "Celiac traveler in Thailand ordering pad thai with zero gluten or soy sauce.",
    "targetAudience": "Celiac traveler in Thailand ordering pad thai with zero gluten or soy sauce.",
    "mainFeatures": [
      "Local street food dish encyclopedia with authentic names and ingredients",
      "Dietary and allergen filter (Gluten-free, Vegan, Nut allergy, Halal)",
      "Pronounceable audio phrase and printable chef translation card in local script",
      "Crowdsourced safe street vendor stalls with verified reviews"
    ],
    "features": [
      "Local street food dish encyclopedia with authentic names and ingredients",
      "Dietary and allergen filter (Gluten-free, Vegan, Nut allergy, Halal)",
      "Pronounceable audio phrase and printable chef translation card in local script",
      "Crowdsourced safe street vendor stalls with verified reviews"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Web Speech API, Prisma",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Web Speech API"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Provides high-resolution allergy translation cards in Thai, Japanese, and Vietnamese explaining severity to chefs.",
    "roadmap": [
      "Searchable dish catalog with ingredient breakdown cards",
      "Allergy filter toggle showing strictly safe local street dishes",
      "Printable and full-screen mobile chef translation card",
      "Audio pronunciation button for speaking local dish names"
    ],
    "extensions": [
      "Street food night market vendor location map",
      "User review and photo proof upload for allergy safety"
    ],
    "mvpScope": "Select 'Gluten-Free' in Tokyo; view 8 naturally gluten-free dishes and show an allergy card in Japanese script.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-07",
    "title": "SoloSafe: Solo Traveler Safety Companion & Check-In Beacon",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Solo travelers, especially women, face anxiety exploring unfamiliar cities after dark.",
    "problemStatement": "Solo travelers, especially women, face anxiety exploring unfamiliar cities after dark.",
    "solution": "A solo traveler safety tool featuring scheduled automatic check-in beacons, emergency fake calls, and safe havens.",
    "proposedSolution": "A solo traveler safety tool featuring scheduled automatic check-in beacons, emergency fake calls, and safe havens.",
    "realWorldUseCase": "Solo female traveler walking back to her hostel through an unfamiliar neighborhood at 11:00 PM.",
    "targetAudience": "Solo female traveler walking back to her hostel through an unfamiliar neighborhood at 11:00 PM.",
    "mainFeatures": [
      "Scheduled check-in timer: if unconfirmed, dispatches SMS with GPS to trusted contact",
      "One-tap realistic simulated incoming fake phone call to deter harassment",
      "Verified 24/7 safe havens directory (Hotels, Police stations, Late-night pharmacies)",
      "Discreet emergency SOS trigger activating loud audible alarm or silent SMS"
    ],
    "features": [
      "Scheduled check-in timer: if unconfirmed, dispatches SMS with GPS to trusted contact",
      "One-tap realistic simulated incoming fake phone call to deter harassment",
      "Verified 24/7 safe havens directory (Hotels, Police stations, Late-night pharmacies)",
      "Discreet emergency SOS trigger activating loud audible alarm or silent SMS"
    ],
    "frontend": "React, Tailwind, Howler.js",
    "backend": "Client-Side (Mobile Web)",
    "database": "LocalStorage",
    "otherTech": "Web Audio API, Twilio API",
    "techStack": [
      "React",
      "Web Audio API",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Features a convincing fake incoming phone call ringtone and voice audio to deter street harassment.",
    "roadmap": [
      "Scheduled safety countdown timer with PIN confirmation",
      "Simulated incoming phone call screen with audio voice clip",
      "Emergency contact SMS webhook dispatcher with current GPS coordinates",
      "Map of nearby 24-hour illuminated public safe havens"
    ],
    "extensions": [
      "Local neighborhood safety heatmaps by night travelers",
      "Battery conservation emergency low-power mode"
    ],
    "mvpScope": "Set a 30-minute walk timer; tap 'Simulate Fake Call' to hear a loud phone ring and realistic conversational voice.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-08",
    "title": "FlightPulse: Machine Learning Flight Delay & Weather Forecaster",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Passengers get trapped in airport terminals for 8 hours because airlines announce delays at the very last minute.",
    "problemStatement": "Passengers get trapped in airport terminals for 8 hours because airlines announce delays at the very last minute.",
    "solution": "A flight delay predictor analyzing inbound aircraft turns and airport weather to forecast delays 4 hours early.",
    "proposedSolution": "A flight delay predictor analyzing inbound aircraft turns and airport weather to forecast delays 4 hours early.",
    "realWorldUseCase": "Traveler at home deciding whether to leave for the airport or wait out an unannounced incoming plane delay.",
    "targetAudience": "Traveler at home deciding whether to leave for the airport or wait out an unannounced incoming plane delay.",
    "mainFeatures": [
      "Flight number lookup and inbound aircraft tail tracking",
      "Origin and destination airport radar weather delay index",
      "Machine learning delay probability forecast (0-100% chance)",
      "Recommended airport departure time adjusted for predicted delays"
    ],
    "features": [
      "Flight number lookup and inbound aircraft tail tracking",
      "Origin and destination airport radar weather delay index",
      "Machine learning delay probability forecast (0-100% chance)",
      "Recommended airport departure time adjusted for predicted delays"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Python FastAPI, Scikit-Learn",
    "database": "PostgreSQL / SQLite",
    "otherTech": "AviationStack API, Recharts",
    "techStack": [
      "React",
      "FastAPI",
      "Scikit-Learn",
      "Recharts"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Tracks the physical inbound plane: if your incoming plane hasn't left Chicago, your flight will definitely be delayed.",
    "roadmap": [
      "Flight search bar with airline and route metadata",
      "Inbound aircraft location radar and turnaround status",
      "Predicted delay probability gauge with confidence rating",
      "Historical on-time performance histogram for the flight"
    ],
    "extensions": [
      "Alternative flight rebooking availability finder",
      "Airport lounge day-pass finder during long delays"
    ],
    "mvpScope": "Search Flight UA421; view incoming aircraft stuck on tarmac, predicting a 90-minute departure delay.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-09",
    "title": "PackWise: Weather-Adaptive Dynamic Packing List Generator",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers forget rain jackets or power plug adapters because generic packing checklists ignore forecast weather.",
    "problemStatement": "Travelers forget rain jackets or power plug adapters because generic packing checklists ignore forecast weather.",
    "solution": "A smart packing assistant generating custom packing lists based on destination weather, duration, and planned activities.",
    "proposedSolution": "A smart packing assistant generating custom packing lists based on destination weather, duration, and planned activities.",
    "realWorldUseCase": "Traveler packing for a 7-day trip to Iceland involving hiking, hot springs, and city dinners.",
    "targetAudience": "Traveler packing for a 7-day trip to Iceland involving hiking, hot springs, and city dinners.",
    "mainFeatures": [
      "Destination 10-day weather forecast ingestion (Rain, Snow, High/Low temp)",
      "Activity-based packing modules (Hiking gear, Swimming, Formal dining, Tech)",
      "Electrical wall plug adapter guide for the destination country",
      "Interactive luggage checklist with item weight estimates to avoid baggage fees"
    ],
    "features": [
      "Destination 10-day weather forecast ingestion (Rain, Snow, High/Low temp)",
      "Activity-based packing modules (Hiking gear, Swimming, Formal dining, Tech)",
      "Electrical wall plug adapter guide for the destination country",
      "Interactive luggage checklist with item weight estimates to avoid baggage fees"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Open-Meteo API, Lucide React",
    "techStack": [
      "React",
      "Open-Meteo",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Automatically checks destination electrical socket types and adds the correct Type C or G adapter to the list.",
    "roadmap": [
      "Trip destination and date range selector with weather API fetch",
      "Activity checkbox selector (Gym, Beach, Hiking, Business)",
      "Categorized packing checklist with check-off states",
      "Total estimated bag weight calculator (under 50 lbs limit)"
    ],
    "extensions": [
      "Laundry schedule reminder for trips > 7 days",
      "Printable PDF packing checklist export"
    ],
    "mvpScope": "Enter 'Reykjavik for 5 days with hiking'; view packing list auto-populated with waterproof boots and Type C plugs.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-10",
    "title": "EtiquettePocket: Global Cultural Customs & Tipping Handbook",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers unintentionally offend locals by tipping in Japan or showing the soles of shoes in Arab cultures.",
    "problemStatement": "Travelers unintentionally offend locals by tipping in Japan or showing the soles of shoes in Arab cultures.",
    "solution": "A cultural etiquette guide covering tipping standards, dining customs, temple dress codes, and taboo gestures.",
    "proposedSolution": "A cultural etiquette guide covering tipping standards, dining customs, temple dress codes, and taboo gestures.",
    "realWorldUseCase": "Business traveler dining with international clients in Tokyo for the first time.",
    "targetAudience": "Business traveler dining with international clients in Tokyo for the first time.",
    "mainFeatures": [
      "Searchable directory of 120+ countries with cultural dos and don'ts",
      "Tipping calculator honoring local norms (e.g. tipping is considered rude in Japan)",
      "Religious and sacred site dress code requirements (Temples, Mosques, Churches)",
      "Common dining etiquette guides (Chopstick rules, Paying the bill customs)"
    ],
    "features": [
      "Searchable directory of 120+ countries with cultural dos and don'ts",
      "Tipping calculator honoring local norms (e.g. tipping is considered rude in Japan)",
      "Religious and sacred site dress code requirements (Temples, Mosques, Churches)",
      "Common dining etiquette guides (Chopstick rules, Paying the bill customs)"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Lucide React, Tailwind",
    "techStack": [
      "React",
      "Tailwind",
      "LocalStorage",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Features clear, actionable advice preventing embarrassing cultural faux pas in daily interactions.",
    "roadmap": [
      "Country selector with instant cultural summary card",
      "Tipping norm calculator (0%, 10%, 15%, or 'Do Not Tip')",
      "Interactive 'Dos and Don'ts' accordion with real cultural explanations",
      "Body language and gesture taboo visual warnings"
    ],
    "extensions": [
      "Phrases for polite dining appreciation in local languages",
      "Business card exchange etiquette guides"
    ],
    "mvpScope": "Select 'Japan'; view tipping rule: 'Do not tip: excellent service is standard; tipping can cause embarrassment'.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-11",
    "title": "GeofenceTour: GPS Geofenced Audio Walking Tour Creator",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers want engaging walking tours without paying $30 for human tour guides or staring at phones.",
    "problemStatement": "Travelers want engaging walking tours without paying $30 for human tour guides or staring at phones.",
    "solution": "An audio tour platform playing location-specific historical narrations automatically as travelers walk past landmarks.",
    "proposedSolution": "An audio tour platform playing location-specific historical narrations automatically as travelers walk past landmarks.",
    "realWorldUseCase": "Tourist walking through the historic Freedom Trail in Boston listening to hands-free history.",
    "targetAudience": "Tourist walking through the historic Freedom Trail in Boston listening to hands-free history.",
    "mainFeatures": [
      "Geolocation GPS boundary coordinate triggers (Geofencing)",
      "Automatic background audio narration playback upon entering landmark radius",
      "Interactive walking route map with unlocked milestone badges",
      "Creator studio allowing local historians to record and publish audio walks"
    ],
    "features": [
      "Geolocation GPS boundary coordinate triggers (Geofencing)",
      "Automatic background audio narration playback upon entering landmark radius",
      "Interactive walking route map with unlocked milestone badges",
      "Creator studio allowing local historians to record and publish audio walks"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Howler.js",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Mapbox GL, Howler.js",
    "techStack": [
      "React",
      "Mapbox",
      "Howler.js",
      "PostGIS"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Hands-free operation: keep phone in your pocket; audio stories trigger automatically as you walk near monuments.",
    "roadmap": [
      "Mapbox tour map with circular landmark trigger radiuses",
      "Geolocation position watcher triggering Howler.js audio clips",
      "Tour progression drawer with transcribed story text and historical photos",
      "Creator studio for placing new GPS audio waypoints"
    ],
    "extensions": [
      "Multi-language audio translation toggle",
      "Offline audio caching for zero data usage"
    ],
    "mvpScope": "Simulate walking past landmark coordinate; listen to automated audio story trigger with photo pop-up.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-travel-12",
    "title": "ScenicDetour: Road Trip Scenic Byway & Rest Stop Planner",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Road trippers drive boring interstate highways, missing breathtaking canyon viewpoints 10 minutes off route.",
    "problemStatement": "Road trippers drive boring interstate highways, missing breathtaking canyon viewpoints 10 minutes off route.",
    "solution": "A road trip route planner recommending scenic detours, historic diners, and national park viewpoints.",
    "proposedSolution": "A road trip route planner recommending scenic detours, historic diners, and national park viewpoints.",
    "realWorldUseCase": "Family driving from Denver to Salt Lake City choosing scenic canyon passes over monotonous highways.",
    "targetAudience": "Family driving from Denver to Salt Lake City choosing scenic canyon passes over monotonous highways.",
    "mainFeatures": [
      "Route corridor search identifying attractions within 15 minutes of route",
      "Curated database of scenic byways, quirky roadside attractions, and clean rest areas",
      "Trip fuel and driving time cost comparison for detours",
      "Turn-by-turn road trip itinerary with gas stop intervals"
    ],
    "features": [
      "Route corridor search identifying attractions within 15 minutes of route",
      "Curated database of scenic byways, quirky roadside attractions, and clean rest areas",
      "Trip fuel and driving time cost comparison for detours",
      "Turn-by-turn road trip itinerary with gas stop intervals"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Mapbox GL, Turf.js",
    "techStack": [
      "React",
      "Mapbox",
      "PostGIS",
      "Node.js"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Calculates the exact time cost: 'This scenic canyon detour adds only 18 minutes to your 6-hour drive'.",
    "roadmap": [
      "Origin and destination routing with Mapbox Directions API",
      "Scenic detour discovery along road corridor using Turf.js buffers",
      "Detour card with photos, visitor ratings, and added driving minutes",
      "Exportable road trip itinerary link"
    ],
    "extensions": [
      "Clean restroom and dog park filter on rest stops",
      "National park vehicle pass requirement notes"
    ],
    "mvpScope": "Plan a route from Las Vegas to Zion; view suggested 15-minute scenic detour through Valley of Fire.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-13",
    "title": "MetroNav: International Public Transit Ticket & Metro Decipherer",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Tourists stand paralyzed before foreign metro ticket machines unable to read complex fare zone charts.",
    "problemStatement": "Tourists stand paralyzed before foreign metro ticket machines unable to read complex fare zone charts.",
    "solution": "A public transit decoder explaining how to buy tickets, validate passes, and navigate subway systems in 40 cities.",
    "proposedSolution": "A public transit decoder explaining how to buy tickets, validate passes, and navigate subway systems in 40 cities.",
    "realWorldUseCase": "Tourist in Berlin trying to buy an AB vs ABC zone S-Bahn ticket.",
    "targetAudience": "Tourist in Berlin trying to buy an AB vs ABC zone S-Bahn ticket.",
    "mainFeatures": [
      "City subway ticket breakdown (Single trip, Day pass, Contactless tap-to-pay)",
      "Ticket machine step-by-step visual screenshot walkthrough",
      "Validation rules (e.g. stamping ticket on platform before boarding to avoid \u20ac60 fines)",
      "Subway entrance, transfer, and exit navigation tips"
    ],
    "features": [
      "City subway ticket breakdown (Single trip, Day pass, Contactless tap-to-pay)",
      "Ticket machine step-by-step visual screenshot walkthrough",
      "Validation rules (e.g. stamping ticket on platform before boarding to avoid \u20ac60 fines)",
      "Subway entrance, transfer, and exit navigation tips"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Lucide React, Tailwind",
    "techStack": [
      "React",
      "Tailwind",
      "LocalStorage",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Warns travelers about city-specific transit traps, like forgetting to stamp physical paper tickets in Germany or Italy.",
    "roadmap": [
      "City selector with subway system overview card",
      "Ticket type comparison table with pricing and zone explanations",
      "Step-by-step visual machine guide with highlighted buttons",
      "Common tourist transit penalty warning banners"
    ],
    "extensions": [
      "Offline city transit guide caching",
      "Interactive fare zone calculator by destination station"
    ],
    "mvpScope": "Select 'Berlin'; view clear warning: 'Must stamp ticket in red validator box on platform before boarding'.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-14",
    "title": "VisaPass: International Travel Visa & Passport Validity Checker",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers are denied boarding at the airport because their passport has 5 months validity instead of 6.",
    "problemStatement": "Travelers are denied boarding at the airport because their passport has 5 months validity instead of 6.",
    "solution": "A visa requirement checker evaluating passport nationality, destination country, and mandatory validity rules.",
    "proposedSolution": "A visa requirement checker evaluating passport nationality, destination country, and mandatory validity rules.",
    "realWorldUseCase": "US citizen traveling to Vietnam checking whether an eVisa is required and passport validity rules.",
    "targetAudience": "US citizen traveling to Vietnam checking whether an eVisa is required and passport validity rules.",
    "mainFeatures": [
      "Passport nationality and destination country bilateral rules matrix",
      "Mandatory passport validity rule checker (6 months rule, blank pages required)",
      "eVisa application links and processing time warnings",
      "Schengen 90/180-day rule rolling stay calculator"
    ],
    "features": [
      "Passport nationality and destination country bilateral rules matrix",
      "Mandatory passport validity rule checker (6 months rule, blank pages required)",
      "eVisa application links and processing time warnings",
      "Schengen 90/180-day rule rolling stay calculator"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Lucide React, Tailwind",
    "techStack": [
      "React",
      "Node.js",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Alerts travelers to the strict '6-Month Passport Rule' enforced by airlines and international immigration.",
    "roadmap": [
      "Passport country and destination country dropdown selectors",
      "Visa requirement status card (Visa-Free, eVisa, Embassy Visa Required)",
      "Mandatory passport validity countdown from trip return date",
      "Official government immigration portal links (preventing scam fee sites)"
    ],
    "extensions": [
      "Vaccine and yellow fever entry requirement alerts",
      "Multi-country layover transit visa requirements"
    ],
    "mvpScope": "Select US passport traveling to Brazil; view eVisa requirement with official embassy link and 6-month validity warning.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-15",
    "title": "WheelTravel: Crowdsourced Wheelchair & Accessibility Travel Guide",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Wheelchair users arrive at hotels advertised as 'accessible' only to find two steps at the entrance with no ramp.",
    "problemStatement": "Wheelchair users arrive at hotels advertised as 'accessible' only to find two steps at the entrance with no ramp.",
    "solution": "A verified accessibility guide documenting street curbs, elevator dimensions, and step-free hotel entrances.",
    "proposedSolution": "A verified accessibility guide documenting street curbs, elevator dimensions, and step-free hotel entrances.",
    "realWorldUseCase": "Wheelchair traveler planning an accessible weekend trip to London.",
    "targetAudience": "Wheelchair traveler planning an accessible weekend trip to London.",
    "mainFeatures": [
      "Step-free route mapping avoiding cobblestones and steep hills",
      "Verified accessibility profiles (Door width, Roll-in shower, Elevator dimensions)",
      "Crowdsourced photo proof submitted by actual wheelchair users",
      "Accessible public transit stations with working elevator status alerts"
    ],
    "features": [
      "Step-free route mapping avoiding cobblestones and steep hills",
      "Verified accessibility profiles (Door width, Roll-in shower, Elevator dimensions)",
      "Crowdsourced photo proof submitted by actual wheelchair users",
      "Accessible public transit stations with working elevator status alerts"
    ],
    "frontend": "Next.js 14, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Mapbox GL, Prisma",
    "techStack": [
      "Next.js",
      "Mapbox",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Features photographic proof of bathroom door widths and roll-in showers to eliminate false hotel claims.",
    "roadmap": [
      "Mapbox step-free accessible navigation routing",
      "Venue accessibility audit form with standardized dimensions",
      "Live subway station elevator outage status feed",
      "Community verified accessible travel forum"
    ],
    "extensions": [
      "Accessible taxi booking directory with wheelchair lift vehicles",
      "Auditory and sensory-friendly attraction filters"
    ],
    "mvpScope": "Search 'Step-free museum entrances in Paris'; view verified photo proof of the ramp and elevator locations.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-16",
    "title": "RouteJournal: Travel GPS Photo Map & Journal Synthesizer",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers take 800 vacation photos on their phone that sit unorganized in a camera roll forever.",
    "problemStatement": "Travelers take 800 vacation photos on their phone that sit unorganized in a camera roll forever.",
    "solution": "A visual travel journal mapping phone photos along an interactive route map with timestamps and notes.",
    "proposedSolution": "A visual travel journal mapping phone photos along an interactive route map with timestamps and notes.",
    "realWorldUseCase": "Traveler creating an interactive multimedia map journal of a 2-week road trip through New Zealand.",
    "targetAudience": "Traveler creating an interactive multimedia map journal of a 2-week road trip through New Zealand.",
    "mainFeatures": [
      "Photo EXIF GPS coordinate and timestamp extraction",
      "Automatic chronological trip route line drawing between photo stops",
      "Day-by-day travel story narrative editor with photo carousels",
      "Shareable interactive trip webpage link and printable photobook export"
    ],
    "features": [
      "Photo EXIF GPS coordinate and timestamp extraction",
      "Automatic chronological trip route line drawing between photo stops",
      "Day-by-day travel story narrative editor with photo carousels",
      "Shareable interactive trip webpage link and printable photobook export"
    ],
    "frontend": "React, Mapbox GL, Tailwind, exifr",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / Supabase",
    "otherTech": "exifr, Mapbox GL",
    "techStack": [
      "React",
      "Mapbox",
      "exifr",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Extracts GPS coordinates directly from photo EXIF metadata to automatically plot your travel path on a map.",
    "roadmap": [
      "Multi-photo upload with client-side EXIF GPS coordinate parsing",
      "Mapbox chronological route path drawer connecting photo pins",
      "Day-by-day travel journal entry editor with captions",
      "Public shareable link with interactive map replay"
    ],
    "extensions": [
      "Weather conditions on photo date historical lookup",
      "Downloadable travel diary PDF export"
    ],
    "mvpScope": "Drop 10 vacation photos; watch an interactive travel route line connect the photo locations on a map.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-travel-17",
    "title": "NomadScore: Digital Nomad City Liveability & Coworking Index",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Remote workers relocate to cheap international cities only to find terrible 2 Mbps internet and power blackouts.",
    "problemStatement": "Remote workers relocate to cheap international cities only to find terrible 2 Mbps internet and power blackouts.",
    "solution": "A digital nomad city scorecard ranking global destinations on verified WiFi speed, cost of living, and safety.",
    "proposedSolution": "A digital nomad city scorecard ranking global destinations on verified WiFi speed, cost of living, and safety.",
    "realWorldUseCase": "Remote software engineer deciding between Lisbon, Chiang Mai, and Medellin for a 3-month stay.",
    "targetAudience": "Remote software engineer deciding between Lisbon, Chiang Mai, and Medellin for a 3-month stay.",
    "mainFeatures": [
      "Crowdsourced verified internet download/upload speeds (Mbps)",
      "Monthly cost of living breakdown (1-bedroom rent, Coworking desk, Food)",
      "Safety, English proficiency, and digital nomad visa requirements",
      "Time-zone overlap visualizer for remote US/European work hours"
    ],
    "features": [
      "Crowdsourced verified internet download/upload speeds (Mbps)",
      "Monthly cost of living breakdown (1-bedroom rent, Coworking desk, Food)",
      "Safety, English proficiency, and digital nomad visa requirements",
      "Time-zone overlap visualizer for remote US/European work hours"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Node.js, Express",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "Recharts",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Visualizes real-time time-zone overlap hours with your employer's headquarter office.",
    "roadmap": [
      "Searchable global city directory with composite nomad score",
      "Cost of living comparison cards with currency conversion",
      "Verified coworking space directory with internet speed tests",
      "Time-zone overlap bar chart showing shared working hours"
    ],
    "extensions": [
      "Digital nomad visa tax and duration comparison tool",
      "Community nomad meetups and housing board"
    ],
    "mvpScope": "Compare Lisbon vs Chiang Mai; see monthly costs ($2,100 vs $950) and verified 180 Mbps average coworking WiFi.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-18",
    "title": "TrailScout: National Park Hiking Trail & Elevation Tracker",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Hikers get caught on mountain trails after sunset because they miscalculated trail steepness and sunset times.",
    "problemStatement": "Hikers get caught on mountain trails after sunset because they miscalculated trail steepness and sunset times.",
    "solution": "A trail guide evaluating elevation gain, sunset cutoff times, and current park ranger trail conditions.",
    "proposedSolution": "A trail guide evaluating elevation gain, sunset cutoff times, and current park ranger trail conditions.",
    "realWorldUseCase": "Hiker choosing between a 4-mile moderate loop and an 8-mile strenuous ridge climb in Yosemite.",
    "targetAudience": "Hiker choosing between a 4-mile moderate loop and an 8-mile strenuous ridge climb in Yosemite.",
    "mainFeatures": [
      "Trail elevation profile graph with grade steepness percentages",
      "Sunset countdown and 'Turnaround Time' safety calculation",
      "Park ranger trail condition alerts (Mud, Snow on pass, Bear activity)",
      "Downloadable GPX trail waypoint files for offline GPS apps"
    ],
    "features": [
      "Trail elevation profile graph with grade steepness percentages",
      "Sunset countdown and 'Turnaround Time' safety calculation",
      "Park ranger trail condition alerts (Mud, Snow on pass, Bear activity)",
      "Downloadable GPX trail waypoint files for offline GPS apps"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Recharts, GPX parser",
    "techStack": [
      "React",
      "FastAPI",
      "Recharts",
      "PostGIS"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Calculates the critical 'Turnaround Time': the exact hour hikers must turn back to reach the car before dark.",
    "roadmap": [
      "Trail elevation profile area chart with high and low points",
      "Naismith's rule hiking time calculator factoring elevation gain",
      "Real-time sunset countdown timer with required turnaround alert",
      "Downloadable GPX track export button"
    ],
    "extensions": [
      "Water source waypoint filter along the trail",
      "Trail difficulty rating based on grade steepness"
    ],
    "mvpScope": "Select Half Dome trail; view elevation profile chart, 10-hour estimated hike time, and 3:00 PM turnaround deadline.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-19",
    "title": "PhraseEcho: Offline Audio Phrasebook with Phonetic Pronunciation",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers struggle to pronounce local phrases from written guidebooks, leading to blank stares from locals.",
    "problemStatement": "Travelers struggle to pronounce local phrases from written guidebooks, leading to blank stares from locals.",
    "solution": "A voice phrasebook with slowed audio pronunciation, phonetic transliteration, and flashcard practice.",
    "proposedSolution": "A voice phrasebook with slowed audio pronunciation, phonetic transliteration, and flashcard practice.",
    "realWorldUseCase": "English speaker learning to pronounce 'Where is the bathroom?' in Czech or Greek.",
    "targetAudience": "English speaker learning to pronounce 'Where is the bathroom?' in Czech or Greek.",
    "mainFeatures": [
      "Categorized travel phrases (Emergency, Ordering food, Transport, Numbers)",
      "Slowed audio playback (0.75x speed) with phonetic syllable breakdown",
      "Microphone speech shadowing comparison evaluator",
      "100% offline access via Web Audio and client-side audio assets"
    ],
    "features": [
      "Categorized travel phrases (Emergency, Ordering food, Transport, Numbers)",
      "Slowed audio playback (0.75x speed) with phonetic syllable breakdown",
      "Microphone speech shadowing comparison evaluator",
      "100% offline access via Web Audio and client-side audio assets"
    ],
    "frontend": "React, Web Audio API, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "IndexedDB",
    "otherTech": "Web Speech API, Soundfonts",
    "techStack": [
      "React",
      "Web Audio API",
      "Web Speech API",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Features syllable-by-syllable phonetic breakdowns with audio recording comparison for accent practice.",
    "roadmap": [
      "Phrase category selector with quick search bar",
      "Slow-motion audio pronunciation player with pitch preservation",
      "Microphone recording comparison wave with visual feedback",
      "Offline IndexedDB phrase caching"
    ],
    "extensions": [
      "Custom phrase bookmarking and Anki flashcard export",
      "Emergency medical symptom audio phrases"
    ],
    "mvpScope": "Click 'D\u011bkuji' (Thank you); listen to normal speed and 0.75x slowed audio with phonetic 'DYEH-koo-yee' breakdown.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-20",
    "title": "TripBudget: Multi-Currency Travel Budget & Split-Receipts",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers blow their vacation budgets in foreign currencies due to confusing exchange math in their heads.",
    "problemStatement": "Travelers blow their vacation budgets in foreign currencies due to confusing exchange math in their heads.",
    "solution": "A travel spending tracker logging purchases in foreign currency and auto-converting to home currency with daily caps.",
    "proposedSolution": "A travel spending tracker logging purchases in foreign currency and auto-converting to home currency with daily caps.",
    "realWorldUseCase": "Traveler on a $100/day budget in Japan logging meals in Yen while watching their USD budget balance.",
    "targetAudience": "Traveler on a $100/day budget in Japan logging meals in Yen while watching their USD budget balance.",
    "mainFeatures": [
      "Multi-currency expense logging (Enter 3,500 JPY -> Converted to $23.40 USD)",
      "Daily target spending budget gauge (Under budget vs Over budget)",
      "Category spending breakdown (Dining, Transport, Lodging, Activities)",
      "Offline mode storing receipts in IndexedDB and syncing FX rates"
    ],
    "features": [
      "Multi-currency expense logging (Enter 3,500 JPY -> Converted to $23.40 USD)",
      "Daily target spending budget gauge (Under budget vs Over budget)",
      "Category spending breakdown (Dining, Transport, Lodging, Activities)",
      "Offline mode storing receipts in IndexedDB and syncing FX rates"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage / IndexedDB",
    "otherTech": "Recharts, Lucide React",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Shows daily remaining spending allowances that automatically roll over if you underspend today.",
    "roadmap": [
      "Expense entry form with foreign currency selector and instant conversion",
      "Daily budget progress circle with remaining allowance indicator",
      "Trip spending category donut chart",
      "One-click CSV expense export for personal finance apps"
    ],
    "extensions": [
      "Split-bill receipt sharing among travel companions",
      "ATM foreign transaction fee tracker"
    ],
    "mvpScope": "Log a 2,500 Yen ramen dinner; see immediate $16.50 conversion and view $43.50 remaining in today's allowance.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-21",
    "title": "Heritage3D: Cultural Heritage 3D Photogrammetry Tour Guide",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Students cannot visit distant ancient ruins like Petra or Machu Picchu due to financial and travel barriers.",
    "problemStatement": "Students cannot visit distant ancient ruins like Petra or Machu Picchu due to financial and travel barriers.",
    "solution": "A web-based 3D virtual tour of ancient historical monuments using WebGL photogrammetry models.",
    "proposedSolution": "A web-based 3D virtual tour of ancient historical monuments using WebGL photogrammetry models.",
    "realWorldUseCase": "History class exploring the 3D architecture of an ancient Mayan pyramid.",
    "targetAudience": "History class exploring the 3D architecture of an ancient Mayan pyramid.",
    "mainFeatures": [
      "Interactive 3D photogrammetry models of historical monuments",
      "Clickable hotspot annotations revealing archaeological history",
      "Guided virtual tour camera flight paths between landmark points",
      "First-person walk-through mode with historical reconstruction overlays"
    ],
    "features": [
      "Interactive 3D photogrammetry models of historical monuments",
      "Clickable hotspot annotations revealing archaeological history",
      "Guided virtual tour camera flight paths between landmark points",
      "First-person walk-through mode with historical reconstruction overlays"
    ],
    "frontend": "React, Three.js, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "None (GLTF Assets)",
    "otherTech": "Three.js, GLTFLoader",
    "techStack": [
      "React",
      "Three.js",
      "WebGL",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "4 weeks",
    "uniqueness": "Allows students to inspect intricate stone carvings and temple masonry in full 3D with educational annotations.",
    "roadmap": [
      "Three.js 3D viewport with OrbitControls and lighting",
      "Interactive 3D historical annotation pin markers with informational drawers",
      "Smooth cinematic camera flight transitions between monuments",
      "VR headset display support via WebXR"
    ],
    "extensions": [
      "Day-vs-night ancient astronomical alignment simulation",
      "Archaeological dig layer cross-section view"
    ],
    "mvpScope": "Rotate and zoom into a 3D model of the Parthenon; click an architectural column to read historical context.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-travel-22",
    "title": "VoluntourCheck: Ethical Volunteer Tourism & Community Directory",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Well-meaning travelers inadvertently support exploitative orphanages and fake wildlife sanctuaries.",
    "problemStatement": "Well-meaning travelers inadvertently support exploitative orphanages and fake wildlife sanctuaries.",
    "solution": "An ethical vetting directory auditing international volunteer programs against anti-exploitation standards.",
    "proposedSolution": "An ethical vetting directory auditing international volunteer programs against anti-exploitation standards.",
    "realWorldUseCase": "College student seeking a genuine sea turtle conservation program in Costa Rica.",
    "targetAudience": "College student seeking a genuine sea turtle conservation program in Costa Rica.",
    "mainFeatures": [
      "Audited volunteer program directory (Conservation, Teaching, Community)",
      "Ethical checklist audit (No orphanage tourism, animal welfare standards, community-led)",
      "Cost transparency breakdown (Revealing where volunteer program fees actually go)",
      "Volunteer alumni verified reviews and impact ratings"
    ],
    "features": [
      "Audited volunteer program directory (Conservation, Teaching, Community)",
      "Ethical checklist audit (No orphanage tourism, animal welfare standards, community-led)",
      "Cost transparency breakdown (Revealing where volunteer program fees actually go)",
      "Volunteer alumni verified reviews and impact ratings"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Lucide React",
    "techStack": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Filters out harmful orphanage tourism and pay-to-play wildlife programs, highlighting ethical community-led initiatives.",
    "roadmap": [
      "Searchable volunteer program directory with cause category filters",
      "Ethical scorecard evaluating community ownership and fee transparency",
      "Fee breakdown pie chart showing percentage reaching the local community",
      "Verified volunteer alumni review and photo board"
    ],
    "extensions": [
      "Direct non-profit grant matching application",
      "Pre-departure ethical travel orientation guide"
    ],
    "mvpScope": "Search marine conservation in Costa Rica; view audited NGO program with 92% fee allocation to local conservation.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-23",
    "title": "DarkSkyFinder: Stargazing Dark Sky Park Finder & Cloud Radar",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Amateur astronomers drive 2 hours to see the Milky Way only for low clouds and light pollution to ruin the view.",
    "problemStatement": "Amateur astronomers drive 2 hours to see the Milky Way only for low clouds and light pollution to ruin the view.",
    "solution": "A stargazing forecast map correlating Bortle dark-sky light pollution ratings with real-time cloud cover.",
    "proposedSolution": "A stargazing forecast map correlating Bortle dark-sky light pollution ratings with real-time cloud cover.",
    "realWorldUseCase": "Stargazer seeking a Bortle Class 2 dark sky spot with 0% cloud cover tonight.",
    "targetAudience": "Stargazer seeking a Bortle Class 2 dark sky spot with 0% cloud cover tonight.",
    "mainFeatures": [
      "Bortle Dark Sky scale map overlay (Class 1 pristine dark to Class 9 bright city)",
      "Open-Meteo astronomical cloud cover forecast (High, Mid, Low clouds)",
      "Moon phase and moonrise/moonset timeline (Avoid full moon glare)",
      "Meteor shower calendar and recommended dark viewing locations"
    ],
    "features": [
      "Bortle Dark Sky scale map overlay (Class 1 pristine dark to Class 9 bright city)",
      "Open-Meteo astronomical cloud cover forecast (High, Mid, Low clouds)",
      "Moon phase and moonrise/moonset timeline (Avoid full moon glare)",
      "Meteor shower calendar and recommended dark viewing locations"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Mapbox GL, Open-Meteo API",
    "techStack": [
      "React",
      "Mapbox",
      "Open-Meteo",
      "PostGIS"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Identifies the optimal 2-hour stargazing window when cloud cover is lowest and the moon has set.",
    "roadmap": [
      "Mapbox dark sky light pollution tile overlay",
      "Astronomical seeing and cloud cover forecast line chart",
      "Moon phase illuminated percentage dial with rise/set times",
      "Certified International Dark-Sky Park directory with driving distances"
    ],
    "extensions": [
      "International Space Station (ISS) flyover tracker",
      "Milky Way core visibility season calendar"
    ],
    "mvpScope": "Search your location; find a Bortle 3 dark sky park 45 minutes away with 0% cloud cover and no moon glare tonight.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-24",
    "title": "LuggageDrop: Left-Luggage Locker & Local Storage Finder",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers with a 6-hour layover between Airbnb checkout and an evening flight drag heavy luggage through museums.",
    "problemStatement": "Travelers with a 6-hour layover between Airbnb checkout and an evening flight drag heavy luggage through museums.",
    "solution": "A verified luggage storage finder connecting travelers with local cafes and lockers to securely store bags.",
    "proposedSolution": "A verified luggage storage finder connecting travelers with local cafes and lockers to securely store bags.",
    "realWorldUseCase": "Traveler storing two heavy suitcases at a cafe near the central train station for 5 hours.",
    "targetAudience": "Traveler storing two heavy suitcases at a cafe near the central train station for 5 hours.",
    "mainFeatures": [
      "Interactive local map of verified luggage storage points and lockers",
      "Hourly and daily luggage storage pricing with instant reservation pass",
      "Security seal verification and insurance coverage guarantee badge",
      "Storage location hours and photo of the front entrance for easy locating"
    ],
    "features": [
      "Interactive local map of verified luggage storage points and lockers",
      "Hourly and daily luggage storage pricing with instant reservation pass",
      "Security seal verification and insurance coverage guarantee badge",
      "Storage location hours and photo of the front entrance for easy locating"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Stripe",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Mapbox GL, Stripe API",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Provides instant digital claim tickets with tamper-evident security seal numbers for peace of mind.",
    "roadmap": [
      "Mapbox map with verified bag storage location pins",
      "Bag count and reservation time-window selector with Stripe checkout",
      "Digital luggage claim ticket with QR code and security seal ID",
      "Host check-in and luggage release scanner portal"
    ],
    "extensions": [
      "Luggage pickup and airport courier delivery option",
      "Locker dimension calculator for oversized ski/surf gear"
    ],
    "mvpScope": "Book a 4-hour bag storage near Grand Central Station for $6, view QR claim code, and explore the city hands-free.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-travel-25",
    "title": "CultureFest: Global Festival & Cultural Heritage Calendar",
    "domain": "Travel & Tourism",
    "category": "Travel & Tourism",
    "problem": "Travelers visit foreign cities completely unaware that a vibrant local festival is happening 2 miles away.",
    "problemStatement": "Travelers visit foreign cities completely unaware that a vibrant local festival is happening 2 miles away.",
    "solution": "A global cultural festival calendar mapping traditional heritage celebrations, lantern festivals, and carnivals.",
    "proposedSolution": "A global cultural festival calendar mapping traditional heritage celebrations, lantern festivals, and carnivals.",
    "realWorldUseCase": "Traveler in Thailand timing their trip to experience the Chiang Mai Lantern Festival.",
    "targetAudience": "Traveler in Thailand timing their trip to experience the Chiang Mai Lantern Festival.",
    "mainFeatures": [
      "Searchable global cultural calendar spanning 150+ international celebrations",
      "Cultural background, historical origin, and etiquette tips for participants",
      "Interactive festival map with dates and recommended viewing spots",
      "Notification alerts when festival dates approach for saved countries"
    ],
    "features": [
      "Searchable global cultural calendar spanning 150+ international celebrations",
      "Cultural background, historical origin, and etiquette tips for participants",
      "Interactive festival map with dates and recommended viewing spots",
      "Notification alerts when festival dates approach for saved countries"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Mapbox GL, Lucide React",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Explains the sacred cultural origins and etiquette for visitors (e.g. appropriate clothing during water festivals).",
    "roadmap": [
      "Month-by-month global cultural festival calendar",
      "Festival detail page with historical significance and cultural dos/don'ts",
      "Mapbox festival location map with search filters by month and region",
      "Personal travel bucket-list festival bookmark manager"
    ],
    "extensions": [
      "Local lodging booking advice around peak festival dates",
      "Traditional culinary specialty guide for each festival"
    ],
    "mvpScope": "Browse October cultural events; discover the Albuquerque International Balloon Fiesta with schedule and tips.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-01",
    "title": "ReleaseNoteAI: Automated GitHub Commit Changelog Generator",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Engineering teams spend hours reading commit histories to draft release notes before production launches.",
    "problemStatement": "Engineering teams spend hours reading commit histories to draft release notes before production launches.",
    "solution": "An automated changelog generator categorizing Git commits into Features, Bug Fixes, and Breaking Changes.",
    "proposedSolution": "An automated changelog generator categorizing Git commits into Features, Bug Fixes, and Breaking Changes.",
    "realWorldUseCase": "Open-source maintainer releasing version v2.4.0 with 45 merged pull requests.",
    "targetAudience": "Open-source maintainer releasing version v2.4.0 with 45 merged pull requests.",
    "mainFeatures": [
      "GitHub REST/GraphQL API commit and PR diff fetcher",
      "Automated Conventional Commits parser (feat, fix, docs, chore)",
      "Markdown release note generator with author mentions and PR links",
      "One-click export directly to GitHub Releases API"
    ],
    "features": [
      "GitHub REST/GraphQL API commit and PR diff fetcher",
      "Automated Conventional Commits parser (feat, fix, docs, chore)",
      "Markdown release note generator with author mentions and PR links",
      "One-click export directly to GitHub Releases API"
    ],
    "frontend": "React 19, Tailwind, Monaco Editor",
    "backend": "Node.js, Express, Octokit",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Octokit, Monaco Editor",
    "techStack": [
      "React",
      "Octokit",
      "GitHub API",
      "Monaco Editor"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Parses Conventional Commits and PR labels to draft clean, customer-facing release notes automatically.",
    "roadmap": [
      "GitHub repository URL input and personal access token authenticator",
      "Commit and merged PR list parser with category filtering",
      "Editable markdown release draft in Monaco Editor",
      "One-click 'Publish to GitHub Release' button"
    ],
    "extensions": [
      "Slack and Discord release announcement webhook dispatcher",
      "Semantic versioning bump recommender (Major, Minor, Patch)"
    ],
    "mvpScope": "Connect a GitHub repo; click 'Generate Release Notes' for v1.2.0 and view formatted markdown in 3 seconds.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-02",
    "title": "AsyncStandup: Asynchronous Team Check-In & Blocker Bot",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Daily synchronous Zoom standups interrupt deep coding flow and waste 30 minutes of engineer focus.",
    "problemStatement": "Daily synchronous Zoom standups interrupt deep coding flow and waste 30 minutes of engineer focus.",
    "solution": "An asynchronous check-in platform collecting daily 'Yesterday, Today, Blockers' updates with summary digests.",
    "proposedSolution": "An asynchronous check-in platform collecting daily 'Yesterday, Today, Blockers' updates with summary digests.",
    "realWorldUseCase": "Remote engineering team across 4 time zones sharing morning standup updates.",
    "targetAudience": "Remote engineering team across 4 time zones sharing morning standup updates.",
    "mainFeatures": [
      "Asynchronous 3-question check-in form (Yesterday, Today, Blockers)",
      "Urgent blocker alert highlighting blocked teammates in team feed",
      "AI daily summary digest compiling team achievements into a 3-bullet brief",
      "Slack and Discord bot integration broadcasting morning digests"
    ],
    "features": [
      "Asynchronous 3-question check-in form (Yesterday, Today, Blockers)",
      "Urgent blocker alert highlighting blocked teammates in team feed",
      "AI daily summary digest compiling team achievements into a 3-bullet brief",
      "Slack and Discord bot integration broadcasting morning digests"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Slack Webhook API",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Respects asynchronous engineering flow: submit in 60 seconds whenever your workday begins without meetings.",
    "roadmap": [
      "Daily standup update submission form with quick tags",
      "Team dashboard feed grouped by project and time zone",
      "Blocker spotlight card highlighting dependencies between engineers",
      "Daily automated email digest compiler"
    ],
    "extensions": [
      "Weekly progress recap report for engineering managers",
      "GitHub PR activity auto-sync to fill in 'Yesterday'"
    ],
    "mvpScope": "Submit your 3 standup bullets; view team feed showing 5 teammates' updates with 1 active blocker highlighted.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-03",
    "title": "TabFreezer: Intelligent Chrome Tab Suspender & RAM Saver",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Developers working with 50 open browser tabs suffer from high RAM usage and sluggish laptop fans.",
    "problemStatement": "Developers working with 50 open browser tabs suffer from high RAM usage and sluggish laptop fans.",
    "solution": "A browser extension suspending inactive tabs into lightweight frozen placeholders while preserving scroll position.",
    "proposedSolution": "A browser extension suspending inactive tabs into lightweight frozen placeholders while preserving scroll position.",
    "realWorldUseCase": "Developer running a local Docker stack on a laptop with only 8GB of free RAM.",
    "targetAudience": "Developer running a local Docker stack on a laptop with only 8GB of free RAM.",
    "mainFeatures": [
      "Automatic RAM suspension for tabs idle > 30 minutes",
      "Preserves exact page scroll position and form inputs upon wake",
      "Custom domain allowlist (Never suspend Jira, GitHub, or Figma)",
      "RAM saved counter dashboard displaying megabytes recovered"
    ],
    "features": [
      "Automatic RAM suspension for tabs idle > 30 minutes",
      "Preserves exact page scroll position and form inputs upon wake",
      "Custom domain allowlist (Never suspend Jira, GitHub, or Figma)",
      "RAM saved counter dashboard displaying megabytes recovered"
    ],
    "frontend": "React (Extension UI), Tailwind",
    "backend": "Chrome Extension Service Worker",
    "database": "chrome.storage.local",
    "otherTech": "Chrome Tabs API",
    "techStack": [
      "React",
      "Chrome Extension",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Frees up to 80% browser memory by replacing background web pages with ultra-lightweight frozen screenshots.",
    "roadmap": [
      "Chrome Tabs API idle activity listener",
      "Tab DOM freeze replacement template with page title and favicon",
      "One-click tab wake on click with smooth scroll restoration",
      "Memory savings gauge displaying total MB recovered"
    ],
    "extensions": [
      "Search across all frozen and active tabs in one popup",
      "Keyboard shortcut to suspend all background tabs instantly"
    ],
    "mvpScope": "Leave 10 tabs idle for 30 minutes; watch extension suspend them, freeing 1.2GB of laptop RAM.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-04",
    "title": "KanbanFlow: Kanban Board with WIP Limits & Pomodoro Focus",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Software developers burn out by context-switching between 8 active tasks simultaneously.",
    "problemStatement": "Software developers burn out by context-switching between 8 active tasks simultaneously.",
    "solution": "A focused Kanban board strictly enforcing Work-In-Progress (WIP) limits with an integrated Pomodoro timer.",
    "proposedSolution": "A focused Kanban board strictly enforcing Work-In-Progress (WIP) limits with an integrated Pomodoro timer.",
    "realWorldUseCase": "Solo developer managing sprint tasks with strict 2-task WIP limit.",
    "targetAudience": "Solo developer managing sprint tasks with strict 2-task WIP limit.",
    "mainFeatures": [
      "Kanban column drag-and-drop with strict Work-In-Progress (WIP) limits",
      "Integrated Pomodoro focus timer tied directly to the active task",
      "Task estimation in story points and actual completed Pomodoro intervals",
      "Cumulative flow diagram showing task bottleneck buildup"
    ],
    "features": [
      "Kanban column drag-and-drop with strict Work-In-Progress (WIP) limits",
      "Integrated Pomodoro focus timer tied directly to the active task",
      "Task estimation in story points and actual completed Pomodoro intervals",
      "Cumulative flow diagram showing task bottleneck buildup"
    ],
    "frontend": "React, dnd-kit, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage / IndexedDB",
    "otherTech": "dnd-kit, Recharts",
    "techStack": [
      "React",
      "dnd-kit",
      "Recharts",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Prevents burnout by physically locking the 'In Progress' column when the WIP limit (e.g. 2 tasks) is reached.",
    "roadmap": [
      "dnd-kit drag-and-drop task card board with column limits",
      "WIP limit threshold violation visual warning state",
      "Circular SVG Pomodoro timer with task title synchronization",
      "Cumulative flow diagram tracking task throughput"
    ],
    "extensions": [
      "Task sub-checklist with completion percentage",
      "Markdown task description notes editor"
    ],
    "mvpScope": "Set 'In Progress' WIP limit to 2; attempt to drag a 3rd task over and see the column flash red with a blocker.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-05",
    "title": "InboxDigest: Newsletter & Email Triage Digest Compiler",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Professionals waste 45 minutes daily reading 20 separate email newsletters that clog their work inboxes.",
    "problemStatement": "Professionals waste 45 minutes daily reading 20 separate email newsletters that clog their work inboxes.",
    "solution": "An email digest compiler aggregating incoming newsletters into a clean, distraction-free Sunday morning edition.",
    "proposedSolution": "An email digest compiler aggregating incoming newsletters into a clean, distraction-free Sunday morning edition.",
    "realWorldUseCase": "Busy professional receiving 15 tech newsletters who wants one unified 10-minute weekend digest.",
    "targetAudience": "Busy professional receiving 15 tech newsletters who wants one unified 10-minute weekend digest.",
    "mainFeatures": [
      "Unique forward-to email address for newsletter subscriptions (e.g. user@inboxdigest.dev)",
      "HTML email parsing and advertising banner stripper",
      "Consolidated single-page reading view with estimated reading time",
      "Automated weekly audio podcast digest of top article summaries"
    ],
    "features": [
      "Unique forward-to email address for newsletter subscriptions (e.g. user@inboxdigest.dev)",
      "HTML email parsing and advertising banner stripper",
      "Consolidated single-page reading view with estimated reading time",
      "Automated weekly audio podcast digest of top article summaries"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Mailgun/SendGrid",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Cheerio, Prisma",
    "techStack": [
      "Next.js",
      "Node.js",
      "Cheerio",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Strips out tracking pixels, promotional banners, and clickbait, presenting pure clean article typography.",
    "roadmap": [
      "Inbound email webhook receiver and HTML content parser",
      "Article text extraction and read-time calculation engine",
      "Clean typographic reading reader mode interface",
      "Weekly digest delivery scheduler with email broadcast"
    ],
    "extensions": [
      "One-click instant unsubscribe from spam senders",
      "Article highlight and note-saving library"
    ],
    "mvpScope": "Forward 3 newsletters to your personal address; view them combined into one clean, ad-free weekend reading page.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-06",
    "title": "VoiceAction: Voice Memo to Structured Markdown Action Items",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Creative professionals record rambling 10-minute voice memos that they never listen to again.",
    "problemStatement": "Creative professionals record rambling 10-minute voice memos that they never listen to again.",
    "solution": "A voice note transcriber that extracts decisions, deadlines, and bulleted action items into clean Markdown.",
    "proposedSolution": "A voice note transcriber that extracts decisions, deadlines, and bulleted action items into clean Markdown.",
    "realWorldUseCase": "Product manager dictating project ideas during a walk in the park.",
    "targetAudience": "Product manager dictating project ideas during a walk in the park.",
    "mainFeatures": [
      "In-browser microphone voice note recording with pause/resume",
      "OpenAI Whisper / WebAssembly speech transcription",
      "NLP action item extraction identifying tasks, deadlines, and owners",
      "One-click export to Markdown, Notion, and Obsidian notes"
    ],
    "features": [
      "In-browser microphone voice note recording with pause/resume",
      "OpenAI Whisper / WebAssembly speech transcription",
      "NLP action item extraction identifying tasks, deadlines, and owners",
      "One-click export to Markdown, Notion, and Obsidian notes"
    ],
    "frontend": "React, Web Audio API, Tailwind",
    "backend": "FastAPI / Node.js, Whisper API",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Web Audio API, Lucide React",
    "techStack": [
      "React",
      "FastAPI",
      "Web Audio API",
      "Whisper"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Turns a rambling 5-minute stream of consciousness into a clean 5-bullet structured task list with dates.",
    "roadmap": [
      "Audio recording component with live waveform visualizer",
      "Whisper audio transcription pipeline integration",
      "LLM action item structuring prompt pipeline",
      "One-click copy formatted Markdown task list"
    ],
    "extensions": [
      "Direct integration with Notion API task database",
      "Audio playback scrubber with word-level highlight sync"
    ],
    "mvpScope": "Record a 60-second voice note describing a project; view clean bulleted action items with checkmarks in 5 seconds.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": true
  },
  {
    "id": "proj-prod-07",
    "title": "FocusShield: Desktop Distraction Interceptor & Site Blocker",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Knowledge workers lose 2 hours daily opening Reddit, Twitter, and YouTube unconsciously while debugging.",
    "problemStatement": "Knowledge workers lose 2 hours daily opening Reddit, Twitter, and YouTube unconsciously while debugging.",
    "solution": "A focus timer that intercepts distracting domains during active work blocks, showing breathing guides instead.",
    "proposedSolution": "A focus timer that intercepts distracting domains during active work blocks, showing breathing guides instead.",
    "realWorldUseCase": "Student studying for exams needing to block social media during 45-minute focus sprints.",
    "targetAudience": "Student studying for exams needing to block social media during 45-minute focus sprints.",
    "mainFeatures": [
      "Domain blocking during active focus sessions (Twitter, Reddit, YouTube)",
      "Calm replacement screen displaying breathing animation and current study goal",
      "Anti-cheat emergency unblock countdown requiring typing a 50-word mindfulness paragraph",
      "Daily focus hours achieved analytics and distraction attempt counters"
    ],
    "features": [
      "Domain blocking during active focus sessions (Twitter, Reddit, YouTube)",
      "Calm replacement screen displaying breathing animation and current study goal",
      "Anti-cheat emergency unblock countdown requiring typing a 50-word mindfulness paragraph",
      "Daily focus hours achieved analytics and distraction attempt counters"
    ],
    "frontend": "React (Extension UI), Tailwind",
    "backend": "Chrome Extension DeclarativeNetRequest",
    "database": "chrome.storage.local",
    "otherTech": "DeclarativeNetRequest API",
    "techStack": [
      "React",
      "Chrome Extension",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Replaces blocked social media tabs with a calming 10-second deep breathing animation and your active goal.",
    "roadmap": [
      "DeclarativeNetRequest dynamic blocking rules engine",
      "Focus session countdown timer with customizable blocklist",
      "Mindful intervention replacement page with current goal prompt",
      "Daily distraction attempt analytics bar chart"
    ],
    "extensions": [
      "Strict emergency lock mode preventing early cancellation",
      "Scheduled recurring focus hours (e.g. 9am to 12pm)"
    ],
    "mvpScope": "Start a 25-minute focus session, try opening twitter.com, and see your focus goal appear instead of a feed.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-08",
    "title": "UnifiedHub: Consolidated Notification Inbox & Feed",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Engineers miss critical alerts because notifications are scattered across Slack, GitHub, Jira, and Email.",
    "problemStatement": "Engineers miss critical alerts because notifications are scattered across Slack, GitHub, Jira, and Email.",
    "solution": "A centralized notification hub prioritizing mentions and PR reviews while filtering noisy bot spam.",
    "proposedSolution": "A centralized notification hub prioritizing mentions and PR reviews while filtering noisy bot spam.",
    "realWorldUseCase": "Tech lead triaging 50 daily notifications across GitHub, Jira, and Slack in one prioritized feed.",
    "targetAudience": "Tech lead triaging 50 daily notifications across GitHub, Jira, and Slack in one prioritized feed.",
    "mainFeatures": [
      "GitHub PR reviews, Slack mentions, and Jira issue webhook ingestion",
      "Priority scoring algorithm separating human mentions from automated bot alerts",
      "One-click 'Mark Done' action clearing notifications across platforms",
      "Keyboard-driven notification triage (J/K to navigate, E to archive)"
    ],
    "features": [
      "GitHub PR reviews, Slack mentions, and Jira issue webhook ingestion",
      "Priority scoring algorithm separating human mentions from automated bot alerts",
      "One-click 'Mark Done' action clearing notifications across platforms",
      "Keyboard-driven notification triage (J/K to navigate, E to archive)"
    ],
    "frontend": "React 19, Tailwind, Lucide React",
    "backend": "Node.js, Express, WebSockets",
    "database": "PostgreSQL, Supabase",
    "otherTech": "WebSockets, Prisma",
    "techStack": [
      "React",
      "Node.js",
      "WebSockets",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Features Superhuman-style keyboard shortcuts allowing users to triage 50 notifications in 2 minutes.",
    "roadmap": [
      "Webhook ingestion listeners for GitHub, Jira, and Slack",
      "Notification prioritization and categorization engine",
      "Keyboard-driven inbox interface with instant archive shortcuts",
      "Direct external deep link routing to source PR or message"
    ],
    "extensions": [
      "Desktop notification badge and audio chime alerts",
      "Snooze notification until tomorrow morning"
    ],
    "mvpScope": "View unified inbox with 1 GitHub PR review and 1 Slack mention, press 'E' to archive, achieving Inbox Zero.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-prod-09",
    "title": "GistVault: Code Snippet Manager with Tags & Instant Search",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Developers rewrite the same regex patterns, Dockerfiles, and SQL queries because snippets get lost in Slack.",
    "problemStatement": "Developers rewrite the same regex patterns, Dockerfiles, and SQL queries because snippets get lost in Slack.",
    "solution": "A developer snippet notebook with instant fuzzy search, syntax highlighting, and two-way GitHub Gist sync.",
    "proposedSolution": "A developer snippet notebook with instant fuzzy search, syntax highlighting, and two-way GitHub Gist sync.",
    "realWorldUseCase": "Full-stack developer looking up a complex regex email validator written 6 months ago.",
    "targetAudience": "Full-stack developer looking up a complex regex email validator written 6 months ago.",
    "mainFeatures": [
      "Monaco editor with multi-language syntax highlighting",
      "Sub-10ms fuzzy search across snippet titles, tags, and code contents",
      "Two-way synchronization with personal GitHub Gists",
      "One-click copy code button with subtle confirmation chime"
    ],
    "features": [
      "Monaco editor with multi-language syntax highlighting",
      "Sub-10ms fuzzy search across snippet titles, tags, and code contents",
      "Two-way synchronization with personal GitHub Gists",
      "One-click copy code button with subtle confirmation chime"
    ],
    "frontend": "React, Monaco Editor, Tailwind",
    "backend": "Node.js, Express, Octokit",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Monaco Editor, Fuse.js",
    "techStack": [
      "React",
      "Monaco Editor",
      "Fuse.js",
      "Octokit"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Blazing-fast instant fuzzy search powered by Fuse.js finds snippets in under 10 milliseconds.",
    "roadmap": [
      "Monaco code editor with language selector and theme toggle",
      "Fuzzy search bar indexing title, tags, and code text with Fuse.js",
      "GitHub Gist API two-way sync module",
      "One-click copy code snippet button with toast feedback"
    ],
    "extensions": [
      "Keyboard shortcut launcher (Cmd+Shift+S) across the desktop",
      "Snippet usage count and frequency analytics"
    ],
    "mvpScope": "Press '/' to search, type 'docker react', and copy your verified multi-stage Dockerfile in 2 keystrokes.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-10",
    "title": "ResumeToFolio: PDF Resume to Interactive Portfolio Converter",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Job seekers have static PDF resumes that fail to showcase live demos, code repositories, and interactive design.",
    "problemStatement": "Job seekers have static PDF resumes that fail to showcase live demos, code repositories, and interactive design.",
    "solution": "A web tool converting static PDF resumes into responsive, deployable personal portfolio websites.",
    "proposedSolution": "A web tool converting static PDF resumes into responsive, deployable personal portfolio websites.",
    "realWorldUseCase": "Junior developer turning a 1-page PDF resume into an interactive portfolio with project links.",
    "targetAudience": "Junior developer turning a 1-page PDF resume into an interactive portfolio with project links.",
    "mainFeatures": [
      "PDF resume text and section layout extraction",
      "Automated portfolio theme generation (Modern Bento, Terminal, Minimalist)",
      "Interactive project cards with GitHub repository cards and live preview links",
      "One-click deploy to Vercel and downloadable HTML/CSS ZIP"
    ],
    "features": [
      "PDF resume text and section layout extraction",
      "Automated portfolio theme generation (Modern Bento, Terminal, Minimalist)",
      "Interactive project cards with GitHub repository cards and live preview links",
      "One-click deploy to Vercel and downloadable HTML/CSS ZIP"
    ],
    "frontend": "React 19, Tailwind, Lucide React",
    "backend": "Python FastAPI / Node.js, pdf-parse",
    "database": "PostgreSQL / Supabase",
    "otherTech": "pdf-parse, Tailwind",
    "techStack": [
      "React",
      "FastAPI",
      "Tailwind",
      "Vite"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Parses skills, education, and work history from the PDF and populates a responsive interactive web template.",
    "roadmap": [
      "PDF resume upload and text extraction parser",
      "Resume entity mapping (Experience, Education, Skills, Projects)",
      "Interactive portfolio theme customizer with live preview",
      "Downloadable static website ZIP package export"
    ],
    "extensions": [
      "Custom domain DNS setup guide",
      "LinkedIn profile import alternative"
    ],
    "mvpScope": "Upload a 1-page PDF resume; watch it transform into a responsive Bento-box styled personal website in 5 seconds.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-11",
    "title": "MeetingCost: Real-Time Team Salary Meeting Ticker",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Companies schedule pointless 1-hour meetings with 12 senior engineers without realizing it costs $1,500.",
    "problemStatement": "Companies schedule pointless 1-hour meetings with 12 senior engineers without realizing it costs $1,500.",
    "solution": "A live meeting timer that calculates the mounting dollar cost of a meeting based on attendee salary rates.",
    "proposedSolution": "A live meeting timer that calculates the mounting dollar cost of a meeting based on attendee salary rates.",
    "realWorldUseCase": "Engineering manager evaluating whether a status meeting justifies its real financial cost.",
    "targetAudience": "Engineering manager evaluating whether a status meeting justifies its real financial cost.",
    "mainFeatures": [
      "Attendee count and average hourly compensation rate inputs",
      "Real-time mounting financial dollar ticker ticking every second",
      "Meeting efficiency rating based on decisions made vs money spent",
      "Post-meeting summary card: 'This 45-minute sync cost the company $840'"
    ],
    "features": [
      "Attendee count and average hourly compensation rate inputs",
      "Real-time mounting financial dollar ticker ticking every second",
      "Meeting efficiency rating based on decisions made vs money spent",
      "Post-meeting summary card: 'This 45-minute sync cost the company $840'"
    ],
    "frontend": "React, Tailwind, Framer Motion",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Framer Motion, Lucide React",
    "techStack": [
      "React",
      "Framer Motion",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Displays a bold real-time dollar counter ticking upwards every second to discourage unproductive meetings.",
    "roadmap": [
      "Attendee count and average rate configuration inputs",
      "Real-time money ticker counter component ticking per second",
      "Elapsed meeting duration clock with target cutoff time",
      "Post-meeting summary card with exportable cost audit"
    ],
    "extensions": [
      "Calendar invite cost calculator Chrome extension",
      "Meeting ROI rating poll for attendees at the end"
    ],
    "mvpScope": "Start meeting with 6 engineers at $80/hr; watch the real-time dollar ticker climb to $480 in 60 minutes.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-12",
    "title": "SlideMarkdown: Markdown to Animated Slide Deck Generator",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Presenters waste hours fighting PowerPoint formatting when they could write content in simple Markdown.",
    "problemStatement": "Presenters waste hours fighting PowerPoint formatting when they could write content in simple Markdown.",
    "solution": "A presentation tool compiling Markdown into interactive full-screen slide decks with presenter notes.",
    "proposedSolution": "A presentation tool compiling Markdown into interactive full-screen slide decks with presenter notes.",
    "realWorldUseCase": "Speaker presenting a technical architecture overview at a developer meetup.",
    "targetAudience": "Speaker presenting a technical architecture overview at a developer meetup.",
    "mainFeatures": [
      "Split-screen Markdown editor with instant slide preview",
      "Slide delimiter syntax (---) separating slides and presenter notes (??? )",
      "Interactive full-screen presenter mode with clock and upcoming slide preview",
      "Export presentation to standalone self-contained HTML and PDF"
    ],
    "features": [
      "Split-screen Markdown editor with instant slide preview",
      "Slide delimiter syntax (---) separating slides and presenter notes (??? )",
      "Interactive full-screen presenter mode with clock and upcoming slide preview",
      "Export presentation to standalone self-contained HTML and PDF"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Reveal.js logic, PrismJS",
    "techStack": [
      "React",
      "PrismJS",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Includes a dedicated second-screen Presenter Mode showing current slide, next slide, and private speaker notes.",
    "roadmap": [
      "Markdown slide parser supporting headers, bullets, and code blocks",
      "Fullscreen presentation canvas with smooth slide transitions",
      "Dual-window presenter view with elapsed timer and notes",
      "Print-to-PDF stylesheet export"
    ],
    "extensions": [
      "Interactive code block execution inside slides",
      "Mermaid.js flowchart rendering in slides"
    ],
    "mvpScope": "Write 4 bullet points in Markdown; press 'Present' to navigate fullscreen animated slides with arrow keys.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-13",
    "title": "HabitGrid: 365-Day Contribution Grid Micro-Habit Tracker",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "People abandon new habits because generic habit trackers lack visual momentum and streak satisfaction.",
    "problemStatement": "People abandon new habits because generic habit trackers lack visual momentum and streak satisfaction.",
    "solution": "A micro-habit tracker visualizing daily consistency with an interactive GitHub-style 365-day green contribution grid.",
    "proposedSolution": "A micro-habit tracker visualizing daily consistency with an interactive GitHub-style 365-day green contribution grid.",
    "realWorldUseCase": "Writer tracking a daily 500-word writing habit over an entire calendar year.",
    "targetAudience": "Writer tracking a daily 500-word writing habit over an entire calendar year.",
    "mainFeatures": [
      "Interactive 365-day contribution heatmap grid (0 to 4 intensity levels)",
      "Multi-habit tracking (Meditation, Coding, Workout, Reading)",
      "Streak counter and longest consistency record badges",
      "Weekly consistency percentage and habit completion trends"
    ],
    "features": [
      "Interactive 365-day contribution heatmap grid (0 to 4 intensity levels)",
      "Multi-habit tracking (Meditation, Coding, Workout, Reading)",
      "Streak counter and longest consistency record badges",
      "Weekly consistency percentage and habit completion trends"
    ],
    "frontend": "React, Tailwind, Canvas / SVG",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Lucide React, SVG",
    "techStack": [
      "React",
      "SVG",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Inspired by GitHub's contribution graph; tap any day to log progress and watch the green squares fill in.",
    "roadmap": [
      "Interactive 365-day SVG grid component with month labels",
      "Daily habit check-off modal with intensity level selection",
      "Current streak and all-time record calculation cards",
      "Habit completion distribution analytics by day of the week"
    ],
    "extensions": [
      "Habit reminder push notifications",
      "Export habit grid as shareable image banner"
    ],
    "mvpScope": "Check off your daily reading habit; watch today's square light up bright green on your 365-day grid.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-14",
    "title": "InvoiceDunn: Automated Late Invoice Reminder & Dunning Sentinel",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Small business owners feel awkward chasing overdue client invoices and lose thousands in unpaid bills.",
    "problemStatement": "Small business owners feel awkward chasing overdue client invoices and lose thousands in unpaid bills.",
    "solution": "An automated accounts receivable sentinel sending polite, escalating reminder emails for overdue invoices.",
    "proposedSolution": "An automated accounts receivable sentinel sending polite, escalating reminder emails for overdue invoices.",
    "realWorldUseCase": "Freelancer dealing with a client who is 14 days late paying a $3,000 design fee.",
    "targetAudience": "Freelancer dealing with a client who is 14 days late paying a $3,000 design fee.",
    "mainFeatures": [
      "Invoice due date tracker with automatic overdue status calculation",
      "Polite, escalating email templates (Friendly reminder, 7-day past due, Firm final notice)",
      "Stripe / PayPal direct payment link embedded in reminder emails",
      "Accounts receivable aging summary table (Current, 30 days, 60 days, 90+ days)"
    ],
    "features": [
      "Invoice due date tracker with automatic overdue status calculation",
      "Polite, escalating email templates (Friendly reminder, 7-day past due, Firm final notice)",
      "Stripe / PayPal direct payment link embedded in reminder emails",
      "Accounts receivable aging summary table (Current, 30 days, 60 days, 90+ days)"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, SendGrid",
    "database": "PostgreSQL, Supabase",
    "otherTech": "SendGrid API, Prisma",
    "techStack": [
      "Next.js",
      "SendGrid",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Automates professional, non-confrontational reminder sequences that recover 85% of late invoices without friction.",
    "roadmap": [
      "Overdue invoice tracking table with days-past-due badges",
      "Configurable automated reminder sequence schedule",
      "Customizable email template editor with variable placeholders",
      "Accounts receivable aging summary breakdown chart"
    ],
    "extensions": [
      "Automated late fee penalty calculation (1.5% monthly)",
      "Client payment portal with credit card checkout"
    ],
    "mvpScope": "Set up an invoice 5 days overdue; preview the automated polite reminder email ready to send with 1 click.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-15",
    "title": "BookQuoteVault: Reading Highlights & Kindle Annotation Hub",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Readers highlight hundreds of profound passages on Kindle only to never revisit or remember them.",
    "problemStatement": "Readers highlight hundreds of profound passages on Kindle only to never revisit or remember them.",
    "solution": "A reading companion importing Kindle clippings and Goodreads quotes with a daily spaced-repetition email.",
    "proposedSolution": "A reading companion importing Kindle clippings and Goodreads quotes with a daily spaced-repetition email.",
    "realWorldUseCase": "Avid reader reviewing 5 random philosophical book quotes every morning over coffee.",
    "targetAudience": "Avid reader reviewing 5 random philosophical book quotes every morning over coffee.",
    "mainFeatures": [
      "Kindle 'My Clippings.txt' and Apple Books highlight file parser",
      "Full-text searchable quote library categorized by book and author",
      "Daily spaced-repetition quote email sending 3 random past highlights",
      "Export formatted quotes to Markdown for Obsidian and Notion"
    ],
    "features": [
      "Kindle 'My Clippings.txt' and Apple Books highlight file parser",
      "Full-text searchable quote library categorized by book and author",
      "Daily spaced-repetition quote email sending 3 random past highlights",
      "Export formatted quotes to Markdown for Obsidian and Notion"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, SendGrid",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Delivers a daily 'Morning Wisdom' email with 3 forgotten highlights from books you read years ago.",
    "roadmap": [
      "Kindle clippings text file uploader and parser",
      "Searchable quote book with tag and favorite filters",
      "Daily highlight email delivery worker with SendGrid",
      "Export to Obsidian and Notion compatible Markdown"
    ],
    "extensions": [
      "Book reading progress and annual goal tracker",
      "Social quote card generator for sharing on Twitter"
    ],
    "mvpScope": "Upload a Kindle clippings file; instantly search 200 highlights and schedule a daily morning reminder email.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-16",
    "title": "HookRunner: Open-Source Zapier Alternative & Webhook Runner",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Startups pay $50/month for Zapier when they only need simple JavaScript transformations between webhooks.",
    "problemStatement": "Startups pay $50/month for Zapier when they only need simple JavaScript transformations between webhooks.",
    "solution": "A self-hostable webhook automation engine executing custom JavaScript transformations on incoming payloads.",
    "proposedSolution": "A self-hostable webhook automation engine executing custom JavaScript transformations on incoming payloads.",
    "realWorldUseCase": "Developer listening to Stripe payment webhooks, transforming JSON, and posting a custom Discord embed.",
    "targetAudience": "Developer listening to Stripe payment webhooks, transforming JSON, and posting a custom Discord embed.",
    "mainFeatures": [
      "Unique incoming webhook endpoint generation",
      "Sandboxed in-browser / Node.js JavaScript transformation script runner",
      "Outgoing HTTP request dispatcher with custom headers and auth",
      "Execution history log with incoming/outgoing payload diffs"
    ],
    "features": [
      "Unique incoming webhook endpoint generation",
      "Sandboxed in-browser / Node.js JavaScript transformation script runner",
      "Outgoing HTTP request dispatcher with custom headers and auth",
      "Execution history log with incoming/outgoing payload diffs"
    ],
    "frontend": "React, Monaco Editor, Tailwind",
    "backend": "Node.js, Express, isolated-vm",
    "database": "PostgreSQL, Redis",
    "otherTech": "Monaco Editor, isolated-vm",
    "techStack": [
      "React",
      "Node.js",
      "Monaco Editor",
      "Redis"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Allows developers to write 5 lines of pure JavaScript to reshape JSON payloads between any two APIs.",
    "roadmap": [
      "Webhook listener and unique URL generator",
      "Monaco code editor with test payload execution harness",
      "Secure isolated JavaScript code execution sandbox",
      "Live execution inspection log with status codes and latency"
    ],
    "extensions": [
      "Cron schedule triggers for periodic jobs",
      "Secret environment variable management vault"
    ],
    "mvpScope": "Receive a Stripe webhook, run 'payload.amount / 100' in JavaScript, and forward formatted data to Discord in 40ms.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-prod-17",
    "title": "ClipHistory: Encrypted Clipboard Manager with Fuzzy Search",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Developers copy an API key, copy a stack trace, and accidentally lose the first key from their clipboard.",
    "problemStatement": "Developers copy an API key, copy a stack trace, and accidentally lose the first key from their clipboard.",
    "solution": "A lightweight clipboard history manager with local encryption, multi-item copy history, and instant search.",
    "proposedSolution": "A lightweight clipboard history manager with local encryption, multi-item copy history, and instant search.",
    "realWorldUseCase": "Developer switching between multiple tokens and snippets while configuring server environments.",
    "targetAudience": "Developer switching between multiple tokens and snippets while configuring server environments.",
    "mainFeatures": [
      "System clipboard listener logging text and code snippets",
      "AES-256 local encryption protecting sensitive copied passwords",
      "Sub-10ms fuzzy search across clipboard history",
      "Pin favorite snippets to prevent automatic FIFO queue deletion"
    ],
    "features": [
      "System clipboard listener logging text and code snippets",
      "AES-256 local encryption protecting sensitive copied passwords",
      "Sub-10ms fuzzy search across clipboard history",
      "Pin favorite snippets to prevent automatic FIFO queue deletion"
    ],
    "frontend": "React (Desktop / Web UI), Tailwind",
    "backend": "Electron / Node.js / Web Clipboard",
    "database": "IndexedDB / SQLite",
    "otherTech": "Web Clipboard API, Fuse.js",
    "techStack": [
      "React",
      "Fuse.js",
      "Web Crypto API",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Encrypts all stored clipboard history locally and automatically strips detected credit card numbers.",
    "roadmap": [
      "Clipboard change event listener with debounce",
      "Encrypted local storage schema with auto-purge timers",
      "Instant fuzzy search bar with keyboard navigation",
      "Pinned snippet bank with quick-copy keyboard shortcuts"
    ],
    "extensions": [
      "Automated password and credit card pattern redaction",
      "Cloud sync between phone and laptop via WebRTC"
    ],
    "mvpScope": "Copy 5 different code snippets; press Cmd+Shift+V to search and paste the 3rd snippet instantly.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-18",
    "title": "PomoLofi: Pomodoro Timer with Procedural Lofi Ambient Chords",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Students get distracted by lyrics in music streaming playlists while studying.",
    "problemStatement": "Students get distracted by lyrics in music streaming playlists while studying.",
    "solution": "A minimalist Pomodoro focus timer with an integrated procedural Web Audio lofi chord generator.",
    "proposedSolution": "A minimalist Pomodoro focus timer with an integrated procedural Web Audio lofi chord generator.",
    "realWorldUseCase": "College student studying late at night needing calm, non-distracting background sound.",
    "targetAudience": "College student studying late at night needing calm, non-distracting background sound.",
    "mainFeatures": [
      "Customizable 25/5 Pomodoro focus and rest interval timer",
      "Procedural Web Audio lofi piano chord and vinyl crackle generator",
      "Task checklist synchronized with current active focus sprint",
      "Daily completed focus blocks counter with milestone confetti"
    ],
    "features": [
      "Customizable 25/5 Pomodoro focus and rest interval timer",
      "Procedural Web Audio lofi piano chord and vinyl crackle generator",
      "Task checklist synchronized with current active focus sprint",
      "Daily completed focus blocks counter with milestone confetti"
    ],
    "frontend": "React, Web Audio API, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Tone.js, Canvas Confetti",
    "techStack": [
      "React",
      "Web Audio API",
      "Tone.js",
      "Canvas Confetti"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Music is generated mathematically in real time using Tone.js: infinite calming chords with zero repetitive loops.",
    "roadmap": [
      "Circular Pomodoro countdown timer with play/pause controls",
      "Tone.js generative lofi chord progression audio engine",
      "Vinyl crackle and rain sound procedural noise sliders",
      "Task checklist with completed Pomodoro tally badges"
    ],
    "extensions": [
      "Binaural beat alpha-wave focus toggle",
      "Full-screen ambient night-sky visualizer"
    ],
    "mvpScope": "Start 25-minute study timer; listen to generative lofi piano chords and ticking countdown in the browser.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-19",
    "title": "FeedFlow: Minimalist RSS Feed Reader with Reader Mode",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Social media algorithms trap readers in rage-bait feeds instead of purposeful, curated RSS reading.",
    "problemStatement": "Social media algorithms trap readers in rage-bait feeds instead of purposeful, curated RSS reading.",
    "solution": "A fast, ad-free RSS feed reader with clean typography, full-text extraction, and text-to-speech audio.",
    "proposedSolution": "A fast, ad-free RSS feed reader with clean typography, full-text extraction, and text-to-speech audio.",
    "realWorldUseCase": "News enthusiast following 20 tech blogs and scientific journals without algorithmic manipulation.",
    "targetAudience": "News enthusiast following 20 tech blogs and scientific journals without algorithmic manipulation.",
    "mainFeatures": [
      "OPML file import/export for seamless migration from Feedly",
      "Readability full-text article extraction stripping ads and paywalls",
      "Keyboard-driven navigation (J/K next article, M to mark read)",
      "Text-to-speech Web Speech API audio player for hands-free listening"
    ],
    "features": [
      "OPML file import/export for seamless migration from Feedly",
      "Readability full-text article extraction stripping ads and paywalls",
      "Keyboard-driven navigation (J/K next article, M to mark read)",
      "Text-to-speech Web Speech API audio player for hands-free listening"
    ],
    "frontend": "React 19, Tailwind, Lucide React",
    "backend": "Node.js, Express, Parser",
    "database": "PostgreSQL, Supabase",
    "otherTech": "rss-parser, Readability.js",
    "techStack": [
      "React",
      "Node.js",
      "rss-parser",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Pulls full article text even for RSS feeds that only provide truncated 2-sentence summaries.",
    "roadmap": [
      "RSS feed URL parser and scheduled polling worker",
      "Readability.js article content cleaner and font customizer",
      "Keyboard shortcut event listener for rapid navigation",
      "Web Speech API article voice narration playback"
    ],
    "extensions": [
      "Offline article reading mode with service workers",
      "Article bookmarking and tag categorization"
    ],
    "mvpScope": "Import an OPML file; browse 15 tech articles in a clean typography view and listen to audio narration.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-20",
    "title": "BugSnap: Browser Screenshot & Video Bug Annotation Recorder",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "QA testers waste time writing lengthy bug tickets that developers cannot reproduce without video proof.",
    "problemStatement": "QA testers waste time writing lengthy bug tickets that developers cannot reproduce without video proof.",
    "solution": "A browser recorder capturing screenshots and short video clips with annotated arrows, text, and console logs.",
    "proposedSolution": "A browser recorder capturing screenshots and short video clips with annotated arrows, text, and console logs.",
    "realWorldUseCase": "QA tester reporting a UI alignment bug on an e-commerce checkout page.",
    "targetAudience": "QA tester reporting a UI alignment bug on an e-commerce checkout page.",
    "mainFeatures": [
      "One-tap browser tab screen capture and 15-second video recording",
      "Drawing annotation canvas (Red arrows, Bounding boxes, Blur sensitive text)",
      "Automatic capture of current URL, browser version, and window dimensions",
      "Export bug report directly to GitHub Issues and Jira with annotated screenshot"
    ],
    "features": [
      "One-tap browser tab screen capture and 15-second video recording",
      "Drawing annotation canvas (Red arrows, Bounding boxes, Blur sensitive text)",
      "Automatic capture of current URL, browser version, and window dimensions",
      "Export bug report directly to GitHub Issues and Jira with annotated screenshot"
    ],
    "frontend": "React, Canvas API, Tailwind",
    "backend": "Client-Side (Vite) / Chrome Extension",
    "database": "LocalStorage",
    "otherTech": "Canvas API, MediaRecorder API",
    "techStack": [
      "React",
      "Canvas API",
      "MediaRecorder",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Includes an automated blur brush tool to conceal customer passwords and credit card numbers before sharing.",
    "roadmap": [
      "MediaDevices screen capture and video recording stream",
      "Interactive Canvas drawing overlay with arrow and text tools",
      "Browser environment metadata collector (OS, resolution, user-agent)",
      "One-click copy annotated image or download PNG"
    ],
    "extensions": [
      "Automated console.error log attachment",
      "Direct GitHub Issue creation webhook integration"
    ],
    "mvpScope": "Take a screenshot of a bug, draw a red arrow pointing to the flaw, and copy the annotated image to clipboard.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-21",
    "title": "VaultCLI: Personal Knowledge CLI Note Tool with Fuzzy Grep",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Terminal-focused developers hate switching to heavy GUI note apps while working in the shell.",
    "problemStatement": "Terminal-focused developers hate switching to heavy GUI note apps while working in the shell.",
    "solution": "A blazing-fast command-line note-taking tool that creates, tags, and greps Markdown notes from the terminal.",
    "proposedSolution": "A blazing-fast command-line note-taking tool that creates, tags, and greps Markdown notes from the terminal.",
    "realWorldUseCase": "DevOps engineer quickly logging a tricky Kubernetes kubectl command without leaving the terminal.",
    "targetAudience": "DevOps engineer quickly logging a tricky Kubernetes kubectl command without leaving the terminal.",
    "mainFeatures": [
      "Terminal CLI tool written in Node.js / Go with zero external dependencies",
      "Instant fuzzy search across notes using fzf integration or internal grep",
      "Git-backed auto-commit and push to private GitHub repo on every save",
      "Markdown syntax preview directly in the terminal with terminal formatting"
    ],
    "features": [
      "Terminal CLI tool written in Node.js / Go with zero external dependencies",
      "Instant fuzzy search across notes using fzf integration or internal grep",
      "Git-backed auto-commit and push to private GitHub repo on every save",
      "Markdown syntax preview directly in the terminal with terminal formatting"
    ],
    "frontend": "React (Web Dashboard Companion), Tailwind",
    "backend": "Node.js (CLI binary) / Commander",
    "database": "Local Filesystem (Markdown files)",
    "otherTech": "Commander.js, Inquirer, Chalk",
    "techStack": [
      "Node.js",
      "CLI",
      "Markdown",
      "Git"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Every note is saved as a plain Markdown file on your disk; auto-commits to your private Git repo.",
    "roadmap": [
      "CLI command argument parser (vault new, vault list, vault find)",
      "Interactive terminal search prompt with fuzzy highlighting",
      "Default editor launcher (opens in Nano, Vim, or VS Code)",
      "Automated Git commit daemon in background"
    ],
    "extensions": [
      "Encrypted note vaults using GPG keys",
      "Web companion viewer displaying local markdown notes"
    ],
    "mvpScope": "Run `vault new 'k8s ingress fix'`, type your notes, and run `vault find 'ingress'` to recall it instantly.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-22",
    "title": "FavMark: Smart Bookmark Categorizer with Auto-Favicons",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Developers save 1,000 browser bookmarks into a chaotic mess that is impossible to navigate.",
    "problemStatement": "Developers save 1,000 browser bookmarks into a chaotic mess that is impossible to navigate.",
    "solution": "A visual bookmark organizer that fetches metadata, high-res favicons, and auto-categorizes links by tech stack.",
    "proposedSolution": "A visual bookmark organizer that fetches metadata, high-res favicons, and auto-categorizes links by tech stack.",
    "realWorldUseCase": "Frontend engineer organizing 200 saved CSS tricks, UI libraries, and documentation pages.",
    "targetAudience": "Frontend engineer organizing 200 saved CSS tricks, UI libraries, and documentation pages.",
    "mainFeatures": [
      "URL input with automated OpenGraph title, description, and favicon extraction",
      "Automated category tagging (CSS, React, DevOps, AI, Design)",
      "Visual grid card layout with website screenshot previews",
      "Export and import to standard browser HTML bookmarks"
    ],
    "features": [
      "URL input with automated OpenGraph title, description, and favicon extraction",
      "Automated category tagging (CSS, React, DevOps, AI, Design)",
      "Visual grid card layout with website screenshot previews",
      "Export and import to standard browser HTML bookmarks"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Cheerio",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Cheerio, Prisma",
    "techStack": [
      "Next.js",
      "Cheerio",
      "Supabase",
      "Tailwind"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Pulls high-resolution OpenGraph cards and website favicons to make browsing bookmarks visually effortless.",
    "roadmap": [
      "Bookmark URL intake form with Cheerio metadata scraper",
      "Tag and category management system with color badges",
      "Visual card gallery with live search filtering",
      "Browser HTML bookmarks file importer and exporter"
    ],
    "extensions": [
      "Dead link and 404 URL broken link detector",
      "Public curated resource list sharing page"
    ],
    "mvpScope": "Paste 3 tutorial links; watch titles, high-res icons, and tags populate automatically into a visual grid.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-23",
    "title": "CalAudit: Weekly Time Audit & Productivity Heatmap",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Workers feel exhausted at the end of the week without knowing where their 40 hours actually went.",
    "problemStatement": "Workers feel exhausted at the end of the week without knowing where their 40 hours actually went.",
    "solution": "A calendar analysis dashboard categorizing Google Calendar meetings vs deep work into hourly heatmaps.",
    "proposedSolution": "A calendar analysis dashboard categorizing Google Calendar meetings vs deep work into hourly heatmaps.",
    "realWorldUseCase": "Software engineer discovering that fragmented 30-minute meetings destroyed their coding focus blocks.",
    "targetAudience": "Software engineer discovering that fragmented 30-minute meetings destroyed their coding focus blocks.",
    "mainFeatures": [
      "Google Calendar .ics file upload and event categorization (Meetings, Deep Work, Admin)",
      "Weekly focus time percentage scorecard (Target: >50% Deep Work)",
      "Context-switching penalty metric (Meetings separated by <30 min breaks)",
      "Recommendations for consolidating meetings into unified focus blocks"
    ],
    "features": [
      "Google Calendar .ics file upload and event categorization (Meetings, Deep Work, Admin)",
      "Weekly focus time percentage scorecard (Target: >50% Deep Work)",
      "Context-switching penalty metric (Meetings separated by <30 min breaks)",
      "Recommendations for consolidating meetings into unified focus blocks"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Recharts, ical.js",
    "techStack": [
      "React",
      "Recharts",
      "Tailwind",
      "LocalStorage"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Calculates the 'Fragmented Time Penalty'\u2014revealing how scattered 30-minute gaps destroy deep work.",
    "roadmap": [
      ".ics calendar file parser extracting meeting titles and durations",
      "Meeting category auto-tagging rules (1-on-1, All-Hands, Coding)",
      "Weekly time allocation stacked bar chart and focus score",
      "Actionable schedule consolidation recommendation tips"
    ],
    "extensions": [
      "Google Calendar OAuth live API sync",
      "Team meeting load comparison for engineering managers"
    ],
    "mvpScope": "Upload your calendar .ics file; view an instant breakdown showing 22 hours in meetings and 14 hours in deep work.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-24",
    "title": "DepGuard: Automated Dependency Security & Patch Updater",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Developers ignore critical security vulnerability alerts in npm packages due to fear of breaking builds.",
    "problemStatement": "Developers ignore critical security vulnerability alerts in npm packages due to fear of breaking builds.",
    "solution": "A dependency manager that scans package.json, tests updates in sandbox, and generates verified upgrade PRs.",
    "proposedSolution": "A dependency manager that scans package.json, tests updates in sandbox, and generates verified upgrade PRs.",
    "realWorldUseCase": "Maintainer updating a vulnerable version of Axios without breaking existing API calls.",
    "targetAudience": "Maintainer updating a vulnerable version of Axios without breaking existing API calls.",
    "mainFeatures": [
      "package.json and lockfile parsing for known security vulnerabilities",
      "Semantic versioning upgrade analyzer (Patch vs Minor vs Major risk)",
      "Automated test runner testing whether package upgrades break tests",
      "Clear changelog summary and 1-click update command generator"
    ],
    "features": [
      "package.json and lockfile parsing for known security vulnerabilities",
      "Semantic versioning upgrade analyzer (Patch vs Minor vs Major risk)",
      "Automated test runner testing whether package upgrades break tests",
      "Clear changelog summary and 1-click update command generator"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Docker",
    "database": "PostgreSQL / SQLite",
    "otherTech": "Docker, npm CLI",
    "techStack": [
      "React",
      "Node.js",
      "Docker",
      "Tailwind"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Runs your project's test suite inside a sandbox container before recommending an upgrade, proving it won't break.",
    "roadmap": [
      "Dependency lockfile parser and OSV vulnerability matcher",
      "Automated containerized test execution harness",
      "Upgrade risk scorecard (Safe Patch, Breaking Major)",
      "One-click copy `npm install` command with verified versions"
    ],
    "extensions": [
      "Automated GitHub PR creation with test results",
      "License compliance conflict checker"
    ],
    "mvpScope": "Upload package.json; view 3 vulnerable packages with verified green tests on patched versions ready to copy.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-prod-25",
    "title": "DeskZone: Virtual Productivity Desktop Wallpaper Organizer",
    "domain": "Productivity & Automation",
    "category": "Productivity & Automation",
    "problem": "Computer desktops get cluttered with 100 loose files, making it frustrating to find active project files.",
    "problemStatement": "Computer desktops get cluttered with 100 loose files, making it frustrating to find active project files.",
    "solution": "A customizable desktop wallpaper generator creating structured visual zones for Active, Done, and Archive files.",
    "proposedSolution": "A customizable desktop wallpaper generator creating structured visual zones for Active, Done, and Archive files.",
    "realWorldUseCase": "Designer organizing a chaotic Mac/Windows desktop into clean functional sections.",
    "targetAudience": "Designer organizing a chaotic Mac/Windows desktop into clean functional sections.",
    "mainFeatures": [
      "Interactive canvas wallpaper builder with customizable zones (Active, Next, Tools, Done)",
      "Minimalist aesthetic color palettes and dark mode gradients",
      "Customizable text labels, productivity quotes, and monthly calendars",
      "High-resolution 4K wallpaper PNG export matching screen resolution"
    ],
    "features": [
      "Interactive canvas wallpaper builder with customizable zones (Active, Next, Tools, Done)",
      "Minimalist aesthetic color palettes and dark mode gradients",
      "Customizable text labels, productivity quotes, and monthly calendars",
      "High-resolution 4K wallpaper PNG export matching screen resolution"
    ],
    "frontend": "React, Canvas API, Tailwind",
    "backend": "Client-Side (Vite)",
    "database": "LocalStorage",
    "otherTech": "Canvas API, Lucide React",
    "techStack": [
      "React",
      "Canvas API",
      "Tailwind",
      "JavaScript"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Exports crisp 4K wallpapers designed specifically to align your desktop icons into organized physical zones.",
    "roadmap": [
      "Canvas 2D wallpaper layout designer with grid snapping",
      "Zone box customizer (border colors, titles, background opacity)",
      "Integrated monthly calendar and motivational quote widget",
      "One-click 4K PNG wallpaper download matching user resolution"
    ],
    "extensions": [
      "Pre-made templates for designers, students, and engineers",
      "Automated wallpaper changer integration"
    ],
    "mvpScope": "Customize 3 visual zone boxes on canvas and download a clean 4K desktop wallpaper to organize your desktop files.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-01",
    "title": "FoodBankSync: Real-Time Food Bank & Pantry Distribution Hub",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Food pantries face severe shortages of milk and protein while receiving excess pasta that goes to waste.",
    "problemStatement": "Food pantries face severe shortages of milk and protein while receiving excess pasta that goes to waste.",
    "solution": "A real-time inventory and supply matching portal connecting food banks with surplus food donors.",
    "proposedSolution": "A real-time inventory and supply matching portal connecting food banks with surplus food donors.",
    "realWorldUseCase": "Food pantry director requesting 50 gallons of milk and 20 dozen eggs for an upcoming distribution day.",
    "targetAudience": "Food pantry director requesting 50 gallons of milk and 20 dozen eggs for an upcoming distribution day.",
    "mainFeatures": [
      "Food pantry real-time shortage wish list (Urgent, Moderate, Well-Stocked)",
      "Donor surplus item matching and scheduled drop-off coordination",
      "Volunteer shift scheduling and distribution day attendance roster",
      "Interactive local food pantry directory for families in need"
    ],
    "features": [
      "Food pantry real-time shortage wish list (Urgent, Moderate, Well-Stocked)",
      "Donor surplus item matching and scheduled drop-off coordination",
      "Volunteer shift scheduling and distribution day attendance roster",
      "Interactive local food pantry directory for families in need"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Twilio API",
    "techStack": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Prevents pantry imbalances by broadcasting specific needed items rather than generic non-perishables.",
    "roadmap": [
      "Food pantry shortage management dashboard",
      "Community donor item pledge and drop-off scheduling form",
      "Local pantry location map with distribution hours",
      "Automated SMS alerts to local grocery partners for urgent needs"
    ],
    "extensions": [
      "Volunteer route driver dispatcher for food rescue",
      "Household dietary restriction filter for clients"
    ],
    "mvpScope": "View local pantry needing 30 cartons of eggs; pledge 10 cartons and receive drop-off confirmation.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-02",
    "title": "ReliefSupply: Disaster Relief Supply & Emergency Shelter Map",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "During hurricanes, emergency shelters fill to capacity while displaced families drive aimlessly in storms.",
    "problemStatement": "During hurricanes, emergency shelters fill to capacity while displaced families drive aimlessly in storms.",
    "solution": "A real-time disaster response portal tracking emergency shelter bed availability, supplies, and pet policies.",
    "proposedSolution": "A real-time disaster response portal tracking emergency shelter bed availability, supplies, and pet policies.",
    "realWorldUseCase": "Family evacuating a flood zone seeking a pet-friendly shelter with open capacity.",
    "targetAudience": "Family evacuating a flood zone seeking a pet-friendly shelter with open capacity.",
    "mainFeatures": [
      "Emergency shelter capacity telemetry (Open beds, Full, Standby)",
      "Pet-friendly, wheelchair-accessible, and medical-needs shelter filters",
      "Supply donation drop-off wishlist for community relief organizers",
      "Real-time road closure and flood hazard overlay on emergency routes"
    ],
    "features": [
      "Emergency shelter capacity telemetry (Open beds, Full, Standby)",
      "Pet-friendly, wheelchair-accessible, and medical-needs shelter filters",
      "Supply donation drop-off wishlist for community relief organizers",
      "Real-time road closure and flood hazard overlay on emergency routes"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, WebSockets",
    "database": "PostgreSQL, PostGIS",
    "otherTech": "Mapbox GL, Socket.io",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "WebSockets"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "Features real-time shelter capacity counters so evacuees never arrive at a full shelter during emergencies.",
    "roadmap": [
      "Mapbox emergency shelter map with capacity status badges",
      "Shelter manager 1-tap bed count update portal",
      "Special accommodations filter (Pets allowed, Medical electricity)",
      "Emergency supply needs table with donation instructions"
    ],
    "extensions": [
      "Offline emergency shelter map caching for downed towers",
      "Missing person family reunification board"
    ],
    "mvpScope": "Check emergency map; find a nearby high school shelter with 42 open beds and pet-friendly accommodations.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-social-03",
    "title": "TechSenior: Senior Citizen Tech Tutoring & Friendly Connect",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Elderly seniors suffer deep social isolation and struggle to navigate online medical portals and video calls.",
    "problemStatement": "Elderly seniors suffer deep social isolation and struggle to navigate online medical portals and video calls.",
    "solution": "A volunteer platform matching tech-savvy students with local seniors for patient 1-on-1 technology tutoring.",
    "proposedSolution": "A volunteer platform matching tech-savvy students with local seniors for patient 1-on-1 technology tutoring.",
    "realWorldUseCase": "College student spending 30 minutes teaching a senior grandmother how to video call her grandchildren.",
    "targetAudience": "College student spending 30 minutes teaching a senior grandmother how to video call her grandchildren.",
    "mainFeatures": [
      "Senior learner technology request board (FaceTime, Online banking, Email)",
      "Volunteer student background check and interest matching",
      "Dedicated accessible video call room with simplified screen sharing",
      "Friendly weekly check-in call scheduler to combat isolation"
    ],
    "features": [
      "Senior learner technology request board (FaceTime, Online banking, Email)",
      "Volunteer student background check and interest matching",
      "Dedicated accessible video call room with simplified screen sharing",
      "Friendly weekly check-in call scheduler to combat isolation"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Twilio",
    "database": "PostgreSQL, Supabase",
    "otherTech": "WebRTC, Twilio API",
    "techStack": [
      "React",
      "Node.js",
      "WebRTC",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Designed with high-contrast large fonts, simple language, and zero intimidating tech jargon for seniors.",
    "roadmap": [
      "Senior request intake with simplified large-button UI",
      "Volunteer tutor matching queue and scheduling calendar",
      "Integrated accessible video calling room with simplified controls",
      "Senior feedback smile rating and volunteer hour certificate generator"
    ],
    "extensions": [
      "Step-by-step printable illustrated cheat sheets for seniors",
      "Family member proxy appointment booking"
    ],
    "mvpScope": "Senior requests help setting up a Kindle; college student accepts request and schedules a friendly 20-minute video session.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-04",
    "title": "ToolLibrary: Community Tool Library & Equipment Lending Network",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Homeowners buy expensive lawnmowers and drills that sit unused in garages 99% of the year.",
    "problemStatement": "Homeowners buy expensive lawnmowers and drills that sit unused in garages 99% of the year.",
    "solution": "A neighborhood equipment lending network allowing residents to borrow lawnmowers, ladders, and power tools.",
    "proposedSolution": "A neighborhood equipment lending network allowing residents to borrow lawnmowers, ladders, and power tools.",
    "realWorldUseCase": "Resident borrowing a high-pressure washer for a Saturday patio cleaning project.",
    "targetAudience": "Resident borrowing a high-pressure washer for a Saturday patio cleaning project.",
    "mainFeatures": [
      "Searchable neighborhood tool catalog with availability status",
      "Digital check-out and reservation system with return reminders",
      "Tool maintenance log and safety equipment checklist",
      "Community carbon and money saved impact dashboard"
    ],
    "features": [
      "Searchable neighborhood tool catalog with availability status",
      "Digital check-out and reservation system with return reminders",
      "Tool maintenance log and safety equipment checklist",
      "Community carbon and money saved impact dashboard"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Reduces consumer consumption and waste by treating neighborhood tools as a shared circular utility.",
    "roadmap": [
      "Tool inventory catalog with category filters (Gardening, Carpentry, Plumbing)",
      "Reservation calendar with pickup and return date slots",
      "Borrower check-out agreement and tool safety instructions",
      "Community collective savings counter (e.g. '$14,000 saved this year')"
    ],
    "extensions": [
      "QR code tool asset tagging for fast physical check-in",
      "Community repair cafe workshop schedule board"
    ],
    "mvpScope": "Search 'Pressure Washer', reserve it for Saturday 10:00 AM, and view the pickup location in your neighborhood.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-05",
    "title": "PawsRescue: Local Stray Animal Rescue & Foster Matchmaker",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Animal shelters are overcrowded and forced to euthanize animals because they lack temporary foster homes.",
    "problemStatement": "Animal shelters are overcrowded and forced to euthanize animals because they lack temporary foster homes.",
    "solution": "A foster matching platform pairing shelter dogs and cats with compassionate temporary foster parents.",
    "proposedSolution": "A foster matching platform pairing shelter dogs and cats with compassionate temporary foster parents.",
    "realWorldUseCase": "College student fostering a recovering rescue dog for 3 weeks before permanent adoption.",
    "targetAudience": "College student fostering a recovering rescue dog for 3 weeks before permanent adoption.",
    "mainFeatures": [
      "Rescue animal profiles with behavioral notes, energy level, and cat/dog compatibility",
      "Foster parent application questionnaire and lifestyle matching algorithm",
      "Temporary foster duration filter (Weekend, 2 weeks, Emergency medical foster)",
      "Medical supply and food sponsorship wishlist per animal"
    ],
    "features": [
      "Rescue animal profiles with behavioral notes, energy level, and cat/dog compatibility",
      "Foster parent application questionnaire and lifestyle matching algorithm",
      "Temporary foster duration filter (Weekend, 2 weeks, Emergency medical foster)",
      "Medical supply and food sponsorship wishlist per animal"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Cloudinary",
    "techStack": [
      "Next.js",
      "Node.js",
      "Supabase",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Matches animals with suitable foster homes based on specific lifestyle factors (e.g. apartment-friendly, dog-friendly).",
    "roadmap": [
      "Rescue animal photo cards with compatibility badges",
      "Foster applicant lifestyle questionnaire and matching score",
      "Foster application approval workflow for shelter staff",
      "Direct in-app messaging between foster parents and shelters"
    ],
    "extensions": [
      "Emergency temporary foster alert dispatch for overcrowded shelters",
      "Adoption application handoff workflow"
    ],
    "mvpScope": "View rescue dog 'Luna', see 95% match with your apartment lifestyle, and submit a 2-week foster application.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-06",
    "title": "AudioArchive: Accessible Public Domain Audio Library for the Blind",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Visually impaired students in developing nations lack access to expensive commercial audiobook subscriptions.",
    "problemStatement": "Visually impaired students in developing nations lack access to expensive commercial audiobook subscriptions.",
    "solution": "An open audio library where volunteers record chapters of public domain classic literature and textbooks.",
    "proposedSolution": "An open audio library where volunteers record chapters of public domain classic literature and textbooks.",
    "realWorldUseCase": "Volunteer recording Chapter 4 of 'Frankenstein' for visually impaired high school students.",
    "targetAudience": "Volunteer recording Chapter 4 of 'Frankenstein' for visually impaired high school students.",
    "mainFeatures": [
      "Chapter-by-chapter crowdsourced audio recording studio in browser",
      "100% WCAG AAA screen-reader accessible audio player with bookmarking",
      "Text-audio synchronized transcript reader for low-vision learners",
      "Community audio quality review and approval workflow"
    ],
    "features": [
      "Chapter-by-chapter crowdsourced audio recording studio in browser",
      "100% WCAG AAA screen-reader accessible audio player with bookmarking",
      "Text-audio synchronized transcript reader for low-vision learners",
      "Community audio quality review and approval workflow"
    ],
    "frontend": "React, Web Audio API, Tailwind",
    "backend": "Node.js, Express, AWS S3",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Web Audio API, S3 API",
    "techStack": [
      "React",
      "Web Audio API",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3-4 weeks",
    "uniqueness": "100% free open-access audio literature built with full screen-reader accessibility and audio navigation keys.",
    "roadmap": [
      "In-browser microphone chapter recorder with waveform editor",
      "Public domain book library with claimable chapter slots",
      "WCAG AAA audio player with variable playback speed and keyboard shortcuts",
      "Peer audio review and volume normalization pipeline"
    ],
    "extensions": [
      "Offline chapter download for low-bandwidth regions",
      "Automated AI speech-to-text proofreader for volunteer recordings"
    ],
    "mvpScope": "Volunteer records a 5-minute public domain book chapter; visually impaired listener plays audio with full keyboard controls.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-07",
    "title": "PantryBox: Community Fridge & Little Free Pantry Tracker",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Volunteers stock neighborhood community fridges only for them to sit empty when hungry neighbors arrive.",
    "problemStatement": "Volunteers stock neighborhood community fridges only for them to sit empty when hungry neighbors arrive.",
    "solution": "A crowdsourced community pantry map tracking milk, produce, and non-perishable stock levels with photos.",
    "proposedSolution": "A crowdsourced community pantry map tracking milk, produce, and non-perishable stock levels with photos.",
    "realWorldUseCase": "Local baker dropping off surplus bread at a community fridge and updating current stock.",
    "targetAudience": "Local baker dropping off surplus bread at a community fridge and updating current stock.",
    "mainFeatures": [
      "Interactive map of neighborhood free fridges and mini pantries",
      "Real-time stock status indicator (Full, Half, Empty, Needs cleaning)",
      "Recent photo upload showing current shelf contents",
      "Temperature sensor telemetry for community fridges (ensuring food safety)"
    ],
    "features": [
      "Interactive map of neighborhood free fridges and mini pantries",
      "Real-time stock status indicator (Full, Half, Empty, Needs cleaning)",
      "Recent photo upload showing current shelf contents",
      "Temperature sensor telemetry for community fridges (ensuring food safety)"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Cloudinary",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Mapbox GL, Cloudinary",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Features food safety alerts: warns volunteers if a community fridge temperature rises above safe 40\u00b0F storage.",
    "roadmap": [
      "Mapbox community pantry map with location pins",
      "1-tap stock status update and shelf photo upload form",
      "Food safety guidelines for community fridge donations",
      "Volunteer fridge cleaning and maintenance schedule"
    ],
    "extensions": [
      "IoT temperature sensor alert integration",
      "Wishlist notifications when specific essentials are dropped off"
    ],
    "mvpScope": "Find a community fridge on the map, view a photo taken 2 hours ago showing fresh vegetables, and drop off items.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-08",
    "title": "FirstGenMentors: First-Generation College Prep & Mentorship",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "First-generation high school students have no family guidance navigating college applications and FAFSA.",
    "problemStatement": "First-generation high school students have no family guidance navigating college applications and FAFSA.",
    "solution": "A mentorship platform pairing first-generation high schoolers with first-gen college alumni mentors.",
    "proposedSolution": "A mentorship platform pairing first-generation high schoolers with first-gen college alumni mentors.",
    "realWorldUseCase": "High school senior receiving guidance on filing the FAFSA financial aid form.",
    "targetAudience": "High school senior receiving guidance on filing the FAFSA financial aid form.",
    "mainFeatures": [
      "Student-mentor matching by intended major and shared cultural background",
      "Step-by-step college application milestones (SAT, Essays, FAFSA, Deadlines)",
      "Private asynchronous messaging and essay feedback exchange",
      "Scholarship database specifically curated for first-generation students"
    ],
    "features": [
      "Student-mentor matching by intended major and shared cultural background",
      "Step-by-step college application milestones (SAT, Essays, FAFSA, Deadlines)",
      "Private asynchronous messaging and essay feedback exchange",
      "Scholarship database specifically curated for first-generation students"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, SendGrid",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Provides structured, milestone-driven mentorship ensuring students never miss critical financial aid deadlines.",
    "roadmap": [
      "Student and mentor profile intake with interest matching",
      "College application progress checklist with due dates",
      "Secure messaging thread with file attachment review",
      "Curated first-gen scholarship directory with filter tags"
    ],
    "extensions": [
      "Virtual mock college interview practice rooms",
      "Financial aid award letter comparison calculator"
    ],
    "mvpScope": "High school senior matches with a first-gen engineer mentor; mentor reviews student's college essay draft.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-09",
    "title": "ShelterBed: Homeless Shelter Real-Time Bed Availability Board",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Homeless individuals walk 5 miles in winter weather only to find shelters completely full with closed doors.",
    "problemStatement": "Homeless individuals walk 5 miles in winter weather only to find shelters completely full with closed doors.",
    "solution": "A centralized shelter dashboard allowing shelters to update available beds and intake hours in real time.",
    "proposedSolution": "A centralized shelter dashboard allowing shelters to update available beds and intake hours in real time.",
    "realWorldUseCase": "Case worker finding an emergency warm bed for an unsheltered family on a freezing night.",
    "targetAudience": "Case worker finding an emergency warm bed for an unsheltered family on a freezing night.",
    "mainFeatures": [
      "Real-time bed availability board updated by shelter intake staff",
      "Demographic filter (Men, Women, Families, Youth, Veteran beds)",
      "Shelter intake hours, address, and public transit directions",
      "Hypothermia winter emergency warming shelter locations"
    ],
    "features": [
      "Real-time bed availability board updated by shelter intake staff",
      "Demographic filter (Men, Women, Families, Youth, Veteran beds)",
      "Shelter intake hours, address, and public transit directions",
      "Hypothermia winter emergency warming shelter locations"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, SMS API",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Twilio API, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Shelter staff can update available bed counts via a single 10-second SMS reply, ensuring zero friction.",
    "roadmap": [
      "Shelter bed availability list with color-coded capacity badges",
      "Filter by bed type (Single men, Women with children, Youth)",
      "Shelter intake rules, curfews, and public transit bus routes",
      "SMS automated check-in bot for shelter staff updates"
    ],
    "extensions": [
      "Cold-weather hypothermia emergency banner trigger",
      "Case worker reservation hold for arriving clients"
    ],
    "mvpScope": "Check shelter board; view 3 available family beds at Downtown Shelter with intake open until 9:00 PM.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-10",
    "title": "SkillSwap: Neighborhood Skill Exchange & Time Bank",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Neighbors live isolated lives with valuable skills while unable to afford plumbers or language tutors.",
    "problemStatement": "Neighbors live isolated lives with valuable skills while unable to afford plumbers or language tutors.",
    "solution": "A neighborhood time-banking network where one hour of helping a neighbor earns one hour of help in return.",
    "proposedSolution": "A neighborhood time-banking network where one hour of helping a neighbor earns one hour of help in return.",
    "realWorldUseCase": "Carpenter trading 1 hour of shelving repair for 1 hour of conversational Spanish tutoring.",
    "targetAudience": "Carpenter trading 1 hour of shelving repair for 1 hour of conversational Spanish tutoring.",
    "mainFeatures": [
      "Time-banking balance ledger (1 hour given = 1 service credit earned)",
      "Skill directory (Home repair, Cooking, Language lessons, Gardening, Coding)",
      "Request and offer marketplace with neighborhood radius filters",
      "Community trust ratings and mutual member vouching"
    ],
    "features": [
      "Time-banking balance ledger (1 hour given = 1 service credit earned)",
      "Skill directory (Home repair, Cooking, Language lessons, Gardening, Coding)",
      "Request and offer marketplace with neighborhood radius filters",
      "Community trust ratings and mutual member vouching"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Lucide React",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Eliminates money entirely: all hours are valued equally whether you tutor calculus or rake autumn leaves.",
    "roadmap": [
      "User profile with 'Skills I Offer' and 'Skills I Need' tags",
      "Time-bank credit transaction ledger tracking earned hours",
      "Service request marketplace with neighborhood distance filters",
      "Mutual completion review and trust verification system"
    ],
    "extensions": [
      "Neighborhood skill workshop group events",
      "Time-banking community credit pool for elderly members"
    ],
    "mvpScope": "Post an offer to teach beginner guitar; earn 1 credit and spend it on 1 hour of bicycle maintenance from a neighbor.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-11",
    "title": "BullyReport: Anonymous School Cyberbullying & Support Portal",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Students endure cyberbullying in silence because reporting to school principals in person risks retaliation.",
    "problemStatement": "Students endure cyberbullying in silence because reporting to school principals in person risks retaliation.",
    "solution": "An anonymous reporting portal allowing students to submit incident details and screenshots safely.",
    "proposedSolution": "An anonymous reporting portal allowing students to submit incident details and screenshots safely.",
    "realWorldUseCase": "High school student reporting targeted online harassment against a classmate.",
    "targetAudience": "High school student reporting targeted online harassment against a classmate.",
    "mainFeatures": [
      "100% anonymous incident intake with metadata stripping from screenshots",
      "Categorized incident tagging (Cyberbullying, Physical, Exclusion, Threat)",
      "School counselor review queue with priority severity scoring",
      "Immediate supportive crisis mental health resources for reporting student"
    ],
    "features": [
      "100% anonymous incident intake with metadata stripping from screenshots",
      "Categorized incident tagging (Cyberbullying, Physical, Exclusion, Threat)",
      "School counselor review queue with priority severity scoring",
      "Immediate supportive crisis mental health resources for reporting student"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, DOMPurify",
    "techStack": [
      "Next.js",
      "Node.js",
      "Supabase",
      "DOMPurify"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Strips all EXIF metadata and IP addresses to guarantee reporting students are never identified.",
    "roadmap": [
      "Multi-step anonymous reporting form with screenshot uploader",
      "Automatic image EXIF metadata stripping and IP anonymization",
      "Counselor triaged incident management dashboard",
      "Immediate emergency support hotlines and coping resources modal"
    ],
    "extensions": [
      "Two-way anonymous chat between student and counselor",
      "Incident trend analytics across school grade levels"
    ],
    "mvpScope": "Submit an anonymous harassment report with an attachment; receive a secure tracking code and crisis support tips.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-12",
    "title": "WaterWell: Rural Water Quality & Well Location Map",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Rural communities drink well water contaminated by agricultural runoff without knowing tested contamination levels.",
    "problemStatement": "Rural communities drink well water contaminated by agricultural runoff without knowing tested contamination levels.",
    "solution": "A community water safety portal mapping rural water wells, testing history, and arsenic/lead contaminant levels.",
    "proposedSolution": "A community water safety portal mapping rural water wells, testing history, and arsenic/lead contaminant levels.",
    "realWorldUseCase": "Rural homeowner checking whether neighboring wells have tested positive for high nitrates.",
    "targetAudience": "Rural homeowner checking whether neighboring wells have tested positive for high nitrates.",
    "mainFeatures": [
      "Water well GPS location map with historical test lab results",
      "Contaminant safety meters (Nitrates, Arsenic, Lead, Coliform bacteria)",
      "Affordable water testing kit request and certified lab directory",
      "Recommended water filtration solutions by detected contaminant (Reverse osmosis, UV)"
    ],
    "features": [
      "Water well GPS location map with historical test lab results",
      "Contaminant safety meters (Nitrates, Arsenic, Lead, Coliform bacteria)",
      "Affordable water testing kit request and certified lab directory",
      "Recommended water filtration solutions by detected contaminant (Reverse osmosis, UV)"
    ],
    "frontend": "React, Mapbox GL, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, Recharts",
    "techStack": [
      "React",
      "Mapbox",
      "FastAPI",
      "PostGIS"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Recommends specific, verified filtration technologies that remove the exact contaminant found in local wells.",
    "roadmap": [
      "Mapbox well map with color-coded water safety status pins",
      "Contaminant lab report upload and metric breakdown",
      "Water filtration recommendation guide (e.g. UV for bacteria)",
      "Local certified water testing lab directory"
    ],
    "extensions": [
      "Automated annual well testing reminder alerts",
      "Groundwater aquifer flow direction prediction overlay"
    ],
    "mvpScope": "Click a well pin on the map; view 12 mg/L nitrate level (Exceeds EPA limit) with recommended filtration steps.",
    "collections": [
      "portfolio"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-13",
    "title": "RampAudit: Crowdsourced Sidewalk Curb Ramp Accessibility Audit",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Wheelchair users get stranded when city sidewalks end in broken, non-ADA compliant curb cuts.",
    "problemStatement": "Wheelchair users get stranded when city sidewalks end in broken, non-ADA compliant curb cuts.",
    "solution": "A civic audit tool allowing pedestrians to photograph and rate sidewalk curb ramps for wheelchair access.",
    "proposedSolution": "A civic audit tool allowing pedestrians to photograph and rate sidewalk curb ramps for wheelchair access.",
    "realWorldUseCase": "Wheelchair advocate documenting a dangerous 4-inch sidewalk lip blocking street access.",
    "targetAudience": "Wheelchair advocate documenting a dangerous 4-inch sidewalk lip blocking street access.",
    "mainFeatures": [
      "Camera photo capture with GPS geo-tagging of sidewalk curb ramps",
      "ADA compliance grading checklist (Slope, Detectable warning bumps, Lip height)",
      "City accessibility scorecard by neighborhood and council district",
      "Exportable public works road repair work-order package"
    ],
    "features": [
      "Camera photo capture with GPS geo-tagging of sidewalk curb ramps",
      "ADA compliance grading checklist (Slope, Detectable warning bumps, Lip height)",
      "City accessibility scorecard by neighborhood and council district",
      "Exportable public works road repair work-order package"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Prisma",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, Prisma",
    "techStack": [
      "React",
      "Mapbox",
      "PostGIS",
      "Node.js"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Aggregates community audit photos into ready-to-file municipal ADA complaint packets for city councils.",
    "roadmap": [
      "Sidewalk curb ramp audit form with photo attachment",
      "ADA compliance grade calculation (A to F)",
      "Mapbox city map showing accessible vs impassable sidewalk corridors",
      "Exportable municipal public works repair petition packet"
    ],
    "extensions": [
      "Smartphone camera inclinometer measuring ramp slope angle",
      "Volunteer weekend civic audit mapping party leaderboards"
    ],
    "mvpScope": "Photograph a sidewalk curb ramp, check 'Missing tactile bumps', and see it added to the city repair petition map.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-14",
    "title": "RefugeeBuddy: Refugee Language & Community Settlement Guide",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Newly arrived refugees struggle to navigate public transit, enroll kids in school, and obtain groceries.",
    "problemStatement": "Newly arrived refugees struggle to navigate public transit, enroll kids in school, and obtain groceries.",
    "solution": "A settlement guide providing translated, step-by-step checklists for newly arrived refugee families.",
    "proposedSolution": "A settlement guide providing translated, step-by-step checklists for newly arrived refugee families.",
    "realWorldUseCase": "Volunteer assisting an Afghan or Ukrainian refugee family settling into a new city.",
    "targetAudience": "Volunteer assisting an Afghan or Ukrainian refugee family settling into a new city.",
    "mainFeatures": [
      "Multi-language step-by-step settlement checklists (ID cards, School, Healthcare)",
      "Local settlement resource map (Halal/Ethnic grocers, Community centers, ESL classes)",
      "Language buddy volunteer chat matching for conversation practice",
      "Audio-translated essential administrative documents and guides"
    ],
    "features": [
      "Multi-language step-by-step settlement checklists (ID cards, School, Healthcare)",
      "Local settlement resource map (Halal/Ethnic grocers, Community centers, ESL classes)",
      "Language buddy volunteer chat matching for conversation practice",
      "Audio-translated essential administrative documents and guides"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Web Speech API, Prisma",
    "techStack": [
      "React",
      "Node.js",
      "Supabase",
      "Web Speech API"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Available in Dari, Pashto, Ukrainian, Arabic, and Spanish with audio voice readouts for low-literacy users.",
    "roadmap": [
      "Language selector with instant multi-language translated UI",
      "Settlement milestone checklist (First 30, 60, 90 days)",
      "Mapbox directory of welcoming community support services",
      "Volunteer language buddy connection request form"
    ],
    "extensions": [
      "Culturally sensitive medical clinic directory",
      "Public transit visual step-by-step navigation guides"
    ],
    "mvpScope": "Select Ukrainian language; browse 10 clear settlement steps with audio pronunciation and local ESL class locations.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-15",
    "title": "SafeExit: Domestic Violence Support Portal with Quick Exit",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Victims of domestic abuse risk violent retaliation if an abuser sees shelter search history on their computer.",
    "problemStatement": "Victims of domestic abuse risk violent retaliation if an abuser sees shelter search history on their computer.",
    "solution": "A crisis support portal with an instant 'Quick Exit' button that immediately wipes screen and replaces it with a recipe.",
    "proposedSolution": "A crisis support portal with an instant 'Quick Exit' button that immediately wipes screen and replaces it with a recipe.",
    "realWorldUseCase": "Individual in a dangerous living situation researching emergency domestic violence shelters safely.",
    "targetAudience": "Individual in a dangerous living situation researching emergency domestic violence shelters safely.",
    "mainFeatures": [
      "Prominent instant 'Quick Escape' button (Immediately redirects to BBC Weather or Google)",
      "Zero browser history persistence and automated cache clearing guide",
      "Emergency shelter hotline numbers and safety planning checklist",
      "Disguised webpage toggle mode masking interface as a cooking recipe blog"
    ],
    "features": [
      "Prominent instant 'Quick Escape' button (Immediately redirects to BBC Weather or Google)",
      "Zero browser history persistence and automated cache clearing guide",
      "Emergency shelter hotline numbers and safety planning checklist",
      "Disguised webpage toggle mode masking interface as a cooking recipe blog"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Client-Side (Vite)",
    "database": "None (Strict Privacy)",
    "otherTech": "Lucide React, Tailwind",
    "techStack": [
      "React",
      "Tailwind",
      "JavaScript",
      "HTML5"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "1-2 weeks",
    "uniqueness": "Pressing the ESC key twice instantly redirects the browser to a harmless recipe website and clears state.",
    "roadmap": [
      "Quick Escape floating button and double-ESC emergency keyboard listener",
      "Disguised UI camouflage toggle (Switches to recipe blog layout)",
      "Emergency safety plan builder with discreet saving tips",
      "24/7 national domestic violence hotline click-to-call buttons"
    ],
    "extensions": [
      "Browser incognito mode and history wipe step-by-step guide",
      "Discreet shelter location guidance without map caching"
    ],
    "mvpScope": "Tap 'Quick Exit' or press ESC; watch the page instantly transform into a simple chocolate chip cookie recipe.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-16",
    "title": "FosterWish: Foster Youth Birthday Wishlist & Sponsorship",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Foster children often move between foster homes without personal belongings or birthday celebrations.",
    "problemStatement": "Foster children often move between foster homes without personal belongings or birthday celebrations.",
    "solution": "A verified sponsorship platform where community donors fulfill specific birthday wishlists for foster kids.",
    "proposedSolution": "A verified sponsorship platform where community donors fulfill specific birthday wishlists for foster kids.",
    "realWorldUseCase": "Foster care case worker posting an 11-year-old child's birthday wish for a skateboard and art set.",
    "targetAudience": "Foster care case worker posting an 11-year-old child's birthday wish for a skateboard and art set.",
    "mainFeatures": [
      "Verified case worker child profile creation (Age, Interests, Birthday wishlist)",
      "Direct retail purchase link fulfillment (Amazon, Target wishlists)",
      "Community donor contribution progress bar and handwritten note builder",
      "Foster youth transition-into-adulthood apartment starter kit registry"
    ],
    "features": [
      "Verified case worker child profile creation (Age, Interests, Birthday wishlist)",
      "Direct retail purchase link fulfillment (Amazon, Target wishlists)",
      "Community donor contribution progress bar and handwritten note builder",
      "Foster youth transition-into-adulthood apartment starter kit registry"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Stripe",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Stripe API",
    "techStack": [
      "Next.js",
      "Node.js",
      "Supabase",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Protects foster child identity by displaying only first names and interests while shipping directly to agency offices.",
    "roadmap": [
      "Case worker portal for verified wishlist item creation",
      "Public donor gallery with filter by age and holiday/birthday",
      "Direct wishlist fulfillment button with donor tracking",
      "Foster agency shipping address verification shield"
    ],
    "extensions": [
      "Aged-out foster youth college supply registry",
      "Corporate employee donation matching challenge"
    ],
    "mvpScope": "Browse open birthday wishlists; sponsor a 9-year-old's $25 science kit and include a personalized birthday card.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-17",
    "title": "CivicFix: Municipal Citizen Complaint & Pothole Tracker",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Citizens complain on social media about broken streetlights and illegal dumping without notifying public works.",
    "problemStatement": "Citizens complain on social media about broken streetlights and illegal dumping without notifying public works.",
    "solution": "A civic reporting dashboard routing geo-tagged citizen repair requests directly to municipal public works.",
    "proposedSolution": "A civic reporting dashboard routing geo-tagged citizen repair requests directly to municipal public works.",
    "realWorldUseCase": "Resident reporting a broken playground swing at a neighborhood public park.",
    "targetAudience": "Resident reporting a broken playground swing at a neighborhood public park.",
    "mainFeatures": [
      "Geo-tagged civic issue reporting with photo upload (Potholes, Graffiti, Streetlights)",
      "Public municipal work-order tracking status (Submitted, Assigned, In Progress, Fixed)",
      "Community upvoting confirming issues affect multiple residents",
      "Municipal public works departmental dispatch dashboard"
    ],
    "features": [
      "Geo-tagged civic issue reporting with photo upload (Potholes, Graffiti, Streetlights)",
      "Public municipal work-order tracking status (Submitted, Assigned, In Progress, Fixed)",
      "Community upvoting confirming issues affect multiple residents",
      "Municipal public works departmental dispatch dashboard"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Prisma",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, Prisma",
    "techStack": [
      "React",
      "Mapbox",
      "PostGIS",
      "Node.js"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Citizens receive email notifications as their report moves from 'Submitted' to 'Work Crew Dispatched' to 'Fixed'.",
    "roadmap": [
      "Citizen issue reporting form with camera photo and GPS pin placement",
      "Mapbox civic issue map with color-coded status badges",
      "Community endorsement button allowing neighbors to upvote urgency",
      "Municipal administrative dashboard with status update controls"
    ],
    "extensions": [
      "Public works work-order CSV export for city crews",
      "Before-and-after photo verification upon repair completion"
    ],
    "mvpScope": "Report a streetlight out with photo; watch neighbors upvote it, and track status until marked 'Fixed' by the city.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-18",
    "title": "VetConnect: Military Veteran Peer Mental Health Match",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Military veterans transitioning to civilian life struggle with PTSD and feel civilians cannot relate to their experiences.",
    "problemStatement": "Military veterans transitioning to civilian life struggle with PTSD and feel civilians cannot relate to their experiences.",
    "solution": "A confidential peer support platform matching military veterans with fellow veterans from similar branches.",
    "proposedSolution": "A confidential peer support platform matching military veterans with fellow veterans from similar branches.",
    "realWorldUseCase": "Army veteran experiencing transition anxiety connecting with a fellow combat veteran mentor.",
    "targetAudience": "Army veteran experiencing transition anxiety connecting with a fellow combat veteran mentor.",
    "mainFeatures": [
      "Confidential military branch, deployment, and MOS service matching",
      "Secure encrypted peer messaging and scheduled phone check-ins",
      "Veterans Affairs (VA) disability benefit and GI Bill guidance library",
      "Immediate 24/7 Veterans Crisis Line one-tap emergency bridge"
    ],
    "features": [
      "Confidential military branch, deployment, and MOS service matching",
      "Secure encrypted peer messaging and scheduled phone check-ins",
      "Veterans Affairs (VA) disability benefit and GI Bill guidance library",
      "Immediate 24/7 Veterans Crisis Line one-tap emergency bridge"
    ],
    "frontend": "React, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Web Crypto API, Prisma",
    "techStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Pairs veterans strictly with peers who understand military culture, specialized jargon, and transition challenges.",
    "roadmap": [
      "Veteran profile intake with branch and era tags (e.g. Army, OEF/OIF)",
      "Peer mentor matching algorithm pairing shared experiences",
      "Secure asynchronous messaging channel with crisis safety banner",
      "One-tap Veterans Crisis Line 988 emergency connector"
    ],
    "extensions": [
      "Local VFW and American Legion community event board",
      "Resume civilian translation tool converting military MOS to civilian skills"
    ],
    "mvpScope": "Sign in as an Army veteran; match with a fellow Army peer mentor and start a private conversation about transition.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-19",
    "title": "PrisonBooks: Incarcerated Education Book Donation & Pen-Pal Hub",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Incarcerated individuals have no access to computers or quality books, stunting rehabilitation and literacy.",
    "problemStatement": "Incarcerated individuals have no access to computers or quality books, stunting rehabilitation and literacy.",
    "solution": "A non-profit book drive platform matching prison facility reading requests with donated books.",
    "proposedSolution": "A non-profit book drive platform matching prison facility reading requests with donated books.",
    "realWorldUseCase": "Volunteer fulfilling an incarcerated person's request for an introduction to Python programming textbook.",
    "targetAudience": "Volunteer fulfilling an incarcerated person's request for an introduction to Python programming textbook.",
    "mainFeatures": [
      "Prison facility approved book catalog requests and strict restriction rules",
      "Community donor book purchase and shipping fulfillment",
      "Volunteer letter-writing coordination and return address privacy shield",
      "Prison education impact stories and literacy milestone metrics"
    ],
    "features": [
      "Prison facility approved book catalog requests and strict restriction rules",
      "Community donor book purchase and shipping fulfillment",
      "Volunteer letter-writing coordination and return address privacy shield",
      "Prison education impact stories and literacy milestone metrics"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Lucide React",
    "techStack": [
      "Next.js",
      "Node.js",
      "Supabase",
      "Prisma"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Enforces prison mailroom packaging rules (Paperback only, no spiral bindings) to guarantee books are accepted.",
    "roadmap": [
      "Incarcerated reader book request database categorized by genre",
      "Community donor claim and fulfillment system with approved packing rules",
      "Volunteer book packing party coordination scheduler",
      "Prison facility library restriction guidelines reference"
    ],
    "extensions": [
      "Digital letter transcription and moderation portal",
      "GED preparation textbook drive wishlist"
    ],
    "mvpScope": "Find a request for an introductory algebra textbook, claim the package, and print the verified prison shipping label.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-20",
    "title": "AEDRescue: Crowdsourced Defibrillator Emergency Map & Alert",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Cardiac arrest survival drops 10% every minute, while public automated external defibrillators (AEDs) sit nearby unnoticed.",
    "problemStatement": "Cardiac arrest survival drops 10% every minute, while public automated external defibrillators (AEDs) sit nearby unnoticed.",
    "solution": "A lifesaving AED locator map showing public defibrillator locations in malls, gyms, and transit hubs.",
    "proposedSolution": "A lifesaving AED locator map showing public defibrillator locations in malls, gyms, and transit hubs.",
    "realWorldUseCase": "Bystander performing CPR sending a runner to grab the nearest AED 200 feet away.",
    "targetAudience": "Bystander performing CPR sending a runner to grab the nearest AED 200 feet away.",
    "mainFeatures": [
      "Crowdsourced verified AED locations with precise interior placement notes (e.g. 'Inside Gym entrance')",
      "Emergency 1-tap 'Find Closest AED' compass mode with walking distance and photo",
      "AED inspection maintenance tracker (Battery expiration, electrode pad dates)",
      "Volunteer CPR trained first-responder notification network"
    ],
    "features": [
      "Crowdsourced verified AED locations with precise interior placement notes (e.g. 'Inside Gym entrance')",
      "Emergency 1-tap 'Find Closest AED' compass mode with walking distance and photo",
      "AED inspection maintenance tracker (Battery expiration, electrode pad dates)",
      "Volunteer CPR trained first-responder notification network"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "FastAPI / Node.js",
    "database": "PostGIS, PostgreSQL",
    "otherTech": "Mapbox GL, Geolocation API",
    "techStack": [
      "React",
      "Mapbox",
      "PostGIS",
      "FastAPI"
    ],
    "difficulty": "Intermediate",
    "estimatedTime": "3 weeks",
    "uniqueness": "Features an emergency high-visibility compass mode pointing an arrow directly toward the nearest AED within 100 meters.",
    "roadmap": [
      "One-tap emergency button pulling nearest AED with distance in feet",
      "Interior location notes with photo of the wall cabinet",
      "AED submission and community verification form",
      "Monthly AED battery and pad inspection reminder system"
    ],
    "extensions": [
      "Audible CPR 110 BPM metronome during the search",
      "Integration with municipal 911 dispatch APIs"
    ],
    "mvpScope": "Tap 'Find AED'; view closest defibrillator 120 feet away inside the community center with photos and access hours.",
    "collections": [
      "portfolio",
      "hackathon"
    ],
    "isBeginner": false,
    "isPortfolio": true,
    "isHackathon": true,
    "isAI": false
  },
  {
    "id": "proj-social-21",
    "title": "GardenPlot: Community Garden Plot Reservation & Harvest Board",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Urban community gardens have 2-year waiting lists with vacant neglected plots going unassigned.",
    "problemStatement": "Urban community gardens have 2-year waiting lists with vacant neglected plots going unassigned.",
    "solution": "A community garden management platform managing plot leases, volunteer workdays, and surplus harvest sharing.",
    "proposedSolution": "A community garden management platform managing plot leases, volunteer workdays, and surplus harvest sharing.",
    "realWorldUseCase": "Urban gardener reserving a 10x10 garden bed and sharing surplus heirloom tomatoes with neighbors.",
    "targetAudience": "Urban gardener reserving a 10x10 garden bed and sharing surplus heirloom tomatoes with neighbors.",
    "mainFeatures": [
      "Interactive visual garden map showing available, leased, and community plots",
      "Plot application waitlist and annual renewal lease manager",
      "Garden work party attendance scheduler and tool shed code access",
      "Surplus harvest sharing board: 'Free zucchini at Plot 14 today'"
    ],
    "features": [
      "Interactive visual garden map showing available, leased, and community plots",
      "Plot application waitlist and annual renewal lease manager",
      "Garden work party attendance scheduler and tool shed code access",
      "Surplus harvest sharing board: 'Free zucchini at Plot 14 today'"
    ],
    "frontend": "React, Canvas API / SVG, Tailwind",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Canvas API, Prisma",
    "techStack": [
      "React",
      "Canvas API",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Includes an interactive 2D garden plot grid map showing sun exposure, water spigots, and plot status.",
    "roadmap": [
      "Visual garden plot grid layout with click-to-reserve status",
      "Gardener profile and annual plot agreement signing",
      "Community work day calendar and task sign-up checklist",
      "Surplus harvest announcement board with photo uploads"
    ],
    "extensions": [
      "Organic gardening composting schedule and rules",
      "Seasonal planting calendar for local climate zone"
    ],
    "mvpScope": "Click Plot #7 on the visual garden map, reserve it for the season, and post surplus mint to the harvest board.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-22",
    "title": "CleanRiverDrive: Local River & Beach Cleanup Drive Organizer",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Community cleanup volunteers get discouraged by unorganized events without trash bags or designated zones.",
    "problemStatement": "Community cleanup volunteers get discouraged by unorganized events without trash bags or designated zones.",
    "solution": "A cleanup event organizer assigning volunteers to specific shore sectors and tracking total pounds removed.",
    "proposedSolution": "A cleanup event organizer assigning volunteers to specific shore sectors and tracking total pounds removed.",
    "realWorldUseCase": "Volunteer coordinator organizing 80 volunteers across 4 sectors of a local riverbank.",
    "targetAudience": "Volunteer coordinator organizing 80 volunteers across 4 sectors of a local riverbank.",
    "mainFeatures": [
      "Interactive shoreline map split into color-coded volunteer cleanup sectors",
      "Volunteer RSVP system with glove/bag supply checklists",
      "Real-time scale weight logging tracking total pounds of trash collected",
      "Before-and-after photo gallery showcasing community environmental impact"
    ],
    "features": [
      "Interactive shoreline map split into color-coded volunteer cleanup sectors",
      "Volunteer RSVP system with glove/bag supply checklists",
      "Real-time scale weight logging tracking total pounds of trash collected",
      "Before-and-after photo gallery showcasing community environmental impact"
    ],
    "frontend": "React, Mapbox GL, Tailwind",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Mapbox GL, Lucide React",
    "techStack": [
      "React",
      "Mapbox",
      "Node.js",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Assigns volunteers to specific numbered sectors on a map to prevent overcrowding and ensure full shoreline coverage.",
    "roadmap": [
      "Event creation wizard with date, meeting point, and map sectors",
      "Volunteer sign-up with sector selection and equipment claims",
      "Day-of-event trash bag scale weigh-in logger",
      "Total cumulative pounds collected milestone celebration counter"
    ],
    "extensions": [
      "Hazardous waste (Glass, Syringes) safety flag protocol",
      "Corporate team sponsorship leaderboard"
    ],
    "mvpScope": "Join the Saturday River Cleanup, claim Sector 2 on the map, and watch the event tally hit 1,200 lbs of trash collected.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-23",
    "title": "MicroGrantHub: High School Science Project Micro-Grants",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Talented low-income high school students abandon innovative STEM science fair projects for lack of $150 in supplies.",
    "problemStatement": "Talented low-income high school students abandon innovative STEM science fair projects for lack of $150 in supplies.",
    "solution": "A micro-grant crowdfunding platform funding high school science fair project materials under $250.",
    "proposedSolution": "A micro-grant crowdfunding platform funding high school science fair project materials under $250.",
    "realWorldUseCase": "High school student seeking $120 to purchase Arduino sensors for a water testing science project.",
    "targetAudience": "High school student seeking $120 to purchase Arduino sensors for a water testing science project.",
    "mainFeatures": [
      "Student project proposal with science fair hypothesis and budget breakdown",
      "Teacher endorsement verification guaranteeing legitimate academic need",
      "Crowdfunding micro-pledges ($10, $25) with transparent receipt uploads",
      "Final project showcase gallery with awards and student thank-you letters"
    ],
    "features": [
      "Student project proposal with science fair hypothesis and budget breakdown",
      "Teacher endorsement verification guaranteeing legitimate academic need",
      "Crowdfunding micro-pledges ($10, $25) with transparent receipt uploads",
      "Final project showcase gallery with awards and student thank-you letters"
    ],
    "frontend": "React, Tailwind, Stripe",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Stripe API, Prisma",
    "techStack": [
      "React",
      "Node.js",
      "Stripe",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Teacher verification requirement ensures all funded projects are legitimate academic student science efforts.",
    "roadmap": [
      "Student STEM grant proposal creator with itemized supply cost list",
      "Teacher verification review portal",
      "Crowdfunding progress bar with Stripe micro-donation checkout",
      "Post-fair project photo gallery and awards showcase"
    ],
    "extensions": [
      "Corporate STEM diversity matching donation pool",
      "Science mentor pairing for funded students"
    ],
    "mvpScope": "Review a student's $85 proposal for robotic solar tracking parts, pledge $20, and see the grant hit 100% funded.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-24",
    "title": "LegalAidIntake: Public Legal Aid Clinic Appointment Scheduler",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Low-income tenants facing wrongful evictions wait 6 hours in courthouse hallways for pro-bono legal help.",
    "problemStatement": "Low-income tenants facing wrongful evictions wait 6 hours in courthouse hallways for pro-bono legal help.",
    "solution": "An online intake and triage tool for volunteer legal aid clinics scheduling consultations by case urgency.",
    "proposedSolution": "An online intake and triage tool for volunteer legal aid clinics scheduling consultations by case urgency.",
    "realWorldUseCase": "Tenant facing unlawful eviction notice within 3 days seeking emergency pro-bono attorney advice.",
    "targetAudience": "Tenant facing unlawful eviction notice within 3 days seeking emergency pro-bono attorney advice.",
    "mainFeatures": [
      "Legal issue intake questionnaire (Housing eviction, Family law, Wage theft)",
      "Urgency triage scoring (e.g. 72-hour eviction notice flagged as High Priority)",
      "Pro-bono volunteer attorney consultation appointment scheduler",
      "Rights educational library explaining tenant rights and eviction defenses"
    ],
    "features": [
      "Legal issue intake questionnaire (Housing eviction, Family law, Wage theft)",
      "Urgency triage scoring (e.g. 72-hour eviction notice flagged as High Priority)",
      "Pro-bono volunteer attorney consultation appointment scheduler",
      "Rights educational library explaining tenant rights and eviction defenses"
    ],
    "frontend": "Next.js 14, Tailwind, Lucide React",
    "backend": "Node.js, Express, Prisma",
    "database": "PostgreSQL, Supabase",
    "otherTech": "Prisma, Zod",
    "techStack": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2-3 weeks",
    "uniqueness": "Triages cases automatically: imminent court deadlines are immediately prioritized for attorney consultation.",
    "roadmap": [
      "Client intake questionnaire with document photo attachment",
      "Urgency priority scoring engine based on court hearing dates",
      "Volunteer attorney calendar availability and scheduling slots",
      "Tenant rights know-your-rights printable guide sheets"
    ],
    "extensions": [
      "Multi-language translation for Spanish and Mandarin speakers",
      "Court form preparation wizard with guidance notes"
    ],
    "mvpScope": "Complete a 3-minute housing intake; system flags urgent 48-hour eviction and schedules an attorney consultation.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  },
  {
    "id": "proj-social-25",
    "title": "CommunityFridgeTemp: IoT Community Fridge Temperature Sentinel",
    "domain": "Social Impact & Community",
    "category": "Social Impact & Community",
    "problem": "Community fridges lose food or poison neighbors when a circuit breaker trips and dairy spoils at 70\u00b0F.",
    "problemStatement": "Community fridges lose food or poison neighbors when a circuit breaker trips and dairy spoils at 70\u00b0F.",
    "solution": "An open IoT temperature sentinel monitoring community fridge cold chains and alerting volunteers via SMS.",
    "proposedSolution": "An open IoT temperature sentinel monitoring community fridge cold chains and alerting volunteers via SMS.",
    "realWorldUseCase": "Volunteer notified immediately when a public community fridge loses power on a hot afternoon.",
    "targetAudience": "Volunteer notified immediately when a public community fridge loses power on a hot afternoon.",
    "mainFeatures": [
      "Continuous temperature and door-open sensor telemetry",
      "Food safety cold-chain violation alert (Temperature > 40\u00b0F for > 2 hours)",
      "Automated SMS alerts dispatched to local volunteer fridge caretakers",
      "Public live temperature status badge assuring neighbors of food safety"
    ],
    "features": [
      "Continuous temperature and door-open sensor telemetry",
      "Food safety cold-chain violation alert (Temperature > 40\u00b0F for > 2 hours)",
      "Automated SMS alerts dispatched to local volunteer fridge caretakers",
      "Public live temperature status badge assuring neighbors of food safety"
    ],
    "frontend": "React, Tailwind, Recharts",
    "backend": "FastAPI / Node.js",
    "database": "TimescaleDB, PostgreSQL",
    "otherTech": "Twilio API, Recharts",
    "techStack": [
      "React",
      "FastAPI",
      "TimescaleDB",
      "Twilio"
    ],
    "difficulty": "Beginner",
    "estimatedTime": "2 weeks",
    "uniqueness": "Protects public health by guaranteeing community fridge food is chilled below the FDA 40\u00b0F danger zone.",
    "roadmap": [
      "Live temperature gauge with safe green zone (<40\u00b0F) and red danger band",
      "Historical 24-hour temperature line chart showing defrost cycles",
      "Automated Twilio SMS alert dispatcher to volunteer caretaker roster",
      "Embeddable public safety status widget"
    ],
    "extensions": [
      "Battery backup telemetry during power outages",
      "Door-ajar sensor alert preventing spoiled food"
    ],
    "mvpScope": "Simulate fridge warming to 45\u00b0F; watch the public safety badge turn red and send an urgent volunteer alert.",
    "collections": [
      "beginner",
      "portfolio"
    ],
    "isBeginner": true,
    "isPortfolio": true,
    "isHackathon": false,
    "isAI": false
  }
];

export default IDEAS_DATA;
