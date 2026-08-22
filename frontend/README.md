# DSA Path Frontend

Dark-mode-only Next.js frontend for **DSA Path**, a structured DSA learning and external-practice tracking product. This repository contains the visual and demo-data foundation built under Jira issue KAN-9.

## KAN-9 scope

KAN-9 delivers an original visual/demo-data foundation with no real backend or persistent state:

- **Landing page** -- product hero, feature highlights, topic preview, and dashboard metric previews.
- **Demo dashboard** -- completion summary, difficulty breakdown, activity chart, continue-learning prompt, heatmap preview, topic progress bars, and achievement cards.
- **Topics catalogue** -- grid of all topic cards with progress indicators.
- **Topic detail routes** -- data-driven learning roadmaps and problem lists for each topic.
- **Problem directory** -- client-side local search, topic/difficulty/status filters, live result count, reset, and a no-results state.
- **Login and Register previews** -- visual-only forms with disabled controls and explicit "coming soon" notices; no authentication is performed.
- **Shared foundation** -- responsive navigation, footer, dark UI system, accessibility-oriented components, and local typed demo data.

## Local setup

### Prerequisites

- Node.js 20 or later
- npm

### Install and run

From the `frontend/` directory:

```bash
npm install
npm run dev
npm run lint
npm run build
```

The development server normally starts at `http://localhost:3000`. A custom port can be passed if needed, for example `npm run dev -- -p 3001`.

## Routes

| Path | Description |
|---|---|
| `/` | Product landing page |
| `/dashboard` | Demo practice overview |
| `/topics` | Topic catalogue |
| `/topics/[slug]` | Topic learning roadmap and problem list |
| `/problems` | Searchable and filterable demo problem directory |
| `/login` | Visual-only sign-in preview |
| `/register` | Visual-only account-creation preview |

## Demo-only limitations

All behaviour in KAN-9 is illustrative and local:

- Progress, activity, streaks, achievements, notes, bookmarks, and account screens use local demo data only. No data is stored or transmitted.
- Login and registration do not authenticate users or create accounts. They are static visual previews with disabled controls.
- Problem directory filters operate entirely in browser memory and reset on page refresh.
- Practice links open external websites. Completion or progress on those sites is not synchronized back to DSA Path.
- No Supabase project, database, environment variables, credentials, API keys, or third-party platform integration is included in KAN-9.

## Next step

KAN-10 will introduce Supabase Auth and PostgreSQL. It will add real secure registration, login, logout, protected routes, and per-user profile persistence. Real problem progress, notes, bookmarks, activity, and external-platform integration are future follow-on work and are not present in KAN-9.

## Technical notes

- Built with the **Next.js App Router** and **TypeScript**.
- Local typed demo data lives in `src/data/`.
- Reusable UI and layout components live in `src/components/`.
- No additional dependencies beyond those already declared in `package.json` are required to run the frontend.
