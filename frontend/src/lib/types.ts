export type Difficulty = "Easy" | "Medium" | "Hard";

export type ProblemStatus =
  | "To do"
  | "In progress"
  | "Completed"
  | "Revisit";

export interface Problem {
  id: string;
  title: string;
  slug: string;
  difficulty: Difficulty;
  topicSlug: string;
  section: string;
  status: ProblemStatus;
  bookmarked: boolean;
  hasNotes: boolean;
  externalUrl: string;
  description: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  totalProblems: number;
  completedProblems: number;
  inProgressProblems: number;
  continueLearning: boolean;
  sections: string[];
}

export interface TopicWithProblems extends Topic {
  problems: Problem[];
}

export interface DashboardMetrics {
  totalProblems: number;
  completedProblems: number;
  easyTotal: number;
  easyCompleted: number;
  mediumTotal: number;
  mediumCompleted: number;
  hardTotal: number;
  hardCompleted: number;
}

export interface ActivityDay {
  date: string;
  count: number;
}

export interface DashboardData {
  metrics: DashboardMetrics;
  recentActivity: ActivityDay[];
  currentStreak: number;
  longestStreak: number;
  topicProgress: Topic[];
  continueLearningTopic: Topic;
  continueLearningProblem: Problem;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
}
