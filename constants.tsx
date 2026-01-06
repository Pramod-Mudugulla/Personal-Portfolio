
import React from 'react';
import { Project, CareerInfo, Experience } from './types';

export const PERSONAL_INFO: CareerInfo = {
  name: "Pramod Mudugulla",
  role: "Software Engineer",
  expectedSalary: "INR 8,00,000 to 10,00,000",
  currentCTC: "INR 4,00,000 (Current PAT at Cognizant)",
  noticePeriod: "Immediate / June 2025",
  availability: "Full-time starting June 2025 (Open to immediate discussions)",
  openToOffers: true,
  preferredRoles: ["Backend Engineer", "Gen AI Engineer", "SDE", "Full Stack Developer", "AI Engineer"],
  workType: "Hybrid (<50% travel) or Remote",
  techStack: ["Java", "Python", "SQL", "Spring Boot", "Django", "React", "Gemini API", "PostgreSQL", "LangChain"],
  summary: "Software Engineer with a focus on Backend and Gen AI. Currently at Cognizant as a PAT. I have one active offer worth INR 8,40,000 but am exploring roles that align better with my expertise in Hyderabad, Bangalore, or Remote."
};

// Note: Additional context for AI
export const ADDITIONAL_CAREER_CONTEXT = {
  activeOffer: "INR 8,40,000",
  locations: ["Hyderabad", "Bangalore", "Remote"],
  higherStudies: "No plans for higher studies; fully committed to professional growth.",
  experience: "1 year of technical expertise/training."
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp-1",
    company: "Cognizant",
    role: "Programmer Analyst Trainee (PAT)",
    location: "Bangalore, India",
    period: "Sept 2025 – Present",
    highlights: [
      "Undergoing intensive training in Microservices, Spring Boot, Spring Security, Hibernate, and REST APIs.",
      "Supporting backend development by debugging Java–Spring Boot services and adopting production-grade coding standards.",
      "Gaining exposure to enterprise workflows, code quality practices, and Agile delivery models."
    ],
    skills: ["Spring Boot", "Microservices", "Spring Security", "Hibernate", "Java", "Agile"]
  },
  {
    id: "exp-2",
    company: "Cognizant",
    role: "Java Full-Stack Development Intern",
    location: "Remote",
    period: "May 2025 – Sept 2025",
    highlights: [
      "Trained in Advanced Java, REST API development, and backend architecture fundamentals.",
      "Implemented RESTful endpoints and managed version control via Git/GitHub in a simulated Agile SDLC environment.",
      "Participated in CI/CD pipeline simulations using GitHub Actions, improving deployment consistency and automation."
    ],
    skills: ["Java", "REST API", "GitHub Actions", "CI/CD", "Git"]
  },
  {
    id: "exp-3",
    company: "BCommune (Startup)",
    role: "Full-Stack Developer (Freelance)",
    location: "Hyderabad, India",
    period: "Mar 2025 – May 2025",
    highlights: [
      "Engineered a production-ready recruitment platform using Django for the backend and React for the frontend.",
      "Built secure REST APIs and an Applicant Tracking System (ATS) with integrated analytics dashboards, boosting engagement by 30%.",
      "Implemented CI/CD workflows and collaborated directly with founders to translate business needs into user-facing features."
    ],
    skills: ["Django", "React", "REST API", "CI/CD", "ATS Architecture"]
  },
  {
    id: "exp-4",
    company: "Recruit CRM",
    role: "Data Analyst Intern",
    location: "Remote",
    period: "Nov 2024 – Jan 2025",
    highlights: [
      "Created and modified SQL views and data models to clean and structure large datasets for complex reporting.",
      "Reduced BI query and dashboard load times by ~25% through meticulous data and query optimization.",
      "Designed KPI-driven dashboards and automated interview scheduling workflows via Calendly API using Python and REST."
    ],
    skills: ["SQL", "Data Modeling", "Python", "BI Dashboards", "Calendly API"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-supervisor",
    title: "Human-in-the-Loop AI Supervisor",
    description: "Real-time AI customer call handling system with LiveKit and automated escalation.",
    role: "Lead Developer",
    tech: ["LiveKit", "AI Agents", "Python", "Real-time Communication"],
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*NX6y5E23ERzmSC-6uen_qA.png",
    details: {
      problem: "Automated call systems often fail to handle complex emotional or logical customer needs without human intervention.",
      approach: "Integrated LiveKit for real-time processing and built a workflow for seamless human handover.",
      outcome: "Reduced unresolved case time and improved customer satisfaction metrics through automated knowledge base updates."
    }
  },
  {
    id: "rag-assistant",
    title: "Private RAG Assistant",
    description: "Document-based QA system using LangChain and Gemini API for secure querying.",
    role: "AI Developer",
    tech: ["Gemini API", "LangChain", "Python", "Streamlit"],
    image: "https://blogs.nvidia.com/wp-content/uploads/2023/11/Retrieval-Augmented-Generation-RAG-KV-1.jpg",
    details: {
      problem: "Users needed a way to query private documents without exposing sensitive data to public LLM training sets.",
      approach: "Developed a localized ingestion and chunking pipeline with vector embeddings and Gemini-based retrieval.",
      outcome: "Successful deployment of a high-accuracy QA tool that maintains data sovereignty."
    }
  },
  {
    id: "ghost-share",
    title: "Ghost-Share",
    description: "Secure, auto-expiring file-sharing system with Cloudflare D1 and R2.",
    role: "Full-stack Engineer",
    tech: ["Cloudflare R2", "Cloudflare D1", "React", "Node.js"],
    image: "https://img.freepik.com/free-photo/secured-file-folder-futuristic-data-network_23-2152001151.jpg?semt=ais_hybrid&w=740&q=80",
    liveUrl: "https://ghost-share.com/",
    details: {
      problem: "Standard file sharing is often permanent and lacks transparency in privacy.",
      approach: "Built a serverless architecture leveraging Cloudflare workers for automated deletion and secure link generation.",
      outcome: "A lightweight, secure sharing platform with Zero-Knowledge principles."
    }
  },
  {
    id: "trade-sim",
    title: "Quantitative Trade Simulator",
    description: "Simulated real-time trading using OKX WebSocket API and Random Forest models.",
    role: "Backend Engineer",
    tech: ["Python", "WebSocket", "Scikit-learn", "Machine Learning"],
    image: "https://t4.ftcdn.net/jpg/06/82/87/83/360_F_682878367_NY9y4TbcGI86KniuZCSZYrirHAMjUy27.jpg",
    details: {
      problem: "Trading algorithms need high-fidelity simulations that account for market slippage.",
      approach: "Used WebSocket streams for live data and trained a Random Forest model to predict slippage.",
      outcome: "Improved simulation realism by 18%, providing more accurate backtesting."
    }
  }
];
