<template>
  <h4>Component2</h4>
  <p>Vuex count : {{ store.state.count }}</p>
  <button @click="btnDecrement">감소</button>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const btnDecrement = function () {
  // store action 호출
  store.dispatch("decrement");
};
</script>
<style scoped></style>
