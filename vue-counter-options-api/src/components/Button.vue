<template>
  <button class="app-button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style scoped>
.app-button {
  background-color: v-bind("color");
  border: none;
  border-radius: 4px;
  width: 100px;
}
</style>
