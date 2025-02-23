const Pedido = require('../models/pedido.model');

// Criar um novo pedido
async function criarPedido(req, res) {
  try {
    const novoPedido = await Pedido.create(req.body);
    return res.status(201).json(novoPedido);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

// Listar todos os pedidos
async function listarPedidos(req, res) {
  try {
    let pedidos;
    if (req.user.role === "admin") {
      // Se for admin, retorna todos os pedidos
      pedidos = await Pedido.find();
    } else {
      // Se for colaborador, retorna apenas os pedidos do usuário (assumindo que o campo nap_id está no pedido)
      pedidos = await Pedido.find({ NAP_id: req.user.nap_id });
    }
    return res.json(pedidos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Obter um pedido por ID
async function obterPedido(req, res) {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    return res.json(pedido);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Atualizar pedido
async function atualizarPedido(req, res) {
  try {
    const pedidoAtualizado = await Pedido.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!pedidoAtualizado) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    return res.json(pedidoAtualizado);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

// Remover pedido
async function removerPedido(req, res) {
  try {
    const resultado = await Pedido.findByIdAndDelete(req.params.id);
    if (!resultado) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    return res.status(204).send(); // 204: No Content
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  criarPedido,
  listarPedidos,
  obterPedido,
  atualizarPedido,
  removerPedido
};
