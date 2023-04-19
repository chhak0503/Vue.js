import { createRouter, createWebHistory } from "vue-router";
import routesUser1 from "./routesUser1.js";
import routesUser2 from "./routesUser2.js";
import routesUser3 from "./routesUser3.js";
import routesUser4 from "./routesUser4.js";
import routesUser5 from "./routesUser5.js";
import routesUser6 from "./routesUser6.js";
import routesUser7 from "./routesUser7.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ... 전개연산자를 이용한 routes 설정(자바스크립트 전개연산자 인터넷 참고)
    ...routesUser1,
    ...routesUser2,
    ...routesUser3,
    ...routesUser4,
    ...routesUser5,
    ...routesUser6,
    ...routesUser7,
  ],
});

export default router;
