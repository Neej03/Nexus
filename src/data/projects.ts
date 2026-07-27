import type { Project, CategoryInfo, TimelineItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'nexus-design-pro',
    title: 'Nexus Design Pro',
    category: 'design',
    categoryLabel: 'Design',
    icon: 'Palette',
    shortDesc: 'Advanced UI/UX design suite with component libraries, design token engine, and dynamic live prototyping.',
    fullDesc: 'Nexus Design Pro is an enterprise-grade UI/UX workspace featuring thousands of curated design components, token generators, micro-interaction previews, and multi-framework code exporters for React, Vue, and Tailwind.',
    url: 'https://nexus-design-pro.vercel.app/',
    features: [
      'Interactive Design Token Studio',
      'Multi-framework code generation (React, Vue, HTML/CSS)',
      'Live responsive preview canvas with glassmorphism presets',
      'Exportable design specs and color tokens'
    ],
    technologies: ['React 19', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Canvas API'],
    featured: true,
    launchCount: 14200,
    rating: 4.9,
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
    badge: 'Popular',
    accentColor: '#ec4899'
  },
  {
    id: 'edu-ai-insight',
    title: 'Edu AI Insight',
    category: 'ai',
    categoryLabel: 'AI & Education',
    icon: 'BrainCircuit',
    shortDesc: 'AI-driven educational analytics engine transforming student learning trajectories with predictive intelligence.',
    fullDesc: 'Edu AI Insight harnesses advanced machine learning algorithms to personalize educational workflows, analyze student comprehension, predict assessment scores, and auto-generate custom study blueprints.',
    url: 'https://edu-ai-insight-phi.vercel.app/',
    features: [
      'Real-time student comprehension metrics',
      'Automated personalized quiz generation',
      'Predictive performance analytics dashboard',
      'Multi-lingual interactive tutor assistant'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'OpenAI API', 'Recharts'],
    featured: true,
    launchCount: 12850,
    rating: 4.95,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    badge: 'AI Core',
    accentColor: '#06b6d4'
  },
  {
    id: 'voice-of-india',
    title: 'Voice of India',
    category: 'ai',
    categoryLabel: 'AI & Speech',
    icon: 'Mic',
    shortDesc: 'Multilingual neural speech synthesis and dialect processing engine supporting 22 Indian regional languages.',
    fullDesc: 'Voice of India is an AI-powered voice technology platform enabling real-time neural text-to-speech, speech recognition, and dialect translation for pan-Indian linguistic applications.',
    url: 'https://voice-of-india-kappa.vercel.app/',
    features: [
      '22 Official Indian language text-to-speech models',
      'Low-latency voice recognition and dialect detection',
      'Interactive voice waveform synthesizer',
      'Custom acoustic model customization studio'
    ],
    technologies: ['React', 'Web Audio API', 'TypeScript', 'Tailwind CSS', 'Neural Speech Models'],
    featured: true,
    launchCount: 9400,
    rating: 4.88,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    badge: 'Featured',
    accentColor: '#f59e0b'
  },
  {
    id: 'nexus-particle',
    title: 'Nexus Particle',
    category: 'visualization',
    categoryLabel: 'Visualization',
    icon: 'Sparkles',
    shortDesc: 'High-performance WebGL physics particle engine and interactive generative art studio.',
    fullDesc: 'Nexus Particle visualizes complex physics simulations, fluid dynamics, magnetic fields, and generative particle systems in interactive 60FPS 3D space with customized shaders.',
    url: 'https://nexus-particle.vercel.app/',
    features: [
      'Interactive GPU-accelerated particle forces',
      'Real-time audio-reactive visualizer mode',
      'Custom color gradient & gravitational attractor controls',
      '4K canvas export & animation recorder'
    ],
    technologies: ['Three.js', 'WebGL', 'React', 'Tailwind CSS', 'GLSL Shaders'],
    featured: true,
    launchCount: 18900,
    rating: 4.98,
    gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
    badge: '3D Studio',
    accentColor: '#d946ef'
  },
  {
    id: 'nexus-study-hub',
    title: 'Nexus Study Hub',
    category: 'education',
    categoryLabel: 'Education',
    icon: 'GraduationCap',
    shortDesc: 'Next-gen collaborative study workspace with smart flashcards, Pomodoro focus flows, and note synthesis.',
    fullDesc: 'Nexus Study Hub consolidates study workflows into an intelligent dashboard with spaced-repetition flashcards, real-time study rooms, markdown notes, and AI summary modules.',
    url: 'https://nexus-study-hub.vercel.app/',
    features: [
      'Spaced repetition flashcard algorithm',
      'Customizable Pomodoro timer with binaural audio',
      'Collaborative live study canvas',
      'Automated note summarization'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Zustand'],
    featured: false,
    launchCount: 11200,
    rating: 4.82,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    badge: 'Top Rated',
    accentColor: '#10b981'
  },
  {
    id: 'nexus-weather',
    title: 'Nexus Weather',
    category: 'weather',
    categoryLabel: 'Weather & Climate',
    icon: 'CloudSun',
    shortDesc: 'Hyper-local global meteorological radar, 3D weather globe, and AI atmospheric predictor.',
    fullDesc: 'Nexus Weather delivers real-time satellite imagery, atmospheric pressure maps, air quality index monitoring, and machine-learning weather forecast predictions across an interactive 3D globe.',
    url: 'https://nexus-weather-two.vercel.app/',
    features: [
      'Interactive 3D weather globe & radar layer',
      'Air Quality Index (AQI) & UV index breakdown',
      'Severe weather instant alert system',
      'Historical climate trend analytics'
    ],
    technologies: ['React', 'OpenWeather API', 'Leaflet / Mapbox', 'Tailwind CSS', 'Recharts'],
    featured: false,
    launchCount: 16500,
    rating: 4.91,
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    badge: 'Live Radar',
    accentColor: '#3b82f6'
  },
  {
    id: 'nexus-virtual-lab',
    title: 'Nexus Virtual Lab',
    category: 'education',
    categoryLabel: 'Education & Science',
    icon: 'FlaskConical',
    shortDesc: 'Interactive virtual science laboratory for physics, chemistry, and biology experiments.',
    fullDesc: 'Nexus Virtual Lab empowers students and researchers to perform chemical reactions, physics kinetic simulations, and molecular biology experiments safely in an interactive virtual browser space.',
    url: 'https://nexus-vitrtua-lab.vercel.app/',
    features: [
      'Interactive chemical reaction bench with color changes',
      'Physics pendulums, optics, and electrical circuit builder',
      '3D Molecular structural browser',
      'Lab report export & step-by-step guidance'
    ],
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Canvas API', 'TypeScript'],
    featured: true,
    launchCount: 8900,
    rating: 4.87,
    gradient: 'from-teal-400 via-emerald-500 to-green-600',
    badge: 'Interactive',
    accentColor: '#14b8a6'
  },
  {
    id: 'nexus-viz',
    title: 'Nexus Viz',
    category: 'visualization',
    categoryLabel: 'Visualization',
    icon: 'BarChart3',
    shortDesc: 'Universal data visualization platform for interactive chart building and dashboard orchestration.',
    fullDesc: 'Nexus Viz allows users to ingest JSON, CSV, or database streams and rapidly transform raw data into stunning interactive charts, heatmaps, sankey diagrams, and executive dashboards.',
    url: 'https://nexus-viz-six.vercel.app/',
    features: [
      '30+ Chart types (Radar, Sankey, Treemap, Dynamic Scatter)',
      'Drag-and-drop dashboard grid builder',
      'Real-time streaming data connection',
      'SVG / PNG high-resolution vector export'
    ],
    technologies: ['React', 'D3.js', 'Recharts', 'Tailwind CSS', 'TypeScript'],
    featured: false,
    launchCount: 13400,
    rating: 4.89,
    gradient: 'from-violet-500 via-purple-600 to-indigo-700',
    badge: 'Pro Viz',
    accentColor: '#8b5cf6'
  },
  {
    id: 'nexus-health-ai',
    title: 'Nexus Health AI',
    category: 'healthcare',
    categoryLabel: 'Healthcare & AI',
    icon: 'Activity',
    shortDesc: 'AI diagnostic assistance platform analyzing medical telemetry, symptom patterns, and risk factors.',
    fullDesc: 'Nexus Health AI provides clinical insights, medical image assessment tools, symptom triage models, and predictive risk forecasting using privacy-compliant health artificial intelligence.',
    url: 'https://nexus-health-ai-topaz.vercel.app/',
    features: [
      'AI Symptom checker & clinical triage assistant',
      'Biometric trend tracking & anomaly alerts',
      'Medical glossary & drug interaction lookup',
      'Secure encrypted health metric records'
    ],
    technologies: ['React', 'Tailwind CSS', 'TensorFlow.js', 'TypeScript', 'Lucide Icons'],
    featured: true,
    launchCount: 15100,
    rating: 4.96,
    gradient: 'from-rose-500 via-red-500 to-pink-600',
    badge: 'AI Med',
    accentColor: '#f43f5e'
  },
  {
    id: 'nexus-exam-pro',
    title: 'Nexus Exam Pro',
    category: 'education',
    categoryLabel: 'Education',
    icon: 'FileCheck',
    shortDesc: 'Comprehensive exam simulator, adaptive test engine, and timed assessment portal.',
    fullDesc: 'Nexus Exam Pro provides realistic exam simulation environments for standardized tests, coding assessments, and certification exams with adaptive difficulty algorithms.',
    url: 'https://nexus-exam-pro.vercel.app/',
    features: [
      'Timed assessment mode with secure anti-cheat features',
      'Adaptive question difficulty engine',
      'Detailed analytical score breakdown by domain topic',
      'Instant explanation keys and study guidance'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
    launchCount: 10300,
    rating: 4.85,
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    badge: 'Exam Suite',
    accentColor: '#fbbf24'
  },
  {
    id: 'nexus-ecommerce',
    title: 'Nexus Ecommerce',
    category: 'ecommerce',
    categoryLabel: 'Ecommerce',
    icon: 'ShoppingCart',
    shortDesc: 'Futuristic headless ecommerce storefront with 3D product visualizer and dynamic checkout.',
    fullDesc: 'Nexus Ecommerce redefines modern digital shopping with 360-degree 3D product previews, instant smart search, dynamic currency conversion, and frictionless single-step checkout.',
    url: 'https://nexus-ecommerce-jet.vercel.app/',
    features: [
      '3D Product 360 viewer & AR preview mode',
      'Real-time cart management & promo calculator',
      'Multi-currency dynamic conversion',
      'Sleek dark futuristic store layout'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'Zustand'],
    featured: false,
    launchCount: 17800,
    rating: 4.9,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    badge: 'Storefront',
    accentColor: '#6366f1'
  },
  {
    id: 'nexus-health',
    title: 'Nexus Health',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    icon: 'HeartPulse',
    shortDesc: 'Holistic wellness monitoring dashboard tracking vital signs, fitness metrics, and nutrition logs.',
    fullDesc: 'Nexus Health is an intuitive patient and wellness management dashboard that syncs daily fitness metrics, sleep cycles, hydration logs, and vital health telemetry.',
    url: 'https://nexus-health-liard.vercel.app/',
    features: [
      'Vital sign telemetry dashboard (Heart Rate, BP, SpO2)',
      'Nutrition & micro-nutrient daily tracker',
      'Workout log & activity calorie burn calculator',
      'Doctor appointment scheduler'
    ],
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'TypeScript'],
    featured: false,
    launchCount: 11900,
    rating: 4.84,
    gradient: 'from-sky-500 via-cyan-500 to-teal-500',
    badge: 'Wellness',
    accentColor: '#0ea5e9'
  },
  {
    id: 'nexus-cyber-security',
    title: 'Nexus Cyber Security',
    category: 'cybersecurity',
    categoryLabel: 'Cyber Security',
    icon: 'ShieldAlert',
    shortDesc: 'Real-time threat intelligence dashboard, vulnerability scanner, and network security monitor.',
    fullDesc: 'Nexus Cyber Security delivers live threat vector visualization, password entropy calculation, SSL configuration diagnostics, and network port analysis in a sleek dark cybersecurity center.',
    url: 'https://nexus-cybersecurity.vercel.app/',
    features: [
      'Global live cyber threat map & attack monitor',
      'Password strength & hash entropy calculator',
      'Vulnerability assessment reporting studio',
      'Encrypted vault & key management UI'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Crypto-JS', 'Lucide React'],
    featured: true,
    launchCount: 21500,
    rating: 4.97,
    gradient: 'from-emerald-500 via-green-500 to-lime-600',
    badge: 'SecOps',
    accentColor: '#10b981'
  },
  {
    id: 'nexus-data-science-hub',
    title: 'Nexus Data Science Hub',
    category: 'datascience',
    categoryLabel: 'Data Science',
    icon: 'Database',
    shortDesc: 'Interactive Jupyter-like notebook environment, statistical analytics suite, and ML model trainer.',
    fullDesc: 'Nexus Data Science Hub provides web-based data wrangling, pandas/numpy dataset analysis, statistical distribution fitting, and browser-side Machine Learning model training.',
    url: 'https://nexus-datascience-hub.vercel.app/',
    features: [
      'Browser Python/JS Data notebook interface',
      'CSV / Parquet dataset profiler & cleaning tools',
      'Regression & classification ML model trainer',
      'Interactive statistical distribution sandbox'
    ],
    technologies: ['React', 'Tailwind CSS', 'Danfo.js / Pyodide', 'Plotly.js', 'TypeScript'],
    featured: true,
    launchCount: 19400,
    rating: 4.94,
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    badge: 'Data Core',
    accentColor: '#2563eb'
  },
  {
    id: 'nexus-converter',
    title: 'Nexus Converter',
    category: 'utilities',
    categoryLabel: 'Utilities',
    icon: 'RefreshCw',
    shortDesc: 'Universal multi-format file, unit, media, and code conversion utility suite.',
    fullDesc: 'Nexus Converter handles batch image compression, PDF manipulation, currency conversion, code syntax transformation, and engineering unit calculations instantly in your browser.',
    url: 'https://nexus-converter-dusky.vercel.app/',
    features: [
      'Batch image converter (WEBP, PNG, JPG, AVIF)',
      '100+ Physical & engineering unit conversion pairs',
      'JSON / YAML / XML / CSV format transformer',
      'Live exchange rate currency calculator'
    ],
    technologies: ['React', 'FFmpeg.wasm', 'Tailwind CSS', 'TypeScript'],
    featured: false,
    launchCount: 24300,
    rating: 4.92,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    badge: 'Essential',
    accentColor: '#f97316'
  },
  {
    id: 'nexus-blueprint',
    title: 'Nexus Blueprint',
    category: 'architecture',
    categoryLabel: 'Architecture & Design',
    icon: 'Compass',
    shortDesc: '2D/3D architectural CAD viewer, floor plan visualizer, and spatial blueprint generator.',
    fullDesc: 'Nexus Blueprint brings CAD drawing viewing, 3D architectural render walk-throughs, dynamic room sizing, and structural blueprint editing to modern web browsers.',
    url: 'https://nexus-blueprint-lime.vercel.app/',
    features: [
      'Interactive 2D Floor plan editor & grid snapping',
      '3D First-person architectural walkthrough mode',
      'Material texture & furniture placement tools',
      'DXF / SVG Blueprint export'
    ],
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Canvas API', 'TypeScript'],
    featured: true,
    launchCount: 13900,
    rating: 4.89,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    badge: 'CAD 3D',
    accentColor: '#06b6d4'
  }
];

export const CATEGORIES: CategoryInfo[] = [
  { id: 'all', label: 'All Projects', icon: 'Layers', count: 16, description: 'Complete Nexus platform suite' },
  { id: 'ai', label: 'AI & Speech', icon: 'BrainCircuit', count: 2, description: 'Artificial Intelligence & Neural Speech' },
  { id: 'design', label: 'Design Pro', icon: 'Palette', count: 1, description: 'UI/UX Design Studios & Tokens' },
  { id: 'datascience', label: 'Data Science', icon: 'Database', count: 1, description: 'Analytics, ML Models & Notebooks' },
  { id: 'education', label: 'Education', icon: 'GraduationCap', count: 3, description: 'Study Hubs, Exams & Virtual Labs' },
  { id: 'healthcare', label: 'Healthcare', icon: 'Activity', count: 2, description: 'Health AI Diagnostics & Wellness' },
  { id: 'weather', label: 'Weather', icon: 'CloudSun', count: 1, description: '3D Climate Radar & Forecasting' },
  { id: 'ecommerce', label: 'Ecommerce', icon: 'ShoppingCart', count: 1, description: '3D Storefront & Commerce' },
  { id: 'cybersecurity', label: 'Cyber Security', icon: 'ShieldAlert', count: 1, description: 'SecOps & Threat Intelligence' },
  { id: 'visualization', label: 'Visualization', icon: 'Sparkles', count: 2, description: '3D Particle Physics & Data Viz' },
  { id: 'utilities', label: 'Utilities', icon: 'RefreshCw', count: 1, description: 'File & Format Converters' },
  { id: 'architecture', label: 'Architecture', icon: 'Compass', count: 1, description: '3D CAD & Blueprint Systems' }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: '2024 Q1',
    title: 'Nexus Inception & Core Viz Engine',
    description: 'Launched Nexus Particle and Nexus Design Pro, establishing the dark futuristic aurora design language.',
    tag: 'Foundation',
    projectsCount: 2
  },
  {
    year: '2024 Q3',
    title: 'AI & Health Expansion',
    description: 'Integrated Edu AI Insight, Voice of India, and Nexus Health AI with neural intelligence models.',
    tag: 'AI Integration',
    projectsCount: 5
  },
  {
    year: '2025 Q1',
    title: 'Data & Security Ecosystem',
    description: 'Released Cyber Security SecOps hub, Data Science Hub, and Nexus Virtual Lab for interactive learning.',
    tag: 'Ecosystem',
    projectsCount: 10
  },
  {
    year: '2025 Q4',
    title: '3D CAD & Utilities Integration',
    description: 'Added Nexus Blueprint CAD engine, Universal Converter, 3D Ecommerce, and Weather globe systems.',
    tag: 'Utilities & CAD',
    projectsCount: 14
  },
  {
    year: '2026 Current',
    title: 'Nexus Unified Gateway',
    description: 'Consolidated all 16 micro-platforms into the Nexus Central Gateway with global command palette and real-time telemetry.',
    tag: 'Central Hub',
    projectsCount: 16
  }
];
