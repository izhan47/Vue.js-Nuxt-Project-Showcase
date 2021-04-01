<template>
  <v-app class="main-app">
    <Navbar />
    <v-main >
      <snackbar v-if="notify.snackbar"></snackbar>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "~/components/Navigation/Navbar";
import Footer from "~/components/Navigation/Footer";
import Snackbar from "@/components/Snackbar";
export default {
  components:{
    Navbar, Footer,Snackbar
  },
  computed:{
    notify(){
      // console.log('not',this.$store.state.alert)
      return this.$store.state.alert
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
