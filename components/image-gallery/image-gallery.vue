<template>
  <div>
    <div class="cover-main">
      <div
        class="cover-image"
        :style="{ 'background-image': `url(${coverImage})` }"
      ></div>
    </div>

    <div class="images-gallery">
      <client-only>
        <swiper class="swiper " ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(img, index) in images" :key="index">
            <img :src="img" class="slider-image" alt="slider-image" />
          </swiper-slide>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
export default {
  name: "image-gallery",
  props: {
    coverImage: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      default: []
    }
  },
  components: {
    // Swiper,
    // SwiperSlide
  },
  computed: {
    swiperOptions() {
      return {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          500: {
            slidesPerView: 3,
            spaceBetween: 20
          }

          // 700: {
          //   slidesPerView: 3,
          //   spaceBetween: 20
          // }
        }
      };
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.cover-main {
  padding: 0 2rem;
}
.cover-image {
  min-height: 500px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  margin-bottom: 1.5rem;
  border-radius: 20px;
}

.images-gallery {
  position: relative;
  .swiper {
    padding: 0 2rem;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 28px;
    color: #000b42;
  }

  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    left: 0;
  }

  .slider-image {
    max-height: 100px;
    max-width: 100%;
    border-radius: 20px;
    display: block;
    margin: auto;
  }
}
</style>
