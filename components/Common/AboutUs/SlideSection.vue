<template>
  <div class="wave-img">
    <v-container>
      <div class="slide-section">
        <v-row justify="center">
          <v-col col="12" md="12" sm="12">
            <v-card class="mx-auto my-12 card-radius">
              <VueSlickCarousel
                class="custom-padding slick-dots"
                v-bind="settings"
              >
                <div class="" v-for="item in banners" :key="item">
                  <img class="image-slider img-fluid " :src="item" />
                </div>
              </VueSlickCarousel>
              <v-card-title class="card-heading display mb-5 mt-5">{{
                $t("slide_heading")
              }}</v-card-title>
              <v-card-text class="text-center ">
                <p class="card-description">{{ $t("slide_description_1") }}</p>
              </v-card-text>
              <v-card-text class="text-center">
                <p class="card-description">{{ $t("slide_description_2") }}</p>
              </v-card-text>
              <v-card-text class="text-center">
                <p class="card-description mb-5">
                  {{ $t("slide_description_3") }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "slideSection.vue",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      banners: [
        "/images/About/slider-1.jpg",
        "/images/About/slider-2.jpg",
        "/images/About/slider-3.jpg",
        "/images/About/slider-4.jpg",
        "/images/About/slider-5.jpg"
      ],
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
        vertical: false,
        speed: 500,
        horizontal: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.wave-img {
  background-image: url("/images/About/shape.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 3rem;
  position: relative;
  bottom: -5px;
}
.custom-padding {
  padding: 40px 30px 0 30px;
  margin: auto;
  max-width: 800px;
}
.slick-dots {
  @media (max-width: 321px) {
    padding: 12px 0 12px 0;
  }
}
.slide-section {
  max-width: 1140px;
  padding: 100px 0 100px 0;
  color: $white;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media (max-width: 767px) {
    padding: 0;
  }
}
.slide-card {
  border-radius: 15px;
  text-shadow: 0 10px 20px $text-shadow-secondary;
}
.image-slider {
  height: auto;
  color: $purple;
}
.display {
  display: block;
  text-align: center;
  line-height: 2;
}
.card-heading {
  color: $purple;
  font-family: $font-family-primary;
  font-weight: $font-weight-600;
  font-size: $font-size-40;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
}
.card-description {
  color: $black;
  font-family: $font-family-primary;
  font-weight: $font-weight-400;
  font-size: $font-size-16;
  margin: 0 100px 0 100px;
  @media (max-width: 425px) {
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }
}
</style>
