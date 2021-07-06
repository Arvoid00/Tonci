<template>
  <div>
    <MDBContainer class="mt-4"
      ><h2>Hallo {{ username }}</h2>
    </MDBContainer>
    <MDBContainer id="Available" class="group">
      <MDBBtn color="primary" href="#" style="float: right" class="refresh-btn">
        <MDBIcon icon="sync" iconStyle="fas" class="me-2"></MDBIcon>Verversen
      </MDBBtn>
      <h2>Beschikbare Events</h2>

      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol>
          <MDBCard class="h-100">
            <!-- <MDBCardImg
          src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
          top
          alt="..."
        /> -->
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted">Zichtbaar tot: Datum</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard class="h-100">
            <!-- <MDBCardImg
          src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
          top
          alt="..."
        /> -->
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>This is a short card.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted">Zichtbaar tot: Datum</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard class="h-100">
            <!-- <MDBCardImg
          src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
          top
          alt="..."
        /> -->
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted">Zichtbaar tot: Datum</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard class="h-100">
            <!-- <MDBCardImg
          src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
          top
          alt="..."
        /> -->
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted">Zichtbaar tot: Datum</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBContainer id="Expired" class="group">
      <h2>Verlopen Events</h2>
      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol>
          <MDBCard class="h-100">
            <!-- <MDBCardImg
          src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
          top
          alt="..."
        /> -->
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted">Zichtbaar tot: Datum</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard class="h-100">
            <!-- <MDBCardImg
          src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
          top
          alt="..."
        /> -->
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>This is a short card.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted">Zichtbaar tot: Datum</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard class="h-100">
            <!-- <MDBCardImg
          src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
          top
          alt="..."
        /> -->
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted">Zichtbaar tot: Datum</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard class="h-100">
            <!-- <MDBCardImg
          src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
          top
          alt="..."
        /> -->
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small class="text-muted">Zichtbaar tot: Datum</small>
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
  MDBCardText /*MDBCardImg*/,
  MDBIcon,
  MDBBtn,
} from "mdb-vue-ui-kit";

fetch("https://skoll.nl/wp-json/myskoll/tonci").then((res) => console.log(res));

export default {
  name: "AvailableShifts",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardText /* MDBCardImg */,
    MDBIcon,
    MDBBtn,
  },
  props: {
    username: String,
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