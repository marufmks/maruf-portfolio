import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import ultimatte_security from "../assets/projects/ultimate-security.png";

export const HERO_CONTENT = `I'm Maruf Khan from Dhaka — a WordPress plugin developer with 4+ years building secure, scalable WordPress plugins and custom solutions. Currently at Prime Tech Solutions Ltd (2025–Present) developing a security-focused plugin; seeking a senior role to lead plugin architecture, security, and backend integrations.`;

export const ABOUT_TEXT = `I'm a WordPress plugin developer based in Mirpur, Dhaka, with 4+ years of experience building secure, scalable plugins and custom solutions for agencies and enterprises. I specialise in PHP, WordPress architecture, and backend integrations — from authentication and REST APIs to database optimisation and security hardening. Currently at Prime Tech Solutions Ltd, I architected and maintain a WordPress security plugin published on WordPress.org, covering 2FA, brute-force protection, CAPTCHA, and session controls. I also work with React, Docker, and AWS for deployment and frontend tooling. I'm looking for a senior role where I can lead plugin architecture, improve development workflows, and build tools that site owners can trust.`;

export const EXPERIENCES = [
  {
    year: "2025 — Present",
    role: "WordPress Developer (Plugin Developer)",
    company: "Prime Tech Solutions Ltd",
    description: `Architected and developed a WordPress security plugin focused on authentication, capability checks, input sanitization/escaping, and nonce protection. Implemented secure update and distribution flows, and hardened the plugin against XSS, CSRF, and SQL injection vectors. Optimized performance and database queries; introduced caching where appropriate to reduce load. Wrote PHPUnit and integration tests, performed security audits, and fixed discovered vulnerabilities. Collaborated with product managers and QA; produced developer docs for deployment and maintenance.`,
    technologies: ["PHP", "WordPress", "MySQL", "REST API", "PHPUnit", "Security"],
  },
  {
    year: "2024 - 2025",
    role: "Software Engineer",
    company: "WPCommerz",
    description: `Developed WordPress Plugin using React JS, Tailwind CSS, PHP and MySQL for database management. Worked closely with team leader and implemented new existing plugin. Implemented new designs and optimized query performance.`,
    technologies: ["HTML", "React.js", "PHP", "MySQL"],
  },
  {
    year: "2023 - 2024",
    role: "Php Developer",
    company: "THESOFTKING",
    description: `Developed and maintained WordPress Plugin using JavaScript, HTML, CSS, and PHP. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "jQuery", "PHP", "MySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Php Developer",
    company: "EgensLab",
    description: `Contributed to the development of WordPress Theme for Themeforest using JavaScript, HTML, CSS, and PHP. Managed databases and implemented data storage solutions using MySQL. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["HTML", "jQuery", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Ultimate Security — Prime Tech Solutions Ltd",
    image: ultimatte_security,
    description: "A comprehensive WordPress security plugin published on WordPress.org with 2FA (TOTP/HOTP), brute-force lockouts, Cloudflare Turnstile & reCAPTCHA, custom login URL, session controls, and security maintenance tools.",
    technologies: ["WordPress", "PHP", "MySQL", "Security", "REST API", "React"],
    url: "https://wordpress.org/plugins/ultimate-security/",
  },
  {
    title: "Guidant",
    image: project1,
    description:
      "Guidant | Guided Selling & Product Recommendation Quiz WordPress Plugin .Woocommerce product listing, Filter, Add to cart, and Quiz creating.",
    technologies: ["HTML", "CSS", "JQuery", "PHP", "MySQL"],
  },
  {
    title: "Dynamic Surveys",
    image: project2,
    description:
      "Dynamic Surveys a WordPress plugin | Create and manage surveys with dynamic questions and responses. Export survey data to CSV and PDF.",
    technologies: ["HTML", "CSS", "JQuery", "PHP", "MySQL"],
  },
  {
    title: "PTCLab",
    image: project3,
    description:
      "PTCLab is a WordPress Based Plugin for Pay Per Click businesses. You can run your own PTC, PPC, or PPV website within minutes without any programming knowledge.",
    technologies: ["HTML", "CSS", "JQuery", "PHP", "MySQL"],
  },
  {
    title: "Employee Management System",
    image: project4,
    description: "A WordPress plugin for managing employees and sales reports with a React-based admin dashboard, real-time analytics, role-based access control, and interactive sales charts.",
    technologies: ["React", "PHP", "WordPress", "MySQL", "JavaScript", "Webpack"],
  },
  {
    title: "PDF Chat RAG",
    image: project4,
    description: "A WordPress plugin that enables users to chat with uploaded PDF documents using Retrieval-Augmented Generation (RAG) — entirely in PHP with Google Gemini API, vector search, and a React chat frontend.",
    technologies: ["PHP", "WordPress", "React", "Gemini API", "RAG", "MySQL"],
  },
];

export const CONTACT = {
  address: "Mirpur, Dhaka, Bangladesh",
  phoneNo: "+880-1685878659",
  email: "marufkh204@gmail.com",
};
