<template>
  <div>
    <MDBContainer
      ><h2>Hallo {{ username }}</h2>
    </MDBContainer>
    <MDBContainer id="Available" class="group">
      <MDBRow>
        <MDBCol sm="12" md="8">
          <h2 class="">Beschikbare Events</h2>
        </MDBCol>
        <MDBCol sm="12" md="4">
          <MDBBtn
            color="primary"
            href="#"
            style="float: right"
            class="refresh-btn btn-wide"
            @click="refreshEvents()"
          >
            <MDBIcon icon="sync" iconStyle="fas" class="me-2"></MDBIcon
            >Verversen
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol v-for="(event, index) in events" v-bind:key="index">
          <MDBCard class="h-100 hover-shadow card" @click="goToEvent()">
            <!-- <MDBCardImg
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              top
              alt="..."
            /> -->
            <MDBCardBody>
              <MDBCardTitle>{{ event.name }}</MDBCardTitle>
              <MDBCardText>{{ event.desc }} </MDBCardText>
              <!-- <MDBBtn color="primary" href="#" class="refresh-btn">
                <MDBIcon icon="pen" iconStyle="fas" class="me-2"></MDBIcon
                >Inschrijven
              </MDBBtn> -->
              <p class="cta">INSCHRIJVEN</p>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted"
                >Zichtbaar tot: {{ event.viewUntil }}</small
              >
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBContainer id="Expired" class="group">
      <h2>Verlopen Events</h2>
      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol v-for="(event, index) in expiredEvents" v-bind:key="index">
          <MDBCard class="h-100 hover-shadow card" @click="goToEvent()">
            <!-- <MDBCardImg
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              top
              alt="..."
            /> -->
            <MDBCardBody>
              <MDBCardTitle>{{ event.name }}</MDBCardTitle>
              <MDBCardText>{{ event.desc }} </MDBCardText>
              <!-- <router-link
                to="/foo"
                tag="button"
                style="text-transform: uppercase"
              >
                Meer lezen
              </router-link> -->
              <p class="cta">MEER LEZEN</p>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted"
                >Zichtbaar tot: {{ event.viewUntil }}</small
              >
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
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
  MDBCardFooter,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdb-vue-ui-kit";

// fetch("https://skoll.nl/wp-json/myskoll/tonci").then((res) => console.log(res));

export default {
  name: "AvailableShifts",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardText,
    MDBCardTitle,
    MDBIcon,
    MDBBtn,
  },
  props: {
    username: String,
    events: Array,
    expiredEvents: Array,
  },
  methods: {
    goToEvent() {
      alert("This redirect does not work yet");
    },
    refreshEvents() {
      alert("This will refresh the events data");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 25px;
  margin-bottom: 25px;
}
.group {
  background-color: #f5f5f5;
  padding: 25px;
  /* margin-top: 25px;
  margin-bottom: 25px; */
}
.card:hover {
  cursor: pointer;
}

.cta {
  color: #1266f1;
}

h2 {
  margin-bottom: 25px;
}

@media screen and (max-width: 540px) {
  .btn-wide {
    width: 100%;
  }
}
</style>