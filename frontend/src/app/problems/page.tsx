import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { problems } from "@/data/problems";
import { topics } from "@/data/topics";
import { ProblemDirectory } from "@/components/problems/ProblemDirectory";

export const metadata: Metadata = {
  title: "Problems",
};

export default function ProblemsPage() {
  const topicSlugs = topics.map((t) => t.slug);

  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <DemoNotice />
        <div>
          <SectionHeading>Problem directory</SectionHeading>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-supporting-gray">
            Browse, search, and filter the full demo problem set. Statuses,
            notes, and bookmarks shown here are illustrative and are not saved.
          </p>
        </div>

        <p className="text-xs text-supporting-gray">
          Practice links open external problem pages. Recording your progress
          back into DSA Path will be available in a future release.
        </p>

        <ProblemDirectory problems={problems} topicSlugs={topicSlugs} />
      </div>
    </PageContainer>
  );
}
