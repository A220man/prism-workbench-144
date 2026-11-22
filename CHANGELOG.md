# Changelog

## 1.4.0 — work-in-progress checkpoint

Partial code published for continued development. Known issues: STATUS.md.

## 1.3.1 — JWT Authentication checkpoint

### Added
- User authentication with JWT: POST /api/login endpoint that issues JSON Web Tokens
- JWT authentication middleware: authenticateToken validates tokens and attaches user to request
- Protected API routes: GET/POST /api/agents and GET/POST /api/tasks require valid JWT
- Organization/organizationId fields added to Agent and Task models for multi-org data isolation

## 1.3.0 — work-in-progress checkpoint

Partial code published for continued development. Known issues: STATUS.md.

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
