import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";

import { createMemoryHistory, createRouter } from "vue-router";
import Homepage from "./Pages/HomePage.vue";
import TestPage from "./Pages/TestPage.vue";

const routes = [
  { path: "/", name: "home", component: Homepage, props: true },
  { path: "/test/:message?", name: "test", component: TestPage, props: true },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: { preset: Aura, options:{darkModeSelector: false}},
});

app.mount("#app");
