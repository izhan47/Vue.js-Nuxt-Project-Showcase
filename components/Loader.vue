<template>
  <div class="loader">
    <v-progress-circular
      :size="90"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>

</template>

<script>
export default {
name: "Loader.vue",
  computed:{
    loader(){
      return this.$store.state.loader
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.v-progress-circular {
  margin: 1rem;
}
.loader {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 111;
  background-color: rgba(0,0,0,0.2);
}
</style>
