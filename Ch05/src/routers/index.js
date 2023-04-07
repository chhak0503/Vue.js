/**
 * Vue-Router 모듈파일 정의
 */
import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/sub1/Hello.vue";
import Welcome from "../components/sub1/Welcome.vue";
import Greeting from "../components/sub1/Greeting.vue";

// router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/hello", name: "Hello", component: Hello },
    { path: "/welcome", name: "Welcome", component: Welcome },
    { path: "/greeting", name: "Greeting", component: Greeting },
  ],
});

// router 인스턴스 내보내기 -> main.js 에서 등록 설정
export default router;
