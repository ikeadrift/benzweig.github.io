import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import dotenv from 'dotenv';
import AgentManager from './lib/agentManager.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(new URL('../client', import.meta.url).pathname));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

const agentManager = new AgentManager(io);

io.on('connection', (socket) => {
  console.log('Client connected');
});

app.post('/message/:agentId', async (req, res) => {
  const { agentId } = req.params;
  const { content } = req.body;
  try {
    const response = await agentManager.sendToAgent(agentId, content);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Agent error' });
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
