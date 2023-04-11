<template>
  <h3>Ch06.Vuex 실습</h3>

  <p>Vuex message : {{ store.getters.getMessage }}</p>
  <table border="1">
    <tr>
      <th>번호</th>
      <th>내용</th>
      <th>완료</th>
    </tr>
    <tr v-for="todo in todos">
      <td>{{ todo.no }}</td>
      <td>{{ todo.text }}</td>
      <td>{{ todo.done }}</td>
    </tr>
  </table>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const todos = store.getters.getTodos;
</script>

<style scoped></style>
