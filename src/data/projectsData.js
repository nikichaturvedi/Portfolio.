import {
  FolderGit2,
  Layers,
  Code2,
  Sparkles,
  Layout,
  Database,
  UtensilsCrossed, // Imported for the food project
} from "lucide-react";

export const projectsData = [
  {
    id: 1,
    title: "School Management System",
    shortDesc: "Complete platform for digitizing school operations.",
    fullDesc:
      "A comprehensive dashboard designed for educational institutions. It handles student admissions, teacher scheduling, grade reporting, and fee management in one unified interface. The system reduces administrative workload by 40%.",
    tech: ["React", "Tailwind CSS", "Zustand"],
    highlights: [
      "Built responsive admin dashboard with React hooks",
      "Implemented state management using Zustand for better performance",
      "Designed modern UI components with Tailwind CSS utilities",
      "Created role-based authentication system",
      "Real-time attendance tracking with live updates",
    ],
    features: [
      "Role-based access (Admin, Teacher, Student)",
      "Real-time attendance tracking",
      "Automated Report Card Generation",
      "Fee payment gateway integration",
    ],
    links: { demo: "#", code: "#" },
    icon: FolderGit2,
  },
  {
    id: 2,
    title: "Real Estate Marketplace",
    shortDesc: "Property listing engine with advanced search & maps.",
    fullDesc:
      "A modern real estate platform allowing users to buy, sell, and rent properties. Features an interactive map search, virtual tours, and a mortgage calculator. Built with SEO best practices and fast loading times.",
    tech: ["Next.js", "Tailwind CSS", "Shadcn/ui"],
    highlights: [
      "Server-side rendering with Next.js for optimal SEO",
      "Reusable UI components using Shadcn/ui component library",
      "Advanced filtering system with dynamic search parameters",
      "Responsive design with mobile-first approach using Tailwind",
      "Image optimization and lazy loading for faster load times",
    ],
    features: [
      "Interactive Map View (Leaflet/Google Maps)",
      "Advanced filtering (Price, Location, Amenities)",
      "User dashboard for listing management",
      "Virtual tour video player",
    ],
    links: { demo: "#", code: "#" },
    icon: Layers,
  },
  {
    id: 3,
    title: "CRM Analytics Dashboard",
    shortDesc: "Data visualization tool for customer management.",
    fullDesc:
      "A high-performance CRM tool focusing on data visualization. It helps sales teams track leads, forecast revenue, and manage customer interactions through a drag-and-drop Kanban board.",
    tech: ["React", "Tailwind CSS", "Zustand", "Shadcn/ui"],
    highlights: [
      "Interactive data visualizations with custom React components",
      "Global state management with Zustand for efficient updates",
      "Drag-and-drop interface with smooth animations",
      "Accessible UI components built with Shadcn/ui",
      "Dark mode support with Tailwind CSS theme switching",
    ],
    features: [
      "Drag-and-drop Lead Pipeline (Kanban)",
      "Real-time sales forecasting charts",
      "Automated email triggers",
      "Dark/Light mode support",
    ],
    links: { demo: "#", code: "#" },
    icon: Code2,
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    shortDesc: "Real-time chat interface powered by LLMs.",
    fullDesc:
      "A smart chat application that integrates with OpenAI APIs to provide intelligent responses. It supports context-aware conversations, code syntax highlighting, and chat history persistence.",
    tech: ["React", "Tailwind CSS", "Zustand"],
    highlights: [
      "Real-time streaming chat interface with React",
      "Zustand for managing chat history and user preferences",
      "Responsive chat UI designed with Tailwind CSS",
      "Custom markdown renderer for formatted responses",
      "Optimized re-renders for smooth typing animation",
    ],
    features: [
      "Streaming text responses (Typewriter effect)",
      "Code block syntax highlighting",
      "Chat history saved in local storage",
      "Voice-to-text input support",
    ],
    links: { demo: "#", code: "#" },
    icon: Sparkles,
  },
  {
    id: 5,
    title: "TaskMaster Pro",
    shortDesc: "Collaborative project management tool similar to Trello.",
    fullDesc:
      "A drag-and-drop project management tool that allows teams to collaborate in real-time. Features include custom workspaces, label management, and deadline notifications.",
    tech: ["React", "Tailwind CSS", "Shadcn/ui", "Zustand"],
    highlights: [
      "Drag-and-drop task cards with smooth animations",
      "Zustand for managing workspace and task states",
      "Beautiful UI components using Shadcn/ui library",
      "Responsive board layout with Tailwind Grid system",
      "Real-time updates using optimistic UI patterns",
    ],
    features: [
      "Drag-and-drop Task Cards",
      "Real-time Multi-user updates",
      "Customizable Workspaces",
      "Activity Log & Notifications",
    ],
    links: { demo: "#", code: "#" },
    icon: Layout,
  },
  {
    id: 6,
    title: "FlavorFusion Food App",
    shortDesc: "Delicious food ordering platform with dynamic cart.",
    fullDesc:
      "A visually appealing food delivery application that offers a seamless browsing and ordering experience. Users can filter dishes by category, customize orders, and manage their cart in real-time with instant price calculation.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    highlights: [
      "Implemented dynamic cart functionality with Redux state management",
      "Designed appetizing UI cards using Tailwind CSS grid system",
      "Added category filtering for easy menu navigation",
      "Responsive layout optimized for mobile ordering experience",
      "Integrated smooth hover effects and page transitions",
    ],
    features: [
      "Real-time Cart Management",
      "Menu Category Filtering (Veg/Non-Veg)",
      "Order Summary & Total Calculation",
      "Responsive Mobile Design",
    ],
    links: { demo: "#", code: "#" },
    icon: UtensilsCrossed,
  },
];
