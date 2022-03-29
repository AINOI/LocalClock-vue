<script setup>
import { onUnmounted, ref } from 'vue';

const hours = ref('00')
const mins = ref('00')
const secs = ref('00')

const setDateTime = setInterval(() => {
  const date = ref(new Date())
  const hourTimer = ref(date.value.getHours())
  const minTimer = ref(date.value.getMinutes())
  const secTimer = ref(date.value.getSeconds())
  
  hours.value = hourTimer.value
  mins.value = minTimer.value
  secs.value = secTimer.value

  hours.value = hourTimer.value < 10 ? "0" + hourTimer.value : hourTimer.value
  mins.value = minTimer.value < 10 ? "0" + minTimer.value : minTimer.value
  secs.value = secTimer.value < 10 ? "0" + secTimer.value : secTimer.value
}, 1000)

onUnmounted(() => clearInterval(setDateTime()))

</script>

<template lang="pug">
link(href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet")
.clock-box
  .clock
    .hour {{ hours }}
    .dot :
    .min {{ mins }}
    .dot :
    .sec {{ secs }}
  .circle
    .waterwave
</template>
