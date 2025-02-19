// bd_rh_backend/routes/formacao.routes.js
const express = require('express');
const router = express.Router();
const formacaoCtrl = require('../controllers/formacao.controller');

// GET /api/formacoes
router.get('/', formacaoCtrl.listarFormacoes);

// GET /api/formacoes/:id
router.get('/:id', formacaoCtrl.obterFormacao);

// POST /api/formacoes
router.post('/', formacaoCtrl.criarFormacao);

// PUT /api/formacoes/:id
router.put('/:id', formacaoCtrl.atualizarFormacao);

// DELETE /api/formacoes/:id
router.delete('/:id', formacaoCtrl.removerFormacao);

module.exports = router;
