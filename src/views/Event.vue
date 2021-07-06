<template>
  <div>
    <Navbar />
    <Shift shift="Demo Shift" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Shift from "@/components/Shift.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Shift,
  },
};
</script>