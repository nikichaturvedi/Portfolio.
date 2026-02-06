import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Code,
  Rocket,
} from "lucide-react";
import { experiences } from "../data/experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-4 sm:py-8  2xl:py-16 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
     

      <div className="max-w-6xl mx-auto relative z-10">
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
            <Briefcase className="inline-block w-4 h-4 mr-2 mb-1" />
            Career Journey
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Work{" "}
            <span className="text-cyan-500 relative">
              Experience
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
            My professional journey in web development and the amazing projects
            I've worked on
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Experience Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300"
              >
                {/* Top gradient bar */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-cyan-700 via-cyan-300 to-cyan-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  style={{ transformOrigin: "left" }}
                />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left side - Icon and Period */}
                    <div className="flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + 0.4,
                          type: "spring",
                          stiffness: 150,
                        }}
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 },
                        }}
                        className="w-10 h-10 border-2 border-cyan-500 dark:border-cyan-400 rounded-xl flex items-center justify-center bg-cyan-500/5 dark:bg-cyan-500/10 group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300"
                      >
                        <Rocket
                          className="w-5 h-5 text-cyan-600 dark:text-cyan-400"
                          strokeWidth={2}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="mt-4 text-center"
                      >
                        <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1 justify-center">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          {exp.duration}
                        </div>
                      </motion.div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="mb-4"
                      >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="flex items-center gap-1.5 font-semibold text-cyan-600 dark:text-cyan-400">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-600 dark:text-slate-400">
                            {exp.type}
                          </span>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5"
                      >
                        {exp.description}
                      </motion.p>

                      {/* Achievements */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                        className="mb-5"
                      >
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                          <Award className="w-4 h-4 text-cyan-500" />
                          Key Achievements
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: index * 0.1 + 0.8 + i * 0.05,
                              }}
                              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <TrendingUp className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 1 }}
                        className="pt-5 border-t border-slate-200 dark:border-slate-800"
                      >
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                          <Code className="w-4 h-4 text-cyan-500" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: index * 0.1 + 1.1 + i * 0.05,
                                type: "spring",
                                stiffness: 200,
                              }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors duration-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
