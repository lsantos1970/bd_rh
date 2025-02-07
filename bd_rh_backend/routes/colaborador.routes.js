const express = require('express');
const {
  criarColaborador,
  listarColaboradores,
  removerColaborador,
  atualizarColaborador,    // Certifique-se de implementá-lo se for necessário
  getColaboradorById       // Opcional para obter colaborador pelo id
} = require('../controllers/colaborador.controller');

const router = express.Router();

// POST /api/colaboradores -> cria colaborador
router.post('/', criarColaborador);

// GET /api/colaboradores -> lista todos os colaboradores
router.get('/', listarColaboradores);

// GET /api/colaboradores/:id -> obtém um colaborador específico (opcional)
router.get('/:id', getColaboradorById);

// PUT /api/colaboradores/:id -> atualiza colaborador (opcional)
router.put('/:id', atualizarColaborador);

// DELETE /api/colaboradores/:id -> remove colaborador
router.delete('/:id', removerColaborador);

module.exports = router;
