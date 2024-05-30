<template>
  <div>
    <button @click="handleClick" class="my-button">{{ pippo }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const pippo = ref("ciao");

const handleClick = () => {
  pippo.value = "nuovo valore";
  console.log(pippo.value);
};
</script>

<style scoped>
.my-button {
  background-color: rgb(74, 124, 77);
  border: none;
  width: 200px;
  height: 100px;
  color: white;
  font-weight: 800;
  font-size: 1.8rem;
}
</style>
