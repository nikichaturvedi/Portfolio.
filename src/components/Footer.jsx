import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/nikichaturvedi",
      label: "GitHub",
      color: "group-hover:text-cyan-500",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nikitachaturvedi-a8bb90275",
      label: "LinkedIn",
      color: "group-hover:text-cyan-500",
    },
    {
      icon: Mail,
      href: "mailto:chaturvedinikita657@gmail.com",
      label: "Email",
      color: "group-hover:text-cyan-500",
    },
  ];

  return (
    <footer className="relative py-16 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Grid Background (Same as Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"
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
        <motion.div
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <Code2 className="w-6 h-6 text-cyan-500" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Let's <span className="text-cyan-500">Connect</span>
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md">
              Open to exciting opportunities and collaborations. Let's build
              something amazing together!
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3"
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + idx * 0.1,
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                  }}
                  whileHover={{ y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 transition-all duration-300 shadow-sm "
                  aria-label={social.label}
                >
                  <Icon
                    className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110"
                    strokeWidth={2}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm"
        >
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <span>© 2025 Portfolio</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              Crafted with
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-cyan-500 fill-red-500" />
              </motion.div>
              in India
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500">
            <Sparkles className="w-4 h-4 text-cyan-500" strokeWidth={2} />
            <span className="text-xs">Powered by React & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-2 bg-white dark:bg-slate-900 rounded-full border-2 border-cyan-500 dark:border-cyan-400 text-cyan-500 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-600 dark:hover:border-cyan-300 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
      </motion.button>
    </footer>
  );
};

export default Footer;
