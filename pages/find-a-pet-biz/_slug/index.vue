<template>
  <div>
    <template v-if="error">
      Has Error
      <pre>{{ error }}</pre>
    </template>

    <template v-if="pet_pro">
      <div class="mt-10 custom-container">
        <v-row>
          <v-col md="6" cols="12">
            <ImageGallery
              :coverImage="gallery.coverImage"
              :images="gallery.images"
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
                {{ pet_pro.store_name }}
              </h1>

              <div class="like-btn">
                <v-btn
                  text
                  icon
                  :color="is_liked ? 'red lighten-1' : 'grey lighten-1'"
                  @click="toggleLike"
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </div>
            </div>

            <div class="product-rating">
              <p>Rating</p>
              <v-rating
                :value="pet_pro.avg_rating"
                background-color="#FEC156"
                color="#FEC156"
                dense
                readonly
                size="30"
              ></v-rating>
              <span class="product-rating-child"
                >{{ pet_pro.avg_rating }} / 5</span
              >
            </div>

            <!-- description -->
            <p class="description">
              {{ pet_pro.description }}
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

        <!-- additional details -->

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
                  <Deals :deals="pet_pro.deals" @claim-deal="claimDeal" />
                </v-tab-item>

                <v-tab-item value="tab-2">
                  <Events :events="pet_pro.events" />
                </v-tab-item>

                <v-tab-item value="tab-3">
                  <Reviews :reviews="[]" />
                </v-tab-item>
              </v-tabs-items>
            </div>
          </v-col>
          <v-col md="4" cols="12">
            <div class="custom-card">
              <!-- {{ pet_pro.longitude }}
              {{ pet_pro.latitude }} -->
              <div class="g-map">
                <GmapMap
                  :center="{
                    lat: 10,
                    lng: 10
                  }"
                  :zoom="7"
                  map-type-id="terrain"
                  class="map-location"
                >
                  <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
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
                    <div class="custom-card p-2 light">
                      <p class="light">{{ address }}</p>
                      <v-icon color="#1e1d1f4d">mdi-home</v-icon>
                    </div>
                  </template>

                  <template v-if="pet_pro.phone_number">
                    <p class="label">Phone</p>
                    <div class="custom-card p-2 light">
                      <p class="light">{{ pet_pro.phone_number }}</p>
                      <v-icon color="#1e1d1f4d">mdi-phone</v-icon>
                    </div>
                  </template>
                </div>

                <!-- hours of operation -->
                <h2 class="light mb-3">Hours Of Operation</h2>

                <ul class="timetable">
                  <li v-for="time in formatedTimetable" :key="time.day">
                    <p class="label">{{ time.day }}</p>
                    <p class="time">{{ time.open }} - {{ time.close }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- <pre>
        {{ pet_pro }}
    </pre
        > -->
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "pet-biz-detail",
  components: {
    ImageGallery: () => import("~/components/image-gallery/image-gallery"),
    Deals: () => import("~/components/pet-biz/pet-pro-deals"),
    Events: () => import("~/components/pet-biz/pet-biz-events"),
    Reviews: () => import("~/components/pet-biz/reviews")
  },
  data: () => ({
    markers: [
      { lat: -37.8265057, lng: 144.7464312 },
      { lat: -60.79249218273802, lng: 98.52131582979746 },
      { lat: -57.3633598628284, lng: -149.33024667020254 }
    ],
    tab: null
  }),
  async asyncData({ store, params }) {
    try {
      store.commit("SHOW_LOADER", true);
      const resp = await store.dispatch("singlePetDetail", params.slug);
      const { is_liked, per_pro } = resp.data.data;
      // console.log({ is_liked, pet_pro: per_pro });
      store.commit("SHOW_LOADER", false);
      return { is_liked, pet_pro: per_pro, error: false };
    } catch (error) {
      return { error: error, is_liked: false, pet_pro: false, reviews: [] };
    }
  },
  computed: {
    gallery() {
      let { cover_image, images } = this.pet_pro;
      return {
        coverImage: cover_image.image_full_path,
        images: images.map(img => img.image_thumb_full_path)
      };
    },
    services_offered() {
      const { services_offered } = this.pet_pro;
      let totalLength = services_offered.length;
      let arr1 = Math.ceil(totalLength / 2);
      return {
        first: services_offered.splice(0, arr1).map(service => service.service),
        another: services_offered.map(service => service.service)
      };
    },
    categories() {
      const { categories } = this.pet_pro;
      return categories.map(cat => cat.name);
    },
    address() {
      const { address_line_1, address_line_2 } = this.pet_pro;
      if (address_line_1) return address_line_1;
      else if (address_line_2) return address_line_2;
      else return false;
    },
    formatedTimetable() {
      const { timetable, formatted_timetable } = this.pet_pro;
      return timetable.map(time => {
        const open = formatted_timetable[`${time.day}_open`];
        const close = formatted_timetable[`${time.day}_close`];
        return {
          day: time.day.substr(0, 3),
          open: open || "N/A",
          close: close || "N/A"
        };
      });
    }
  },
  methods: {
    async toggleLike() {
      if (!this.$store.state.user.isAuthenticated) {
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
          this.is_liked = !this.is_liked;
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
      if (!this.$store.state.user.isAuthenticated) {
        this.$store.commit("SET_CURRENT_PATH", this.$route.path);
        return this.$router.push("/login");
      } else {
        try {
          let data = {
            slug: this.$route.params.slug,
            pet_deal_id: deal.id
          };

          this.$store.commit("SHOW_LOADER", true);
          const response = await this.$store.dispatch("claim", data);
          const index = this.pet_pro.deals.findIndex(d => d.id === deal.id);
          if (index !== -1) this.pet_pro.deals[index].is_claimed = 1;
          this.$store.commit("SHOW_LOADER", false);
          this.$store.commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: response.data.message
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  },

  created() {}
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

  //   .like-btn {
  //   }
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
  color: rgba(0, 11, 66, 0.8);
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
</style>
