import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import tomeshelf from "../assets/tomeshelf.png";
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
    title: "TomeShelf",
    description:
      "A full-stack bookstore application for manga and comic enthusiasts, built with the MERN stack and designed with a clean, smooth user experience.",
    image: tomeshelf,
    tech: ["React", "Express", "MongoDb", "JavaScript", "TailWind"],
    live: "https://tomeshelf.netlify.app/",
    code: "#",
  },
  {
    title: "Perspecto",
    description:
      "A personal blog platform where users can read articles, engage through comments, and explore AI-assisted content generation features.",
    image: perspecto,
    tech: ["TypeScript", "React", "Express", "MongoDb", "AI"],
    live: "#",
    code: "#",
  },
  {
    title: "Uraiyadal",
    description:
      "A MERN + TypeScript real-time messaging platform using Socket.IO for bidirectional communication, with user presence tracking and a fully responsive UI built with Tailwind CSS.",
    image: uraiayadal,
    tech: ["React", "TypeScript", "Socket", "Express", "MongoDb", "Node"],
    live: "#",
    code: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a1a] via-[#0f172a] to-black opacity-90" />

      {/* Floating glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-linear-to-r from-blue-500/40 to-fuchsia-500/40 rounded-full blur-[250px] opacity-20"
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <h2 className="text-4xl font-bold text-white mb-14 z-10 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:w-[350px] bg-white/5 dark:bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.2)] hover:shadow-[0_0_60px_rgba(56,189,248,0.4)] transition-all duration-500"
          >
            {/* Image */}
            <div className="relative w-full h-1/2  overflow-hidden flex items-center justify-center bg-black/40">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-auto  transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col text-center">
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-blue-300 border border-blue-400/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-blue-500/80 hover:bg-blue-500 text-white rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all"
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
