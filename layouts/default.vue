<template>
  <v-app class="main-app">
<!--    <Navbar />-->
<!--    <v-main >-->
<!--      <Nuxt />-->
<!--    </v-main>-->
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "~/components/Navigation/Navbar";
import Footer from "~/components/Navigation/Footer";
export default {
  components:{
    Navbar, Footer
  },
}
</script>
<style  lang="scss" scoped>
@import "~/assets/sass/main.scss";
.main-app::v-deep .v-application--wrap{
  min-height: auto;
}
</style>
