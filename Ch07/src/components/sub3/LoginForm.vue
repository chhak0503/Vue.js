<template>
  <h4>로그인</h4>
  <form @submit.prevent="loginProc">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="password" v-model="user.pass" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="로그인" />
        </td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import { reactive } from "vue";
import axios from "axios";

const user = reactive({
  uid: "",
  pass: "",
});

const loginProc = function () {
  axios
    .post("http://localhost:8080/user/login", user)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
