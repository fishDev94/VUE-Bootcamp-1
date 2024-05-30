<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import AppButton from "@/components/AppButton.vue";
import TestComponent from "./components/TestComponent.vue";

const number = ref(0);

const isTen = computed(() => {
  return number.value > 10;
})

watch(isTen, (newVal, oldVal) => {
  console.log("Nuovo Valore", newVal)
  console.log("Vecchio Valore", oldVal)
})

const handleClick = (type) => {
  if (type === "increase") {
    number.value = ++number.value;
  } else {
    number.value = --number.value;
  }
};
</script> 

<template>
  <h1>Counter - LifeCycle</h1>
  <div class="counter-container">
    <AppButton text="Decrease" background-color="red" @click="handleClick" />
    <p>{{ number }}</p>
    <AppButton
      text="Increase"
      background-color="green"
      @click="handleClick('increase')"
    />
  </div>
  <TestComponent v-if="isTen" :number="number" text="prova"/>
</template>

<style scoped>
.counter-container {
  display: flex;
  gap: 4px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
