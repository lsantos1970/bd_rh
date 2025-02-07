// controllers/colaborador.controller.js
const Colaborador = require('../models/colaborador.model');

async function criarColaborador(req, res) {
  try {
    const novo = await Colaborador.create(req.body);
    return res.status(201).json(novo);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

async function listarColaboradores(req, res) {
  try {
    const lista = await Colaborador.find();
    return res.json(lista);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function removerColaborador(req, res) {
  try {
    const { id } = req.params;
    const colaboradorRemovido = await Colaborador.findByIdAndDelete(id);
    if (!colaboradorRemovido) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    return res.json({ message: 'Colaborador removido com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getColaboradorById(req, res) {
  try {
    const colaborador = await Colaborador.findById(req.params.id);
    if (!colaborador) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    return res.json(colaborador);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function atualizarColaborador(req, res) {
  try {
    const { id } = req.params;
    const colaboradorAtualizado = await Colaborador.findByIdAndUpdate(id, req.body, { new: true });
    if (!colaboradorAtualizado) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    return res.json(colaboradorAtualizado);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  criarColaborador,
  listarColaboradores,
  removerColaborador,
  atualizarColaborador,
  getColaboradorById
};