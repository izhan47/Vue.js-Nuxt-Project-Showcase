<template>
<div class="product-section">
  <div class="custom-container custom-height center-center">
    <v-row justify="center">
      <v-col cols="12" md="6" sm="12">
        <div class="mt-3 mb-3">
          <img class="img-fluid" src="/images/ZiwiHomepage.jpg" alt="logo" />
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="section-align-baseline  pa-8">
        <div class="space">
          <h2 class="product-section-subheading">{{ $t('featured_product') }}</h2>
        </div>
        <div>
          <h2 class="heading">{{ $t('ziwi_premium') }} {{ $t('pet_food') }}</h2>
        </div>
        <div class="">
          <p class="description">{{ $t('featured_product_description') }}</p>
        </div>
        <v-btn
          class="round-btn mt-3"
          outlined
          large
          rounded
        >
          {{ $t('see_product_review') }}
        </v-btn>
      </v-col>
    </v-row>

  </div>
</div>

</template>

<script>
export default {
  name: "featuredProduct.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.product-section{
  background-color: #F6FEFF;
  @media (min-width: 320px)  and (max-width: 600px)  {
    padding: 30px;
  }
}
.product-section-img{
  max-width:100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.product-section-subheading{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: $purple;
}
.heading{
  color: $black;
  margin-bottom: 2.3rem;
}
.description{
  margin-bottom: 1.8rem;
}
.product-section-btn{
  color: $purple;
  background-color: $white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  font-size: 16px;
}
.product-section-btn:hover{
  color: $white;
  background-color: $purple;
}
</style>

