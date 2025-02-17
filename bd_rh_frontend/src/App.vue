<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/pedidos">Pedidos</router-link> |
    <router-link to="/colaboradores">Colaboradores</router-link> |
    <router-link to="/formacao">Formação</router-link> |
    <router-link to="/ausencias">Ausências</router-link> |
    <router-link to="/avaliacao">Avaliação</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #f0f0f0;
}
nav {
  padding: 30px;
  font-size: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
