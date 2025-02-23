<!-- filepath: /bd_rh_frontend/src/views/Register.vue -->
<template>
  <section class="register-section">
    <div class="container">
      <h2>Registar Novo Usuário</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label>NAP ID</label>
          <input
            type="number"
            v-model.number="nap_id"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label>Nome</label>
          <input type="text" v-model="nome" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label>Tipo de Usuário</label>
          <select v-model="role" class="form-control" required>
            <option value="colaborador">Colaborador</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <v-btn type="submit" class="btn btn-success mt-3">Registar</v-btn>
      </form>
    </div>
  </section>
</template>

<script>
import { register } from "@/services/authService.js";

export default {
  name: "RegisterUser",
  data() {
    return {
      nap_id: null,
      nome: "",
      password: "",
      role: "colaborador", // valor padrão
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await register({
          nap_id: this.nap_id,
          nome: this.nome,
          password: this.password,
          role: this.role,
        });
        alert(response.data.message);
        // Redireciona para a página de login
        this.$router.push({ name: "Login" });
      } catch (error) {
        console.error("Erro no registro:", error);
        alert("Erro ao registar usuário.");
      }
    },
  },
};
</script>
