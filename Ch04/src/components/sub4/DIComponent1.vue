<template>
  <h4>DIComponent1</h4>
  <p>
    이름 : {{ user.name }}<br />
    나이 : {{ user.age }}<br />
    주소 : {{ user.addr }}<br />
  </p>

  <DIComponent2></DIComponent2>
</template>
<script setup>
import { inject } from "vue";
import DIComponent2 from "./DIComponent2.vue";

// 상위 컴포넌트에서 provide 한 데이터를 주입
const user = inject("user");
</script>
<style scoped></style>
