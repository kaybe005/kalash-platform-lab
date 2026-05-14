export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-muted">
          Kalash Bijukchhe / Platform Lab / Sydney, AU / {year}
        </p>

        <nav className="flex gap-5" aria-label="Footer navigation">
          {[
            { label: "GitHub",   href: "https://github.com/kaybe005",      external: true },
            { label: "LinkedIn", href: "https://linkedin.com/in/kayb05",   external: true },
            { label: "Projects", href: "#projects",                         external: false },
            { label: "Contact",  href: "#contact",                          external: false },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-mono text-[11px] text-muted hover:text-cyan transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
