import { motion } from "framer-motion";
import { Code2, Sparkles, Terminal, Database, Activity } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-[#030014]"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#030014] to-[#030014] z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-sky-900/10 rounded-full blur-[150px] z-0" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Abstract Tech Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative h-[400px] md:h-[500px] w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          {/* Animated circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-sky-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#030014]/50 to-[#030014] z-10" />

          {/* Floating cards */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[5%] z-20 flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center border border-sky-500/30">
              <Code2 className="text-sky-400" size={16} />
            </div>
            <span className="text-sm font-medium text-gray-200">Modular Architecture</span>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] right-[5%] z-20 flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <Terminal className="text-purple-400" size={16} />
            </div>
            <span className="text-sm font-medium text-gray-200">RESTful APIs</span>
          </motion.div>

          <motion.div 
            animate={{ y: [-15, 15, -15] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[25%] left-[10%] z-20 flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hidden sm:flex"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
               <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>
            <span className="text-sm font-medium text-gray-200">Authentication</span>
          </motion.div>

          <motion.div 
            animate={{ y: [12, -12, 12] }} 
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[8%] right-[25%] z-20 flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hidden md:flex"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
              <Database className="text-amber-400" size={16} />
            </div>
            <span className="text-sm font-medium text-gray-200">Scalable Databases</span>
          </motion.div>

          <motion.div 
            animate={{ y: [-8, 8, -8] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[35%] right-[15%] z-20 flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hidden lg:flex"
          >
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center border border-rose-500/30">
              <Activity className="text-rose-400" size={16} />
            </div>
            <span className="text-sm font-medium text-gray-200">Real-time Systems</span>
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 p-8 z-20">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="text-sky-400" size={20} />
              Architecting Systems
            </h3>
            <p className="text-sm text-gray-400">
              Building scalable infrastructure and fluid interfaces for modern web applications.
            </p>
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-20 flex flex-col"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-1px bg-sky-500 hidden sm:block"></span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-400">Me</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              I’m <span className="text-white font-medium">Kiruthicksan</span>, a
              Full-Stack Developer based in India. I specialize in the MERN stack and modern frontend frameworks, deeply passionate about crafting smooth, responsive, and
              meaningful digital experiences.
            </p>
            <p>
              My approach blends <span className="text-indigo-400 font-medium">aesthetic design</span> and{" "}
              <span className="text-sky-400 font-medium">robust engineering</span>, ensuring that every project I work on not only looks stunning but performs flawlessly under the hood.
            </p>
            <p>
              When I'm not writing code, you can find me exploring new technologies, playing games, or finding inspiration in world-building — constantly seeking new ways to bring imagination to life through interactivity.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white bg-white/5 border border-white/20 hover:bg-white/10 transition-all font-medium hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              Explore My Skills
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

