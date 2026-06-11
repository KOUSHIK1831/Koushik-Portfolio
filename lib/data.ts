import { IProject, IExperience, IHackathon, ICertification, IMergeRequest, IIssue, ICommunityWork, IProjectInfo, ICategoryGroup } from '@/types';

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

export const MY_SKILLS = [
    { name: 'React', icon: '/logo/react.png' },
    { name: 'TypeScript', icon: '/logo/ts.png' },
    { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    { name: 'shadcn/ui', icon: '/logo/react.png' },
    { name: 'TanStack Query', icon: '/logo/react.png' },
    { name: 'Streamlit', icon: '/logo/js.png' },
    { name: 'Capacitor', icon: '/logo/js.png' },
    { name: 'Vite', icon: '/logo/js.png' },
    { name: 'Python', icon: '/logo/node.png' },
    { name: 'Supabase', icon: '/logo/postgreSQL.png' },
    { name: 'Edge Functions', icon: '/logo/node.png' },
    { name: 'AWS', icon: '/logo/aws.png' },
    { name: 'RAG', icon: '/logo/node.png' },
    { name: 'Scikit-Learn', icon: '/logo/node.png' },
    { name: 'Pandas & NumPy', icon: '/logo/js.png' },
    { name: 'NLP', icon: '/logo/node.png' },
    { name: 'FAISS', icon: '/logo/mongodb.svg' },
    { name: 'Docker', icon: '/logo/docker.svg' },
    { name: 'Git', icon: '/logo/git.png' },
    { name: 'Vitest & Playwright', icon: '/logo/js.png' },
    { name: 'DX', icon: '/logo/git.png' },
];

export const PROJECTS: IProject[] = [
    {
        title: 'CampusGuide – AI Academic Assistant',
        slug: 'campus-guide',
        year: 2026,
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
        year: 2026,
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
        year: 2026,
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
            'Tailwind CSS',
            'Gemini 2.5 Flash',
            'Claude 3.5 Sonnet',
            'Capacitor',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: ['/projects/images/epikcart-1.png', '/projects/images/epikcart-2.png'],
    },
    {
        title: 'Agri-Tech Dashboard',
        slug: 'agri-tech',
        year: 2026,
        sourceCode: 'https://code.swecha.org/Abhilash653/agri-tech',
        description: `
      A React + TypeScript dashboard for exploring agricultural commodity prices in India. Optimized for speed, reliability, and ease of use. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🌾 <b>Market Intelligence:</b> Pulls commodity price rows from the public Price Monitoring Division dataset (data.gov.in).</li>
        <li>📊 <b>Interactive Visuals:</b> Features KPIs and interactive charts (Recharts) for visualizing market trends.</li>
        <li>🌍 <b>Multi-lingual:</b> Supports English, Hindi, and Telugu to serve diverse regional needs.</li>
        <li>⚡ <b>Performance:</b> Optimized data layer using TanStack Query and Axios with Vite dev proxy for CORS handling.</li>
      </ul>
      `,
        role: `Full-Stack Developer - Built the localization system, integrated public data APIs, and developed interactive market visualizations.`,
        techStack: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'i18next', 'Vite', 'Vitest'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: ['/projects/images/consulting-finance-1.png', '/projects/images/consulting-finance-2.png'],
    },
];

const MR_DATA: IMergeRequest[] = [
    { id: 0, title: 'Test/improve coverage', role: 'Authored & Assigned', status: 'opened', date: '2026-05-29T06:30:08Z', url: 'https://code.swecha.org/corpus/corpus-client-app/-/merge_requests/316', project: 'Corpus Client App' },
    { id: 1, title: 'refactor(filters): replace is_fully_proofread with proofread_status in ReviewFilters', role: 'Authored & Assigned', status: 'opened', date: '2026-05-22T09:33:34Z', url: 'https://code.swecha.org/corpus/corpus-client-app/-/merge_requests/312', project: 'Corpus Client App' },
    { id: 2, title: 'feat: replace is_fully_proofread with proofread_status in extracted text', role: 'Authored & Assigned', status: 'opened', date: '2026-05-15T10:41:04Z', url: 'https://code.swecha.org/corpus/corpus-server-app/-/merge_requests/217', project: 'Corpus Server App' },
    { id: 3, title: 'Feat/ci developer ex', role: 'Authored & Assigned', status: 'merged', date: '2026-05-12T04:43:39Z', url: 'https://code.swecha.org/Abhilash653/agri-tech/-/merge_requests/5', project: 'Agri-Tech' },
    { id: 4, title: 'Fear/voice chatbot', role: 'Authored & Assigned', status: 'merged', date: '2026-05-10T11:24:56Z', url: 'https://code.swecha.org/Abhilash653/agri-tech/-/merge_requests/4', project: 'Agri-Tech' },
    { id: 5, title: 'Feat/update filter fetch', role: 'Authored & Assigned', status: 'merged', date: '2026-05-10T09:33:27Z', url: 'https://code.swecha.org/Abhilash653/agri-tech/-/merge_requests/3', project: 'Agri-Tech' },
    { id: 6, title: 'Add language selector dropdown and Hindi support, remove Smart Farming section, fix bugs', role: 'Authored & Assigned', status: 'merged', date: '2026-05-10T05:50:53Z', url: 'https://code.swecha.org/Abhilash653/agri-tech/-/merge_requests/2', project: 'Agri-Tech' },
    { id: 7, title: 'feat: integrate new features and fixes into main', role: 'Authored & Assigned', status: 'merged', date: '2026-04-29T11:26:24Z', url: 'https://code.swecha.org/koushik_18/hackathon-cs/-/merge_requests/1', project: 'Hackathon CS' },
    { id: 8, title: 'Feat:Enable Ask Your Corpus for document-based Q&A with RAG', role: 'Authored & Assigned', status: 'opened', date: '2026-04-23T04:51:16Z', url: 'https://code.swecha.org/corpus/corpus-client-app/-/merge_requests/275', project: 'Corpus Client App' },
    { id: 9, title: 'fix(layout): align sidebar navigation and icons with dashboard across roles', role: 'Authored & Assigned', status: 'closed', date: '2026-04-07T10:53:08Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/366', project: 'EHRS Frontend' },
    { id: 10, title: 'Add mypy to pre-commit', role: 'Authored & Assigned', status: 'merged', date: '2026-03-29T11:19:46Z', url: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests/90', project: 'GitLab Compliance Checker' },
    { id: 11, title: 'feat: add pre-commit hooks for local development', role: 'Authored & Assigned', status: 'merged', date: '2026-03-29T09:34:44Z', url: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests/82', project: 'GitLab Compliance Checker' },
    { id: 12, title: 'chore: migrate formatToIST to date-fns-tz', role: 'Authored & Assigned', status: 'merged', date: '2026-03-25T05:46:00Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/297', project: 'EHRS Frontend' },
    { id: 13, title: 'fix(patient-status): update UI handling for vitals and know your patient stages', role: 'Authored & Assigned', status: 'merged', date: '2026-03-11T07:44:11Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/235', project: 'EHRS Frontend' },
    { id: 14, title: 'fix(patient-status): update vitals and know your patient stage handling', role: 'Authored & Assigned', status: 'merged', date: '2026-03-11T07:06:43Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/merge_requests/105', project: 'EHRS Backend' },
    { id: 15, title: 'fix(patient-status): report only completed queue stages in status timeline', role: 'Authored & Assigned', status: 'closed', date: '2026-03-10T11:47:42Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/merge_requests/102', project: 'EHRS Backend' },
    { id: 16, title: 'feat:add queue and In consulation queue', role: 'Authored & Assigned', status: 'merged', date: '2026-03-06T10:20:00Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/225', project: 'EHRS Frontend' },
    { id: 17, title: 'Feat/patient status consultation queue', role: 'Authored & Assigned', status: 'closed', date: '2026-03-05T10:58:06Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/merge_requests/97', project: 'EHRS Backend' },
    { id: 18, title: 'Resolve "In consultation and consultation queue should be visible in patient status"', role: 'Authored & Assigned', status: 'closed', date: '2026-03-03T07:32:11Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/200', project: 'EHRS Frontend' },
    { id: 19, title: 'Resolve "In consultation and consultation queue should be visible in patient status"', role: 'Authored & Assigned', status: 'closed', date: '2026-03-03T07:11:03Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/199', project: 'EHRS Frontend' },
    { id: 20, title: 'Resolve "Doctor assign redirect should navigate to Enter Book Number step in Patient Registration"', role: 'Authored & Assigned', status: 'merged', date: '2026-02-25T09:07:31Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/147', project: 'EHRS Frontend' },
    { id: 21, title: 'chore: lint & format team modes', role: 'Authored & Assigned', status: 'merged', date: '2026-02-24T10:55:22Z', url: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests/58', project: 'GitLab Compliance Checker' },
    { id: 22, title: 'fix-commit-total-and-UI-fix', role: 'Authored & Assigned', status: 'merged', date: '2026-02-24T05:17:26Z', url: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests/53', project: 'GitLab Compliance Checker' },
    { id: 23, title: 'feat: update team analytics module', role: 'Authored & Assigned', status: 'merged', date: '2026-02-22T11:48:33Z', url: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests/47', project: 'GitLab Compliance Checker' },
    { id: 24, title: 'feat: implement team analytics', role: 'Authored & Assigned', status: 'closed', date: '2026-02-22T07:01:26Z', url: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests/38', project: 'GitLab Compliance Checker' },
    { id: 25, title: 'feat: add contributions range mapping logic', role: 'Authored & Assigned', status: 'merged', date: '2026-02-21T10:12:41Z', url: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests/28', project: 'GitLab Compliance Checker' },
    { id: 26, title: 'bug:Add Doctor & Patient Registration Analytics with Responsive UI', role: 'Assigned', status: 'merged', date: '2026-02-15T06:02:59Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/116', project: 'EHRS Frontend' },
    { id: 27, title: 'fix:verify-medicines-status-inventory', role: 'Authored & Assigned', status: 'merged', date: '2026-02-14T06:19:31Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/112', project: 'EHRS Frontend' },
    { id: 28, title: 'Fix:Duplicate Doctor Assignment for Same Patient in Medical Camp', role: 'Authored & Assigned', status: 'merged', date: '2026-02-13T09:20:33Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/merge_requests/50', project: 'EHRS Backend' },
    { id: 29, title: 'Fix: add all doctor schema fields to the Add Doctor form', role: 'Authored & Assigned', status: 'merged', date: '2026-02-12T10:14:55Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/95', project: 'EHRS Frontend' },
    { id: 30, title: 'Fix verify medicines page issues', role: 'Authored & Assigned', status: 'merged', date: '2026-02-11T11:41:34Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/89', project: 'EHRS Frontend' },
    { id: 31, title: 'feat:patient status tracking', role: 'Authored & Assigned', status: 'merged', date: '2026-02-10T09:59:06Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/78', project: 'EHRS Frontend' },
    { id: 32, title: 'unit-test-Backend-API-Routes', role: 'Assigned', status: 'merged', date: '2026-02-08T05:30:46Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/merge_requests/26', project: 'EHRS Backend' },
    { id: 33, title: 'Resolve "Feature: Enhanced Patient Status Flow Integration"', role: 'Authored & Assigned', status: 'closed', date: '2026-02-05T10:29:46Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/33', project: 'EHRS Frontend' },
    { id: 34, title: 'Draft: Resolve "Feature: Enhanced Patient Status Flow Integration"', role: 'Authored & Assigned', status: 'closed', date: '2026-02-05T08:49:20Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/27', project: 'EHRS Frontend' },
    { id: 36, title: 'Update Koushik.yml', role: 'Authored', status: 'merged', date: '2026-01-27T10:44:18Z', url: 'https://code.swecha.org/viswam/admin/internships/ehrs-api-collection/-/merge_requests/31', project: 'EHRs API Collection' },
    { id: 37, title: 'feat: add Doctors API collection with auth handling and validation notes', role: 'Authored', status: 'merged', date: '2026-01-27T09:16:37Z', url: 'https://code.swecha.org/viswam/admin/internships/ehrs-api-collection/-/merge_requests/17', project: 'EHRs API Collection' },
    { id: 38, title: 'added roles&categores', role: 'Authored', status: 'merged', date: '2026-01-25T05:30:25Z', url: 'https://code.swecha.org/Mukthanand21/corpus-bruno-collections/-/merge_requests/1', project: 'Corpus Bruno Collections' },
    { id: 39, title: 'chore: move all .bru files into PUBG folder', role: 'Authored', status: 'closed', date: '2026-01-24T10:50:02Z', url: 'https://code.swecha.org/viswam/admin/internships/api-collection/-/merge_requests/36', project: 'API Collection' },
    { id: 40, title: 'Submission/koushik 18 - Add PUBG API Bruno collection', role: 'Authored', status: 'merged', date: '2026-01-23T17:38:53Z', url: 'https://code.swecha.org/viswam/admin/internships/api-collection/-/merge_requests/6', project: 'API Collection' },
    { id: 41, title: 'Fix project configuration: pyproject.toml and uv.lock-', role: 'Authored', status: 'closed', date: '2026-01-19T14:09:20Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/11', project: 'CampusGuide' },
    { id: 42, title: 'Fix project configuration: pyproject.toml and uv.lock', role: 'Authored', status: 'closed', date: '2026-01-19T13:56:14Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/10', project: 'CampusGuide' },
    { id: 43, title: 'Reset and fix project configuration (pyproject.toml & uv.lock)', role: 'Authored', status: 'closed', date: '2026-01-19T13:26:24Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/9', project: 'CampusGuide' },
    { id: 44, title: 'Track VS Code configuration files for compliance', role: 'Authored', status: 'merged', date: '2026-01-19T12:13:08Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/8', project: 'CampusGuide' },
    { id: 45, title: 'Add project configuration and VS Code setup', role: 'Authored', status: 'closed', date: '2026-01-19T12:01:54Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/7', project: 'CampusGuide' },
    { id: 46, title: 'Fix pyproject.toml license and metadata', role: 'Authored', status: 'merged', date: '2026-01-19T11:51:42Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/6', project: 'CampusGuide' },
    { id: 47, title: 'Add AGPLv3 license, project configs, and templates', role: 'Authored', status: 'merged', date: '2026-01-19T11:22:28Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/5', project: 'CampusGuide' },
    { id: 48, title: 'updated files after resolving errors', role: 'Authored', status: 'merged', date: '2026-01-18T17:31:19Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/4', project: 'CampusGuide' },
    { id: 49, title: 'Updated', role: 'Authored', status: 'merged', date: '2026-01-18T10:08:46Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/3', project: 'CampusGuide' },
    { id: 50, title: 'updated files', role: 'Authored', status: 'merged', date: '2026-01-18T07:57:11Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/2', project: 'CampusGuide' },
    { id: 51, title: 'Upload', role: 'Authored', status: 'merged', date: '2026-01-18T07:47:34Z', url: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests/1', project: 'CampusGuide' },
    { id: 52, title: 'Update file koushik_18.md', role: 'Authored', status: 'opened', date: '2026-01-05T09:33:26Z', url: 'https://code.swecha.org/soai2025/profiles/-/merge_requests/586', project: 'SOAI Profiles' },
    { id: 53, title: 'Update file README.md', role: 'Authored', status: 'opened', date: '2026-01-05T09:01:30Z', url: 'https://code.swecha.org/koushik_18/koushik/-/merge_requests/1', project: 'Koushik Profile' },
];

const ISSUE_DATA: IIssue[] = [
    { id: 0, title: 'Enhance Test Coverage and Stabilize Core Workflow Validations', role: 'Authored & Assigned', status: 'opened', date: '2026-06-04T10:46:10Z', url: 'https://code.swecha.org/corpus/corpus-client-app/-/issues/324', project: 'Corpus Client App' },
    { id: 1, title: 'Replace is_fully_proofread with proofread_status in frontend review filters', role: 'Authored & Assigned', status: 'opened', date: '2026-05-22T09:38:27Z', url: 'https://code.swecha.org/corpus/corpus-client-app/-/issues/318', project: 'Corpus Client App' },
    { id: 2, title: 'Add globe icon language selector with dropdown for English/Telugu/Hindi', role: 'Authored & Assigned', status: 'closed', date: '2026-05-10T05:53:26Z', url: 'https://code.swecha.org/Abhilash653/agri-tech/-/issues/2', project: 'Agri-Tech' },
    { id: 3, title: 'Feat:Enable Ask Your Corpus for document-based Q&A with RAG', role: 'Authored & Assigned', status: 'closed', date: '2026-04-22T04:27:10Z', url: 'https://code.swecha.org/corpus/corpus-client-app/-/issues/290', project: 'Corpus Client App' },
    { id: 4, title: 'Align Sidebar Navigation With Dashboard Cards Across All Roles', role: 'Authored & Assigned', status: 'closed', date: '2026-04-07T10:41:46Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/301', project: 'EHRS Frontend' },
    { id: 5, title: 'feat:Patient progress tracker missing Know Your Patient,Queue, and In Consultation Queue stages', role: 'Authored & Assigned', status: 'closed', date: '2026-03-11T08:38:10Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/225', project: 'EHRS Frontend' },
    { id: 6, title: 'fix(patient-status): return only completed stages in patient status response', role: 'Authored & Assigned', status: 'closed', date: '2026-03-11T08:31:54Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/issues/62', project: 'EHRS Backend' },
    { id: 7, title: 'feat(backend): add waiting and in_consultation to patient status tracking', role: 'Authored & Assigned', status: 'closed', date: '2026-03-05T11:08:21Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/issues/59', project: 'EHRS Backend' },
    { id: 8, title: 'fix:verify-medicines-status-inventory', role: 'Authored & Assigned', status: 'closed', date: '2026-02-14T06:11:46Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/153', project: 'EHRS Frontend' },
    { id: 9, title: 'Bug fix:verify-medicines-validation-status-inventory', role: 'Authored & Assigned', status: 'closed', date: '2026-02-11T08:21:59Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/138', project: 'EHRS Frontend' },
    { id: 10, title: 'Unit Testing: API Routes & Core Logic', role: 'Authored & Assigned', status: 'closed', date: '2026-02-07T08:51:53Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/issues/23', project: 'EHRS Backend' },
    { id: 11, title: 'Daily Updates – Koushik – (03/02/26) (11am - 12:30m)', role: 'Authored & Assigned', status: 'closed', date: '2026-02-03T05:48:43Z', url: 'https://code.swecha.org/LagichettyKushal/team-amd-task-tracker/-/issues/28', project: 'Team AMD Task Tracker' },
    { id: 12, title: 'Daily Update- Koushik - (03/02/2026) (9am - 11am)', role: 'Authored & Assigned', status: 'closed', date: '2026-02-03T05:40:06Z', url: 'https://code.swecha.org/LagichettyKushal/team-amd-task-tracker/-/issues/24', project: 'Team AMD Task Tracker' },
    { id: 13, title: 'Input Handling and Vitals Recording Issues in eHRS', role: 'Author', status: 'opened', date: '2026-02-02T18:03:42Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-meta/-/issues/8', project: 'EHRs Meta' },
    { id: 14, title: 'Daily Update- Koushik - (31/01/2026) (1:30pm - 5pm)', role: 'Author', status: 'closed', date: '2026-01-31T11:31:39Z', url: 'https://code.swecha.org/LagichettyKushal/team-amd-task-tracker/-/issues/20', project: 'Team AMD Task Tracker' },
    { id: 15, title: 'Daily Update- Koushik - (31/01/2026) (9am - 1pm)', role: 'Authored & Assigned', status: 'closed', date: '2026-01-31T08:28:33Z', url: 'https://code.swecha.org/LagichettyKushal/team-amd-task-tracker/-/issues/14', project: 'Team AMD Task Tracker' },
    { id: 16, title: 'Daily Update - Koushik - (30/01/26) (2pm - 5pm)', role: 'Authored & Assigned', status: 'closed', date: '2026-01-30T10:19:59Z', url: 'https://code.swecha.org/LagichettyKushal/team-amd-task-tracker/-/issues/10', project: 'Team AMD Task Tracker' },
    { id: 17, title: 'Daily Update- Koushik - (30/01/2026) (9am - 1pm)', role: 'Authored & Assigned', status: 'closed', date: '2026-01-30T08:19:42Z', url: 'https://code.swecha.org/LagichettyKushal/team-amd-task-tracker/-/issues/7', project: 'Team AMD Task Tracker' },
    { id: 18, title: 'Daily Updates – Koushik – 29 Jan 2026', role: 'Authored & Assigned', status: 'closed', date: '2026-01-29T05:59:03Z', url: 'https://code.swecha.org/LagichettyKushal/team-amd-task-tracker/-/issues/4', project: 'Team AMD Task Tracker' },
    { id: 19, title: 'feat: add partial proofred status to extracted text', role: 'Assigned', status: 'opened', date: '2026-05-15T04:43:17Z', url: 'https://code.swecha.org/corpus/corpus-server-app/-/issues/131', project: 'Corpus Server App' },
    { id: 20, title: 'chore: document date formatting scope and evaluate date-fns if requirements grow', role: 'Assigned', status: 'closed', date: '2026-03-22T21:01:40Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/252', project: 'EHRS Frontend' },
    { id: 21, title: 'Feat : Patient status for the known your patient after vitals', role: 'Assigned', status: 'closed', date: '2026-03-03T05:58:43Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/issues/51', project: 'EHRS Backend' },
    { id: 22, title: 'In consultation and consultation queue should be visible in patient status', role: 'Assigned', status: 'closed', date: '2026-03-03T05:21:50Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/197', project: 'EHRS Frontend' },
    { id: 23, title: 'Doctor assign redirect should navigate to Enter Book Number step in Patient Registration', role: 'Assigned', status: 'closed', date: '2026-02-25T06:31:47Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/167', project: 'EHRS Frontend' },
    { id: 24, title: 'Fix:Duplicate Doctor Assignment for Same Patient in Medical Camp', role: 'Assigned', status: 'closed', date: '2026-02-13T05:47:11Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/issues/34', project: 'EHRS Backend' },
    { id: 25, title: 'Fix: add all doctor schema fields to the Add Doctor form', role: 'Assigned', status: 'closed', date: '2026-02-12T06:52:19Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/139', project: 'EHRS Frontend' },
    { id: 26, title: 'Unit Testing: Backend API Routes & Schemas', role: 'Assigned', status: 'closed', date: '2026-02-07T07:16:35Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/issues/21', project: 'EHRS Backend' },
    { id: 27, title: 'Feature: Enhanced Patient Status Flow Integration', role: 'Assigned', status: 'closed', date: '2026-02-04T04:36:42Z', url: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/issues/36', project: 'EHRS Frontend' },
];

const PROJECT_INFOS: IProjectInfo[] = [
    { slug: 'ehrs-frontend', name: 'EHRS Frontend', description: 'Electronic Health Record System frontend for medical camps — medicine search, PDF downloads, suggestion-based inputs, role-based redirection.', category: 'HEALTHCARE', projectUrl: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite', allMRsUrl: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests?author_username=koushik_18', accentColor: '#ef4444' },
    { slug: 'ehrs-backend', name: 'EHRS Backend', description: 'FastAPI backend for eHRS — patient status tracking, doctor assignment, unit testing, and queue management.', category: 'HEALTHCARE', projectUrl: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi', allMRsUrl: 'https://code.swecha.org/healthcare/medical-camp/ehrs-fastapi/-/merge_requests?author_username=koushik_18', accentColor: '#f97316' },
    { slug: 'ehrs-api-collection', name: 'EHRs API Collection', description: 'Bruno API collection for eHRS — documenting Doctors API with auth handling and validation notes.', category: 'HEALTHCARE', projectUrl: 'https://code.swecha.org/viswam/admin/internships/ehrs-api-collection', allMRsUrl: 'https://code.swecha.org/viswam/admin/internships/ehrs-api-collection/-/merge_requests?author_username=koushik_18', accentColor: '#eab308' },
    { slug: 'ehrs-meta', name: 'EHRs Meta', description: 'Meta-level issue tracking and cross-concern documentation for the eHRS ecosystem.', category: 'HEALTHCARE', projectUrl: 'https://code.swecha.org/healthcare/medical-camp/ehrs-meta', accentColor: '#a855f7' },
    { slug: 'gitlab-compliance-checker', name: 'GitLab Compliance Checker', description: 'Developer tooling for GitLab compliance — pre-commit hooks, mypy integration, team analytics, and contribution mapping.', category: 'TOOLS', projectUrl: 'https://code.swecha.org/tools/gitlab-compliance-checker', allMRsUrl: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests?author_username=koushik_18', accentColor: '#22c55e' },
    { slug: 'team-amd-task-tracker', name: 'Team AMD Task Tracker', description: 'Daily task tracking and progress logging for Team AMD internship activities.', category: 'TOOLS', projectUrl: 'https://code.swecha.org/LagichettyKushal/team-amd-task-tracker', accentColor: '#06b6d4' },
    { slug: 'corpus-client-app', name: 'Corpus Client App', description: 'Telugu language corpus management frontend — RAG-based Q&A, location search, proofread status filters, and test coverage.', category: 'CORPUS', projectUrl: 'https://code.swecha.org/corpus/corpus-client-app', allMRsUrl: 'https://code.swecha.org/corpus/corpus-client-app/-/merge_requests?author_username=koushik_18', accentColor: '#3b82f6' },
    { slug: 'corpus-server-app', name: 'Corpus Server App', description: 'Backend for corpus management — proofread status migration and extracted text processing.', category: 'CORPUS', projectUrl: 'https://code.swecha.org/corpus/corpus-server-app', allMRsUrl: 'https://code.swecha.org/corpus/corpus-server-app/-/merge_requests?author_username=koushik_18', accentColor: '#8b5cf6' },
    { slug: 'corpus-bruno-collections', name: 'Corpus Bruno Collections', description: 'Bruno API collections for corpus application — roles and categories documentation.', category: 'CORPUS', projectUrl: 'https://code.swecha.org/Mukthanand21/corpus-bruno-collections', accentColor: '#ec4899' },
    { slug: 'agri-tech', name: 'Agri-Tech', description: 'Agricultural commodity price dashboard — multi-language support, voice chatbot, CI/CD, and interactive charts.', category: 'HACKATHON & LEARNING', projectUrl: 'https://code.swecha.org/Abhilash653/agri-tech', allMRsUrl: 'https://code.swecha.org/Abhilash653/agri-tech/-/merge_requests?author_username=koushik_18', accentColor: '#10b981' },
    { slug: 'campus-guide-hackathon', name: 'CampusGuide', description: 'RAG-based academic assistant — project configuration, license management, and VS Code setup for hackathon compliance.', category: 'HACKATHON & LEARNING', projectUrl: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide', allMRsUrl: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests?author_username=koushik_18', accentColor: '#f59e0b' },
    { slug: 'hackathon-cs', name: 'Hackathon CS', description: 'Hackathon project — integrating new features and fixes for the Computer Science track.', category: 'HACKATHON & LEARNING', projectUrl: 'https://code.swecha.org/koushik_18/hackathon-cs', accentColor: '#14b8a6' },
    { slug: 'api-collection', name: 'API Collection', description: 'Bruno API collections for PUBG API — submission and organization of .bru files.', category: 'OTHER', projectUrl: 'https://code.swecha.org/viswam/admin/internships/api-collection', accentColor: '#64748b' },
    { slug: 'soai-profiles', name: 'SOAI Profiles', description: 'Student profile submissions for the School of AI 2025 cohort.', category: 'OTHER', projectUrl: 'https://code.swecha.org/soai2025/profiles', accentColor: '#78716c' },
    { slug: 'koushik-profile', name: 'Koushik Profile', description: 'Personal profile repository — README updates and profile documentation.', category: 'OTHER', projectUrl: 'https://code.swecha.org/koushik_18/koushik', accentColor: '#94a3b8' },
];

const CATEGORY_GROUPS: ICategoryGroup[] = [
    { name: 'HEALTHCARE', projects: ['EHRS Frontend', 'EHRS Backend', 'EHRs API Collection', 'EHRs Meta'] },
    { name: 'TOOLS', projects: ['GitLab Compliance Checker', 'Team AMD Task Tracker'] },
    { name: 'CORPUS', projects: ['Corpus Client App', 'Corpus Server App', 'Corpus Bruno Collections'] },
    { name: 'HACKATHON & LEARNING', projects: ['Agri-Tech', 'CampusGuide', 'Hackathon CS'] },
    { name: 'OTHER', projects: ['API Collection', 'SOAI Profiles', 'Koushik Profile'] },
];

export const COMMUNITY_CONTRIBUTIONS: ICommunityWork = {
    stats: {
        totalMRs: 53,
        mergedMRs: 34,
        openMRs: 6,
        closedMRs: 13,
        totalIssues: 28,
        openIssues: 4,
        closedIssues: 24,
    },
    metrics: [
        { label: 'Total Contributions', value: 82, description: 'Merged MRs and resolved Issues across open-source projects.' },
        { label: 'Merge Requests', value: 53, description: '34 Merged MRs contributing to Core APIs and Frontend features.' },
        { label: 'Issues Resolved', value: 28, description: '24 Closed Issues focusing on stability, testing, and UI/UX fixes.' },
        { label: 'Active Projects', value: 8, description: 'Direct contributions to Corpus, EHRS, GitLab Tools, Agri-Tech, and more.' }
    ],
    highlights: [
        {
            project: 'Corpus Client App',
            description: 'Enabled "Ask Your Corpus" for document-based Q&A with RAG integration.',
            link: 'https://code.swecha.org/corpus/corpus-client-app/-/merge_requests/275',
            type: 'MR',
            status: 'Opened',
            date: '2026-04-23'
        },
        {
            project: 'Corpus Client App',
            description: 'Enhance Test Coverage and Stabilize Core Workflow Validations.',
            link: 'https://code.swecha.org/corpus/corpus-client-app/-/issues/324',
            type: 'Issue',
            status: 'Opened',
            date: '2026-06-04'
        },
        {
            project: 'Agri-Tech',
            description: 'Implemented multi-language support (Hindi/Telugu) and voice chatbot feature.',
            link: 'https://code.swecha.org/Abhilash653/agri-tech/-/merge_requests/4',
            type: 'MR',
            status: 'Merged',
            date: '2026-05-10'
        },
        {
            project: 'GitLab Compliance Checker',
            description: 'Automated developer experience by adding pre-commit hooks and mypy validation.',
            link: 'https://code.swecha.org/tools/gitlab-compliance-checker/-/merge_requests/82',
            type: 'MR',
            status: 'Merged',
            date: '2026-03-29'
        },
        {
            project: 'EHRS Frontend',
            description: 'Integrated new patient status flow tracking for improved clinical visibility.',
            link: 'https://code.swecha.org/healthcare/medical-camp/ehrs-frontend-vite/-/merge_requests/78',
            type: 'MR',
            status: 'Merged',
            date: '2026-02-10'
        },
    ],
    mergeRequests: MR_DATA,
    issues: ISSUE_DATA,
    projectInfos: PROJECT_INFOS,
    categories: CATEGORY_GROUPS,
};

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'AI Intern',
        company: 'Viswam AI | IIIT Hyderabad',
        duration: 'Jan 2026 - Present',
        description: [
            'Contributed Projects: 16 | Issues: 28 | MRs: 53 | Total Commits: 611',
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
        company: '3ZEN Consulting Private Limited | Madhapur, Hyderabad',
        duration: 'June 2024 - July 2024',
        description: [
            'Improved website SEO, keyword ranking, and backlinks optimization',
            'Worked on SEM and social media campaigns for brand awareness',
            'Applied GEO-targeting strategies for regional marketing optimization',
            'Increased brand reach and engagement using data-driven strategies',
            'Applied data analysis and basic automation to optimize SEO, track campaign performance, and improve audience engagement',
            '🏆 Earned Grade A for outstanding performance',
        ],
        certificateUrl: 'https://drive.google.com/file/d/1BhYkEbDgrdn3_2ZYdZ0ZOukNhJzbpPXH/view?usp=sharing',
        certificateText: 'View Certificate',
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
        name: 'AWS Academy Graduate - Cloud Foundations',
        issuer: 'Amazon Web Services',
        link: 'https://drive.google.com/file/d/1jbRI6g_k_7dNFqNpJZRO3JBv9oB8T7mK/view?usp=sharing',
    },
    {
        name: 'Azure AI Fundamentals - AI-900',
        issuer: 'Microsoft',
        link: 'https://drive.google.com/file/d/1sFQqp7QZC01CXPrPioOl7AOdxs85yfAo/view',
    },
    {
        name: 'Data Analysis & Visualization - SSC NASSCOM Certification',
        issuer: 'NASSCOM',
        links: [
            { label: 'Acquiring Data', url: 'https://drive.google.com/file/d/1kzfB8ivnfdo_InLJOBnwPnUi9hikpg6L/view?usp=sharing' },
            { label: 'Exploratory Data Analysis', url: 'https://drive.google.com/file/d/1BTgjnP68nJdJ-v6UwrPBWiMh089ouMNj/view?usp=sharing' },
            { label: 'Data Visualization', url: 'https://drive.google.com/file/d/19s6MIFwpzNYEs0rOfQUfFBgC9J0V5FSR/view?usp=sharing' },
        ],
    },
    {
        name: 'Python Programming - Python Basics & Intro to Programming',
        issuer: 'Kaggle',
        link: 'https://drive.google.com/file/d/1A_f-bTCfUCohKT70ZGcF3kJK631mBBYm/view?usp=sharing',
    },
];
