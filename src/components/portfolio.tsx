"use client";

// ** Next Imports
import Image from "next/image";

// ** Components
import IconButton from "./icon-button";

// ** Icons
import { LinkedinIcon, FacebookIcon, GithubIcon } from "lucide-react";

// ** Library imports
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}>
        <div className="border-border rounded pb-12">
          <div className="before:bg-primary relative overflow-hidden before:absolute before:bottom-[-50px] before:left-[-50px] before:size-[150px] before:rounded-full before:opacity-90 before:blur-[30px] before:content-['']">
            <Image
              height={200}
              width={300}
              priority
              className="pointer-events-none h-[440px] w-full rounded rounded-b-none"
              src="/avatar.jpg"
              alt="Ngô Minh Khôi Avatar"
            />
          </div>
          <div className="bg-fade-gradient-right hover-reverse-gradient-right border-border rounded-b border border-t-0 px-6 pt-7 pb-5.5 text-center">
            <h3 className="text-4xl tracking-tight">Devon</h3>
            <p className="text-primary tracking-wide">Developer</p>
            <ul className="border-border flex items-center justify-center gap-4 border-b pt-8 pb-10">
              <li>
                <IconButton icon={FacebookIcon} />
              </li>
              <li>
                <IconButton icon={LinkedinIcon} />
              </li>
              <li>
                <IconButton icon={GithubIcon} />
              </li>
            </ul>
            <button className="border-border hover:bg-foreground/10 mt-12 w-full cursor-pointer rounded border px-4 py-1.5 text-sm font-medium transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Portfolio;
