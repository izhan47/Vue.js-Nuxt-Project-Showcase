<template>
  <div>
    <div class="bg-review-img">
      <div class="custom-container center-center custom-padding ">
        <div class="text-center">
          <h2 class="heading  line-height mb-8">
            {{ $t("best_pet_products") }}
          </h2>
        </div>
        <div class="space banner-description">
          <p>{{ $t("best_pet_products_description") }}</p>
        </div>
        <v-form class="search-form-filter" @submit.prevent="filterData">
          <div class="search-form-field">
            <label>{{ $t("sort_by") }}</label>
            <v-select
              class="search-field mt-2"
              :items="sorting"
              item-text="name"
              item-value="value"
              v-model="form.sort_by"
              outlined
              rounded
              @change="filterData()"
            ></v-select>
          </div>
          <div class="search-form-field">
            <label>{{ $t("category") }}</label>

            <v-select
              :placeholder="$t('all')"
              class="search-field-category mt-2"
              :items="PRODUCT_REVIEW_CATEGORY_LIST"
              v-model="categories"
              outlined
              rounded
              multiple
              small-chips
              @change="filterData()"
            >
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0">
                  <span>{{ item.text }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text caption">
                  (+{{ categories.length - 1 }} others)
                </span>
              </template>
            </v-select>
          </div>

          <div class="search-form-field">
            <label>{{ $t("keyword") }}</label>
            <v-text-field
              class="search-field cross-icon mt-2"
              :placeholder="$t('all')"
              v-model="form.search"
              solo
              color="#00afaa"
              rounded
              outlined
              clearable
            ></v-text-field>
          </div>
          <div>
            <v-btn
              class="purple-section  search-btn"
              outlined
              large
              @click="filterData"
            >
              {{ $t("search") }}
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>

    <div class="custom-container  space" v-if="reviewData.length">
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="12"
          v-for="(data, i) in reviewData"
          :key="i"
          class="mt-8"
        >
          <product-review-card :item="data"></product-review-card>
        </v-col>
      </v-row>
      <div class="text-center ">
        <v-pagination
          class="pagination"
          v-model="page"
          :length="totalPage"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          circle
          @input="filterData"
        ></v-pagination>
      </div>
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
</template>

<script>
import ProductReviewCard from "@/components/ProductReviewCard";
import { createNamespacedHelpers } from "vuex";
const bestpetproductsModule = createNamespacedHelpers("bestpetproducts");
export default {
  name: "index.vue",
  data() {
    return {
      page: 1,
      sorting: [
        {
          name: "Latest",
          value: "Latest"
        },
        {
          name: "Deals Offered",
          value: "deal_offered"
        }
      ],
      categories: [],

      form: {
        category_id: [],
        sort_by: "Latest",
        search: ""
      }
    };
  },
  components: { ProductReviewCard },
  computed: {
    ...bestpetproductsModule.mapState(["PRODUCT_REVIEW_CATEGORY_LIST", "PRODUCT_REVIEW_LIST"]),

    reviewData() {
      return this.PRODUCT_REVIEW_LIST;
    },
    totalPage() {
      return this.$store.state.PRODUCT_REVIEW_TOTAL_PAGE;
    }
  },
  created() {
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page);
    }

    let filters = {
      form: {},
      page: this.page
    };

    this.POST_PRODUCT_REVIEW_LIST(filters);
    this.FETCH_PRODUCT_REVIEW_CATEGORIES();
  },
  methods: {
    ...bestpetproductsModule.mapActions([
      "FETCH_PRODUCT_REVIEW_CATEGORIES",
      "POST_PRODUCT_REVIEW_LIST"
    ]),

    filterData() {
      let arr = [];
      this.categories.forEach(id => {
        let x = this.PRODUCT_REVIEW_CATEGORY_LIST.find(e => e.value === id);
        arr.push({
          value: x.value,
          label: x.text
        });
      });

      this.form.category_id = JSON.stringify(Object.assign(arr)); // convert array to string

      this.$router.push({
        query: {
          page: this.page
        }
      });
      let filters = {
        form: this.form,
        page: this.page
      };

      this.POST_PRODUCT_REVIEW_LIST(filters);
      this.scrollToBottom();
    },
    scrollToBottom() {
      this.$nextTick(() => {
        setTimeout(() => {
          window.scrollTo({
            top: 100,
            behavior: "smooth"
          });
        }, 500);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.bg-review-img {
  background-image: url("/images/Reviews/Product-Reviews-Banner-2.png");
  background-position: 10% 68%;
  //background-position: 10% 56%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1440px) {
    background-position: 10% 82%;
  }
  @media (max-width: 1024px) {
    background-position: 10% 175%;
  }
  @media (max-width: 768px) {
    background-image: none !important;
  }
}

.banner-description {
  max-width: 550px;
}
.search-field-category::v-deep .v-input__slot {
  background: $white;
  min-height: 48px;
  box-shadow: unset !important;
  max-width: 273px;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary;
  .v-text-field__slot {
    font-weight: $font-weight-bold;
  }
  fieldset {
    color: rgba(0, 0, 0, 0.7) !important;
  }
}
.search-field-category::v-deep .v-label {
  top: 14px;
}
.search-field-category::v-deep .v-input__append-inner {
  margin-top: 12px;
}

.search-field::v-deep .v-input__slot {
  background: $white;
  min-height: 48px;
  box-shadow: unset !important;
  max-width: 170px;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary;
  .v-text-field__slot {
    font-weight: $font-weight-bold;
  }
}

.search-field::v-deep .v-label {
  top: 14px;
}
.search-field::v-deep .v-input__append-inner {
  margin-top: 12px;
}

.search-btn::v-deep.v-btn {
  min-width: 140px;
  height: 52px;
}
.img-height {
  max-height: $img-max-height-250;
}
.cross-icon::v-deep .v-input__append-inner {
  margin-top: 0;
}
</style>
