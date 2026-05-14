"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { SectionLabel } from "./FocusAreas";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-12">
          <SectionLabel>Flagship Infrastructure Projects</SectionLabel>
          <h2
            id="projects-heading"
            className="mb-3 font-display text-3xl font-bold text-text md:text-4xl"
          >
            Cloud & Platform Projects
          </h2>
          <p className="text-muted text-lg max-w-[55ch] leading-relaxed">
            Production-style homelab and secure learning architecture projects with clear status labels and concrete proof points.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <div key={project.id} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
