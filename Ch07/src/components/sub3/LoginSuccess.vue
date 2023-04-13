<template>
  <h4>로그인 성공</h4>
  <a href="#" @click.prevent="logout">로그아웃</a>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("accessToken");
  router.push("/jwt/loginForm");
};
</script>
<style scoped></style>
