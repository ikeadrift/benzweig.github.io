import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default class AgentManager {
  constructor(io) {
    this.io = io;
    this.agents = new Map();
  }

  async sendToAgent(agentId, message) {
    const history = this.agents.get(agentId) || [];
    const messages = [
      { role: 'system', content: `You are agent ${agentId}` },
      ...history,
      { role: 'user', content: message }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0613',
      messages,
      functions: [
        {
          name: 'send_message',
          description: 'Send a message to another agent',
          parameters: {
            type: 'object',
            properties: {
              recipient: { type: 'string' },
              content: { type: 'string' }
            },
            required: ['recipient', 'content']
          }
        }
      ]
    });

    const choice = response.choices[0];
    const msg = choice.message;

    history.push({ role: 'user', content: message });
    history.push(msg);
    this.agents.set(agentId, history);

    if (msg.function_call) {
      const args = JSON.parse(msg.function_call.arguments);
      if (msg.function_call.name === 'send_message') {
        return this.handleSendMessage(agentId, args);
      }
    }

    return { content: msg.content };
  }

  async handleSendMessage(from, { recipient, content }) {
    this.io.emit('agentWalking', { from, to: recipient });
    return this.sendToAgent(recipient, content);
  }
}
