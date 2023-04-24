import { createStore } from "vuex";
import axios from "axios";

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
      const data = {
        content: todo,
      };

      axios
        .post("http://localhost:8383/todo", data)
        .then((response) => {
          context.commit("ADD_TODO", todo);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeTodo(context, index) {
      context.commit("REMOVE_TODO", index);
    },
    clearTodo(context) {
      context.commit("CLEAR_TODO");
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
});

export default store;
