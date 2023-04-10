<template>
  <h3>Ch05.Router 실습</h3>

  <h4>1)Router 기본</h4>
  <router-link to="/hello">Hello</router-link> /
  <router-link to="/welcome">Welcome</router-link> /
  <router-link to="/greeting">Greeting</router-link>
  <hr />

  <h4>2)Nested Router</h4>
  <router-link to="/parent">Parent</router-link>

  <hr />

  <h4>3)Named View</h4>
  <RouterLink to="/main1">Main1</RouterLink> /
  <RouterLink to="/main2">Main2</RouterLink> /
  <RouterLink to="/main3">Main3</RouterLink>
  <hr />

  <h4>4)Router 데이터 전송</h4>
  <router-link
    v-bind:to="{
      path: '/component1',
      query: { name: '홍길동', age: 21, addr: '부산' },
    }"
    >Component1</router-link
  >
  /
  <router-link
    v-bind:to="{
      name: 'Component2',
      params: { name: '홍길동', age: 21, addr: '부산' },
    }"
    >Component2</router-link
  >
  /
  <router-link to="/form1">Form1</router-link> /
  <router-link to="/form2">Form2</router-link>

  <hr />

  <h4>Router 컴포넌트 출력</h4>
  <router-view name="header"></router-view>
  <router-view></router-view>
  <router-view name="footer"></router-view>
</template>

<script setup></script>

<style scoped></style>
