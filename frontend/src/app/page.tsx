export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-24 px-8 gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-block h-1 w-16 rounded-full bg-accent-yellow" />
          <h1 className="text-4xl font-bold tracking-tight text-heading-navy sm:text-5xl">
            DSA Path
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-supporting-gray">
            Follow structured roadmaps, track your progress, and master data structures and algorithms at your own pace.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-md">
          <div className="rounded-lg border border-primary-blue/20 bg-primary-blue/5 p-6">
            <h2 className="text-lg font-semibold text-primary-blue mb-2">
              Structured Roadmaps
            </h2>
            <p className="text-sm leading-relaxed text-supporting-gray">
              Curated learning paths that guide you from fundamentals to advanced topics, with recommended resources at every step.
            </p>
          </div>

          <div className="rounded-lg border border-secondary-purple/20 bg-secondary-purple/5 p-6">
            <h2 className="text-lg font-semibold text-secondary-purple mb-2">
              Progress Tracking
            </h2>
            <p className="text-sm leading-relaxed text-supporting-gray">
              Monitor what you have completed, what is in progress, and what needs revision -- all in one place.
            </p>
          </div>

          <div className="rounded-lg border border-accent-yellow/20 bg-accent-yellow/5 p-6">
            <h2 className="text-lg font-semibold text-heading-navy mb-2">
              Never Lose Track
            </h2>
            <p className="text-sm leading-relaxed text-supporting-gray">
              Pick up exactly where you left off. Identify unfinished topics and keep your learning momentum going.
            </p>
          </div>
        </div>

        <p className="text-sm text-supporting-gray">
          More features coming soon.
        </p>
      </main>
    </div>
  );
}
