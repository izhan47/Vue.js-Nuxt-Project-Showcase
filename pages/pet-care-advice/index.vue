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
        <!--   Filter Section Start     -->
        <v-form class="mt-8" @submit.prevent="filterData">
          <div class="search-form-filter">
            <div class="search-form-field">
              <label>{{ $t("sort_by") }}</label>
              <v-select
                class="search-field mt-2"
                :items="sorting"
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
                :items="category"
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
        <!--   Filter Section End     -->
      </div>
    </div>
    <!--  card-section-start   -->
    <div class="custom-container  space" v-if="watchData.length">
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="12"
          v-for="(data, i) in watchData"
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
          :length="totalPage"
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

    <!--  card-section-end   -->
  </div>
</template>

<script>
// import WatchCategoryCard from "@/components/WatchCategoryCard";
export default {
  name: "index.vue",
  components: {
    WatchCategoryCard: () => import("@/components/WatchCategoryCard")
  },
  data() {
    return {
      category: [],
      page: 1,
      sorting: ["Latest", "Popular"],

      form: {
        category_id: "",
        sort_by: "Latest",
        search: ""
      }
    };
  },
  computed: {
    watchData() {
      return this.$store.state.category_list;
    },
    totalPage() {
      return this.$store.state.total_page;
    }
  },
  async created() {
    const { category, page } = this.$route.query;

    if (page) this.page = Number(page);

    let filters = {
      form: this.form,
      page: this.page
    };

    if (category) {
      filters.form.category_id = Number(category);
      this.form.category_id = Number(category);
    }

    await this.watchCategory();

    this.$store.dispatch("categoryList", filters);
  },
  methods: {
    async watchCategory() {
      try {
        const resp = await this.$store.dispatch("watchCategories");
        let arr = [];
        resp.data.data.category_list.forEach(data => {
          arr.push({
            value: data.value,
            text: data.label
          });
        });

        this.category = arr;
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    },
    filterData() {
      let filters = {
        form: this.form,
        page: this.page
      };

      this.$router.push({ query: { page: this.page } });

      this.$store.dispatch("categoryList", filters);
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
  //background-position:10% 33%;
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
