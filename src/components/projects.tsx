"use client";

// ** React Imports
import { useState } from "react";

// ** Next Imports
import Image from "next/image";

// ** Components
import ProjectInfoModal from "@/components/project-info-modal";

// ** Icons
import {
  Info,
  LucideIcon,
  User,
  Settings,
  ExternalLink,
  Github,
  Briefcase,
  Sparkles,
} from "lucide-react";

// ** Types
type BadgeProps = {
  icon: LucideIcon;
  title: string;
};

type Project = {
  title: string;
  role: string[];
  techs: string[];
  description: string;
  image: string;
  highlights: string[];
  demoLink: string;
  codeLink: string;
};

const Badge = ({ icon: BadgeIcon, title }: BadgeProps) => {
  return (
    <div className="bg-fade-gradient-right flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm">
      <BadgeIcon className="size-4" />
      <span>{title}</span>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "Cook & Recipe",
      role: ["Personal Project", "Front-End Engineer"],
      techs: [
        "Next.js",
        "Shadcn UI",
        "Tailwind",
        "TypeScript",
        "React Query",
        "React Hook Form",
        "Zod",
        "Cloudinary",
      ],
      description: `Cook & Recipe is a web application that helps users explore, search, and manage cooking recipes. It allows browsing through various dishes, viewing step-by-step instructions, and saving favorite recipes. The interface is clean, responsive, and easy to use across different devices.`,
      highlights: [
        "Built dynamic search and filtering for recipes",
        "Implemented user authentication and profile features",
        "Designed a responsive UI for desktop and mobile",
        "Integrated with backend APIs for smooth data handling",
      ],
      image: "/cook-and-recipe.png",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Cook & Recipe Manager",
      role: ["Personal Project", "Front-End Engineer"],
      techs: [
        "Next.js",
        "Shadcn UI",
        "Tailwind",
        "TypeScript",
        "React Query",
        "React Hook Form",
        "Zod",
        "Cloudinary",
      ],
      description: `Cook & Recipe is a web application that helps users explore, search, and manage cooking recipes. It allows browsing through various dishes, viewing step-by-step instructions, and saving favorite recipes. The interface is clean, responsive, and easy to use across different devices.`,
      highlights: [
        "Built dynamic search and filtering for recipes",
        "Implemented user authentication and profile features",
        "Designed a responsive UI for desktop and mobile",
        "Integrated with backend APIs for smooth data handling",
      ],
      image: "/cook-and-recipe-admin.png",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section aria-labelledby="resume">
      <header className="mb-9">
        <h2 id="resume-heading" className="text-4xl font-medium">
          My Projects
        </h2>
      </header>
      <div role="list" className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="project-card border-border bg-card-fade-gradient-left cursor-pointer rounded border px-7 pt-6 pb-5 shadow">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[15px] font-medium">{`Project_${index + 1}`}</h3>
              <Info className="text-muted hover:text-foreground size-5 transition-colors" />
            </div>

            <hr className="border-border mb-7 border" />

            <div className="overlay-caption relative">
              <Image
                className="h-[154px] w-full rounded"
                alt={project.title}
                src={project.image}
                height={154}
                width={287}
              />
              <div className="absolute right-0 bottom-[5%] left-0 text-center">
                <h4 className="underline-hover relative inline-block font-medium">
                  {project.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectInfoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}>
        <div className="mt-4">
          <Image
            className="mb-4 h-64 w-full rounded"
            alt={selectedProject?.title || ""}
            src={selectedProject?.image || ""}
            height={256}
            width={607}
          />
          <h3 className="mb-3 text-lg font-semibold">
            {selectedProject?.title || ""}
          </h3>

          <div className="mb-4 flex flex-wrap items-center gap-4">
            {selectedProject?.role.map((role, index) => (
              <Badge
                icon={index === 1 ? User : Briefcase}
                key={index}
                title={role || ""}
              />
            ))}
          </div>

          <p className="mb-6">{selectedProject?.description || ""}</p>

          <div className="mb-3 flex items-center gap-1.5">
            <Settings className="text-muted size-4" />
            <span className="font-medium">Tech Stack:</span>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            {selectedProject?.techs.map((tech) => (
              <span
                key={tech}
                className="bg-fade-gradient-right w-fit rounded-full px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-3 flex items-center gap-1.5">
            <Sparkles className="text-muted size-4" />
            <span className="font-medium">Highlight:</span>
          </div>

          <ul className="flex flex-col gap-2">
            {selectedProject?.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3">
                <span className="bg-foreground/60 size-1.5 rounded-full" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <a
              className="bg-fade-gradient-right hover-reverse-gradient-right border-border flex w-fit items-center gap-1.5 rounded border px-4 py-2 text-sm font-medium"
              href={selectedProject?.demoLink}
              target="_blank"
              rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              Live Demo
            </a>

            <a
              className="shadow-emboss-light hover:bg-foreground/10 flex w-fit items-center gap-1.5 rounded px-4 py-2 text-sm font-medium transition-colors"
              href={selectedProject?.codeLink}
              target="_blank"
              rel="noopener noreferrer">
              <Github className="size-4" />
              View Code
            </a>
          </div>
        </div>
      </ProjectInfoModal>
    </section>
  );
};

export default Projects;
