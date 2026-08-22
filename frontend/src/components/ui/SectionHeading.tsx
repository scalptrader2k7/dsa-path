import type { ReactNode } from "react";

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl font-bold tracking-tight text-heading-navy ${className}`}
    >
      {children}
    </h2>
  );
}
