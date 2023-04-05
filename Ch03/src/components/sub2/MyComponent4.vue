<template>
  <h4>MyComponent4(watch API)</h4>
  <p>금지문자 발견 : {{ banText }}</p>
  <textarea v-model="inputText" cols="30" rows="10"></textarea>
</template>
<script>
export default {
  name: "MyComponent4",
  data() {
    return {
      inputText: "",
      banText: "stupid",
    };
  },
  // 상태값 데이터 변화를 감지해서 특정 로직을 수행하는 API
  watch: {
    inputText: function () {
      let pos = this.inputText.indexOf(this.banText);
      if (pos >= 0) {
        alert(this.banText + " 입력 불가");
        this.inputText = this.inputText.substr(0, pos);
      }
    },
  },
};
</script>
<style scoped></style>
