import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { Card, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <PageContainer className="flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Visual-preview notice */}
        <div
          className="mb-6 rounded-lg border border-primary-blue/20 bg-primary-blue/5 px-4 py-3 text-sm text-primary-blue"
          role="note"
        >
          <strong className="font-semibold">Visual preview</strong> --
          authentication is not available yet. Secure sign-in will arrive in a
          future release.
        </div>

        <Card>
          <CardTitle className="text-center text-xl">Welcome back</CardTitle>
          <p className="mt-2 text-center text-sm text-supporting-gray">
            Sign in to pick up where you left off. Your progress, notes, and
            bookmarks will sync across sessions.
          </p>

          {/* Future form fields — non-functional */}
          <div className="mt-6 flex flex-col gap-4">
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
                autoComplete="current-password"
                placeholder="Enter your password"
                disabled
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder-supporting-gray opacity-70 focus:border-secondary-purple focus:outline-none focus:ring-1 focus:ring-secondary-purple"
                aria-disabled="true"
              />
            </div>

            {/* Forgot password — static, no route */}
            <div className="text-right">
              <span className="text-xs text-supporting-gray">
                Forgot password? Coming soon.
              </span>
            </div>

            {/* Disabled submit button */}
            <button
              type="button"
              disabled
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary-purple px-4 py-2.5 text-sm font-medium text-white opacity-50"
              aria-disabled="true"
              aria-describedby="signin-disabled-reason"
            >
              Sign in coming soon
            </button>
            <p
              id="signin-disabled-reason"
              className="text-center text-xs text-supporting-gray"
            >
              Authentication is not available yet in this demo.
            </p>
          </div>

          {/* Link to register */}
          <p className="mt-5 text-center text-sm text-supporting-gray">
            New to DSA Path?{" "}
            <Link
              href="/register"
              className="font-medium text-secondary-purple transition-colors hover:text-secondary-purple/80"
            >
              Create an account.
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
