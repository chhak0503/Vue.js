<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글쓰기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-text-field
            label="제목입력"
            variant="outlined"
            v-model="article.title"
          ></v-text-field>
          <v-textarea
            label="내용입력"
            variant="outlined"
            rows="12"
            v-model="article.content"
          ></v-textarea>
          <v-file-input label="파일첨부" variant="outlined"></v-file-input>
          <v-sheet class="text-right">
            <v-btn @click="btnCancel">취소</v-btn>
            <v-btn color="primary" @click="btnWrite" class="ml-2">글등록</v-btn>
          </v-sheet>
        </v-sheet>
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-toolbar color="primary" title="글 등록 확인"></v-toolbar>
            <v-card-text>작성한 글이 잘 등록 되었습니다.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="btnCloseDlg">확인</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";

const router = useRouter();
const userStore = useStore();

const article = reactive({
  title: null,
  content: null,
  uid: null,
});

const dialog = ref(false);

const btnCloseDlg = () => {
  dialog.value = false;
  router.push("/list");
};

const btnCancel = () => {
  router.push("/list");
};
const btnWrite = () => {
  const user = userStore.getters.user;
  article.uid = user.uid;

  axios
    .post("http://localhost:8080/Voard/write", article)
    .then((response) => {
      console.log(response);
      if (response.data > 0) {
        dialog.value = true;
        //router.push("/list");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  //
};
</script>
<style scoped></style>
