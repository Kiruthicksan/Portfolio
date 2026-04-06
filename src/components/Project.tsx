import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import creativearts from "../assets/creativearts.png";
import perspecto from "../assets/perspecto.png";
import uraiayadal from "../assets/uraiyadal.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  code: string;
}

const projects: Project[] = [
  {
    title: "CreativeArts",
    description:
      "A full-stack e-commerce marketplace built for discovering, purchasing, and downloading premium digital assets like 3D models, textures, and digital art. Features secure payments, user wishlists, and real-time inventory management.",
    image: creativearts,
    tech: ["React", "Express", "MongoDb", "TailwindCSS"],
    live: "https://creativearts6.netlify.app",
    code: "https://github.com/Kiruthicksan/Creative-Arts",
  },
  {
    title: "Perspecto",
    description:
      "A personal blog platform where users can read articles, engage through comments, and explore AI-assisted content generation features. Focuses on minimal design and readable typography.",
    image: perspecto,
    tech: ["TypeScript", "React", "Express", "MongoDb", "AI"],
    live: "#",
    code: "#",
  },
  {
    title: "Uraiyadal",
    description:
      "A real-time messaging platform using Socket.IO for bidirectional communication, with user presence tracking, typing indicators, and a fully responsive interface.",
    image: uraiayadal,
    tech: ["React", "TypeScript", "Socket.IO", "Express", "MongoDb"],
    live: "#",
    code: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center py-24 px-6 md:px-12 overflow-hidden bg-[#030014]"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/10 via-[#030014] to-[#030014] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/10 rounded-full blur-[200px] z-0 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-1px bg-sky-500 hidden sm:block"></span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
             Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-400">Works</span>
          </h2>
          <span className="w-12 h-1px bg-sky-500 hidden sm:block"></span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          A selection of my recent projects, showcasing my expertise in building scalable, full-stack applications.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative flex flex-col bg-white/[0.03] backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.1)]"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-white/5">
              <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#030014] via-transparent to-transparent opacity-80 z-10" />
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col flex-grow relative z-20 -mt-6 rounded-t-3xl bg-linear-to-b from-[#030014]/90 to-[#030014]">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-sky-500/30 group-hover:text-sky-300 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-sky-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-[1.02]"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-white/20 text-gray-300 hover:text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

