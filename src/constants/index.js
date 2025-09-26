// Imports for project images
import dashboardImg from "../assets/assets/projects/dashboard.png";
import eventoraaImg from "../assets/assets/projects/eventoraa.png";
import artixImg from "../assets/assets/projects/artix.png";
import portalImg from "../assets/assets/projects/portal.png";

// Imports for logos
import reactLogo from "../assets/assets/logos/react.svg";
import springBootLogo from "../assets/assets/logos/spring boot.png";
import pythonLogo from "../assets/assets/logos/python.jpg";
import tailwindcssLogo from "../assets/assets/logos/tailwindcss.svg";
import css3Logo from "../assets/assets/logos/css3.svg";
import javaLogo from "../assets/assets/logos/java.png";
import html5Logo from "../assets/assets/logos/html5.svg";
import javascriptLogo from "../assets/assets/logos/javascript.svg";
import phpLogo from "../assets/assets/logos/php.png";
import mysqlLogo from "../assets/assets/logos/mysql.png";
import qtCreatorLogo from "../assets/assets/logos/gt creator.png";
import sqlLogo from "../assets/assets/logos/sql.png";
import githubLogo from "../assets/assets/logos/github.svg";
import cplusplusLogo from "../assets/assets/logos/cplusplus.svg";
import cLogo from "../assets/assets/logos/C.png";
import sdlLogo from "../assets/assets/logos/sdl.png";
import arduinoLogo from "../assets/assets/logos/arduino.jpg";

// Imports for social icons
import whatsAppIcon from "../assets/assets/socials/whatsApp.svg";
import linkedInIcon from "../assets/assets/socials/linkedIn.svg";
import instagramIcon from "../assets/assets/socials/instagram.svg";

export const myProjects = [
  {
    id: 1,
    title: "University Classroom Reservation and Scheduling System",
    description:
      "",
    subDescription: [
      "Development of a complete classroom scheduling and reservation system for classes. It includes three main components that work together to efficiently manage timetables and bookings, using Spring Boot, React.js, and Python for the development of the AI model.",
    ],
    href: "",
    logo: "",
    image: dashboardImg,
    tags: [
      {
        id: 1,
        name: "React js",
        path: reactLogo,
      },
      {
        id: 2,
        name: "Spring Boot",
        path: springBootLogo,
      },
      {
        id: 3,
        name: "Python",
        path: pythonLogo,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: tailwindcssLogo,
      },
       {
        id: 5,
        name: "CSS",
        path: css3Logo,
      },
    ],
  },
  {
    id: 2,
    title: "Eventora - Event Management Application",
    description:
      "",
    subDescription: [
      "Eventora is a comprehensive event management platform that simplifies the organization, booking, and participation in all types of events. This application aims to revolutionize how events are created, managed, and experienced by users.",
      
    ],
    href: "",
    logo: "",
    image: eventoraaImg,
    tags: [
      {
        id: 1,
        name: "JAVA",
        path: javaLogo,
      },
      {
        id: 2,
        name: "HTML5",
        path: html5Logo,
      },
      {
        id: 3,
        name: "CSS",
        path: css3Logo,
      },
      {
        id: 4,
        name: "Javascript",
        path: javascriptLogo,
      },
      {
        id: 5,
        name: "PHP",
        path: phpLogo,
      },
      {
        id: 5,
        name: "MySQL",
        path: mysqlLogo,
      },
    ],
  },
  {
    id: 3,
    title: "ARTIX - Art Management Application",
    description:
      "",
    subDescription: [
      "Development of a desktop application in C++ using AI, designed for the intelligent management of artworks, with Qt Creator, SQL Server, and GitHub to provide a reliable solution for the needs of art collections.",
    ],
    href: "",
    logo: "",
    image: artixImg,
    tags: [
      {
        id: 1,
        name: "QT CREATOR",
        path: qtCreatorLogo,
      },
      {
        id: 2,
        name: "SQL Server",
        path: sqlLogo,
      },
      {
        id: 3,
        name: "GitHub",
        path: githubLogo,
      },
      {
        id: 4,
        name: "C++",
        path: cplusplusLogo,
      },
    ],
  },
  {
    id: 4,
    title: "Portal Quest - 2D Adventure Game",
    description:
      "",
    subDescription: [
      "Development of a 2D game in C using the SDL library for graphics rendering and user interaction. Design and implementation of puzzle mechanics to enhance the gaming experience. Integration of Arduino-based scenarios to create interactive and dynamic game elements.",
    ],
    href: "",
    logo: "",
    image: portalImg,
    tags: [
      {
        id: 1,
        name: "C",
        path: cLogo,
      },
      {
        id: 2,
        name: "SDL",
        path: sdlLogo,
      },
      {
        id: 3,
        name: "ARDUINO",
        path: arduinoLogo,
      },
      
    ],
  },
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: html5Logo,
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: css3Logo,
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: tailwindcssLogo,
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: whatsAppIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: linkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: instagramIcon,
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
// export const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://robohash.org/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://robohash.org/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://robohash.org/john",
//   },
//   {
//     name: "Alice",
//     username: "@alice",
//     body: "This is hands down the best thing I've experienced. Highly recommend!",
//     img: "https://robohash.org/alice",
//   },
//   {
//     name: "Bob",
//     username: "@bob",
//     body: "Incredible work! The attention to detail is phenomenal.",
//     img: "https://robohash.org/bob",
//   },
//   {
//     name: "Charlie",
//     username: "@charlie",
//     body: "This is hands down the best thing I've experienced. Highly recommend!",
//     img: "https://robohash.org/charlie",
//   },
//   {
//     name: "Dave",
//     username: "@dave",
//     body: "Simply breathtaking. The best decision I've made in a while.",
//     img: "https://robohash.org/dave",
//   },
//   {
//     name: "Eve",
//     username: "@eve",
//     body: "So glad I found this. It has changed the game for me.",
//     img: "https://robohash.org/eve",
//   },
// ];
