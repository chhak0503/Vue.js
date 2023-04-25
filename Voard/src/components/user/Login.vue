<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>로그인</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card class="mx-auto" max-width="400">
          <v-card-item>
            <v-card-title>로그인</v-card-title>
          </v-card-item>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="8" class="border"></v-col>
                <v-col cols="4" class="border"></v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-btn>회원가입</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
    <v-footer app color="grey">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup></script>
<style scoped></style>
