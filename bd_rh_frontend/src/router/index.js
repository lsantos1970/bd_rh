//@/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import ListaColaboradores from "@/views/Colaboradores/ListaColaboradores.vue";
import AddColaborador from "@/views/Colaboradores/AddColaborador.vue";
import AdminView from "@/components/AdminView.vue";
import EditColaborador from "@/views/Colaboradores/EditColaborador.vue";
import BaseView from "@/components/BaseView.vue";
import AboutView from "@/components/AboutView.vue";
//import FormacaoView from "@/views/Formacao/FormacaoView.vue";
import AusenciasView from "@/views/Ausencias/AusenciasView.vue";
import AvaliacaoView from "@/views/Avaliacao/AvaliacaoView.vue";
import ListaPedidos from "@/views/Pedidos/ListaPedidos.vue";
import AddPedido from "@/views/Pedidos/AddPedido.vue";
import EditPedido from "@/views/Pedidos/EditPedido.vue";
import Login from "@/views/Login.vue";
import store from "@/store"; // Importa o store

const routes = [
  { path: "/login", name: "Login", component: Login },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },

  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/colaboradores",
    name: "colaboradores",
    component: ListaColaboradores,
  },
  {
    path: "/colaborador/add",
    name: "AddColaborador",
    component: AddColaborador,
  },
  {
    path: "/colaborador/edit/:id",
    name: "EditColaborador",
    component: EditColaborador,
  },
  {
    path: "/base",
    name: "BaseView",
    component: BaseView,
  },
  {
    path: "/ausencias",
    name: "AusenciasView",
    component: AusenciasView,
  },
  {
    path: "/avaliacao",
    name: "AvaliacaoView",
    component: AvaliacaoView,
  },
  {
    path: "/pedidos",
    name: "ListaPedidos",
    component: ListaPedidos,
  },
  {
    path: "/pedidos/add",
    name: "AddPedido",
    component: AddPedido,
  },
  {
    path: "/pedidos/:id/edit",
    name: "EditPedido",
    component: EditPedido,
  },
  {
    path: "/formacoes",
    name: "ListaFormacoes",
    component: () => import("@/views/Formacao/ListaFormacoes.vue"),
  },
  {
    path: "/formacao/add",
    name: "AddFormacao",
    component: () => import("@/views/Formacao/AddFormacao.vue"),
  },
  {
    path: "/formacao/edit/:id",
    name: "EditFormacao",
    component: () => import("@/views/Formacao/EditFormacao.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const token = localStorage.getItem("token") || (store && store.state.token);
  if (requiresAuth && !token) {
    next({ name: "Login" });
  } else {
    next();
  }
});
export default router;
