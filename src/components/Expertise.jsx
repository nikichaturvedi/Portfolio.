import { motion } from "framer-motion";
import { Code2, Palette, Layers, Zap } from "lucide-react";

const Expertise = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building modern, responsive, and interactive web applications with cutting-edge frameworks",
      highlights: [
        "Component-based architecture with React",
        "Single Page Applications (SPA)",
        "Responsive & Mobile-first design",
        "Modern JavaScript (ES6+)",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "Vite",
        "REST APIs",
        "Git/GitHub",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces with smooth animations and pixel-perfect designs",
      highlights: [
        "Pixel-perfect UI implementation",
        "Interactive animations & transitions",
        "Cross-browser compatibility",
        "Accessibility standards (WCAG)",
      ],
      technologies: [
        "Tailwind CSS",
        "Framer Motion",
        "CSS3",
        "Shadcn/ui",
        "Responsive Design",
        "Animations",
      ],
    },
    {
      icon: Layers,
      title: "State Management",
      description:
        "Managing complex application states efficiently with modern state management solutions",
      highlights: [
        "Efficient state updates & optimization",
        "Data persistence & caching",
        "Real-time data synchronization",
        "Performance-focused architecture",
      ],
      technologies: [
        "Zustand",
        "Local Storage",
        "Session Storage",
        "Custom Hooks",
        "Vercel",
        "npm/yarn",
      ],
    },
    {
      icon: Zap,
      title: "Performance & Tools",
      description:
        "Optimizing applications for lightning-fast load times and exceptional user experience",
      highlights: [
        "Fast load times under 2s",
        "SEO optimization & best practices",
        "API integration & testing",
        "Deployment automation",
      ],
      technologies: [
        "Code Splitting",
        "Lazy Loading",
        "SSR/SSG",
        "Optimization",
        "Caching",
        "Web Vitals",
        "VS Code",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="relative py-16 sm:py-20 px-4 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d412_1px,transparent_1px),linear-gradient(to_bottom,#06b6d412_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-semibold"
          >
            Skills & Expertise
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My{" "}
            <span className="text-cyan-500 relative">
              Expertise
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Specialized in modern web technologies with hands-on experience in
            building scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300  relative overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 mb-4 relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {/* Gradient background with border */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/50 dark:to-cyan-900/30 border-2 border-cyan-200 dark:border-cyan-800"
                        animate={{
                          borderColor: ["#1ec1d3", "#06b6d4", "#034b53"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Rotating glow ring */}
                      <motion.div
                        className="absolute -inset-2 rounded-xl"
                        style={{
                          background:
                            "conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.4), transparent)",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Pulsing glow effect */}
                      <motion.div
                        className="absolute -inset-1 rounded-xl bg-cyan-500/20 blur-lg"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Icon with float animation */}
                      <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon
                          className="text-cyan-600 dark:text-cyan-400"
                          size={26}
                          strokeWidth={2}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                      {skill.title}
                    </h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: "auto" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed"
                    >
                      {skill.description}
                    </motion.p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skill.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + i * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.15, y: -2 }}
                          className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className="pt-4 border-t border-slate-200 dark:border-slate-800"
                    >
                      <div className="space-y-2">
                        {skill.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + i * 0.1,
                            }}
                            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
