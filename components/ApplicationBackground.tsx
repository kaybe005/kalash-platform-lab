"use client";

import { useEffect, useRef } from "react";
import { legacyProjects } from "@/data/projects";
import { SectionLabel } from "./FocusAreas";

export default function ApplicationBackground() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="background"
      ref={sectionRef}
      className="py-24 md:py-32"
      aria-labelledby="bg-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-4">
          <SectionLabel>Foundational Systems</SectionLabel>
          <h2
            id="bg-heading"
            className="mb-3 font-display text-3xl font-bold text-text md:text-4xl"
          >
            Application Engineering Background
          </h2>
        </div>

        {/* Context note */}
        <div className="reveal mb-10 border-l-2 border-blue/50 pl-5 py-1">
          <p className="text-muted text-base leading-relaxed max-w-[62ch]">
            I started with full-stack development. Understanding how applications are structured
            - their data models, API contracts, and failure modes - now directly informs how I
            think about deploying, securing, and operating them.
          </p>
        </div>

        {/* Project cards - intentionally smaller visual weight */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {legacyProjects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} min-w-0 rounded-lg border border-border bg-surface p-5 transition-all duration-200 hover:border-blue/40 hover:glow-blue`}
            >
              <h3 className="mb-2 break-words font-display text-base font-semibold text-text">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex min-w-0 flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="max-w-full break-words rounded-full border border-blue/20 bg-blue/6 px-2 py-0.5 font-mono text-[10px] text-blue/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="reveal mt-10 rounded-lg border border-border bg-surface p-5">
          <p className="text-muted text-sm leading-relaxed italic max-w-[68ch]">
            These projects gave me an understanding of how applications are built. I&apos;m now focused
            on how they are packaged, deployed, secured, monitored, and operated - the platform
            and infrastructure layer.
          </p>
        </div>
      </div>
    </section>
  );
}
