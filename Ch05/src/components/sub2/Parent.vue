<template>
  <h4>Parent</h4>

  <router-link to="/parent/child1">Child1</router-link>
  <router-link to="/parent/child2">Child2</router-link>

  <router-view></router-view>
</template>

<script>
export default {
  name: "Parent",
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
