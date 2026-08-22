export function DemoNotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg border border-primary-blue/20 bg-primary-blue/5 px-4 py-3 text-sm text-primary-blue ${className}`}
      role="note"
    >
      <strong className="font-semibold">Demo workspace</strong> -- progress,
      activity, notes, bookmarks, and account screens are illustrative only.
      Your data will be connected in a future release.
    </div>
  );
}
