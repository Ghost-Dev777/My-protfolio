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
      "Full‑stack task management application built with the MERN stack (MongoDB, Express, React). Features include authentication, task categorization, filtering, analytics dashboards, and notification reminders.",
    longDescription:
      "This project is a full‑stack task management application built using the MERN stack (MongoDB, Express.js, React.js). The application allows users to create, organize, and manage their daily tasks with categorized task lists and flexible filtering options.It includes a complete authentication flow with user registration, login, and input validation. Users can create, update, delete, and categorize tasks while tracking their productivity through visual statistics and progress indicators.The dashboard provides analytical insights such as completion rates and task distribution over time using interactive charts. The system also supports reminder notifications for scheduled tasks.The frontend interface was built with React and styled using Tailwind CSS, focusing on a clean, responsive user experience and efficient state management.",
    image: "/projects/task-1.png",
    github: "https://github.com/Ghost-Dev777/todo-list-app-af",
    tags: ["React.js", "Express.js", "MongoDB", "TailwindCSS"],
    year: "2025",
    screenshots: ["/projects/task-1.png"],
  },
  {
    slug: "Cloud-product",
    title: "Aban Cloud Website",
    description:
      "A cloud services website built with Laravel, Tailwind CSS, and jQuery, focused on responsive UI, core SEO implementation, interactive navigation, and optimized media assets.",
    longDescription:
      "This project is a cloud services presentation and sales website developed using Laravel, Tailwind CSS, jQuery, and Sass. I was responsible for most of the implementation across the frontend layer, including page development, routing structure, responsive layout behavior, and core UI styling.Beyond the interface implementation, I also worked on foundational SEO-related frontend practices such as proper HTML attributes, cleaner page structure, and performance-aware asset delivery. To improve loading behavior and user experience, I implemented lazy loading strategies and optimized visual assets including images, icons, and logos using Photoshop and Illustrator.",
    image: "/projects/abancloud-1.png",
    github: "https://www.abancloud.ir",
    tags: ["Laraverl", "PHP", "Tailwind Css", "Photoshop"],
    year: "2023",
    screenshots: [
      "/projects/abancloud-2.png",
      "/projects/abancloud-3.png",
      "/projects/abancloud-4.png",
    ],
  },
  {
    slug: "Ecommerce",
    title: "E-Commerce (Under Development)",
    description:
      "A high-performance e-commerce platform built with React, focusing on seamless user experience. Features a dynamic cart, advanced product filtering, secure checkout flow, and optimized performance for fast navigation.",
    longDescription:
      "This e-commerce platform is a robust web application built using React, designed to provide a smooth and responsive shopping experience. The system handles complex state management for the cart, allowing users to efficiently add, modify, and track their items.Users can browse through extensive product catalogs with powerful filtering and search capabilities based on price, category, and specifications. The project includes a seamless checkout flow, user authentication, and order history tracking, ensuring a complete and secure shopping journey.Special attention was given to performance optimization, implementing lazy loading, code splitting, and responsive design patterns to ensure high responsiveness across all devices. The interface is meticulously crafted for usability, bridging the gap between aesthetic appeal and functional performance.",
    image: "/projects/shop-1.png",
    github: "https://github.com/Ghost-Dev777/E-commerce",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Sass"],
    year: "2026",
    screenshots: ["/projects/shop-2.png","/projects/shop-3.png"],
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
    duration: "Apr 2021 - Sep 2021",
    description:
      "Worked on the frontend development of a cloud services platform, focusing on building responsive interfaces and optimizing user interactions.Collaborated within a real production environment to deliver scalable UI features.",
  },
  {
    role: "Android Developer-Flutter intership",
    company: "Tavv Sytem",
    duration: "Dec 2021 - Mar 2021",
    description:
      "Joined a mobile development internship focused on preparing for Flutter development, starting with C++ fundamentals and algorithmic thinking.The program was paused due to internal company issues before entering the Flutter phase, but it helped strengthen my problem-solving mindset and technical foundation.",
  },
  {
    role: "Front-end Developer",
    company: "Jooyan Co.",
    duration: "Jan 2026 - Mar 2026",
    description:
      "Joined the company as a Frontend Developer and quickly learned Angular within two weeks to contribute to real production projects.Worked on two Angular-based projects, including a medical shift scheduling system and a product showcase website using GSAP-driven interactions.",
  },
];

export type skills = {
  title: string;
  imgURL: string;
};
export const skills: skills[] = [
  {
    title: "React.js",
    imgURL: "/logo/react.png",
  },
  {
    title: "Angular",
    imgURL: "/logo/angular.png",
  },
  {
    title: "React Router",
    imgURL: "/logo/react-router-logo-png-transparent.png",
  },
  {
    title: "Redux",
    imgURL: "/logo/redux.png",
  },
  {
    title: "Motion",
    imgURL: "/logo/motion.png",
  },
  {
    title: "React Hook Form",
    imgURL: "/logo/react-hook-form.png",
  },
  {
    title: "Axios",
    imgURL: "/logo/axios.png",
  },
  {
    title: "Javascript",
    imgURL: "/logo/JS.png",
  },
  {
    title: "Typescript",
    imgURL: "/logo/typescript.png",
  },
  {
    title: "Express.js",
    imgURL: "/logo/express.js.png",
  },
  {
    title: "MongoDB",
    imgURL: "/logo/mongodb.png",
  },
  {
    title: "Tailwind Css",
    imgURL: "/logo/tailwind.png",
  },
  {
    title: "Sass",
    imgURL: "/logo/sass.png",
  },
  {
    title: "Jquery",
    imgURL: "/logo/jquery'.png",
  },
];
