"use client";

import { useEffect, useRef } from "react";
import { roadmap, certifications } from "@/data/skills";
import { SectionLabel } from "./FocusAreas";

const phaseStyle = {
  done:    { dot: "bg-green border-green",    text: "text-green",  label: "Completed" },
  active:  { dot: "border-amber bg-void",     text: "text-amber",  label: "In Progress", pulse: true },
  next:    { dot: "border-muted bg-void",     text: "text-muted",  label: "Next" },
  planned: { dot: "border-border bg-void",    text: "text-muted", label: "Planned" },
} as const;

export default function Roadmap() {
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
      id="roadmap"
      ref={sectionRef}
      className="py-24 md:py-32"
      aria-labelledby="roadmap-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-12">
          <SectionLabel>Mission Objectives</SectionLabel>
          <h2
            id="roadmap-heading"
            className="mb-3 font-display text-3xl font-bold text-text md:text-4xl"
          >
            What I&apos;m Building Toward
          </h2>
          <p className="text-muted text-lg max-w-[55ch] leading-relaxed">
            A practical roadmap that separates completed flagship work from current pipeline hardening and planned SRE practice.
          </p>
        </div>

        {/* Timeline */}
        <div className="reveal relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[10px] left-[10px] right-[10px] h-px"
            style={{
              background: "linear-gradient(90deg, #00E676 0%, #FFB300 40%, #8899A6 65%, #1E2D3D 85%)",
            }}
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {roadmap.map((phase) => {
              const s = phaseStyle[phase.phase];
              return (
                <div key={phase.id} className="flex flex-col md:items-center md:text-center">
                  {/* Dot */}
                  <div className="relative mb-4 md:self-center">
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${s.dot} ${phase.phase === "active" ? "pulse-dot" : ""}`}
                      role="img"
                      aria-label={`Phase: ${s.label}`}
                    />
                    {phase.phase === "active" && (
                      <div className="absolute inset-0.5 rounded-full bg-amber pulse-dot" aria-hidden="true" />
                    )}
                  </div>

                  {/* Phase label */}
                  <p className={`mb-3 font-mono text-[10px] uppercase ${s.text}`}>
                    {s.label}
                  </p>

                  {/* Items */}
                  <ul className="space-y-1" aria-label={`${s.label} skills`}>
                    {phase.items.map((item) => (
                      <li key={item} className="font-mono text-[12px] text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certification pills */}
        <div className="reveal flex flex-wrap gap-3 mt-12 justify-center">
          {certifications.map((cert) => (
            <span
              key={cert.label}
              className={`font-mono text-xs px-4 py-1.5 rounded-full border ${
                cert.status === "studying"
                  ? "text-amber border-amber/40 bg-amber/6 glow-amber"
                  : "text-muted border-border bg-void"
              }`}
              aria-label={`${cert.label} - ${cert.status}`}
            >
              {cert.label}
              <span className={`ml-2 opacity-60 ${cert.status === "studying" ? "text-amber" : "text-muted"}`}>
                - {cert.status}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
