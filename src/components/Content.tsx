import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 py-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a1a] via-[#0f172a]/80 to-transparent dark:from-black/90 dark:via-[#0a0a1a]/70" />

      {/* Floating Glow Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-linear-to-r from-blue-500 to-fuchsia-500 rounded-full blur-[250px] opacity-20"
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

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-6 z-10 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]"
      >
        Let’s Connect
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 text-center max-w-2xl mb-10 leading-relaxed z-10"
      >
        Thanks for exploring my portfolio. I’m always open to new opportunities,
        collaborations, or creative discussions. Let’s build something
        <span className="text-blue-400 font-medium"> stellar</span> together.
      </motion.p>

      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 z-10"
      >
        <a
          href="https://github.com/Kiruthicksan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
        >
          <Github size={20} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kiruthicksan-boopathi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
        >
          <Linkedin size={20} /> LinkedIn
        </a>

        <a
          href="mailto:kiruthicksanboopathi@gmail.com"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
        >
          <Mail size={20} /> Email
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
        >
          <Globe size={20} /> Portfolio
        </a>
      </motion.div>

      {/* Final Line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-gray-500 text-sm mt-16 z-10"
      >
        © 2025 Kiruthicksan B — Designed & Built with 💙 using React + Tailwind + Framer
      </motion.p>
    </section>
  );
};

export default Contact;
