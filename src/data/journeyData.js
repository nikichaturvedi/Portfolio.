import {
  Code2,
  Cpu,
  Database,
  TrendingUp,
  Brain,
  Network,
  LineChart,
} from "lucide-react";

export const journeyData = [
  {
    id: 1,
    year: "2022",
    title: "Foundations in Modern Web Development",
    description:
      "Started my journey with HTML5, CSS3, and vanilla JavaScript. Built responsive layouts and interactive UIs while learning fundamental web technologies and best practices.",
    icon: Code2,
    color: "cyan",
    details: [
      "Mastered HTML5 semantic elements and CSS3 animations",
      "Built responsive layouts with Flexbox and CSS Grid",
      "Created interactive UIs with vanilla JavaScript and DOM manipulation",
      "Learned Git version control and collaborative workflows",
      "Developed pixel-perfect designs from Figma mockups",
    ],
  },
  {
    id: 2,
    year: "2023",
    title: "React & Component-Based Architecture",
    description:
      "Transitioned to React ecosystem. Mastered component lifecycle, hooks, state management, and modern frontend development patterns. Built multiple production-ready applications.",
    icon: Cpu,
    color: "cyan",
    details: [
      "Mastered React hooks (useState, useEffect, useContext, custom hooks)",
      "Implemented state management with Redux and Zustand",
      "Built reusable component libraries with consistent design systems",
      "Optimized performance with React.memo, useMemo, and lazy loading",
      "Integrated REST APIs and handled asynchronous data flows",
    ],
  },
  {
    id: 3,
    year: "Early–Mid 2024",
    title: "Advanced Styling & Full-Stack Integration",
    subtitle: "Worinwell Internship + Independent Projects",
    description:
      "Mastered Tailwind CSS and modern styling approaches. Expanded to full-stack development, integrating frontend with backend APIs and authentication systems.",
    icon: Database,
    color: "cyan",
    details: [
      "Mastered Tailwind CSS utility-first approach and custom configurations",
      "Built complex UI components with Shadcn/ui and Radix UI primitives",
      "Integrated frontend with Node.js/Express backend services",
      "Implemented JWT authentication and protected route systems",
      "Worked with MongoDB, PostgreSQL for data persistence",
    ],
  },
  {
    id: 4,
    year: "Late 2024",
    title: "Next.js & Server-Side Rendering",
    subtitle: "Trade Amplification Project",
    description:
      "Moved to Next.js for server-side rendering, static generation, and optimized production apps. Built SEO-friendly, performant web applications with advanced routing.",
    icon: TrendingUp,
    color: "cyan",
    details: [
      "Mastered Next.js App Router and Server Components",
      "Implemented SSR, SSG, and ISR for optimal performance",
      "Built real-time dashboards with WebSocket integration",
      "Optimized Core Web Vitals (LCP, FID, CLS) for production apps",
      "Deployed to Vercel with CI/CD pipelines and edge functions",
    ],
  },
  {
    id: 5,
    year: "2025",
    title: "Advanced Animations & Micro-interactions",
    subtitle: "Elisa Assistant + Portfolio Projects",
    description:
      "Focused on creating delightful user experiences with Framer Motion. Built complex animations, gesture-based interactions, and smooth page transitions.",
    icon: Brain,
    color: "cyan",
    details: [
      "Mastered Framer Motion for complex animations and transitions",
      "Implemented drag gestures, spring physics, and scroll-triggered animations",
      "Built 3D carousel sliders and parallax effects",
      "Created smooth page transitions and loading states",
      "Optimized animation performance with layout animations and transforms",
    ],
  },
  {
    id: 6,
    year: "2025",
    title: "TypeScript & Enterprise-Grade Development",
    subtitle: "Qubitron Labs + Production Projects",
    description:
      "Adopted TypeScript for type-safe development. Implemented comprehensive testing strategies and built scalable, maintainable codebases for production applications.",
    icon: Network,
    color: "cyan",
    details: [
      "Migrated projects to TypeScript for type safety and better DX",
      "Implemented unit testing with Jest and React Testing Library",
      "Built end-to-end tests with Cypress for critical user flows",
      "Created reusable TypeScript utility types and generics",
      "Established ESLint, Prettier, and Husky pre-commit workflows",
    ],
  },
  {
    id: 7,
    year: "2025–2026",
    title: "Modern Frontend Architecture & Performance",
    description:
      "Building production-grade applications with modern architecture patterns. Focus on performance optimization, accessibility, and exceptional user experiences.",
    icon: LineChart,
    color: "cyan",
    details: [
      "Architecting scalable frontend applications with clean patterns",
      "Performance optimization: code splitting, lazy loading, caching strategies",
      "Web accessibility (WCAG 2.1) and semantic HTML practices",
      "Building design systems with Storybook and component documentation",
      "Modern state management with Zustand and React Query",
    ],
  },
];
