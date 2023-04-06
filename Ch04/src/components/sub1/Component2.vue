<template>
  <h4>Component2</h4>
  <p>
    name : {{ props.name }}<br />
    age : {{ props.age }}<br />
    addr : {{ props.addr }}<br />
  </p>
</template>

<script>
export default {
  name: "Component2",
  props: {
    name: String,
    age: Number,
    addr: String,
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped></style>
