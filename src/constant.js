// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import bsaLogo from './assets/education_logo/bsa_logo.jpg';
import vpsLogo from './assets/education_logo/vps_logo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import mlcscoreLogo from './assets/work_logo/mlc_scorecard.png'
import pokemonLogo from './assets/work_logo/pokemon_finder.png'
import weatherappLogo from './assets/work_logo/weather_app.png'
import swiggycloneLogo from './assets/work_logo/swiggy_clone.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bsaLogo,
      school: "Integral University, Lucknow",
      date: "Aug 2023 - Present",
      grade: "73.2%",
      desc: "I'm currently pursuing a Bachelor’s degree in Computer Applications, where I’ve been building a strong foundation in computer science and software development. My coursework includes programming languages such as C, C++, and Java, as well as web technologies, data structures, databases, and operating systems. Through hands-on projects and academic learning, I’m developing practical skills in front-end and back-end development, problem-solving, and teamwork—preparing myself for a dynamic career in the tech industry.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "St. Clare's Convent School, Lucknow",
      date: "Apr 2022 - March 2023",
      grade: "77.4%", 
      desc: "I completed my class 12 education from St. Clare's Convent School, Lucknow, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Web Application.",
      degree: "CBSE(XII) - PCM with Web Application",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "St. Clare's Convent School, Lucknow",
      date: "Apr 2020 - March 2021",
      grade: "88.2%",
      desc: "I completed my class 10 education from St. Clare's Convent School, Lucknow, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Information Tech",
    },
  ];  
  
  export const projects = [
    {
      id: 0,
      title: "Swiggy Clone",
      description:
        "This Swiggy Clone is a full-featured online food ordering web application inspired by Swiggy. It allows users to browse nearby restaurants, explore menus, add items to cart, and securely authenticate using Firebase. The app provides a fast, responsive, and dynamic user experience using modern frontend tools and real-time data handling.",
      image: swiggycloneLogo,
      tags: ["React JS", "React-Redux", "React-Redux", "HTML", "CSS", "JavaScript",  "API"],
      github: "https://github.com/AbuTurab7/Swiggy-clone.git",
      webapp: "https://swiggy-clone-by-abu.netlify.app/",
    },
    {
      id: 1,
      title: "GitHub Profile Viewer",
      description:
        "A powerful and user-friendly application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/AbuTurab7/GitHub-Profile-Viewer.git",
      webapp: "https://github-profile-viewer-by-abu.netlify.app/",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "The Weather App is a responsive web application built using HTML, CSS, and JavaScript that allows users to check the current weather conditions of any city in the world. By integrating with a public weather API , the app fetches real-time weather data and displays it in a user-friendly interface.",
      image: weatherappLogo,
      tags: ["HTML", "CSS", "JavaScript", "API" ],
      github: "https://github.com/AbuTurab7/Weather-App.git",
      webapp: "https://weather-app-by-abu.netlify.app/",
    },
    {
      id: 3,
      title: "MLC Scorecard",
      description:
        "MLC Scorecard is a dynamic web application built using React that displays real-time scorecards and match details of the Major League Cricket (MLC). The application fetches data from a cricket API and presents users with up-to-date match scores, team lineups and other match information in a clean and responsive UI.",
      image:  mlcscoreLogo,
      tags: ["React JS", "CSS", "API", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://mlc-scorecard-abu.netlify.app/",
    },
    {
      id: 4,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["HTML", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://image-finder-by-abu.netlify.app/",
    },
    {
      id: 5,
      title: "Pokemon Finder",
      description:
        "The Pokémon Search App is a sleek and interactive React application that allows users to search for Pokémon by name and view detailed information fetched from the PokéAPI. It provides a fun and responsive interface to explore various Pokémon, their images, types, abilities, stats, and more.",
      image: pokemonLogo,
      tags: ["React JS", "CSS", "API", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://pokemon-finder-by-abuturab.netlify.app/",
    },
    
    
  ];  