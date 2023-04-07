import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/index.js";

const app = createApp(App);

// router 추가
app.use(router);

// App 컴포넌트 출력
app.mount("#app");
