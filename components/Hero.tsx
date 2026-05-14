"use client";

import { useEffect, useRef, useState } from "react";

const bootLines = [
  { text: "Initializing Platform Lab", tag: "BOOT", tagColor: "text-amber" },
  { text: "Kubernetes GitOps workflow documented", tag: "OK", tagColor: "text-green" },
  { text: "AWS Terraform infrastructure documented", tag: "OK", tagColor: "text-green" },
  { text: "Portfolio CI/CD workflow completed", tag: "OK", tagColor: "text-green" },
  { text: "Observability incident lab planned", tag: "NEXT", tagColor: "text-cyan" },
  { text: "Ready for junior DevOps, cloud, and platform roles", tag: "LIVE", tagColor: "text-green" },
];

const heroTags = [
  "Kubernetes GitOps",
  "AWS + Terraform",
  "CI/CD",
  "Linux",
  "Observability",
];

const flagshipSignals = [
  {
    label: "Completed flagship",
    value: "ERP Lite GitOps Homelab",
  },
  {
    label: "Completed flagship",
    value: "AWS Secure Terraform Infra",
  },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(bootLines.length);
  const [skipped, setSkipped] = useState(true);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion.current) {
      setVisibleLines(bootLines.length);
      setSkipped(true);
      return;
    }

    setVisibleLines(1);
    setSkipped(false);

    const delays = [160, 360, 560, 760, 960, 1160];
    const timers = delays.map((delay, index) =>
      setTimeout(() => setVisibleLines(index + 1), delay)
    );
    const doneTimer = setTimeout(() => setSkipped(true), 1400);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(doneTimer);
    };
  }, []);

  const skip = () => {
    setVisibleLines(bootLines.length);
    setSkipped(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-void pt-16"
      aria-label="Platform Lab hero"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-80 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,229,255,0.08) 0%, rgba(41,121,255,0.04) 38%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-6 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-14">
        <div className="min-w-0">
          <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded border border-green/35 bg-green/7 px-3 py-1.5 font-mono text-xs font-medium text-green">
            <span className="h-2 w-2 rounded-full bg-green pulse-dot" aria-hidden="true" />
            Platform Lab Online
          </p>

          <h1 className="mb-4 max-w-[10ch] break-words font-display text-4xl font-bold leading-none text-text sm:text-5xl md:text-6xl lg:text-7xl">
            Kalash Bijukchhe
          </h1>

          <p className="mb-4 max-w-[18ch] break-words font-display text-2xl font-semibold leading-tight text-cyan sm:text-3xl md:text-4xl">
            Aspiring Junior DevOps / Cloud / Platform Engineer
          </p>

          <p className="mb-7 flex items-center gap-2 text-sm font-medium text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Sydney, Australia
          </p>

          <div className="mb-7 flex max-w-full flex-wrap gap-2" role="list" aria-label="Core platform skills">
            {heroTags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="max-w-full break-words rounded-full border border-cyan/25 bg-cyan/7 px-3 py-1 font-mono text-xs text-cyan"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mb-8 max-w-[58ch] text-base leading-relaxed text-muted sm:text-lg">
            IT student with a full-stack development background, now focused on hands-on
            infrastructure projects across Kubernetes, AWS, Terraform, CI/CD, Linux, and
            monitoring. The portfolio is positioned as a Cloud Operations Command Center:
            honest status, concrete proof points, and infrastructure-first work.
          </p>

          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            {flagshipSignals.map((item) => (
              <div
                key={item.value}
                className="min-w-0 rounded-lg border border-border bg-surface/80 p-4"
              >
                <p className="mb-1 font-mono text-xs text-green">{item.label}</p>
                <p className="break-words text-sm font-semibold leading-snug text-text">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded bg-cyan px-5 py-3 text-sm font-semibold text-void transition-all duration-200 hover:bg-cyan/90 sm:w-auto"
              style={{ boxShadow: "0 0 20px rgba(0,229,255,0.22)" }}
            >
              View Platform Projects
            </a>
            <a
              href="https://github.com/kaybe005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded border border-cyan/40 px-5 py-3 text-sm font-medium text-cyan transition-all duration-200 hover:border-cyan hover:bg-cyan/8 sm:w-auto"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kayb05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded border border-cyan/40 px-5 py-3 text-sm font-medium text-cyan transition-all duration-200 hover:border-cyan hover:bg-cyan/8 sm:w-auto"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="min-w-0 space-y-5">
          <BootTerminal visibleLines={visibleLines} skipped={skipped} onSkip={skip} />
          <div className="hidden justify-center md:flex" aria-hidden="true">
            <ClusterDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function BootTerminal({
  visibleLines,
  skipped,
  onSkip,
}: {
  visibleLines: number;
  skipped: boolean;
  onSkip: () => void;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-border bg-surface/95 glow-cyan">
      <div className="flex min-w-0 items-center gap-2 border-b border-border bg-black/35 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] opacity-75" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] opacity-75" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41] opacity-75" />
        </div>
        <p className="min-w-0 break-words font-mono text-xs text-muted">
          platform lab status
        </p>
        {!skipped && (
          <button
            type="button"
            onClick={onSkip}
            className="ml-auto rounded border border-border px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-muted hover:text-text"
          >
            Skip
          </button>
        )}
      </div>

      <div
        className="min-h-[214px] p-4 font-mono text-xs text-muted sm:p-5"
        aria-live="polite"
        aria-label="Platform lab status summary"
      >
        {bootLines.map((line, index) => (
          <div
            key={line.text}
            className={`flex min-w-0 items-start gap-3 py-1 transition-opacity duration-150 ${
              index < visibleLines ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index >= visibleLines}
          >
            <span className="mt-0.5 text-muted/50" aria-hidden="true">&gt;</span>
            <span className="min-w-0 flex-1 break-words leading-relaxed">{line.text}</span>
            <span
              className={`shrink-0 rounded-sm border border-current/30 px-1.5 py-0.5 text-[10px] uppercase ${line.tagColor}`}
            >
              {line.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClusterDiagram() {
  return (
    <svg
      viewBox="0 0 400 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[400px]"
      role="img"
      aria-label="Kubernetes GitOps homelab topology illustration"
    >
      <rect x="1" y="1" width="398" height="428" rx="8" stroke="#1E2D3D" strokeWidth="1" />
      <rect x="1" y="1" width="398" height="34" rx="8" fill="#0D1117" />
      <rect x="1" y="24" width="398" height="11" fill="#0D1117" />
      <circle cx="18" cy="18" r="4.5" fill="#FF5F57" opacity="0.72" />
      <circle cx="33" cy="18" r="4.5" fill="#FFBD2E" opacity="0.72" />
      <circle cx="48" cy="18" r="4.5" fill="#28CA41" opacity="0.72" />
      <text x="116" y="22" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8899A6">K8s GitOps Homelab</text>

      <rect x="1" y="35" width="398" height="393" fill="#080B10" />

      <path d="M78 88 L78 126" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5 4" className="flow-path" opacity="0.72" />
      <path d="M78 200 L78 238" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5 4" className="flow-path" opacity="0.72" />
      <path d="M78 298 L58 342" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 4" className="flow-path-slow" opacity="0.5" />
      <path d="M78 298 L204 342" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 4" className="flow-path-slow" opacity="0.5" />
      <path d="M58 380 L332 380" stroke="#00E676" strokeWidth="1" strokeDasharray="4 4" className="flow-path-slow" opacity="0.42" />
      <path d="M206 148 L122 176" stroke="#2979FF" strokeWidth="1" strokeDasharray="4 4" className="flow-path-slow" opacity="0.5" />

      <rect x="44" y="56" width="68" height="34" rx="6" fill="#0D1117" stroke="#1E2D3D" strokeWidth="1" />
      <text x="78" y="77" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#E8EDF2" textAnchor="middle">GitHub</text>

      <text x="124" y="68" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8899A6">GH Actions</text>
      <text x="124" y="80" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8899A6">Docker Buildx</text>
      <text x="124" y="92" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8899A6">GHCR push</text>

      <rect x="166" y="132" width="82" height="34" rx="6" fill="#0D1117" stroke="#1E2D3D" strokeWidth="1" />
      <text x="207" y="153" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#E8EDF2" textAnchor="middle">GHCR</text>

      <rect x="38" y="170" width="84" height="42" rx="6" fill="#0D1117" stroke="#00B4D8" strokeWidth="1" />
      <text x="80" y="188" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#00E5FF" textAnchor="middle">ArgoCD</text>
      <text x="80" y="202" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#8899A6" textAnchor="middle">sync</text>

      <rect x="22" y="238" width="114" height="50" rx="6" fill="#0D1117" stroke="#00B4D8" strokeWidth="1.5" />
      <text x="79" y="260" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#00E5FF" textAnchor="middle">k3s Control</text>
      <text x="79" y="276" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#8899A6" textAnchor="middle">Traefik + TLS</text>

      <rect x="18" y="342" width="82" height="38" rx="6" fill="#0D1117" stroke="#1E2D3D" strokeWidth="1" />
      <text x="59" y="358" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#E8EDF2" textAnchor="middle">App Pod</text>
      <text x="59" y="371" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8899A6" textAnchor="middle">Next.js</text>

      <rect x="164" y="342" width="82" height="38" rx="6" fill="#0D1117" stroke="#1E2D3D" strokeWidth="1" />
      <text x="205" y="358" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#E8EDF2" textAnchor="middle">Postgres</text>
      <text x="205" y="371" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8899A6" textAnchor="middle">PVC</text>

      <rect x="292" y="342" width="90" height="38" rx="6" fill="#0D1117" stroke="#1E2D3D" strokeWidth="1" />
      <text x="337" y="358" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#00E676" textAnchor="middle">Prometheus</text>
      <text x="337" y="371" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8899A6" textAnchor="middle">Grafana</text>

      <rect x="1" y="404" width="398" height="24" fill="#0D1117" />
      <circle cx="14" cy="416" r="4" fill="#00E676" />
      <text x="24" y="420" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#8899A6">Flagship lab documented</text>
      <text x="310" y="420" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#8899A6">SYD-LAB</text>
    </svg>
  );
}
