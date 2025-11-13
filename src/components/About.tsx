import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 overflow-hidden"
    >
      {/* Softer Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0f1f]/80 via-[#0a0a1a]/70 to-black/90 dark:from-[#0b0f1f]/90 dark:to-black/95" />

      {/* Floating Glow Blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-linear-to-r from-fuchsia-500/30 to-blue-500/30 rounded-full blur-[220px]"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left Side - Illustration / Avatar */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 md:w-1/2 flex justify-center mb-12 md:mb-0"
      >
         <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-blue-500/40 to-fuchsia-500/40 backdrop-blur-sm border border-white/10 shadow-[0_0_60px_rgba(56,189,248,0.4)] overflow-hidden">
          
        </div> 
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-20 md:w-1/2 text-center md:text-left"
      >
        {/* Glow layer behind text for contrast */}
        <div className="absolute -inset-6 bg-linear-to-t from-black/60 via-transparent to-transparent blur-2xl z-0" />

        <h2 className="relative z-10 text-4xl font-bold text-white mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]">
          About Me
        </h2>

        <p className="relative z-10 text-gray-100 leading-relaxed max-w-lg mx-auto md:mx-0 text-[1.05rem] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          I’m <span className="text-blue-400 font-medium">Kiruthicksan</span>, a
          Full-Stack Developer from India, passionate about crafting smooth, responsive, and
          meaningful digital experiences.  
          <br /> <br />
          My approach blends <span className="text-fuchsia-400">art</span> and{" "}
          <span className="text-blue-400">technology</span>, creating interfaces
          that feel immersive, elegant, and full of character.  
          <br /> <br />
          Beyond coding, I’m deeply inspired by movies, games, and world-building
          — always exploring new ways to bring imagination to life through design
          and interactivity.
        </p>

        <div className="mt-6 relative z-10">
          <a
            href="#skills"
            className="inline-block px-6 py-3 rounded-xl text-white bg-blue-500/90 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          >
            Explore My Skills
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
