<template>
  <Navbar />
  <div class="m-5 text-center">
    <h1>404 - Page Not Found</h1>
    <p>De pagina waar je naar zocht is niet gevonden...</p>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "PageNotFound",
  components: { Navbar },
};
</script>