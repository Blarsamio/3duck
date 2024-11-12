export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Fanny Rojon",
    position: "General Manager at Expanish",
    img: "assets/review1.png",
    review:
      "I hired Patricio as a Batch Manager & Teacher after the Web Development bootcamp he did as a student. Patricio is a gem. A wonderful reliable and talented professional with a positive attitude and a very calming energy. He has been such a great addition to the team, and a great comfort to me as a manager, I'm forever thankful for all the support he gave me, and I really hope our paths cross again in the future.",
  },
  {
    id: 2,
    name: "Leon Entrup",
    position: "CTO and co-founder at Metarina",
    img: "assets/review2.png",
    review:
      "Patricio came into the company when he was fresh out of his bootcamp, he was always eager to learn and face new challenges. In a matter of months he was already building complex features by himself, no task was big enough, if there was something he wouldn't know how to do, he wouldn't rest until he'd learn how to do it. A clear communicator, great teammate and always had a smile on his face. ",
  },
  {
    id: 3,
    name: "Valentina Marun",
    position: "Co-founder at Vandals",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Pato, a great friend and a great client. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding and his way of interacting with people is admirable. He can do everything, from design to code to prepare the best mates 🧉",
  },
  {
    id: 4,
    name: "Juan Bernardo Lince",
    position: "City Manager at Le Wagon Barcelona",
    img: "assets/review4.png",
    review:
      "I had the pleasure of working with Patricio at Le Wagon Barcelona. Patricio is an invaluable member of the team, bringing a unique blend of professionalism, talent, and an unwavering positive attitude, his energy uplifts both students and colleagues alike. Helped me quite a lot as I settled into my role as City Manager. I am deeply thankful for the guidance and stability he provided during my transition",
  },
];

export const myProjects = [
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://docu-manager.vercel.app/sign-in",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "transparent",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Liveblocks",
        path: "assets/liveblocks.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Next.js",
        path: "/assets/next.svg",
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://banking-app-five-mu.vercel.app/sign-in",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "transparent",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/next.svg",
      },
      {
        id: 2,
        name: "React",
        path: "assets/react.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Appwrite",
        path: "/assets/appwrite.png",
      },
    ],
  },
  {
    title: "Duckify - Video Sharing Mobile APP",
    desc: "Duckify is a revolutionary platform that transforms the way ducks are seen. With advanced AI-powered features like transforming any single duck video into whatever your imagination wants with a single prompt.",
    subdesc:
      "Built as a unique app with Expo, Nativewind, React Native and Appwrite, Duckify is designed for optimal performance and scalability.",
    href: "",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/duck.png",
    logoStyle: {
      backgroundColor: "transparent",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "React Native",
        path: "/assets/native.svg",
      },
      {
        id: 4,
        name: "Expo",
        path: "/assets/expo.svg",
      },
    ],
  },
  {
    title: "A-campo - Landing Page",
    desc: "A-campo is a beautiful landing page that showcases the beauty of nature and the great outdoors. It features stunning visuals and engaging content that captivates visitors and encourages them to explore the world around them.",
    subdesc:
      "Built with Next.js 14, React, TailwindCSS and TypeScript, A-campo is designed to provide a seamless user experience and ensure optimal performance.",
    href: "/public/assets/acampo.png",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/camp.png",
    logoStyle: {
      backgroundColor: "transparent",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Next.js",
        path: "/assets/next.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    duckScale: isSmall ? 0.5 : isMobile ? 1 : 1,
    duckPosition: isMobile ? [0, 0, 0] : [0, 0, 0.5],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "le wagon",
    pos: "lead teacher",
    duration: "2022 - present",
    title:
      "le wagon is a coding bootcamp that teaches students how to code from scratch. as a lead teacher, i am responsible for creating and delivering the curriculum, providing guidance and support to students, and helping them develop the skills they need to succeed in the tech industry.",
    icon: "/assets/lewagon.png"
  },
  {
    id: 2,
    name: "mobile world capital",
    pos: "mentor",
    duration: "2022 - present",
    title:
      "mobile world capital is a non-profit organization that promotes the digital transformation of society. as a mentor, i work with startups and entrepreneurs to help them develop their ideas and turn them into successful businesses.",
    icon: "/assets/mwc.png"
  },
  {
    id: 3,
    name: "metarina",
    pos: "junior full stack developer",
    duration: "2019 - 2020",
    title:
      "metarina is a state-of-the-art marina management software. as a junior full stack developer, i was responsible for developing new features, fixing bugs, and maintaining the codebase.",
    icon: "/assets/metarina.png"
  },
];
