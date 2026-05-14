export interface SkillDomain {
  id: string;
  icon: string;
  title: string;
  description: string;
  tools: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: "orchestration",
    icon: "K8s",
    title: "Container Orchestration",
    description:
      "Building a production-style homelab workflow with Kubernetes, Helm, ArgoCD, ingress, TLS, and persistent storage.",
    tools: ["Kubernetes", "k3s", "Helm", "ArgoCD", "Docker", "GHCR", "GitOps"],
  },
  {
    id: "cloud",
    icon: "AWS",
    title: "Cloud Infrastructure",
    description:
      "Terraform-managed AWS networking, compute, IAM, and SSM patterns for secure learning architectures.",
    tools: [
      "AWS",
      "Terraform",
      "VPC",
      "ALB",
      "EC2",
      "IAM",
      "SSM",
      "NAT Gateway",
    ],
  },
  {
    id: "cicd",
    icon: "CI",
    title: "CI/CD & Containers",
    description:
      "Pipeline design for build, test, security scan, immutable tag, push, and deploy workflows.",
    tools: [
      "GitHub Actions",
      "Docker",
      "Trivy",
      "GHCR",
      "Buildx",
      "linux/amd64",
    ],
  },
  {
    id: "operations",
    icon: "Ops",
    title: "Operations & Observability",
    description:
      "Monitoring, alerting, and hands-on debugging across pod failures, DNS, ingress, TLS, and resource pressure.",
    tools: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Linux",
      "DNS",
      "TLS",
      "Traefik",
    ],
  },
];

export const supplementaryTools = [
  "cert-manager",
  "Nginx",
  "PostgreSQL",
  "Prisma",
  "Next.js",
  "Git",
  "Bash",
  "Python",
  "TypeScript",
  "Node.js",
];

export interface RoadmapPhase {
  id: string;
  phase: "done" | "active" | "next" | "planned";
  label: string;
  items: string[];
}

export const roadmap: RoadmapPhase[] = [
  {
    id: "done",
    phase: "done",
    label: "Completed",
    items: [
      "ERP Lite K8s GitOps workflow",
      "AWS Terraform web infrastructure",
      "GitHub Actions to GHCR pipeline",
      "Helm + ArgoCD deployment sync",
      "Traefik + cert-manager TLS",
      "PVC-backed PostgreSQL",
    ],
  },
  {
    id: "active",
    phase: "active",
    label: "In Progress",
    items: [
      "Secure CI/CD pipeline",
      "Trivy CVE scanning gate",
      "Container build hardening",
      "Pipeline documentation",
      "Failure-mode notes",
    ],
  },
  {
    id: "next",
    phase: "next",
    label: "Next",
    items: [
      "CKA exam prep",
      "Terraform modules",
      "Remote state (S3/DynamoDB)",
      "Linux+ study",
      "Secret management basics",
    ],
  },
  {
    id: "planned",
    phase: "planned",
    label: "Planned",
    items: [
      "K8s observability lab",
      "Alertmanager rules",
      "Incident simulation runbooks",
      "Backup / restore workflow practice",
      "Multi-node K8s cluster",
    ],
  },
];

export const certifications = [
  { label: "AWS Cloud Practitioner", status: "studying" },
  { label: "CKA", status: "planned" },
  { label: "Linux+", status: "planned" },
];
