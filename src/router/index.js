import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/event", name: "Event", component: Event },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
