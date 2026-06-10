import { IProject, IExperience, IHackathon, ICertification } from '@/types';

export const GENERAL_INFO = {
    name: 'Banuri Koushik Reddy',
    role: 'AI Engineer | Software Developer',
    email: 'koushikreddybanuri@gmail.com',
    resumeUrl: '#', // User to update with actual link
    githubUrl: 'https://github.com/KOUSHIK1831',
    linkedinUrl: 'https://www.linkedin.com/in/koushik-reddy-banuri-694543306',
    gitlabUrl: 'https://gitlab.com/koushik_18',
    swechaUrl: 'https://code.swecha.org/koushik_18',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Koushik, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.githubUrl },
    { name: 'linkedin', url: GENERAL_INFO.linkedinUrl },
    { name: 'gitlab', url: GENERAL_INFO.gitlabUrl },
    { name: 'swecha', url: GENERAL_INFO.swechaUrl },
];

export const DEVELOPER_PROFILES = [
    {
        name: 'GitHub',
        url: GENERAL_INFO.githubUrl,
        description: 'Check out my repositories, AI projects, and open-source contributions.',
        icon: 'github'
    },
    {
        name: 'GitLab',
        url: GENERAL_INFO.gitlabUrl,
        description: 'Explore my CI/CD pipelines and collaborative enterprise-style projects.',
        icon: 'gitlab'
    },
    {
        name: 'Swecha Code',
        url: GENERAL_INFO.swechaUrl,
        description: 'View my contributions to the free software movement and local community projects.',
        icon: 'code'
    }
];

