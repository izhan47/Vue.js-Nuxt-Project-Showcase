<template>
<div>
  <v-btn
    class="btn-class"
  >
    Primary Button
  </v-btn>
  <span class="my-class" >
      Footer
  </span>

</div>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.my-class {
  width: 90%;
  height: 2px;
  color: $green; // Here we are using the variable
border-radius: 5px;
}
.btn-class{
  color: $pink;
  background-color: $green;
}
</style>
