<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글목록</v-app-bar-title>
      <p>
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-table>
            <thead>
              <tr>
                <th class="text-center">번호</th>
                <th class="text-center">제목</th>
                <th class="text-center">글쓴이</th>
                <th class="text-center">조회수</th>
                <th class="text-center">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(article, index) in state.data.articles">
                <td class="text-center">{{ state.pageStartNum - index }}</td>
                <td class="text-left">{{ article.title }}</td>
                <td class="text-center">{{ article.nick }}</td>
                <td class="text-center">{{ article.hit }}</td>
                <td class="text-center">{{ article.rdate }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn color="primary" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
          <v-pagination
            :length="100"
            :total-visible="5"
            rounded="circle"
          ></v-pagination>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive, computed, onBeforeMount } from "vue";
import axios from "axios";

const router = useRouter();
const userStore = useStore();

const user = computed(() => userStore.getters.user);

const state = reactive({
  data: {},
  pageStartNum: 0,
});

const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};

const btnWrite = () => {
  router.push("/write");
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Voard/list")
    .then((response) => {
      console.log(response);
      state.data = response.data;
      state.pageStartNum = response.data.pageStartNum;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
