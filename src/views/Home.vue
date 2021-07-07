<template>
  <div>
    <Navbar />
    <ShiftOverview
      username="User"
      v-bind:events="events"
      v-bind:expiredEvents="expiredEvents"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import ShiftOverview from "@/components/ShiftOverview.vue";
import events from "@/data/events.js";
import expiredEvents from "@/data/expiredEvents.js";

export default {
  name: "Home",
  components: {
    Navbar,
    ShiftOverview,
  },
  data() {
    return {
      events: events,
      expiredEvents: expiredEvents,
    };
  },
};
</script>