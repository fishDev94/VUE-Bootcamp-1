<script setup>
import { ref, computed } from "vue";
import Task from "./components/Task.vue";
import AddTask from "./components/AddTask.vue";

const taskList = ref([])

const handleAddTask = (e) => {
  taskList.value = [...taskList.value, e];
}

const isTitle3 = computed(() => {
  return taskList.value.length === 3;
})

const isTitle5 = computed(() => {
  return taskList.value.length === 5;
})

</script>

<template>
  <main>
    <h1 v-if="isTitle3">Ci sono 3 Elementi</h1>
    <h1 v-else-if="isTitle5">E siamo a 5</h1>
    <h1 v-else>Sono il fallback</h1>
    <AddTask @emit-input="handleAddTask" />
    <Task v-for="task in taskList" :text="task"/>
  </main>
</template>

<style scoped>
</style>
