<template>
  <div class="test-component">
    <h2>Eccomi</h2>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, watch, onBeforeMount, onMounted, onUpdated, onBeforeUpdate, onBeforeUnmount, onUnmounted } from 'vue';

// const props = defineProps({
//     number: Number,
// })


const props = withDefaults(defineProps<{
    number?: number,
    text: string,
}>(), {
    number: 0
})

watch(props, () => {
    console.log(props.text)
})

onMounted(() => {
    console.log('mounted');
})

onBeforeMount(() => {
    console.log('before Mount')
});

onBeforeUpdate(() => {
    console.log('pre-aggiornamento');
});

onUpdated(() => {
    console.log('aggiornato');
});

onBeforeUnmount(() => {
    console.log('before unmount')
});

onUnmounted(() => {
    console.log('unmounted');
});
</script>

<style scoped>
.test-component {
  background-color: rgb(69, 83, 122);
  padding: 20px;
  width: max-content;
}
</style>
