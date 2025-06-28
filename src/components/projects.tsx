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
} from "lucide-react";

// ** Types
type BadgeProps = {
  icon: LucideIcon;
  title: string;
};

type Project = {
  id: number;
  name: string;
  title: string;
  role: string;
  techs: string[];
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
};

const Badge = ({ icon: BadgeIcon, title }: BadgeProps) => {
  return (
    <div className="bg-fade-gradient-right flex w-fit items-center gap-1.5 rounded-full px-2 py-1 text-sm">
      <BadgeIcon className="size-4" />
      <span>{title}</span>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      name: "Project_01",
      title: "Stellar Vibes",
      role: "Web Developer",
      techs: ["Node.js", "React"],
      description: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Standard dummy text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting.
    `,
      image: "/project-test.webp",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      name: "Project_02",
      title: "Creative Space",
      role: "Frontend Engineer",
      techs: ["Next.js", "Tailwind"],
      description: `
      A creative space for developers to build, showcase, and share UI components.
    `,
      image: "/project-test.webp",
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
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="project-card border-border bg-card-fade-gradient-left cursor-pointer rounded border p-6 shadow">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[15px] font-medium">{project.name}</h3>
              <Info className="text-muted hover:text-foreground size-5 transition-colors" />
            </div>

            <hr className="border-border mb-7 border" />

            <div className="overlay-caption relative">
              <Image
                className="h-[202px] w-full rounded"
                alt={project.title}
                src={project.image}
                height={202}
                width={287}
              />
              <div className="absolute right-0 bottom-[5%] left-0 text-center">
                <h4 className="underline-hover relative inline-block text-lg font-medium">
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

          <div className="mb-4 flex items-center gap-4">
            <Badge icon={User} title={selectedProject?.role || ""} />
          </div>

          <p className="mb-4">{selectedProject?.description || ""}</p>

          <div className="mb-3 flex items-center gap-1.5">
            <Settings className="text-muted size-4" />
            <span className="font-medium">Tech Stack:</span>
          </div>

          <div className="flex items-center gap-4">
            {selectedProject?.techs.map((tech) => (
              <span
                key={tech}
                className="bg-fade-gradient-right w-fit rounded-full px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>

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
              className="border-border hover:bg-foreground/10 flex w-fit items-center gap-1.5 rounded border px-4 py-2 text-sm font-medium transition-colors"
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
