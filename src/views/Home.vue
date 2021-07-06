<template>
  <div>
    <Navbar />
    <ShiftOverview username="User" />
    <!-- <HelloWorld
      msg="Thank you for using our product. We're glad you're with us."
    /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import ShiftOverview from "@/components/ShiftOverview.vue";

export default {
  name: "Home",
  components: {
    /* HelloWorld, */ Navbar,
    ShiftOverview,
  },
};
</script>