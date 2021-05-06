<template>
  <v-app class="main-app">
    <Navbar />
    <v-main >
      <snackbar v-if="notify.snackbar"></snackbar>
      <loader v-if="loader"></loader>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "~/components/Navigation/Navbar";
import Footer from "~/components/Navigation/Footer";
import Snackbar from "@/components/Snackbar";
import Loader from "@/components/Loader";
export default {
  components:{
    Navbar, Footer,Snackbar,Loader
  },
  computed:{
    notify(){
      return this.$store.state.alert
    },
    loader(){
      return this.$store.state.loader
    }
  }
}
</script>
<style  lang="scss" scoped>
@import "~/assets/sass/main.scss";
.main-app::v-deep .v-application--wrap{
  min-height: auto;
}
</style>
