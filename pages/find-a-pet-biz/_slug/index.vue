<template>
  <div>
    <!-- <template v-if="error">
      Has Error
      <pre>{{ error }}</pre>
    </template> -->

    <template v-if="PET_PRO.per_pro">
      <div class="mt-10 custom-container">
        <v-row>
          <v-col md="6" cols="12">
            <ImageGallery
              :coverImage="gallery.coverImage"
              :images="gallery.images"
              @preview-image="openPopup = true"
            />
          </v-col>

          <v-col md="6" cols="12">
            <p class="categories">
              <span v-for="(cat, index) in categories" :key="index">
                {{ cat }}
                {{ index !== categories.length - 1 ? ", " : "" }}
              </span>
            </p>

            <div class="store-detail">
              <h1 class="store-name">
                {{ PET_PRO.per_pro.store_name }}
              </h1>

              <div class="like-btn">
                <v-btn
                  text
                  icon
                  :color="PET_PRO.is_liked ? 'red lighten-1' : 'grey lighten-1'"
                  @click="toggleLike"
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </div>
            </div>

            <div class="product-rating">
              <p>Rating</p>
              <v-rating
                :value="PET_PRO.per_pro.avg_rating"
                background-color="#FEC156"
                color="#FEC156"
                dense
                readonly
                size="30"
              ></v-rating>
              <span class="product-rating-child"
                >{{ PET_PRO.per_pro.avg_rating }} / 5</span
              >
            </div>

            <p class="description">
              {{ PET_PRO.per_pro.description }}
            </p>

            <p class="donation_link" v-if="PET_PRO.per_pro.website_url">
              <a :href="PET_PRO.per_pro.website_url" target="_blank"
                >Visit Website</a
              >
            </p>

            <p class="donation_link" v-if="PET_PRO.per_pro.donation_link">
              <a :href="PET_PRO.per_pro.website_url" target="_blank">Donate</a>
            </p>

            <div class="service mt-5">
              <div class="title">
                <v-icon color="#46259A">mdi-check</v-icon>
                <p class="bold">Services</p>
              </div>

              <v-row>
                <v-col col="12" sm="6">
                  <ul class="services">
                    <li
                      v-for="service in services_offered.first"
                      :key="service"
                    >
                      {{ service }}
                    </li>
                  </ul>
                </v-col>

                <v-col
                  col="12"
                  sm="6"
                  v-if="
                    services_offered.another && services_offered.another.length
                  "
                >
                  <ul class="services">
                    <li
                      v-for="service in services_offered.another"
                      :key="service"
                    >
                      {{ service }}
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="8" cols="12">
            <div class="custom-card left-side">
              <v-tabs v-model="tab" color="deep-purple accent-4" centered>
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#tab-1">
                  Deals Offered
                </v-tab>

                <v-tab href="#tab-2">
                  Events
                </v-tab>

                <v-tab href="#tab-3">
                  Reviews
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item value="tab-1">
                  <Deals
                    :deals="PET_PRO.per_pro.deals"
                    @claim-deal="claimDeal"
                  />
                </v-tab-item>

                <v-tab-item value="tab-2">
                  <Events :events="PET_PRO.per_pro.events" />
                </v-tab-item>

                <v-tab-item value="tab-3">
                  <Reviews :reviews="[]" />
                </v-tab-item>
              </v-tabs-items>
            </div>
          </v-col>
          <template v-if="address || PET_PRO.per_pro.phone_number || hours">
            <v-col md="4" cols="12">
              <div class="custom-card">
                <div class="g-map">
                  <GmapMap
                    :center="{
                      lat: Number(PET_PRO.per_pro.latitude),
                      lng: Number(PET_PRO.per_pro.longitude)
                    }"
                    :zoom="7"
                    map-type-id="terrain"
                    class="map-location"
                  >
                    <GmapMarker
                      :key="index"
                      v-for="(m, index) in [
                        {
                          lat: Number(PET_PRO.per_pro.latitude),
                          lng: Number(PET_PRO.per_pro.longitude)
                        }
                      ]"
                      :position="m"
                      :clickable="true"
                      :draggable="true"
                      @click="center = m"
                    />
                  </GmapMap>
                </div>

                <div class="inner">
                  <div class="address">
                    <template v-if="address">
                      <p class="label">Address</p>
                      <a
                        :href="'http://maps.google.com/?q=' + address"
                        class="open-phone"
                        target="_blank"
                        ><div class="custom-card p-2 light">
                          <p class="light">{{ address }}</p>
                          <v-icon color="#1e1d1f4d">mdi-home</v-icon>
                        </div></a
                      >
                    </template>

                    <template v-if="PET_PRO.per_pro.phone_number">
                      <p class="label">Phone</p>
                      <a
                        :href="'tel:' + PET_PRO.per_pro.phone_number"
                        class="open-phone"
                      >
                        <div class="custom-card p-2 light">
                          <p class="light">
                            {{ PET_PRO.per_pro.phone_number }}
                          </p>
                          <v-icon color="#1e1d1f4d">mdi-phone</v-icon>
                        </div></a
                      >
                    </template>
                  </div>

                  <template v-if="hours">
                    <h2 class="light mb-3">Hours Of Operation</h2>

                    <ul class="timetable">
                      <li v-for="time in formatedTimetable" :key="time.day">
                        <p class="label">{{ time.day }}</p>
                        <p class="time">{{ time.open }} - {{ time.close }}</p>
                      </li>
                    </ul>
                  </template>
                </div>
              </div>
            </v-col>
          </template>
        </v-row>
      </div>
    </template>

    <div class="preview-container" :class="openPopup ? 'active' : ''">
      <div class="close-btn" @click="openPopup = false">
        <v-icon color="#6F787E">mdi-close</v-icon>
      </div>
      <div class="container relative">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(imgSrc, i) in gallery.images" :key="i">
            <div class="slider-container">
              <img :src="imgSrc" class="img-preview" alt="" />
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ImageGallery: () => import("~/components/image-gallery/image-gallery"),
    Deals: () => import("~/components/pet-biz/pet-pro-deals"),
    Events: () => import("~/components/pet-biz/pet-biz-events"),
    Reviews: () => import("~/components/pet-biz/reviews")
  },
  data: () => ({
    tab: null,
    openPopup: false,
    hours: false
  }),
  created() {
    console.log(this.PET_PRO);
  },
  async asyncData({ store, params }) {
    await store.dispatch("POST_PET_PRO_DETAIL", params.slug);
  },
  computed: {
    ...mapState(["PET_PRO"]),

    swiperOption() {
      return {
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      };
    },
    gallery() {
      let { cover_image, images } = this.PET_PRO.per_pro;
      return {
        coverImage: cover_image && cover_image.image_full_path,
        images:
          images.length > 0 ? images.map(img => img.image_thumb_full_path) : []
      };
    },
    services_offered() {
      const { services_offered } = this.PET_PRO.per_pro;
      let totalLength = services_offered.length;
      let arr1 = Math.ceil(totalLength / 2);
      return {
        first: services_offered.splice(0, arr1).map(service => service.service),
        another: services_offered.map(service => service.service)
      };
    },
    categories() {
      const { categories } = this.PET_PRO.per_pro;
      return categories.map(cat => cat.name);
    },
    address() {
      const { address_line_1, address_line_2 } = this.PET_PRO.per_pro;
      if (address_line_1) return address_line_1;
      else if (address_line_2) return address_line_2;
      else return false;
    },
    formatedTimetable() {
      const { timetable, formatted_timetable } = this.PET_PRO.pet_pro;
      return timetable.map(time => {
        const open = formatted_timetable[`${time.day}_open`];
        const close = formatted_timetable[`${time.day}_close`];
        if (!open || !close) {
          this.hours = false;
        }
        return {
          day: time.day.substr(0, 3),
          open: open || "N/A",
          close: close || "N/A"
        };
      });
    }
  },
  methods: {
    ...mapActions(["POST_PET_PRO_DETAIL", "POST_CLAIM_DEAL"]),

    async toggleLike() {
      if (!this.$store.state.USER.isAuthenticated) {
        this.$store.commit("SET_CURRENT_PATH", this.$route.path);
        return this.$router.push("/login");
      } else {
        try {
          this.$store.commit("SHOW_LOADER", true);
          const response = await this.$store.dispatch(
            "like",
            this.$route.params.slug
          );
          this.$store.commit("SHOW_LOADER", false);
          this.PET_PRO.is_liked = !this.PET_PRO.is_liked;
          this.$store.commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: response.data.message
          });
        } catch (error) {
          this.$store.commit("SHOW_LOADER", false);
          console.log(error);
        }
      }
    },
    async claimDeal(deal) {
      if (!this.$store.state.USER.isAuthenticated) {
        this.$store.commit("SET_CURRENT_PATH", this.$route.path);
        return this.$router.push("/login");
      } else {
        try {
          let data = {
            slug: this.$route.params.slug,
            pet_deal_id: deal.id
          };
          await this.POST_CLAIM_DEAL(data);
          await this.POST_PET_PRO_DETAIL(this.PET_PRO.per_pro.slug);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.store-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .store-name {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #000b42;
  }
}

.product-rating {
  display: flex;
  align-items: center;
  margin: 1rem 0;

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 11, 66, 0.5);
    margin-right: 10px;
    margin-bottom: 0;
  }
  &-child {
    margin-left: 1rem;

    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 11, 66, 0.8);
  }
}

