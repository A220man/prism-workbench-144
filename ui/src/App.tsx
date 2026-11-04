import { useEffect, useState } from 'react';

interface Agent {
  id: string;
  name: string;
  role: string;
  status: string;
}

interface Task {
  id: string;
  title: string;
  status: string;
  assignee: string;
}

function App() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('/api/agents').then(r => r.json()).then(setAgents);
    fetch('/api/tasks').then(r => r.json()).then(setTasks);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1>Prism Workbench</h1>
        <p>AI Agent Orchestration Dashboard</p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2>Agents</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {agents.map(agent => (
            <div key={agent.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
              <h3 style={{ margin: '0 0 8px' }}>{agent.name}</h3>
              <p style={{ margin: '0 0 8px', color: '#666' }}>{agent.role}</p>
              <span style={{
                display: 'inline-block',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: agent.status === 'active' ? '#d4edda' : '#f8d7da',
                color: agent.status === 'active' ? '#155724' : '#721c24',
                fontSize: '12px'
              }}>
                {agent.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Tasks</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '12px' }}>Title</th>
              <th style={{ padding: '12px' }}>Status</th>
              <th style={{ padding: '12px' }}>Assignee</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}>{task.title}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: task.status === 'in_progress' ? '#fff3cd' : '#e2e3e5',
                    color: task.status === 'in_progress' ? '#856404' : '#383d41',
                    fontSize: '12px'
                  }}>
                    {task.status}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  {agents.find(a => a.id === task.assignee)?.name || 'Unknown'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
