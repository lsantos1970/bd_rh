// importa endereço backend
import api from "./api";

// Lista todos os pedidos
export async function listarPedidos() {
  //return axios.get(`/pedidos`);
  return api.get("/pedidos");
}

// Cria um novo pedido
export async function criarPedido(dados) {
  //return axios.post(`${API_URL}/pedidos`, dados);
  return api.post("/pedidos", dados);
}

// Obter 1 pedido por ID (para editar/detalhes)
export function getPedidoById(id) {
  //return axios.get(`${API_URL}/pedidos/${id}`);
  return api.get(`/pedidos/${id}`);
}

// Atualiza um pedido
export async function atualizarPedido(id, dados) {
  //return axios.put(`${API_URL}/pedidos/${id}`, dados);
  return api.put(`/pedidos/${id}`, dados);
}

// Remover pedido
export async function removerPedido(id) {
  //return axios.delete(`${API_URL}/pedidos/${id}`);
  return api.delete(`/pedidos/${id}`);
}

export default {
  listarPedidos,
  criarPedido,
  getPedidoById,
  atualizarPedido,
  removerPedido,
};
