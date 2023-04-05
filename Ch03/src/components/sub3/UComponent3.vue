<template>
  <h4>UComponent3</h4>
  <p>
    c3Name : {{ c3Name }}<br />
    c3Age : {{ c3Age }}<br />
  </p>
  <UComponent4 :c4Name="c3Name" :c4Age="c3Age"></UComponent4>
</template>
<script>
import UComponent4 from "./UComponent4.vue";

export default {
  name: "UComponent3",
  props: ["c3Name", "c3Age"],
  components: { UComponent4 },
};
</script>
<style scoped></style>
