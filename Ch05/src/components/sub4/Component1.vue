<template>
  <h4>Component1</h4>
  <p>
    query : {{ $route.query }}<br />
    name : {{ $route.query.name }}<br />
    age : {{ $route.query.age }}<br />
    addr : {{ $route.query.addr }}<br />
  </p>
</template>
<script setup></script>
<style scoped></style>
