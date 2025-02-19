<template>
  <div class="base-container">
    <h1>Editar Colaborador</h1>
    <form @submit.prevent="edit">
      <div class="form-group">
        <label for="nap">NAP</label>
        <input id="NAP_id" v-model="colaborador.NAP_id" type="text" />
      </div>

      <div class="form-group">
        <label for="nome_completo">Nome completo</label>
        <input
          id="nome_completo"
          v-model="colaborador.nome_completo"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="colaborador.email" type="email" />
      </div>

      <div class="form-group">
        <label for="cartao_cidadao">Cartão de cidadão</label>
        <input
          id="cartao_cidadao"
          v-model="colaborador.cartao_cidadao"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="nif">NIF</label>
        <input id="nif" v-model="colaborador.nif" type="text" />
      </div>

      <div class="form-group">
        <label for="genero">Género</label>
        <input id="genero" v-model="colaborador.genero" type="text" />
      </div>

      <div class="form-group">
        <label for="data_nascimento">Data de nascimento</label>
        <input
          id="data_nascimento"
          v-model="colaborador.data_nascimento"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="idade">Idade</label>
        <input id="idade" v-model="colaborador.idade" type="number" />
      </div>

      <div class="form-group">
        <label for="nivel_escolaridade_atual"
          >Nível de escolaridade atual</label
        >
        <input
          id="nivel_escolaridade_atual"
          v-model="colaborador.nivel_escolaridade_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="ano_inicio_experiencia_profissional"
          >Ano de início da experiência profissional</label
        >
        <input
          id="ano_inicio_experiencia_profissional"
          v-model="colaborador.ano_inicio_experiencia_profissional"
          type="number"
        />
      </div>

      <div class="form-group">
        <label for="situacao_atual">Situação atual</label>
        <input
          id="situacao_atual"
          v-model="colaborador.situacao_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="modalidade_recrutamento">Modalidade de recrutamento</label>
        <input
          id="modalidade_recrutamento"
          v-model="colaborador.modalidade_recrutamento"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="categoria_atual">Categoria atual</label>
        <input
          id="categoria_atual"
          v-model="colaborador.categoria_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="regime_contrato_atual">Regime de contrato atual</label>
        <input
          id="regime_contrato_atual"
          v-model="colaborador.regime_contrato_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="tipo_contrato_atual">Tipo de contrato atual</label>
        <input
          id="tipo_contrato_atual"
          v-model="colaborador.tipo_contrato_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="modalidade_horario_atual"
          >Modalidade de horário atual</label
        >
        <input
          id="modalidade_horario_atual"
          v-model="colaborador.modalidade_horario_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="equipa_atual">Equipa atual</label>
        <input
          id="equipa_atual"
          v-model="colaborador.equipa_atual"
          type="text"
        />
      </div>

      <v-btn type="submit">Guardar</v-btn>
      <v-btn class="btn btn-primary" @click="exportarPdf">Exportar PDF</v-btn>
    </form>
  </div>
</template>

<script>
import { getColaboradorById } from "@/services/colaboradorService.js";
import { EDIT_COLABORADOR } from "@/store/colaboradores/colaborador.constants.js";
import jsPDF from "jspdf"; // Importar jsPDF

export default {
  name: "EditColaborador",
  data() {
    return {
      colaborador: {},
      loading: true,
      error: null,
    };
  },
  methods: {
    async edit() {
      try {
        await this.$store.dispatch(
          `colaboradores/${EDIT_COLABORADOR}`,
          this.colaborador
        );
        this.$router.push({ name: "colaboradores" });
      } catch (err) {
        window.alert("Erro ao atualizar colaborador.");
      }
    },
    async fetchColaborador() {
      this.loading = true;
      try {
        const response = await getColaboradorById(this.$route.params.id);
        this.colaborador = { ...response.data };
      } catch (error) {
        this.error = "Erro ao carregar os dados do colaborador.";
        console.error("Erro ao obter colaborador:", error);
      } finally {
        this.loading = false;
      }
    },
    exportarPDF() {
      if (!this.colaborador) return;

      // 1) Criar instância do jsPDF
      const doc = new jsPDF();

      // 2) Exemplo de adicionar texto. (x=10, y=20)
      doc.text(`Colaborador: ${this.colaborador.nome_completo}`, 10, 20);
      doc.text(`NAP: ${this.colaborador.NAP_id}`, 10, 30);
      doc.text(`Email: ${this.colaborador.email}`, 10, 40);
      doc.text(`Data Nasc: ${this.colaborador.data_nascimento}`, 10, 50);
      // etc. adiciona as propriedades que quiseres

      // 3) Salvar o ficheiro (nome do PDF)
      // Poderias usar algo dinâmico, ex. "colaborador-1234.pdf"
      doc.save(`colaborador_${this.colaborador.NAP_id}.pdf`);
    },
  },
  created() {
    this.fetchColaborador();
  },
};
</script>
