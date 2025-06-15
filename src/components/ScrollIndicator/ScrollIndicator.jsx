import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "8px",
        transformOrigin: "left",
        backgroundColor: "#ff623f",
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollIndicator;
