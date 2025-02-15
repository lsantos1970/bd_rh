<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo_PLANAPP.png" />
  </div>
  <section class="page-section">
    <b-container>
      <!-- Cabeçalho usando componente externo (pode ser removido/alterado) -->
      <HeaderPage title="Gestão de Colaboradores" />

      <!-- MENU TOPO -->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <!-- Botão para adicionar novo colaborador -->
          <router-link
            :to="{ name: 'AddColaborador' }"
            v-slot="{ href, navigate }"
          >
            <button
              :href="href"
              @click="navigate"
              class="btn btn-outline-success mr-2 mt-2"
            >
              <i class="fas fa-plus-square"></i> ADICIONAR COLABORADOR
            </button>
          </router-link>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <p></p>
      <p></p>
      <!-- TABELA -->
      <b-row>
        <b-col offset="2" cols="12">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">NAP</th>
                <th scope="col">NOME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">DATA DE NASCIMENTO</th>
                <th scope="col">EQUIPA</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="colab in colaboradores" :key="colab._id">
                <td class="pt-4">{{ colab.NAP_id }}</td>
                <td class="pt-4">{{ colab.nome_completo }}</td>
                <td class="pt-4">{{ colab.email }}</td>
                <td class="pt-4">{{ colab.data_nascimento }}</td>
                <td class="pt-4">{{ colab.equipa_atual }}</td>

                <td>
                  <!-- Botão Ver -->
                  <button
                    @click="viewColaborador(colab._id)"
                    type="button"
                    class="btn btn-outline-success mr-2"
                  >
                    <i class="fas fa-search"></i> VER
                  </button>

                  <!-- Botão Remover -->
                  <button
                    @click="removeColaborador(colab._id)"
                    type="button"
                    class="btn btn-outline-danger mr-2"
                  >
                    <i class="fas fa-trash-alt"></i> REMOVER
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import {
  listarColaboradores,
  removerColaborador,
} from "@/services/colaboradorService.js";

export default {
  name: "ListaColaboradores",
  components: {
    HeaderPage,
  },
  data() {
    return {
      colaboradores: [],
    };
  },
  methods: {
    async loadColaboradores() {
      try {
        const resp = await listarColaboradores();
        this.colaboradores = resp.data;
      } catch (error) {
        console.error("Erro ao obter colaboradores:", error);
      }
    },
    formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    },
    viewColaborador(colabId) {
      this.$router.push({ name: "EditColaborador", params: { id: colabId } });
    },
    async removeColaborador(colabId) {
      if (confirm("Tens a certeza que queres remover este colaborador?")) {
        try {
          await removerColaborador(colabId);
          this.loadColaboradores();
        } catch (err) {
          console.error("Erro ao remover colaborador:", err);
        }
      }
    },
  },
  mounted() {
    this.loadColaboradores();
  },
};
</script>

<style scoped>
.mt-3 {
  margin-top: 1rem;
}
PT-4 {
  padding-top: 1rem;
  font-weight: bold;
  color: #aaa;
  display: inline-block;
  margin: 25 px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
</style>
