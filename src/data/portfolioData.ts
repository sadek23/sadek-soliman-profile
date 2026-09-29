export interface Project {
  id: string;
  title: string;
  category: 'Web Platform' | 'React Native Mobile' | 'Fintech' | 'E-Learning' | 'Logistics & Marketplace';
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  highlights: string[];
  role: string;
  featured?: boolean;
  accentColor: string;
  imageUrl?: string;
  playStoreUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: { name: string; level?: number; iconName?: string; isPrimary?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "SADEK SOLIMAN",
    title: "Senior Frontend Developer & React Native Specialist",
    tagline: "Building scalable web & mobile experiences with React, Next.js & TypeScript across Saudi Arabia, Jordan & Egypt.",
    location: "Alexandria, Egypt",
    phone: "+20 111 582 5405",
    whatsapp: "https://wa.me/201115825405",
    email: "sadeksoliman23@gmail.com",
    linkedin: "https://www.linkedin.com/in/sadek-soliman/",
    github: "https://github.com/sadeksoliman",
    yearsExperience: "6+",
    projectsCompleted: "15+",
    countriesServed: "3",
    summary: "Results-driven Frontend Developer and React Native Specialist with 6+ years of experience building scalable web and mobile applications for clients across Saudi Arabia, Jordan, and Egypt. Skilled in React.js, Next.js, React Native, and TypeScript, with experience integrating RESTful APIs, implementing responsive UI/UX designs, and working in Agile environments. Strong focus on clean architecture, performance optimization, and user experience."
  },

  metrics: [
    { label: "Years of Experience", value: "6+", description: "Delivering production-grade applications" },
    { label: "Regional Markets", value: "3", description: "Saudi Arabia, Jordan & Egypt" },
    { label: "Major Platforms", value: "15+", description: "Fintech, Healthcare, E-Commerce & Logistics" },
    { label: "Tech Specialization", value: "React / Next", description: "Modern React Ecosystem & Mobile" }
  ],

  skillCategories: [
    {
      categoryName: "Front-End & Mobile",
      description: "Core technologies for creating rich interactive UI/UX across Web & Native",
      skills: [
        { name: "React.js", level: 95, isPrimary: true },
        { name: "Next.js", level: 95, isPrimary: true },
        { name: "React Native", level: 90, isPrimary: true },
        { name: "TypeScript", level: 90, isPrimary: true },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Redux Toolkit", level: 88 },
        { name: "Zustand", level: 85 },
        { name: "React i18next", level: 90 },
        { name: "Monorepo / Turborepo", level: 82 },
        { name: "Performance Optimization", level: 92 }
      ]
    },
    {
      categoryName: "UI Frameworks & Styling",
      description: "Modern CSS tools and design system implementation",
      skills: [
        { name: "Tailwind CSS", level: 95, isPrimary: true },
        { name: "Shadcn/UI", level: 92, isPrimary: true },
        { name: "NextUI", level: 88 },
        { name: "Material UI", level: 85 },
        { name: "Ant Design", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "React Hook Form", level: 95 },
        { name: "Zod", level: 90 },
        { name: "Formik", level: 88 }
      ]
    },
    {
      categoryName: "Backend & APIs Integration",
      description: "Connecting frontend interfaces seamlessly with RESTful endpoints",
      skills: [
        { name: "RESTful APIs Integration", level: 95, isPrimary: true },
        { name: "@tanstack/react-query", level: 92, isPrimary: true },
        { name: "Axios", level: 95 },
        { name: "PHP (Laravel) Integration", level: 85 },
        { name: "Node.js / Express.js", level: 78 }
      ]
    },
    {
      categoryName: "Databases & Tools",
      description: "Data storage, state persistence, and development workflows",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 82 },
        { name: "Agile / Scrum / Kanban", level: 90 },
        { name: "Jira / Trello / Notion", level: 90 },
        { name: "Figma & Adobe XD", level: 85 }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "jeelpay",
      role: "Frontend Developer",
      company: "JeelPay (Remote)",
      location: "Saudi Arabia",
      period: "March 2025 - Present",
      isCurrent: true,
      summary: "Leading frontend development of student financial installment payment solutions.",
      bulletPoints: [
        "Developed and deployed the JeelPay platform for student installment payment solutions using Next.js.",
        "Participated in developing the Ajyal platform using the same technical standards and monorepo architecture.",
        "Integrated frontend applications with Laravel/PHP RESTful APIs.",
        "Applied Agile best practices to improve delivery speed and product quality."
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "PHP Laravel APIs", "Agile"]
    },
    {
      id: "tsg",
      role: "Frontend Developer",
      company: "TSG (Remote)",
      location: "Saudi Arabia",
      period: "August 2023 - October 2024",
      summary: "Engineered governmental digital transformation measurement software (Qiyas).",
      bulletPoints: [
        "Developed and implemented the Digital Transformation Measurement Project (Qiyas) for Saudi Arabia.",
        "Integrated React.js frontend systems with high-performance .NET RESTful APIs.",
        "Improved collaboration and workflow efficiency through Agile methodologies."
      ],
      technologies: ["React.js", "TypeScript", ".NET RESTful APIs", "Redux Toolkit", "Agile / Scrum"]
    },
    {
      id: "eduarabia",
      role: "Frontend Developer",
      company: "Eduarabia (Remote)",
      location: "Jordan",
      period: "November 2021 - August 2023",
      summary: "Built higher-education platforms and e-learning payment workflows.",
      bulletPoints: [
        "Developed e-learning platforms for multiple universities using React.js.",
        "Implemented online course purchase systems integrated with Laravel APIs.",
        "Enhanced platform performance and user experience quality across web devices."
      ],
      technologies: ["React.js", "JavaScript", "Laravel APIs", "Tailwind CSS", "E-Learning Payment Flow"]
    },
    {
      id: "hwaya",
      role: "Frontend Developer",
      company: "Hwaya Designs Hall",
      location: "Alexandria, Egypt",
      period: "November 2018 - January 2021",
      summary: "Delivered cross-platform mobile apps and financial dashboards.",
      bulletPoints: [
        "Developed mobile applications using React Native for iOS and Android.",
        "Built dashboards and financial management systems using React.js.",
        "Contributed to scalable frontend and backend solutions."
      ],
      technologies: ["React Native", "React.js", "Financial Dashboards", "RESTful APIs", "Redux"]
    },
    {
      id: "fixawy",
      role: "Full Stack Developer",
      company: "Fixawy LLC",
      location: "Alexandria, Egypt",
      period: "April 2018 - November 2018",
      summary: "Engineered web interfaces and backend service integrations.",
      bulletPoints: [
        "Developed full-stack web features and optimized performance for service solutions.",
        "Created compatible, cross-browser web interfaces and client-side modules."
      ],
      technologies: ["JavaScript", "HTML5/CSS3", "RESTful APIs", "Full Stack Dev"]
    },
    {
      id: "bdaiat",
      role: "Frontend Developer",
      company: "Bdaiat Company",
      location: "Alexandria, Egypt",
      period: "April 2018 - November 2018",
      summary: "Developed modern user interfaces, optimized landing pages, and responsive web components.",
      bulletPoints: [
        "Developed optimized landing pages and web interfaces using HTML5, CSS3, and JavaScript.",
        "Improved cross-browser compatibility and device rendering performance.",
        "Collaborated closely with design teams to produce modern, user-friendly interfaces."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "UI/UX Design", "Responsive Design"]
    }
  ] as Experience[],

  projects: [
    {
      id: "jeelpay-platform",
      title: "JeelPay Student Payment Platform",
      category: "Fintech",
      shortDescription: "Student installment payment system engineered with Next.js & Laravel backend.",
      fullDescription: "A comprehensive financial technology platform designed to streamline student installment payment solutions in Saudi Arabia. Built with high performance Next.js server components and responsive state management.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel API", "React Query"],
      highlights: [
        "Seamless installment calculation & checkout workflow",
        "High performance server-side rendering",
        "Arabic & English localization support"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-blue-600 to-cyan-500",
      imageUrl: "/images/jeelpay.png",
      liveUrl: "https://www.jeel.co/en"
    },
    {
      id: "qiyas-saudi",
      title: "Qiyas - Digital Transformation Platform",
      category: "Web Platform",
      shortDescription: "Governmental digital transformation measurement platform for Saudi Arabia.",
      fullDescription: "An enterprise-grade dashboard measurement system enabling government institutions to track and evaluate digital transformation progress across multiple indicators.",
      techStack: ["React.js", "TypeScript", ".NET APIs", "Redux Toolkit", "Ant Design"],
      highlights: [
        "Complex data metrics visualization",
        "Secure enterprise authentication",
        "High data throughput UI with .NET services"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-purple-600 to-indigo-500",
      imageUrl: "/images/qiyas.png",
      liveUrl: "https://dga.gov.sa/"
    },
    {
      id: "juicey-app",
      title: "Juicey E-Commerce Mobile App",
      category: "React Native Mobile",
      shortDescription: "Cross-platform mobile e-commerce app with integrated payment gateways.",
      fullDescription: "A feature-rich React Native mobile app featuring social authentication, live cart state, instant mobile payment gateway checkout, and push notifications.",
      techStack: ["React Native", "Redux", "Payment Gateways", "Social Auth", "REST API"],
      highlights: [
        "Native iOS & Android mobile performance",
        "Integrated payment gateways",
        "Social login (Google/Apple)"
      ],
      role: "Mobile App Developer",
      featured: true,
      accentColor: "from-amber-500 to-orange-600"
    },
    {
      id: "badr-store",
      title: "Badr Stationery E-Commerce (مكتبة البدر)",
      category: "Web Platform",
      shortDescription: "E-Commerce portal for stationery, office supplies & educational products.",
      fullDescription: "Comprehensive e-commerce online store platform for Badr Stationery enabling customers to browse extensive office & school supplies catalogs, add items to cart, checkout with secure payment options, and track orders.",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "REST API", "Payment Integration"],
      highlights: [
        "Product catalog search & category filtering",
        "Seamless cart state & online payment checkout",
        "Bilingual Arabic/English shopping experience"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-red-600 to-rose-500",
      imageUrl: "/images/badr-store.png",
      liveUrl: "https://badrstore.com/"
    },
    {
      id: "el3yada-healthcare",
      title: "El3yada Healthcare App (تطبيق العيادة)",
      category: "React Native Mobile",
      shortDescription: "Healthcare appointment booking application built with React Native & Laravel.",
      fullDescription: "An urgent-turnaround healthcare application built within 2 months, enabling patients to search doctors, book clinic consultations, and manage medical history.",
      techStack: ["React Native", "Laravel API", "Redux", "Firebase", "Geolocation"],
      highlights: [
        "Delivered full solution within 60 days",
        "Doctor appointment scheduling",
        "Real-time booking updates"
      ],
      role: "React Native Specialist",
      featured: true,
      accentColor: "from-emerald-500 to-teal-600",
      imageUrl: "/images/el3yada.png",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.el3yada"
    },
    {
      id: "eduarabia-main-platform",
      title: "Eduarabia Platform (شركة نتاجة العربية لتطوير التعليم)",
      category: "E-Learning",
      shortDescription: "Leading educational technology & e-learning development platform engineered with React and Next.js.",
      fullDescription: "Comprehensive educational platform developed for Eduarabia (نتاجة العربية لتطوير التعليم). Features interactive learning tools, course management systems, school project consulting, and digital education solutions.",
      techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "RESTful APIs"],
      highlights: [
        "Interactive e-learning & course portal architecture",
        "EdTech project planning & school management solutions",
        "Responsive, high-performance UI/UX design"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-blue-600 to-cyan-500",
      imageUrl: "/images/eduarabia-main.png",
      liveUrl: "https://www.eduarabia.com/"
    },
    {
      id: "eduarabia-platform",
      title: "Qassim University Portals (جامعة القصيم)",
      category: "E-Learning",
      shortDescription: "Higher education e-learning portals & course purchase systems for universities.",
      fullDescription: "Robust educational web applications developed for prominent universities including Qassim University. Facilitated interactive video course delivery, online student enrollments, and secure course payment processing.",
      techStack: ["React.js", "Tailwind CSS", "Laravel REST API", "React Hook Form"],
      highlights: [
        "Multi-university e-learning platform architecture",
        "Secure online course purchase & payment workflows",
        "High performance video streaming & student portals"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-emerald-600 to-teal-500",
      imageUrl: "/images/qassim-university.png",
      liveUrl: "https://www.qu.edu.sa/"
    },
    {
      id: "iau-university-platform",
      title: "Imam Abdulrahman Bin Faisal University (TEBx / طبx)",
      category: "E-Learning",
      shortDescription: "Medical & academic e-learning platform developed for Imam Abdulrahman Bin Faisal University.",
      fullDescription: "Specialized educational web platform engineered for health sciences and university students at Imam Abdulrahman Bin Faisal University (IAU), featuring online course modules, student portals, and course enrollment systems.",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "Laravel REST API"],
      highlights: [
        "Medical academic course management & video lectures",
        "Student registration & online course purchase workflows",
        "Responsive bilingual portal design"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-teal-500 to-cyan-600",
      imageUrl: "/images/iau-university.png",
      liveUrl: "https://www.iau.edu.sa/"
    },
    {
      id: "travensi",
      title: "Travensi Hotel Reservation Platform",
      category: "Web Platform",
      shortDescription: "Modern hotel booking & reservation portal with dynamic room filtering.",
      fullDescription: "An intuitive travel & hotel booking system featuring interactive availability calendars, rich image galleries, filterable amenity searches, and instant booking confirmation.",
      techStack: ["React.js", "Next.js", "Tailwind CSS", "REST API"],
      highlights: [
        "Interactive room search & dynamic filtering",
        "Responsive visual photo galleries",
        "Optimized booking engine UX"
      ],
      role: "Frontend Lead",
      featured: false,
      accentColor: "from-indigo-600 to-violet-500"
    },
    {
      id: "mshrai",
      title: "Mshrai Platform (منصة مشراي)",
      category: "Web Platform",
      shortDescription: "Smart auto buying & selling marketplace platform in Saudi Arabia.",
      fullDescription: "An intelligent automotive marketplace enabling users to buy and sell vehicles securely with integrated inspection services, live auctions, and seller/buyer dashboards.",
      techStack: ["React.js", "TypeScript", "Zustand", "Tailwind CSS", "REST API"],
      highlights: [
        "Smart auto buying & selling marketplace workflow",
        "Live auction bidding & real-time updates",
        "Seller & buyer role dashboards"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-teal-600 to-emerald-500",
      imageUrl: "/images/mshrai.png",
      liveUrl: "https://mshrai.com/"
    },
    {
      id: "resso",
      title: "Resso Auction Platform (منصة رسّو)",
      category: "Web Platform",
      shortDescription: "Live bidding & dynamic auction portals with real-time price updates.",
      fullDescription: "Interactive web auction platform featuring real-time bidding update timers, bid history tracking, seller dashboards, and item categorization.",
      techStack: ["React.js", "WebSocket / REST", "Zustand", "Tailwind CSS"],
      highlights: [
        "Real-time bid updates & countdown timers",
        "Seller & buyer role dashboards",
        "Sleek dark theme UI design"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-rose-500 to-pink-600",
      imageUrl: "/images/resso.png"
    },
    {
      id: "bdaiat-platform",
      title: "Bdaiat Tech Platform (شركة بدايات للتكنولوجيا)",
      category: "Web Platform",
      shortDescription: "Modern software agency web portal for web development, mobile apps & digital solutions.",
      fullDescription: "Official digital portal developed for Bdaiat Technology, showcasing web development, mobile application engineering, graphic design, and custom software solutions for enterprise clients.",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "UI/UX Design", "Responsive Layouts"],
      highlights: [
        "Modern responsive dark space-theme agency UI",
        "Services portfolio & quotation request workflows",
        "High-performance landing pages & cross-browser compatibility"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-blue-600 to-indigo-600",
      imageUrl: "/images/bdaiat-company.png",
      liveUrl: "https://www.bdaiat.com/"
    },
    {
      id: "hwaya-design-hall",
      title: "Hwaya Design Hall (شركة هواية للتصميم والمعمار)",
      category: "Web Platform",
      shortDescription: "Architectural design, interior decoration & engineering portfolio platform.",
      fullDescription: "Architectural and interior design agency web showcase developed for Hwaya Design Hall in Alexandria. Features project galleries, 3D architectural renders, client contact workflows, and responsive UI.",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "UI/UX Design", "Responsive Layouts"],
      highlights: [
        "Architectural portfolio & 3D render showcase",
        "Custom yellow-black modern branding & UI",
        "Client consultation & project inquiry forms"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-amber-500 to-yellow-600",
      imageUrl: "/images/hwaya-design.png",
      liveUrl: "https://hwayadesignhall.com/"
    },
    {
      id: "zos-hr-platform",
      title: "ZOS Integrated HR System (نظام ZOS للموارد البشرية)",
      category: "Web Platform",
      shortDescription: "Integrated enterprise HR system to streamline facility growth, payroll & employee management.",
      fullDescription: "Comprehensive cloud human resources management platform enabling Saudi enterprises and facilities to manage employee records, attendance tracking, payroll, performance evaluations, and request workflows.",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "RESTful APIs", "Dashboard Analytics"],
      highlights: [
        "Integrated HR & workforce growth management suite",
        "Employee records, leave & payroll management workflows",
        "Modern responsive teal dashboard interface"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-teal-500 to-emerald-600",
      imageUrl: "/images/zos-hr.png",
      liveUrl: "https://zos.com.sa/"
    },
    {
      id: "yehia-style-marketplace",
      title: "Yehia Style Salon & Barbershop Marketplace",
      category: "Logistics & Marketplace",
      shortDescription: "On-demand salon & barbershop booking marketplace with real-time stylist availability.",
      fullDescription: "Premium salon and barbershop booking marketplace platform enabling clients to find luxury barbers, book real-time reserved slots, select custom hair styling services, and receive instant booking confirmations.",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "REST API"],
      highlights: [
        "Real-time stylist availability & slot booking engine",
        "City & service filtering for top salons & beauty ateliers",
        "Bilingual Arabic/English UI with instant booking confirmation"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-amber-700 to-yellow-600",
      imageUrl: "/images/yehia-style.png",
      liveUrl: "https://yehia-style-app.pages.dev/"
    },
    {
      id: "please-app",
      title: "Please App - Cafe & Restaurant Ordering",
      category: "Logistics & Marketplace",
      shortDescription: "Online food and beverage ordering system for cafes & dining spots.",
      fullDescription: "Streamlined digital menu and table/delivery ordering system allowing customers to scan, browse cafe offerings, customize orders, and pay online.",
      techStack: ["React.js", "Tailwind CSS", "Node.js API", "PWA"],
      highlights: [
        "Digital interactive menu browsing",
        "Custom item modifiers & extra toppings",
        "Mobile-first PWA design"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-amber-600 to-yellow-500",
      imageUrl: "/images/please-app.png",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.please"
    },
    {
      id: "yourtrade-app",
      title: "Your Trade Mobile App (تطبيق Your Trade)",
      category: "React Native Mobile",
      shortDescription: "E-Commerce & trading mobile marketplace built with React Native.",
      fullDescription: "A modern mobile trading and marketplace application built for seamless commercial transactions, product showcases, interactive store management, and real-time user deals.",
      techStack: ["React Native", "TypeScript", "Redux Toolkit", "RESTful API", "Tailwind CSS"],
      highlights: [
        "Mobile-first trading & product marketplace UI",
        "Seamless deal cataloging & transaction workflow",
        "Real-time product updates & order tracking"
      ],
      role: "React Native Specialist",
      featured: true,
      accentColor: "from-amber-700 to-orange-600",
      imageUrl: "/images/yourtrade.png",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.yourtrade"
    },
    {
      id: "naqla-logistics",
      title: "Naqla Freight & Goods Transportation",
      category: "Logistics & Marketplace",
      shortDescription: "Logistics application connecting cargo senders with transportation fleets.",
      fullDescription: "Heavy transport logistics platform for tracking shipments, matching cargo owners with truck drivers, and calculating freight rates dynamically.",
      techStack: ["React Native", "React.js", "Map APIs", "Laravel REST API"],
      highlights: [
        "Live trip progress tracking",
        "Freight rate estimator",
        "Driver dispatch management"
      ],
      role: "Frontend / Mobile Dev",
      featured: false,
      accentColor: "from-cyan-600 to-teal-500"
    },
    {
      id: "fixawy-web-platform",
      title: "Fixawy Web Portal (منصة فيكساوي)",
      category: "Web Platform",
      shortDescription: "On-demand home services marketplace portal connecting clients with skilled technicians.",
      fullDescription: "Web platform enabling users to browse home service categories, book inspections & maintenance appointments, track service history, and access bilingual support.",
      techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Responsive UI"],
      highlights: [
        "Category-based home maintenance service booking",
        "Bilingual Arabic/English user experience",
        "Optimized landing pages & cross-browser compatibility"
      ],
      role: "Frontend / Full Stack Developer",
      featured: true,
      accentColor: "from-amber-500 to-yellow-500",
      imageUrl: "/images/fixawy-web.png",
      liveUrl: "https://fixawy.com/en"
    },
    {
      id: "fixawy-user-app",
      title: "Fixawy User App (تطبيق فيكساوي للعملاء)",
      category: "React Native Mobile",
      shortDescription: "On-demand home services & maintenance booking application for customers.",
      fullDescription: "Mobile application enabling customers to request home maintenance services, choose preferred technicians, track request status in real-time, and view transparent service pricing.",
      techStack: ["React Native", "React.js", "RESTful APIs", "Geolocation", "Redux"],
      highlights: [
        "Real-time maintenance service request workflow",
        "Live technician status & ETA tracking",
        "Integrated home maintenance service catalog"
      ],
      role: "Full Stack / Mobile Developer",
      featured: true,
      accentColor: "from-blue-600 to-indigo-600",
      imageUrl: "/images/fixawy-user.png",
      playStoreUrl: "https://play.google.com/store/search?q=fixawy&c=apps&hl=ar"
    },
    {
      id: "fixawy-tech-app",
      title: "Fixawy Technician App (تطبيق فيكساوي فني)",
      category: "React Native Mobile",
      shortDescription: "Dedicated mobile platform for maintenance technicians to manage client orders.",
      fullDescription: "Specialized mobile application designed for craftsmen and service technicians to receive instant job dispatches, accept customer maintenance requests, navigate to client locations, and track completed job earnings.",
      techStack: ["React Native", "Firebase Push Notifications", "Maps / GPS", "REST API", "Redux"],
      highlights: [
        "Instant technician job dispatch & push notifications",
        "Job acceptance, route navigation & status workflow",
        "Technician earnings & task performance dashboard"
      ],
      role: "Mobile App Developer",
      featured: true,
      accentColor: "from-amber-500 to-orange-600",
      imageUrl: "/images/fixawy-tech.png",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.fixawy.fixerapp&hl=ar"
    },
    {
      id: "helper-marketplace",
      title: "Helper Service Marketplace",
      category: "Logistics & Marketplace",
      shortDescription: "On-demand home services marketplace matching users with verified service providers.",
      fullDescription: "A multi-service platform where users can hire home maintenance professionals, view reviews, schedule visits, and manage payments securely.",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "RESTful API"],
      highlights: [
        "Category search & rating system",
        "Service booking timeline",
        "Provider profile verified badges"
      ],
      role: "Frontend Developer",
      featured: true,
      accentColor: "from-amber-500 to-yellow-500",
      imageUrl: "/images/helper.png",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.helper"
    }
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Science in Computer Science and Programming",
      institution: "Faculty of Science, Alexandria University",
      year: "July 2014",
      icon: "GraduationCap"
    },
    {
      degree: "CCNA Certification",
      institution: "Cisco Networking Academy",
      year: "October 2018",
      icon: "ShieldCheck"
    },
    {
      degree: "Web Designer Certification",
      institution: "Ramses Academy",
      year: "June 2013",
      icon: "Award"
    }
  ],

  languages: [
    { name: "Arabic", level: "Native", percentage: 100 },
    { name: "English", level: "Very Good", percentage: 85 }
  ]
};
