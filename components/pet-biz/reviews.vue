<template>
  <v-card>
    <v-card-text>
      <div class="reviews-section">
        <div class="has-reviews" v-if="reviews.length">
          <div class="review-item" v-for="review in reviews" :key="review.id">
            <v-row>
              <v-col cols="1">
                <v-avatar size="40px">
                  <img
                    :src="
                      review.user.profile_image_thumb_full_path ||
                        '/images/placeholder.png'
                    "
                    alt="John"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="11">
                <div class="d-flex justify-content-between">
                  <div class="rating">
                    <v-rating
                      background-color="#1BC0C0"
                      color="#1BC0C0"
                      dense
                      readonly
                      size="20"
                      :value="review.rate"
                    ></v-rating>
                    <span class="rate ml-3"> {{ review.rate }} </span>
                  </div>
                  <div class="date">{{ review.formated_created_at }}</div>
                </div>

                <p class="description">{{ review.description }}</p>

                <p class="name">{{ review.name }}</p>
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="no-reviews" v-else>
          <h1 class="text-center mt-10">Be the first person to add a review</h1>
        </div>

        <!-- <v-btn
          class="mb-10 mt-10 w-100"
          color="primary"
          tile
          @click="loadMoreReviews"
        >
          {{ $t("see_more_reviews") }}
        </v-btn> -->
      </div>

      <h2 class="mb-3">Add a review</h2>
      <v-divider></v-divider>
      <v-form @submit.prevent="submitReview" ref="form">
        <div class="add-reviews">
          <v-row>
            <v-col cols="4">
              <v-text-field
                label="Name"
                outlined
                v-model="name"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-rating
                background-color="#1BC0C0"
                color="#1BC0C0"
                v-model="form.rate"
                half-increments
                hover
                large
                required
                size="20"
              ></v-rating>
            </v-col>
          </v-row>

          <v-textarea
            name="input-7-1"
            outlined
            label="Review"
            auto-grow
            v-model="form.description"
            :rules="rules.description"
          ></v-textarea>
        </div>

        <div class="action text-right">
          <v-btn rounded color="#46259A" dark x-large @click="submitReview">
            {{ name ? "Submit" : "Login" }}
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const petproModule = createNamespacedHelpers("petpro");
export default {
  name: "pet-biz-events",
  data: () => ({
    reviews: [],
    reviews_count: 0,
    name: "",
    form: {
      description: "",
      rate: 0
    },
    rules: {
      description: [
        val => (val || "").length > 0 || "This description field is required"
      ]
    }
  }),
  computed: {
    ...petproModule.mapState(["PET_PRO_REVIEW"])
  },
  methods: {
    ...petproModule.mapActions([
      "POST_PET_PRO_REVIEW",
      "POST_GET_REVIEWS",
      "POST_GET_MORE_REVIEWS"
    ]),

    async getReviews() {
      await this.POST_GET_REVIEWS(this.$route.params.slug);
      const {
        reviews_count,
        pet_pro_reviews,
        total_records,
        is_more_review
      } = this.PET_PRO_REVIEW;
      this.reviews_count = reviews_count;
      this.reviews = pet_pro_reviews;
    },
    async submitReview() {
      if (!this.$auth.loggedIn) {
        this.$store.commit("SET_CURRENT_PATH", this.$route.path);
        return this.$router.push("/login");
      } else {
        let data = {
          slug: this.$route.params.slug,
          form: this.form
        };
        if (this.$refs.form.validate()) {
          await this.POST_PET_PRO_REVIEW(data);
          this.form.rate = 0;
          this.form.description = "";
          this.getReviews();
        }
      }
    }
    // async loadMoreReviews() {
    //   let data = {
    //     slug: this.$route.params.slug,
    //     id: this.reviews[this.reviews.length - 1].id
    //   };
    //   await this.POST_GET_MORE_REVIEWS(data);
    //   const {
    //     reviews_count,
    //     pet_pro_reviews,
    //     total_records,
    //     is_more_review
    //   } = this.PET_PRO_REVIEW;
    //   this.reviews_count = reviews_count;
    //   this.reviews = pet_pro_reviews;
    // }
  },
  created() {
    this.getReviews();
    if (this.$auth.loggedIn) {
      this.name = this.$auth.user.name;
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.reviews-section {
  min-height: 300px;
  max-height: 600px;

  .has-reviews {
    .review-item {
      background: #f7f7f7;
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 1rem;

      .justify-content-between {
        justify-content: space-between;
        align-items: center;
      }

      .rating {
        display: flex;
        align-items: center;
      }

      span.rate {
        font-size: 14px;
        color: #333333;
      }

      p.description {
        font-size: 14px;
        line-height: 24px;
        color: rgba(0, 11, 66, 0.5);
        margin: 1rem 0;
      }

      p.name {
        font-size: 16px;
        line-height: 32px;
        color: #000b42;
      }
    }
  }
}

.add-reviews {
  padding-top: 2rem;
}
</style>
