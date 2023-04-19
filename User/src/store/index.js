/**
 * Vuex 전역 스토어 설정
 */
import { createStore } from "vuex";

const store = createStore({
  state: {
    user1: null,
    user2: null,
    user3: null,
    user4: null,
    user5: null,
    user6: null,
    user7: null,
  },
  mutations: {
    SET_USER1: (state, data) => (state.user1 = data),
    SET_USER2: (state, data) => (state.user2 = data),
    SET_USER3: (state, data) => (state.user3 = data),
    SET_USER4: (state, data) => (state.user4 = data),
    SET_USER5: (state, data) => (state.user5 = data),
    SET_USER6: (state, data) => (state.user6 = data),
    SET_USER7: (state, data) => (state.user7 = data),
  },
  actions: {
    setUser1: (context, data) => context.commit("SET_USER1", data),
    setUser2: (context, data) => context.commit("SET_USER2", data),
    setUser3: (context, data) => context.commit("SET_USER3", data),
    setUser4: (context, data) => context.commit("SET_USER4", data),
    setUser5: (context, data) => context.commit("SET_USER5", data),
    setUser6: (context, data) => context.commit("SET_USER6", data),
    setUser7: (context, data) => context.commit("SET_USER7", data),
  },
  getters: {
    getUser1: (state) => state.user1,
    getUser2: (state) => state.user2,
    getUser3: (state) => state.user3,
    getUser4: (state) => state.user4,
    getUser5: (state) => state.user5,
    getUser6: (state) => state.user6,
    getUser7: (state) => state.user7,
  },
});

// store 내보내기 -> main.js 등록 설정
export default store;
