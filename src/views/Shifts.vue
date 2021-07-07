<template>
  <div>
    <Navbar />
    <Shift shiftname="Demo Shift" v-bind:days="days" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Shift from "@/components/Shift.vue";
import days from "@/data/days.js";

export default {
  name: "Home",
  components: {
    Navbar,
    Shift,
  },
  data() {
    return { days: days };
  },
};
</script>