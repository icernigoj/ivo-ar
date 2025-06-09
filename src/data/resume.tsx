import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Iván Cernigoj",
  initials: "IC",
  url: "https://ivo.ar",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  CVLink:
    "https://docs.google.com/document/d/1_jEl91d9QYoijcrEh9fvuegtkXeBhQb3/edit?usp=sharing&ouid=115893443729996838769&rtpof=true&sd=true",
  description: "Passionate fullstack developer, entrepreneur and pianist.",
  summary:
    `👨‍💻 **Fullstack developer & tech lead** with **12+ years** building web and mobile applications that people actually use.

I enjoy working with diverse tech stacks - **React/React Native**, **Node.js**, **NestJS**, **Next.js** and **PHP/Symfony**. What really drives me is creating end-to-end solutions from scratch, with a strong focus on product design and working closely with clients to understand their needs.

🔧 **Recently, I've been working on some interesting challenges:**

- At **Colas**, I had the opportunity to lead a dev team maintaining 5 different operational applications - from supply chain management to public-facing construction site tracking. It taught me a lot about juggling multiple priorities and keeping critical systems running smoothly.

- Built **Greenny** from the ground up - a climate tech platform that helps companies track and reduce their CO2 footprint through AI-powered analytics and employee engagement via mobile app.

- Created the entire tech infrastructure for **FlyLooping**, a travel startup where users can book multi-city European tours with optimized flight combinations.

I'm always curious about new technologies, but I believe the best solutions come from understanding user needs first, then choosing the right tools for the job. I try to keep things pragmatic and team-oriented, focusing on delivering solutions that actually work for the people who use them.`,
  avatarUrl: "/ivan_cernigoj.jpg",
  skills: [
    {
      category: "Programming Languages",
      items: [
        "Javascript/Typescript",
        "PHP",
        "Swift",
        "Objective C",
        "Java",
        "Python",
        "C",
        "Shell Script",
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Node.js", "React", "React Native", "Next.js", "NestJS", "Symfony"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Docker",
        "Linux",
        "Terraform",
        "GitLab",
        "CI tools",
        "Fastlane",
        "Git",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SAP HANA"],
    },
    {
      category: "Other Technologies",
      items: ["RabbitMQ", "Stripe", "PayPal", "Web Scraping", "Elasticsearch"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    /*     { href: "/blog", icon: NotebookIcon, label: "Blog" },
     */
  ],
  contact: {
    email: "ivancerni@gmail.com",
    tel: "+33 07 66 60 24 11",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/ivo-github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/ivo-linkedin",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/ivo-x",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  hackathons: [],
  work: [
    {
      company: "COLAS",
      href: "https://www.colas.com/",
      badges: ["Freelance"],
      location: "France",
      title: "Tech Lead",
      logoUrl: "/colas.jpg",
      start: "February 2024",
      end: "Current",
      description:
        "Led a team of developers to **maintain and evolve 5 key operational softwares**:\n\n - Management of material supply requests\n - Waste management requests\n - HR management\n - Internal communication\n - Community-facing application to follow construction sites in the neighborhood",
      skills: [
        "React",
        "PHP",
        "Symfony",
        "Node.js",
        "React Native",
        "Azure",
        "Project Management",
        "Team Leadership",
      ],
    },
    {
      company: "Greenny",
      href: "#",
      badges: ["Co-Founder"],
      location: "France",
      title: "CTO - Full Stack Developer",
      logoUrl: "/greenny.webp",
      start: "June 2023",
      end: "February 2024",
      description:
        "**Co-founded and developed from scratch** a SaaS solution for companies to measure, reduce, and compensate their CO2 footprint.\n\n**Led the technical development** of:\n\n - AI-powered backoffice with nextjs\n - Employee-facing mobile application\n - Backend with nodejs\n - AWS infrastructure",
      skills: [
        "Next.js",
        "Node.js",
        "React Native",
        "AWS",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "CI/CD",
        "AI Integration",
      ],
    },
    {
      company: "Didomi",
      href: "https://www.didomi.io",
      badges: [],
      location: "France",
      title: "Full Stack Developer",
      logoUrl: "/didomi.png",
      start: "June 2022",
      end: "June 2023",
      description:
        "**Responsible for designing, developing and maintaining** the CMP module in an agile environment.\n\n**Worked on both**:\n\n - Front-end backoffice (React)\n - Back-end (nodejs, Feather.js with PostgreSQL)\n\n**Key projects**:\n\n - Self-Service module\n - CMP Config Generator\n - New CMP Console frontend\n - Multi regulation support",
      skills: [
        "React",
        "Node.js",
        "Feather.js",
        "PostgreSQL",
        "TypeScript",
        "Agile",
        "REST APIs",
      ],
    },
    {
      company: "Bouygues Immobilier",
      href: "https://www.bouygues-immobilier.com/",
      badges: ["Freelance"],
      location: "France",
      title: "Full Stack Engineer & Consultant",
      logoUrl: "/bi.png",
      start: "January 2021",
      end: "June 2022",
      description:
        "**Led the design, development, and maintenance** of comprehensive software solutions, utilizing a wide range of technologies.\n\n**Role encompassed**:\n\n - Software development\n - Offering technical advice\n - Preparing detailed proposals and contracts\n\n**Key achievements**:\n\n - Developed a **React Native application** for construction phase QA and contractor anomaly assignment\n - Created a **web-based KPIs Dashboard** with real-time data integration via websockets\n - Developed a **backoffice web application** integrated with CRM and various third-party systems",
      skills: [
        "React Native",
        "Node.js",
        "WebSocket",
        "CRM Integration",
        "Technical Writing",
        "Consulting",
      ],
    },
    {
      company: "Dashlane",
      href: "https://www.dashlane.com/",
      badges: ["Freelance"],
      location: "France",
      title: "Full Stack Engineer & Consultant",
      logoUrl: "/dashlane.jpg",
      start: "January 2021",
      end: "July 2021",
      description:
        "**Focused on designing, developing, and maintaining** the Dashlane's backoffice.\n\n**Key responsibilities**:\n\n - Handling infrastructure administration\n - Offering technical advice\n - Formulating detailed proposals for software development projects\n - Contributing to the development and enhancement of new features\n - Ensuring continuous system optimization",
      skills: [
        "Infrastructure Management",
        "System Design",
        "Technical Writing",
        "Feature Development",
        "System Optimization",
      ],
    },
    {
      company: "FlyLooping",
      href: "https://flylooping.com",
      badges: [],
      location: "France",
      title: "CTO - Full Stack Developer",
      logoUrl: "/flylooping.jpeg",
      start: "March 2018",
      end: "December 2021",
      description:
        "**Managed, designed and carried out** all FlyLooping tech projects.\n\n**Key developments**:\n\n - Website (Symfony)\n - Flight search engine (Node.js)\n - Mobile app (React Native)\n - Set up AWS infrastructure with CI/CD",
      skills: [
        "Symfony",
        "Node.js",
        "React Native",
        "AWS",
        "CI/CD",
        "System Architecture",
        "Technical Leadership",
      ],
    },
    {
      company: "VenTuring",
      href: "#",
      badges: ["Co-Founder"],
      location: "Argentina",
      title: "CTO - Full Stack Developer",
      logoUrl: "/venturing.png",
      start: "October 2015",
      end: "July 2021",
      description:
        "**Management and development** of IT projects based on various technologies (React, React Native, Symfony, Node.js, iOS, Android).\n\n**Notable projects**:\n\n - vLogistics\n - Billetera Swift\n - vPicking\n - vHumanize\n - vBrand\n - WebMed",
      skills: [
        "React",
        "React Native",
        "Symfony",
        "Node.js",
        "iOS",
        "Android",
        "Project Management",
        "Team Leadership",
      ],
    },
    {
      company: "Webnet",
      href: "https://www.webnet.fr",
      badges: [],
      location: "France",
      title: "Full Stack Developer",
      logoUrl: "/webnet.png",
      start: "May 2017",
      end: "January 2018",
      description:
        "**Design, development and support** of PHP Symfony/Drupal 8 based web applications integrated with RabbitMQ and Node.js.",
      skills: ["PHP", "Symfony", "Drupal 8", "RabbitMQ", "Node.js"],
    },
    {
      company: "Wirsolut",
      href: "#",
      badges: [],
      location: "Argentina and Mexico",
      title: "iOS - Full Stack Developer",
      logoUrl: "/wirsolut.jpeg",
      start: "October 2015",
      end: "May 2017",
      description:
        "**Design, development and support** of iOS applications for retail and entertainment industries.\n\n**Key achievement**: Developed multi-platform marketplace applications with PayPal, MercadoPago and FedEx integration.",
      skills: [
        "iOS",
        "Swift",
        "Objective-C",
        "PayPal Integration",
        "MercadoPago",
        "FedEx Integration",
      ],
    },
    {
      company: "Deloitte",
      href: "https://www2.deloitte.com",
      badges: [],
      location: "Argentina",
      title: "SAP HANA - Full Stack Developer",
      logoUrl: "/deloitte.jpeg",
      start: "October 2012",
      end: "October 2015",
      description:
        "**Design, development and support** of decision support systems and SAP HANA-based BI boards with Web and iOS native applications.\n\n**Additional responsibilities**:\n\n - Conducted SAP HANA training\n - Developed a web platform for sentimental analysis of social media data",
      skills: [
        "SAP HANA",
        "Business Intelligence",
        "iOS",
        "Web Development",
        "Training",
        "Sentiment Analysis",
      ],
    },
  ],
  education: [
    {
      school: "Universidad Tecnológica Nacional",
      href: "https://www.utn.edu.ar/es/",
      degree: "Software Engineering",
      logoUrl: "/utn.jpg",
      start: "2012",
      end: "2018",
    },
    {
      school: "Universidad Tecnológica Nacional",
      href: "https://www.utn.edu.ar/es/",
      degree: "Electronic Engineering",
      logoUrl: "/utn.jpg",
      start: "2010",
      end: "2012",
    },
    {
      school: "República Francesa High School",
      href: "https://www.linkedin.com/school/escuela-t%C3%A9cnica-n%C2%BA-28-rep%C3%BAblica-francesa/people/?originalSubdomain=ar",
      degree: "Technician in Electronics",
      logoUrl: "/rep-francesa.png",
      start: "2003",
      end: "2009",
    },
  ],
  projects: [
    {
      title: "Greenny",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Co-founded and developed from scratch a **SaaS** for companies to **measure**, **reduce** and **compensate** their CO2 footprint.\n\nIncludes a **backoffice powered by AI** to track CO2 footprint and a **mobile application** for employees to reduce and compensate their CO2 footprint.",
      technologies: [
        "Next.js",
        "Node.js",
        "React Native",
        "AWS",
        "AI integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://greenny.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "iOS App",
          href: "https://apps.apple.com/us/app/greenny/id6451487691",
          icon: <Icons.iOS className="size-3" />,
        },
        {
          type: "Android App",
          href: "https://play.google.com/store/apps/details?id=com.greenny",
          icon: <Icons.android className="size-3" />,
        },
      ],
      image: "/greenny.webp",
      video: "",
      youtubeVideo: "https://www.youtube.com/watch?v=2kfXieH9fwI",
    },
    {
      title: "Didomi CMP Platform",
      href: "https://www.didomi.io",
      dates: "2022 - 2023",
      active: false,
      description:
        "Developed and maintained **Didomi's Consent Management Platform (CMP)** serving millions of users across Europe.\n\n**Key features built**:\n\n- Self-Service configuration module\n- Multi-regulation compliance (GDPR, CCPA, LGPD)\n- Real-time consent analytics dashboard\n- Advanced CMP configuration generator",
      technologies: [
        "React",
        "Node.js",
        "Feather.js",
        "PostgreSQL",
        "TypeScript",
        "Elasticsearch",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.didomi.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/didomi.png",
      video: "",
    },
    {
      title: "Colas Project Management",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Led a team of developers to **maintain and evolve 5 key operational softwares**:\n\n - Management of material supply requests\n - Waste management requests\n - HR management\n - Internal communication\n - Community-facing application to follow construction sites in the neighborhood",
      technologies: [
        "React",
        "PHP Symfony",
        "Node.js",
        "react-native",
        "Azure",
      ],
      links: [],
      image: "/colas.jpg",
      video: "",
    },
    {
      title: "FlyLooping",
      href: "https://flylooping.com",
      dates: "2018 - 2021",
      active: false,
      description:
        "Developed from scratch all **flylooping.com** software, a travel startup allowing users to book multi-city Loop tours with a single click.\n\nKey components:\n\n - **Node.js**-based flight search and optimization engine\n - Website using **Symfony framework**\n - **React Native** mobile application\n - APIs with Swagger documentation\n - Comprehensive payment solution integrating **Stripe**, **PayPal**, and **Lydia**\n - **Amadeus GDS** integration for real-time flight data\n - **AWS**-based infrastructure with CI/CD pipeline",
      technologies: ["Symfony", "Node.js", "React Native", "AWS"],
      links: [
        {
          type: "Website",
          href: "https://flylooping.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "iOS App",
          href: "https://apps.apple.com/app/flylooping/id1522473601",
          icon: <Icons.iOS className="size-3" />,
        },
        {
          type: "Android App",
          href: "https://play.google.com/store/apps/details?id=com.flylooping",
          icon: <Icons.android className="size-3" />,
        },
      ],
      image: "/flylooping.jpeg",
      video: "",
    },
  ],
  languages: [
    {
      name: "French",
      level: "Fluent",
      image: "/fr.svg",
    },
    {
      name: "English",
      level: "Fluent",
      image: "/us.svg",
    },
    {
      name: "Spanish",
      level: "Native",
      image: "/ar.svg",
    },
  ],
  softSkills: [
    "Project Management",
    "Scrum Master",
    "Roadmap Drafting",
    "Contract Drafting",
    "Hiring Interviews",
  ],
  hobbies: ["Piano", "Guitar", "Reading", "Biking", "Swimming", "Football"],
} as const;