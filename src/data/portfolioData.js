// Centralized Portfolio Configuration
// Easily update your personal details, profile picture, skills, projects, and social links here.

export const portfolioData = {
personal: {
  name: "Pravinkumar S",
  role: "Full-Stack Web Developer",
  secondaryRole: "Freelance Software Developer",

  tagline:
    "I build scalable web applications with modern frontend and backend technologies, turning complex ideas into reliable, high-performance digital products.",

  freelanceStatus:
    "100% Available for Full-Time Roles & Freelance Projects",

  location: "Tamil Nadu, India",

  email: "rajpravinkumarselva@gmail.com",

  phone: "866762955",

  whatsapp: "https://wa.me/918667628955",

  github: "https://github.com/Pravinjdjd",
  linkedin: "https://www.linkedin.com/in/pravinkumar-s-pk/",

  avatarUrl: "/profile.jpg",
  resumeUrl: "#resume-modal",

  aboutBio: [
    "Hello! I'm a passionate Full-Stack Web Developer and Freelance Engineer dedicated to building robust, user-centric web software.",

    "With a strong foundation in Computer Science & Engineering, my technical expertise spans Java Enterprise (JEE), Spring Boot, JSP & Servlets, React.js, REST APIs, and MySQL relational databases.",

    "As a fresher and active freelancer, I bring 100% dedication, rapid problem-solving capabilities, clean architecture discipline, and an eager learning mindset to every software project."
  ]
},

  stats: [
    { label: "Full-Stack Projects Built", target: 3, suffix: "+" },
    { label: "Core Technologies Mastered", target: 10, suffix: "+" },
    { label: "Engineering Degree", target: 1, textDisplay: "B.E. CSE", suffix: "" },
    { label: "Freelance Availability", target: 100, suffix: "%" }
  ],

  // Architectural Tech Ecosystem Flow
  techEcosystem: {
    frontend: {
      title: "Frontend Architecture",
      icon: "Layout",
      color: "#00f2fe",
      description: "Modern, responsive, component-driven user interfaces built for lightning speed and smooth UX.",
      items: [
        { name: "React.js", level: "", desc: "Component architecture, hooks, state management & reactive UI flow" },
        { name: "JavaScript (ES6+)", level: "", desc: "Asynchronous JS, DOM manipulation, promises & modern standards" },
        { name: "HTML5 & CSS3", level: "", desc: "Semantic markup, CSS Grid/Flexbox, glassmorphic styling & responsive layouts" }
      ]
    },
    api: {
      title: "API & Middleware Layer",
      icon: "Network",
      color: "#38bdf8",
      description: "Secure, standardized RESTful endpoints connecting client interfaces with backend logic.",
      items: [
        { name: "REST APIs", level: "", desc: "Clean endpoint design, JSON data exchange, HTTP status handling & CORS" },
        { name: "JSP & Servlets", level: "", desc: "JEE server-side request dispatching, session handling & dynamic rendering" },
        { name: "Postman", level: "", desc: "API testing, payload verification, endpoint debugging & documentation" }
      ]
    },
    backend: {
      title: "Backend & Enterprise Java Layer",
      icon: "Server",
      color: "#8b5cf6",
      description: "Robust backend business logic, Java Enterprise standards, dependency injection, and microservices.",
      items: [
        { name: "Java (Core & Advanced)", level: "", desc: "OOP principles, collections framework, multithreading & clean code" },
        { name: "JEE (Java EE)", level: "", desc: "Enterprise Java standards, Servlets, JSP & web container deployment" },
        { name: "Spring Boot", level: "", desc: "MVC framework, dependency injection, Spring Data JPA & REST controllers" },
        { name: "Hibernate / JDBC", level: "", desc: "Database persistence, ORM mapping, SQL transactions & connection pools" }
      ]
    },
    database: {
      title: "Data Store Layer",
      icon: "Database",
      color: "#10b981",
      description: "Relational database schema modeling, queries, indexing, and data persistence.",
      items: [
        { name: "MySQL", level: "", desc: "Relational schema design, SQL queries, JOINs, indexing & foreign keys" },
        { name: "SQL", level: "", desc: "Data definition, manipulation queries, transaction integrity & normalization" }
      ]
    },
    tools: {
      title: "Developer Workstation",
      icon: "Wrench",
      color: "#f59e0b",
      description: "Essential toolchain for version control, collaboration, and rapid IDE development.",
      items: [
        { name: "Git & GitHub", level: "", desc: "Source control, branching workflows, repository management & commits" },
        { name: "VS Code", level: "", desc: "Primary code editor for React, frontend development & quick scripts" },
        { name: "IntelliJ IDEA", level: "", desc: "Enterprise Java & Spring Boot IDE for building backend modules" }
      ]
    }
  },

  // Projects Showcase
  projects: [
    {
      id: "quiz-system",
      title: "Student Quiz Management System",
      badge: "Full-Stack Application",
      subtitle: "Comprehensive automated testing & result analytics platform for educational institutions.",
      techStack: ["React.js", "Spring Boot", "MySQL", "REST API", "CSS3"],
      image: "images/ChatGPT Image Aug 16, 2026, 01_12_50 PM.png",
      github: "https://github.com/Pravinjdjd/Student_Quiz_Management_System",
      liveDemo: "https://learning-application-98xy.onrender.com",
      featured: true,
      description: "An end-to-end web system designed to streamline student quiz creation, timed examinations, automated grading, and instant performance analytics for instructors and students.",
      keyFeatures: [
        "Interactive student assessment dashboard with real-time quiz timer",
        "Spring Boot RESTful backend managing question banks & dynamic test generation",
        "MySQL relational schema for storing user profiles, test attempts, and detailed scores",
        "Role-based authorization structure for Admin/Instructor and Student users",
        "Automated score calculation and performance history charts"
      ],
      architecture: "React Single Page Application → REST API Controller → Spring Service Layer → Spring Data JPA → MySQL Database",
      databaseSchema: "Users (id, role, credentials) | Quizzes (id, title, duration) | Questions (id, text, options, answer) | Results (id, user_id, score, timestamp)"
    },
    {
      id: "food-delivery",
      title: "Food Delivery Web Application",
      badge: "JEE Web Application",
      subtitle: "Multi-restaurant menu browsing, interactive cart, and order workflow engine.",
      techStack: ["Java", "JEE", "JSP", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image: "images/food_delivery.png",
      github: "https://github.com/Pravinjdjd/Food_Delivery_FullStack",
      liveDemo: "https://food-delivery-fullstack-l3rz.onrender.com",
      featured: true,
      description: "A robust e-commerce food ordering platform built using Java Enterprise (JEE) technologies (Servlets, JSP, JDBC) with a custom responsive frontend and MySQL database.",
      keyFeatures: [
        "User registration, authentication, and secure session management",
        "Dynamic restaurant listing and categorized menu item discovery",
        "Interactive client-side cart management (add, update quantities, remove items)",
        "Servlet-driven checkout pipeline calculating order subtotals and delivery taxes",
        "MySQL order tracking database mapping customers, line items, and fulfillment statuses"
      ],
      architecture: "HTML/CSS/JS View → Servlet Controller Dispatcher → Java DAO / JDBC Layer → MySQL Connection Pool",
      databaseSchema: "Customers (id, name, email, address) | Restaurants (id, name, cuisine) | MenuItems (id, price, item_name) | Orders (id, total, status)"
    },
    {
      id: "billing-management",
      title: "Billing Management System",
      badge: "Frontend Project",
      subtitle: "Modern billing and sales management interface for managing products, customers, invoices, and transactions.",
     
      techStack: ["HTML5", "CSS3", "JavaScript", "React.js"],
      image: "images/billing.png",
      github: "https://github.com/Pravinjdjd/Billing",
      liveDemo: "https://pravinjdjd.github.io/Billing/index.html",
      eatured: true,
      description: "A responsive billing management web application built using React.js, HTML5, CSS3, and JavaScript. The application provides an easy-to-use interface for managing products, creating bills, calculating totals, tracking sales, and maintaining customer billing information",
      keyFeatures: [
    "Product management interface with product name, category, price, and stock details",
    "Dynamic billing system with automatic quantity, subtotal, discount, tax, and total calculations",
    "Customer management interface for adding and maintaining customer information",
    "Interactive invoice generation with complete billing and payment details",
    "Search and filter functionality for quickly finding products and customers",
    "Sales dashboard displaying total bills, revenue, products, and transaction statistics",
    "Cart-based billing system allowing users to add, remove, and update product quantities",
    "Responsive and user-friendly interface optimized for desktop, tablet, and mobile devices",
    "JavaScript-based local data handling for managing billing and transaction information"
  ],
    architecture: "React.js Components → JavaScript Business Logic → Local Storage",
  databaseSchema: "Products (id, name, category, price, stock) | Customers (id, name, email, phone, address) | Bills (id, customer_id, bill_date, subtotal, tax, discount, total_amount, payment_method) | BillItems (id, bill_id, product_id, quantity, price, item_total)"
    }
  ],

  // Developer Journey Milestones
  journey: [
    {
      step: "01",
      title: "Computer Science Engineering",
      institution: "V.S.B. College of Engineering Technical Campus (Anna University)",
      period: "Graduated Graduate",
      description: "Built strong foundations in Algorithms, Data Structures, DBMS, Object-Oriented Software Engineering, and Computer Networks."
    },
    {
      step: "02",
      title: "Full-Stack & JEE Mastery",
      institution: "Self-Driven & Professional Specialization",
      period: "Hands-on Technical Practice",
      description: "Mastered frontend development with React/JS and enterprise backend architecture using Java, JEE, Servlets, JSP, Spring Boot, REST APIs, and MySQL."
    },
    {
      step: "03",
      title: "End-to-End Enterprise Projects",
      institution: "Portfolio & Freelance Projects",
      period: "Production Applications",
      description: "Architected and engineered multiple full-stack systems including Quiz Platforms, Food Delivery applications, and EV Charging slot tracking tools."
    },
    {
      step: "04",
      title: "100% Freelancing & Open to Roles",
      institution: "Open to Work / Client Collaborations",
      period: "Present",
      description: "Actively undertaking freelance software projects and seeking full-time Software Developer / Full-Stack Web Developer roles in progressive tech companies."
    }
  ],

     
  // Education Details
  education: {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    college: "V.S.B. College of Engineering Technical Campus",
    university: "Anna University",
    highlights: [
      "Strong coursework in Object Oriented Programming (Java), Database Systems (SQL), Web Technology & Data Structures",
      "Engaged in hands-on software development projects, technical workshops, and coding challenges",
      "Consistent academic record with focus on scalable web application design"
    ]
  }
};
