import { IProject, IExperience, IHackathon, ICertification, IMergeRequest, IIssue, ICommunityWork, IProjectInfo, ICategoryGroup } from '@/types';

export const GENERAL_INFO = {
    name: 'Banuri Koushik Reddy',
    role: 'AI Engineer | Software Developer',
    email: 'koushikreddybanuri@gmail.com',
    resumeUrl: '#', // User to update with actual link
    githubUrl: 'https://github.com/KOUSHIK1831',
    linkedinUrl: 'https://www.linkedin.com/in/koushik-reddy-banuri',
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
    { name: 'JavaScript', icon: '/logo/js.png' },
    { name: 'Next.js', icon: '/logo/next.png' },
    { name: 'Node.js', icon: '/logo/node.png' },
    { name: 'Express', icon: '/logo/express.png' },
    { name: 'SQL & PostgreSQL', icon: '/logo/postgreSQL.png' },
    { name: 'Prisma', icon: '/logo/prisma.png' },
];

export const PROJECTS: IProject[] = [
    {
        title: 'CampusGuide – AI Academic Assistant',
        slug: 'campus-guide',
        year: 2026,
        liveUrl: 'https://huggingface.co/spaces/bhaskar-2/college',
        sourceCode: 'https://github.com/KOUSHIK1831/CampusGuide',
        description: `
      A document-grounded Q&amp;A app that started as a university policy and academic regulations assistant. The current version supports text-based PDF, DOCX, TXT, Markdown, and JSON uploads. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🛡️ <b>Evidence Checks:</b> Applies a retrieval score cutoff and reports when the uploaded files provide too little evidence to answer.</li>
        <li>🔐 <b>Academic Prototype:</b> The original hackathon version addressed university questions from students, faculty, coordinators, and parents.</li>
        <li>🔎 <b>Hybrid Retrieval:</b> Combines FAISS and Sentence Transformers with BM25 keyword search via reciprocal rank fusion. It uses prior turns to clarify short follow-up questions.</li>
        <li>📜 <b>Source Traceability:</b> Checks references in streamed answers and shows excerpts, filenames, and PDF page numbers when available.</li>
        <li>⚡ <b>Powered by Groq:</b> The prototype used Llama 3.1 8B. The current app uses a configurable Groq model, defaults to GPT-OSS 20B, and keeps uploaded indexes and chat in the user session.</li>
      </ul>
      `,
        role: `AI Developer - Contributed to the document ingestion, retrieval pipeline, vector storage, and Streamlit interface.`,
        techStack: [
            'RAG',
            'Streamlit',
            'Groq LLM',
            'FAISS',
            'Sentence Transformers',
            'Python',
            'NLP',
            'LangChain',
            'BM25',
            'Reciprocal Rank Fusion',
            'Pytest',
        ],
        thumbnail: '/projects/thumbnail/campusguide.png',
        longThumbnail: '/projects/long/campusguide.png',
        images: ['/projects/images/campusguide-1.png', '/projects/images/campusguide-2.png', '/projects/images/campusguide-3.png'],
    },
    {
        title: 'Debugger – Custom Coding Agent',
        slug: 'debugger',
        year: 2026,
        sourceCode: 'https://github.com/KOUSHIK1831/Debugger',
        description: `
      A read-only coding-agent prompt specification for diagnosing errors and proposing reviewable fixes based on supplied project context and logs. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🎯 <b>Strict Response Contract:</b> Structures the diagnosis, proposed changes, and verification steps for developer review.</li>
        <li>🧩 <b>Context-Aware Diagnosis:</b> Asks the assistant to inspect the supplied code and logs, identify missing context, and favor minimal changes.</li>
        <li>⚡ <b>Model Configuration:</b> The project documents Grok Code Fast 1 with a suggested temperature of 0.2.</li>
        <li>🏆 <b>Hackathon Project:</b> Developed for the AI Agents Hackathon as a prompt engineering exercise.</li>
      </ul>
      `,
        role: `Lead Developer & Prompt Engineer - Designed the response contract and agent logic for structured error resolution.`,
        techStack: ['Grok Code Fast 1', 'Python', 'Prompt Engineering', 'LLMs', 'AI Agents', 'Markdown', 'YAML'],
        thumbnail: '/projects/thumbnail/debugger.png',
        longThumbnail: '/projects/long/debugger.png',
        images: ['/projects/images/debugger-1.png', '/projects/images/debugger-2.png', '/projects/images/debugger-3.png'],
    },
    {
        title: 'Continuous Data Profiling For Interactive Data Science',
        slug: 'continuous-data-profiling',
        year: 2024,
        sourceCode: 'https://github.com/KOUSHIK1831/Continuous-Data-Profiling-For-Interactive-Data-Science',
        description: `
      An academic Python notebook for California housing price analysis. It profiles a static dataset, compares models, and simulates data drift. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>📊 <b>Data Profiling:</b> Examines missing values, distributions, and correlations using Python profiling and visualization tools.</li>
        <li>🛠️ <b>Preprocessing:</b> Handles missing values, normalization, and categorical encoding before modeling.</li>
        <li>🔬 <b>Feature Engineering:</b> Derives rooms per household, bedrooms per room, and population per household.</li>
        <li>🚨 <b>Drift Simulation:</b> Uses Kolmogorov–Smirnov tests and compares R² to examine how changes in input data affect model performance.</li>
        <li>🖥️ <b>Interactive Notebook:</b> Uses ipywidgets to explore features and compare Random Forest with Linear Regression.</li>
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
            'Jupyter',
            'SciPy',
        ],
        thumbnail: '/projects/thumbnail/dataprofiling.png',
        longThumbnail: '/projects/long/dataprofiling.png',
        images: ['/projects/images/dataprofiling-1.png', '/projects/images/dataprofiling-2.png', '/projects/images/dataprofiling-3.png'],
    },
    {
        title: 'Collision Guard – Autonomous Vehicle Risk Prediction',
        slug: 'collision-guard',
        year: 2024,
        sourceCode: 'https://github.com/KOUSHIK1831/Collision-Guard-Autonomous-Vehicle-Risk-Prediction',
        description: `
      An academic machine learning study of vehicle collision risk using 500 synthetic telemetry records. Of these, 24 were labeled as collisions, making positive-class recall an important evaluation measure. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🛡️ <b>Safety-Focused Evaluation:</b> Compares accuracy, precision, recall, F1, ROC AUC, and confusion matrices to show where accuracy can hide missed collisions.</li>
        <li>⚖️ <b>Class Imbalance Handling:</b> Explores SMOTE (Synthetic Minority Oversampling Technique) to address the imbalance between collision and non-collision records.</li>
        <li>🌳 <b>Model Comparison:</b> Evaluates Random Forest, Gradient Boosting, Logistic Regression, and SVM. Several high-accuracy models missed all positive cases in the reported baseline.</li>
        <li>📡 <b>Telemetry Features:</b> Examines synthetic vehicle speed, distance to objects, traffic density, and weather conditions.</li>
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
            'Jupyter',
            'imbalanced-learn',
        ],
        thumbnail: '/projects/thumbnail/collisionguard.png',
        longThumbnail: '/projects/long/collisionguard.png',
        images: ['/projects/images/collisionguard-1.png', '/projects/images/collisionguard-2.png'],
    },
    {
        title: 'SnapShop AI — Digitize Your Store',
        slug: 'snapshop-ai',
        year: 2026,
        liveUrl: 'https://apna-bazar-cs.vercel.app',
        sourceCode: 'https://github.com/KOUSHIK1831/SnapShop-AI',
        description: `
      An AI-assisted commerce platform for local clothing sellers. It uses product photos to draft listings and gives sellers tools to manage shareable online stores. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 <b>AI Product Digitization:</b> Drafts titles, descriptions, prices, categories, and tags from product photos. The earlier prototype used Gemini 2.5 Flash.</li>
        <li>💬 <b>WhatsApp Prototype:</b> Earlier project work explored a Claude 3.5 Sonnet sales assistant. The current repository documents webhook, catalog, conversational ordering, and UPI deep-link experiments.</li>
        <li>📱 <b>Storefront and Inventory:</b> Provides shareable storefronts, product variants, stock management, low-stock alerts, and order tracking.</li>
        <li>👤 <b>HITL Review:</b> Human-in-the-Loop interface for sellers to verify and edit AI-extracted details before publishing.</li>
        <li>🌍 <b>Multi-language Support:</b> Fully localized in English, Hindi (हिन्दी), and Telugu (తెలుగు) for broad market accessibility.</li>
        <li>🧱 <b>Current Architecture:</b> The public repository uses a React and TypeScript storefront, a Node.js and Express REST API, and Prisma with PostgreSQL. An earlier version used Supabase and Edge Functions.</li>
      </ul>
      `,
        role: `Full-Stack AI Developer - Worked on vision-based product extraction, seller review, and the multilingual storefront in the Supabase-era implementation.`,
        techStack: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Gemini 2.5 Flash',
            'Claude 3.5 Sonnet',
            'Capacitor',
            'Supabase',
            'Vite',
            'Node.js',
            'Express',
            'Prisma',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/snapshop.png',
        longThumbnail: '/projects/long/snapshop.png',
        images: ['/projects/images/snapshop-1.png', '/projects/images/snapshop-2.png', '/projects/images/snapshop-3.png', '/projects/images/snapshop-4.png'],
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
        <li>🔍 <b>Market Exploration:</b> Uses TanStack Table for commodity browsing and date filters, with optional browser voice input and the Kisan Sahayak assistant.</li>
        <li>💻 <b>Public Repository:</b> <a href="https://github.com/KOUSHIK1831/Agri-Tech-Dashboard" class="underline" target="_blank" rel="noopener noreferrer">Browse the GitHub version</a>.</li>
      </ul>
      `,
        role: `Full-Stack Developer - Built the localization system, integrated public data APIs, and developed interactive market visualizations.`,
        techStack: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'i18next', 'Vite', 'Vitest', 'TanStack Table', 'Axios'],
        thumbnail: '/projects/thumbnail/agritech.png',
        longThumbnail: '/projects/long/agritech.png',
        images: ['/projects/images/agritech-1.png'],
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
    { id: 7, title: 'feat: integrate new features and fixes into main', role: 'Authored & Assigned', status: 'merged', date: '2026-04-29T11:26:24Z', url: 'https://code.swecha.org/koushik_18/hackathon-cs/-/merge_requests/1', project: 'SnapShop AI' },
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
    { slug: 'corpus-client-app', name: 'Corpus Client App', description: 'Telugu language corpus management frontend — RAG-based Q&A, location search, proofread status filters, and test coverage.', category: 'CORPUS', projectUrl: 'https://code.swecha.org/corpus/corpus-client-app', allMRsUrl: 'https://code.swecha.org/corpus/corpus-client-app/-/merge_requests?author_username=koushik_18', accentColor: '#3b82f6' },
    { slug: 'corpus-server-app', name: 'Corpus Server App', description: 'Backend for corpus management — proofread status migration and extracted text processing.', category: 'CORPUS', projectUrl: 'https://code.swecha.org/corpus/corpus-server-app', allMRsUrl: 'https://code.swecha.org/corpus/corpus-server-app/-/merge_requests?author_username=koushik_18', accentColor: '#8b5cf6' },
    { slug: 'corpus-bruno-collections', name: 'Corpus Bruno Collections', description: 'Bruno API collections for corpus application — roles and categories documentation.', category: 'CORPUS', projectUrl: 'https://code.swecha.org/Mukthanand21/corpus-bruno-collections', accentColor: '#ec4899' },
    { slug: 'agri-tech', name: 'Agri-Tech', description: 'Agricultural commodity price dashboard — multi-language support, voice chatbot, CI/CD, and interactive charts.', category: 'HACKATHON & LEARNING', projectUrl: 'https://code.swecha.org/Abhilash653/agri-tech', allMRsUrl: 'https://code.swecha.org/Abhilash653/agri-tech/-/merge_requests?author_username=koushik_18', accentColor: '#10b981' },
    { slug: 'campus-guide-hackathon', name: 'CampusGuide', description: 'RAG-based academic assistant — project configuration, license management, and VS Code setup for hackathon compliance.', category: 'HACKATHON & LEARNING', projectUrl: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide', allMRsUrl: 'https://code.swecha.org/viswam/admin/internships/icfai-ip-2-hackathon-17-jan/campusguide/-/merge_requests?author_username=koushik_18', accentColor: '#f59e0b' },
    { slug: 'hackathon-cs', name: 'SnapShop AI', description: 'Hackathon project — integrating new features and fixes for the Computer Science track.', category: 'HACKATHON & LEARNING', projectUrl: 'https://code.swecha.org/koushik_18/hackathon-cs', accentColor: '#14b8a6' },
    { slug: 'api-collection', name: 'API Collection', description: 'Bruno API collections for PUBG API — submission and organization of .bru files.', category: 'OTHER', projectUrl: 'https://code.swecha.org/viswam/admin/internships/api-collection', accentColor: '#64748b' },
];

const CATEGORY_GROUPS: ICategoryGroup[] = [
    { name: 'HEALTHCARE', projects: ['EHRS Frontend', 'EHRS Backend', 'EHRs API Collection', 'EHRs Meta'] },
    { name: 'TOOLS', projects: ['GitLab Compliance Checker'] },
    { name: 'CORPUS', projects: ['Corpus Client App', 'Corpus Server App', 'Corpus Bruno Collections'] },
    { name: 'HACKATHON & LEARNING', projects: ['Agri-Tech', 'CampusGuide', 'SnapShop AI'] },
    { name: 'OTHER', projects: ['API Collection'] },
];

export const COMMUNITY_CONTRIBUTIONS: ICommunityWork = {
    stats: {
        totalMRs: 51,
        mergedMRs: 34,
        openMRs: 4,
        closedMRs: 13,
        totalIssues: 21,
        openIssues: 4,
        closedIssues: 17,
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
        title: 'AI Developer Intern',
        company: 'Viswam AI | In collaboration with Swecha Telangana and IIIT Hyderabad',
        duration: 'January 2026 – June 2026',
        description: [
            'Developed open-source AI applications using LLM integration, prompt engineering, and RAG workflows.',
            'Contributed to SnapShop AI, using vision-language models to turn product photos into draft listings for seller review.',
            'Contributed to Ask Your Corpus, a hybrid RAG feature that answers questions using extracted text and metadata from multimedia records. Worked on the React and TypeScript interface and FastAPI retrieval endpoints.',
            'Worked on PostgreSQL full-text and trigram search, ranked retrieval, metadata, and LLM response generation. Added seven-language support and integrated DeepSeek as a provider.',
            'Refactored proofreading status with a PostgreSQL migration and backfill, aligned the frontend filters, and added regression tests for the revised workflow.',
            'Tested and documented Corpus and eHRS REST APIs in Bruno. Added frontend and backend tests, fixed bugs, and supported GitLab reviews and CI checks.',
            'Contributed to eHRS patient-status workflows and GitLab team and contribution analytics.',
            'Mentored four assigned teams at the ICFAI and BITS hackathon on implementation and deployment.',
        ],
        certificateUrl: 'https://drive.google.com/file/d/19FzDRNB2UboHVCwlI_s_2No0lmDtMOI4/view?usp=sharing',
        certificateText: 'View Certificate',
    },
    {
        title: 'Digital Marketing Intern',
        company: '3ZEN Consulting Private Limited | Madhapur, Hyderabad',
        duration: 'June 2024 – July 2024',
        description: [
            'Conducted keyword research and on-page SEO to support website visibility in search.',
            'Supported search engine marketing (SEM) and social media campaigns for brand awareness.',
            'Applied geographic targeting to make campaigns more relevant to regional audiences.',
            'Used audience research and targeting to support reach and engagement.',
            'Completed the internship with Grade A.',
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
        issuer: 'AWS Academy (Amazon Web Services)',
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
            { label: 'Data Processing and Visualization', url: 'https://drive.google.com/file/d/19s6MIFwpzNYEs0rOfQUfFBgC9J0V5FSR/view?usp=sharing' },
        ],
    },
    {
        name: 'Python Programming - Python Basics & Intro to Programming',
        issuer: 'Kaggle',
        link: 'https://drive.google.com/file/d/1A_f-bTCfUCohKT70ZGcF3kJK631mBBYm/view?usp=sharing',
    },
    {
        name: 'Microsoft Azure Fundamentals (AZ-900)',
        issuer: 'Microsoft',
    },
    {
        name: 'Agentic AI Certified Foundations Associate',
        issuer: 'Oracle',
    },
    {
        name: 'GenAI Powered Data Analytics Job Simulation',
        issuer: 'Tata via Forage',
    },
];
