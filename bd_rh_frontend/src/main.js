import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Ícones MDI
import "@mdi/font/css/materialdesignicons.css";

// Vuetify 3
import "vuetify/styles"; // Estilos base Vuetify 3
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Importar estilos globais
import "@/assets/global.css"; // Ou '@/styles/global.scss'

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");
