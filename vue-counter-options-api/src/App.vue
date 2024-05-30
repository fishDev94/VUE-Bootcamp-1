<script>
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      pippo: "pippo",
      number: 0,
    };
  },
  components: {
    Button,
  },
  mounted() {
    this.myFunction("montato");
    console.log(this.test);
  },
  methods: {
    sum(type) {
      if (type === "increase") {
        this.number = ++this.number;
      } else {
        this.number = --this.number;
      }
    },
    myFunction(arg) {
      console.log(arg);
    },
  },
  computed: {
    isEven() {
      return this.number % 2 === 0;
    },
    test() {
      return this.number + " sono una computed";
    },
  },
};
</script>

<template>
  <h1>Counter App</h1>
  <div class="app-main">
    <Button @click="sum()" text="Decrease" color="red" />
    <p class="app-main__number">{{ number }}</p>
    <Button @click="sum('increase')" text="Increase" color="green" />
  </div>
  <p>{{ isEven }}</p>
  <p>{{ test }}</p>
</template>

<style scoped>
.app-main {
  display: flex;
  gap: 12px;
}

.app-main__number {
  font-weight: bold;
}
</style>
