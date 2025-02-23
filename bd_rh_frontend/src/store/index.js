import { createStore } from "vuex";
import colaboradorModule from "@/store/colaboradores/colaborador.module.js";
import pedidoModule from "@/store/pedidos/pedido.module.js"; // módulo para pedidos
import formacaoModule from "@/store/formacoes/formacao.module.js"; // módulo para formações

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    colaboradores: colaboradorModule,
    pedidos: pedidoModule,
    formacoes: formacaoModule,
  },
});
