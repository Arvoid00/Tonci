import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shifts from "../views/Shifts.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  { path: "/shifts", name: "Shifts", component: Shifts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
