<script setup lang="ts">
defineProps<{
  msg: string
}>()

const fun = () => {
  console.log(111)
}
</script>

<template>
  <div class="greetings">
    <div class="test pb-[50px]" @click="fun"></div>
    <h1 class="green pb-[20px]">
      {{ msg }}
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.test {
  width: 320px;
  height: 160px;
  background-color: bisque;
  text-align: center；;
}
.hello {
  color: red;
}
</style>
