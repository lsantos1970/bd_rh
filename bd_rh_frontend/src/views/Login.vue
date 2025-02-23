<!-- filepath: /seu-projeto/src/views/Login.vue -->
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
        <button type="submit" class="btn btn-primary mt-3">Entrar</button>
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
        // Armazena o token no localStorage (pode ser também no Vuex)
        localStorage.setItem("token", response.data.token);
        // Armazena também os dados do usuário se necessário
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redireciona para a página inicial ou rota protegida
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Credenciais inválidas!");
      }
    },
  },
};
</script>
