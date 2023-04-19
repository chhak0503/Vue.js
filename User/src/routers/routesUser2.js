import User2Main from "../components/user2/User2Main.vue";
import User2List from "../components/user2/User2List.vue";
import User2Register from "../components/user2/User2Register.vue";
import User2Modify from "../components/user2/User2Modify.vue";

const routes = [
  {
    path: "/user2",
    name: "User2Main",
    component: User2Main,
    children: [
      { path: "", component: User2Register },
      { path: "register", component: User2Register },
      { path: "list", component: User2List },
      {
        path: "modify",
        name: "User2Modify",
        component: User2Modify,
        props: true,
      },
    ],
  },
];

export default routes;
