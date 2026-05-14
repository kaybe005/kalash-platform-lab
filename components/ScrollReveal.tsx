"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    elements.forEach((el) => {
      el.classList.add("reveal-pending");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
