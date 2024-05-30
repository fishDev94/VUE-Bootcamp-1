<script setup>
import { onMounted, ref, computed } from "vue";

// data refs
const number = ref(0);
const pippo = ref("sono pippo");
const color = ref("#000000");

// Computed
const isEven = computed(() => number.value % 2 === 0);

// Methods
const sum = (type) => {
  if (type === "increment") {
    number.value = ++number.value;
    return;
  }

  number.value = --number.value;
};

onMounted(() => {
  console.log("montato");
  console.log(isEven.value);
});
</script>

<template>
  <div class="counter-container">
    <Button text="decrease" @click="sum()" color="red" />
    <h1>{{ number }}</h1>
    <Button text="increase" @click="sum('increment')" :color />
  </div>
  <input type="color" v-model="color" />
  <p>{{ color }}</p>
  <p>{{ isEven }}</p>
</template>

<style scoped>
.counter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100px;
  width: 600px;
}
</style>
