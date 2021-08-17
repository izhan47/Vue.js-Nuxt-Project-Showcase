<template>
  <div>
    <div class="watch-learn-detail-section" v-if="WAL">
      <div class="custom-container custom-margin">
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <div class="heading mt-2">
              <h1>{{ WAL.title }}</h1>
            </div>
            <div v-html="WAL.description"></div>
          </v-col>
        </v-row>
      </div>

      <v-container>
        <div class="custom-container custom-card mt-8">
          <v-row>
            <v-col cols="12" class="p-0">
              <div>
                <v-tabs v-model="tab" color="deep-purple accent-4">
                  <v-tabs-slider></v-tabs-slider>

                  <v-tab href="#tab-1">
                    Deals Offered
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item value="tab-1">
                    <Deals :deals="WAL.deals" @claim-deal="claimDeal" />
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>

      <div class="custom-container  space" v-if="reviewData.length">
        <v-row>
          <v-col
            cols="12"
            md="4"
            sm="12"
            v-for="(data, i) in reviewData.slice(0, 3)"
            :key="i"
            class="mt-8"
          >
            <product-review-card :item="data"></product-review-card>
          </v-col>
        </v-row>
      </div>
      <div v-else class="text-center">
        <img
          class="img-height img-fluid"
          src="/images/Auth/Column-3-Dog.png"
          alt="logo"
        />
        <h2 class="heading">{{ $t("nothing_here") }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const bestpetproductsModule = createNamespacedHelpers("bestpetproducts");
const watchandlearnModule = createNamespacedHelpers("watchandlearn");

export default {
  components: {
    ProductReviewCard: () => import("~/components/ProductReviewCard"),
    Deals: () => import("~/components/pet-biz/pet-pro-deals")
  },
  data() {
    return {
      form: {
        comment: "",
        parent_comment_id: 0,
        slug: ""
      },
      tab: null
    };
  },
  computed: {
    // ...watchandlearnModule.mapState(["WAL"]),
    // ...bestpetproductsModule.mapState(["PRODUCT_REVIEW_LIST"]),
    ...mapState({
      watchandlearnModule: state => state.watchandlearn.WAL,
      bestpetproductsModule: state => state.bestpetproducts.PRODUCT_REVIEW_LIST
    }),
    URL() {
      return this.$route.params.slug;
    },
    reviewData() {
      return this.PRODUCT_REVIEW_LIST;
    }
  },
  async created() {
    await this.POST_WAL_DETAIL(this.URL);
  },
  methods: {
    ...watchandlearnModule.mapActions(["POST_WAL_DETAIL"]),
    ...bestpetproductsModule.mapActions(["POST_CLAIM_PRODUCT_REVIEW"]),

    async claimDeal(deal) {
      if (!this.$auth.loggedIn) {
        this.$store.commit("SET_CURRENT_PATH", this.$route.path);
        return this.$router.push("/login");
      } else {
        try {
          let data = {
            slug: this.$route.params.slug,
            pet_deal_id: deal.id
          };

          await this.POST_CLAIM_PRODUCT_REVIEW(data);
          await this.POST_WAL_DETAIL(this.URL);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.custom-card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 19px;
  background: #ffffff;
  overflow: hidden;
}
.custom-container {
  max-width: 940px;
}
.bg-img-watch-detail {
  background-color: transparent;
  background-image: linear-gradient(180deg, $black 0%, rgba(0, 0, 0, 0) 100%);
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}
.align-center {
  text-align: center;
}
.img-height {
  max-height: $img-max-height-500;
}
.custom-margin {
  margin-top: 3rem;
}
.watch-card {
  img {
    width: 85px;
    height: 85px;
    border-radius: 100px;
  }
  h2 {
    color: $purple;
    font-family: $font-family-primary;
    font-weight: $font-weight-600;
    font-size: $font-size-18;
    text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
    text-transform: $text-transform-capitalize;
    margin-bottom: 15px;
  }
  p {
    color: $black;
    font-family: $font-family-primary;
    font-weight: $font-weight-600;
    font-size: $font-size-13;
    line-height: 1.7em;
    max-width: 250px;
  }
}
.tag {
  span {
    color: $green;
    font-size: $font-size-15;
    font-family: $font-family-primary;
    font-weight: $font-weight-600;
  }
}
.heading {
  margin-bottom: 20px;
  h1 {
    font-size: $font-size-40;
    font-weight: $font-weight-600;
    text-shadow: -3px 2px 5px rgb(0 0 0 / 9%);
  }
}
.social-btn::v-deep .v-btn__content {
  font-family: $font-family-primary;
  font-size: $font-size-10;
  font-weight: $font-weight-600;
  text-transform: $text-transform-uppercase;
}
.description {
  line-height: 2em;
  font-weight: $font-weight-500;
}
.img-heading {
  color: $purple;
  font-family: $font-family-primary;
  font-weight: $font-weight-300;
  font-size: $font-size-30;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
}
.heading-description {
  color: $purple;
  font-size: 1.5625rem;
  font-weight: $font-weight-500;
  text-shadow: -3px 2px 5px rgb(0 0 0 / 9%);
  line-height: 1.4;
}
.green-description {
  color: $green;
}

.comment-section {
  padding-top: 5rem;
}
.comment-section-heading {
  color: $blue;
  font-family: $font-family-primary;
  font-size: $font-size-45;
  font-weight: $font-weight-600;
  text-transform: $text-transform-capitalize;
}

.submit-btn::v-deep.v-btn {
  min-width: 140px;
  height: 52px;
  padding: 0 75px 0 75px;
  text-transform: $text-transform-capitalize;
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-600;
  letter-spacing: unset;
  background-color: $purple;
  color: $white;
}
.round-btn {
  border-style: solid;
  border-width: 2px 2px 2px 2px;
}
/* Dotted red border */
hr.dot-line {
  border-top: 1px dotted $black;
}

.card-section-title {
  font-family: $font-family-primary;
  font-size: $font-size-50;
  font-weight: $font-weight-600;
  text-shadow: -3px 2px 5px $text-shadow-primary;
  text-transform: $text-transform-capitalize;
  color: $purple;
  margin-top: 6rem;
}
.watch-learn-detail-section {
  .card-radius {
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
  }
}
.card-custom-height {
  min-height: 250px;
}
.card-heading {
  h2 {
    font-family: $font-family-primary;
    font-size: $font-size-24;
    font-weight: $font-weight-bold;
  }
}
.card-description {
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-500;
}
.card-img {
  min-height: 285px;
}

.card-title-padding::v-deep.v-card__title {
  padding: 16px 0 0 16px;
}
.card-padding {
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
</style>
