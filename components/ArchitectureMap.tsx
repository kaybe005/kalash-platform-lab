"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "./FocusAreas";

interface LaneItem {
  label: string;
  sub: string;
  color: string;
  state: "Completed" | "In progress" | "Planned";
}

const homeLab: LaneItem[] = [
  { label: "k3s Cluster", sub: "Control plane", color: "#00E5FF", state: "Completed" },
  { label: "ArgoCD", sub: "GitOps sync", color: "#00E5FF", state: "Completed" },
  { label: "Traefik", sub: "Ingress + TLS", color: "#8899A6", state: "Completed" },
  { label: "App Pod", sub: "Next.js/Prisma", color: "#8899A6", state: "Completed" },
  { label: "Postgres", sub: "PVC-backed", color: "#8899A6", state: "Completed" },
  { label: "Grafana", sub: "Dashboards", color: "#00E676", state: "Completed" },
];

const cloudLane: LaneItem[] = [
  { label: "AWS VPC", sub: "Public + private subnets", color: "#2979FF", state: "Completed" },
  { label: "ALB", sub: "Public load balancer", color: "#2979FF", state: "Completed" },
  { label: "EC2 / Nginx", sub: "Private subnet only", color: "#8899A6", state: "Completed" },
  { label: "NAT Gateway", sub: "Private outbound access", color: "#8899A6", state: "Completed" },
  { label: "SSM", sub: "Admin access without SSH", color: "#8899A6", state: "Completed" },
  { label: "Terraform", sub: "Infrastructure as code", color: "#2979FF", state: "Completed" },
];

const deliveryLane: LaneItem[] = [
  { label: "GitHub Actions", sub: "Push + PR checks", color: "#8899A6", state: "Completed" },
  { label: "npm ci", sub: "Clean install", color: "#8899A6", state: "Completed" },
  { label: "Typecheck", sub: "TypeScript validation", color: "#00E676", state: "Completed" },
  { label: "ESLint", sub: "Lint validation", color: "#00E676", state: "Completed" },
  { label: "Vercel", sub: "Production deployment", color: "#8899A6", state: "Completed" },
  { label: ".dev DNS", sub: "Name.com domain", color: "#2979FF", state: "Completed" },
];

const opsLane: LaneItem[] = [
  { label: "Prometheus", sub: "Metrics scraping", color: "#00E676", state: "Completed" },
  { label: "Alertmanager", sub: "Alert routing", color: "#FFB300", state: "Planned" },
  { label: "Runbooks", sub: "Incident response", color: "#8899A6", state: "Planned" },
  { label: "Linux / DNS", sub: "Debugging practice", color: "#8899A6", state: "In progress" },
];

export default function ArchitectureMap() {
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
      id="architecture"
      ref={sectionRef}
      className="bg-surface border-y border-border py-24 md:py-32"
      aria-labelledby="arch-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="reveal mb-12">
          <SectionLabel>System Topology</SectionLabel>
          <h2
            id="arch-heading"
            className="mb-3 font-display text-3xl font-bold text-text md:text-4xl"
          >
            Infrastructure Map
          </h2>
          <p className="text-muted text-lg max-w-[55ch] leading-relaxed">
            A status-aware view of completed flagship infrastructure work, the completed portfolio CI/CD delivery path, and planned observability practice.
          </p>
        </div>

        <div className="reveal min-w-0 overflow-hidden rounded-lg border border-border">
          {/* Chrome header */}
          <div className="flex min-w-0 flex-wrap items-center gap-3 border-b border-border bg-black/40 px-5 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-70" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-70" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41] opacity-70" />
            </div>
            <span className="min-w-0 break-words font-mono text-xs text-muted">portfolio infrastructure overview</span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green pulse-dot" aria-hidden="true" />
              <span className="font-mono text-[10px] text-green">ONLINE</span>
            </div>
          </div>

          {/* Lanes grid */}
          <div className="grid md:grid-cols-2 gap-px bg-border" role="region" aria-label="Infrastructure topology by lane">
            <Lane
              title="Homelab Cluster"
              icon="K8s"
              iconColor="text-cyan"
              description="Completed ERP Lite homelab workflow using k3s, ArgoCD, Helm, Traefik, TLS, and persistent PostgreSQL."
              items={homeLab}
              accentColor="border-cyan/30"
            />
            <Lane
              title="Cloud Infrastructure"
              icon="AWS"
              iconColor="text-blue"
              description="Completed Terraform-managed AWS environment with public/private networking, ALB to private EC2, NAT, IAM, and SSM access."
              items={cloudLane}
              accentColor="border-blue/30"
            />
            <Lane
              title="Delivery Pipeline"
              icon="CI"
              iconColor="text-amber"
              description="Completed portfolio CI/CD workflow with GitHub Actions checks, Vercel deployment, and a live custom .dev domain."
              items={deliveryLane}
              accentColor="border-amber/30"
            />
            <Lane
              title="Operations"
              icon="Ops"
              iconColor="text-green"
              description="Prometheus/Grafana monitoring is represented in the flagship work; alerting, incident simulations, and runbooks are planned."
              items={opsLane}
              accentColor="border-green/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Lane({
  title,
  icon,
  iconColor,
  description,
  items,
  accentColor,
}: {
  title: string;
  icon: string;
  iconColor: string;
  description: string;
  items: LaneItem[];
  accentColor: string;
}) {
  return (
    <div className="min-w-0 bg-void p-5 sm:p-6">
      {/* Lane header */}
      <div className="flex items-center gap-3 mb-3">
        <span className={`inline-flex h-8 w-10 items-center justify-center rounded border border-border bg-surface font-mono text-xs ${iconColor}`} aria-hidden="true">{icon}</span>
        <h3 className="min-w-0 break-words font-display text-base font-semibold text-text">{title}</h3>
      </div>
      <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>

      {/* Node grid */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className={`min-w-0 rounded border bg-surface p-3 transition-colors duration-200 hover:border-current ${accentColor}`}
            style={{ borderLeftColor: item.color, borderLeftWidth: "2px" }}
          >
            <p className="mb-0.5 break-words font-mono text-[11px] font-medium" style={{ color: item.color }}>
              {item.label}
            </p>
            <p className="break-words font-mono text-[10px] text-muted">{item.sub}</p>
            <p className="mt-2 font-mono text-[10px] text-muted/80">{item.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
