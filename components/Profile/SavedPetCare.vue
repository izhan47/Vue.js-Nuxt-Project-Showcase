<template>
  <div class="profile-title">
    <h2>{{$t('saved_pet_care_advice')}}</h2>
  </div>
</template>

<script>
export default {
  name: "SavedPetCare.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.profile-title{
  padding-top: 25px;
  padding-left: 2rem;
  h2{
    font-family:$font-family-secondary;
    font-style: normal;
    font-weight: $font-weight-500;
    font-size: $font-size-14;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: $black_currant;
  }
}
</style>
