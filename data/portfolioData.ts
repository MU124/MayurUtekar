export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  contributions: string[];
  techBadges: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  roleBadge: string;
  statusBadge: string;
  shortDescription: string;
  fullDescription: string;
  businessProblem: string;
  solution: string;
  architectureDetails: string;
  category: "Enterprise" | "Web App" | "System Architecture";
  techStack: string[];
  highlights: string[];
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; isPrimary?: boolean }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const personalDetails = {
  name: "Mayur Rajendra Utekar",
  role: "Senior Full Stack Engineer | Team Lead",
  experienceYears: "8+",
  location: "Mumbai, Maharashtra, India",
  email: "mayurutekar124@gmail.com",
  github: "https://github.com/MU124",
  linkedin: "https://www.linkedin.com/in/mayur-utekar-887482131",
  about:
    "Senior Full Stack Engineer with over 8 years of experience delivering robust enterprise software solutions from concept to production. Specialized in ASP.NET Core backend architecture, modern web frontends (Angular, React, Vue), high-performance SQL database optimization, and cross-functional team leadership.",
  summaryPoints: [
    "8+ years of professional software development experience",
    "Strong expertise in ASP.NET Core, C#, SQL Server, and REST APIs",
    "Proficient with Angular, React, Vue.js, TypeScript, and modern CSS",
    "Expert database tuning using SQL Server, Dapper & Stored Procedures",
    "Proven Team Lead experience conducting code reviews & mentoring engineers",
    "Complete SDLC ownership from requirement analysis to IIS/production deployment",
  ],
  stats: [
    { label: "Years Experience", value: "8+", targetNumber: 8, suffix: "+" },
    { label: "Enterprise Modules", value: "30+", targetNumber: 30, suffix: "+" },
    { label: "Production Apps", value: "10+", targetNumber: 10, suffix: "+" },
    { label: "End-to-End SDLC", value: "100%", targetNumber: 100, suffix: "%" },
  ],
  openTo: [
    { type: "Full-Time Roles", badge: "Primary Focus" },
    { type: "Remote Work", badge: "Global" },
    { type: "Hybrid (Mumbai)", badge: "On-Site" },
    { type: "Contract & Consulting", badge: "Advisory" },
  ],
};

export const industriesData: IndustryItem[] = [
  {
    id: "banking",
    name: "Banking & Financial Services",
    description: "High-concurrency Queue & Branch systems, Loan Management applications, and secure transaction workflows.",
    icon: "Landmark",
    highlight: "Tier-1 Banking Compliance",
  },
  {
    id: "healthcare",
    name: "Healthcare & Patient Care",
    description: "Patient reception management, automated counter dispatch, and multi-service center token routing.",
    icon: "Hospital",
    highlight: "Real-time Counter Sync",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    description: "Citizen service queue platforms, public counter operations, and audit-compliant reporting systems.",
    icon: "Building2",
    highlight: "High Availability SLA",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    description: "Full-stack online store platforms, product management, shopping carts, and payment integrations.",
    icon: "ShoppingCart",
    highlight: "Multi-Currency Checkout",
  },
  {
    id: "digital-signage",
    name: "Digital Signage & Media",
    description: "Centralized media scheduling, remote display player management, and live multimedia broadcasting.",
    icon: "Tv",
    highlight: "4K Content Broadcast",
  },
  {
    id: "restaurant",
    name: "Restaurant & QSR Solutions",
    description: "Self-service ordering kiosks, menu administration, kitchen display system (KDS) synchronization.",
    icon: "Utensils",
    highlight: "Kiosk & Kitchen Dispatch",
  },
];

