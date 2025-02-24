//@/services/colaboradorService.js
import axios from "axios";

// endereço backend
//const API_URL = "http://localhost:3000/api"; // Localhost
const API_URL = "http://52.172.207.146:3000/api"; // VM AZURE

// Lista todos os colaboradores
export async function listarColaboradores() {
  return axios.get(`${API_URL}/colaboradores`);
}

// Cria um novo colaborador
export async function criarColaborador(dados) {
  return axios.post(`${API_URL}/colaboradores`, dados);
}

// Obtem colaborador pelo id
export function getColaboradorById(id) {
  return axios.get(`${API_URL}/colaboradores/${id}`);
}

// Atualiza colaborador (utilize esta função para editar)
export async function editColaborador(id, dados) {
  try {
    const response = await axios.put(`${API_URL}/colaboradores/${id}`, dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar colaborador:", error);
    throw error; // Propaga o erro para ser tratado onde a função é chamada
  }
}

// Remove colaborador
export async function removerColaborador(id) {
  return axios.delete(`${API_URL}/colaboradores/${id}`);
}

export default {
  listarColaboradores,
  criarColaborador,
  getColaboradorById,
  editColaborador,
  removerColaborador,
};
