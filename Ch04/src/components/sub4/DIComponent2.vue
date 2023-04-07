<template>
  <h4>DIComponent2</h4>
  <p>
    이름 : {{ user.name }}<br />
    나이 : {{ user.age }}<br />
    주소 : {{ user.addr }}<br />
  </p>
</template>
<script setup>
import { inject } from "vue";

const user = inject("user");
</script>
<style scoped></style>
