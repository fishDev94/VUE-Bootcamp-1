<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <main class="test">
    <Button />
  </main>
</template>

<style scoped>
.test {
  border: 2px solid red;
}

:global(.my-button) {
  background-color: red;
}
</style>
