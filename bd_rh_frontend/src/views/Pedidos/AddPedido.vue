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

        <button type="submit" class="btn btn-primary mt-3">Guardar</button>
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

<style scoped>
/* Adicione seus estilos aqui, se necessário */
form {
  max-width: 500px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  font-weight: bold;
  color: #aaa;
  display: inline-block;
  margin: 25 px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: #f9f9f9;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-bottom: 20px;
}
label[type="checkbox"] {
  font-weight: bold;
  color: #aaa;
  display: inline-block;
  margin: 25 px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input[type="checkbox"] {
  margin-right: 10px;
  display: inline-block;
  width: 16px;
  position: relative;
  top: 2px;
}
.page-section {
  padding: 20px;
}
</style>
