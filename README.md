# ZaaZ

pnpm monorepo for the ZaaZ platform.

## Structure

- `apps/frontend` — Next.js (App Router) frontend: public site + admin dashboard
- `apps/backend` — Express/Node API server
- `infra` — Docker, nginx, and monitoring config shared by the backend

## Getting started

```bash
pnpm install

pnpm dev:frontend   # http://localhost:8080
pnpm dev:backend    # http://localhost:5000
```

## Scripts (root)

- `pnpm dev:frontend` / `pnpm dev:backend` — run one app in dev mode
- `pnpm build` — build all apps
- `pnpm build:frontend` / `pnpm build:backend` — build a single app
- `pnpm lint` — lint all apps
