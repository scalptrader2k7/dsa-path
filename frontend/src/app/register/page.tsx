import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { Card, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Create account",
};

export default function RegisterPage() {
  return (
    <PageContainer className="flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Visual-preview notice */}
        <div
          className="mb-6 rounded-lg border border-primary-blue/20 bg-primary-blue/5 px-4 py-3 text-sm text-primary-blue"
          role="note"
        >
          <strong className="font-semibold">Visual preview</strong> -- account
          creation and secure data storage are not available yet.
        </div>

        <Card>
          <CardTitle className="text-center text-xl">
            Create your learning workspace
          </CardTitle>
          <p className="mt-2 text-center text-sm text-supporting-gray">
            Set up an account to save progress, take notes, and bookmark
            problems as you work through the roadmap.
          </p>

          {/* Future form fields — non-functional */}
          <div className="mt-6 flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Display name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                disabled
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder-supporting-gray opacity-70 focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
                aria-disabled="true"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                disabled
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder-supporting-gray opacity-70 focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
                aria-disabled="true"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a password"
                disabled
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder-supporting-gray opacity-70 focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
                aria-disabled="true"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Confirm password
              </label>
              <input
                id="confirm-password"
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter your password"
                disabled
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder-supporting-gray opacity-70 focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
                aria-disabled="true"
              />
            </div>

            {/* Disabled submit button */}
            <button
              type="button"
              disabled
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary-purple px-4 py-2.5 text-sm font-medium text-white opacity-50"
              aria-disabled="true"
              aria-describedby="register-disabled-reason"
            >
              Account creation coming soon
            </button>
            <p
              id="register-disabled-reason"
              className="text-center text-xs text-supporting-gray"
            >
              Account creation is not available yet in this demo.
            </p>
          </div>

          {/* Link to login */}
          <p className="mt-5 text-center text-sm text-supporting-gray">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-secondary-purple transition-colors hover:text-secondary-purple/80"
            >
              Sign in.
            </Link>
          </p>
        </Card>

        {/* Future-account benefits panel */}
        <div className="mt-6 rounded-xl border border-border bg-surface px-5 py-4">
          <p className="mb-2 text-sm font-medium text-foreground">
            What your account will unlock
          </p>
          <ul className="flex flex-col gap-1.5 text-sm text-supporting-gray">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-yellow" />
              Saved progress across topics and problems
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-yellow" />
              Personal notes and bookmarks on any problem
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-yellow" />
              Continued learning from where you left off
            </li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}
