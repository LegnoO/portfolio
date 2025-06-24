"use client";

// ** Components
import About from "./about";
import Resume from "./resume";

// ** Hooks
import { useHash } from "@/hooks/useHash";

// ** Library imports
import { motion, AnimatePresence } from "framer-motion";

const Content = () => {
  const [hash] = useHash();

  const renderSection = () => {
    switch (hash) {
      case "#about":
        return <About />;
      case "#resume":
        return <Resume />;
      case "#projects":
        return <>Projects</>;
      case "#contact":
        return <>Contact</>;
      default:
        return <About />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={hash}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>
        {renderSection()}
      </motion.div>
    </AnimatePresence>
  );
};

export default Content;
