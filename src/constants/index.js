import { tcs , percept} from "../assets/images";
import {
    weather,
    cplus,
    c,
    springboot,
    mysql,
    java,
    // car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    // threads,
    house,

} from "../assets/icons";


export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cplus,
        name: "C ++",
        type: "Programming Language",
    },
    {
        imageUrl: springboot,
        name: "Springboot",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
  
   
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

  

];

export const experiences = [
    {
        title: "Process Associate",
        company_name: "Tata Consultancy Services",
        icon: tcs,
        iconBg: "#fffdd0",
        date: "August 2020 - September 2021",
        points: [
            "Worked with a team of 20 members in streamlining the customs Imports and Exports process, ensuring accurate validation of shipments",
            "Precise calculation of custom duties & tariffs throughout the shipment life cycle",
            "Conducted inventory audits & utilized DHL Import Database for process monitoring & reporting & adherence to industry standards.",
        ],
    },
    {
        title: "Java Developer Intern",
        company_name: "Percept Infosystem Consultants",
        icon: percept,
        iconBg: "#ffcc99",
        date: "January 2022 - March 2022",
        points: [
            "Designing, maintaining & implementing the code using design pattern like MVC in an ongoing project called Inventory Management System.",
            "Used Bootstrap, JSP for frontend, tomcat as application server,JDBC for DB connectivity, MySQL as database.",
            "Implementing Git for version control.",
            
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ranirangari',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rani-rangari/',
    }
];

export const projects = [
    {
        iconUrl: house,
        theme: 'btn-back-red',
        name: 'Accommodation Companion',
        description: 'Developed a web application that finds rooms to the users as per their needs..',
        link: 'https://github.com/ranirangari/Accomodation-companion',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-green',
        name: 'Weather Application',
        description: 'This Weather App fetches fetches daily forecast, provides current location-based search. ',
        link: 'https://github.com/ranirangari/weather-app',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-blue',
        name: 'Sorting Visualizer',
        description: 'It is used to visualize the sorting algorithms such as Merge Sort, Bubble Sort, Insertion Sort, Quick Sort',
        link: 'https://github.com/ranirangari/visualizer',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-pink',
        name: 'Dijikstra Algorithm',
        description: 'It is used to find shortest path between two given points',
        link: 'https://github.com/ranirangari/dijikstra-algo',
    },
 
];