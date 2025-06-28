"use client";

// ** React Imports
import { Fragment, ReactNode } from "react";

// ** Library Imports
import { motion, AnimatePresence } from "framer-motion";

// ** Icons
import { X } from "lucide-react";

// ** Types
interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ProjectInfoModal = ({ isOpen, onClose, children }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          <motion.div
            className="fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="paper-background fixed top-1/2 left-1/2 z-50 h-[90vh] w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform overflow-y-scroll rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}>
            <button
              onClick={onClose}
              className="focus:ring-border absolute top-4 right-4 rounded opacity-70 hover:cursor-pointer hover:opacity-100 focus:ring-2"
              aria-label="Close Modal">
              <X className="size-4" />
            </button>

            {children}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default ProjectInfoModal;
