import { Icons } from "@/components/icons";
import { HomeIcon, Instagram, NotebookIcon } from "lucide-react";
import CareerTracker from "../../public/projects/career-tracker.png"
import DevInsight from "../../public/projects/dev-insight.png"
import EcoSort from "../../public/projects/eco-sort.png"
import JourneyGenie from "../../public/projects/journie-genie.jpg"
import LearnQuest from "../../public/projects/learn-quest.png"
import PennyPlanner from "../../public/projects/penny-planner.png"
import PrepVue from "../../public/projects/prep-vue.png"
import SmartLink from "../../public/projects/smart-link.png"
import Talkrr from "../../public/projects/talkrr.png"

export const DATA = {
    name: "Akshay Kumar Pandey",
    initials: "AKP",
    url: "https://akshay-kumar-pandey.vercel.app",
    location: "Delhi, India",
    locationLink: "https://maps.app.goo.gl/DqVDwGdHjZoHKgNaA",
    description:
        "A passionate programmer from India. I love to build new applications and learn new technologies on a daily basis.",
    summary:
        "I am a 4th-year BTech student at **_[VIT Bhopal University](/#education)_** with a deep passion for computers and software development. Since childhood, I have been fascinated by how applications work behind the scenes, which led me to pursue **_[Computer Science](/#education)_**. Along the way, I explored **_[web development](/#projects)_** and built multiple projects, gaining hands-on experience in **_[MERN Stack, Next.js, React Native, and Spring Boot](/#skills)_**. Through continuous learning and practical implementation, I have strengthened my expertise in building scalable and efficient applications.",
    avatarUrl: "/my-photo.jpg",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "ExpressJs",
        "React Native",
        "Prisma",
        "MongoDB",
        "Postgres",
        "Docker",
        "Java",
        "Spring Boot",
        "C++",
        "DSA",
        "GenAi",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/#projects", icon: NotebookIcon, label: "Projects" },
    ],
    contact: {
        email: "3551akshay@gmail.com",
        tel: "+919718906008",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/akshay090703",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/akshay-kumar-pandey/",
                icon: Icons.linkedin,

                navbar: true,
            },
            GeeksForGeeks: {
                name: "GeeksForGeeks",
                url: "https://www.geeksforgeeks.org/user/3551akshay/",
                icon: Icons.geeksforgeeks,
                navbar: true,
            },
            LeetCode: {
                name: "LeetCode",
                url: "https://leetcode.com/u/3551akshay/",
                icon: Icons.leetcode,

                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,

                navbar: false,
            },
            instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/kuchbhiakshay?igsh=MWh0OXB6b3htaTFsYw==",
                icon: Instagram,

                navbar: false,
            }
        },
    },

    work: [
        {
            company: "IRI EXPERTS Private Limited",
            href: "#",
            badges: [],
            location: "Remote",
            title: "React Developer Intern",
            logoUrl: "/iri-experts.jpeg",
            start: "March 2024",
            end: "June 2024",
            description:
                "Developed and maintained a responsive web application using React, improving user experience by 25%. Executed responsive design principles to ensure compatibility across 3+ device types, increasing mobile user traffic by 25%. Resolved 50+ bugs and issues reported by QA in React applications, achieving a 95% issue resolution rate before deadlines.",
        },
        {
            company: "SmartInternz",
            badges: [],
            href: "https://shopify.com",
            location: "Remote",
            title: "AI For Cybersecurity Externship",
            logoUrl: "/smartinternz.png",
            start: "August 2023",
            end: "November 2023",
            description:
                "Mastered identification and remediation of web vulnerabilities, enhancing system security by 30%. Designed an advanced malware detection system using prompt engineering and curated datasets, achieving a 45% increase in threat identification accuracy and a 30% reduction in false positives. Acquired proficiency in Python, prompt engineering, and web security tools improving skill set by 40%.",
        },
    ],
    education: [
        {
            school: "VIT Bhopal University",
            href: "https://vitbhopal.ac.in",
            degree: "CSE Core BTech",
            logoUrl: "/vit-bhopal.png",
            start: "2021",
            end: "2025",
        },
        {
            school: "Kendriya Vidyalaya Paschim Vihar",
            href: "https://kvsangathan.nic.in",
            degree: "Higher Secondary Certificate",
            logoUrl: "/kvpv.svg",
            start: "2020",
            end: "2021",
        },
        {
            school: "Kendriya Vidyalaya Paschim Vihar",
            href: "https://kvsangathan.nic.in",
            degree: "Secondary School Certificate",
            logoUrl: "/kvpv.svg",
            start: "2018",
            end: "2019",
        }
    ],
    projects: [
        {
            title: "DevInsight",
            href: "https://dev-insight-nextjs.vercel.app",
            dates: "Nov 2024 - Dec 2024",
            active: true,
            description:
                "**_DevInsight_** is a **Next.js** project that enables users to **chat with their GitHub repository using AI** and provides a feature to **generate meeting insights** if a team member misses a discussion.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Gemini API",
                "LangChain",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://dev-insight-nextjs.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/dev-insight-nextjs",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: DevInsight,
            video:
                "",
            type: "web"
        },
        {
            title: "SmartLink",
            href: "https://smart-link-react-java.vercel.app/",
            dates: "Oct 2024 - Nov 2024",
            active: true,
            description:
                "**_SmartLink_** is a **smart contact manager** for daily use, built with **React (TypeScript) for the frontend** and **Spring Boot for the backend**.",
            technologies: [
                "React.js",
                "Typescript",
                "PostgreSQL",
                "TailwindCSS",
                "Shadcn UI",
                "Spring Boot",
                "Gmail",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://smart-link-react-java.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/smart-link-react-java",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: SmartLink,
            video: "",
            type: "web"
        },
        {
            title: "Garbage Classification",
            href: "https://capstone-garbage-collection.vercel.app",
            dates: "Oct 2024 - Oct 2024",
            active: true,
            description:
                "**_EcoSort_** is a **waste classification solution** that categorizes materials into different types for better recycling and disposal.",
            technologies: [
                "Next.js",
                "Typescript",
                "MongoDB",
                "Shadcn UI",
                "TailwindCSS",
                "React Native",
                "Python",
                "Flask Api",
                "ML Model",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://capstone-garbage-collection.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/capstone-garbage-collection",
                    icon: <Icons.github className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/capstone-garbage-mobile-app",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: EcoSort,
            video: "",
            type: "web"
        },
        {
            title: "Talkrr",
            href: "https://github.com/akshay090703/talkrr-nextjs",
            dates: "Sep 2024 - Oct 2024",
            active: true,
            description:
                "**_Talkrr_** is a **real-time chat app** for friends, built with **Next.js** and **Express.js**",
            technologies: [
                "Next.js",
                "Javascript",
                "MongoDB",
                "TailwindCSS",
                "Shadcn UI",
                "ExpressJs",
                "Web Sockets",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://talkrr-nextjs.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/talkrr-nextjs",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: Talkrr,
            video:
                "",
            type: "web"
        },
        {
            title: "LearnQuest",
            href: "https://learn-quest-nextjs.vercel.app/",
            dates: "Aug 2024 - Sep 2024",
            active: true,
            description:
                "**_LearnQuest_** is a **Next.js** app that helps you **create full courses effortlessly using AI**.",
            technologies: [
                "Next.js",
                "Javascript",
                "Postgresql",
                "TailwindCSS",
                "Shadcn UI",
                "Gemini API",
                "GenAi",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://learn-quest-nextjs.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/talkrr-nextjs",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: LearnQuest,
            video:
                "",
            type: "web"
        },
        {
            title: "PennyPlanner",
            href: "https://github.com/akshay090703/penny-planner",
            dates: "Aug 2024 - Aug 2024",
            active: true,
            description:
                "**_PennyPlanner_** is a **React Native** mobile app that lets you **manage your finances** and **visualize your data through charts**.",
            technologies: [
                "React Native",
                "Expo",
                "Javascript",
                "Supabase"
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/penny-planner",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: PennyPlanner,
            video:
                "",
            type: "app"
        },
        {
            title: "JourneyGenie",
            href: "https://github.com/akshay090703/journey-genie",
            dates: "Jun 2024 - Jul 2024",
            active: true,
            description:
                "**_JourneyGenie_** is a **React Native** mobile app that helps you **create complete travel plans using AI**.",
            technologies: [
                "React Native",
                "Expo",
                "Javascript",
                "Firebase",
                "Gemini",
                "GenAi",
                "Google Maps Api"
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/journey-genie",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: JourneyGenie,
            video:
                "",
            type: "app"
        },
        {
            title: "PrepVue",
            href: "https://prep-vue-next-js.vercel.app/",
            dates: "May 2024 - Jun 2024",
            active: true,
            description:
                "**_PrepVue_** is an **AI-powered mock interview platform**, leveraging **Generative AI** and **Next.js** to simulate real interview experiences.",
            technologies: [
                "Nextjs",
                "Javascript",
                "Clerk Authentication",
                "Drizzle Orm",
                "Postgres",
                "Gemini",
                "GenAi",
                "Shadcn",
                "TailwindCSS"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://prep-vue-next-js.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/prepVue-nextJs",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: PrepVue,
            video:
                "",
            type: "web"
        },
        {
            title: "CareerTracker",
            href: "https://career-tracker-qndm.onrender.com",
            dates: "Feb 2024 - Mar 2024",
            active: true,
            description:
                "**_CareerTracker_** is a **full-stack MERN web app** designed to help you **track interviews, internships, and job applications**—organizing your career progress in one place.",
            technologies: [
                "ReactJs",
                "Javascript",
                "ExpressJs",
                "MongoDB",
                "Recharts",
                "Cloudinary",
                "TailwindCSS"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://career-tracker-qndm.onrender.com",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/akshay090703/career-tracker",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: CareerTracker,
            video:
                "",
            type: "web"
        },
    ],
    certifications: [
        {
            "title": "Microsoft Certified: Azure Administrator Associate",
            "href": "https://learn.microsoft.com/api/credentials/share/en-us/21BCE10150AkshayKumarPandey-0378/3C2FB819A29D9378?sharingId=39940BDFAB930EFA",
            "location": "Remote",
            "provider": "Microsoft",
            "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "start": "October 2023",
            "end": "October 2025",
            "description": "Earned Microsoft Azure Administrator certification with a 765/1000 score. Gained expertise in managing Azure identities, governance, networking, storage, and computing resources."
        },
        {
            "title": "Start the UX Design Process: Empathize, Define, and Ideate",
            "href": "https://coursera.org/share/565da0f139cf45e23ea7ab3e0fe6ecdc",
            "location": "Remote",
            "provider": "Coursera",
            "logoUrl": "https://seekvectorlogo.com/wp-content/uploads/2022/02/coursera-vector-logo-2022.png",
            "start": "December 2022",
            "end": "Lifetime",
            "description": "Completed a UX design course covering research, empathy mapping, and ideation techniques. Developed skills in user-centered design, problem identification, and brainstorming solutions."
        },
        {
            "title": "Build Wireframes and Low-Fidelity Prototypes",
            "href": "https://coursera.org/share/dae23e2559c07797f8b0783b60b0049d",
            "location": "Remote",
            "provider": "Coursera",
            "logoUrl": "https://seekvectorlogo.com/wp-content/uploads/2022/02/coursera-vector-logo-2022.png",
            "start": "December 2022",
            "end": "Lifetime",
            "description": "Learned to create wireframes and low-fidelity prototypes for UX design. Explored best practices for structuring user interfaces and improving usability through early-stage designs."
        },
        {
            "title": "Beginning C++ Programming - From Beginner to Beyond",
            "href": "/certificates/udemy-cpp.pdf",
            "location": "Remote",
            "provider": "Udemy",
            "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
            "start": "June 2023",
            "end": "Lifetime",
            "description": "Mastered C++ programming fundamentals, including object-oriented programming, memory management, and data structures. Built real-world applications and improved problem-solving skills."
        },
        {
            "title": "React - The Complete Guide 2025 (incl. Next.js, Redux)",
            "href": "/certificates/udemy-react.pdf",
            "location": "Remote",
            "provider": "Udemy",
            "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
            "start": "December 2023",
            "end": "Lifetime",
            "description": "Gained in-depth knowledge of React, Next.js, and Redux for modern web development. Implemented dynamic UI components, state management, and server-side rendering techniques."
        },
        {
            "title": "MERN 2025 Edition - MongoDB, Express, React and NodeJS",
            "href": "https://www.udemy.com/certificate/UC-ce21beca-0d9a-4e6f-a3e7-37ecd5e4b3f1/",
            "location": "Remote",
            "provider": "Udemy",
            "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
            "start": "January 2024",
            "end": "Lifetime",
            "description": "Completed an advanced MERN stack course covering full-stack web development. Learned backend APIs with Express, frontend integration with React, and database handling with MongoDB."
        },
        {
            "title": "Java Spring Framework 6 with Spring Boot 3",
            "href": "/certificates/udemy-spring-boot.pdf",
            "location": "Remote",
            "provider": "Udemy",
            "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
            "start": "August 2024",
            "end": "Lifetime",
            "description": "Acquired hands-on experience in building scalable Java applications with Spring Boot. Developed RESTful APIs, implemented microservices, and optimized backend architecture."
        },
        {
            "title": "Nptel Cloud Computing",
            "href": "/certificates/nptel.pdf",
            "location": "In Person",
            "provider": "Nptel",
            "logoUrl": "/nptel-logo.jpg",
            "start": "May 2024",
            "end": "Lifetime",
            "description": "Achieved 86% in an advanced Cloud Computing course covering virtualization, distributed computing, and cloud security. Explored cloud service models and deployment strategies."
        }
    ]
    ,
    extraCurricular: [
        {
            title: "Igniters Technical Co-Lead",
            dates: "April 2023 - April 2024",
            location: "Bhopal, Madhya Pradesh",
            description:
                "Led as Technical Co-Lead at Igniters Club, VIT Bhopal University, developing and maintaining the club website to achieve a 30% increase in engagement and 25% growth in profit.",
            image:
                "/igniters-logo.svg",
            mlh: "/vit-bhopal.png",
            links: [
                {
                    title: "Website Link",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://igniters-vitb.vercel.app"
                }
            ],
        },
    ],
};