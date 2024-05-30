<template>
  <button class="vue-button">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
  text: String,
  color: String,
});

console.log(props);
</script>

<style scoped>
.vue-button {
  background-color: v-bind("props.color");
}
</style>
