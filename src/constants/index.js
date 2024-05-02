import {
  database,
  backend,
  clean,
  web,
  javascript,
  typescript,
  html,
  css,
  bootstrap,
  tailwind,
  git,
  figma,
  odoo,
  androidStudio,
  webDevelopment,
  angular,
  mySQL,
  java,
  csharp,
  symfony,
  gym,
  olimpiadas,
  vvvvvgo,
  signum,
  hmanagementLead
} from "../assets";

export const navLinks = [
  {
    id: "cv",
    title: "📄Download CV",
  },
  {
    id: "linkedin",
    title: "🔗LinkedIn",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front Developer",
    icon: web,
  },
  {
    title: "Database Management",
    icon: database,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Clean code",
    icon: clean,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "symfony",
    icon: symfony,
  },
  {
    name: "mySQL",
    icon: mySQL,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "CSaharp",
    icon: csharp,
  },
];

const studies = [
  {
    title: "Enterprise Resource Planning Systems",
    programming_language: "Python and XML",
    icon: odoo,
    iconBg: "#383E56",
    points: [
      "Implemented custom modules in Odoo using Python and XML.",
      "Designed and configured business processes within the Odoo framework.",
      "Integrated third-party applications and services with Odoo ERP system.",
    ],
  },
  {
    title: "Mobile Application Development",
    programming_language: "Java and XML",
    icon: androidStudio,
    iconBg: "#E6DEDD",
    points: [
      "Developed native Android applications using Android Studio and Java.",
      "Designed user interfaces using XML layouts.",
      "Implemented backend functionality and communication with APIs.",
    ],
  },
  {
    title: "Web Development and API Integration",
    programming_language: "PHP, C#, jQuery, Swagger",
    icon: webDevelopment,
    iconBg: "#383E56",
    points: [
      "Built web applications using PHP with jQuery for dynamic frontend interactions.",
      "Implemented backend services in C# using Visual Studio Code.",
      "Integrated APIs and developed RESTful services using Swagger.",
    ],
  },
  {
    title: "User Interface Development with Angular and Ionic",
    programming_language: "TypeScript, HTML, Bootstrap, Tailwind",
    icon: angular,
    iconBg: "#E6DEDD",
    points: [
      "Created responsive and dynamic user interfaces using Angular framework.",
      "Utilized Ionic framework for hybrid mobile app development.",
      "Styled interfaces with HTML, Bootstrap, and Tailwind CSS.",
    ],
  },
];

const projects = [
  {
    name: "4VGO",
    description:
      "4VGO is a carpooling application that facilitates the organization and management of road compartments between users. The app allows users to create and combine routes to travel together, reducing CO2 emissions and making transportation more sustainable.",
    tags: [
      {
        name: "AndroidStudio",
        color: "blue-text-gradient",
      },
      {
        name: "xml",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: vvvvvgo,
    source_code_links: ["https://github.com/XxFenixDCxX/4vGo"],
  },
  {
    name: "Signum",
    description:
      "This App is designed to help people learn sign language in a fun and educational way. It offers a collection of common signs along with their meanings and pronunciation. Additionally, it incorporates an interactive game that allows users to test their knowledge while having fun.",
    tags: [
      {
        name: "AndroidStudio",
        color: "blue-text-gradient",
      },
      {
        name: "xml",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: signum,
    source_code_links: ["https://github.com/XxFenixDCxX/Signum"],
  },
  {
    name: "ProyectoGestionClientes",
    description:
      "This app is designed to facilitate client management by managers. It allows for the creation of clients with detailed contact information, as well as associated projects, etc. It was created for my practice at Hiberus Tecnología.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: hmanagementLead,
  },
  {
    name: "GYM",
    description:
      "4vGYM is a versatile solution combining a Symfony-based RESTful API with a web interface, facilitating the management of gym activities, monitors, and types. It supports CRUD operations with robust validation and relational data management, enabling seamless control over gym operations and resources.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Api Rest",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Symfony",
      },
    ],
    image: gym,
    source_code_links: [
      "https://github.com/MohammedChoudna0/4V-GYM-APP",
      "https://github.com/xxSTUX/4vGYM-API",
    ],
  },
  {
    name: "Olimpiadas",
    description:
      "The Olimpiadas project is a platform designed to facilitate the purchase of tickets for the Paris 2024 Olympic events. It allows users to register, participate in ticket acquisition lotteries, and receive notifications about the purchasing process. It offers an intuitive interface on both mobile devices and the web for an optimal user experience.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: olimpiadas,
    source_code_links: [
      "https://github.com/XxFenixDCxX/OlimpiadasFront",
      "https://github.com/XxFenixDCxX/OlimpiadasBack",
    ],
  },
];

export { services, technologies, studies, projects };
