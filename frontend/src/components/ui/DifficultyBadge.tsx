import type { Difficulty } from "@/lib/types";

const styles: Record<Difficulty, string> = {
  Easy: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Medium: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Hard: "bg-red-500/15 text-red-400 border-red-500/20",
};

export function DifficultyBadge({
  difficulty,
  className = "",
}: {
  difficulty: Difficulty;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[difficulty]} ${className}`}
    >
      {difficulty}
    </span>
  );
}
