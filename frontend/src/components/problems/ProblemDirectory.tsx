"use client";

import { useState, useMemo } from "react";
import type { Problem, Difficulty, ProblemStatus } from "@/lib/types";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { StatusChip } from "@/components/ui/StatusChip";

const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];
const STATUSES: ProblemStatus[] = ["To do", "In progress", "Completed", "Revisit"];

interface FilterState {
  search: string;
  topic: string;
  difficulty: string;
  status: string;
}

const INITIAL_FILTERS: FilterState = {
  search: "",
  topic: "All",
  difficulty: "All",
  status: "All",
};

function topicSlugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function ProblemDirectory({
  problems,
  topicSlugs,
}: {
  problems: Problem[];
  topicSlugs: string[];
}) {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);

  const uniqueTopics = useMemo(
    () => Array.from(new Set(problems.map((p) => p.topicSlug))).sort(),
    [problems],
  );

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      if (
        filters.search &&
        !p.title.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }
      if (filters.topic !== "All" && p.topicSlug !== filters.topic) {
        return false;
      }
      if (filters.difficulty !== "All" && p.difficulty !== filters.difficulty) {
        return false;
      }
      if (filters.status !== "All" && p.status !== filters.status) {
        return false;
      }
      return true;
    });
  }, [problems, filters]);

  function resetFilters() {
    setFilters(INITIAL_FILTERS);
  }

  const topicTitleMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const slug of topicSlugs) {
      map[slug] = topicSlugToTitle(slug);
    }
    return map;
  }, [topicSlugs]);

  return (
    <div className="flex flex-col gap-5">
      {/* Search */}
      <div>
        <label htmlFor="problem-search" className="sr-only">
          Search problems
        </label>
        <input
          id="problem-search"
          type="text"
          placeholder="Search by problem title..."
          value={filters.search}
          onChange={(e) =>
            setFilters((f) => ({ ...f, search: e.target.value }))
          }
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-supporting-gray focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
        />
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Topic */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="filter-topic"
            className="text-xs font-medium text-supporting-gray"
          >
            Topic
          </label>
          <select
            id="filter-topic"
            value={filters.topic}
            onChange={(e) =>
              setFilters((f) => ({ ...f, topic: e.target.value }))
            }
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
          >
            <option value="All">All topics</option>
            {uniqueTopics.map((slug) => (
              <option key={slug} value={slug}>
                {topicTitleMap[slug] ?? slug}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="filter-difficulty"
            className="text-xs font-medium text-supporting-gray"
          >
            Difficulty
          </label>
          <select
            id="filter-difficulty"
            value={filters.difficulty}
            onChange={(e) =>
              setFilters((f) => ({ ...f, difficulty: e.target.value }))
            }
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
          >
            <option value="All">All difficulties</option>
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="filter-status"
            className="text-xs font-medium text-supporting-gray"
          >
            Status
          </label>
          <select
            id="filter-status"
            value={filters.status}
            onChange={(e) =>
              setFilters((f) => ({ ...f, status: e.target.value }))
            }
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
          >
            <option value="All">All statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Reset */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-transparent select-none">
            &nbsp;
          </span>
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-supporting-gray transition-colors hover:bg-surface-hover hover:text-foreground focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
          >
            Reset filters
          </button>
        </div>
      </div>

      {/* Result count */}
      <p className="text-sm text-supporting-gray">
        <span className="font-medium text-foreground">{filtered.length}</span>{" "}
        problem{filtered.length !== 1 ? "s" : ""} shown
      </p>

      {/* Problem list */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface px-6 py-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No demo problems match your current filters.
          </p>
          <p className="mt-1 text-sm text-supporting-gray">
            Try adjusting your search or filter criteria.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-supporting-gray transition-colors hover:bg-surface-hover hover:text-foreground focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {filtered.map((problem) => (
            <div
              key={problem.id}
              className="flex flex-col gap-3 rounded-xl border border-border bg-surface px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-secondary-purple">
                    {topicTitleMap[problem.topicSlug] ?? problem.topicSlug}
                  </span>
                  <span className="text-border" aria-hidden="true">
                    &middot;
                  </span>
                  <span className="font-medium text-foreground">
                    {problem.title}
                  </span>
                  <DifficultyBadge difficulty={problem.difficulty} />
                  <StatusChip status={problem.status} />
                  {problem.bookmarked && (
                    <span
                      className="inline-flex items-center"
                      aria-label="Bookmarked"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="text-accent-yellow"
                        aria-hidden="true"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                    </span>
                  )}
                  {problem.hasNotes && (
                    <span
                      className="inline-flex items-center"
                      aria-label="Has notes"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-supporting-gray"
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
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
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
              >
                Practice
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
