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
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import ShiftOverview from "@/components/ShiftOverview.vue";

var events = [
  {
    id: 2,
    name: "Eetlijst",
    desc: "Iedere dinsdag en donderdag bereid de FoodCie een heerlijke maaltijd. Om 20uur staat het eten klaar. Om 17uur sluiten de inschrijvingen. Het eten kost 3.75euro voor iedereen die staat ingeschreven. Let op: onderstaande shifts zijn eetlijsten. Je eetvoorkeuren kun je wijzigen op de pagina My Skøll.",
    viewUntil: "06-06-2022",
  },
  {
    id: 3,
    name: "Afstippen D1/D2",
    desc: "Na de skiffweken te hebben gehad kun je nu je stip halen voor de D1 of D2 stip. Voor de D1 stip moet je verplicht omslaan, dus neem een handdoek en droge kleren mee.",
    viewUntil: "08-08-2021",
  },
  {
    id: 4,
    name: "Outdoor",
    desc: "Heb je aan roeien niet genoeg, of heb je genoeg van het roeien? Doe dan mee met de outdoor! Een bootcamp voor ieder niveau. Iedere donderdag om 18:30 verzamelen bij skoll(buiten).",
    viewUntil: "22-04-2022",
  },
];

var expiredEvents = [
  {
    id: 1,
    name: "Terrasborrels",
    desc: "We gaan als vanouds op dinsdag en donderdag borrelen. De shift is va 18:00-22:00 uur. De FoodCie zal op deze dagen lekker koken voor alle borrelaars. Aangezien we maximaal 100 mensen mogen ontvangen, werken we met inschrijvingen. Zondag om 20uur gaan de inschrijvingen voor de borrels van deze week open via TONCI. JE STAAT AUTOMATISCH INGESCHREVEN VOOR HET ETEN. SCHRIJF JE UIT ALS JE NIET KAN KOMEN.",
    viewUntil: "01-06-2022",
  },
];

// console.log(events);

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