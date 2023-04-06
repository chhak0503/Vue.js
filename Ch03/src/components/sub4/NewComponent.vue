<template>
  <h4>NewComponent</h4>
  <p>카운터 : {{ count }} <button @click="btnCountUp">증가</button></p>
</template>

<script>
export default {
  name: "NewComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btnCountUp: function () {
      this.count++;
    },
  },
  // 컴포넌트 라이프사이클 함수(Hook)
  beforeCreate: function () {
    console.log("beforeCreate...");
  },
  created: function () {
    console.log("created...");
  },
  beforeMount: function () {
    console.log("beforeMount...");
  },
  mounted: function () {
    console.log("mounted...");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate...");
  },
  updated: function () {
    console.log("updated...");
  },
  beforeUnmount: function () {
    console.log("beforeUnmount...");
  },
  unmounted: function () {
    console.log("unmounted...");
  },
};
</script>

<style scoped></style>
