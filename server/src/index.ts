import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const PORT = process.env.PORT || 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/agents', async (_req, res) => {
  const agents = await prisma.agent.findMany();
  res.json(agents);
});

app.post('/api/agents', async (req, res) => {
  const agent = await prisma.agent.create({
    data: { name: req.body.name, role: req.body.role, status: req.body.status || 'idle' }
  });
  res.status(201).json(agent);
});

app.get('/api/tasks', async (_req, res) => {
  const tasks = await prisma.task.findMany({ include: { agent: true } });
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const task = await prisma.task.create({
    data: { title: req.body.title, description: req.body.description, status: req.body.status || 'pending', assigneeId: req.body.assigneeId }
  });
  res.status(201).json(task);
});

app.patch('/api/tasks/:id', async (req, res) => {
  const task = await prisma.task.update({
    where: { id: req.params.id },
    data: { status: req.body.status }
  });
  res.json(task);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
