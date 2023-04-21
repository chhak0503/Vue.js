<template>
  <li v-for="(todo, index) in todos">
    <i class="fa-sharp fa-solid fa-check"></i>
    {{ todo }}
    <button @click="btnDelete(index)">삭제</button>
  </li>
</template>
<script>
import { useStore } from "vuex";

export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = store.getters.todos;

    const btnDelete = (index) => {
      console.log("index : " + index);
      store.dispatch("removeTodo", index);
    };

    return {
      todos,
      btnDelete,
    };
  },
};
</script>

<style scoped></style>
