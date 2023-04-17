/**
 * Vuex 전역 스토어 설정
 */
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER: function (state, data) {
      state.user = data;
    },
  },
  actions: {
    setUser: function (context, data) {
      context.commit("SET_USER", data);
    },
    login: function (context, user) {
      axios
        .post("http://localhost:8080/Voard/user/login", user)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;

          // accessToken 저장
          localStorage.setItem("accessToken", token);

          // 사용자 객체 저장
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getUser: function (state) {
      return state.user;
    },
  },
});

// store 내보내기 -> main.js 등록 설정
export default store;
