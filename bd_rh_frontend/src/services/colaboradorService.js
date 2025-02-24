// importa endereço backend
import api from "./api";

// Lista todos os colaboradores
export async function listarColaboradores() {
  return api.get(`/colaboradores`);
}

// Cria um novo colaborador
export async function criarColaborador(dados) {
  return api.post(`/colaboradores`, dados);
}

// Obtem colaborador pelo id
export function getColaboradorById(id) {
  return api.get(`/colaboradores/${id}`);
}

// Atualiza colaborador (utilize esta função para editar)
export async function editColaborador(id, dados) {
  try {
    const response = await api.put(`/colaboradores/${id}`, dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar colaborador:", error);
    throw error; // Propaga o erro para ser tratado onde a função é chamada
  }
}

// Remove colaborador
export async function removerColaborador(id) {
  return api.delete(`/colaboradores/${id}`);
}

export default {
  listarColaboradores,
  criarColaborador,
  getColaboradorById,
  editColaborador,
  removerColaborador,
};
