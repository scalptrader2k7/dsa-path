import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              DSA Path
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-supporting-gray">
              A structured learning companion for data structures and
              algorithms. Follow curated roadmaps, practice problems, and
              track your progress.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-supporting-gray transition-colors hover:text-foreground"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/topics"
                  className="text-sm text-supporting-gray transition-colors hover:text-foreground"
                >
                  Topics
                </Link>
              </li>
              <li>
                <Link
                  href="/problems"
                  className="text-sm text-supporting-gray transition-colors hover:text-foreground"
                >
                  Problems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Account</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link
                  href="/login"
                  className="text-sm text-supporting-gray transition-colors hover:text-foreground"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-sm text-supporting-gray transition-colors hover:text-foreground"
                >
                  Create account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-primary-blue/20 bg-primary-blue/5 px-4 py-3 text-xs text-primary-blue">
          <strong className="font-semibold">Note:</strong> This is a demo
          workspace. All progress, activity, notes, bookmarks, and account
          screens are illustrative only. Your data will be connected in a
          future release.
        </div>

        <div className="mt-6 border-t border-border pt-6 text-center text-xs text-supporting-gray">
          DSA Path. Built for learning. Not affiliated with LeetCode.
        </div>
      </div>
    </footer>
  );
}
