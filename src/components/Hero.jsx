import {
  MapPin,
  Github,
  Linkedin,
  FileText,
  ArrowRight,
  MousePointer2,
  ExternalLink,
  Code2,
  Braces,
  Terminal,
  Sparkles,
  Layers,
  Zap,
  FileCode,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 lg:pt-2 flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* 1. Subtle Grid Background (Technical Look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Grid Fade Overlay - fades to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-75% via-slate-50/50 dark:via-slate-950/50 to-slate-50 dark:to-slate-950"></div>

      {/* 2. Top Glow Effect */}
      <div className="absolute left-0 top-0 h-96 w-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 2xl:px-1 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-4xl">
            {/* --- LINE 0: Status Badge --- */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 tracking-wide uppercase">
                Open to opportunities
              </span>
            </div>

            {/* --- LINE 1: NAME --- */}
            <div
              className="mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Nikita <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Chaturvedi
                </span>
              </h1>
            </div>

            {/* --- LINE 2: ROLE + LOCATION --- */}
            <div
              className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-8 text-lg md:text-2xl font-medium animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <span>React.js Frontend Developer</span>
              </div>

              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />

              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <MapPin size={20} className="text-cyan-500" />
                <span>Jaipur, India</span>
              </div>
            </div>

            {/* --- LINE 3: DESCRIPTION --- */}
            <p
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Passionate about building accessible, pixel-perfect user
              interfaces that blend art with code. I transform complex problems
              into simple, beautiful, and intuitive designs.
            </p>

            {/* --- LINE 4: BUTTONS --- */}
            <div
              className="flex flex-wrap items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {/* LinkedIn Button - High Emphasis */}
              <a
                href="https://www.linkedin.com/in/nikitachaturvedi-a8bb90275"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-900 dark:bg-white/70 text-white dark:text-slate-900 rounded-lg font-bold hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

              {/* GitHub Button - Outline */}
              <a
                href="https://github.com/nikichaturvedi"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-4 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 bg-transparent transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
              >
                <Github
                  size={20}
                  className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-500 transition-colors"
                />
                <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-cyan-500">
                  GitHub
                </span>
              </a>

              {/* Resume Button - Outline with Arrow */}
              <a
                href="/Nikitaa Chaturvedii resumee (3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-4 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
              >
                <span className="font-medium text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors">
                  Resume
                </span>
                <ArrowRight
                  size={20}
                  className="text-cyan-500 group-hover:text-white transition-all group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Side - Clean Modern Profile - Now shows on mobile too */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center lg:mt-0 mt-3"
          >
            {/* Soft Background Glow */}
            <motion.div
              className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] bg-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Profile Container */}
            <div className="relative">
              {/* Animated Border Ring */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600 rounded-full opacity-75 blur-sm"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main Profile Image */}
              <motion.div
                className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/nikitaphoto.jpeg"
                  alt="Nikita Chaturvedi"
                  className="w-full h-full object-cover"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
              </motion.div>

              {/* Bottom Badge - Role */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <div className="px-6 py-3 lg:px-8 lg:py-3.5 bg-cyan-600/70 rounded-2xl shadow-2xl">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                    <span className="text-white font-bold text-xs sm:text-sm">
                      React Developer
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Status Indicator */}
              <motion.div
                className="absolute top-8 -right-4"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2 px-3 py-2 lg:px-4 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-cyan-500/30">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-cyan-500"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <span className="text-slate-700 dark:text-slate-200 font-semibold text-xs">
                    Available
                  </span>
                </div>
              </motion.div>

              {/* Skill Tags Around Profile */}
              <motion.div
                className="absolute -left-6 top-[35%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="px-3 py-2 lg:px-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-500/20">
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs">
                    React.js
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-6 top-[45%]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="px-3 py-2 lg:px-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-500/20">
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs">
                    Nextjs
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-10 bottom-[25%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="px-3 py-2  lg:px-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-500/20">
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs">
                    UI/UX
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Tech Stack Icons - Only on very large screens */}
            {/* React Icon - Top Right */}
            <motion.div
              className="hidden xl:block absolute top-[12%] -right-14 p-3.5 bg-gradient-to-br from-cyan-500/15 to-cyan-600/25 dark:from-cyan-500/25 dark:to-cyan-600/35 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-500/40"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Braces
                className="w-7 h-7 text-cyan-600 dark:text-cyan-400"
                strokeWidth={2.5}
              />
            </motion.div>

            {/* Next.js Icon - Bottom Left */}
            <motion.div
              className="hidden xl:block absolute bottom-[15%] -left-14 p-3.5 bg-gradient-to-br from-slate-700/15 to-slate-800/25 dark:from-slate-600/25 dark:to-slate-700/35 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-600/40 dark:border-slate-500/40"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Layers
                className="w-7 h-7 text-slate-700 dark:text-slate-300"
                strokeWidth={2.5}
              />
            </motion.div>

            {/* Tailwind Icon - Top Left */}
            <motion.div
              className="hidden xl:block absolute top-[18%] -left-14 p-3.5 bg-gradient-to-br from-cyan-400/15 to-cyan-500/25 dark:from-cyan-400/25 dark:to-cyan-500/35 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-400/40"
              animate={{
                x: [0, 8, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <Palette
                className="w-7 h-7 text-cyan-600 dark:text-cyan-400"
                strokeWidth={2.5}
              />
            </motion.div>

            {/* TypeScript Icon - Bottom Right */}
            <motion.div
              className="hidden xl:block absolute bottom-[18%] -right-14 p-3.5 bg-gradient-to-br from-slate-600/15 to-slate-700/25 dark:from-slate-500/25 dark:to-slate-600/35 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-500/40 dark:border-slate-400/40"
              animate={{
                x: [0, -8, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <FileCode
                className="w-7 h-7 text-slate-700 dark:text-slate-300"
                strokeWidth={2.5}
              />
            </motion.div>

            {/* Small Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="hidden xl:block absolute w-2 h-2 rounded-full bg-cyan-500/40"
                style={{
                  top: `${15 + i * 12}%`,
                  left: i % 2 === 0 ? "5%" : "95%",
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.7, 0.2],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
