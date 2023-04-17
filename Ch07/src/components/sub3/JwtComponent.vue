<template>
  <h4>JWT 실습하기</h4>
  <router-view></router-view>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

onBeforeMount(() => {
  console.log("JwtComponent onBeforeMount!!!");
  const accessToken = localStorage.getItem("accessToken");
  store
    .dispatch("authUser", accessToken)
    .then((response) => {
      router.push("/jwt/loginSuccess");
    })
    .catch((error) => {
      router.push("/jwt/loginForm");
    });
});
</script>
<style scoped></style>
