import type { TopicWithProblems } from "@/lib/types";
import { problems } from "./problems";

const topicDetails: Record<string, TopicWithProblems> = {};

for (const slug of [
  "arrays",
  "strings",
  "linked-lists",
  "stacks-and-queues",
  "trees",
  "graphs",
  "dynamic-programming",
  "greedy",
  "backtracking",
]) {
  const topicProblems = problems.filter((p) => p.topicSlug === slug);
  const base = topicProblems[0];
  if (base) {
    topicDetails[slug] = {
      slug,
      title: base.topicSlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      description: "",
      totalProblems: topicProblems.length,
      completedProblems: topicProblems.filter(
        (p) => p.status === "Completed",
      ).length,
      inProgressProblems: topicProblems.filter(
        (p) => p.status === "In progress",
      ).length,
      continueLearning: false,
      sections: ["Foundations", "Core Patterns", "Interview Practice"],
      problems: topicProblems,
    };
  }
}

const topicMeta: Record<
  string,
  { title: string; description: string; continueLearning?: boolean }
> = {
  arrays: {
    title: "Arrays",
    description:
      "Master array manipulation, traversal patterns, and in-place techniques that form the backbone of technical interviews.",
    continueLearning: true,
  },
  strings: {
    title: "Strings",
    description:
      "Work with character arrays, substring search, parsing, and encoding problems that appear across all difficulty levels.",
  },
  "linked-lists": {
    title: "Linked Lists",
    description:
      "Understand pointer manipulation, cycle detection, and merging techniques for singly and doubly linked structures.",
  },
  trees: {
    title: "Trees",
    description:
      "Navigate binary trees, BSTs, and N-ary trees using recursive and iterative traversal strategies.",
    continueLearning: true,
  },
  graphs: {
    title: "Graphs",
    description:
      "Tackle graph traversal, shortest path, topological sort, and union-find across directed and undirected representations.",
  },
  "dynamic-programming": {
    title: "Dynamic Programming",
    description:
      "Break problems into overlapping subproblems with memoization and tabulation to optimize time and space complexity.",
  },
  greedy: {
    title: "Greedy",
    description:
      "Identify locally optimal choices that lead to globally optimal solutions in scheduling, allocation, and optimization problems.",
  },
  backtracking: {
    title: "Backtracking",
    description:
      "Explore constraint satisfaction, permutation generation, and decision-tree pruning with systematic backtracking.",
  },
  "stacks-and-queues": {
    title: "Stacks & Queues",
    description:
      "Apply LIFO and FIFO structures to expression evaluation, monotonic stacks, and sliding window problems.",
  },
};

for (const [slug, detail] of Object.entries(topicDetails)) {
  const meta = topicMeta[slug];
  if (meta) {
    detail.title = meta.title;
    detail.description = meta.description;
    detail.continueLearning = meta.continueLearning ?? false;
  }
}

export function getTopicDetail(slug: string): TopicWithProblems | null {
  return topicDetails[slug] ?? null;
}

export function getAllTopicSlugs(): string[] {
  return Object.keys(topicDetails);
}
