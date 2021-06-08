<template>
  <div class="custom-container custom-height custom-padding">
    <v-row justify="center">
      <v-col cols="12" md="8" sm="12" id="animate">
        <div>
          <h2 class="banner-heading text-center line-height">
            {{ $t("search_wag_enabled") }}
          </h2>
        </div>
        <div class="mt-5 space">
          <p class="description  text-center ">
            {{ $t("search_section_description") }}
          </p>
        </div>
        <div class="search-container">
          <input
            placeholder="Search Wag Enabled"
            :rules="rules.search"
            required
            v-model="form.search"
            v-on:keypress.enter="filterData"
            title="Search"
            class="search-form-input"
          />
          <v-btn
            elevation="0"
            class="search-btn"
            color="#270089"
            @click="filterData"
          >
            {{ $t("search") }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "bannerSearch.vue",
  data() {
    return {
      form: {
        search: ""
      },
      rules: {
        search: [value => !!value || "This field is required"]
      }
    };
  },
  methods: {
    filterData() {
      if (this.form.search) {
        this.$router.push(`/find-a-pet-biz?search=${this.form.search}`);
      } else {
        this.$store.commit("SHOW_SNACKBAR", {
          snackbar: true,
          color: "red",
          message: "Search Field is required"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.custom-padding {
  padding-top: 7rem;
}
.description {
  max-width: 600px;
  margin: auto;
}
.search-btn::v-deep.v-btn {
  color: $white;
  text-transform: $text-transform-capitalize;
  padding-right: 1rem;
  border-radius: 0;
  height: 56px;
}
.search-container {
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 13px 5px rgba(224, 224, 224, 0.9);

  padding: 0;
  border-radius: 100px;
  overflow: hidden;
}
.search-form-input {
  font-family: $font-family-primary;
  font-weight: $font-weight-400;
  font-size: $font-size-16;
  width: 100%;
  padding: 15px;
  display: inline-block;
  color: $black;
  background: $cultured;
  margin: 0;
}
.search-form-input:focus {
  background-color: $white;
  outline: none;
}
.search-img {
  margin-top: 2rem;

  text-align: right;
  img {
    max-height: $img-max-height-255;
  }
}
</style>
