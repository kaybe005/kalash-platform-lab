"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "./FocusAreas";

const channels = [
  {
    label: "Email",
    value: "kalashbijukchhe74@gmail.com",
    href: "mailto:kalashbijukchhe74@gmail.com",
    ariaLabel: "Send email to Kalash",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kayb05",
    href: "https://linkedin.com/in/kayb05",
    ariaLabel: "LinkedIn profile (opens in new tab)",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/kaybe005",
    href: "https://github.com/kaybe005",
    ariaLabel: "GitHub profile (opens in new tab)",
    external: true,
  },
  {
    label: "Portfolio",
    value: "kalashbijukchhe.com",
    href: "https://kalashbijukchhe.com",
    ariaLabel: "Portfolio website",
    external: true,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el) => el.classList.add("revealed"));
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-surface border-t border-border py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="reveal mb-4">
            <SectionLabel>Open Channel</SectionLabel>
            <h2
              id="contact-heading"
              className="mb-3 font-display text-3xl font-bold text-text md:text-4xl"
            >
              Get In Touch
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              I&apos;m actively looking for junior DevOps, cloud support, or
              platform engineering roles in Sydney. Open to hybrid and remote
              arrangements.
            </p>
          </div>

          {/* Terminal contact block */}
          <div className="reveal rounded-lg border border-border overflow-hidden">
            {/* Title bar */}
            <div className="flex min-w-0 items-center gap-2.5 border-b border-border bg-black/40 px-5 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41] opacity-70" />
              </div>
              <span className="ml-1 min-w-0 break-words font-mono text-[11px] text-muted">
                contact - Kalash Bijukchhe
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-green pulse-dot"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Body */}
            <div
              className="bg-void p-6 md:p-8 font-mono"
              role="list"
              aria-label="Contact channels"
            >
              {channels.map((ch) => (
                <div
                  key={ch.label}
                  className="flex min-w-0 flex-col gap-1 border-b border-border/50 py-3 last:border-0 sm:flex-row sm:items-center sm:gap-4"
                  role="listitem"
                >
                  <span
                    className="hidden text-sm text-cyan sm:inline"
                    aria-hidden="true"
                  >
                    &gt;
                  </span>
                  <span className="w-20 flex-shrink-0 text-xs text-muted">
                    {ch.label}
                  </span>
                  {ch.external ? (
                    <a
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-0 break-all text-sm text-text transition-colors hover:text-cyan"
                      aria-label={ch.ariaLabel}
                    >
                      {ch.value}
                    </a>
                  ) : (
                    <a
                      href={ch.href}
                      className="min-w-0 break-all text-sm text-text transition-colors hover:text-cyan"
                      aria-label={ch.ariaLabel}
                    >
                      {ch.value}
                    </a>
                  )}
                </div>
              ))}

              {/* Status lines */}
              <div className="mt-5 pt-4 border-t border-border/50 space-y-1">
                <div className="text-xs">
                  <span className="text-cyan">$ </span>
                  <span className="text-muted">status: </span>
                  <span className="text-green">
                    open to junior DevOps, cloud, and platform engineering roles
                  </span>
                </div>
                <div className="text-xs">
                  <span className="text-cyan">$ </span>
                  <span className="text-muted">
                    location: Sydney, AU - hybrid / remote considered
                  </span>
                </div>
                <div className="text-xs flex items-center gap-2">
                  <span className="text-cyan">$ </span>
                  <span className="cursor-blink" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
