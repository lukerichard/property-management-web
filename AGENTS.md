# AGENTS.md — property-management-web

## Standard Stack (Use This for New Web Projects)
- Framework: Next.js (App Router)
- Language: TypeScript (strict)
- Styling: Tailwind CSS
- Deployment: Vercel
- Repo: GitHub

## Architecture Rules
- Keep routes in `src/app/`
- Feature modules in `src/features/<feature>/`
- Shared UI primitives in `src/components/ui/`
- Shared utilities in `src/lib/`
- Shared types in `src/types/`
- Config/constants in `src/config/`
- Specs/architecture docs in `docs/`

## Coding Standards
- Prefer server components by default; mark client components explicitly.
- Keep components small and composable.
- Co-locate feature-specific hooks/components under each feature module.
- No inline secrets; use `.env.local` and deployment env vars.

## Agent Work Split
- Pixel/UI agents: page composition, component styling, responsive polish.
- Forge/backend agents: API routes, schema, data access, auth integration.
- Shield/QA agents: tests, accessibility, CI checks, release validation.
- Arch/PM agents: backlog, acceptance criteria, rollout planning.

## Delivery Flow
1. Build feature branch
2. Run lint/typecheck/tests
3. Open PR with screenshots + test evidence
4. Merge to main
5. Auto-deploy to Vercel
