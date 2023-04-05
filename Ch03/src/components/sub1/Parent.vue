<template>
  <h4>Parent</h4>
  <p>부모 컴포넌트</p>
  <Child></Child>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Parent",
  components: { Child },
};
</script>

<style scoped></style>
