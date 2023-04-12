<template>
  <h4>Axios 실습하기</h4>

  <h4>Get</h4>
  <button @click="getUsers">Users 요청</button>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>
<script setup>
import axios from "axios";

const getUsers = function () {
  axios({
    url: "http://localhost:8080/Ch09/user1",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      console.log("response : " + JSON.stringify(response));
      console.log(response.data);
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};
</script>
<style scoped></style>
