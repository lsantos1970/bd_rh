// models/colaborador.model.js
const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  NAP_id: { type: Number, required: true, unique: true }, 
  nome_completo: { type: String, required: true },
  email: { type: String, required: true },
  cartao_cidadao: { type: String, required: true, unique: true },
  nif: { type: Number, required: true, unique: true },
  genero: { type: String },
  data_nascimento: { type: Date, required: true },
  nivel_escolaridade: { type: String, required: true },
  ano_inicio_profissional: { type: Number, required: true },
  situacao_atual: { type: String, required: true },
  modalidade_recrutamento: { type: String, required: true },
  categoria_atual: { type: String, required: true },
  regime_contrato_atual: { type: String, required: true },
  tipo_contrato_atual: { type: String, required: true },
  modalidade_horario_atual: { type: String, required: true },
  equipa_atual: { type: String, required: true },

  }, { timestamps: true });

module.exports = mongoose.model('Colaborador', colaboradorSchema);
