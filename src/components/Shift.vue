<template>
  <div>
    <MDBContainer class="mt-4"
      ><MDBBtn
        color="primary"
        href="#"
        style="float: right"
        class="refresh-btn"
        @click="goBack()"
      >
        <MDBIcon icon="arrow-left" iconStyle="fas" class="me-2"></MDBIcon>Terug
      </MDBBtn>
      <h2>Eetlijst</h2>
      <!-- {{ shiftname }} -->
      <p class="desc">
        Iedere dinsdag en donderdag bereid de FoodCie een heerlijke maaltijd. Om
        20uur staat het eten klaar. Om 17uur sluiten de inschrijvingen. Het eten
        kost 3.75euro voor iedereen die staat ingeschreven.
      </p>
      <p class="desc">
        Let op: onderstaande shifts zijn eetlijsten. Je eetvoorkeuren kun je
        wijzigen op de pagina My Skøll.
      </p>
    </MDBContainer>
    <MDBContainer id="Shift" class="group">
      <div class="d-grid gap-2 d-md-flex justify-content-md-between">
        <h2>Aankomende Shifts</h2>
        <MDBBtn
          color="primary"
          href="#"
          style="float: right"
          class="refresh-btn"
        >
          <MDBIcon icon="sync" iconStyle="fas" class="me-2"></MDBIcon>Verversen
        </MDBBtn>
      </div>
      <!-- <MDBRow>
        <MDBCol md="10" sm="12">
          <h2>Aankomende Shifts</h2>
        </MDBCol>
        <MDBCol md="2" sm="12">
          <MDBBtn
            color="primary"
            href="#"
            style="float: right"
            class="refresh-btn"
          >
            <MDBIcon icon="sync" iconStyle="fas" class="me-2"></MDBIcon
            >Verversen
          </MDBBtn></MDBCol
        >
      </MDBRow> -->

      <MDBRow
        :cols="['1', 'md-12']"
        class="g-4"
        v-for="(day, index) in days"
        v-bind:key="index"
      >
        <MDBCol>
          <h5 class="ShiftDate">
            {{ day.date }} | Zichtbaar tot {{ day.registrationDeadline }}
          </h5></MDBCol
        >

        <MDBRow :cols="['1', 'md-4']" class="g-3">
          <MDBCol v-for="(shift, idx) in days[index].shifts" v-bind:key="idx">
            <MDBCard class="h-100" @click="goToEvent()">
              <!-- <MDBCardImg
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              top
              alt="..."
            /> -->
              <MDBCardBody>
                <MDBCardTitle>{{ shift.name }}</MDBCardTitle>
                <MDBCardText
                  ><p>Start: {{ shift.start }}</p>
                  <p>Einde: {{ shift.end }}</p>
                  <p>
                    Aangemeld: {{ shift.subscribed }} /
                    {{ shift.maxSubscribed }}
                  </p>
                </MDBCardText>
                <!-- <router-link to="/foo" tag="button"> Inschrijven </router-link> -->
                <MDBBtn color="primary" href="#" class="refresh-btn">
                  <MDBIcon icon="pen" iconStyle="fas" class="me-2"></MDBIcon
                  >Inschrijven
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBRow>
    </MDBContainer>
  </div>
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdb-vue-ui-kit";

export default {
  name: "AvailableShifts",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBIcon,
    MDBBtn,
  },
  props: {
    shiftname: String,
    days: Array,
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.group {
  background-color: #f5f5f5;
  padding: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.ShiftDate {
  margin-top: 56px;
}

@media screen and (max-width: 540px) {
  .btn-wide {
    width: 100%;
  }
}
</style>