import type { Metadata } from "next";
import type { Problem } from "@/lib/types";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { StatusChip } from "@/components/ui/StatusChip";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { Button } from "@/components/ui/Button";
import {
  getTopicDetail,
  getAllTopicSlugs,
} from "@/data/topic-details";
import { ExternalLinkIcon, BookmarkIcon, NoteIcon } from "@/components/icons";

export function generateStaticParams() {
  return getAllTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicDetail(slug);
  return { title: topic?.title ?? "Topic" };
}

function TopicNotFound({ slug }: { slug: string }) {
  return (
    <PageContainer>
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <nav aria-label="Breadcrumb" className="w-full">
          <ol className="flex items-center justify-center gap-1.5 text-sm text-supporting-gray">
            <li>
              <Link
                href="/topics"
                className="transition-colors hover:text-foreground"
              >
                Topics
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">Not found</li>
          </ol>
        </nav>

        <div className="rounded-xl border border-border bg-surface px-8 py-12">
          <h1 className="text-2xl font-bold text-foreground">
            Topic not found
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-supporting-gray">
            The topic &ldquo;{slug}&rdquo; does not exist. It may have been
            removed or the link might be incorrect. Browse the full catalogue
            to find the right topic.
          </p>
          <div className="mt-6">
            <Button href="/topics" variant="secondary" size="md">
              Back to topics
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

function RoadmapStage({
  title,
  description,
  problems,
}: {
  title: string;
  description: string;
  problems: Problem[];
}) {
  if (problems.length === 0) return null;

  return (
    <section>
      <div className="mb-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-supporting-gray">
          {title}
        </h3>
        <p className="mt-1 text-xs text-supporting-gray">{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        {problems.map((problem) => (
          <Card
            key={problem.id}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-foreground">
                  {problem.title}
                </span>
                <DifficultyBadge difficulty={problem.difficulty} />
                <StatusChip status={problem.status} />
                {problem.bookmarked && (
                  <span className="inline-flex items-center" aria-label="Bookmarked">
                    <BookmarkIcon size={14} className="text-accent-yellow" />
                  </span>
                )}
                {problem.hasNotes && (
                  <span className="inline-flex items-center" aria-label="Has notes">
                    <NoteIcon size={14} className="text-supporting-gray" />
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-supporting-gray">
                {problem.description}
              </p>
            </div>
            <a
              href={problem.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Practice
              <ExternalLinkIcon size={14} />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicDetail(slug);

  if (!topic) {
    return <TopicNotFound slug={slug} />;
  }

  const topicProblems = topic.problems;
  const foundations = topicProblems.filter((p) => p.section === "Foundations");
  const corePatterns = topicProblems.filter(
    (p) => p.section === "Core Patterns",
  );
  const interviewPractice = topicProblems.filter(
    (p) => p.section === "Interview Practice",
  );

  const solved = topicProblems.filter((p) => p.status === "Completed").length;
  const pct =
    topic.totalProblems > 0
      ? Math.round((topic.completedProblems / topic.totalProblems) * 100)
      : 0;

  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-supporting-gray">
            <li>
              <Link
                href="/topics"
                className="transition-colors hover:text-foreground"
              >
                Topics
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">{topic.title}</li>
          </ol>
        </nav>

        <DemoNotice />

        {/* Topic header */}
        <div>
          <SectionHeading>{topic.title}</SectionHeading>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-supporting-gray">
            {topic.description}
          </p>
        </div>

        {/* Progress summary */}
        <Card>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-sm text-supporting-gray">
                <span className="font-medium text-foreground">{solved}</span> of{" "}
                {topic.totalProblems} problems solved
              </div>
              <ProgressBar
                value={topic.completedProblems}
                max={topic.totalProblems}
                className="w-40"
              />
              <span className="text-sm font-medium text-secondary-purple">
                {pct}%
              </span>
            </div>
            {topic.inProgressProblems > 0 && (
              <span className="rounded-full bg-primary-blue/15 px-2.5 py-0.5 text-xs font-medium text-primary-blue">
                {topic.inProgressProblems} in progress
              </span>
            )}
          </div>
        </Card>

        {/* External practice notice */}
        <p className="text-xs text-supporting-gray">
          Practice links open external problem pages. Recording your progress
          back into DSA Path will be available in a future release.
        </p>

        {/* Roadmap stages */}
        <RoadmapStage
          title="Foundations"
          description="Core concepts and introductory problems to build your base."
          problems={foundations}
        />
        <RoadmapStage
          title="Core Patterns"
          description="Recurring techniques that appear across many problems."
          problems={corePatterns}
        />
        <RoadmapStage
          title="Interview Practice"
          description="Challenging problems that mirror real interview scenarios."
          problems={interviewPractice}
        />

        {topicProblems.length === 0 && (
          <Card>
            <p className="text-sm text-supporting-gray">
              No demo problems available for this topic yet. Check back soon.
            </p>
          </Card>
        )}

        <div className="pt-4">
          <Button href="/topics" variant="secondary" size="sm">
            Back to topics
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
