<template>
  <li v-for="todo in todos">
    <i class="fa-sharp fa-solid fa-check"></i>
    dfdf
    <button>삭제</button>
  </li>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = store.getters.todos;

    return { todos };
  },
};
</script>

<style scoped></style>
