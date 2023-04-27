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
            :length="state.lastPageNum"
            :total-visible="5"
            rounded="circle"
            v-model="page"
            @click="pageHandler"
            @next="pageHandler"
            @prev="pageHandler"
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
import { ref, reactive, computed, onBeforeMount } from "vue";
import axios from "axios";

const router = useRouter();
const userStore = useStore();

const user = computed(() => userStore.getters.user);

const state = reactive({
  data: {},
  pageStartNum: 0,
  lastPageNum: 0,
});
const page = ref(1);

const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};

const btnWrite = () => {
  router.push("/write");
};

const pageHandler = () => {
  getArticles(page.value);
};

const getArticles = (pg) => {
  axios
    .get("http://localhost:8080/Voard/list?pg=" + pg)
    .then((response) => {
      console.log(response);
      const data = response.data;
      state.data = data;
      state.pageStartNum = data.pageStartNum;
      state.lastPageNum = data.lastPageNum;
    })
    .catch((error) => {
      console.log(error);
    });
};

onBeforeMount(() => {
  getArticles(1);
});
</script>
<style scoped></style>
