import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      alpha: number;
    }

    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speedY: Math.random() * 0.2 + 0.1,
        alpha: Math.random() * 0.8 + 0.2,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      particles.forEach((p) => {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y -= p.speedY; // move up to look like floating embers/stars
        if (p.y < 0) p.y = canvas.height;
      });

      requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background with darker gradient */}
      <div className="absolute inset-0 bg-[#030014] z-[-2]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] z-[-1] from-sky-900/20 via-[#030014] to-[#030014]" />

      {/* Star shimmer canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Floating gradient glow blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-linear-to-r from-sky-500/20 to-purple-500/20 rounded-full blur-[150px] opacity-40 pointer-events-none z-0"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
          Crafting <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">Digital</span> Experiences.
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          I’m <span className="text-white font-medium">Kiruthicksan</span>, a full-stack developer who bridges the gap between design and engineering to build immersive, high-performance web applications.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] backdrop-blur-md"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-center px-8 py-4 rounded-full text-gray-300 font-medium hover:text-white transition-colors"
          >
            Let's talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

