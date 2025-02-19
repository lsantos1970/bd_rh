// bd_rh_backend/models/formacao.model.js
const mongoose = require('mongoose');

const formacaoSchema = new mongoose.Schema({
  NAP_id: { type: Number, required: true },
  nome_completo: { type: String, required: true },
  nome_formacao: { type: String, required: true },
  data_inicio: { type: Date },
  data_fim: { type: Date },
  horas: { type: Number },
  tipo_formacao: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Formacao', formacaoSchema);
