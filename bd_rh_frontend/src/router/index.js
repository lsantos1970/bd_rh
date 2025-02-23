import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import ListaColaboradores from "@/views/Colaboradores/ListaColaboradores.vue";
import AddColaborador from "@/views/Colaboradores/AddColaborador.vue";
import AdminView from "@/components/AdminView.vue";
import EditColaborador from "@/views/Colaboradores/EditColaborador.vue";
import BaseView from "@/components/BaseView.vue";
// import FormacaoView from "@/views/Formacao/FormacaoView.vue";
import AusenciasView from "@/views/Ausencias/AusenciasView.vue";
import AvaliacaoView from "@/views/Avaliacao/AvaliacaoView.vue";
import ListaPedidos from "@/views/Pedidos/ListaPedidos.vue";
import AddPedido from "@/views/Pedidos/AddPedido.vue";
import EditPedido from "@/views/Pedidos/EditPedido.vue";
import Login from "@/views/Login.vue";
import registerUser from "@/views/Register.vue"; // Rota para registro de novos usuários
import store from "@/store"; // Importa o store

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: registerUser,
  },
  {
    path: "/home",
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
    path: "/admin",
    name: "admin",
    component: AdminView,
    meta: { requiresAuth: true },
  },
  {
    path: "/colaboradores",
    name: "colaboradores",
    component: ListaColaboradores,
    meta: { requiresAuth: true },
  },
  {
    path: "/colaborador/add",
    name: "AddColaborador",
    component: AddColaborador,
    meta: { requiresAuth: true },
  },
  {
    path: "/colaborador/edit/:id",
    name: "EditColaborador",
    component: EditColaborador,
    meta: { requiresAuth: true },
  },
  {
    path: "/base",
    name: "BaseView",
    component: BaseView,
    meta: { requiresAuth: true },
  },
  {
    path: "/ausencias",
    name: "AusenciasView",
    component: AusenciasView,
    meta: { requiresAuth: true },
  },
  {
    path: "/avaliacao",
    name: "AvaliacaoView",
    component: AvaliacaoView,
    meta: { requiresAuth: true },
  },
  {
    path: "/pedidos",
    name: "ListaPedidos",
    component: ListaPedidos,
    meta: { requiresAuth: true },
  },
  {
    path: "/pedidos/add",
    name: "AddPedido",
    component: AddPedido,
    meta: { requiresAuth: true },
  },
  {
    path: "/pedidos/:id/edit",
    name: "EditPedido",
    component: EditPedido,
    meta: { requiresAuth: true },
  },
  {
    path: "/formacoes",
    name: "ListaFormacoes",
    component: () => import("@/views/Formacao/ListaFormacoes.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/formacao/add",
    name: "AddFormacao",
    component: () => import("@/views/Formacao/AddFormacao.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/formacao/edit/:id",
    name: "EditFormacao",
    component: () => import("@/views/Formacao/EditFormacao.vue"),
    meta: { requiresAuth: true },
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
