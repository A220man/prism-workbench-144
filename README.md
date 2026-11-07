# Prism Workbench — Ryan Vo

> Work in progress. This checkpoint may be incomplete or fail tests. See PLAN.md and STATUS.md before use.


AI Agent Orchestration Dashboard - Manage your AI agent workforce from a single interface.

## Quickstart

```bash
# Install dependencies
pnpm install

# Generate Prisma client
pnpm db:generate

# Run database migrations
pnpm db:migrate

# Start development servers (both API and UI)
pnpm dev
```

The UI will be available at http://localhost:5173 and the API at http://localhost:3001.

## Project Structure

```
prism-workbench/
├── package.json           # Root workspace config
├── tsconfig.json          # Root TypeScript config
├── prisma/
│   └── schema.prisma      # Database schema
├── server/                # Express API server
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── index.ts       # API entry point
└── ui/                    # React dashboard
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── index.html
    └── src/
        ├── main.tsx
        └── App.tsx
```

## Features

- **Agent Management**: View and manage AI agents with roles and statuses
- **Task Tracking**: Assign tasks to agents, track progress
- **Real-time Dashboard**: React UI with live data from Express API
- **Database**: SQLite with Prisma ORM for development

## Development

```bash
# Run type checking
pnpm typecheck

# Run tests
pnpm test

# Open Prisma Studio
pnpm db:studio

# Build for production
pnpm build
```

## Tech Stack

- **Runtime**: Node.js 20+
- **Package Manager**: pnpm 9
- **Language**: TypeScript
- **API**: Express.js
- **Database**: SQLite + Prisma ORM
- **Frontend**: React 18 + Vite
- **Testing**: Vitest

Maintainer: Ryan Vo <ryandtvo@gmail.com>
