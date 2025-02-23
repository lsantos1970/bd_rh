<template>
  <!-- Componente v-app do Vuetify que encapsula toda a aplicação -->
  <v-app>
    <!-- Barra de navegação principal -->
    <nav>
      <div class="logo">
        <!-- Logo da aplicação -->
        <img alt="Vue logo" src="@/assets/logo_PLANAPP.png" />
      </div>
      <!-- Links de navegação -->
      <router-link to="/home">Home</router-link> |
      <router-link to="/pedidos">Pedidos</router-link> |
      <router-link to="/colaboradores">Colaboradores</router-link> |
      <router-link to="/formacoes">Formação</router-link> |
      <router-link to="/ausencias">Ausências</router-link> |
      <router-link to="/avaliacao">Avaliação</router-link> |
      <a href="#" @click.prevent="logout">Logout</a> |
    </nav>
    <!-- Layout principal do Vuetify -->
    <v-main>
      <!-- Container responsivo para o conteúdo -->
      <v-container>
        <!-- Área onde as rotas serão renderizadas -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "LogOut",
  methods: {
    logout() {
      // Remove token e dados do usuário
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Exibe mensagem de logout
      alert("Logout efetuado com sucesso!");
      // Redireciona para a página de login
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
