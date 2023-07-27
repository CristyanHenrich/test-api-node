const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const app = express();
const port = 3000;

// Configurar o CORS para permitir qualquer IP de origem
app.use(cors());

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: `Essa é uma rota de teste da API: ${port} !` });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});