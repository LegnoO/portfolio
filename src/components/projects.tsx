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
    <div className="bg-fade-primary flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium">
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
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Shadcn UI",
        "React Hook Form",
        "Zod",
        "Cloudinary",
        "Vercel",
      ],
      description: `A modern web application built with Next.js for discovering and managing cooking
recipes. Users can search for recipes, view detailed instructions, save favorites, leave comments
and ratings. The app features user authentication, a responsive interface, and SEO optimization
through server-side rendering.`,
      highlights: [
        "Implemented dynamic recipe search and filtering",
        "Developed user authentication and profile management",
        "Designed responsive UI for seamless experience on all devices",
        "Integrated comment and rating system for user interaction",
        "Implemented SEO optimization using Next.js features for better search engine performance",
      ],
      date: "Jun 2024 – Jan 2025",
      image: "/cook-and-recipe.png",
      demoLink: "https://cook-and-recipe-client.vercel.app",
      codeLink: "https://github.com/LegnoO/cook-and-recipe-client",
    },
    {
      date: "Jun 2024 – Jan 2025",
      title: "Cook & Recipe Manager",
      role: ["Personal Project", "Front-End Engineer"],
      techs: [
        "React 18",
        "TypeScript",
        "Axios",
        "TanStack Query",
        "Material UI 5",
        "React Hook Form",
        "Yup",
        "Zod",
        "Vercel",
      ],
      description: `Developed a web-based admin dashboard for managing cooking recipes,
ingredients, categories, users, employees, and chefs. The system provides a modern,
intuitive interface for administrators to efficiently perform CRUD operations, monitor statistics,
and manage all aspects of recipe data.`,
      highlights: [
        "Recipe management: add, edit, review, and approve recipes",
        "Category, ingredient, and chef management",
        "User and employee management with detail and update views",
        "Role-based access control and group assignment",
        "Authentication and authorization for admin access",
        "Dashboard with charts and statistics (recipes, users, categories, chefs)",
        "Responsive, user-friendly interface with notifications and loading indicators",
        "Theme switching (Light/Dark mode)",
      ],
      image: "/cook-and-recipe-admin.png",
      demoLink: "https://cook-and-recipe-admin.vercel.app",
      codeLink: "https://github.com/LegnoO/cook-and-recipe-admin",
    },
    {
      date: "May 2023 – June 2023",
      title: "Queueing System",
      role: ["Company Project", "Front-End Engineer"],
      techs: [
        "React.js",
        "TypeScript",
        "Bootstrap 5",
        "Redux Toolkit",
        "FireStore",
        "Material UI 5",
      ],
      description: `A web-based queue management system designed to optimize customer service
processes at transaction points. The system allows for ticket issuance, real-time
queue monitoring, and customer information management.`,
      highlights: [
        "Developed the user interface strictly following the company’s Figma design",
        "Independently set up and integrated Firebase Firestore as the backend for data storage and real-time updates",
        "Integrated and utilized Redux Toolkit for state management",
        "Translated Figma prototypes into responsive and interactive web pages",
        "Optimized user experience (UX/UI) and ensured cross-device compatibility",
        "Conducted UI testing and fixed interface-related bugs.",
      ],
      image: "/queueing-system.jpeg",
      demoLink: "https://queueing-system-khaki.vercel.app",
      codeLink: "https://github.com/LegnoO/queueing-system",
    },

    {
      date: "April 2023 - May 2023",
      title: "CMS Ticket Sales",
      role: ["Company Project", "Front-End Engineer"],
      techs: [
        "React.js",
        "TypeScript",
        "Redux Toolkit",
        "FireStore",
        "Material UI 5",
        "SCSS modules",
      ],
      description: `Developed a comprehensive event ticket management system (CMS Ticket Sales) using ReactJS. Built modern, responsive user interfaces, optimized user experience, managed application state with Redux, and integrated Firebase services for authentication and data storage.`,
      highlights: [
        "Developed the user interface strictly following the company’s Figma design",
        "Independently set up and integrated Firebase Firestore as the backend for data storage and real-time updates",
        "Integrated and utilized Redux Toolkit for state management",
        "Translated Figma prototypes into responsive and interactive web pages",
        "Optimized user experience (UX/UI) and ensured cross-device compatibility",
        "Conducted UI testing and fixed interface-related bugs.",
        "Implemented data export to Excel functionality.",
        "Used SCSS modules for consistent and maintainable styling.",
      ],
      image: "/ticket-sales.jpeg",
      demoLink: "https://cms-ticket-sales.vercel.app",
      codeLink: "https://github.com/LegnoO/CMS-Ticket-Sales",
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
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="!border-border bg-fade-secondary cursor-pointer rounded !border px-7 pt-6 pb-5">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[15px] font-medium">{project.date}</h3>
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
                <h4 className="underline-hover relative inline-block font-medium text-white/70">
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
                className="bg-fade-primary w-fit rounded-full px-4 py-2 text-sm font-medium">
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
              className="bg-fade-primary hover-reverse-gradient-right border-border flex w-fit items-center gap-1.5 rounded border px-4 py-2 text-sm font-medium"
              href={selectedProject?.demoLink}
              target="_blank"
              rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              Live Demo
            </a>

            <a
              className="shadow-emboss-light flex w-fit items-center gap-1.5 rounded px-4 py-2 text-sm font-medium transition-colors"
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
