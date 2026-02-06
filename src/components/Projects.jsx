import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Maximize2,
  Cpu,
  Globe,
  Layout,
  Database,
  X,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // --- SLIDER LOGIC ---
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length,
    );
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) handleNext();
    else if (info.offset.x > 50) handlePrev();
  };

  // 3D Card Positioning Logic
  const getCardStyle = (index) => {
    if (index === activeIndex) {
      return {
        zIndex: 30,
        opacity: 1,
        scale: 1,
        x: "0%",
        rotateY: 0,
        filter: "blur(0px)",
        display: "flex",
      };
    }
    if (
      index ===
      (activeIndex - 1 + projectsData.length) % projectsData.length
    ) {
      return {
        zIndex: 20,
        opacity: 0.5,
        scale: 0.85,
        x: "-60%",
        rotateY: 15,
        filter: "blur(4px)",
        display: "flex",
      };
    }
    if (index === (activeIndex + 1) % projectsData.length) {
      return {
        zIndex: 20,
        opacity: 0.5,
        scale: 0.85,
        x: "60%",
        rotateY: -15,
        filter: "blur(4px)",
        display: "flex",
      };
    }
    return { zIndex: 0, opacity: 0, scale: 0.5, x: "0%", display: "none" };
  };

  return (
    <section
      id="projects"
      className="relative px-4 overflow-hidden min-h-screen flex flex-col justify-center bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
            Featured <span className="text-cyan-500">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A curated selection of my technical work, ranging from full-stack
            applications to complex UI systems.
          </p>
        </div>

        {/* --- NEW: TOP PART (TECH STACK) --- */}
        <div className="flex justify-center mb-3 md:mb-16 animate-fade-in px-4">
          <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold">
              <Globe size={14} className="sm:w-4 sm:h-4" /> React & Next.js
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold">
              <Database size={14} className="sm:w-4 sm:h-4" /> Node & MongoDB
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold">
              <Layout size={14} className="sm:w-4 sm:h-4" /> Tailwind CSS
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold">
              <Cpu size={14} className="sm:w-4 sm:h-4" /> TypeScript
            </div>
          </div>
        </div>

        {/* --- 3D SLIDER CONTAINER --- */}
        <div className="relative h-[500px] sm:h-[520px] md:h-[550px] flex items-center justify-center perspective-1000 mb-4 md:mb-12">
          <AnimatePresence mode="popLayout">
            {projectsData.map((project, index) => {
              const style = getCardStyle(index);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={project.id}
                  initial={style}
                  animate={style}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    absolute w-[85%] sm:w-[80%] md:w-[450px] lg:w-[500px] 
                    h-fit top-0 bottom-0 m-auto
                    rounded-2xl sm:rounded-3xl border border-white/60 dark:border-slate-700/60
                    bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl
                    shadow-2xl dark:shadow-[0_0_50px_-10px_rgba(6,182,212,0.15)]
                    flex flex-col overflow-hidden cursor-grab active:cursor-grabbing
                    ${isActive ? "ring-1 ring-cyan-500/50" : ""}
                  `}
                >
                  {/* Card Banner */}
                  <div className=" py-4 md:py-6 relative bg-cyan-800/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <div className="relative z-10 bg-cyan-300/10 backdrop-blur-md p-2 rounded-xl sm:rounded-2xl border border-cyan-300/60 text-cyan-400 shadow-lg">
                      <project.icon
                        size={28}
                        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
                      />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/50 rounded-md border border-cyan-200 dark:border-cyan-900"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-1 sm:space-y-1.5">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-1.5 sm:gap-2 text-sm"
                        >
                          <span className="text-cyan-500 mt-0.5 sm:mt-1">
                            •
                          </span>
                          <span className="line-clamp-2">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons Section (Moved from mt-auto to simpler margin) */}
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800 flex gap-2 sm:gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-cyan-400/60 hover:bg-cyan-600 text-white text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 group"
                      >
                        <Maximize2
                          size={16}
                          className="sm:w-[18px] sm:h-[18px]"
                        />
                        <span>View Details</span>
                      </button>
                      <a
                        href={project.links.code}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 sm:p-3 rounded-lg sm:rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500 text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors bg-transparent"
                      >
                        <Github size={18} className="sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- SLIDER DOTS --- */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 md:mb-20">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                  : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-cyan-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* --- PROJECT DETAILS MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <X size={20} className="text-slate-600 dark:text-slate-400" />
              </button>

              {/* Header with Icon */}
              <div className="relative h-32 bg-cyan-800/40 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3de1f712_1px,transparent_1px),linear-gradient(to_bottom,#50d2fa12_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white shadow-lg">
                  <selectedProject.icon size={36} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Tech Stack */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/50 rounded-lg border border-cyan-200 dark:border-cyan-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-cyan-500 rounded"></span>
                    Key Highlights
                  </h3>
                  <div className="space-y-2">
                    {selectedProject.highlights
                      .slice(0, 4)
                      .map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="text-cyan-500 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {highlight}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500/30 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all text-sm"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-slate-300 dark:border-slate-700 hover:border-cyan-500 text-slate-700 dark:text-slate-300 hover:text-cyan-500 rounded-lg font-semibold transition-all text-sm"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
