"use client";

// ** React Imports
import { useState } from "react";

// ** Next Imports
import Image from "next/image";

// ** Components
import ProjectInfoModal from "@/components/project-info-modal";

// ** Icons
import { LucideIcon, User } from "lucide-react";

// ** Types
type BadgeProps = {
  icon: LucideIcon;
  title: string;
};

const Projects = () => {
  const [infoId, setInfoId] = useState<boolean>(false);

  const Badge = ({ icon: BadgeIcon, title }: BadgeProps) => {
    return (
      <div className="bg-fade-gradient-right flex w-fit items-center gap-1.5 rounded-full px-2 py-1 text-sm">
        <BadgeIcon className="size-4" />
        <span>{title}</span>
      </div>
    );
  };

  return (
    <section aria-labelledby="resume">
      <header className="mb-9">
        <h2 id="resume-heading" className="text-4xl font-medium">
          My Projects
        </h2>
      </header>
      <div role="list" className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          onClick={() => setInfoId(true)}
          className="project-card border-border hover:border-muted cursor-pointer rounded border p-6 shadow transition-[colors,translate] duration-300 hover:-translate-y-2">
          <div className="overlay-caption relative">
            <Image
              className="h-[202px] w-full rounded"
              alt=""
              src="/project-test.webp"
              height={202}
              width={287}
            />
            <div className="absolute right-0 bottom-[5%] left-0 text-center">
              <h4 className="underline-hover relative inline-block text-lg font-medium">
                Stellar Vibes
              </h4>
            </div>
          </div>
        </div>

        <ProjectInfoModal isOpen={infoId} onClose={() => setInfoId(false)}>
          <div className="mt-4">
            <Image
              className="mb-4 h-64 w-full rounded"
              alt=""
              src="/project-test.webp"
              height={256}
              width={607}
            />
            <h3 className="mb-3 text-lg font-semibold">E-Commerce Platform</h3>

            <div role="list" className="mb-4 flex items-center gap-4">
              <Badge icon={User} title="Web Developer" />
              <Badge icon={User} title="Web Developer" />
            </div>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting
            </p>
          </div>
        </ProjectInfoModal>
      </div>
    </section>
  );
};

export default Projects;
