// bd_rh_frontend/src/services/formacaoService.js
import axios from "axios";

// endereço backend
const API_URL = "http://localhost:3000/api"; // Localhost
//const API_URL = "http://52.172.207.146:3000/api"; // VM AZURE

export async function listarFormacoes() {
  return axios.get(API_URL);
}

export async function criarFormacao(dados) {
  return axios.post(API_URL, dados);
}

export async function getFormacaoById(id) {
  return axios.get(`${API_URL}/${id}`);
}

export async function atualizarFormacao(id, dados) {
  return axios.put(`${API_URL}/${id}`, dados);
}

export async function removerFormacao(id) {
  return axios.delete(`${API_URL}/${id}`);
}
