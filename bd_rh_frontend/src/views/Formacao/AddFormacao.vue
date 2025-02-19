<template>
  <div>
    <h2>Criar Nova Formação</h2>
    <form @submit.prevent="criar">
      <label>NAP</label>
      <input type="number" v-model.number="form.NAP_id" />

      <label>Nome Completo</label>
      <input type="text" v-model="form.nome_completo" />

      <label>Formação</label>
      <input type="text" v-model="form.nome_formacao" />

      <label>Data Início</label>
      <input type="date" v-model="form.data_inicio" />

      <label>Data Fim</label>
      <input type="date" v-model="form.data_fim" />

      <label>Horas</label>
      <input type="number" v-model.number="form.horas" />

      <label>Tipo</label>
      <v-combobox
        v-model="form.tipo_formacao"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-combobox>
      <v-btn type="submit">Gravar</v-btn>
    </form>
  </div>
</template>

<script>
import { criarFormacao } from "@/services/formacaoService";

export default {
  name: "AddFormacao",
  data() {
    return {
      form: {
        NAP_id: null,
        nome_completo: "",
        nome_formacao: "",
        data_inicio: "",
        data_fim: "",
        horas: null,
        tipo_formacao: "",
      },
    };
  },
  methods: {
    async criar() {
      try {
        await criarFormacao(this.form);
        this.$router.push({ name: "ListaFormacoes" });
      } catch (error) {
        console.error("Erro ao criar formação:", error);
      }
    },
  },
};
</script>
