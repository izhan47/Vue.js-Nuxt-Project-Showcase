<template>
  <div>
    <div class="cover-main">
      <div
        class="cover-image"
        :style="{
          'background-image': `url(${
            coverImage ? coverImage : '/images/Pink-Paw.png'
          })`
        }"
      ></div>
    </div>

    <div class="images-gallery">
      <client-only>
        <swiper class="swiper " ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(img, index) in images" :key="index">
            <img
              @click="$emit('preview-image', img)"
              :src="img"
              class="slider-image"
              alt="slider-image"
            />
          </swiper-slide>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "image-gallery",
  props: {
    coverImage: {
      type: String
    },
    images: {
      type: Array,
      default: []
    }
  },
  components: {
    coverImage() {}
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
    cursor: pointer;
  }
}

// .place-holder {
//   background-image: url("/images/Pink-Paw.png");
//   height: 269px;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   border-radius: 19px 19px 0 0;
// }
</style>
