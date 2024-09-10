<script setup lang="ts">
defineProps<{
  msg: string
}>()

const fun = () => {
  console.log(111)
}
</script>

<template>
  <div class="">
    <div class="test w-[288px] h-[288px]" @click="fun">{{ msg }}</div>
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
  font-size: 16px;
  text-align: center;
  background: red;
}
.hello {
  color: red;
}
</style>
