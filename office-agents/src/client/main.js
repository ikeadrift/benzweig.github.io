const socket = io();
const app = new PIXI.Application({ view: document.getElementById('gameCanvas') });

const agents = {};
const positions = {
  agent1: { x: 100, y: 100 },
  agent2: { x: 300, y: 100 },
  agent3: { x: 500, y: 100 },
  agent4: { x: 200, y: 300 },
  agent5: { x: 400, y: 300 }
};

for (const [id, pos] of Object.entries(positions)) {
  const sprite = PIXI.Sprite.from(PIXI.Texture.WHITE);
  sprite.tint = 0x336699;
  sprite.width = sprite.height = 40;
  sprite.position.set(pos.x, pos.y);
  app.stage.addChild(sprite);
  agents[id] = sprite;
}

socket.on('agentWalking', ({ from, to }) => {
  const start = positions[from];
  const end = positions[to];
  const sprite = agents[from];
  if (!sprite || !end) return;
  const duration = 1000;
  const startTime = Date.now();
  const animate = () => {
    const t = Math.min(1, (Date.now() - startTime) / duration);
    sprite.x = start.x + (end.x - start.x) * t;
    sprite.y = start.y + (end.y - start.y) * t;
    if (t < 1) requestAnimationFrame(animate);
  };
  animate();
});

document.getElementById('sendBtn').onclick = async () => {
  const content = document.getElementById('userInput').value;
  document.getElementById('userInput').value = '';
  const res = await fetch('/message/agent1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content })
  });
  const data = await res.json();
  console.log(data);
};
