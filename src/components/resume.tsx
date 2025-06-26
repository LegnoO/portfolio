"use client";

// ** Next Imports
import Image from "next/image";

// ** Types
type WorkExperience = {
  period: string;
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  companyLogo: string;
};

type Education = {
  period: string;
  startDate: string;
  endDate: string;
  institution: string;
  field: string;
  degree: string;
  institutionLogo: string;
};

type ResumeSectionProps =
  | { title: string; isEducation?: false; items: WorkExperience[] }
  | { title: string; isEducation: true; items: Education[] };

export default function Resume() {
  const workExperience: WorkExperience[] = [
    {
      period: "Mar 2023 - June 2023",
      startDate: "2023-03-01",
      endDate: "2023-06-01",
      company: "Alta Media",
      position: "Frontend Developer",
      companyLogo: "/alta-media-logo.png",
    },
    {
      period: "Jan 2020 - Dec 2021",
      startDate: "2020-01-01",
      endDate: "2021-12-01",
      company: "SOLUTION AND TECHNOLOGY COMPANY LIMITED",
      position: "Frontend Developer",
      companyLogo: "/sgod-logo.png",
    },
  ];

  const education: Education[] = [
    {
      period: "June 2019 - Aug 2024",
      startDate: "2019-06-15",
      endDate: "2024-08-06",
      institution: "Van lang University",
      field: "Frontend Developer",
      degree: "Bachelor of Information Technology",
      institutionLogo: "/vlu-logo.webp",
    },
    {
      period: "Feb 2022 - Aug 2022",
      startDate: "2022-02-08",
      endDate: "2022-08-08",
      institution: "T3H Information Technology Institute",
      field: "Frontend",
      degree: "Web Development Online Course",
      institutionLogo: "/t3h-logo.png",
    },
  ];

  const ResumeSection = ({
    title,
    items,
    isEducation = false,
  }: ResumeSectionProps) => {
    return (
      <article className="bg-fade-gradient-right hover-reverse-gradient-right border-border w-full rounded-lg border p-6 transition-all duration-300">
        <header className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <hr className="border-border" aria-hidden="true" />
        </header>

        <div role="list" className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              role="listitem"
              className="flex items-start gap-6 sm:gap-7">
              <time
                dateTime={`${item.startDate}/${item.endDate}`}
                className="text-muted-foreground mt-1 min-w-[170px] text-sm font-medium"
                aria-label={`Period: ${item.period}`}>
                {item.period}
              </time>

              <div className="flex flex-1 items-center gap-3">
                <div className="bg-fade-white flex-shrink-0 rounded-full p-2 shadow-lg">
                  <Image
                    width={40}
                    height={40}
                    src={
                      isEducation
                        ? (item as Education).institutionLogo
                        : (item as WorkExperience).companyLogo
                    }
                    alt={`${
                      isEducation
                        ? (item as Education).institution
                        : (item as WorkExperience).company
                    } Logo`}
                    className="size-6 object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="mb-1 text-base leading-tight font-medium">
                    {isEducation
                      ? (item as Education).institution
                      : (item as WorkExperience).company}
                  </h4>
                  <div className="text-muted text-sm">
                    <div className="font-medium">
                      {isEducation
                        ? (item as Education).degree
                        : (item as WorkExperience).position}
                    </div>
                    {isEducation && (
                      <div className="mt-0.5 text-xs">
                        {(item as Education).field}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  };

  return (
    <section aria-labelledby="resume" className="max-w-4xl">
      <header className="mb-9">
        <h2 id="resume-heading" className="text-4xl font-medium">
          My Experience
        </h2>
      </header>
      <div className="flex flex-col items-center gap-6">
        <ResumeSection title="Work Experience" items={workExperience} />
        <ResumeSection title="Education" items={education} isEducation />
      </div>
    </section>
  );
}
