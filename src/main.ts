import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import NameTheFlagView from "./views/NameTheFlagView.vue";
import NameThePrideFlagView from "./views/NameThePrideFlagView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/flag", component: NameTheFlagView },
    { path: "/pride", component: NameThePrideFlagView },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
