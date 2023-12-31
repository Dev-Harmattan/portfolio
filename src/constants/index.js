import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  security,
  realEstate,
  marketStore,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'DevOps',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Back-end Development Mastery',
    icon: backend,
    iconBg: '#383E56',
    content:
      'I adeptly leverage Node.js and Python for server-side applications, tailoring their use to specific performance demands. My work ethos prioritizes security, scalability, and performance, forming the core of my development approach.',
  },
  {
    title: 'React Native Expertise',
    icon: mobile,
    iconBg: '#E6DEDD',
    content:
      'In the realm of React Native, I craft cross-platform mobile apps with native-like experiences. I optimize UI/UX, integrate APIs, and ensure performance, offering users an engaging journey. My proficiency in React Native drives innovative mobile solutions at the forefront of technology.',
  },
  {
    title: 'DevOps Mastery',
    icon: creator,
    iconBg: '#383E56',
    content:
      'Navigating cloud technologies, I employ deployment automation and seamless integration to harmonize iterative codebases. My mastery extends to cloud deployment, managing Linux instances, databases, security, and networking, with a focus on AWS.',
  },
  {
    title: 'Full-stack Proficiency',
    icon: web,
    iconBg: '#E6DEDD',
    content:
      'I excel in orchestrating comprehensive websites and apps, catering to diverse needs across front-end, back-end, and the web application spectrum. I expertly deploy and safeguard intricate web apps, ensuring security, SEO, performance, cross-browser compatibility, and more.',
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Real Estate Booking',
    description:
      'The real estate booking Web-based platform allows users to book a visit, cancel bookings, like preferred housing estates, add their new property, and contact.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node',
        color: 'green-text-gradient',
      },
      {
        name: 'Auth0',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'pink-text-gradient',
      },
    ],
    image: realEstate,
    source_code_link: 'https://github.com/Dev-Harmattan/Booking-client',
    source_code_link_two: 'https://github.com/Dev-Harmattan/Booking-API',
    projects_link: 'https://booking-client-visit.vercel.app/',
  },
  {
    name: 'Market Store and Admin',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'Next.js',
        color: 'black-text-gradient',
      },
      {
        name: 'clerk',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'black-text-gradient',
      },
      {
        name: 'MySql',
        color: 'green-text-gradient',
      },
    ],
    image: marketStore,
    source_code_link:
      'https://github.com/Dev-Harmattan/E-commerce-with-admin-cms',
    source_code_link_two: 'https://github.com/Dev-Harmattan/ecommerce-store',
    projects_link: 'https://ecommerce-admin-seven-vert.vercel.app/',
    projects_link_two:
      'https://ecommerce-store-fbace8kul-dev-harmattan.vercel.app/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

const socialMedias = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/Dev_harmattan',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ganiyu-sodiq/',
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedias,
};
