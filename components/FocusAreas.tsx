"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { skillDomains, supplementaryTools } from "@/data/skills";

export default function FocusAreas() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="bg-surface border-y border-border py-24 md:py-32"
      aria-labelledby="stack-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal mb-12">
          <SectionLabel>System Capabilities</SectionLabel>
          <h2 id="stack-heading" className="mb-3 font-display text-3xl font-bold text-text md:text-4xl">
            What I&apos;m Building With
          </h2>
          <p className="text-muted text-lg max-w-[55ch] leading-relaxed">
            Focused skill development across the modern platform engineering stack.
          </p>
        </div>

        {/* Domain cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {skillDomains.map((domain, i) => (
            <div
              key={domain.id}
              className={`reveal reveal-delay-${i + 1} group min-w-0 rounded-lg border border-border bg-void p-5 transition-all duration-200 hover:border-border-accent hover:glow-cyan`}
            >
              <div className="mb-4 flex h-9 w-12 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/7 font-mono text-xs text-cyan select-none" aria-hidden="true">
                {domain.icon}
              </div>
              <h3 className="font-display font-semibold text-base text-text mb-2">
                {domain.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {domain.description}
              </p>
              <div className="flex min-w-0 flex-wrap gap-1.5">
                {domain.tools.map((tool) => (
                  <TechTag key={tool}>{tool}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Supplementary strip */}
        <div className="reveal border-t border-border pt-8">
          <p className="mb-3 font-mono text-[11px] uppercase text-muted">
            Also familiar with
          </p>
          <div className="flex min-w-0 flex-wrap gap-2">
            {supplementaryTools.map((tool) => (
              <TechTag key={tool}>{tool}</TechTag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[11px] uppercase text-cyan">
      <span className="opacity-50">[ </span>
      {children}
      <span className="opacity-50"> ]</span>
    </p>
  );
}

export function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="max-w-full break-words rounded-full border border-cyan/20 bg-cyan/6 px-2.5 py-0.5 font-mono text-[10px] text-cyan">
      {children}
    </span>
  );
}
