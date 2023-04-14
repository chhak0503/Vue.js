import { createRouter, createWebHistory } from "vue-router";
import Components from "../components/sub1/Components.vue";
import Grids from "../components/sub2/Grids.vue";
import Layout from "../components/sub3/Layout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/components", name: "Components", component: Components },
    { path: "/grids", name: "Grids", component: Grids },
    { path: "/layout", name: "Layout", component: Layout },
  ],
});

export default router;
