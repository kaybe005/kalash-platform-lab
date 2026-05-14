"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "./FocusAreas";

const profileLines = [
  { key: "name",       val: "Kalash Bijukchhe",            valColor: "text-green" },
  { key: "alias",      val: "kaybe005",                    valColor: "text-text" },
  { key: "location",   val: "Sydney, Australia",           valColor: "text-text" },
  { key: "status",     val: "actively seeking roles",      valColor: "text-green" },
  { key: "focus",      val: null,                          valColor: "" },
  { key: "  -",        val: "Platform engineering",        valColor: "text-text" },
  { key: "  -",        val: "Cloud infrastructure (AWS)",  valColor: "text-text" },
  { key: "  -",        val: "Kubernetes operations",       valColor: "text-text" },
  { key: "  -",        val: "CI/CD automation",            valColor: "text-text" },
  { key: "background", val: null,                          valColor: "" },
  { key: "  -",        val: "IT student",                  valColor: "text-text" },
  { key: "  -",        val: "Full-stack background",       valColor: "text-text" },
  { key: "  -",        val: "Now: infrastructure",         valColor: "text-cyan" },
  { key: "available",  val: "immediately",                 valColor: "text-green" },
  { key: "open_to",    val: "hybrid / remote",             valColor: "text-text" },
];

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface border-y border-border"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-4">
          <SectionLabel>Operator Profile</SectionLabel>
        </div>

        <div className="grid min-w-0 gap-10 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16 items-start">
          {/* Terminal card */}
          <div className="reveal min-w-0 overflow-hidden rounded-lg border border-border bg-void" role="region" aria-label="Operator profile in terminal format">
            {/* Title bar */}
            <div className="flex min-w-0 items-center gap-2.5 border-b border-border bg-black/40 px-4 py-2.5">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41] opacity-70" />
              </div>
              <span className="ml-1 min-w-0 break-words font-mono text-[11px] text-muted">operator.yml</span>
            </div>

            {/* Body */}
            <div className="min-w-0 p-5 font-mono text-[12.5px] leading-7">
              <div className="text-muted mb-2">
                <span className="text-cyan">$ </span>
                <span>cat operator.yml</span>
              </div>
              {profileLines.map((line, i) => (
                <div key={i} className="flex min-w-0 flex-wrap gap-1.5">
                  <span className="break-words text-cyan">{line.key}</span>
                  {line.val !== null && (
                    <>
                      <span className="text-muted">:</span>
                      <span className={`${line.valColor} min-w-0 break-words`}>{line.val}</span>
                    </>
                  )}
                  {line.val === null && line.key !== "  -" && (
                    <span className="text-muted">:</span>
                  )}
                </div>
              ))}
              <div className="mt-2 text-cyan">
                $ <span className="cursor-blink" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="reveal reveal-delay-2">
            <h2
              id="about-heading"
              className="mb-6 font-display text-3xl font-bold text-text md:text-4xl"
            >
              About Me
            </h2>

            <div className="space-y-4 text-muted text-base leading-relaxed max-w-[60ch]">
              <p>
                I started by building full-stack applications, learning how data flows through
                systems, how APIs behave under load, and how databases need to be designed for
                real workloads.
              </p>
              <p>
                Over time, I became more interested in what happens{" "}
                <em className="text-text not-italic">after</em> code is written: how it gets
                packaged, deployed, secured, monitored, and recovered. I&apos;m now focused on
                DevOps, cloud infrastructure, platform engineering, and SRE fundamentals through
                hands-on homelab and AWS projects.
              </p>
              <p>
                I learn by building real things. My homelab runs k3s and ArgoCD. My Terraform
                code lives in a real AWS environment. My CI/CD pipelines build and push actual
                container images. I get comfortable with systems by debugging the messy parts:
                ARM64/AMD64 mismatches, DNS failures through ingress controllers, PVC drift
                between cluster restarts.
              </p>
              <p>
                I&apos;m looking for a junior DevOps, cloud support, or platform engineering role
                where I can contribute to real infrastructure while continuing to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
