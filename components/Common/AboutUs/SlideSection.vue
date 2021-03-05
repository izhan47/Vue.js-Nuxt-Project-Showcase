<template>
  <div class="grey-section">
    <v-container >
      <div class="slide-section">
        <v-row justify="center">
          <v-col col="12" md="12" sm="12">
            <v-card
              class="mx-auto my-12 card-radius"
            >
              <div class="center-align pa-8">
                <img class="img-fluid card-img-height" src="/images/About/Aly-with-dogs.png"/>
              </div>

<!--              <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">-->
<!--                <div class="swiper-wrapper">-->
<!--                  <div class="swiper-slide" :key="banner" v-for="banner in banners">-->
<!--                    &lt;!&ndash; Render original HTML in server, render Swiper in browser (client) &ndash;&gt;-->
<!--                    <v-img class="h-64 w-64" :src="banner" ></v-img>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--                <div class="swiper-button-next" slot="button-next"></div>-->
<!--              </div>-->

<!--              <swiper class="swiper" :options="Option">-->
<!--                <swiper-slide>Slide 1</swiper-slide>-->
<!--                <swiper-slide>Slide 2</swiper-slide>-->
<!--                <swiper-slide>Slide 3</swiper-slide>-->
<!--                <swiper-slide>Slide 4</swiper-slide>-->
<!--                <div class="swiper-pagination" slot="pagination"></div>-->
<!--              </swiper>-->

              <v-card-title class="card-heading display mb-5">{{ $t('slide_heading') }}</v-card-title>
              <v-card-text  class="center-align ">
                <p class="card-description">{{ $t('slide_description_1') }}</p>
              </v-card-text>
              <v-card-text class="center-align">
                <p class="card-description">{{ $t('slide_description_2') }}</p>
              </v-card-text>
              <v-card-text class="center-align">
                <p class="card-description mb-5">{{ $t('slide_description_3') }}</p>
              </v-card-text>



              <!--              <v-divider class="mx-4"></v-divider>-->
            </v-card>
          </v-col>
        </v-row>

      </div>
    </v-container>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.min.css'
export default {
  name: "slideSection.vue",
  directives: {
    swiper: directive,
  },
  components:{
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      banners: ["/images/Column-Bone.png", "/images/About/Dogs-in-nature.png", "/images/About/Two-Dogs.png"],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
     Option: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    };
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.slide-section{
  max-width: 1140px;
  padding: 100px 0 100px 0;
  color:  $white;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  //Parallax effect on row
}
.slide-card{
  border-radius: 15px;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
}
.image-slider{
  width: 650px;
  height: 350px;
  color:  #332E80;
}
.display{
  display: block;
  text-align: center;
  line-height: 2;
}
.card-heading{
  color:$purple;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 40px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
  //margin: 0 100px 0 100px;


  //@media  (max-width: 425px)  {
  //  margin-right: auto;
  //  margin-left: auto;
  //  position: relative;
  //}

}
.card-description{
  color: $black;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin: 0 100px 0 100px;
  @media  (max-width: 425px)  {
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }
}
.card-img-height{
  max-height:400px;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48 ;
}
</style>
