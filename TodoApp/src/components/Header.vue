<template>
  <header>
    <div>
      <input type="text" v-model="newTodo" placeholder="할일을 입력 하세요." />
      <button v-on:click="btnAddTodo">등록</button>
    </div>
  </header>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Header",
  setup(props, context) {
    const newTodo = ref("");

    const btnAddTodo = () => {
      console.log(newTodo.value);

      if (newTodo.value !== "") {
        const inputValue = newTodo.value && newTodo.value.trim();
        context.emit("addTodo", inputValue);

        newTodo.value = "";
      }
    };

    return {
      newTodo,
      btnAddTodo,
    };
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
}

header > div {
  width: 100%;
  height: 100%;
  position: relative;
}

header > div > input {
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
}

header > div > button {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background-color: #44ba81;
  color: white;
  border: none;
}
</style>
