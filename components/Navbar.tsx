"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const navLinks = [
  { href: "#stack",        label: "Stack" },
  { href: "#projects",     label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#about",        label: "About" },
  { href: "#contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-void/95 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-cyan text-sm font-medium hover:text-white transition-colors"
            aria-label="Kalash Bijukchhe - back to top"
          >
            [KB]
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-text transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan group-hover:w-full transition-all duration-200" />
              </a>
            ))}
            <a
              href="https://github.com/kaybe005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan border border-cyan/40 px-4 py-1.5 rounded hover:bg-cyan/10 hover:border-cyan transition-all duration-200"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            ref={menuButtonRef}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-5 h-0.5 bg-muted transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-muted transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-muted transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay - inert when closed to prevent keyboard focus */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal={open}
        aria-hidden={!open}
        className={`fixed inset-0 top-16 z-40 bg-void/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-opacity duration-200 md:hidden ${
          open ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={close}
              className="font-display text-2xl font-semibold text-text hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/kaybe005"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={close}
            className="mt-2 text-base font-medium text-cyan border border-cyan/40 px-6 py-2.5 rounded hover:bg-cyan/10 transition-all"
          >
            GitHub
          </a>
        </nav>
      </div>
    </>
  );
}
