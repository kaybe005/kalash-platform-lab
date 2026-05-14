export type ProjectStatus = "completed-flagship" | "completed" | "in-progress" | "planned";

export interface Project {
  id: string;
  label: string;
  title: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  techTags: string[];
  whatItProves: string[];
  repoUrl?: string;
  architectureDiagram?: string[];
}

export const projects: Project[] = [
  {
    id: "erp-lite-gitops",
    label: "LAB-001 / KUBERNETES GITOPS",
    title: "ERP Lite GitOps Homelab Platform",
    status: "completed-flagship",
    statusLabel: "Completed flagship",
    description:
      "Full-stack ERP application deployed through a Kubernetes GitOps workflow in a homelab environment.",
    techTags: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "GHCR",
      "Helm",
      "ArgoCD",
      "k3s",
      "Traefik",
      "cert-manager",
      "Prometheus",
      "Grafana",
    ],
    whatItProves: [
      "GitHub Actions -> GHCR image pipeline",
      "Helm chart + ArgoCD sync",
      "Traefik ingress + cert-manager TLS",
      "PVC-backed PostgreSQL",
      "Prometheus/Grafana monitoring",
      "Debugged ARM64/AMD64 image mismatch, imagePullPolicy, PVC drift, and migration issues",
    ],
    repoUrl: "https://github.com/kaybe005/erp-lite",
    architectureDiagram: [
      "[GitHub Push]",
      "     |",
      "     v",
      "[GitHub Actions]",
      " Build & Tag SHA",
      "     |",
      "     v",
      "[GHCR Image]",
      " sha-<commit>",
      "     |",
      "     v",
      "[ArgoCD Sync]",
      " Helm chart apply",
      "  |     |",
      "  v     v",
      "[App] [PG+PVC]",
      "  |",
      "  +-> [Prometheus]",
      "         |",
      "     [Grafana]",
    ],
  },
  {
    id: "aws-terraform-infra",
    label: "LAB-002 / CLOUD INFRASTRUCTURE IAC",
    title: "AWS Secure Web Infrastructure with Terraform",
    status: "completed-flagship",
    statusLabel: "Completed flagship",
    description:
      "Terraform-managed AWS infrastructure using public/private subnets, public ALB, private EC2, NAT outbound access, IAM, and SSM access without SSH.",
    techTags: [
      "Terraform",
      "AWS VPC",
      "ALB",
      "EC2",
      "NAT Gateway",
      "IAM",
      "SSM",
      "Security Groups",
      "Nginx",
      "IaC",
    ],
    whatItProves: [
      "Custom VPC with public/private subnet separation",
      "Internet-facing ALB to private EC2",
      "NAT Gateway for private outbound access",
      "EC2 without public IP",
      "SSM Session Manager access instead of SSH",
    ],
    repoUrl: "https://github.com/kaybe005/aws-terraform-web-infra",
    architectureDiagram: [
      "Internet",
      "    |",
      "[ ALB ] public subnet",
      "    |    port 80/443",
      "    v",
      "[EC2/Nginx] private",
      " no public IP",
      "    |",
      "[NAT GW] outbound only",
      "    |",
      " Internet",
      "",
      "Admin: SSM -> EC2",
      "(port 22 closed)",
    ],
  },
  {
    id: "devops-portfolio-cicd",
    label: "LAB-003 / PORTFOLIO CI/CD",
    title: "DevOps Portfolio CI/CD Pipeline",
    status: "completed",
    statusLabel: "Completed",
    description:
      "Built and deployed a DevOps-focused portfolio website using Next.js, TypeScript, GitHub Actions, Vercel, and a custom .dev domain. The CI workflow runs type checking, linting, and production build checks on push and pull requests.",
    techTags: [
      "Next.js",
      "TypeScript",
      "GitHub Actions",
      "Vercel",
      "CI/CD",
      "DNS",
      "Tailwind CSS",
    ],
    whatItProves: [
      "Built a public-facing DevOps/cloud portfolio with Next.js and TypeScript",
      "Added GitHub Actions CI for typecheck, lint, and production build validation",
      "Deployed through Vercel with a live custom .dev domain",
      "Documented the workflow as a real CI/CD deployment project",
      "Kept completed and planned projects clearly separated",
    ],
    repoUrl: "https://github.com/kaybe005/kalash-platform-lab",
    architectureDiagram: [
      "[GitHub Push / PR]",
      "     |",
      "     v",
      "[GitHub Actions CI]",
      " npm ci",
      " typecheck + lint + build",
      "     |",
      "     v",
      "[Vercel Deployment]",
      "     |",
      "     v",
      "[Name.com DNS]",
      "     |",
      "     v",
      "[kalashbijukchhe.dev]",
    ],
  },
  {
    id: "k8s-observability-lab",
    label: "LAB-004 / OBSERVABILITY SRE",
    title: "Kubernetes Observability & Incident Response Lab",
    status: "planned",
    statusLabel: "Planned",
    description:
      "SRE-style lab for Prometheus/Grafana dashboards, alerts, incident simulations, failed rollout debugging, and runbooks.",
    techTags: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Kubernetes",
      "Incident Response",
      "Runbooks",
    ],
    whatItProves: [
      "Prometheus/Grafana dashboards",
      "Alert rules and incident routing",
      "Simulated CrashLoopBackOff and OOMKilled debugging",
      "Failed rollout investigation practice",
      "Runbooks for repeatable incident response",
    ],
    architectureDiagram: [
      "[App Pods]",
      "    | metrics",
      "    v",
      "[Prometheus]",
      "    |",
      "[Grafana]",
      " dashboards",
      "",
      "[Alertmanager]",
      " alert rules",
      " routing",
      "",
      "Incidents:",
      "-> CrashLoopBackOff",
      "-> OOMKilled",
      "-> Failed rollout",
    ],
  },
];

export const legacyProjects = [
  {
    id: "fyntra",
    title: "Fyntra",
    description:
      "Full-stack fintech-style web application. Deepened my understanding of auth flows, relational data modelling, and API design.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    id: "coincise",
    title: "Coincise",
    description:
      "Cryptocurrency data dashboard with real-time price feeds, charting, and state management across data-heavy views.",
    tags: ["React", "Node.js", "REST API", "Charting"],
  },
  {
    id: "tourism-system",
    title: "Tourism Management System",
    description:
      "Multi-role web application for managing tourism bookings, operators, and admin workflows. Focus on database schema design.",
    tags: ["PHP", "MySQL", "HTML/CSS", "CRUD"],
  },
  {
    id: "terrain-threejs",
    title: "Three.js Terrain Generator",
    description:
      "WebGL terrain visualisation with procedural generation. Introduced me to GPU pipelines, shader basics, and 3D rendering concepts.",
    tags: ["Three.js", "WebGL", "JavaScript", "GLSL"],
  },
];
