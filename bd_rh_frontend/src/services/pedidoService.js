import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Ajusta se o back-end estiver noutro endereço/porta

// Lista todos os pedidos
export async function listarPedidos() {
  return axios.get(`${API_URL}/pedidos`);
}

// Cria um novo pedido
export async function criarPedido(dados) {
  return axios.post(`${API_URL}/pedidos`, dados);
}

// Obter 1 pedido por ID (para editar/detalhes)
export function getPedidoById(id) {
  return axios.get(`${API_URL}/pedidos/${id}`);
}

// Atualiza um pedido
export async function atualizarPedido(id, dados) {
  return axios.put(`${API_URL}/pedidos/${id}`, dados);
}

// Remover pedido
export async function removerPedido(id) {
  return axios.delete(`${API_URL}/pedidos/${id}`);
}

export default {
  listarPedidos,
  criarPedido,
  getPedidoById,
  atualizarPedido,
  removerPedido,
};
