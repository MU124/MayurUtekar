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
  category: "Enterprise" | "Web App" | "System Architecture";
  techStack: string[];
  highlights: string[];
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
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
    { label: "Enterprise Projects", value: "7+", targetNumber: 7, suffix: "+" },
    { label: "Core Technologies", value: "20+", targetNumber: 20, suffix: "+" },
    { label: "Industries Served", value: "5+", targetNumber: 5, suffix: "+" },
  ],
  industries: [
    { name: "Banking & Finance", icon: "Landmark" },
    { name: "Government & Public Sector", icon: "Building2" },
    { name: "Retail & E-Commerce", icon: "ShoppingCart" },
    { name: "Healthcare & Hospitality", icon: "Hospital" },
    { name: "Digital Signage & Media", icon: "Tv" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Architecture",
    skills: [
      { name: "ASP.NET Core" },
      { name: "C#" },
      { name: "ASP.NET Web API" },
      { name: "ASP.NET MVC" },
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "SignalR" },
    ],
  },
  {
    title: "Frontend & UI",
    skills: [
      { name: "Angular" },
      { name: "React" },
      { name: "Vue.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "Microsoft SQL Server" },
      { name: "MySQL" },
      { name: "Dapper ORM" },
      { name: "Stored Procedures" },
      { name: "Query Optimization" },
      { name: "Database Design" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub" },
      { name: "Jenkins CI/CD" },
      { name: "IIS Server" },
      { name: "Visual Studio" },
      { name: "Postman" },
      { name: "PM2" },
      { name: "React Native" },
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
      "SmartBranch is a high-availability enterprise queuing platform that orchestrates real-time token generation, counter management, waiting area visual displays, and executive analytics. Integrates SignalR for instantaneous live counter update broadcasts.",
    category: "Enterprise",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "SignalR", "Dapper"],
    highlights: [
      "Deployed in multi-branch banking and hospital infrastructure",
      "Real-time counter updates via SignalR web sockets",
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
      "Comprehensive QSR restaurant self-service ordering platform featuring encrypted user authentication, dynamic menu management, real-time kitchen order dispatch, payment gateway integrations, and management analytics.",
    category: "Web App",
    techStack: ["ASP.NET Core API", "Angular", "SQL Server", "REST API"],
    highlights: [
      "Interactive multi-touch menu UX with custom options",
      "Integrated secure payment gateways & receipt printing",
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
      "Centralized media distribution hub enabling remote administration of digital signage players across retail chains and corporate offices. Features automated media scheduling, layout design, and display health monitoring.",
    category: "System Architecture",
    techStack: ["ASP.NET", "SQL Server", "C#", "IIS"],
    highlights: [
      "Scheduled multimedia playlist broadcasting",
      "Real-time display node heartbeat monitoring",
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
      "Comprehensive lending application designed for financial institutions to manage loan lifecycles from application verification to disbursement, installment tracking, penalty rules, and regulatory audit reports.",
    category: "Enterprise",
    techStack: ["ASP.NET", "SQL Server", "Stored Procedures", "C#"],
    highlights: [
      "Automated amortization schedule calculation",
      "Granular permission controls for loan officers",
      "Comprehensive audit trail & reporting tools",
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
    category: "Web App",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "REST API"],
    highlights: [
      "Optimized product search & filtering",
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
      "Hardware-integrated signage control module used to broadcast dynamic corporate announcements, live news feeds, and operational metrics on high-definition displays.",
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
