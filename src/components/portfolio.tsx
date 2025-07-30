"use client";

// ** React Imports
import { Fragment, useState } from "react";

// ** Next Imports
import Image from "next/image";

// ** Components
import DisplayCV from "./display-cv";
import IconButton from "./icon-button";

// ** Icons
import { LinkedinIcon, FacebookIcon, GithubIcon } from "lucide-react";

// ** Library imports
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/legnooo",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/minh-kh%C3%B4i-ng%C3%B4-45ba8123a",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/LegnoO",
  },
];

const Portfolio = () => {
  const [isShowCV, setIsShowCV] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <Fragment>
        {isShowCV && <DisplayCV setIsShowCV={setIsShowCV} />}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}>
          <div className="border-border rounded md:pb-12">
            <div className="before:bg-primary relative overflow-hidden before:absolute before:bottom-[-50px] before:left-[-50px] before:size-[150px] before:rounded-full before:opacity-90 before:blur-[30px] before:content-['']">
              <Image
                height={200}
                width={300}
                priority
                className="pointer-events-none h-full w-full rounded rounded-b-none md:h-[440px]"
                src="/avatar.jpg"
                alt="Ngô Minh Khôi Avatar"
              />
            </div>
            <div className="bg-fade-primary hover-reverse-gradient-right border-border rounded-b border border-t-0 px-6 pt-7 pb-5.5 text-center">
              <h3 className="text-3xl tracking-tight">Ngô Minh Khôi</h3>
              <p className="text-primary font-medium tracking-wide">
                Developer
              </p>
              <ul className="border-border flex items-center justify-center gap-4 border-b pt-8 pb-10">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}>
                    <IconButton icon={Icon} />
                  </a>
                ))}
              </ul>
              <button
                onClick={() => setIsShowCV(true)}
                className="shadow-emboss-light mt-12 w-full cursor-pointer rounded px-4 py-1.5 text-sm font-medium transition-colors">
                My Resume
              </button>
            </div>
          </div>
        </motion.div>
      </Fragment>
    </AnimatePresence>
  );
};

export default Portfolio;
