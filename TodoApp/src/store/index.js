import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    CLEAR_TODO(state) {
      state.todos = [];
    },
  },
  actions: {
    addTodo(context, todo) {
      context.commit("ADD_TODO", todo);
    },
    removeTodo(context, index) {
      context.commit("REMOVE_TODO", index);
    },
    clearTodo(context) {
      context.commit("CLEAR_TODO");
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
});

export default store;
