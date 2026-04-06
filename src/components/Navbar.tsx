import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4"
    >
      <div className="w-full max-w-4xl flex justify-between items-center py-3 px-6 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
          href="/"
        >
          Kiruthicksan<span className="text-sky-400">.</span>
        </motion.a>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <motion.li key={link} whileHover={{ y: -2 }}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors after:content-[''] after:absolute after:h-[2px] after:bg-sky-400 after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:transition-all after:duration-300"
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
          whileHover={{ scale: 1.1 }}
          className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
