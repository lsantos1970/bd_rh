<!-- filepath: /c:/Users/luisn/source/repos/PWA/bd_rh/bd_rh_frontend/src/views/HomeView.vue -->
<template>
  <!-- Container principal da HomeView -->
  <div class="home">
    <!-- Título principal da aplicação -->
    <h1>Benvindo à app RH</h1>
  </div>

  <!-- Seção para Colaboradores -->
  <h2>Colaboradores</h2>
  <!-- Link para adicionar um novo colaborador -->
  <router-link to="/colaborador/add">Adicionar Colaborador</router-link> |
  <!-- Link para visualizar a lista de colaboradores -->
  <router-link to="/Colaboradores">Lista de Colaboradores</router-link> |

  <!-- Seção para Formação -->
  <h2>Formação</h2>
  <!-- Link para adicionar uma nova formação -->
  <router-link to="/formacao/add">Adicionar Formação</router-link> |
  <!-- Link para visualizar a lista de formações -->
  <router-link to="/formacoes">Lista de Formação</router-link> |

  <!-- Seção para Ausências -->
  <h2>Ausências</h2>
  <!-- Link para adicionar ausências -->
  <router-link to="/">Adicionar Ausências</router-link> |
  <!-- Link para visualizar a lista de ausências -->
  <router-link to="/">Lista de Ausências</router-link> |

  <!-- Seção para Avaliação -->
  <h2>Avaliação</h2>
  <!-- Link para adicionar uma nova avaliação -->
  <router-link to="/">Adicionar Avaliação</router-link> |
  <!-- Link para visualizar a lista de avaliações -->
  <router-link to="/">Lista de Avaliação</router-link> |

  <!-- Seção para Pedidos -->
  <h2>Pedidos</h2>
  <!-- Link para adicionar um novo pedido -->
  <router-link to="/pedidos/add">Adicionar Pedidos</router-link> |
  <!-- Link para visualizar a lista de pedidos -->
  <router-link to="/pedidos">Lista de Pedidos</router-link> |
</template>