export const processWorkflow: ProcessStep[] = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "Collaborating with stakeholders, clients, and domain experts to decompose complex business needs into clear technical specifications.",
    icon: "FileText",
    deliverables: ["User Stories", "Functional Specs", "API Contracts"],
  },
  {
    step: "02",
    title: "System Architecture",
    description: "Designing scalable backend microservices/monoliths, database schemas, and RESTful web API endpoints built for high throughput.",
    icon: "Cpu",
    deliverables: ["ER Diagrams", "API Schemas", "DB Indexing Strategy"],
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Writing clean, maintainable C# / ASP.NET Core backend code and responsive Angular / React web interfaces following SOLID principles.",
    icon: "Code2",
    deliverables: ["Modular Backend APIs", "Reactive UI Components", "Unit Tests"],
  },
  {
    step: "04",
    title: "Quality & Optimization",
    description: "Executing database query optimization, Dapper refactoring, code reviews, security audits, and load testing.",
    icon: "ShieldCheck",
    deliverables: ["SQL Index Tuning", "Code Reviews", "Security Verification"],
  },
  {
    step: "05",
    title: "Production Deployment",
    description: "Deploying to live production servers (IIS / Vercel), configuring CI/CD pipelines (Jenkins), and managing release rollouts.",
    icon: "Rocket",
    deliverables: ["IIS Web Server Setup", "Build Automation", "Live Monitoring"],
  },
  {
    step: "06",
    title: "Support & Evolution",
    description: "Providing 24/7 technical production support, monitoring live performance metrics, and iteratively building feature enhancements.",
    icon: "Wrench",
    deliverables: ["SLA Maintenance", "Hotfix Patching", "Feature Scaling"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Core",
    skills: [
      { name: "ASP.NET Core", isPrimary: true },
      { name: "C# / .NET", isPrimary: true },
      { name: "REST APIs", isPrimary: true },
      { name: "ASP.NET Web API", isPrimary: true },
      { name: "Node.js", isPrimary: false },
      { name: "ASP.NET MVC", isPrimary: false },
      { name: "SignalR Hubs", isPrimary: true },
    ],
  },
  {
    title: "Frontend & UI",
    skills: [
      { name: "Angular", isPrimary: true },
      { name: "React", isPrimary: true },
      { name: "TypeScript", isPrimary: true },
      { name: "Vue.js", isPrimary: false },
      { name: "JavaScript (ES6+)", isPrimary: true },
      { name: "HTML5 / CSS3", isPrimary: true },
      { name: "Tailwind CSS", isPrimary: false },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "Microsoft SQL Server", isPrimary: true },
      { name: "Dapper ORM", isPrimary: true },
      { name: "Stored Procedures", isPrimary: true },
      { name: "Query Optimization", isPrimary: true },
      { name: "MySQL", isPrimary: false },
      { name: "Database Design", isPrimary: true },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", isPrimary: true },
      { name: "IIS Web Server", isPrimary: true },
      { name: "Jenkins CI/CD", isPrimary: false },
      { name: "Visual Studio", isPrimary: true },
      { name: "Postman", isPrimary: true },
      { name: "Vercel", isPrimary: false },
      { name: "React Native", isPrimary: false },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Digital Automation Enterprises",
    role: "Senior Software Developer / Team Lead",
    period: "January 2018 — Present",
    location: "Mumbai, India",
    type: "Full-Time",
    techBadges: ["ASP.NET Core", "C#", "Angular", "SQL Server", "SignalR", "Dapper", "IIS"],
    responsibilities: [
      "Architect and build enterprise web applications using ASP.NET Core and Angular.",
      "Design highly performant, secure, and scalable RESTful APIs.",
      "Optimize complex SQL Server databases, stored procedures, and Dapper queries.",
      "Lead technical activities, conduct rigorous code reviews, and mentor junior engineers.",
      "Manage end-to-end production deployments, server setup, and live issue resolutions.",
      "Collaborate directly with business stakeholders, clients, and cross-functional teams.",
    ],
    contributions: [
      "Engineered mission-critical software solutions for tier-1 banking and government clients.",
      "Boosted backend throughput and reduced query response times by over 45% through database refactoring.",
      "Spearheaded complete SDLC projects from technical requirement gathering to IIS deployment.",
    ],
  },
  {
    company: "Everest IT Services Pvt. Ltd.",
    role: "Application Support Engineer",
    period: "May 2016 — October 2017",
    location: "Mumbai, India",
    type: "Full-Time",
    techBadges: ["SQL Server", "T-SQL", "IIS", "Windows Server", "C#"],
    responsibilities: [
      "Delivered 24/7 technical production support for client web applications.",
      "Investigated SQL data issues, repaired corrupted data scripts, and optimized query performance.",
      "Handled production software deployments and maintained web & database servers.",
      "Investigated system outages and implemented preventive resolutions.",
    ],
    contributions: [
      "Maintained 99.9% uptime SLA across client production web servers.",
      "Streamlined client ticketing and issue escalation processes.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "smart-branch",
    title: "SmartBranch Queue Management System",
    roleBadge: "Full Stack Architect",
    statusBadge: "Production Live",
    shortDescription:
      "Enterprise queue management platform used by top banks, hospitals, telecom providers, and government organizations.",
    fullDescription:
      "SmartBranch is a high-availability enterprise queuing platform that orchestrates real-time token generation, counter management, waiting area visual displays, and executive analytics.",
    businessProblem:
      "High-traffic banking branches and hospital centers suffered long customer waiting times, inefficient counter dispatching, and lack of real-time operational visibility.",
    solution:
      "Architected a centralized ASP.NET Core backend with SignalR web sockets to broadcast real-time token events to counter terminals and LED/TV waiting area displays instantaneously.",
    architectureDetails:
      "ASP.NET Core REST APIs, SignalR Hubs, Angular 15 Frontend, SQL Server with Dapper ORM for high-concurrency token audit logging.",
    category: "Enterprise",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "SignalR", "Dapper"],
    highlights: [
      "Deployed in multi-branch banking and hospital infrastructure across India",
      "Real-time counter updates via SignalR web sockets under <50ms latency",
      "High throughput transaction logging with Dapper ORM",
    ],
    iconName: "Users",
  },
  {
    id: "self-ordering-system",
    title: "Self Ordering System (SOS)",
    roleBadge: "Lead Full Stack Dev",
    statusBadge: "Production Live",
    shortDescription:
      "Interactive restaurant self-ordering kiosk & mobile platform with automated kitchen dispatch and digital payments.",
    fullDescription:
      "Comprehensive QSR restaurant self-service ordering platform featuring encrypted user authentication, dynamic menu management, real-time kitchen order dispatch, and payment gateway integrations.",
    businessProblem:
      "Quick Service Restaurants faced high cashier labor costs, order entry bottlenecks during peak hours, and delayed kitchen order processing.",
    solution:
      "Built a self-ordering kiosk application with custom multi-touch UI, automated POS kitchen ticket printing, and integrated contactless digital payment gateways.",
    architectureDetails:
      "ASP.NET Core Web API, Angular Kiosk Client, SQL Server, Encrypted Payment Gateway Integration.",
    category: "Web App",
    techStack: ["ASP.NET Core API", "Angular", "SQL Server", "REST API"],
    highlights: [
      "Interactive multi-touch menu UX with custom combo options",
      "Integrated secure payment gateways & automatic receipt printing",
      "Automated kitchen display system (KDS) synchronization",
    ],
    iconName: "Utensils",
  },
  {
    id: "central-signage-server",
    title: "Central Signage Server (CSS)",
    roleBadge: "System Architect",
    statusBadge: "Production Live",
    shortDescription:
      "Enterprise digital signage manager for scheduling, distributing, and monitoring multimedia content across remote displays.",
    fullDescription:
      "Centralized media distribution hub enabling remote administration of digital signage players across retail chains and corporate offices.",
    businessProblem:
      "Enterprise retail chains lacked a unified platform to remotely schedule and update marketing media across hundreds of scattered screens.",
    solution:
      "Engineered a central distribution server to schedule media playlists, stream 4K content, and monitor player node heartbeats automatically.",
    architectureDetails:
      "ASP.NET Web API, C# Windows Services, SQL Server, IIS Media Hub.",
    category: "System Architecture",
    techStack: ["ASP.NET", "SQL Server", "C#", "IIS"],
    highlights: [
      "Scheduled multimedia playlist broadcasting",
      "Real-time display node heartbeat monitoring & automated alerts",
      "Role-based media approval workflows",
    ],
    iconName: "Monitor",
  },
  {
    id: "loan-management-system",
    title: "Loan Management System",
    roleBadge: "Backend Lead",
    statusBadge: "Production Live",
    shortDescription:
      "Financial loan processing system handling applicant workflows, repayment schedules, interest calculation, and reports.",
    fullDescription:
      "Comprehensive lending application designed for financial institutions to manage loan lifecycles from application verification to disbursement, installment tracking, and regulatory audit reports.",
    businessProblem:
      "Manual loan processing led to mathematical calculation errors, delayed approval workflows, and compliance reporting oversights.",
    solution:
      "Automated amortization schedule generators, interest calculation engines, and granular approval permission controls.",
    architectureDetails:
      "ASP.NET C# Backend, SQL Server Stored Procedures, T-SQL Audit Logging.",
    category: "Enterprise",
    techStack: ["ASP.NET", "SQL Server", "Stored Procedures", "C#"],
    highlights: [
      "Automated amortization schedule & penalty calculation engine",
      "Granular permission controls for loan officers and auditors",
      "Comprehensive audit trail & regulatory reporting tools",
    ],
    iconName: "CreditCard",
  },
  {
    id: "my-area-online",
    title: "My Area Online E-Commerce Platform",
    roleBadge: "Full Stack Developer",
    statusBadge: "Production Live",
    shortDescription:
      "Scalable e-commerce platform with product management, shopping cart, payment processing, and order lifecycle tracking.",
    fullDescription:
      "Full-featured online marketplace enabling merchants to publish catalogs, process customer orders, accept credit card/UPI payments, and track fulfillment in real-time.",
    businessProblem:
      "Local merchants needed a robust e-commerce web platform capable of handling high product catalog search traffic and secure checkout.",
    solution:
      "Designed a responsive Angular storefront integrated with ASP.NET Core APIs and optimized SQL product search indexing.",
    architectureDetails:
      "ASP.NET Core REST API, Angular Frontend, SQL Server Full-Text Indexing.",
    category: "Web App",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "REST API"],
    highlights: [
      "Optimized product search & catalog filtering",
      "Secure cart & multi-currency payment checkout",
      "Merchant order management dashboard",
    ],
    iconName: "ShoppingBag",
  },
  {
    id: "arm",
    title: "Advanced Reception Management (ARM)",
    roleBadge: "Team Lead",
    statusBadge: "Production Live",
    shortDescription:
      "Multi-service center reception & visitor management platform with automated token routing.",
    fullDescription:
      "Enterprise visitor check-in system that streamlines customer reception, desk routing, appointments, and token printing for high-traffic customer care centers.",
    businessProblem:
      "Unorganized visitor registration resulted in long reception queues and poor counter utilization.",
    solution:
      "Created a visitor check-in application with dynamic desk routing and automated token printing.",
    architectureDetails:
      "ASP.NET Core, React Frontend, SQL Server Database.",
    category: "Enterprise",
    techStack: ["ASP.NET Core", "React", "SQL Server"],
    highlights: [
      "Automated visitor registration & queue entry",
      "Dynamic counter assignment based on queue depth",
    ],
    iconName: "ShieldCheck",
  },
  {
    id: "ads",
    title: "Advanced Digital Signage (ADS)",
    roleBadge: "System Engineer",
    statusBadge: "Production Live",
    shortDescription:
      "Enterprise digital signage distribution and remote display support framework.",
    fullDescription:
      "Hardware-integrated signage control module used to broadcast dynamic corporate announcements, live news feeds, and operational metrics.",
    businessProblem:
      "Displays experienced video playback interruptions when network connectivity fluctuated.",
    solution:
      "Implemented offline playback caching mechanisms and fallback media playlist rules.",
    architectureDetails:
      "ASP.NET Backend, C# Media Player Engine, SQL Server Storage.",
    category: "System Architecture",
    techStack: ["ASP.NET", "SQL Server", "C#"],
    highlights: [
      "Supports 4K video playback & ticker overlays",
      "Offline playback fallback cache mechanism",
    ],
    iconName: "Tv",
  },
];

export const timelineMilestones = [
  {
    year: "2016 — 2017",
    title: "Application Support Engineer",
    company: "Everest IT Services Pvt. Ltd.",
    badge: "Career Entry",
    description:
      "Started professional software career managing server maintenance, client production support, and SQL database troubleshooting.",
  },
  {
    year: "2018 — 2021",
    title: "Software Developer",
    company: "Digital Automation Enterprises",
    badge: "Core Engineering",
    description:
      "Developed backend web APIs with ASP.NET Core and frontend web interfaces with Angular & React for banking and digital signage clients.",
  },
  {
    year: "2021 — Present",
    title: "Senior Software Developer / Team Lead",
    company: "Digital Automation Enterprises",
    badge: "Leadership Milestone",
    description:
      "Promoted to Senior Team Lead. Directing full-stack architecture, database optimization, team mentorship, and mission-critical enterprise deployments.",
  },
];
