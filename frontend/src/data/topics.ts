import type { Topic } from "@/lib/types";

export const topics: Topic[] = [
  {
    slug: "arrays",
    title: "Arrays",
    description:
      "Master array manipulation, traversal patterns, and in-place techniques that form the backbone of technical interviews.",
    totalProblems: 28,
    completedProblems: 8,
    inProgressProblems: 2,
    continueLearning: true,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
  {
    slug: "strings",
    title: "Strings",
    description:
      "Work with character arrays, substring search, parsing, and encoding problems that appear across all difficulty levels.",
    totalProblems: 24,
    completedProblems: 6,
    inProgressProblems: 1,
    continueLearning: false,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
  {
    slug: "linked-lists",
    title: "Linked Lists",
    description:
      "Understand pointer manipulation, cycle detection, and merging techniques for singly and doubly linked structures.",
    totalProblems: 18,
    completedProblems: 3,
    inProgressProblems: 0,
    continueLearning: false,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
  {
    slug: "stacks-and-queues",
    title: "Stacks & Queues",
    description:
      "Apply LIFO and FIFO structures to expression evaluation, monotonic stacks, and sliding window problems.",
    totalProblems: 14,
    completedProblems: 2,
    inProgressProblems: 0,
    continueLearning: false,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
  {
    slug: "trees",
    title: "Trees",
    description:
      "Navigate binary trees, BSTs, and N-ary trees using recursive and iterative traversal strategies.",
    totalProblems: 26,
    completedProblems: 5,
    inProgressProblems: 1,
    continueLearning: true,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
  {
    slug: "graphs",
    title: "Graphs",
    description:
      "Tackle graph traversal, shortest path, topological sort, and union-find across directed and undirected representations.",
    totalProblems: 22,
    completedProblems: 3,
    inProgressProblems: 0,
    continueLearning: false,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
  {
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    description:
      "Break problems into overlapping subproblems with memoization and tabulation to optimize time and space complexity.",
    totalProblems: 20,
    completedProblems: 4,
    inProgressProblems: 1,
    continueLearning: false,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
  {
    slug: "greedy",
    title: "Greedy",
    description:
      "Identify locally optimal choices that lead to globally optimal solutions in scheduling, allocation, and optimization problems.",
    totalProblems: 12,
    completedProblems: 2,
    inProgressProblems: 0,
    continueLearning: false,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
  {
    slug: "backtracking",
    title: "Backtracking",
    description:
      "Explore constraint satisfaction, permutation generation, and decision-tree pruning with systematic backtracking.",
    totalProblems: 16,
    completedProblems: 3,
    inProgressProblems: 0,
    continueLearning: false,
    sections: ["Foundations", "Core Patterns", "Interview Practice"],
  },
];
