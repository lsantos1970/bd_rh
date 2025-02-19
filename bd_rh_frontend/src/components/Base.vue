<template>
  <div class="base-container">
    <h1>Base</h1>
    <form @submit.prevent="guardarBase">
      <div class="form-group">
        <label for="nap">NAP</label>
        <input id="nap" v-model="base.NAP" type="text" />
      </div>

      <div class="form-group">
        <label for="nome_completo">Nome completo</label>
        <input id="nome_completo" v-model="base.nome_completo" type="text" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="base.email" type="email" />
      </div>

      <div class="form-group">
        <label for="cartao_cidadao">Cartão de cidadão</label>
        <input id="cartao_cidadao" v-model="base.cartao_cidadao" type="text" />
      </div>

      <div class="form-group">
        <label for="nif">NIF</label>
        <input id="nif" v-model="base.nif" type="text" />
      </div>

      <div class="form-group">
        <label for="genero">Género</label>
        <input id="genero" v-model="base.genero" type="text" />
      </div>

      <div class="form-group">
        <label for="data_nascimento">Data de nascimento</label>
        <input
          id="data_nascimento"
          v-model="base.data_nascimento"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="idade">Idade</label>
        <input id="idade" v-model="base.idade" type="number" />
      </div>

      <div class="form-group">
        <label for="nivel_escolaridade_atual"
          >Nível de escolaridade atual</label
        >
        <input
          id="nivel_escolaridade_atual"
          v-model="base.nivel_escolaridade_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="ano_inicio_experiencia_profissional">
          Ano de início da experiência profissional
        </label>
        <input
          id="ano_inicio_experiencia_profissional"
          v-model="base.ano_inicio_experiencia_profissional"
          type="number"
        />
      </div>

      <div class="form-group">
        <label for="situacao_atual">Situação atual</label>
        <input id="situacao_atual" v-model="base.situacao_atual" type="text" />
      </div>

      <div class="form-group">
        <label for="modalidade_recrutamento">Modalidade de recrutamento</label>
        <input
          id="modalidade_recrutamento"
          v-model="base.modalidade_recrutamento"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="categoria_atual">Categoria atual</label>
        <input
          id="categoria_atual"
          v-model="base.categoria_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="regime_contrato_atual">Regime de contrato atual</label>
        <input
          id="regime_contrato_atual"
          v-model="base.regime_contrato_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="tipo_contrato_atual">Tipo de contrato atual</label>
        <input
          id="tipo_contrato_atual"
          v-model="base.tipo_contrato_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="modalidade_horario_atual"
          >Modalidade de horário atual</label
        >
        <input
          id="modalidade_horario_atual"
          v-model="base.modalidade_horario_atual"
          type="text"
        />
      </div>

      <div class="form-group">
        <label for="equipa_atual">Equipa atual</label>
        <input id="equipa_atual" v-model="base.equipa_atual" type="text" />
      </div>

      <v-btn type="submit">Guardar</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "BaseView",
  data() {
    return {
      base: {
        NAP: "",
        nome_completo: "",
        email: "",
        cartao_cidadao: "",
        nif: "",
        genero: "",
        data_nascimento: "",
        idade: null,
        nivel_escolaridade_atual: "",
        ano_inicio_experiencia_profissional: null,
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
    guardarBase() {
      // Aqui podes chamar o teu serviço para guardar dados
      // Exemplo (dependendo de como definiste o 'service'):
      /*
      import { criarOuAtualizarBase } from '@/services/baseService'
      criarOuAtualizarBase(this.base).then(...)
      */
      console.log("Dados a guardar:", this.base);
      alert("Dados (exemplo) prontos a guardar!");
    },
  },
};
</script>

<style scoped>
.base-container {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

v-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
