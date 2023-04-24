import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
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
    getTodos(context) {
      axios
        .get("http://localhost:8383/todos")
        .then((response) => {
          console.log(response);
          const todos = response.data;
          context.commit("SET_TODOS", todos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addTodo(context, todo) {
      const data = {
        content: todo,
      };

      axios
        .post("http://localhost:8383/todo", data)
        .then((response) => {
          context.commit("ADD_TODO", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeTodo(context, data) {
      axios
        .delete("http://localhost:8383/remove", {
          params: { no: data.no },
        })
        .then((response) => {
          context.commit("REMOVE_TODO", data.index);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearTodo(context) {
      axios
        .delete("http://localhost:8383/clear")
        .then((response) => {
          context.commit("CLEAR_TODO");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
});

export default store;
