// ─── Portfolio Data ────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Update this file to change content across the entire site.

export const personalInfo = {
  name: 'Ho Dang Hoang',
  title: 'Full-Stack Developer',
  subtitle: 'Java · Spring Boot · ReactJS · Cloud-Native Systems',
  email: 'hodanghoang2003@gmail.com',
  phone: '0377 694 735',
  github: 'https://github.com/hdhoang03',
  linkedin: 'https://linkedin.com/in/dhoang03',
  cv: 'https://drive.google.com/file/d/1L5Fvcxa4tFR-oTBha3cdUtXxUSWx_iW2/view?usp=sharing',
  // Replace with your Cloudinary avatar URL after uploading
  avatar: 'https://res.cloudinary.com/demo/image/upload/v1/samples/people/smiling-man.jpg',
  location: 'Ho Chi Minh City, Vietnam',
  bio: 'Passionate backend developer with hands-on experience building scalable, production-grade systems using Spring Boot, microservices architecture, and cloud-native tools. I thrive at the intersection of performance engineering and clean architecture.',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frameworks',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Data JPA', 'ReactJS', 'Angular', 'Tailwind CSS'],
  },
  {
    title: 'Technologies',
    skills: ['RESTful APIs', 'JWT', 'OAuth2', 'WebSocket', 'Redis', 'SSE', 'RabbitMQ', 'SMTP'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL Server', 'PostgreSQL'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Postman', 'Cloudinary', 'Swagger/OpenAPI'],
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  type: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Viettel IDC',
    role: 'Network Operations Center (NOC) Intern',
    period: 'Apr 2026 – Present',
    location: 'Ho Chi Minh City, Vietnam',
    type: 'Internship',
    highlights: [
      'Network Monitoring & Ops Support: Monitor network infrastructure and system logs to detect anomalies.',
      'Assist with troubleshooting, DDoS mitigation, and server room support.',
    ],
  },
  {
    company: 'Hinnova Vietnam',
    role: 'Java Web Developer (Intern to Fresher)',
    period: 'Jun 2025 – Mar 2026',
    location: 'Ho Chi Minh City, Vietnam',
    type: 'Fresher',
    highlights: [
      'Backend Development: Developed and optimized RESTful APIs with Spring Boot for enterprise systems (Vinasoy, Military Hospital 7A); refactored legacy XML configs to Java-based, improving startup time and maintainability.',
      'Frontend & Full-Stack Delivery: Built responsive UIs from Figma designs using Angular (Party Congress Portal), optimized database queries and frontend rendering to reduce page load latency.',
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  title: string
  subtitle: string
  period: string
  type: string
  description: string
  highlights: string[]
  tech: string[]
  github?: string
  liveDemo?: string
  // Replace with Cloudinary project screenshot URLs
  image: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'ShortURL',
    subtitle: 'Vercel-Style URL Shortener & Analytics',
    period: 'Aug 2026',
    type: 'Full-stack',
    description: 'Designed and built a minimalist, high-performance URL shortening and analytics platform. Features a "developer-grade" Vercel/Linear-inspired UI, low-latency redirection cached in Redis, dynamic QR code generation, and deep click analytics (browser, OS, device, referrer).',
    highlights: [
      'High-Performance Redirects: Base62 slug generation with a low-latency Redis caching layer to handle high-traffic redirects and offload database queries.',
      'Deep Analytics Integration: Real-time tracking of visitor stats, generating visual insight timelines categorized by referrer, device class, operating system, and browser.',
      'Developer-Grade UX: Clean dark-mode interface featuring dynamic Google S2 domain favicon extraction, instant clipboard actions, and mobile-first card list layouts.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Redis', 'MySQL', 'Tailwind CSS', 'Docker', 'Vite', 'Swagger'],
    github: 'https://github.com/hdhoang03/shorturl-fe',
    image: 'https://res.cloudinary.com/dfsoeiui1/image/upload/v1788149435/Screenshot_2026-08-31_110916_hue77q.png',
    featured: true,
  },
  {
    title: 'Springtunes',
    subtitle: 'Full-Stack Event-Driven Music Streaming Platform',
    period: 'Oct 2025 – Mar 2026',
    type: 'Full-stack',
    description: 'Architected a production-grade, event-driven music streaming platform powered by Java 21 & Spring Boot 3.4. Features robust HttpOnly cookie authentication, IP-based Bucket4j rate limiting, asynchronous RabbitMQ message queues for play-count aggregation, targeted Redis caching, and real-time Server-Sent Events (SSE).',
    highlights: [
      'HttpOnly Cookie Security & Protection: Neutralized XSS risks by storing JWTs in HttpOnly/SameSite cookies with transparent CookieTokenFilter pipeline, coupled with Google OAuth2, reCAPTCHA v3, and Bucket4j IP rate limiting (10 req/min).',
      'Event-Driven Messaging & Real-Time Push: Decoupled high-volume play-count updates via RabbitMQ queues to prevent database locks under concurrent streams; pushed instant alerts via Server-Sent Events (SSE).',
      'Advanced Caching & Integration: Implemented Redis polymorphic deserialization (Jackson) with TTL-backed cache eviction, PayOS subscription gateway with daily schedulers, and Brevo REST API for transactional emails.',
    ],
    tech: ['Java 21', 'Spring Boot 3.4', 'RabbitMQ', 'Redis', 'Bucket4j', 'MySQL', 'React', 'TypeScript', 'HttpOnly Cookies', 'PayOS', 'SSE', 'Docker'],
    github: 'https://github.com/hdhoang03',
    liveDemo: 'https://spotify-clone-fe-chi.vercel.app/',
    // Replace with your Cloudinary image URL
    image: 'https://res.cloudinary.com/dfsoeiui1/image/upload/v1786686381/Screenshot_2026-08-14_124545_pytces.png',
    featured: true,
  },
  {
    title: 'Bluedit',
    subtitle: 'Reddit-style Forum Application',
    period: 'May 2025 – Aug 2025',
    type: 'Backend',
    description: 'A feature-rich community forum with real-time capabilities, built with a focus on security and performance.',
    highlights: [
      'Real-Time Communication: Built a low-latency private chat system using WebSocket and Redis Pub/Sub for smooth message broadcasting.',
      'Auth, Security & Moderation: Implemented secure signup with SMTP email verification and BCrypt/RBAC; built post voting, commenting, and admin moderation tools.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'WebSocket', 'Redis', 'JWT', 'SMTP', 'MySQL'],
    github: 'https://github.com/hdhoang03',
    image: '',
    featured: true,
  },
  {
    title: 'BookStore',
    subtitle: 'E-commerce Application',
    period: 'Mar 2025 – May 2025',
    type: 'Backend',
    description: 'A robust e-commerce backend with integrated payment gateway and high-traffic caching.',
    highlights: [
      'Payment & Core Features: Integrated VNPAY API for order payments with SMTP confirmations.',
      'Built RESTful APIs for catalog, cart, and order management with Redis caching to handle traffic spikes.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Redis', 'VNPAY API', 'SMTP', 'MySQL'],
    github: 'https://github.com/hdhoang03/bookstore',
    image: '',
    featured: false,
  },
  {
    title: 'Spring AI Chatbot',
    subtitle: 'AI-powered chatbot via Gemini API',
    period: '2025',
    type: 'AI / Backend',
    description: 'Built a personalized AI chatbot using Spring AI and Google Gemini API — configure the bot\'s persona and knowledge base to answer questions as any character you define.',
    highlights: [
      'Integrated Spring AI with Gemini API for streaming chat responses.',
      'Supports custom system prompts to define the bot\'s personality and knowledge scope.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring AI', 'Gemini API'],
    github: 'https://github.com/hdhoang03/spring-ai',
    image: '',
    featured: false,
  },
  {
    title: 'Python Shooter Game',
    subtitle: 'Top-down arcade game with mouse aiming',
    period: '2024',
    type: 'Game / Python',
    description: 'A top-down shooter where the player stands at the center of the screen, aims by rotating the gun with the mouse, and fights waves of enemies. Random item drops grant temporary buffs.',
    highlights: [
      'Mouse-controlled gun rotation for intuitive aiming and shooting mechanics.',
      'Random item drop system: speed, damage, and shield buffs spawn from defeated enemies.',
    ],
    tech: ['Python', 'Pygame'],
    github: 'https://github.com/hdhoang03/game',
    image: '',
    featured: false,
  },
  {
    title: 'WebSocket Chat App',
    subtitle: 'Real-time messenger-style mini app',
    period: '2024',
    type: 'Full-stack',
    description: 'A lightweight real-time chat application inspired by Messenger, built with WebSocket for instant bi-directional messaging.',
    highlights: [
      'Real-time messaging using WebSocket — zero page refresh required.',
      'Simple room-based chat architecture with user join/leave notifications.',
    ],
    tech: ['Java', 'Spring Boot', 'WebSocket', 'JavaScript'],
    github: 'https://github.com/hdhoang03/websocket-chatapp-mini',
    image: '',
    featured: false,
  },
  {
    title: 'Chennai House Price ML',
    subtitle: 'Machine learning price prediction model',
    period: '2024',
    type: 'Machine Learning',
    description: 'A machine learning model trained to predict house prices in Chennai based on property features such as area, location, and amenities.',
    highlights: [
      'Trained regression models (Linear, Random Forest) on Chennai housing dataset.',
      'Data preprocessing pipeline with feature encoding and normalization.',
    ],
    tech: ['Python', 'scikit-learn', 'pandas', 'numpy', 'Jupyter'],
    github: 'https://github.com/hdhoang03/prediction_chennai_house',
    image: '',
    featured: false,
  },
]

// ─── Education ────────────────────────────────────────────────────────────────

export interface Education {
  institution: string
  degree: string
  period: string
  location: string
  icon: string
}

export interface Certification {
  title: string
  issuer: string
  score?: string
  valid: string
  icon: string
}

export const educations: Education[] = [
  {
    institution: 'Sai Gon University (SGU)',
    degree: "Engineer's Degree in Information Technology",
    period: 'Sep 2021 – Jul 2026',
    location: 'Ho Chi Minh City, Vietnam',
    icon: '🎓',
  },
]

export const certifications: Certification[] = [
  {
    title: 'TOEIC Listening & Reading',
    issuer: 'ETS',
    score: '790/990',
    valid: 'Apr 2026 – Apr 2028',
    icon: '📜',
  },
]
