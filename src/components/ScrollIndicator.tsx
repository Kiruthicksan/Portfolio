import { motion, useScroll } from "framer-motion";

const ScrollIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-fuchsia-500 z-50"
      style={{ scaleX: scrollYProgress }}
      initial={{ scaleX: 0 }}
      transition={{ ease: "easeOut" }}
    />
  );
};

export default ScrollIndicator;