export const MY_STACK = {
    Frontend: [
        { name: 'React 19', icon: '/logo/react.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'shadcn/ui', icon: '/logo/react.png' },
        { name: 'TanStack Query', icon: '/logo/react.png' },
        { name: 'Recharts', icon: '/logo/gsap.png' },
        { name: 'i18next', icon: '/logo/js.png' },
        { name: 'Streamlit', icon: '/logo/gsap.png' },
        { name: 'Capacitor', icon: '/logo/ts.png' },
        { name: 'Vite', icon: '/logo/ts.png' },
    ],
    'Backend & BaaS': [
        { name: 'Python (FastAPI)', icon: '/logo/ts.png' },
        { name: 'Supabase', icon: '/logo/next.png' },
        { name: 'Edge Functions', icon: '/logo/next.png' },
        { name: 'WebSocket', icon: '/logo/node.png' },
        { name: 'Alembic', icon: '/logo/postgreSQL.png' },
    ],
    Database: [
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'PostGIS', icon: '/logo/postgreSQL.png' },
        { name: 'MinIO / S3', icon: '/logo/aws.png' },
    ],
    'AI & Machine Learning': [
        { name: 'RAG', icon: '/logo/react.png' },
        { name: 'LLMs (Gemini, Claude, Llama)', icon: '/logo/next.png' },
        { name: 'AI Agents', icon: '/logo/framer-motion.png' },
        { name: 'Prompt Engineering', icon: '/logo/framer-motion.png' },
        { name: 'Scikit-Learn', icon: '/logo/react.png' },
        { name: 'Pandas & NumPy', icon: '/logo/redux.png' },
        { name: 'NLP', icon: '/logo/node.png' },
        { name: 'FAISS', icon: '/logo/mongodb.svg' },
    ],
    'Tools & QA': [
        { name: 'Docker & Compose', icon: '/logo/docker.svg' },
        { name: 'GitLab CI/CD', icon: '/logo/ts.png' },
        { name: 'Vitest & Playwright', icon: '/logo/js.png' },
        { name: 'Bun & UV', icon: '/logo/js.png' },
        { name: 'PostHog', icon: '/logo/gsap.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'CampusGuide – AI Academic Assistant',
        slug: 'campus-guide',
        year: 2025,
        liveUrl: 'https://huggingface.co/spaces/bhaskar-2/college',
        sourceCode: 'https://github.com/KOUSHIK1831/CampusGuide',
        description: `
      A hallucination-safe Retrieval-Augmented Generation (RAG) application designed to deliver accurate, document-grounded responses for university policies and academic regulations. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🛡️ <b>Hallucination-Safe AI:</b> Implemented a Retrieval Gate with minimum similarity thresholds to ensure responses are strictly grounded in official documents.</li>
        <li>🔐 <b>Role-Based Intelligence:</b> Tailored document access and responses for students, faculty, coordinators, and parents.</li>
        <li>🔎 <b>FAISS Vector Search:</b> Leverages FAISS and Sentence-Transformer embeddings for high-speed, semantic document retrieval.</li>
        <li>📜 <b>Source Traceability:</b> Provides explicit citations including document names and page numbers for every generated answer.</li>
        <li>⚡ <b>Powered by Groq:</b> Utilizes Llama-3.1-8b via Groq for high-speed inference with low temperature settings for factual accuracy.</li>
      </ul>
      `,
        role: `AI Developer - Built the complete RAG pipeline, including document ingestion, vector storage, and the Streamlit-based UI.`,
        techStack: [
            'RAG',
            'Streamlit',
            'Groq LLM',
            'FAISS',
            'Sentence Transformers',
            'Python',
            'NLP',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: ['/projects/images/mti-electronics-1.webp'],
    },
    {
        title: 'Debugger – Custom Coding Agent',
        slug: 'debugger',
        year: 2025,
        sourceCode: 'https://github.com/KOUSHIK1831/Debugger',
        description: `
      A custom-built AI coding agent designed to analyze, diagnose, and fix coding errors with a structured, senior-engineering-focused approach. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🎯 <b>Strict Response Contract:</b> Produces deterministic, review-friendly outputs instead of free-form answers.</li>
        <li>🧩 <b>Context-Aware Diagnosis:</b> Behaves like a senior engineer, analyzing the full project context before suggesting fixes.</li>
        <li>⚡ <b>Model Optimization:</b> Configured using Grok Code Fast 1 with a low temperature (0.2) for high reliability.</li>
        <li>🏆 <b>Hackathon Project:</b> Developed for the "AI Agents Hackathon" to showcase advanced prompt engineering skills.</li>
      </ul>
      `,
        role: `Lead Developer & Prompt Engineer - Designed the response contract and agent logic for structured error resolution.`,
        techStack: ['Grok Code Fast 1', 'Python', 'Prompt Engineering', 'LLMs', 'AI Agents'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: ['/projects/images/epikcart-1.png'],
    },
    {
        title: 'Continuous Data Profiling For Interactive Data Science',
        slug: 'continuous-data-profiling',
        year: 2024,
        sourceCode: 'https://github.com/KOUSHIK1831/Continuous-Data-Profiling-For-Interactive-Data-Science',
        description: `
      An end-to-end machine learning pipeline for California housing price analysis, integrating continuous data profiling and drift detection for robust data science workflows. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>📊 <b>Automated Data Profiling:</b> Generates comprehensive statistical reports using ydata-profiling for deep data insights.</li>
        <li>🛠️ <b>Advanced Preprocessing:</b> Sophisticated handling of missing values, normalization, and categorical encoding.</li>
        <li>🔬 <b>Feature Engineering:</b> Derived complex metrics like RoomsPerHousehold and PopulationPerHousehold to boost model accuracy.</li>
        <li>🚨 <b>Drift Monitoring:</b> Implemented KS-tests for Data Drift and R² comparison for Concept Drift detection.</li>
        <li>🖥️ <b>Interactive Dashboard:</b> Built with ipywidgets for real-time feature exploration and model evaluation.</li>
      </ul>
      `,
        role: `ML Engineer - Developed the complete pipeline from profiling to drift monitoring and interactive visualization.`,
        techStack: [
            'Python',
            'Scikit-Learn',
            'ydata-profiling',
            'Pandas',
            'NumPy',
            'Random Forest',
            'ipywidgets',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: ['/projects/images/resume-roaster-1.png'],
    },
    {
        title: 'Collision Guard – Autonomous Vehicle Risk Prediction',
        slug: 'collision-guard',
        year: 2024,
        sourceCode: 'https://github.com/KOUSHIK1831/Collision-Guard-Autonomous-Vehicle-Risk-Prediction',
        description: `
      A machine learning-based system designed to predict collision risk in autonomous vehicles using driving telemetry, environmental data, and sensor-based features. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🛡️ <b>Proactive Safety:</b> Enables real-time risk assessment and proactive safety decisions for autonomous driving systems.</li>
        <li>⚖️ <b>Class Imbalance Handling:</b> Utilized SMOTE (Synthetic Minority Oversampling Technique) to balance collision vs. non-collision datasets for reliable prediction.</li>
        <li>🌳 <b>Random Forest Excellence:</b> Leverages Random Forest Classifier for its ability to handle nonlinear driving data and provide feature importance insights.</li>
        <li>📡 <b>Multi-Sensor Integration:</b> Analyzes vehicle speed, distance to objects, traffic density, and weather conditions for holistic risk estimation.</li>
        <li>👥 <b>Group Research:</b> Developed as part of an academic ML research initiative with a team of four.</li>
      </ul>
      `,
        role: `ML Developer & Team Member - Conducted EDA, implemented SMOTE for data balancing, and optimized the Random Forest model.`,
        techStack: [
            'Python',
            'Scikit-learn',
            'Random Forest',
            'SMOTE',
            'Pandas',
            'Matplotlib',
            'Seaborn',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: ['/projects/images/property-pro-1.png'],
    },
    {
        title: 'SnapShop AI — Digitize Your Store',
        slug: 'snapshop-ai',
        year: 2025,
        liveUrl: 'https://apna-bazar-cs.vercel.app',
        sourceCode: 'https://github.com/KOUSHIK1831/ApnaBazar',
        description: `
      An AI-powered digitization platform that empowers local clothing sellers to create shareable online storefronts in under 2 minutes using vision-AI. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 <b>AI Product Digitization:</b> Uses Gemini 2.5 Flash to automatically extract titles, descriptions, prices, and categories from product photos.</li>
        <li>💬 <b>WhatsApp Sales Agent:</b> Autonomous Claude 3.5 Sonnet agent that handles product queries and places orders via WhatsApp.</li>
        <li>📱 <b>Instant Storefront:</b> Every seller gets a customizable, shareable public URL with real-time stock management and order tracking.</li>
        <li>👤 <b>HITL Review:</b> Human-in-the-Loop interface for sellers to verify and edit AI-extracted details before publishing.</li>
        <li>🌍 <b>Multi-language Support:</b> Fully localized in English, Hindi (हिन्दी), and Telugu (తెలుగు) for broad market accessibility.</li>
      </ul>
      `,
        role: `Full-Stack AI Developer - Architected the entire platform, including the AI extraction pipeline, Supabase backend, and multilingual frontend.`,
        techStack: [
            'React',
            'TypeScript',
            'Supabase',
            'Gemini 2.5 Flash',
            'Claude 3.5 Sonnet',
            'Tailwind CSS',
            'Capacitor',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: ['/projects/images/epikcart-2.png'],
    },
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'AI Intern',
        company: 'Viswam AI | IIIT Hyderabad',
        duration: 'Jan 2026 - Present',
        description: [
            'Built AI-powered applications using LLMs',
            'Developed a Groq-powered coding assistant',
            'Created a RAG-based Campus Guide using institutional documents',
            'Used Sentence Transformers and Groq LLMs',
            'Performed API discovery and testing with Bruno',
            'Followed GitOps-style version control workflows',
        ],
    },
    {
        title: 'Digital Marketing Intern',
        company: '3ZEN Consulting Private Limited',
        duration: 'June 2024 - July 2024',
        description: [
            'SEO optimization and SEM campaigns',
            'Audience targeting and Geo-targeted marketing',
            'Social media analytics',
        ],
    },
];

export const HACKATHONS: IHackathon[] = [
    {
        name: 'AI Agents Hackathon',
        project: 'Prompt-Engineered Coding Agent',
        description: 'Built an agent to automate error analysis and fixes.',
    },
    {
        name: 'RAG Hackathon',
        project: 'CampusGuide',
        description: 'Developed a document-grounded academic assistant.',
    },
];

export const CERTIFICATIONS: ICertification[] = [
    {
        name: 'AWS Academy Cloud Foundations',
        issuer: 'AWS Academy',
    },
    {
        name: 'Microsoft Azure AI Fundamentals',
        issuer: 'Microsoft',
    },
    {
        name: 'GitLab CI Fundamentals',
        issuer: 'GitLab',
    },
];
