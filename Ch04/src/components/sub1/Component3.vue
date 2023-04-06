<template>
  <h4>Component3</h4>
  <p>
    이름 : <input type="text" v-model="user.name" /><br />
    나이 : <input type="number" v-model="user.age" /><br />
    <button @click="btnSend">상위 컴포넌트로 전송</button>
  </p>
</template>

<script>
export default {
  name: "Component3",
  setup(props, context) {
    // 변수 선언(반응성 없음)
    let name = "";
    let age = 0;

    // 객체는 반응성 있음
    const user = {
      name: "",
      age: 0,
    };

    const btnSend = () => {
      console.log("name : " + user.name);
      console.log("age : " + user.age);
      // 상위 컴포넌트로 myEvent 이벤트 발생
      context.emit("myEvent", user);
    };

    return {
      name,
      age,
      user,
      btnSend,
    };
  },
};
</script>

<style scoped></style>
