# Changelog

## 1.2.0 — work-in-progress checkpoint

Partial code published for continued development. Known issues: STATUS.md.

## 1.1.0 — work-in-progress checkpoint

Partial code published for continued development. Known issues: STATUS.md.

## 1.0.0 — 2026-11-07

### Added
- Monorepo structure with Express API server and React Vite UI
- REST API endpoints: GET/POST /api/agents, GET/POST /api/tasks, PATCH /api/tasks/:id
- React 18 + Vite dashboard displaying agents and tasks
- Prisma schema with Agent and Task models
- TypeScript configuration for root, server, and UI
- Database migration script
- Concurrent dev script
- pnpm-workspace.yaml with @prisma/client hoisting

### Fixed
- Prisma client generation in monorepo context
