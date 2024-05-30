<template>
    <button class="my-button">{{ text }}</button>    
</template>

<script setup>
defineProps(['text', 'backgroundColor'])
</script>

<style lang="scss" scoped>
.my-button {
    background-color: v-bind('backgroundColor');
    border: 0;
    border-radius: 4px;
    padding: 4px;
}
</style>