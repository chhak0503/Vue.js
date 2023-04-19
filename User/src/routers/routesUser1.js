import User1Main from "../components/user1/User1Main.vue";
import User1List from "../components/user1/User1List.vue";
import User1Register from "../components/user1/User1Register.vue";
import User1Modify from "../components/user1/User1Modify.vue";

const routes = [
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
];

export default routes;
