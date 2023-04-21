<template>
  <li>
    <i class="fa-sharp fa-solid fa-check"></i>
    {{ todo }}
    <button @click="btnDelete()">삭제</button>
  </li>
</template>
<script>
import { useStore } from "vuex";

export default {
  name: "Item",
  props: {
    todo: String,
  },
  setup(props) {
    const store = useStore();

    const todo = props.todo;
    const btnDelete = (index) => {
      store.dispatch("removeTodo", index);
    };

    return {
      todo,
      btnDelete,
    };
  },
};
</script>

<style scoped></style>
