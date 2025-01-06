export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1SeO-Rz8PSFr12t3rJ4dNNTBjArOzlonR/view?usp=sharing',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Swayam was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Swayam\'s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He\'s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can\'t say enough good things about Swayam. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Swayam was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'React Food Delivery App',
    desc: 'Built a modern food delivery app with a minimalist UI. Simplified add-to-cart and shopping cart functionalities for up to 50 items, product filtering for over 100 products, and detailed product pages.',
    subdesc: 'Created cart and checkout pages for seamless ordering and secure transactions. Made a contact page for real-time customer support. Used React.js and Redux Toolkit for efficient state management.',
    href: 'https://github.com/Swayam-code/Food-Delivery-App',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#FF4B4B',
      border: '0.2px solid #FF6B6B',
      boxShadow: '0px 0px 60px 0px #FF4B4B4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Redux Toolkit',
        path: '/assets/redux.svg',
      },
      {
        id: 3,
        name: 'ReactStrap',
        path: '/assets/reactstrap.svg',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/css.svg',
      },
    ],
  },
  {
    title: 'AI Resume Builder App',
    desc: 'Designed an AI-powered resume builder app using React with Vite for fast development and Tailwind CSS for styling, reducing build time by 30%.',
    subdesc: 'Implemented navigation with 10+ routes using React Router and various functionalities with React Hooks. Integrated Strapi CMS for managing up to 5,000 resume records and Gemini API for content generation.',
    href: 'https://github.com/Swayam-code/AI-Resume-Builder',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#4B4BFF',
      border: '0.2px solid #6B6BFF',
      boxShadow: '0px 0px 60px 0px #4B4BFF4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Vite',
        path: '/assets/vite.svg',
      },
      {
        id: 3,
        name: 'Tailwind CSS',
        path: '/assets/tailwind.svg',
      },
      {
        id: 4,
        name: 'Strapi',
        path: '/assets/strapi.svg',
      },
    ],
  },
  {
    title: 'React Furniture App',
    desc: 'Upgraded an online furniture store with React.js and Redux, providing a modern and interactive UI. Executed authentication with Auth0, supporting secure sign-up and login for up to 100+ users.',
    subdesc: 'Created comprehensive pages for services, products, and cart management. Ensured secure admin login functionality for CRUD operations on product data. Streamlined checkout process with payment gateway integration.',
    href: 'https://github.com/Swayam-code/Furniture-Store',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#8B4513',
      background: 'linear-gradient(0deg, #8B451350, #8B451350), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(139, 69, 19, 1)',
      boxShadow: '0px 0px 60px 0px rgba(139, 69, 19, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Redux',
        path: '/assets/redux.svg',
      },
      {
        id: 3,
        name: 'CSS',
        path: '/assets/css.svg',
      },
      {
        id: 4,
        name: 'Auth0',
        path: '/assets/auth0.svg',
      },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Smart India Hackathon 2024',
    pos: 'National Level Hackathon Finalist',
    duration: 'December 2024',
    title: 'Selected as Grand Finalist in Problem Statement 1760 among 100,000+ teams and 898,000+ students nationwide. Developed innovative solutions addressing critical national challenges.',
    icon: '/assets/hackathon.svg',
    animation: 'Victory'
  },
  {
    id: 2,
    name: 'Materials Dynamic Laboratory, IIT KGP',
    pos: 'Research Intern',
    duration: 'May 2024 - July 2024',
    title: 'Developed and implemented 4 ML models using Python, TensorFlow, and Scikit-Learn for structural analysis. Achieved 95%+ prediction accuracy for stress and strain patterns in 100+ railway bridges.',
    icon: '/assets/research-new.svg',
    animation: 'Clapping'
  },
  {
    id: 3,
    name: 'Open Source Contributions',
    pos: 'Student Developer',
    duration: 'May 2024',
    title: 'Actively contributed to 10+ open-source projects in GirlScript Summer of Code (GSSOC) and Social Summer of Code (SSOC) 2024. Enhanced collaboration skills and improved code quality across multiple projects.',
    icon: '/assets/opensource.svg',
    animation: 'Salute'
  }
];
