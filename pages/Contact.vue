<template>
  <div class="bg-review-img">
  </div>
</template>

<script>
export default {
name: "Contact.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.bg-review-img{
  background-image: url("/images/Great-Dane-Background.png");
  background-position: 210px -50px;
  background-size: 75% auto;
  background-repeat: no-repeat;
@media (max-width: 1440px) {
  background-position:237px -37px;
}
@media (max-width: 1024px) {
  background-position:280px -30px;
}
@media (max-width: 768px) {
  background-image: none !important;
}
}
</style>
