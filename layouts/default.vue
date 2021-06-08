<template>
  <v-app class="main-app">
    <CustomNavbar />
    <v-main>
      <snackbar v-if="notify.snackbar"></snackbar>
      <loader v-if="loader"></loader>
      <Nuxt />
    </v-main>
    <CustomFooter />
  </v-app>
</template>
<script>
import CustomNavbar from "~/components/Navigation/Navbar";
import CustomFooter from "~/components/Navigation/Footer";
import Snackbar from "@/components/Snackbar";
import Loader from "@/components/Loader";
export default {
  components: {
    CustomNavbar,
    CustomFooter,
    Snackbar,
    Loader
  },
  computed: {
    notify() {
      return this.$store.state.alert;
    },
    loader() {
      return this.$store.state.loader;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.main-app::v-deep .v-application--wrap {
  min-height: auto;
}
</style>
