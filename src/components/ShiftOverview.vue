<template>
  <div>
    <MDBContainer class="mt-4"
      ><h2>Hallo {{ username }}</h2>
      <MDBBtn
        color="primary"
        href="#"
        style="float: right"
        class="refresh-btn"
        @click="alertNow()"
      >
        <MDBIcon icon="user" iconStyle="fas" class="me-2"></MDBIcon>Click
      </MDBBtn>
    </MDBContainer>
    <MDBContainer id="Available" class="group">
      <MDBBtn color="primary" href="#" style="float: right" class="refresh-btn">
        <MDBIcon icon="sync" iconStyle="fas" class="me-2"></MDBIcon>Verversen
      </MDBBtn>
      <h2>Beschikbare Events</h2>
      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol v-for="(event, index) in events" v-bind:key="index">
          <MDBCard class="h-100" @click="goToEvent()">
            <!-- <MDBCardImg
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              top
              alt="..."
            /> -->
            <MDBCardBody>
              <MDBCardTitle>{{ event.name }}</MDBCardTitle>
              <MDBCardText>{{ event.desc }} </MDBCardText>
              <router-link to="/foo" tag="button"> Inschrijven </router-link>
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
          <MDBCard class="h-100">
            <!-- <MDBCardImg
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              top
              alt="..."
            /> -->
            <MDBCardBody>
              <MDBCardTitle>{{ event.name }}</MDBCardTitle>
              <MDBCardText>{{ event.desc }} </MDBCardText>
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
      this.router.push({ path: "/event" });
    },
    alertNow() {
      alert("Hi");
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

h2 {
  margin-bottom: 25px;
}
</style>