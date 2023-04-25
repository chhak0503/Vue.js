<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>회원가입</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-card class="mb-2">
            <v-card-item>
              <v-card-title>사이트 이용정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="아이디 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-btn color="success">중복확인</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="비밀번호 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="비밀번호 확인"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-card class="mb-2">
            <v-card-item>
              <v-card-title>개인정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="이름 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="별명 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-btn color="success">중복확인</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="이메일 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="휴대폰 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      label="우편번호 검색"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-btn color="success" block>검색</v-btn>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      label="기본주소 검색"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      label="상세주소 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-sheet>
        <v-sheet max-width="800" class="mx-auto text-center">
          <v-btn @click="btnCancel">취소</v-btn>
          <v-btn class="ml-2" color="primary" @click="btnRegister">등록</v-btn>
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
const btnRegister = () => {
  router.push("/list");
};
</script>
<style scoped></style>
