<template>
  <div class="counter-container">
    <Button text="decrease" @click="sum()" color="red" />
    <h1>{{ number }}</h1>
    <Button text="increase" @click="sum('increment')" :color />
  </div>
  <input type="color" v-model="color" />
  <p>{{ color }}</p>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      color: "#000000",
    };
  },

  methods: {
    sum(type) {
      if (type === "increment") {
        this.number = ++this.number;

        return;
      }

      this.number = --this.number;
    },
  },
};
</script>

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
