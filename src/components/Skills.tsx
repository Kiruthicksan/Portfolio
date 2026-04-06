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
  { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 px-6 xl:px-0 overflow-hidden bg-[#030014]"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#030014] to-[#030014] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] z-0 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-1px bg-purple-500 hidden sm:block"></span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-sky-400">Toolkit</span>
          </h2>
          <span className="w-12 h-1px bg-purple-500 hidden sm:block"></span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          A tailored selection of technologies I use to bring digital products to life.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 backdrop-blur-sm cursor-default"
            >
              {/* Subtle hover gradient background */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color}50 0%, transparent 70%)` 
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center transform transition-transform duration-300 group-hover:-translate-y-2">
                <div 
                  className="p-4 rounded-2xl bg-white/5 mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:bg-white/10 transition-colors"
                >
                  <Icon
                    size={48}
                    style={{
                      color: skill.color,
                      filter: `drop-shadow(0 0 15px ${skill.color}40)`,
                    }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-gray-300 font-medium tracking-wide group-hover:text-white transition-colors">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

