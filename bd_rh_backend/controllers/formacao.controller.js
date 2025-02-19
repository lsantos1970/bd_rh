// bd_rh_backend/controllers/formacao.controller.js
const Formacao = require('../models/formacao.model');

/** Criar nova formação */
async function criarFormacao(req, res) {
  try {
    const novaFormacao = await Formacao.create(req.body);
    return res.status(201).json(novaFormacao);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

/** Listar todas as formações */
async function listarFormacoes(req, res) {
  try {
    const lista = await Formacao.find();
    return res.json(lista);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

/** Obter 1 formação pelo seu id */
async function obterFormacao(req, res) {
  try {
    const { id } = req.params;
    const formacao = await Formacao.findById(id);
    if (!formacao) {
      return res.status(404).json({ message: 'Formação não encontrada.' });
    }
    return res.json(formacao);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

/** Atualizar */
async function atualizarFormacao(req, res) {
  try {
    const { id } = req.params;
    const atualizacao = req.body;
    const updated = await Formacao.findByIdAndUpdate(id, atualizacao, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Formação não encontrada para atualizar.' });
    }
    return res.json(updated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

/** Remover */
async function removerFormacao(req, res) {
  try {
    const { id } = req.params;
    const removida = await Formacao.findByIdAndDelete(id);
    if (!removida) {
      return res.status(404).json({ message: 'Formação não encontrada para remover.' });
    }
    return res.json({ message: 'Formação removida com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  criarFormacao,
  listarFormacoes,
  obterFormacao,
  atualizarFormacao,
  removerFormacao
};
