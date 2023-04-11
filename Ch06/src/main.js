import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { store } from "./store/index.js";

const app = createApp(App);

// vuex 스토어 추가
app.use(store);

app.mount("#app");
