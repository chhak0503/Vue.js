<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>회원가입</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-card class="mb-6">
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
                      v-model="user.uid"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      :loading="loading"
                      color="success"
                      @click="btnCheckUid"
                      >중복확인</v-btn
                    >
                    <v-chip v-if="rsChip1" class="ma-2" color="red">
                      이미 사용중인 아이디 입니다.
                    </v-chip>
                    <v-chip v-if="rsChip2" class="ma-2" color="green">
                      사용 가능한 아이디 입니다.
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      type="password"
                      label="비밀번호 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.pass1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      type="password"
                      label="비밀번호 확인"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.pass2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-card class="mb-6">
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
                      v-model="user.name"
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
                      v-model="user.nick"
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
                      v-model="user.email"
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
                      v-model="user.hp"
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
                      v-model="user.zip"
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
                      v-model="user.addr1"
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
                      v-model="user.addr2"
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
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const user = reactive({
  uid: null,
  pass1: null,
  pass2: null,
  name: null,
  nick: null,
  email: null,
  hp: null,
  zip: null,
  addr1: null,
  addr2: null,
});

const rsChip1 = ref(false);
const rsChip2 = ref(false);
const loading = ref(false);

const btnCheckUid = () => {
  loading.value = true;

  axios
    .get("http://localhost:8080/Voard/user/countUid", {
      params: { uid: user.uid },
    })
    .then((response) => {
      setTimeout(() => {
        loading.value = false;

        if (response.data > 0) {
          rsChip1.value = true;
          rsChip2.value = false;
        } else {
          rsChip1.value = false;
          rsChip2.value = true;
        }
      }, 500);

      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const btnCancel = () => {
  router.push("/user/login");
};

const btnRegister = () => {
  axios
    .post("http://localhost:8080/Voard/user/register", user)
    .then((response) => {
      console.log(response);
      router.push("/user/login");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
