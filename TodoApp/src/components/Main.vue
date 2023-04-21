<template>
  <main>
    <ul>
      <Item v-for="data in todos" v-bind:todo="data" />
    </ul>
  </main>
</template>
<script>
import Item from "./Item.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Main",
  components: {
    Item,
  },
  setup() {
    const store = useStore();
    const todos = store.getters.todos;

    return { todos };
  },
};
</script>

<style>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}
main > ul {
  width: 100%;
  height: auto;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
}
main > ul > li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  margin-bottom: 6px;
  background-color: white;
  box-sizing: border-box;
}
main > ul > li > i {
  color: #62acde;
}

main > ul > li > button {
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  color: #de4343;
}
</style>
