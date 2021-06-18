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
      </div>

      <h2 class="mb-3">Add a review</h2>
      <v-divider></v-divider>
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
        ></v-textarea>
      </div>

      <div class="action text-right">
        <v-btn rounded color="#46259A" dark x-large @click="submitReview">
          {{ name ? "Submit" : "Login" }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "pet-biz-events",
  data: () => ({
    reviews: [],
    reviews_count: 0,
    // add new review
    name: "",
    form: {
      description: "",
      rate: 0
    }
  }),
  methods: {
    async getReviews() {
      this.$store.commit("SHOW_LOADER", true);
      const response = await this.$store.dispatch(
        "getReview",
        this.$route.params.slug
      );

      const {
        reviews_count,
        pet_pro_reviews,
        total_records,
        is_more_review
      } = response.data.data;
      this.reviews_count = reviews_count;
      this.reviews = pet_pro_reviews;

      // console.log({
      //   reviews_count,
      //   pet_pro_reviews,
      //   total_records,
      //   is_more_review
      // });
      this.$store.commit("SHOW_LOADER", false);
    },
    async submitReview() {
      if (!this.$store.state.user.isAuthenticated) {
        this.$store.commit("SET_CURRENT_PATH", this.$route.path);
        return this.$router.push("/login");
      } else {
        if (!this.form.description) {
          this.$store.commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "error",
            message: "Description cannot be empty."
          });

          return;
        }

        let data = {
          slug: this.$route.params.slug,
          form: this.form
        };

        try {
          this.$store.commit("SHOW_LOADER", true);
          let response = await this.$store.dispatch("review", data);

          this.$store.commit("SHOW_LOADER", false);
          this.$store.commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: response.data.message
          });
          this.form.rate = 0;
          this.form.description = "";
          this.getReviews();
        } catch (error) {
          this.$store.commit("SHOW_LOADER", false);
          console.log(error);
        }
      }
    }
  },
  created() {
    this.getReviews();
    const { user } = this.$store.state.user;
    if (user) {
      this.name = user.name;
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
