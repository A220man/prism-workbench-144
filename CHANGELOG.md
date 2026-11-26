# Changelog

## 1.5.0 — work-in-progress checkpoint

Partial code published for continued development. Known issues: STATUS.md.

## 1.5.0 — Authentication & RBAC checkpoint

### Added
- Role-based access control (RBAC) middleware: `authorizeRoles(allowedRoles)` 
- Two user roles: `admin` (can create agents/tasks) and `user` (can read only)
- `role` claim included in JWT payload upon login
- RBAC-protected routes: POST /api/agents, POST /api/tasks, PATCH /api/tasks/:id require admin role
- Regular authenticated users can GET /api/agents and GET /api/tasks (org-filtered)
- Updated in-memory user store with `role` field
- Updated JWT signing to include `role` in payload

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
