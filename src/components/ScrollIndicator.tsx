import { motion, useScroll } from "framer-motion";

const ScrollIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] bg-linear-to-r from-sky-400 via-indigo-400 to-purple-500 z-[60]"
      style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      initial={{ scaleX: 0 }}
      transition={{ ease: "easeOut" }}
    />
  );
};

export default ScrollIndicator;
