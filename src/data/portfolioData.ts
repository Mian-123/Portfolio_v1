// TypeScript interfaces for portfolio data structures

export interface Stat {
  value: string;
  label: string;
}

export interface AboutCard {
  icon: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  year: string;
  badges: string[];
  description: string;
  highlight: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  years: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ContactLink {
  type: string;
  label: string;
  value: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterData {
  name: string;
  role: string;
  location: string;
  email: string;
  year: number;
}

// Portfolio Data

export const roles: string[] = [
  "⚡ Full Stack Developer",
  "🤖 MERN Stack Engineer",
  "🚀 AI & Agents Explorer",
  "⚛️ React.js Developer",
  "🛠 Node.js Builder",
];

export const stats: Stat[] = [
  { value: "3+", label: "Projects Shipped" },
  { value: "6+", label: "Certifications" },
  { value: "20+", label: "Technologies" },
];

export const aboutCards: AboutCard[] = [
  {
    icon: "🤖",
    title: "Agentic AI",
    description:
      "Exploring autonomous AI agents, LLM-based applications, and prompt engineering for intelligent automation and decision-making.",
  },
  {
    icon: "⚛️",
    title: "Frontend Precision",
    description:
      "Crafting responsive and intuitive interfaces with React.js and Tailwind CSS — focused on performance and seamless user experience.",
  },
  {
    icon: "⚡",
    title: "Backend Powerhouse",
    description:
      "Designing scalable server architectures with Node.js, Express.js, MongoDB, and REST APIs — including Supabase and PostgreSQL.",
  },
  {
    icon: "🚀",
    title: "End-to-End Ownership",
    description:
      "Deploying real applications used by real people — like SchoolWise Manager, managing 150+ students at The Punjab Lyceum School.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C / C++", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    category: "AI & Agentic",
    skills: ["LLM Integration", "Prompt Engineering", "AI Agents", "Agentic Systems"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Thunder Client"],
  },
  {
    category: "Core",
    skills: ["Full Stack Dev", "REST API Design", "System Design"],
  },
];

export const projects: Project[] = [
  {
    title: "SchoolWise Manager",
    year: "2026",
    badges: ["DEPLOYED", "LIVE"],
    description:
      "Cloud based school administration platform deployed at The Punjab Lyceum School, managing records for students. Automates fee voucher generation, academic reports, and dues tracking reducing manual workload by over 70%.",
    highlight:
      "Triple copy print ready PDF fee vouchers with dynamic data injection and school branded watermarks using jsPDF",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "jsPDF", "Tailwind CSS"],
  },
  {
    title: "Skill Map AI",
    year: "2026",
    badges: ["AI", "HACKATHON"],
    description:
      "AI-powered career intelligence platform bridging the gap between a candidate's current skills and target roles. Features resume analysis, skill gap detection, ATS optimization, learning roadmaps, and an AI career chat assistant.",
    highlight:
      "3-service architecture: React 18 frontend, Node/Express backend, FastAPI AI service with spaCy NLP and Groq/Llama 3.3 70B",
    tags: ["React 18", "Node.js", "FastAPI", "Python", "MongoDB", "spaCy", "Groq / Llama"],
  },
];

export const education: Education = {
  degree: "BSc Computer Science (BSCS)",
  institution: "University of Punjab",
  location: "Lahore, Pakistan",
  years: "2023 – 2027",
};

export const certifications: Certification[] = [
  { name: "Javascript MEAN/MERN Stack", issuer: "KICS, UET Lahore" },
  { name: "Level 1 Agentic AI Developer", issuer: "PIAIC, Lahore" },
  { name: "Generative AI Bootcamp", issuer: "Outskills · 2 Days Intensive" },
  { name: "ChatGPT Prompt Engineering for Developers", issuer: "DeepLearning.AI · Andrew Ng" },
  { name: "Graphic Designing", issuer: "Primal Science Academy" },
  { name: "Computer Literacy", issuer: "Foundational certification" },
];

export const contactLinks: ContactLink[] = [
  {
    type: "email",
    label: "Email",
    value: "mianwaleed2272@gmail.com",
    href: "mailto:mianwaleed2272@gmail.com",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-waleed-a0037a2ab",
  },
  {
    type: "phone",
    label: "Phone",
    value: "+92-300-4610599",
    href: "tel:+92-300-4610599",
  },
  {
    type: "github",
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/Mian-123",
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs: string[] = [
  "I'm an ambitious MERN Stack developer with hands-on experience building scalable web applications using React.js, Node.js, and MongoDB. I have genuine passion for crafting products that solve real problems — from school management systems to AI-powered platforms.",
  "With a growing focus on Artificial Intelligence, I'm actively working with AI agents, agentic AI systems, and LLM-based applications. I bring hands-on exposure to prompt engineering and AI tool integration to every project.",
  "Pursuing my BSCS from University of Punjab, Lahore while actively building and shipping production-grade applications.",
];

export const heroDescription: string =
  "I build scalable web applications and explore intelligent systems with React.js, Node.js & MongoDB. Growing focus on AI agents, agentic AI systems, and LLM-based applications — with hands-on exposure to prompt engineering and AI tool integration.";

export const footerData: FooterData = {
  name: "Muhammad Waleed",
  role: "Full Stack Developer & AI Explorer",
  location: "Lahore, Pakistan",
  email: "mianwaleed2272@gmail.com",
  year: 2025,
};
