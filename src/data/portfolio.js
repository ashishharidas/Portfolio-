// Central content file. Anything marked isPlaceholder: true is a stand-in —
// swap in your real details and the UI updates automatically.

export const profile = {
  name: "Ashish Haridas",
  tagline: "Cloud & DevOps Enthusiast",
  subline:
  "Exploring cloud computing, DevOps, automation, AI, and emerging technologies with a passion for learning and building.",
  location: "Kerala, India",
  email: "ashishharidas6@gmail.com",
  phone: "+91 9249026215",
  linkedin: "https://www.linkedin.com/in/ashish-haridas-1ab538215/",
  // Assumed from the repo owner (ashishharidas/Portfolio-) — confirm/replace if different.
  github: "https://github.com/ashishharidas",
  resumeUrl: null, // add "/resume.pdf" once you drop a resume file into /public
};

export const skills = [
  {
    category: "Programming",
    blurb:
      "Hands-on experience with multiple programming languages and a growing interest in software development.",
    items: ["Python", "Java", "JavaScript", "C", "SQL"],
  },
  {
    category: "Cloud & DevOps",
    blurb:
      "Exploring cloud platforms, containerization, CI/CD, and modern infrastructure practices.",
    items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux", "CI/CD"],
  },
  {
    category: "Automation",
    blurb:
      "Interested in workflow automation, infrastructure automation, and connecting systems with minimal manual effort.",
    items: ["n8n", "Terraform", "Ansible", "Shell Scripting", "Git"],
  },
];


export const projects = [
  {
    name: "WealthWise",
    description: "A smart personal finance manager for tracking spending and net worth.",
    tech: ["Java", "JavaFX", "MongoDB"],
    github: null, // add your repo link
    demo: null,
    isPlaceholder: false,
  },
  {
    name: "FitQuest",
    description: "Add a real description of what FitQuest does and who it's for.",
    tech: ["Add tech stack"],
    github: null,
    demo: null,
    isPlaceholder: true,
  },
];

export const experience = [
  {
    role: "Web / Tech Team Member",
    org: "MUNSOC, TKMCE",
    period: "2024 – Present",
    description:
      "Contributed to web and technical initiatives, supporting digital solutions and team activities.",
    isPlaceholder: false,
  },
  {
    role: "Intern",
    org: "Machinser Academy, Kozhikode",
    period: "8 Weeks",
    description:
      "Gained hands-on exposure to software technologies and industry-oriented workflows through an 8-week internship.",
    isPlaceholder: false,
  },
];

export const certificates = [
  {
    title: "Netflix Clone Bootcamp",
    subtitle: "Full-stack development certification",
    image: "certificates/netflix-clone-bootcamp.jpg",
  },
  {
    title: "Node.js Bootcamp",
    subtitle: "Backend development certification",
    image: "certificates/nodejs-bootcamp.jpg",
  },
  {
    title: "Figma",
    subtitle: "Designing UI/UX",
    image: "certificates/figma.jpg",
  },
  {
    title: "CSS",
    subtitle: "Certification by HackerRank",
    image: "certificates/css.jpg",
  },
  {
    title: "Python",
    subtitle: "Certification by HackerRank",
    image: "certificates/python.jpg",
  },
  {
    title: "Cloud x DevOps",
    subtitle: "DevOps workshop participation",
    image: "certificates/devops-workshop.jpg",
  },
  {
    title: "Node.js & MongoDB",
    subtitle: "Workshop completion",
    image: "certificates/nodejs-mongodb.png",
  },
  {
    title: "ASAP Kerala IoT",
    subtitle: "IoT workshop completion",
    image: "certificates/iot.jpg",
  },
  {
    title: "Pupilfirst",
    subtitle: "Web development course",
    image: "certificates/pupilfirst.jpg",
  },
  {
    title: "JavaScript",
    subtitle: "Course completion",
    image: "certificates/javascript.png",
  },
];
