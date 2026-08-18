// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import hoppscotchLogo from "./assets/tech_logo/hoppscotch.png";
import mcLogo from "./assets/tech_logo/mc.png";
import renderLogo from "./assets/tech_logo/render.png";

// Experience Section Logo's
import skillraceLogo from "./assets/company_logo/skillraace.png";
import ybiLogo from "./assets/company_logo/ybi.png";

// Education Section Logo's
import kietLogo from "./assets/education_logo/kiet.png";
import npicLogo from "./assets/education_logo/npic.png";

// Project Section Logo's
import wanderlustLogo from "./assets/work_logo/wanderlust.png";
import weatherLogo from "./assets/work_logo/weather.png";
import artifyLogo from "./assets/work_logo/artify.png";
import pingupLogo from "./assets/work_logo/pingup.png";
import chatappLogo from "./assets/work_logo/chat-app.png";
import emsLogo from "./assets/work_logo/ems.png";
import builderAILogo from "./assets/work_logo/builderAI.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Hoppscotch", logo: hoppscotchLogo },
      { name: "Render", logo: renderLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: skillraceLogo,
    role: "Web developer Intern",
    company: "Skillraace",
    date: "Apr 2024 - Jun 2024",
    desc: "Developed and implemented modern product features using React and Tailwind CSS creating 10+ optimized reusable components that enhanced UI responsiveness and overall user experience.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
    ],
  },
  {
    id: 1,
    img: ybiLogo,
    role: "Data Scientist Intern",
    company: "YBI Foundation",
    date: "Aug 2023 - Sep 2023",
    desc: "Proficient in data analysis with hands-on experience in cleaning, exploration, and visualization using Python and SQL.Skilled in statistical modeling and predictive analytics to drive actionable insights and informed decisions.",
    skills: [
      "Python",
      "Data Processing",
      "SQL",
      "Statistics",
      "Machine Learning",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: kietLogo,
    school: "KIET Group of Institutions, Ghaziabad",
    date: "Nov 2021 - Jul 2025",
    grade: "7.64 CGPA",
    desc: "I have completed my B.Tech in Information Technology, where I gained strong foundational knowledge in core subjects. During my college years, I focused on enhancing my problem-solving and programming skills through Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOPs). I also developed a solid understanding of Database Management Systems (DBMS) and Software Engineering principles, which helped me build a structured approach to designing, developing, and managing software systems.",
    degree: "B.Tech in Information Technology",
  },
  {
    id: 1,
    img: npicLogo,
    school: "New Public Inter College, Bansi",
    date: "May 2018 - Apr 2019",
    grade: "67.4%",
    desc: "I completed my class 12th education from New Public Inter College, Bansi(Siddharth Nagar), under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM)",
  },
  {
    id: 2,
    img: npicLogo,
    school: "New Public Inter College, Bansi",
    date: "Jul 2016 - Jun 2017",
    grade: "84%",
    desc: "I completed my class 10th education from New Public Inter College, Bansi(Siddharth Nagar), under the UP board, where I studied Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Employee Management System(EMS)",
    description:
      "Developed a full-stack Employee Management System(EMS) using MERN Stack and Inngest with role-based authentication for Admin and Employees. Implemented attendance management, leave approval system, payslip generation, secure password management, and automated employee check-in reminders using event-driven workflows.",
    image: emsLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "RESTful api",
      "Inngest",
    ],
    github: "https://github.com/anuritik/FullStack-EMS",
    webapp: "https://full-stack-ems-seven.vercel.app/",
  },
  {
    id: 1,
    title: "BuilderAI",
    description:
      "BuilderAI is an AI-powered platform that transforms natural language prompts into fully functional React websites. Powered by OpenRouter AI and Sandpack, users can generate, preview, and edit structured React projects in real time. Projects can also be exported as ZIP files or published through a shareable public link.",
    image: builderAILogo,
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenRoute",
      "Sandpack",
      "JSZip",
    ],
    github: "https://github.com/anuritik/builder-ai",
    webapp: "https://builder-ai-seven.vercel.app",
  },
  {
    id: 2,
    title: "Pingup- Social Media Platform",
    description:
      "Pingup is a full-stack social media platform offering fast, real-time messaging and notifications powered by SSE. It uses Inngest for automated tasks like 24-hour story expiration and transactional emails, with secure authentication via Clerk. Optimized media handling and scalable APIs ensure a smooth, high-performance user experience.",
    image: pingupLogo,
    tags: [
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Inngest",
      "Redux",
      "Clerk",
      "ImageKit",
    ],
    github: "https://github.com/anuritik/PingUp",
    webapp: "https://ping-up-beryl.vercel.app/",
  },

  {
    id: 3,
    title: "Artify (Text to Image Converter)",
    description:
      "Developed Artify, a full-stack MERN app that converts text prompts into styled visuals with secure authentication and a credit-based model. Integrated Razorpay for smooth premium transactions and implemented a responsive React frontend with a Node.js/Express backend and MongoDB for seamless performance.",
    image: artifyLogo,
    tags: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "API",
      "Razorpay API",
    ],
    github: "https://github.com/anuritik/Artify",
    webapp: "https://artify-lake.vercel.app/",
  },

  {
    id: 4,
    title: "Full-Stack WanderLust Website",
    description:
      " Developed and deployed a full-stack travel listing app (Wanderlust) with CRUD operations, secure Passport.js authentication, and session management, built on an MVC architecture with EJS and MongoDB for scalable routing and efficient data handling. Optimized middleware, error handling, and a responsive Bootstrap UI to enhance reliability, maintainability, and cross-device usability.",
    image: wanderlustLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/anuritik/Full_statck_project",
    webapp: "https://anuragshukla-project.onrender.com/",
  },
  {
    id: 5,
    title: "Weatherly Weather Website",
    description:
      "Weatherly is a React.js-based web application styled with Bootstrap that allows users to search for any city and instantly view real-time weather details such as temperature, humidity, and conditions. The app integrates with a weather API to fetch and display accurate data, providing a simple and responsive interface for an enhanced user experience.",
    image: weatherLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "API", "React JS"],
    github: "https://github.com/anuritik/Weatherly-app",
    webapp: "https://weatherly-app-psi.vercel.app/",
  },
  {
    id: 6,
    title: "QuickChat - Real Time Chat",
    description:
      "QuickChat is a real-time chatting website built with the MERN stack and Socket.io. It enables instant messaging, media sharing, and seamless communication with a responsive interface. Designed for scalability and speed, QuickChat ensures smooth user experiences with secure authentication and efficient data handling.",
    image: chatappLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "RESTful api",
      "Socket.io",
    ],
    github: "https://github.com/anuritik/chat-app",
    webapp: "https://chat-app-three-ashen-13.vercel.app/",
  },
];
