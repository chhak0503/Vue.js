<template>
  <h3>Ch04.Composition API 실습</h3>

  <h4>1)setup</h4>
  <Component1></Component1>
  <hr />

  <h4>2)Reactivity</h4>
  <MyComponent1></MyComponent1>
  <hr />

  <h4>3)LifeCycle Hooks</h4>
  <hr />

  <h4>4)Dependency Injection</h4>
  <hr />
</template>

<script>
import Component1 from "./components/sub1/Component1.vue";
import MyComponent1 from "./components/sub2/MyComponent1.vue";

export default {
  name: "App",
  components: { Component1, MyComponent1 },
};
</script>
