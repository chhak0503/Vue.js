<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>약관</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-textarea
            label="이용약관"
            variant="outlined"
            rows="10"
            hide-details="true"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다."
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            variant="outlined"
            rows="10"
            hide-details="true"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다."
          ></v-checkbox>
        </v-sheet>
        <v-sheet max-width="800" class="mx-auto text-center">
          <v-btn @click="btnCancel">취소</v-btn>
          <v-btn class="ml-2" color="primary" @click="btnNext">다음</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnCancel = () => {
  router.push("/user/login");
};
const btnNext = () => {
  router.push("/user/register");
};
</script>
<style scoped></style>
