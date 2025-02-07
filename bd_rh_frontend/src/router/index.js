//@/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ListaColaboradores from "@/views/Colaboradores/ListaColaboradores.vue";
import AddColaborador from "@/views/Colaboradores/AddColaborador.vue";
import AdminView from "@/components/AdminView.vue";
import EditColaborador from "@/views/Colaboradores/EditColaborador.vue";
import BaseView from "@/components/BaseView.vue";
import AboutView from "@/components/AboutView.vue";
import FormacaoView from "@/views/Formacao/FormacaoView.vue";
import AusenciasView from "@/views/Ausencias/AusenciasView.vue";
import AvaliacaoView from "@/views/Avaliacao/AvaliacaoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: "/formacao",
    name: "FormacaoView",
    component: FormacaoView,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
