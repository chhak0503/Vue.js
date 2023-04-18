import { createRouter, createWebHistory } from "vue-router";
import User1Main from "../components/user1/User1Main.vue";
import User1List from "../components/user1/User1List.vue";
import User1Register from "../components/user1/User1Register.vue";
import User1Modify from "../components/user1/User1Modify.vue";

import User2Main from "../components/user2/User2Main.vue";
import User3Main from "../components/user3/User3Main.vue";
import User4Main from "../components/user4/User4Main.vue";
import User5Main from "../components/user5/User5Main.vue";
import User6Main from "../components/user6/User6Main.vue";
import User7Main from "../components/user7/User7Main.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/user1",
      name: "User1Main",
      component: User1Main,
      children: [
        { path: "", component: User1Register },
        { path: "register", component: User1Register },
        { path: "list", component: User1List },
        {
          path: "modify",
          name: "User1Modify",
          component: User1Modify,
          props: true,
        },
      ],
    },
    { path: "/user2", name: "User2Main", component: User2Main },
    { path: "/user3", name: "User3Main", component: User3Main },
    { path: "/user4", name: "User4Main", component: User4Main },
    { path: "/user5", name: "User5Main", component: User5Main },
    { path: "/user6", name: "User6Main", component: User6Main },
    { path: "/user7", name: "User7Main", component: User7Main },
  ],
});

export default router;
