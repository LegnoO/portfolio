// ** React Imports
import React, { ReactNode } from "react";

// ** Icons
import { Calendar, MapPin, GraduationCap, TrendingUp } from "lucide-react";

// ** Lib Imports
import { calculateAge, cn } from "@/lib/utils";
import IconButton from "./icon-button";

type InfoCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  description: string;
};

const cardContainerClass =
  "bg-fade-primary hover-reverse-gradient-right border-border rounded border p-10 font-medium";

const InfoCard = ({ icon, label, value, description }: InfoCardProps) => (
  <div
    className={cn(cardContainerClass, "flex flex-1 items-center font-medium")}>
    <div className="flex items-center justify-center gap-6">
      {icon}
      <div>
        <p className="text-muted mb-1 text-sm">{label}</p>
        <h4 className="text mb-2.5 text-sm">{value}</h4>
        <p className="text-muted text-xs">{description}</p>
      </div>
    </div>
  </div>
);

export default function About() {
  const infoItems: InfoCardProps[] = [
    {
      icon: <IconButton icon={Calendar} />,
      label: "Date of Birth",
      value: "11/08/2001",
      description: `${calculateAge(new Date("2001-08-11"))} years old, dynamic and creative`,
    },
    {
      icon: <IconButton icon={MapPin} />,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      description: "Available for remote and onsite work",
    },
    {
      icon: <IconButton icon={GraduationCap} />,
      label: "Education",
      value: "Van Lang University",
      description: "Bachelor's in Information Technology",
    },
    {
      icon: <IconButton icon={TrendingUp} />,
      label: "Experience",
      value: "1 years",
      description: "From Intern to Fresher level",
    },
  ];

  return (
    <section className="pb-12" aria-labelledby="about">
      <div className={cn(cardContainerClass, "mb-6 font-medium")}>
        <h2
          id="about-heading"
          className="mb-7 text-2xl md:text-3xl lg:text-4xl">
          About me
        </h2>
        <p className="text-muted mb-6">
          I was born and raised in Ho Chi Minh City, Vietnam. Since I was young,
          I’ve had a strong passion for programming and technology. I’ve always
          been fascinated by how software works and how to create meaningful
          digital experiences for users. This passion led me to study
          Information Technology and explore the fields of software development
          and user experience design.
        </p>
        <p className="text-muted mb-3.5">
          Currently, I’m a recent graduate specializing in{" "}
          <span className="text-primary">Frontend Engineering</span> and
          actively seeking job opportunities to begin my career in the tech
          industry.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {infoItems.map((item, index) => (
          <InfoCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
