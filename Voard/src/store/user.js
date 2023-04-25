import { createStore } from "vuex";

const userStore = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser(context, user) {
      context.commit("SET_USER", user);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});

export default userStore;
