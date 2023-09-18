import {
    dots,
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
    iagit,
    threejs,
    resume,
    linkdin,
    htm,
    jukefi,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "Full-Stack Developent",
      icon: web,
    },
    {
      title: "React Native Developent",
      icon: mobile,
    },
    {
      title: "Computer Networking",
      icon: backend,
    },
    {
      title: "3D Designing",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "WebDev Intern",
      company_name: "E-Connect Solutions",
      icon: meta,
      link:"https://www.e-connectsolutions.com/",
      iconBg: "#ffffff",
      date: "September 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Tech Hack Coordinator",
      company_name: "IEEE",
      icon: tesla,
      link:"https://www.linkedin.com/company/ieee/mycompany/verification/",
      iconBg: "#ffffff",
      date: "July 2023 - Present",
      points: [
        "IEEE International Conference to be held in February 2024, will be a mega event which will see speakers, participants and professors from many foreign universities.",
        "Appointed as the cheif coordinator of Hack Department for the same and will be leading a team of volunteers and working with a budget of 30 Lakhs INR.",
      
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Resume",
      name: "https://drive.google.com/uc?export=download&id=16R1uZtoJL6gmy9LTG0-mKbi4y3JR5VY9",
      designation: "CFO",
      company: "Acme Co",
      image: resume,
    },
    {
      testimonial:
        "Github Profile",
      name: "https://github.com/ishanaudichya",
      designation: "COO",
      company: "DEF Corp",
      image: iagit,
    },
    {
      testimonial:
        "LinkedIn",
      name: "https://www.linkedin.com/in/ishan-audichya/",
      designation: "CTO",
      company: "456 Enterprises",
      image: linkdin,
    },
  ];
  
  const projects = [
    
    
    {
      name: "GitHub Buddy Glimpse",
      description:
        "GitHub Buddy Glimpse is a project website that allows you to easily view the entire GitHub profile of a user just by entering their username. It provides an efficient way to display the user's repositories and basic information in a user-friendly manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://githubbuddyglimpse.netlify.app",
    },
    
    {
      name: "AudiChat | Real-time Chatapp",
      description:
        "AudiChat is a real-time chat application that allows users to seamlessly communicate with each other. Whether you want to connect with friends, family, or colleagues, AudiChat provides a user-friendly interface for chatting, sharing images and videos",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "chatengineapi",  
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://audi-chat.netlify.app/",
    },
    {
      name: "Bake n Flake ",
      description:
        "Front end product website for a homemade bakery with beutifull UI/UX, designed from scratch and all resources made inhouse using photoshop. It has a complete classy and sophisticated design and is responsive for all devices",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://bnf-audichyaishan.netlify.app/",
    },{
      name: "Dotify | Img to Reacitve dots",
      description:
        "Dotify is a web-based project that harnesses the power of JavaScript to breathe life into your favorite images, allowing them to come alive as reactive dots that collide, merge, and leave behind an impression of the original image.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: dots,
      source_code_link: "https://reactive-dots-ishan.netlify.app/",
    },
    {
      name: "Hand Tracking Module | OpenCV",
      description:
        "Hand tracking and body tracking module that maps cardinal points using computer vision. Uses the mediapipe library for accurate results and recognition. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "mediapipe",
          color: "pink-text-gradient",
        },
        
      ],
      image: htm,
      source_code_link: "https://github.com/ishanaudichya/OpenCV",
    },{
    name: "JukeFi | Lofi Music Player",
      description:
        "JukeFi is a web-based music player designed specifically for playing soothing lofi songs. It provides a seamless and user-friendly experience for enjoying your favorite lofi tracks right in your browser.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: jukefi,
      source_code_link: "https://jukefi-audichyaishan.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };