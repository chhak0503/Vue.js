<template>
  <h4>User2 목록</h4>

  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
      <th>등록일</th>
      <th>관리</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <!-- rdate 뒤에 ?는 왜 할까요? 알아보세요~ -->
      <td>{{ user.rdate?.substring(0, 10) }}</td>
      <td>
        <a href="#" @click.prevent="modifyUser(user)">수정</a>
        <a href="#" @click.prevent="deleteUser(user)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import axios from "axios";
import { onBeforeMount, provide, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const users = ref([]);

const modifyUser = (user) => {
  store.dispatch("setUser2", user);
  router.push("/user2/modify");
};

const deleteUser = (user) => {
  const result = confirm("정말 삭제?");
  if (!result) {
    return;
  }

  axios
    .get("http://localhost:8080/Ch09/user2/delete", {
      params: { uid: user.uid },
    })
    .then((response) => {
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onBeforeMount(() => {
  console.log("onBeforeMount...");
  axios
    .get("http://localhost:8080/Ch09/user2/list")
    .then((response) => {
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
