const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedido.controller');

// POST /api/pedidos/  -> criar novo
router.post('/', pedidoController.criarPedido);

// GET /api/pedidos/   -> listar todos
router.get('/', pedidoController.listarPedidos);

// GET /api/pedidos/:id -> obter 1 por ID
router.get('/:id', pedidoController.obterPedido);

// PUT /api/pedidos/:id -> atualizar
router.put('/:id', pedidoController.atualizarPedido);

// DELETE /api/pedidos/:id -> remover
router.delete('/:id', pedidoController.removerPedido);

module.exports = router;
