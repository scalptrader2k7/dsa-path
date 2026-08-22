export function ProgressBar({
  value,
  max,
  className = "",
  barClassName = "",
}: {
  value: number;
  max: number;
  className?: string;
  barClassName?: string;
}) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-surface ${className}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${pct}% complete`}
    >
      <div
        className={`h-full rounded-full bg-secondary-purple transition-all ${barClassName}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
