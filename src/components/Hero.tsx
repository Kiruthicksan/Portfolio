import { motion } from "framer-motion";
import { useEffect, useRef } from "react";


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
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedY: Math.random() * 0.3 + 0.2,
        alpha: Math.random(),
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

        p.y += p.speedY;
        if (p.y > canvas.height) p.y = 0;
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
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Stellar Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-indigo-900 to-gray-900 dark:from-gray-900 dark:via-slate-900 dark:to-black opacity-90" />

      {/* Star shimmer canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Floating gradient glow blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-linear-to-r from-blue-500 to-fuchsia-500 rounded-full blur-[180px] opacity-30"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 px-4"
      >
       
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
          Hi, I’m <span className="text-blue-400">Kiruthicksan</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        I design and build full-stack web experiences that blend creativity, performance, and precision —  <span className="text-blue-400"> turning ideas</span> into interactive realities.
         
        </p>

        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl text-white bg-blue-500/80 hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
