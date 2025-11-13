import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiSap,
  SiPostman,
  SiSocketdotio,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
  { name: "GSAP", icon: SiSap, color: "#88ce02" },
  { name: "PostMan", icon: SiPostman, color: "#FF6C37" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0f172a]/60 to-[#020617] dark:from-transparent dark:via-[#0a0a1a]/70 dark:to-black" />

      {/* Floating glow blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-linear-to-r from-blue-500 to-fuchsia-500 rounded-full blur-[200px] opacity-10"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -40, 40, 0],
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
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12 z-10 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-white/5 dark:bg-white/10 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all backdrop-blur-md"
            >
              <Icon
                size={60}
                style={{
                  color: skill.color,
                  filter: `drop-shadow(0 0 10px ${skill.color}80)`,
                }}
              />
              <p className="mt-3 text-white text-lg font-medium drop-shadow-[0_0_5px_rgba(0,0,0,0.6)]">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
