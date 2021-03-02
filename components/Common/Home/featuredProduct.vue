<template>
<div class="product-section">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6" sm="12">
        <div class="mt-3 mb-3">
          <img class="product-section-img"
                  src="/images/ZiwiHomepage.jpg" alt="logo" />
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <div class="product-section-subheading mt-3 mb-3">
          <strong class="menu-item">{{ $t('featured_product') }}</strong>

        </div>
        <div class="product-section-heading mt-3 mb-3">
          <h2>{{ $t('ziwi_premium') }} {{ $t('pet_food') }}</h2>

        </div>
        <div class="description mt-3 mb-3">
          <p>{{ $t('featured_product_description') }}</p>
        </div>
        <v-btn
          class="product-section-btn mt-3"
          outlined
          rounded
        >
          {{ $t('see_product_review') }}
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
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
  font-weight: 300;
  font-size: 20px;
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

