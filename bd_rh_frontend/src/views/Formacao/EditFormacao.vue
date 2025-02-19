<template>
  <div>
    <h2>Editar Formação</h2>
    <form @submit.prevent="atualizar">
      <label>NAP</label>
      <input type="number" v-model.number="form.NAP_id" />

      <label>Nome Completo</label>
      <input type="text" v-model="form.nome_completo" />

      <label>Nome Formação</label>
      <input type="text" v-model="form.nome_formacao" />

      <label>Data Início</label>
      <input type="date" v-model="form.data_inicio" />

      <label>Data Fim</label>
      <input type="date" v-model="form.data_fim" />

      <label>Horas</label>
      <input type="number" v-model.number="form.horas" />

      <label>Tipo</label>
      <input type="text" v-model="form.tipo_formacao" />

      <v-btn type="submit">Atualizar</v-btn>
    </form>
  </div>
</template>

<script>
import { getFormacaoById, atualizarFormacao } from "@/services/formacaoService";

export default {
  name: "EditFormacao",
  data() {
    return {
      form: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const resp = await getFormacaoById(id);
      this.form = resp.data;
    } catch (error) {
      console.error("Erro ao obter formação:", error);
    }
  },
  methods: {
    async atualizar() {
      try {
        await atualizarFormacao(this.form._id, this.form);
        this.$router.push({ name: "ListaFormacoes" });
      } catch (error) {
        console.error("Erro ao atualizar formação:", error);
      }
    },
  },
};
</script>
