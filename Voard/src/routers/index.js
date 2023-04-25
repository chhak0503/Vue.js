import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/user/Login.vue";
import Terms from "../components/user/Terms.vue";
import Register from "../components/user/Register.vue";
import List from "../components/List.vue";
import Write from "../components/Write.vue";
import View from "../components/View.vue";
import Modify from "../components/Modify.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/user/login", name: "Login", component: Login },
    { path: "/user/terms", name: "Terms", component: Terms },
    { path: "/user/register", name: "Register", component: Register },
    { path: "/list", name: "List", component: List },
    { path: "/write", name: "Write", component: Write },
    { path: "/view", name: "View", component: View },
    { path: "/modify", name: "Modify", component: Modify },
  ],
});

export default router;
