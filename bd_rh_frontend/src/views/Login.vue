<!-- filepath: /src/views/Login.vue -->
<template>
  <section class="login-section">
    <div class="container">
      <h2>Login</h2>
      <form @submit.prevent="efetuarLogin">
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
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            required
          />
        </div>
        <div class="mt-3">
          <!-- botão entrar -->
          <v-btn type="submit" class="btn btn-primary mt-3"> Entrar </v-btn>
          <!-- Link para a página de registo -->
          <router-link to="/register">
            <v-btn class="btn btn-primary mt-3"> Novo User </v-btn>
          </router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { login } from "@/services/authService.js";

export default {
  name: "UserLogin",
  data() {
    return {
      nap_id: null,
      password: "",
    };
  },
  methods: {
    async efetuarLogin() {
      try {
        const response = await login({
          nap_id: this.nap_id,
          password: this.password,
        });
        // Armazena o token no localStorage (ou Vuex)
        localStorage.setItem("token", response.data.token);
        // Armazena também dados do user se necessário
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Redireciona para a rota protegida
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Credenciais inválidas!");
      }
    },
  },
};
</script>
