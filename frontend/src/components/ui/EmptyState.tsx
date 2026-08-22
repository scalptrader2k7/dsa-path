import type { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-border border-dashed bg-surface/50 px-8 py-16 text-center">
      <p className="text-lg font-medium text-foreground">{title}</p>
      <p className="mt-2 max-w-sm text-sm text-supporting-gray">
        {description}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
