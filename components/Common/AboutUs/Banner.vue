<template>
  <div class="custom-container py-10  " >
    <div class="section-align-center">
    <div class="center-align">
    <img class="img-height img-fluid" src="/images/Pink-Paw.png" alt="logo">
    </div>
    <div class="">
      <h2  class="about-banner-heading center-align line-height">{{ $t('from') }} {{ $t('pet_people') }}{{ $t('coma') }} {{ $t('with_love') }}</h2>
    </div>
    <div class="banner-description mt-5 mb-3">
      <p>
        {{ $t('about_banner_description') }}
      </p>
    </div>

    </div>
    <div class="mt-5 mb-3">
      <v-divider></v-divider>

    </div>


  </div>
</template>

<script>
export default {
name: "aboutBanner.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.bottom-divider{
  color:$white;
  width: 100px;
  height: 95px;
}
.divider{
  color:  #ADADAD;
  width: 100%;
  padding-bottom: 100px;
  //     Weight 1px
}
.banner-description{
  max-width: 600px;
  margin: auto;
  text-align: center;
  width: 100%;

  p{
    color: $grey;
    font-weight: 400;
    //font-size: 16px;
  }
}
</style>
