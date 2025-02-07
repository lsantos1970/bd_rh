<!-- filepath: /c:/Users/luisn/source/repos/PWA/bd_rh_pwa/bd_rh_frontend/src/views/Colaboradores/AddColaborador.vue -->
<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Colaborador" />

      <b-row>
        <b-col>
          <form @submit.prevent="addColaborador">
            <!-- NAP -->
            <div class="form-group">
              <label for="txtNAP">NAP</label>
              <input
                v-model.number="colaborador.NAP_id"
                type="number"
                class="form-control"
                id="txtNAP"
                placeholder="Insira o NAP"
                required
              />
            </div>

            <!-- Nome Completo -->
            <div class="form-group">
              <label for="txtNome">Nome Completo</label>
              <input
                v-model="colaborador.nome_completo"
                type="text"
                class="form-control"
                id="txtNome"
                placeholder="Insira o nome completo"
                required
              />
            </div>

            <!-- Email -->
            <div class="form-group">
              <label for="txtEmail">Email</label>
              <input
                v-model="colaborador.email"
                type="email"
                class="form-control"
                id="txtEmail"
                placeholder="Insira o email"
                required
              />
            </div>

            <!-- Cartão de Cidadão -->
            <div class="form-group">
              <label for="txtCC">Cartão de Cidadão</label>
              <input
                v-model="colaborador.cartao_cidadao"
                type="text"
                class="form-control"
                id="txtCC"
                placeholder="Insira o número do Cartão de Cidadão"
                required
              />
            </div>

            <!-- NIF -->
            <div class="form-group">
              <label for="txtNIF">NIF</label>
              <input
                v-model.number="colaborador.nif"
                type="number"
                class="form-control"
                id="txtNIF"
                placeholder="Insira o NIF"
                required
              />
            </div>

            <!-- Género -->
            <div class="form-group">
              <label for="txtGenero">Género</label>
              <input
                v-model="colaborador.genero"
                type="text"
                class="form-control"
                id="txtGenero"
                placeholder="Insira o género"
              />
            </div>

            <!-- Data de Nascimento -->
            <div class="form-group">
              <label for="txtDataNascimento">Data de Nascimento</label>
              <input
                v-model="colaborador.data_nascimento"
                type="date"
                class="form-control"
                id="txtDataNascimento"
                required
              />
            </div>

            <!-- Nível de Escolaridade -->
            <div class="form-group">
              <label for="txtNivelEscolaridade">Nível de Escolaridade</label>
              <input
                v-model="colaborador.nivel_escolaridade"
                type="text"
                class="form-control"
                id="txtNivelEscolaridade"
                placeholder="Insira o nível de escolaridade"
                required
              />
            </div>

            <!-- Ano Início Profissional -->
            <div class="form-group">
              <label for="txtAnoInicio">Ano de Início Profissional</label>
              <input
                v-model.number="colaborador.ano_inicio_profissional"
                type="number"
                class="form-control"
                id="txtAnoInicio"
                placeholder="Insira o ano de início profissional"
                required
              />
            </div>

            <!-- Situação Atual -->
            <div class="form-group">
              <label for="txtSituacaoAtual">Situação Atual</label>
              <input
                v-model="colaborador.situacao_atual"
                type="text"
                class="form-control"
                id="txtSituacaoAtual"
                placeholder="Insira a situação atual"
                required
              />
            </div>

            <!-- Modalidade de Recrutamento -->
            <div class="form-group">
              <label for="txtModalidadeRecrutamento"
                >Modalidade de Recrutamento</label
              >
              <input
                v-model="colaborador.modalidade_recrutamento"
                type="text"
                class="form-control"
                id="txtModalidadeRecrutamento"
                placeholder="Insira a modalidade de recrutamento"
                required
              />
            </div>

            <!-- Categoria Atual -->
            <div class="form-group">
              <label for="txtCategoriaAtual">Categoria Atual</label>
              <input
                v-model="colaborador.categoria_atual"
                type="text"
                class="form-control"
                id="txtCategoriaAtual"
                placeholder="Insira a categoria atual"
                required
              />
            </div>

            <!-- Regime de Contrato Atual -->
            <div class="form-group">
              <label for="txtRegimeContratoAtual"
                >Regime de Contrato Atual</label
              >
              <input
                v-model="colaborador.regime_contrato_atual"
                type="text"
                class="form-control"
                id="txtRegimeContratoAtual"
                placeholder="Insira o regime de contrato atual"
                required
              />
            </div>

            <!-- Tipo de Contrato Atual -->
            <div class="form-group">
              <label for="txtTipoContratoAtual">Tipo de Contrato Atual</label>
              <input
                v-model="colaborador.tipo_contrato_atual"
                type="text"
                class="form-control"
                id="txtTipoContratoAtual"
                placeholder="Insira o tipo de contrato atual"
                required
              />
            </div>

            <!-- Modalidade de Horário Atual -->
            <div class="form-group">
              <label for="txtModalidadeHorarioAtual"
                >Modalidade de Horário Atual</label
              >
              <input
                v-model="colaborador.modalidade_horario_atual"
                type="text"
                class="form-control"
                id="txtModalidadeHorarioAtual"
                placeholder="Insira a modalidade de horário atual"
                required
              />
            </div>

            <!-- Equipa Atual -->
            <div class="form-group">
              <label for="txtEquipaAtual">Equipa Atual</label>
              <input
                v-model="colaborador.equipa_atual"
                type="text"
                class="form-control"
                id="txtEquipaAtual"
                placeholder="Insira a equipa atual"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Adicionar Colaborador
            </button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import { registarColaborador } from "@/services/colaboradorService.js";

export default {
  name: "AddColaborador",
  components: {
    HeaderPage,
  },
  data() {
    return {
      colaborador: {
        // Propriedades do colaborador conforme o esquema
        // Use a mesma chave que espera o backend
        // (Observe a capitalização: por exemplo, "NAP_id" para correspondência exata)
        NAP_id: null,
        nome_completo: "",
        email: "",
        cartao_cidadao: "",
        nif: null,
        genero: "",
        data_nascimento: "",
        nivel_escolaridade: "",
        ano_inicio_profissional: null,
        situacao_atual: "",
        modalidade_recrutamento: "",
        categoria_atual: "",
        regime_contrato_atual: "",
        tipo_contrato_atual: "",
        modalidade_horario_atual: "",
        equipa_atual: "",
      },
    };
  },
  methods: {
    async addColaborador() {
      try {
        // Envia os dados conforme esperado pelo backend
        await registarColaborador({ ...this.colaborador });
        this.$router.push({ name: "colaboradores" });
      } catch (error) {
        console.error("Erro ao adicionar colaborador:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Adicione seus estilos aqui, se necessário */
.page-section {
  padding: 20px;
}
</style>
