import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { journeyData } from "../data/journeyData";

const Journey = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const colorMap = {
    cyan: {
      bg: "bg-cyan-500/10 dark:bg-cyan-500/5",
      border: "border-cyan-500/30",
      text: "text-cyan-600 dark:text-cyan-400",
      icon: "bg-cyan-500/20",
      line: "bg-gradient-to-b from-cyan-500/50 to-transparent",
    },
  };

  return (
    <section
      id="journey"
      className="relative py-6  px-4 overflow-hidden min-h-screen flex flex-col justify-center bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
            My <span className="text-cyan-500">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From interfaces to intelligent systems. A timeline of technical
            growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-cyan-500/10"></div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12">
            {journeyData.map((item, index) => {
              const colors = colorMap[item.color];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Icon Circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`absolute left-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${colors.icon} ${colors.border} border-2 flex items-center justify-center backdrop-blur-sm shadow-lg`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <item.icon
                        size={20}
                        className={`sm:w-6 sm:h-6 ${colors.text}`}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`${colors.bg} ${colors.border} border rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}
                  >
                    {/* Year Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                      className="flex items-center gap-3 mb-3"
                    >
                      <span
                        className={`px-3 py-1 text-xs sm:text-sm font-bold ${colors.text} ${colors.bg} rounded-full border ${colors.border}`}
                      >
                        {item.year}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.45 }}
                      className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2"
                    >
                      {item.title}
                    </motion.h3>

                    {/* Subtitle if exists */}
                    {item.subtitle && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + 0.5,
                        }}
                        className={`text-sm ${colors.text} font-semibold mb-2`}
                      >
                        {item.subtitle}
                      </motion.p>
                    )}

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.55 }}
                      className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4"
                    >
                      {item.description}
                    </motion.p>

                    {/* View Details Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedItem(item)}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold ${colors.text} hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-lg transition-all`}
                    >
                      View Details
                      <motion.div
                        animate={{ y: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <X size={20} className="text-slate-600 dark:text-slate-400" />
              </button>

              {/* Header */}
              <div
                className={`relative h-32 ${colorMap[selectedItem.color].icon} flex items-center justify-center overflow-hidden`}
              >
                <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white shadow-lg">
                  <selectedItem.icon size={36} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Year & Title */}
                <div className="mb-6">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-bold ${colorMap[selectedItem.color].text} ${colorMap[selectedItem.color].bg} rounded-full border ${colorMap[selectedItem.color].border} mb-3`}
                  >
                    {selectedItem.year}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {selectedItem.title}
                  </h2>
                  {selectedItem.subtitle && (
                    <p
                      className={`text-base ${colorMap[selectedItem.color].text} font-semibold`}
                    >
                      {selectedItem.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Key Details */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span
                      className={`w-1 h-5 ${colorMap[selectedItem.color].text.replace("text-", "bg-")} rounded`}
                    ></span>
                    Key Highlights
                  </h3>
                  <div className="space-y-2">
                    {selectedItem.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: idx * 0.1 + 0.1,
                            type: "spring",
                          }}
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colorMap[selectedItem.color].text.replace("text-", "bg-")}`}
                        ></motion.span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Journey;
