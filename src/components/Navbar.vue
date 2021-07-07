<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <img href="#" src="../assets/Skoll1.png" width="100" />
    <MDBNavbarBrand href="/">Skøll</MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="/" active> Home </MDBNavbarItem>
        <MDBNavbarItem href="/admin" style="display: none">
          Admin
        </MDBNavbarItem>
      </MDBNavbarNav>
      <!-- Search form -->
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Zoek events"
          aria-label="Search"
        />
        <MDBBtn color="primary"> Zoeken </MDBBtn>
      </form>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBBtn,
} from "mdb-vue-ui-kit";

export default {
  name: "Navbar",
  components: {
    MDBNavbar,
    MDBNavbarNav,
    MDBCollapse,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBBtn,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>