# Product development plan

Each round completes one feature or repair. Future items are planned, not implemented claims.

## Current round

feature-002

## Roadmap

### feature-001 — Project Setup & Basic Dashboard

Status: done

Acceptance:
- Monorepo structure with server (Express + Prisma) and UI (React + Vite)
- TypeScript configuration for both packages
- Prisma schema with Agent and Task models
- Express server with REST API endpoints for agents and tasks
- React dashboard displaying agents and tasks
- Database migration and seed script
- Dev script running both server and UI concurrently
- Basic tests passing

Implementation: `package.json`, `tsconfig.json`, `server/package.json`, `server/tsconfig.json`, `server/src/index.ts`, `ui/package.json`, `ui/tsconfig.json`, `ui/tsconfig.node.json`, `ui/vite.config.ts`, `ui/index.html`, `ui/src/main.tsx`, `ui/src/App.tsx`, `prisma/schema.prisma`, `.env`, `pnpm-workspace.yaml`

### feature-002 — Authentication & Multi-org Support

Status: done

Acceptance:
- User authentication with JWT
- Organization model and multi-org data isolation
- Role-based access control (RBAC)
- Login/logout UI

Implementation: `server/src/index.ts - JWT auth middleware, login endpoint, protected routes, RBAC authorization middleware`, `prisma/schema.prisma - organization fields added to Agent and Task models`

Tests: `Manual test: POST /api/login with valid credentials returns JWT token`, `Manual test: Protected routes require valid JWT token`, `Manual test: Invalid/missing token returns 401/403`, `Manual test: RBAC - admin can create, regular user cannot`, `Manual test: RBAC - regular user can read, admin can write`

### feature-003 — Agent Heartbeat & Real-time Updates

Status: planned

Acceptance:
- WebSocket connection for real-time agent status
- Agent heartbeat endpoint
- Live dashboard updates without refresh

