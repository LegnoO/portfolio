import React from "react";

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-fade-gradient-right hover-reverse-gradient-right border-border border p-0 pt-11 pr-16 pb-8 pl-14 font-medium">
      <h2 id="about-heading" className="mb-7 text-2xl md:text-3xl lg:text-4xl">
        About me
      </h2>
      <p className="text-muted mb-6">
        I was born and raised in Ho Chi Minh City, Vietnam. Since I was young,
        I’ve had a strong passion for programming and technology. I’ve always
        been fascinated by how software works and how to create meaningful
        digital experiences for users. This passion led me to study Information
        Technology and explore the fields of software development and user
        experience design.
      </p>
      <p className="text-muted mb-3.5">
        Currently, I’m a recent graduate specializing in Frontend Engineering
        and actively seeking job opportunities to begin my career in the tech
        industry.
      </p>
    </section>
  );
}
