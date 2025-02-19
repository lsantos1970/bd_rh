<template>
  <div>
    <v-btn @click="irParaAdicionar">Nova Formação</v-btn>

    <!-- Cabeçalho usando componente externo (pode ser removido/alterado) -->
    <HeaderPage title="Lista de Formações" />
    <table>
      <thead>
        <tr>
          <th>NAP</th>
          <th>Nome</th>
          <th>Formação</th>
          <th>Início</th>
          <th>Fim</th>
          <th>Horas</th>
          <th>Tipo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="form in formacoes" :key="form._id">
          <td>{{ form.NAP_id }}</td>
          <td>{{ form.nome_completo }}</td>
          <td>{{ form.nome_formacao }}</td>
          <td>{{ form.data_inicio }}</td>
          <td>{{ form.data_fim }}</td>
          <td>{{ form.horas }}</td>
          <td>{{ form.tipo_formacao }}</td>
          <td>
            <v-btn @click="editar(form._id)">Editar</v-btn>
            <v-btn @click="remover(form._id)">Remover</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import { listarFormacoes, removerFormacao } from "@/services/formacaoService";

export default {
  name: "ListaFormacoes",
  components: {
    HeaderPage,
  },

  data() {
    return {
      formacoes: [],
    };
  },
  methods: {
    async carregarFormacoes() {
      try {
        const resp = await listarFormacoes();
        this.formacoes = resp.data;
      } catch (error) {
        console.error("Erro ao listar formações:", error);
      }
    },
    irParaAdicionar() {
      this.$router.push({ name: "AddFormacao" });
    },
    editar(id) {
      this.$router.push({ name: "EditFormacao", params: { id } });
    },
    async remover(id) {
      if (confirm("Tens a certeza que queres remover?")) {
        try {
          await removerFormacao(id);
          this.carregarFormacoes();
        } catch (error) {
          console.error("Erro ao remover formação:", error);
        }
      }
    },
  },
  mounted() {
    this.carregarFormacoes();
  },
};
</script>
