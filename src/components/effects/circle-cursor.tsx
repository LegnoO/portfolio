"use client";

// ** React Imports
import { useEffect, useState } from "react";

// ** Library Imports
import { motion, useSpring, useMotionValue } from "framer-motion";

const CircleCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springX = useSpring(useMotionValue(0), {
    stiffness: 200,
    damping: 18,
  });
  const springY = useSpring(useMotionValue(0), {
    stiffness: 200,
    damping: 18,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    springX.set(mousePos.x - 10); // -10 để căn giữa
    springY.set(mousePos.y - 10);
  }, [mousePos.x, mousePos.y, springX, springY]);

  return (
    // <motion.div
    //   className="pointer-events-none fixed top-0 left-0 z-50"
    //   style={{
    //     translateX: springX,
    //     translateY: springY,
    //   }}>
    //   <div className="size-8 rounded-full bg-white/20" />
    // </motion.div>
    null
  );
};

export default CircleCursor;
