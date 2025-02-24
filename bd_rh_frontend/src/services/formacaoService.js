// importa endereço backend
import api from "./api";

export async function listarFormacoes() {
  return api.get("/formacoes");
}

export async function criarFormacao(dados) {
  return api.post("/formacoes", dados);
}

export async function getFormacaoById(id) {
  return api.get(`/formacoes/${id}`);
}

export async function atualizarFormacao(id, dados) {
  return api.put(`/formacoes/${id}`, dados);
}

export async function removerFormacao(id) {
  return api.delete(`/formacoes/${id}`);
}
