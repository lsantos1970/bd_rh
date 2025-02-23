const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedido.controller');
const authMiddleware = require('../middlewares/authMiddleware');

// Criação de pedidos (pode ou não ser protegido, conforme sua lógica)
router.post('/', authMiddleware, pedidoController.criarPedido);

// GET /api/pedidos/ -> listar pedidos conforme o papel do usuário
router.get('/', authMiddleware, pedidoController.listarPedidos);

// Outras rotas (se preferir proteger todas, adicione authMiddleware a elas)
router.get('/:id', authMiddleware, pedidoController.obterPedido);
router.put('/:id', authMiddleware, pedidoController.atualizarPedido);
router.delete('/:id', authMiddleware, pedidoController.removerPedido);

module.exports = router;
