import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

const ParallaxBG: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

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
      className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0a1a] via-[#0f172a] to-black"
      style={{ rotateX, rotateY }}
    />
  );
};

export default ParallaxBG;
