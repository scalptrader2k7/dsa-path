import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { topics } from "@/data/topics";
import {
  CodeIcon,
  LayersIcon,
  DiamondIcon,
  CompassIcon,
  FlameIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Topics",
};

const topicIcons: Record<string, React.ReactNode> = {
  arrays: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  strings: <CodeIcon size={22} />,
  "linked-lists": <LayersIcon size={22} />,
  "stacks-and-queues": <LayersIcon size={22} />,
  trees: <DiamondIcon size={22} />,
  graphs: <CompassIcon size={22} />,
  "dynamic-programming": <FlameIcon size={22} />,
  greedy: <TrendingUpIcon size={22} />,
  backtracking: <RotateCcwIcon />,
};

function TrendingUpIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function RotateCcwIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  );
}

export default function TopicsPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8">
        <div>
          <SectionHeading>Topics</SectionHeading>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-supporting-gray">
            Browse curated DSA topic roadmaps. Each topic includes problems
            organized from foundations through interview practice.
          </p>
        </div>

        <DemoNotice />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const pct =
              topic.totalProblems > 0
                ? Math.round(
                    (topic.completedProblems / topic.totalProblems) * 100,
                  )
                : 0;

            return (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-secondary-purple/30 hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-purple/15 text-secondary-purple">
                    {topicIcons[topic.slug] ?? <CheckIcon size={22} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-base font-semibold text-foreground group-hover:text-secondary-purple">
                        {topic.title}
                      </h3>
                      {topic.continueLearning && (
                        <span className="shrink-0 rounded-full bg-secondary-purple/15 px-2 py-0.5 text-[11px] font-medium text-secondary-purple">
                          Continue learning
                        </span>
                      )}
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-supporting-gray">
                      {topic.description}
                    </p>
                  </div>
                  <ChevronRightIcon
                    size={18}
                    className="mt-1 shrink-0 text-supporting-gray transition-transform group-hover:translate-x-0.5 group-hover:text-secondary-purple"
                  />
                </div>
                <div className="mt-4 border-t border-border pt-3">
                  <div className="flex items-center justify-between text-xs text-supporting-gray">
                    <span>
                      {topic.completedProblems} / {topic.totalProblems} solved
                    </span>
                    <span className="font-semibold text-secondary-purple">
                      {pct}%
                    </span>
                  </div>
                  <ProgressBar
                    value={topic.completedProblems}
                    max={topic.totalProblems}
                    className="mt-2"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <Card>
          <h3 className="text-base font-semibold text-foreground">
            How the roadmap is organised
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-supporting-gray">
            Every topic is broken into three layers:
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-supporting-gray">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-purple" />
              <span>
                <strong className="font-medium text-foreground">Foundations</strong>{" "}
                core concepts, syntax, and basic operations you need before
                tackling patterns.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-blue" />
              <span>
                <strong className="font-medium text-foreground">Core patterns</strong>{" "}
                recurring techniques and problem shapes that appear across
                interviews and competitions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-yellow" />
              <span>
                <strong className="font-medium text-foreground">Interview practice</strong>{" "}
                curated problems that simulate real interview conditions and
                time pressure.
              </span>
            </li>
          </ul>
          <p className="mt-3 text-xs text-supporting-gray">
            Progress counts and completion percentages shown above are
            illustrative demo data and are not saved.
          </p>
        </Card>
      </div>
    </PageContainer>
  );
}
