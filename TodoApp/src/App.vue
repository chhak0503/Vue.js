<template>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
