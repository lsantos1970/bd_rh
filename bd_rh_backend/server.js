// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const formacaoRoutes = require('./routes/formacao.routes');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
connectDB();

// Importa as rotas
const colaboradorRoutes = require('./routes/colaborador.routes');
const pedidoRoutes = require('./routes/pedido.routes');

// Usar rotas
app.use('/api/colaboradores', colaboradorRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/formacoes', formacaoRoutes);



app.get('/', (req, res) => {
  res.send('API RH a funcionar!');
});

// Escuta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
