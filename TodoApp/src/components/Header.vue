<template>
  <header>
    <div>
      <input type="text" placeholder="할일을 입력 하세요." />
      <button>등록</button>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  setup() {
    return {};
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
