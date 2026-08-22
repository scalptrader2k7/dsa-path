import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { StatusChip } from "@/components/ui/StatusChip";
import {
  FlameIcon,
  CheckIcon,
  TrendingUpIcon,
  CodeIcon,
  ArrowRightIcon,
  AchievementIcon,
} from "@/components/icons";
import { dashboardData } from "@/data/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
};

function SummaryMetrics() {
  const { metrics, currentStreak, longestStreak } = dashboardData;
  const overallPct =
    metrics.totalProblems > 0
      ? Math.round((metrics.completedProblems / metrics.totalProblems) * 100)
      : 0;

  const items = [
    {
      label: "Problems solved",
      value: metrics.completedProblems,
      sub: `${metrics.totalProblems} total`,
      icon: <CheckIcon size={20} />,
      accent: "text-emerald-400",
    },
    {
      label: "Overall progress",
      value: `${overallPct}%`,
      sub: `${metrics.totalProblems} problems`,
      icon: <TrendingUpIcon size={20} />,
      accent: "text-secondary-purple",
    },
    {
      label: "Current streak",
      value: `${currentStreak}d`,
      sub: "consecutive days",
      icon: <FlameIcon size={20} />,
      accent: "text-amber-400",
    },
    {
      label: "Longest streak",
      value: `${longestStreak}d`,
      sub: "personal best",
      icon: <FlameIcon size={20} />,
      accent: "text-orange-400",
    },
  ];

  return (
    <section aria-label="Summary metrics">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.label}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-supporting-gray">
                  {item.label}
                </p>
                <p className={`mt-1 text-2xl font-bold ${item.accent}`}>
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs text-supporting-gray">
                  {item.sub}
                </p>
              </div>
              <span className={`${item.accent} opacity-60`}>{item.icon}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function DifficultyProgress() {
  const { metrics } = dashboardData;
  const rows: {
    label: string;
    completed: number;
    total: number;
    difficulty: "Easy" | "Medium" | "Hard";
  }[] = [
    {
      label: "Easy",
      completed: metrics.easyCompleted,
      total: metrics.easyTotal,
      difficulty: "Easy",
    },
    {
      label: "Medium",
      completed: metrics.mediumCompleted,
      total: metrics.mediumTotal,
      difficulty: "Medium",
    },
    {
      label: "Hard",
      completed: metrics.hardCompleted,
      total: metrics.hardTotal,
      difficulty: "Hard",
    },
  ];

  return (
    <section aria-label="Difficulty progress">
      <Card>
        <CardHeader>
          <CardTitle>Difficulty breakdown</CardTitle>
        </CardHeader>
        <div className="flex flex-col gap-4">
          {rows.map((row) => (
            <div key={row.label}>
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DifficultyBadge difficulty={row.difficulty} />
                  <span className="text-sm text-foreground">{row.label}</span>
                </div>
                <span className="text-sm text-supporting-gray">
                  {row.completed} / {row.total}
                </span>
              </div>
              <ProgressBar value={row.completed} max={row.total} />
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function ContinueLearning() {
  const { continueLearningTopic, continueLearningProblem } = dashboardData;

  return (
    <section aria-label="Continue learning">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CodeIcon size={18} className="text-secondary-purple" />
            <CardTitle>Continue learning</CardTitle>
          </div>
        </CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <p className="text-sm text-supporting-gray">
              Topic:{" "}
              <Link
                href={`/topics/${continueLearningTopic.slug}`}
                className="font-medium text-secondary-purple transition-colors hover:text-secondary-purple/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-purple"
              >
                {continueLearningTopic.title}
              </Link>
            </p>
            <p className="mt-1 text-base font-medium text-foreground">
              {continueLearningProblem.title}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <DifficultyBadge difficulty={continueLearningProblem.difficulty} />
              <StatusChip status={continueLearningProblem.status} />
            </div>
            <p className="mt-2 text-sm text-supporting-gray">
              {continueLearningProblem.description}
            </p>
          </div>
          <Link
            href={`/topics/${continueLearningTopic.slug}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-secondary-purple px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-purple/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-purple"
          >
            Resume practice
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </Card>
    </section>
  );
}

function ActivityChart() {
  const { recentActivity } = dashboardData;
  const maxCount = Math.max(...recentActivity.map((d) => d.count), 1);
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section aria-label="Last seven days activity">
      <Card>
        <CardHeader>
          <CardTitle>Last seven days</CardTitle>
        </CardHeader>
        <div className="flex gap-2" role="list" aria-label="Activity by day">
          {recentActivity.slice(-7).map((day) => {
            const heightPct =
              maxCount > 0 ? Math.round((day.count / maxCount) * 100) : 0;
            const dateObj = new Date(day.date + "T00:00:00");
            const dayLabel = dayLabels[dateObj.getDay()];
            return (
              <div
                key={day.date}
                className="flex flex-1 flex-col items-center gap-1.5"
              >
                <div
                  className="flex w-full items-end justify-center"
                  style={{ height: 100 }}
                  role="listitem"
                  aria-label={`${dayLabel}: ${day.count} problems`}
                >
                  <div
                    className="w-full max-w-[36px] rounded-t-sm bg-secondary-purple/80 transition-all"
                    style={{ height: `${Math.max(heightPct, 4)}%` }}
                  />
                </div>
                <span className="text-[11px] font-medium text-supporting-gray">
                  {dayLabel}
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
}

function HeatmapPreview() {
  const { recentActivity, currentStreak, longestStreak } = dashboardData;
  const displayDays = recentActivity.slice(-28);
  const maxCount = Math.max(...displayDays.map((d) => d.count), 1);

  function level(count: number): number {
    if (count === 0) return 0;
    const ratio = count / maxCount;
    if (ratio <= 0.25) return 1;
    if (ratio <= 0.5) return 2;
    if (ratio <= 0.75) return 3;
    return 4;
  }

  const fills = [
    "bg-surface",
    "bg-secondary-purple/20",
    "bg-secondary-purple/40",
    "bg-secondary-purple/60",
    "bg-secondary-purple/90",
  ];

  return (
    <section aria-label="Contribution activity heatmap">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Activity heatmap</CardTitle>
            <div className="flex items-center gap-4 text-xs text-supporting-gray">
              <span>
                Current streak:{" "}
                <span className="font-semibold text-amber-400">
                  {currentStreak}d
                </span>
              </span>
              <span>
                Longest streak:{" "}
                <span className="font-semibold text-orange-400">
                  {longestStreak}d
                </span>
              </span>
            </div>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <div
            className="inline-grid min-w-[400px] grid-cols-7 gap-1.5 sm:min-w-0 sm:grid-cols-7 sm:gap-1"
            role="img"
            aria-label="28-day activity heatmap"
          >
            {displayDays.map((day) => (
              <div
                key={day.date}
                className={`aspect-square rounded-sm ${fills[level(day.count)]}`}
                title={`${day.date}: ${day.count} problem${day.count !== 1 ? "s" : ""}`}
                aria-label={`${day.date}: ${day.count} problem${day.count !== 1 ? "s" : ""}`}
              />
            ))}
          </div>
        </div>
        <div
          className="mt-3 flex items-center justify-end gap-1"
          aria-hidden="true"
        >
          <span className="text-[10px] text-supporting-gray">Less</span>
          {fills.map((fill, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-sm ${fill} border border-border/50`}
            />
          ))}
          <span className="text-[10px] text-supporting-gray">More</span>
        </div>
      </Card>
    </section>
  );
}

function TopicProgress() {
  const { topicProgress } = dashboardData;

  return (
    <section aria-label="Topic progress">
      <div className="flex items-center justify-between">
        <SectionHeading>Topic progress</SectionHeading>
        <Link
          href="/topics"
          className="text-sm font-medium text-secondary-purple transition-colors hover:text-secondary-purple/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-purple"
        >
          View all topics
        </Link>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topicProgress.map((topic) => (
          <Card key={topic.slug}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Link
                  href={`/topics/${topic.slug}`}
                  className="text-base font-semibold text-foreground transition-colors hover:text-secondary-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-purple"
                >
                  {topic.title}
                </Link>
                <p className="mt-0.5 text-xs text-supporting-gray">
                  {topic.completedProblems} of {topic.totalProblems} completed
                  {topic.inProgressProblems > 0 &&
                    ` \u00B7 ${topic.inProgressProblems} in progress`}
                </p>
              </div>
              <span className="text-xs font-semibold text-secondary-purple">
                {topic.totalProblems > 0
                  ? Math.round((topic.completedProblems / topic.totalProblems) * 100)
                  : 0}
                %
              </span>
            </div>
            <ProgressBar
              className="mt-3"
              value={topic.completedProblems}
              max={topic.totalProblems}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  const { achievements } = dashboardData;
  const earned = achievements.filter((a) => a.earned).length;

  return (
    <section aria-label="Achievements">
      <SectionHeading>Achievements</SectionHeading>
      <p className="mt-1 text-sm text-supporting-gray">
        {earned} of {achievements.length} milestones reached (illustrative)
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <Card
            key={a.id}
            className={
              a.earned
                ? "border-secondary-purple/30 bg-secondary-purple/5"
                : "opacity-60"
            }
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                  a.earned
                    ? "bg-secondary-purple/20 text-secondary-purple"
                    : "bg-surface text-supporting-gray"
                }`}
              >
                <AchievementIcon name={a.icon} size={18} />
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm font-semibold ${
                    a.earned ? "text-foreground" : "text-supporting-gray"
                  }`}
                >
                  {a.title}
                </p>
                <p className="text-xs text-supporting-gray">{a.description}</p>
              </div>
              {a.earned ? (
                <CheckIcon
                  size={14}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
              ) : (
                <span className="mt-0.5 block h-3.5 w-3.5 shrink-0 rounded-full border border-border" />
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8">
        <div>
          <SectionHeading>Your practice overview</SectionHeading>
          <p className="mt-2 max-w-2xl text-sm text-supporting-gray">
            All metrics below come from demo data generated locally in the
            browser. Nothing is saved or transmitted.
          </p>
        </div>

        <DemoNotice />

        <SummaryMetrics />

        <div className="grid gap-6 lg:grid-cols-2">
          <DifficultyProgress />
          <ActivityChart />
        </div>

        <ContinueLearning />

        <HeatmapPreview />

        <TopicProgress />

        <Achievements />
      </div>
    </PageContainer>
  );
}
