<template>
  <div class="add-task">
    <input type="text" v-model="inputValue" placeholder="Insert a new task" />
    <Button textButton="TestoProp" @click="handleSubmit" />
</div>
</template>

<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const inputValue = ref("");
const emit = defineEmits(['emitInput'])

const handleSubmit = () => {
    emit('emitInput', inputValue.value);
}
</script>

<style lang="scss" scoped>
.add-task {
    display: flex;
    gap: 2px;

    input, button {
        padding: 8px;
        border: none;
        border-radius: 4px;
    }
}
</style>