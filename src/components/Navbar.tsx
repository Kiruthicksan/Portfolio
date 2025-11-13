import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
          href="/"
        >
          Kiruthicksan<span className="text-blue-400">.</span>
        </motion.a>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <motion.li key={link} whileHover={{ scale: 1.1 }}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-xl bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors shadow-[0_0_10px_rgba(56,189,248,0.4)]"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
