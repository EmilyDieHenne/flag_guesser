import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import NameTheFlagView from "./views/NameTheFlagView.vue";

const routes = [
  { path: "/", component: () => NameTheFlagView },
  { path: "/a", component: () => HomeView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
