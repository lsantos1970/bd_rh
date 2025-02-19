<template>
  <section class="page-section">
    <b-container>
      <h2>Adicionar Pedido</h2>
      <form @submit.prevent="addPedido">
        <div class="form-group">
          <label>NAP</label>
          <input
            v-model.number="pedido.NAP_id"
            type="number"
            class="form-control"
            required
          />
        </div>

        <div class="form-group">
          <label>Nome Completo</label>
          <input
            v-model="pedido.nome_completo"
            type="text"
            class="form-control"
            required
          />
        </div>

        <div class="form-group">
          <label>Tipo Pedido</label>
          <input
            v-model="pedido.tipo_pedido"
            type="text"
            class="form-control"
            placeholder="ex: Pedido de transferência"
            required
          />
        </div>

        <div class="form-group">
          <label>Data Início</label>
          <input
            v-model="pedido.data_inicio"
            type="date"
            class="form-control"
            required
          />
        </div>

        <div class="form-group">
          <label>Data Fim</label>
          <input v-model="pedido.data_fim" type="date" class="form-control" />
        </div>

        <v-btn type="submit" class="btn btn-primary mt-3">Guardar</v-btn>
      </form>
    </b-container>
  </section>
</template>

<script>
import { criarPedido } from "@/services/pedidoService.js";

export default {
  name: "AddPedido",
  data() {
    return {
      pedido: {
        NAP_id: null,
        nome_completo: "",
        tipo_pedido: "",
        data_inicio: "",
        data_fim: "",
      },
    };
  },
  methods: {
    async addPedido() {
      try {
        await criarPedido({ ...this.pedido });
        this.$router.push({ name: "ListaPedidos" });
      } catch (error) {
        console.error("Erro ao adicionar pedido:", error);
      }
    },
  },
};
</script>
