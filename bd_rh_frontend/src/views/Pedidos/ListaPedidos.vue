<template>
  <section class="page-section">
    <b-container>
      <router-link :to="{ name: 'AddPedido' }">
        <v-btn class="btn btn-success mb-3">Adicionar Pedido</v-btn>
      </router-link>

      <v-btn @click="exportarExcel" class="btn btn-primary mb-2">
        Exportar Excel
      </v-btn>

      <!-- Cabeçalho usando componente externo (pode ser removido/alterado) -->
      <HeaderPage title="Lista de Pedidos" />

      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>_id</th>
            <th>NAP</th>
            <th>Nome Completo</th>
            <th>Tipo Pedido</th>
            <th>Data Início</th>
            <th>Data Fim</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pedido in pedidos" :key="pedido._id">
            <td>{{ pedido._id }}</td>
            <td>{{ pedido.NAP_id }}</td>
            <td>{{ pedido.nome_completo }}</td>
            <td>{{ pedido.tipo_pedido }}</td>
            <td>{{ formataData(pedido.data_inicio) }}</td>
            <td>{{ formataData(pedido.data_fim) }}</td>
            <td>
              <!-- Exemplo de botão remover -->
              <v-btn
                class="btn btn-danger btn-sm"
                @click="removePedido(pedido._id)"
              >
                Remover
              </v-btn>

              <!-- Exemplo de botão para “ver” ou “editar” -->
              <router-link
                :to="{ name: 'EditPedido', params: { id: pedido._id } }"
              >
                <v-btn class="btn btn-info btn-sm ml-2">Editar</v-btn>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import { listarPedidos, removerPedido } from "@/services/pedidoService.js";
import * as XLSX from "xlsx"; // Importar SheetJS

export default {
  name: "ListaPedidos",
  components: {
    HeaderPage,
  },
  data() {
    return {
      pedidos: [],
    };
  },
  methods: {
    async loadPedidos() {
      try {
        const resp = await listarPedidos();
        this.pedidos = resp.data;
      } catch (error) {
        console.error("Erro ao obter pedidos:", error);
      }
    },
    formataData(dateStr) {
      if (!dateStr) return "";
      const d = new Date(dateStr);
      return d.toLocaleDateString("pt-PT");
    },
    async removePedido(id) {
      if (confirm("Tens a certeza que pretendes remover este pedido?")) {
        try {
          await removerPedido(id);
          this.loadPedidos();
        } catch (err) {
          console.error("Erro ao remover pedido:", err);
        }
      }
    },
    exportarExcel() {
      // 1) Converter `this.pedidos` num worksheet
      //    Nota: SheetJS aceita arrays de objetos
      const worksheet = XLSX.utils.json_to_sheet(this.pedidos);

      // 2) Criar um novo workbook
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Pedidos");

      // 3) Gerar o ficheiro Excel e forçar download no browser
      XLSX.writeFile(workbook, "Pedidos.xlsx");
    },
  },
  mounted() {
    this.loadPedidos();
  },
};
</script>

<style scoped>
.page-section {
  padding: 20px;
}
</style>
