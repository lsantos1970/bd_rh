//@/store/colaboradores/colaborador.module.js
import colaboradorService from "@/services/colaboradorService.js";
import {
  SET_COLABORADORES,
  SET_MESSAGE,
  FETCH_COLABORADORES,
  ADD_COLABORADOR,
  REMOVE_COLABORADOR,
  EDIT_COLABORADOR,
} from "./colaborador.constants.js";

const state = {
  colaboradores: [],
  message: "",
};

const getters = {
  getColaboradores: (state) => state.colaboradores,
  getColaboradoresById: (state) => (id) =>
    state.colaboradores.find((colaborador) => colaborador._id === id),
  getNameById: (state) => (id) => {
    const colaborador = state.colaboradores.find(
      (colaborador) => colaborador._id === id
    );
    // Adjust property name if your backend returns a different field, e.g., nome_completo
    return colaborador ? colaborador.name : "";
  },
  getMessage: (state) => state.message,
};

const actions = {
  [FETCH_COLABORADORES]: async ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      colaboradorService.getColaboradores(rootState.auth.token).then(
        (res) => {
          commit(SET_COLABORADORES, res.data);
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  },
  [ADD_COLABORADOR]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      colaboradorService.addUser(rootState.auth.token, payload).then(
        (res) => {
          commit(
            SET_MESSAGE,
            `O utilizador ${res.data.name} foi adicionado com sucesso!`
          );
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  },
  [EDIT_COLABORADOR]: async ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      // Pass the collaborator's ID from payload._id and the payload
      colaboradorService.editColaborador(payload._id, payload).then(
        (res) => {
          commit(
            SET_MESSAGE,
            //`O utilizador ${res.data._id} foi atualizado com sucesso!`
            `O utilizador foi atualizado com sucesso!`
          );
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  },
  [REMOVE_COLABORADOR]: ({ commit, rootState }, id) => {
    return new Promise((resolve, reject) => {
      colaboradorService.removeUser(rootState.auth.token, id).then(
        (res) => {
          commit(SET_MESSAGE, `O utilizador foi removido com sucesso!`);
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  },
};

export const mutations = {
  [SET_COLABORADORES]: (state, colaboradores) => {
    state.colaboradores = colaboradores;
  },
  [SET_MESSAGE]: (state, message) => {
    state.message = message;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
