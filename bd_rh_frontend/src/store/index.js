//@/store/index.js
import { createStore } from "vuex";
import colaboradorModule from "@/store/colaboradores/colaborador.module.js"; // importa o module

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    colaboradores: colaboradorModule, // define o namespace 'colaboradores' e associa o module
  },
});
