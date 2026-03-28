# Property Management Web — Architecture

## Chosen baseline
This project uses a repeatable standard structure intended for future web projects:
- Next.js + TypeScript + Tailwind
- App Router + feature-folder organization
- GitHub + Vercel deployment

## Initial feature slices
- `marketing-site` (landing + conversion pages)
- `owner-portal` (units, tenants, rent, maintenance)
- `operations` (tickets, vendors, workflows)

## Data strategy (phase 1)
- Start with typed mock data + local state
- Add hosted DB/API in phase 2 (Supabase or Neon + Prisma)

## Stitch handoff path
Once Stitch assets are provided (project link/export/screens), map each screen to:
- route path
- component tree
- responsive behavior
- interactions/state

Then implement in `src/features/` and connect to `src/app/` routes.
