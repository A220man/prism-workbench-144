// @ts-nocheck
import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 3001;
const prisma = new PrismaClient();

// In-memory user store for authentication
const users: Record<string, { password: string; organization: string }> = {
  admin: {
    password: 'admin123',
    organization: 'default',
  },
}

// User payload type stored in JWT
type JwtUser = { userId: string; username: string; organization: string }

// Middleware to authenticate JWT
function authenticateToken(req: Request, res: Response, next: Function): void {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    res.status(401).json({ error: 'Access denied. No token provided.' })
    return
  }

  jwt.verify(token, process.env.JWT_SECRET || 'prism-workbench-secret', (err: any, user: any) => {
    if (err) {
      res.status(403).json({ error: 'Invalid or expired token.' })
      return
    }
    ;(req as any).user = user as JwtUser
    next()
  })
}

// CORS and body parsing - must be before routes
app.use(cors());
app.use(express.json());

// Login endpoint - issues JWT on successful auth
app.post('/api/login', (req: Request, res: Response) => {
  const { username, password } = req.body

  const user = users[username]
  if (!user || user.password !== password) {
    res.status(401).json({ error: 'Invalid credentials.' })
    return
  }

  const token = jwt.sign(
    {
      userId: username,
      username,
      organization: user.organization,
    },
    process.env.JWT_SECRET || 'prism-workbench-secret',
    { expiresIn: '1h' }
  )

  res.json({ token })
})

// Protected API routes - require authentication
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), user: (req as any).user })
})

app.get('/api/agents', authenticateToken, async (req: Request, res: Response) => {
  if (!((req as any).user)) {
    res.status(401).json({ error: 'Authentication required.' })
    return
  }
  const agents = await prisma.agent.findMany({
    where: { organization: ((req as any).user as JwtUser).organization }
  })
  res.json(agents)
})

app.post('/api/agents', authenticateToken, async (req: Request, res: Response) => {
  const body: any = req.body
  const agent = await prisma.agent.create({
    data: { name: body.name, role: body.role, status: body.status || 'idle', organization: ((req as any).user as JwtUser).organization }
  })
  res.status(201).json(agent)
})

app.get('/api/tasks', authenticateToken, async (req: Request, res: Response) => {
  if (!((req as any).user)) {
    res.status(401).json({ error: 'Authentication required.' })
    return
  }
  const tasks = await prisma.task.findMany({
    include: { agent: true },
    where: { organization: ((req as any).user as JwtUser).organization }
  })
  res.json(tasks)
})

app.post('/api/tasks', authenticateToken, async (req: Request, res: Response) => {
  const body: any = req.body
  const task = await prisma.task.create({
    data: { title: body.title, description: body.description, status: body.status || 'pending', assigneeId: body.assigneeId, organization: ((req as any).user as JwtUser).organization }
  })
  res.status(201).json(task)
})

// Route: PATCH /api/tasks/:id
app.patch('/api/tasks/:id', authenticateToken, async (req: Request, res: Response) => {
  const body: any = req.body
  const task = await prisma.task.update({
    where: { id: req.params.id },
    data: { status: body.status }
  })
  res.json(task)
})

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), user: req.user })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
