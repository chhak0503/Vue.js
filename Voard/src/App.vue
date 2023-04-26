<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "vuex";

const router = useRouter();
const userStore = useStore();

onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken != null) {
    axios
      .get("http://localhost:8080/Voard/user/auth", {
        headers: { "X-AUTH-TOKEN": accessToken },
      })
      .then((response) => {
        console.log(response);
        const user = response.data.user;
        userStore.dispatch("setUser", user);

        router.push("/list");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    router.push("/user/login");
  }
});
</script>
