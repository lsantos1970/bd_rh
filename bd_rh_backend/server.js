// server.js
// Importa as rotas
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const formacaoRoutes = require('./routes/formacao.routes');
const colaboradorRoutes = require('./routes/colaborador.routes');
const pedidoRoutes = require('./routes/pedido.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Conectar ao MongoDB
connectDB();


// Usar rotas
app.use('/api/colaboradores', colaboradorRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/formacoes', formacaoRoutes);

// Rotas de autenticação
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('API RH a funcionar!');
});

// Escuta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
