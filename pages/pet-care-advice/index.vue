<template>
  <div>
    <div class="bg-review-img">
      <div class="custom-container center-center custom-padding ">
        <div class="text-center">
          <h2 class="heading  line-height mb-8">{{ $t("pet_care_advice") }}</h2>
        </div>
        <div class=" banner-description">
          <p>{{ $t("watch_learn_description") }}</p>
        </div>
        <v-form class="mt-8" @submit.prevent="filterData">
          <div class="search-form-filter">
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
                class="search-field mt-2"
                :items="GET_WAL_CATEGORY_LIST"
                v-model="form.category_id"
                outlined
                rounded
                @change="filterData()"
              ></v-select>
            </div>

            <div class="search-form-field">
              <label>{{ $t("keyword") }}</label>
              <v-text-field
                class="search-field cross-icon mt-2"
                :placeholder="$t('all')"
                v-model="form.search"
                color="#00afaa"
                solo
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
          </div>
        </v-form>
      </div>
    </div>

    <div class="custom-container  space" v-if="WAL_LIST.length">
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="12"
          v-for="(data, i) in WAL_LIST"
          :key="i"
          class="mt-8"
        >
          <watch-category-card :item="data"></watch-category-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination
          class="pagination"
          v-model="page"
          :length="WAL_LIST_TOTAL_PAGE"
          :total-visible="6"
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
import { createNamespacedHelpers } from "vuex";
const watchandlearnModule = createNamespacedHelpers("watchandlearn");
export default {
  components: {
    WatchCategoryCard: () => import("@/components/WatchCategoryCard")
  },
  data() {
    return {
      page: 1,
      sorting: [
        {
          name: "Latest",
          value: "Latest"
        },
        {
          name: "Popular",
          value: "popular"
        }
      ],
      form: {
        category_id: "",
        sort_by: "Latest",
        search: ""
      }
    };
  },
  computed: {
    ...watchandlearnModule.mapState([
      "WAL_CATEGORY_LIST",
      "WAL_LIST",
      "WAL_LIST_TOTAL_PAGE"
    ]),
    ...watchandlearnModule.mapGetters([
      "GET_WAL_CATEGORY_LIST",
    ]),

  },

  async created() {
    this.FETCH_WAL_CATEGORY_LIST();
    const { category, page } = this.$route.query;
    if (page) this.page = Number(page);
    if (category) {
      this.form.category_id = Number(category);
    }
    let filters = {
      form: this.form,
      page: this.page
    };
    this.POST_WAL_LIST(filters);
  },

  methods: {
    ...watchandlearnModule.mapActions([
      "FETCH_WAL_CATEGORY_LIST",
      "POST_WAL_LIST",
    ]),

    filterData() {
      let filters = {
        form: this.form,
        page: this.page
      };
      this.$router.push({ query: { page: this.page } });
      this.POST_WAL_LIST(filters);
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
  background-image: url("/images/WatchLearn/Pink-Dog-Running-Banner-1.png");
  background-position: bottom -51px left 29px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1440px) {
    background-position: bottom -34px left 15px;
  }
  @media (max-width: 767px) {
    background-image: none !important;
  }
}
.banner-description {
  max-width: 580px;
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
