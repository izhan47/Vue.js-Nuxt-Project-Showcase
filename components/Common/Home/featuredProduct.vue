<template>
<div class="product-section">
  <div class="custom-container custom-height center-center">
    <v-row justify="center">
      <v-col cols="12" md="6" sm="12">
        <div class="mt-3 mb-3">
          <img class="img-fluid" src="/images/ZiwiHomepage.jpg" alt="logo" />
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="section-align-baseline pa-8">
        <div class=" mt-3 mb-3">
          <h2 class="product-section-subheading">{{ $t('featured_product') }}</h2>
        </div>
        <div class=" mt-3 mb-3">
          <h2 class="product-section-heading">{{ $t('ziwi_premium') }} {{ $t('pet_food') }}</h2>
        </div>
        <div class=" mt-3 mb-3">
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
  //width: 1140px;
  //height: 800px;
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
.product-section-heading{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 45px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
}
.product-section-subheading{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: $purple;
}
.product-section-btn{
  color: $purple;
  background-color: $white;
}
.product-section-btn:hover{
  color: $white;
  background-color: $purple;
}
</style>

