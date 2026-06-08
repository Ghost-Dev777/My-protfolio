export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  github: string;
  tags: string[];
  year: string;
  screenshots: string[];
};

export const projects: Project[] = [
  {
    slug: "Task-Manager",
    title: "Task Manager(Under Development)",
    description:
      "A real-time analytics dashboard for tracking spending, budgets, and investments with live data visualizations.",
    longDescription:
      "A full-stack finance platform that aggregates accounts and renders interactive charts in real time. Built with a React front end, an Express API layer, and MongoDB for storage. Features secure auth, optimistic UI updates, and a fully responsive layout.",
    image: "/projects/finance-dashboard.png",
    github: "https://github.com/Ghost-Dev777/todo-list-app-af",
    tags: ["React.js", "Express.js", "MongoDB", "TailwindCSS"],
    year: "2025",
    screenshots: ["/projects/finance-dashboard.png"],
  },
  {
    slug: "Cloud-product",
    title: "Commerce Storefront",
    description:
      "A headless e-commerce storefront with a custom cart, product search, and a smooth checkout flow.",
    longDescription:
      "A performant storefront built on a headless commerce backend. Implements a custom cart with persistent state, faceted product search, and an accessible checkout. The UI is component-driven with SCSS modules and server-rendered for fast first paint.",
    image: "/public/projects/abancloud-1.png",
    github: "https://www.abancloud.ir",
    tags: ["Laraverl", "PHP", "Tailwind Css", "Photoshop"],
    year: "2023",
    screenshots: ["/public/projects/abancloud-2.png","/public/projects/abancloud-3.png","/public/projects/abancloud-4.png"],
  },
  {
    slug: "Ecommerce",
    title: "E-Commerce (Under Development)",
    description:
      "A websocket-powered chat app with rooms, typing indicators, and message history.",
    longDescription:
      "A real-time messaging application supporting multiple rooms, presence, typing indicators, and persisted history. Powered by a Node.js socket server and a React client with optimistic message delivery and reconnection handling.",
    image: "/projects/chat-app.png",
    github: "https://github.com/Ghost-Dev777/E-commerce",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB","Sass"],
    year: "2026",
    screenshots: ["/projects/chat-app.png"],
  },
];

export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer intership",
    company: "Utab pars",
    duration: "2023 — Present",
    description:
      "Leading front-end architecture and building full-stack features across React, Node.js, and MongoDB.",
  },
  {
    role: "Android Developer-Flutter intership",
    company: "Tavv Sytem",
    duration: "2021 — 2023",
    description:
      "Built responsive, accessible interfaces with React and SCSS, and collaborated closely with design.",
  },
  {
    role: "Front-end Developer",
    company: "Brightwave",
    duration: "2020 — 2021",
    description:
      "Delivered marketing sites and internal tools using JavaScript, Laravel basics, and TailwindCSS.",
  },
  {
    role: "Junior Developer",
    company: "Freelance",
    duration: "2019 — 2020",
    description:
      "Shipped small business websites and learned the fundamentals of modern web development.",
  },
];

export type skills = {
  title: string;
  imgURL: string;
};
export const skills: skills[] = [
  {
    title: "React.js",
    imgURL: "../../public/logo/react.png",
  },
  {
    title: "Angular",
    imgURL: "../../public/logo/angular.png",
  },
  {
    title: "React Router",
    imgURL: "../../public/logo/react-router-logo-png-transparent.png",
  },
  {
    title: "Redux",
    imgURL: "../../public/logo/redux.png",
  },
  {
    title: "Motion",
    imgURL: "../../public/logo/motion.png",
  },
  {
    title: "React Hook Form",
    imgURL: "../../public/logo/react-hook-form.png",
  },
  {
    title: "Axios",
    imgURL: "../../public/logo/axios.png",
  },
  {
    title: "Javascript",
    imgURL: "../../public/logo/JS.png",
  },
  {
    title: "Typescript",
    imgURL: "../../public/logo/typescript.png",
  },
  {
    title: "Express.js",
    imgURL: "../../public/logo/express.js.png",
  },
  {
    title: "MongoDB",
    imgURL: "../../public/logo/mongodb.png",
  },
  {
    title: "Tailwind Css",
    imgURL: "../../public/logo/tailwind.png",
  },
  {
    title: "Sass",
    imgURL: "../../public/logo/sass.png",
  },
  {
    title: "Jquery",
    imgURL: "../../public/logo/jquery'.png",
  },
];
