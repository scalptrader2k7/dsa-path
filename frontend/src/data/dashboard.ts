import type { DashboardData } from "@/lib/types";
import { topics } from "./topics";
import { problems } from "./problems";

const completedProblems = problems.filter((p) => p.status === "Completed");
const easyProblems = problems.filter((p) => p.difficulty === "Easy");
const mediumProblems = problems.filter((p) => p.difficulty === "Medium");
const hardProblems = problems.filter((p) => p.difficulty === "Hard");

const easyCompleted = easyProblems.filter((p) => p.status === "Completed");
const mediumCompleted = mediumProblems.filter(
  (p) => p.status === "Completed",
);
const hardCompleted = hardProblems.filter((p) => p.status === "Completed");

const recentActivity = Array.from({ length: 28 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (27 - i));
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const rand = Math.random();
  let count = 0;
  if (i < 21) {
    if (isWeekend) {
      count = rand > 0.3 ? Math.floor(rand * 4) + 1 : 0;
    } else {
      count = rand > 0.2 ? Math.floor(rand * 5) + 1 : 0;
    }
  } else {
    count = rand > 0.4 ? Math.floor(rand * 3) + 1 : 0;
  }
  return {
    date: date.toISOString().split("T")[0],
    count,
  };
});

const continueTopic = topics.find((t) => t.slug === "arrays")!;
const continueProblem = problems.find(
  (p) => p.topicSlug === "arrays" && p.status === "In progress",
)!;

export const dashboardData: DashboardData = {
  metrics: {
    totalProblems: problems.length,
    completedProblems: completedProblems.length,
    easyTotal: easyProblems.length,
    easyCompleted: easyCompleted.length,
    mediumTotal: mediumProblems.length,
    mediumCompleted: mediumCompleted.length,
    hardTotal: hardProblems.length,
    hardCompleted: hardCompleted.length,
  },
  recentActivity,
  currentStreak: 12,
  longestStreak: 21,
  topicProgress: topics,
  continueLearningTopic: continueTopic,
  continueLearningProblem: continueProblem,
  achievements: [
    {
      id: "first-solve",
      title: "First Solve",
      description: "Solved your first problem",
      icon: "check",
      earned: true,
    },
    {
      id: "ten-solves",
      title: "Getting Started",
      description: "Solved 10 problems",
      icon: "star",
      earned: true,
    },
    {
      id: "easy-streak",
      title: "Easy Streak",
      description: "Completed 5 Easy problems in a row",
      icon: "flame",
      earned: true,
    },
    {
      id: "multi-topic",
      title: "Well Rounded",
      description: "Solved problems in 5 different topics",
      icon: "layers",
      earned: true,
    },
    {
      id: "fifty-solves",
      title: "Half Century",
      description: "Solve 50 problems",
      icon: "trophy",
      earned: false,
    },
    {
      id: "all-difficulties",
      title: "Versatile Solver",
      description: "Solve at least one problem in every difficulty",
      icon: "diamond",
      earned: true,
    },
  ],
};
