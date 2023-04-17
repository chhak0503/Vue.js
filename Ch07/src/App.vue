<template>
  <h3>Ch07.HTTP 통신과 JWT</h3>
  <p>
    <router-link to="/axios">Axios 실습</router-link> /
    <router-link to="/rest">REST API 실습</router-link> /
    <router-link to="/jwt">JWT 실습</router-link> /
  </p>
  <router-view></router-view>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount(() => {
  console.log("App onBeforeMount!!!");
  const accessToken = localStorage.getItem("accessToken");
  store.dispatch("authUser", accessToken);
});
</script>
<style scoped></style>
