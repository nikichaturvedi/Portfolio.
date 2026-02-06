import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Linkedin,
  Github,
  Sparkles,
  Code2, // Added this icon for the logo
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Journey", id: "journey" },
    { name: "Expertise", id: "expertise" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 pt-4 px-2 sm:px-4">
      <nav
        className={`transition-all duration-500 ease-out border ${
          scrolled
            ? "w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] rounded-xl sm:rounded-2xl bg-white/70 dark:bg-slate-900/70 border-white/20 dark:border-slate-700/50 backdrop-blur-xl"
            : "w-full bg-transparent border-transparent shadow-none backdrop-blur-none"
        }`}
      >
        <div className="relative flex justify-between items-center h-14 sm:h-16 px-3 sm:px-4 md:px-6">
          {/* --- STYLISH LOGO SECTION --- */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 relative z-20"
          >
            {/* Logo Icon Box */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 dark:from-cyan-400/10 dark:to-blue-400/10 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
              <Code2
                size={20}
                className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              />
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-800 dark:text-white leading-none">
                Port<span className="text-cyan-500">folio</span>
                <span className="text-cyan-500 animate-pulse">.</span>
              </span>
            </div>
          </a>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm mr-2 lg:mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 text-xs lg:text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden group ${
                    activeSection === link.id
                      ? "text-cyan-600 dark:text-cyan-400 border border-cyan-400/70 bg-cyan-500/10 "
                      : "text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 border-2 border-transparent"
                  }`}
                >
                  {/* Hover Light Effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />

                  {/* Text (Relative to appear above bg) */}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Social & Theme Buttons */}
            <div className="flex items-center gap-1 lg:gap-2">
              <NavIcon
                href="https://www.linkedin.com/in/nikitachaturvedi-a8bb90275"
                icon={
                  <Linkedin size={16} className="lg:w-[18px] lg:h-[18px]" />
                }
                label="LinkedIn"
              />
              <NavIcon
                href="https://github.com/nikichaturvedi"
                icon={<Github size={16} className="lg:w-[18px] lg:h-[18px]" />}
                label="GitHub"
              />

              <div className="w-px h-5 lg:h-6 bg-slate-300 dark:bg-slate-700 mx-1" />

              <button
                onClick={toggleTheme}
                className="relative p-2 lg:p-2.5 rounded-lg lg:rounded-xl bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:rotate-180 group"
              >
                <div
                  className={`transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
                >
                  {isDark ? (
                    <Sun size={16} className="lg:w-[18px] lg:h-[18px]" />
                  ) : (
                    <Moon size={16} className="lg:w-[18px] lg:h-[18px]" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isOpen ? (
              <X size={22} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={22} className="sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 flex flex-col gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-b-xl">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 border border-transparent ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
                    : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                <span
                  className={`font-medium ${activeSection === link.id ? "text-cyan-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-400"}`}
                >
                  {link.name}
                </span>
                {activeSection === link.id && (
                  <Sparkles
                    size={16}
                    className="text-cyan-500 animate-spin-slow"
                  />
                )}
              </a>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-4">
              <MobileSocialButton
                href="https://www.linkedin.com/in/nikitachaturvedi-a8bb90275"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
              <MobileSocialButton
                href="https://github.com/nikichaturvedi"
                icon={<Github size={20} />}
                label="GitHub"
              />
            </div>

            {/* Theme Toggle for Mobile */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all duration-300 group"
              >
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-white">
                  {isDark ? "Light Mode" : "Dark Mode"}
                </span>
                <div
                  className={`transition-transform duration-500 text-slate-600 dark:text-slate-300 group-hover:text-white ${
                    isDark ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

// --- SUB COMPONENTS FOR CLEAN CODE ---

const NavIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group p-2.5 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
  >
    {icon}
    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
      {label}
    </span>
  </a>
);

const MobileSocialButton = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-cyan-500 hover:text-white transition-all duration-300"
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default Navbar;
