import { type Project } from "@/data/projects";
import { TechTag } from "./FocusAreas";

const statusConfig = {
  "completed-flagship": {
    label: "Completed flagship",
    dot: "bg-green",
    text: "text-green",
    border: "border-green/45",
    bg: "bg-green/7",
    glow: "glow-green",
  },
  completed: {
    label: "Completed",
    dot: "bg-green",
    text: "text-green",
    border: "border-green/35",
    bg: "bg-green/6",
    glow: "",
  },
  "in-progress": {
    label: "In Progress",
    dot: "bg-amber",
    text: "text-amber",
    border: "border-amber/35",
    bg: "bg-amber/6",
    glow: "glow-amber",
  },
  planned: {
    label: "Planned",
    dot: "bg-muted",
    text: "text-muted",
    border: "border-border",
    bg: "bg-void",
    glow: "",
  },
} as const;

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const evidenceLabel =
    project.status === "completed-flagship" || project.status === "completed"
      ? "What it proves"
      : project.status === "in-progress"
        ? "Build scope"
        : "Planned scope";
  const diagramLabel =
    project.status === "completed-flagship"
      ? "Architecture evidence"
      : project.status === "completed"
        ? "Delivery workflow"
      : project.status === "in-progress"
        ? "Pipeline in progress"
        : "Planned lab shape";

  return (
    <article
      className={`min-w-0 overflow-hidden rounded-lg border bg-surface transition-all duration-200 hover:border-border-accent hover:glow-cyan ${
        project.status === "completed-flagship" ? "border-cyan/35 shadow-[0_0_0_1px_rgba(0,229,255,0.05)]" : "border-border"
      }`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Header strip */}
      <div className="flex min-w-0 flex-col gap-2 border-b border-border bg-black/20 px-5 py-3 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <span className="min-w-0 break-words font-mono text-[10px] uppercase text-muted">
          {project.label}
        </span>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>

      {/* Body: 60/40 split on desktop */}
      <div className="grid min-w-0 md:grid-cols-[minmax(0,1fr)_minmax(260px,320px)]">
        {/* Content */}
        <div className="min-w-0 p-5 md:p-8">
          <h3 className="mb-4 break-words font-display text-xl font-bold leading-snug text-text">
            {project.title}
          </h3>
          <p className="mb-6 max-w-[56ch] text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {/* What it proves */}
          <p className="mb-3 font-mono text-[10px] uppercase text-muted">
            {evidenceLabel}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-6" role="list">
            {project.whatItProves.map((item) => (
              <li key={item} className="flex min-w-0 items-start gap-2 text-sm text-text">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" aria-hidden="true" />
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="mb-6 flex min-w-0 flex-wrap gap-1.5">
            {project.techTags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded border border-cyan/40 px-4 py-2 text-sm font-medium text-cyan transition-all duration-200 hover:border-cyan hover:bg-cyan/8 sm:w-auto"
                aria-label={`View ${project.title} on GitHub (opens in new tab)`}
              >
                View Repo
              </a>
            ) : (
              <span
                className="inline-flex w-full items-center justify-center gap-1.5 rounded border border-border px-4 py-2 text-sm font-medium text-muted opacity-70 sm:w-auto"
                aria-label="Repository not yet available"
                title="Coming soon"
              >
                {project.status === "in-progress"
                  ? "In Progress"
                  : project.status === "planned"
                    ? "Planned"
                    : "Completed"}
              </span>
            )}
          </div>
        </div>

        {/* Architecture diagram panel */}
        {project.architectureDiagram && (
          <div
            className="flex min-w-0 flex-col border-t border-border bg-black/30 p-5 md:border-l md:border-t-0 md:p-6"
            aria-labelledby={`${project.id}-diagram-title`}
            aria-describedby={`${project.id}-diagram-description`}
          >
            <p
              id={`${project.id}-diagram-title`}
              className="mb-3 font-mono text-[9px] uppercase text-muted"
            >
              {diagramLabel}
            </p>
            <p id={`${project.id}-diagram-description`} className="sr-only">
              {project.architectureDiagram.join(" ")}
            </p>
            <pre
              className="min-w-0 flex-1 whitespace-pre-wrap break-words font-mono text-[10.5px] leading-[1.75] text-cyan sm:text-[11px]"
              aria-hidden="true"
            >
              {project.architectureDiagram.map((line, i) => {
                if (line.startsWith("[") && line.endsWith("]")) {
                  return <span key={i} className="text-cyan">{line}{"\n"}</span>;
                }
                if (line.startsWith("->") || line.startsWith("+->") || line.startsWith("- ")) {
                  return <span key={i} className="text-amber">{line}{"\n"}</span>;
                }
                if (line.includes("sha-") || line.includes("commit")) {
                  return <span key={i} className="text-amber">{line}{"\n"}</span>;
                }
                return <span key={i} className="text-muted/70">{line}{"\n"}</span>;
              })}
            </pre>
          </div>
        )}
      </div>
    </article>
  );
}

function StatusBadge({ status, label }: { status: Project["status"]; label: string }) {
  const s = statusConfig[status];
  const isSpinning = status === "in-progress";

  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-[10px] uppercase ${s.text} ${s.border} ${s.bg} ${s.glow}`}
      aria-label={`Status: ${label}`}
    >
      {isSpinning ? (
        <span className="spin-slow inline-block h-2 w-2 rounded-full border border-amber border-t-transparent" aria-hidden="true" />
      ) : (
        <span
          className={`w-1.5 h-1.5 rounded-full ${s.dot} ${status !== "planned" ? "pulse-dot" : ""}`}
          aria-hidden="true"
        />
      )}
      {label}
    </span>
  );
}
