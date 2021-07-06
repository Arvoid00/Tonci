<template>
  <div>
    <Navbar />
    <Shift shiftname="Demo Shift" v-bind:days="days" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Shift from "@/components/Shift.vue";

var days = [
  {
    date: "6 juli 2021",
    registrationDeadline: "6 juli 2021 om 17:00",
    shifts: [
      {
        name: "Eetlijst",
        start: "20:00",
        end: "21:00",
        subscribed: 55,
        maxSubscribed: 100,
      },
      {
        name: "Tweede Ronde",
        start: "21:00",
        end: "22:00",
        subscribed: 10,
        maxSubscribed: 100,
      },
    ],
  },
  {
    date: "13 juli 2021",
    registrationDeadline: "13 juli 2021 om 17:00",
    shifts: [
      {
        name: "Eetlijst",
        start: "20:00",
        end: "21:00",
        subscribed: 24,
        maxSubscribed: 100,
      },
    ],
  },
  {
    date: "20 juli 2021",
    registrationDeadline: "20 juli 2021 om 17:00",
    shifts: [
      {
        name: "Eetlijst",
        start: "20:00",
        end: "21:00",
        subscribed: 10,
        maxSubscribed: 100,
      },
    ],
  },
];

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