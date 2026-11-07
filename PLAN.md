# Product development plan

Each round completes one feature or repair. Future items are planned, not implemented claims.

## Current round

feature-001

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

Status: planned

Acceptance:
- User authentication with JWT
- Organization model and multi-org data isolation
- Role-based access control (RBAC)
- Login/logout UI

### feature-003 — Agent Heartbeat & Real-time Updates

Status: planned

Acceptance:
- WebSocket connection for real-time agent status
- Agent heartbeat endpoint
- Live dashboard updates without refresh

