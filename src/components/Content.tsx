import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 py-24 overflow-hidden bg-[#030014]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-900/20 via-[#030014] to-[#030014] z-0" />
      <div className="absolute bottom-0 w-full h-[1px] bg-linear-to-r from-transparent via-sky-500/50 to-transparent z-0 opacity-50" />

      {/* Floating Glow Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-linear-to-r from-sky-500/20 to-purple-500/20 rounded-full blur-[200px] opacity-40 z-0 pointer-events-none"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-1px bg-purple-500 hidden sm:block"></span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Let’s <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400">Connect</span>
          </h2>
          <span className="w-8 h-1px bg-purple-500 hidden sm:block"></span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-12 leading-relaxed font-light"
        >
          Whether you have a question, an opportunity, or just want to say hi,
          my inbox is always open. Let’s build something
          <span className="text-sky-400 font-medium"> stellar </span> together.
        </motion.p>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 w-full"
        >
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/Kiruthicksan" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kiruthicksan-boopathi" },
            { icon: Mail, label: "Email", href: "mailto:kiruthicksanboopathi@gmail.com" },
            { icon: Globe, label: "Portfolio", href: "#" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("#") || item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel={item.href.startsWith("#") || item.href.startsWith("mailto") ? "" : "noreferrer"}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-500/50 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-linear-to-r from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon size={20} className="text-gray-400 group-hover:text-sky-400 transition-colors relative z-10" />
                <span className="text-gray-300 group-hover:text-white font-medium relative z-10">{item.label}</span>
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Final Line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-500 text-sm mt-32 z-10 text-center"
      >
        © {new Date().getFullYear()} Kiruthicksan. Designed & Built with <span className="text-sky-400">💙</span> using React, Tailwind & Framer Motion.
      </motion.p>
    </section>
  );
};

export default Contact;
