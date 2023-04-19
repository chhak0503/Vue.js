<template>
  <h4>User2 수정</h4>
  <form @submit.prevent="user2Modify">
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
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const user = store.getters.getUser2;

const user2Modify = () => {
  axios
    .post("http://localhost:8080/Ch09/user2/modify", user)
    .then((response) => {
      alert("수정완료!");
      router.push("/user2/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
