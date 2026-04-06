import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

const ParallaxBG: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x.set(e.clientX - innerWidth / 2);
      y.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed inset-0 z-[-100] bg-linear-to-br from-[#030014] via-[#050020] to-[#030014] mix-blend-screen scale-110"
      style={{ rotateX, rotateY }}
    >
      <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-sky-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-purple-900/10 rounded-full blur-[200px] pointer-events-none" />
    </motion.div>
  );
};

export default ParallaxBG;
