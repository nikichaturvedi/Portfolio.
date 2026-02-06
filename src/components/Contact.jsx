import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Copy,
  Check,
  MapPin,
  Briefcase,
  Clock,
  Globe,
  Code2,
  Zap,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  // --- YOUR EMAIL IS DEFINED HERE ---
  const email = "chaturvedinikita657@gmail.com";

  // Optional: Update phone or remove if not needed
  const phone = "+91 98765 43210";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/nikichaturvedi",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/nikitachaturvedi-a8bb90275",
      label: "LinkedIn",
    },
    {
      icon: FileText,
      link: "/Nikitaa Chaturvedii resumee (3).pdf",
      label: "Resume",
    },
  ];

  const workInfo = [
    { icon: MapPin, text: "Jaipur, India", subtext: "Open to relocate" },
    {
      icon: Briefcase,
      text: "Full-time & Freelance",
      subtext: "Immediate joiner",
    },
    { icon: Clock, text: "Mon - Sat", subtext: "Flexible hours" },
    { icon: Globe, text: "Remote & Office", subtext: "Hybrid preferred" },
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24h", icon: Zap },
    { label: "Projects Completed", value: "15+", icon: Code2 },
    { label: "Happy Clients", value: "15+", icon: MessageCircle },
  ];

  return (
    <section
      id="contact"
      className="relative pt-10 pb-24 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="relative max-w-4xl w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6"
          >
            <motion.span
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Let's Work <span className="text-cyan-500">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto"
          >
            Open to remote, office, and hybrid roles. Ready to bring creativity
            and technical skills to your team.
          </motion.p>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-cyan-500" strokeWidth={2} />
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <button
            onClick={handleCopyEmail}
            className="group relative w-full py-3 px-4 md:px-8 bg-gradient-to-br from-white via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <div className="relative flex flex-row items-center justify-between gap-3 md:gap-6">
              <div className="flex-1 text-left min-w-0">
                <div className="text-[12px] text-cyan-500 dark:text-cyan-400 mb-1 uppercase tracking-widest">
                  Email Address
                </div>
                <div className="text-sm md:text-lg font-semibold text-slate-900 dark:text-white truncate">
                  {email}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 px-3 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 border-2 ${
                  isCopied
                    ? "border-green-500 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 "
                    : "border-cyan-500 text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-900/20 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 "
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isCopied ? (
                    <motion.div
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 md:gap-2"
                    >
                      <Check
                        className="w-3.5 h-3.5 md:w-4 md:h-4"
                        strokeWidth={2.5}
                      />
                      <span className="hidden sm:inline">Copied</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 md:gap-2"
                    >
                      <Copy
                        className="w-3.5 h-3.5 md:w-4 md:h-4"
                        strokeWidth={2.5}
                      />
                      <span className="hidden sm:inline">Copy</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </button>
        </motion.div>

        {/* Work Info - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {workInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-full border border-slate-100 dark:border-slate-800"
              >
                <Icon
                  className="w-5 h-5 text-cyan-500 flex-shrink-0"
                  strokeWidth={2}
                />
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {info.text}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {info.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Social & CTA */}
        <div className="text-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-3"
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7 + idx * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ y: -2 }}
                  className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Button - LINKED TO GMAIL HERE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <a
              href={`mailto:${email}?subject=Project Inquiry&body=Hi Nikita, I would like to discuss a project with you.`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600/70 hover:bg-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" strokeWidth={2} />
              Send a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
