const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  NAP_id: { type: Number, required: true },
  nome_completo: { type: String, required: true },
  tipo_pedido: { type: String, required: true },
  data_inicio: { type: Date, required: true },
  data_fim: { type: Date }, 
}, {
  timestamps: true // Se quiseres criar campos createdAt, updatedAt
});

module.exports = mongoose.model('Pedidos', pedidoSchema);
