import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../view/HomeView.vue"),
  },
  {
    path: "/timer",
    name: "timer",
    component: () => import("../view/PomodorTimer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
