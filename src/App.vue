<script>
const date = new Date();
export default {
  name: "App",
  data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
    };
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<template lang="pug">
link(href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet")
.clock-box
  .clock
    .hour {{ dateTime.hours }}
    .dot :
    .min {{ dateTime.minutes }}
    .dot :
    .sec {{ dateTime.seconds }}
  .circle
    .waterwave
</template>
