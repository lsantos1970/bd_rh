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
      <router-link to="/">Home</router-link> |
      <router-link to="/pedidos">Pedidos</router-link> |
      <router-link to="/colaboradores">Colaboradores</router-link> |
      <router-link to="/formacoes">Formação</router-link> |
      <router-link to="/ausencias">Ausências</router-link> |
      <router-link to="/avaliacao">Avaliação</router-link>
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
