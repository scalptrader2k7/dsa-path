import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DemoNotice } from "@/components/ui/DemoNotice";
import {
  CompassIcon,
  CodeIcon,
  TrendingUpIcon,
  ArrowRightIcon,
  CheckIcon,
  FlameIcon,
  LayersIcon,
} from "@/components/icons";
import { topics } from "@/data/topics";
import { dashboardData } from "@/data/dashboard";

const previewTopics = topics.slice(0, 6);
const previewAchievements = dashboardData.achievements.filter((a) => a.earned).slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-purple/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-secondary-purple/30 bg-secondary-purple/10 px-3 py-1 text-xs font-medium text-secondary-purple">
              Structured DSA preparation
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-heading-navy sm:text-5xl lg:text-6xl">
              Master algorithms with a
              <span className="text-secondary-purple"> clear learning path</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-supporting-gray sm:text-xl">
              DSA Path gives you curated roadmaps, a focused problem workspace,
              and full visibility into your learning progress -- so you always
              know what to study next.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/topics" variant="primary" size="lg">
                Explore topics
                <ArrowRightIcon size={18} />
              </Button>
              <Button href="/dashboard" variant="secondary" size="lg">
                View demo dashboard
              </Button>
            </div>
            <DemoNotice className="mx-auto mt-8 max-w-lg" />
            <p className="mt-4 text-sm text-supporting-gray">
              Personal accounts and saved tracking are coming in a future
              release.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-xl text-center">
            <SectionHeading>Why DSA Path?</SectionHeading>
            <p className="mt-3 text-supporting-gray">
              Everything you need to prepare systematically, without the noise.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Card className="flex flex-col items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-purple/15 text-secondary-purple">
                <CompassIcon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Curated learning paths
              </h3>
              <p className="text-sm leading-relaxed text-supporting-gray">
                Follow topic-organized roadmaps from foundations through
                interview practice. Each path is designed to build on the
                previous one, with clear progression markers.
              </p>
            </Card>
            <Card className="flex flex-col items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-blue/15 text-primary-blue">
                <CodeIcon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Focused problem workspace
              </h3>
              <p className="text-sm leading-relaxed text-supporting-gray">
                Work through grouped problem sets organized by difficulty and
                pattern. Each problem links directly to its external practice
                page so you can solve without context-switching.
              </p>
            </Card>
            <Card className="flex flex-col items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-yellow/15 text-accent-yellow">
                <TrendingUpIcon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Progress visibility
              </h3>
              <p className="text-sm leading-relaxed text-supporting-gray">
                See exactly where you stand across every topic. Track
                completions, difficulty breakdowns, and learning streaks at a
                glance so nothing falls through the cracks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual preview: topic progress + dashboard glimpse */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-xl text-center">
            <SectionHeading>Your learning at a glance</SectionHeading>
            <p className="mt-3 text-supporting-gray">
              A preview of the progress tracking and dashboard insights
              available in the demo workspace.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Topic progress cards */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-supporting-gray">
                Topic progress
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {previewTopics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/topics/${topic.slug}`}
                    className="group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-secondary-purple/30 hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground group-hover:text-secondary-purple">
                        {topic.title}
                      </span>
                      <span className="text-xs text-supporting-gray">
                        {topic.completedProblems}/{topic.totalProblems}
                      </span>
                    </div>
                    <ProgressBar
                      value={topic.completedProblems}
                      max={topic.totalProblems}
                      className="mt-3"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Dashboard metrics preview */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-supporting-gray">
                Dashboard preview
              </h3>
              <Card>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary-purple">
                      {dashboardData.metrics.completedProblems}
                    </p>
                    <p className="mt-1 text-xs text-supporting-gray">
                      Solved
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {dashboardData.currentStreak}
                    </p>
                    <p className="mt-1 text-xs text-supporting-gray">
                      Day streak
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {dashboardData.achievements.filter((a) => a.earned).length}
                    </p>
                    <p className="mt-1 text-xs text-supporting-gray">
                      Badges
                    </p>
                  </div>
                </div>
                <div className="mt-5 border-t border-border pt-5">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-supporting-gray">
                    Difficulty breakdown
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      {
                        label: "Easy",
                        completed: dashboardData.metrics.easyCompleted,
                        total: dashboardData.metrics.easyTotal,
                      },
                      {
                        label: "Medium",
                        completed: dashboardData.metrics.mediumCompleted,
                        total: dashboardData.metrics.mediumTotal,
                      },
                      {
                        label: "Hard",
                        completed: dashboardData.metrics.hardCompleted,
                        total: dashboardData.metrics.hardTotal,
                      },
                    ].map((d) => (
                      <div key={d.label} className="flex items-center gap-3">
                        <DifficultyBadge difficulty={d.label as "Easy" | "Medium" | "Hard"} />
                        <ProgressBar
                          value={d.completed}
                          max={d.total}
                          className="flex-1"
                        />
                        <span className="w-12 text-right text-xs text-supporting-gray">
                          {d.completed}/{d.total}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Achievements preview */}
              <Card>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-supporting-gray">
                  Earned achievements
                </p>
                <div className="flex flex-col gap-2">
                  {previewAchievements.map((a) => (
                    <div
                      key={a.id}
                      className="flex items-center gap-3 rounded-lg bg-background/50 px-3 py-2"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary-purple/15 text-secondary-purple">
                        {a.icon === "flame" ? (
                          <FlameIcon size={14} />
                        ) : a.icon === "layers" ? (
                          <LayersIcon size={14} />
                        ) : (
                          <CheckIcon size={14} />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">
                          {a.title}
                        </p>
                        <p className="truncate text-xs text-supporting-gray">
                          {a.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-xl text-center">
            <SectionHeading>Start your DSA journey</SectionHeading>
            <p className="mt-3 text-supporting-gray">
              Browse the full topic catalogue and see how DSA Path can guide
              your preparation.
            </p>
            <div className="mt-8">
              <Button href="/topics" variant="primary" size="lg">
                Explore topics
                <ArrowRightIcon size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