p.description {
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
}

p.donation_link {
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 10px;
  a {
    text-decoration: none;
  }
}

.service {
  background: #f7f7f7;
  border-radius: 12px;
  padding: 1.5rem;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    p {
      margin-left: 10px;
      font-size: 18px;
      line-height: 27px;
      color: #000b42;
      margin-bottom: 0;
    }

    ul {
      li {
        font-size: 16px;
        line-height: 28px;

        color: rgba(0, 11, 66, 0.8);
      }
    }
  }
}

.categories {
  span {
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 11, 66, 0.5);
  }
}

// additiona info

.custom-card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 19px;
  background: #ffffff;
  overflow: hidden;

  .address {
    p.label {
      margin-bottom: 0;
    }
    .custom-card.light {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.7rem 1rem;
      margin-bottom: 1rem;
      p {
        margin-bottom: 0;
        font-size: 16px;
        line-height: 32px;
        color: #1e1d1f4d;
      }
    }
  }

  .inner {
    padding: 1.5rem;
  }
}

h2.light {
  font-size: 16px;
  line-height: 24px;
  color: rgba(30, 29, 31, 0.7);
}

// timetable
.timetable {
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p.label {
      text-transform: capitalize;
      font-size: 16px;
      line-height: 28px;
      color: #333333;
    }

    p.time {
      font-size: 16px;
      line-height: 28px;
      color: rgba(51, 51, 51, 0.501557);
    }
  }
}

.map-location {
  width: 100%;
  height: 300px;
}

.left-side {
  min-height: 770px;
}

.preview-container {
  .close-btn {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    cursor: pointer;
    background: #eaf1fa;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  opacity: 0;
  backface-visibility: hidden;
  visibility: hidden;
  display: grid;
  place-items: center;
  background-color: #000b425c;
  transform: scale(0);
  transition: all 0.3s ease-in-out;
  .img-preview {
    max-width: 90%;
    max-height: 60vh;
    height: auto;
    border-radius: 20px;
    transform: scale(0);
    transition: all 0.2s linear;
  }

  &.active {
    z-index: 111111111111;
    opacity: 1;
    backface-visibility: unset;
    visibility: visible;
    transform: scale(1);
    .img-preview {
      transform: scale(1);
    }
  }
}

.open-phone {
  text-decoration: none;
}

.container {
  @media (max-width: 576px) {
    max-width: 350px;
  }

  @media (max-width: 355px) {
    max-width: 300px;
  }
}
.slider-container {
  max-width: 800px;
  margin: auto;
  text-align: center;

  @media (max-width: 800px) {
    max-width: 500px;
  }

  .swiper-pagination {
    bottom: -10px !important;
  }
}
</style>
