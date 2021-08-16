<template>
  <div class="find_pro_section ">
    <div class="bg-review-img">
      <div class="custom-container custom-padding">
        <div class="text-center">
          <h2 class="heading  line-height mb-8">
            {{ $t("find_a_pet_biz") }}
          </h2>
        </div>
        <div class="space banner-description">
          <p>{{ $t("pet_pro_description") }}</p>
        </div>
        <!--   Filter Section Start     -->
        <v-form class="custom-margin" @submit.prevent="filterData">
          <div class="search-form-filter">
            <div class="search-form-field">
              <label>{{ $t("category") }}</label>
              <v-select
                :placeholder="$t('all')"
                class="search-field mt-2"
                :items="categoryList"
                v-model="category"
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
                    (+{{ categoryList.length - 1 }} others)
                  </span>
                </template>
              </v-select>
            </div>
            <!--  -->
            <div class="search-form-field mb-8">
              <div class="search-filter-label">
                <label class="ml-4 ">{{ $t("location") }}</label>
              </div>
              <GmapAutocomplete
                class="search-location"
                :placeholder="$t('all')"
                @input="inputLocation($event)"
                @place_changed="getAddressData"
              >
              </GmapAutocomplete>
            </div>

            <div class="search-form-field">
              <label>{{ $t("nature_of_business") }}</label>

              <v-select
                :placeholder="$t('all')"
                class="search-field mt-2"
                :items="businessList"
                v-model="business"
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
                    (+{{ businessList.length - 1 }} others)
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
                color="#00afaa"
                solo
                rounded
                outlined
                clearable
                @change="filterData()"
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
    <div
      class="custom-height custom-container space"
      v-if="PET_PRO_LIST.length"
    >
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="12"
          v-for="(data, i) in PET_PRO_LIST"
          :key="i"
          class="custom-margin"
        >
          <pet-category-card :item="data"></pet-category-card>
        </v-col>
      </v-row>

      <div class="text-center ">
        <v-pagination
          class="pagination"
          v-model="page"
          :length="PET_PRO_LIST_TOTAL_PAGE"
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
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      page: 1,
      category_list: [],
      category: [],
      business_list: [],
      business: [],
      form: {
        category_id: [],
        latitude: "",
        longitude: "",
        search: "",
        business_id: []
      },
      address: ""
    };
  },

  computed: {
    ...mapState(["PET_PRO_LIST", "PET_PRO_LIST_TOTAL_PAGE"]),

    colors() {
      return ["paw-purple", "paw-pink", "paw-green"];
    },
    categoryList() {
      this.category_list = this.$store.state.PET_PRO_CATEGORY_LIST;
      let arr = this.category_list.map(category => ({
        value: category.value,
        text: category.label
      }));
      return [...arr];
    },
    businessList() {
      return this.business_list.map(b => {
        return {
          value: b.value,
          text: b.label
        };
      });
    }
  },
  async created() {
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page);
    }

    let search = this.$route.query.search ?? "";
    this.form.search = search;

    let filters = {
      form: this.form,
      page: this.page
    };

    this.POST_PET_PRO_LIST(filters);

    await this.fetchBusinessNature();
    this.FETCH_PET_PRO_CATEGORY_LIST();
  },
  methods: {
    ...mapActions(["POST_PET_PRO_LIST", "FETCH_PET_PRO_CATEGORY_LIST"]),

    filterData() {
      this.$router.push({ query: { page: this.page } });

      this.form.business_id = this.business.map(business => {
        const exist = this.business_list.find(b => b.value == business);
        exist.label = exist.label;
        return exist;
      });

      this.form.category_id = this.category.map(category => {
        const exist = this.category_list.find(b => b.value == category);
        exist.label = exist.label;
        return exist;
      });

      this.form.business_id = JSON.stringify(this.form.business_id);
      this.form.category_id = JSON.stringify(this.form.category_id);

      if (this.form.search == null) {
        this.form.search = "";
      }

      if (this.address == "") {
        this.form.latitude = "";
        this.form.longitude = "";
      }
      let filters = {
        form: this.form,
        page: this.page
      };

      this.POST_PET_PRO_LIST(filters);
    },
    getAddressData(addressData) {
      this.form.latitude = addressData.geometry.location.lat();
      this.form.longitude = addressData.geometry.location.lng();
    },
    inputLocation(event) {
      this.address = event.target.value;
    },
    async fetchBusinessNature() {
      try {
        const resp = await this.$axios.post("pet-pro/get-business-nature-list");
        const { business_nature_list } = resp.data.data;
        this.business_list = business_nature_list;
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.find_pro_section {
  .card-radius {
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px rgb(0 0 0 / 9%);
  }
}
.custom-margin {
  margin-top: 2rem;
}
.custom-padding {
  padding-top: 3rem;
}

.banner-description {
  max-width: 650px;
  @media (max-width: 1024px) {
    max-width: 420px;
  }
}
.bg-review-img {
  background-image: url("/images/Great-Dane-Background-1.png");
  background-position: 210px -50px;
  background-size: 75% auto;
  background-repeat: no-repeat;
  @media (max-width: 1440px) {
    background-position: 237px -37px;
  }
  @media (max-width: 1024px) {
    background-position: 280px -30px;
  }
  @media (max-width: 768px) {
    background-image: none !important;
  }
}

.search-field::v-deep .v-input__slot {
  background: $white;
  min-height: 48px;
  box-shadow: unset !important;
  max-width: 200px;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary;
  .v-text-field__slot {
    font-weight: $font-weight-bold;
  }
  //fieldset{
  //  color: rgba(0, 0, 0, 0.7) !important;
  //}
}
.search-field-location::v-deep .v-input__slot {
  background: $white;
  min-height: 48px;
  box-shadow: unset !important;
  max-width: 400px;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary;
  .v-text-field__slot {
    font-weight: $font-weight-bold;
  }
  //fieldset{
  //  color: rgba(0, 0, 0, 0.7) !important;
  //}
}
.search-field::v-deep .v-label {
  top: 14px;
}
.search-field::v-deep .v-input__append-inner {
  margin-top: 12px;
}
.search-btn::v-deep.v-btn {
  min-width: 160px;
  height: 52px;
}
.card-title-padding::v-deep.v-card__title {
  padding: 16px 16px 0 16px;
}

.card-padding {
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
.img-height {
  max-height: $img-max-height-250;
}
.cross-icon::v-deep .v-input__append-inner {
  margin-top: 0;
}
</style>
