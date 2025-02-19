<template>
  <section class="page-section">
    <b-container>
      <h2>Editar Pedido</h2>
      <form @submit.prevent="savePedido">
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
import { getPedidoById, atualizarPedido } from "@/services/pedidoService.js";

export default {
  name: "EditPedido",
  data() {
    return {
      pedido: {},
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    // Buscar dados do pedido a editar
    const resp = await getPedidoById(id);
    this.pedido = resp.data;
  },
  methods: {
    async savePedido() {
      await atualizarPedido(this.pedido._id, this.pedido);
      this.$router.push({ name: "ListaPedidos" });
    },
  },
};
</script>
