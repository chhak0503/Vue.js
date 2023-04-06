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
/**
 * 날짜 : 2023/04/06
 * 이름 : 김철학
 * 내용 : Ch04.Composition API 실습
 *
 * Vue3 Composition API
 *  - 기존 Options API를 대체하는 통합한 Composition API
 *  - 컴포넌트의 로직을 유연하고 가독성있게 처리할 수 있는 함수 기반 API
 */
import Component1 from "./components/sub1/Component1.vue";
import MyComponent1 from "./components/sub2/MyComponent1.vue";

export default {
  name: "App",
  components: { Component1, MyComponent1 },
};
</script>
