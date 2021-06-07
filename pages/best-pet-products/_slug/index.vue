<template>
  <div class="watch-learn-detail-section" v-if="categoryData">
    <div class="custom-container custom-margin">
      <v-row>
        <v-col cols="12" md="12" sm="12">
          <div class="heading mt-2">
            <h1>{{ categoryData.title }}</h1>
          </div>
          <div v-html="categoryData.description"></div>
          <!--          <hr class="dot-line">-->

          <!--          <div class="comment-section">-->
          <!--            <h2 class="comment-section-heading text-center space">{{ $t('comments')}}</h2>-->
          <!--            <h2 class="comment-section-heading text-center mb-5">{{ $t('leave_a_comment')}}</h2>-->
          <!--            <v-textarea-->
          <!--              outlined-->
          <!--              name="input-7-4"-->
          <!--              label="Message"-->
          <!--              v-model="form.message"-->
          <!--              required-->
          <!--            ></v-textarea>-->
          <!--            <div class="text-center">-->
          <!--              <v-btn large class=" submit-btn" outlined rounded @click="submit"> {{ $t('submit') }}</v-btn>-->
          <!--            </div>-->
          <!--          </div>-->
        </v-col>
      </v-row>
    </div>
    <!--  card-section-start   -->
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

    <!--  card-section-end   -->
  </div>
</template>

<script>
import ProductReviewCard from "@/components/ProductReviewCard";

export default {
  name: "index.vue",
  components: { ProductReviewCard },
  data() {
    return {
      form: {
        comment: "",
        parent_comment_id: 0,
        slug: ""
      },
      categoryData: ""
    };
  },
  computed: {
    URL() {
      return this.$route.params.slug;
    },
    reviewData() {
      return this.$store.state.review_list;
    }
  },
  created() {
    this.getCategoryDetail();
  },
  methods: {
    getCategoryDetail() {
      this.$store.dispatch("singleCategoryDetail", this.URL).then(response => {
        this.categoryData = response.data.data.watch_and_learn;
        this.$store.commit("SHOW_LOADER", false);
      });
    },
    submit() {
      if (!this.$store.state.user.isAuthenticated) {
        return this.$router.push("/login");
      } else {
        let loader = true;
        this.$store.commit("SHOW_LOADER", loader);
        this.form.slug = this.categoryData.slug;
        // this.form.parent_comment_id=this.categoryData.id
        this.$store.dispatch("comment", this.form).then(response => {
          this.$store.commit("SHOW_LOADER", (loader = false));
          this.$store.commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: response.data.message
          });
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
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