const WebSocket = require('ws');

// Crie um servidor WebSocket na porta 8080
const wss = new WebSocket.Server({ port: 3000 });

// Evento que é disparado quando uma conexão é estabelecida com o servidor WebSocket
wss.on('connection', (ws) => {
  console.log('Nova conexão estabelecida.');

  // Evento que é disparado quando a conexão é fechada
  ws.on('close', () => {
    console.log('Conexão fechada.');
  });
});

console.log('Servidor WebSocket iniciado.');
