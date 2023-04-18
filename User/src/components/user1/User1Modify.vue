<template>
  <h4>User1 수정</h4>
  <form @submit.prevent="user1Modify">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" readonly /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td><input type="submit" value="수정" /></td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// router 설정에서 props: true 설정
const props = defineProps({
  uid: String,
  name: String,
  hp: String,
  age: Number,
});

const user = reactive({
  uid: props.uid,
  name: props.name,
  hp: props.hp,
  age: props.age,
});

const user1Modify = () => {
  axios
    .put("http://localhost:8080/Ch09/user1", user)
    .then((response) => {
      alert("수정완료!");
      router.push("/user1/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
