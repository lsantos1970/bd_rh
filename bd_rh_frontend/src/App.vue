<template>
  <v-app>
    <nav>
      <div class="logo">
        <!-- Logo da aplicação -->
        <img alt="Vue logo" src="@/assets/logo_PLANAPP.png" />
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/pedidos">Pedidos</router-link> |
      <router-link to="/colaboradores">Colaboradores</router-link> |
      <router-link to="/formacoes">Formação</router-link> |
      <router-link to="/ausencias">Ausências</router-link> |
      <router-link to="/avaliacao">Avaliação</router-link>
    </nav>
    <!-- Layout principal do Vuetify -->
    <v-main>
      <!-- v-container é opcional, mas ajuda na margem interna -->
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
