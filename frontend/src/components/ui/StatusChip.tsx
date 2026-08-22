import type { ProblemStatus } from "@/lib/types";

const styles: Record<ProblemStatus, string> = {
  "To do": "bg-surface text-supporting-gray border-border",
  "In progress": "bg-primary-blue/15 text-primary-blue border-primary-blue/20",
  Completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Revisit: "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

export function StatusChip({
  status,
  className = "",
}: {
  status: ProblemStatus;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]} ${className}`}
    >
      {status}
    </span>
  );
}
