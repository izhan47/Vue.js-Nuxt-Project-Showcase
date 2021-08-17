<template>
  <ContentContainer @save="save" hide-cancel :disable-save="!hasError">
    <v-text-field
      label="Store Name"
      placeholder="Enter Store Name"
      rounded
      outlined
      type="text"
      v-model="form.store_name"
    ></v-text-field>

    <v-text-field
      label="Email"
      placeholder="Enter Email"
      rounded
      outlined
      type="email"
      v-model="form.email"
    ></v-text-field>

    <v-text-field
      label="Website url"
      placeholder="Website url"
      rounded
      outlined
      type="website_url"
      v-model="form.website_url"
    ></v-text-field>

    <VuePhoneNumberInput
      v-model="phone"
      default-country-code="US"
      :border-radius="28"
      class="mb-7"
      valid-color="green"
      error-color="red"
      size="lg"
      @update="updatePhone"
    />

    <v-textarea
      rounded
      outlined
      auto-grow
      label="Enter Address"
      rows="4"
      row-height="30"
      v-model="form.address_line_1"
    ></v-textarea>

    <v-select
      :items="countries"
      label="Countries"
      rounded
      outlined
      v-model="form.country_id[0]"
      @change="fetchStates"
    ></v-select>

    <v-row>
      <v-col cols="4">
        <v-select
          :items="states"
          label="State"
          rounded
          outlined
          :disabled="!form.country_id[0]"
          v-model="form.state_id[0]"
          @change="fetchCities"
          :loading="stateLoading"
        ></v-select>
      </v-col>
      <v-col cols="8">
        <v-select
          :items="cities"
          label="City"
          rounded
          outlined
          :disabled="!form.state_id[0]"
          v-model="form.city_id[0]"
          :loading="cityLoading"
        ></v-select>
      </v-col>
    </v-row>

    <v-select
      :items="businessNature"
      multiple
      chips
      label="Nature of Business"
      rounded
      outlined
      v-model="form.business_id"
    ></v-select>

    <v-select
      :items="categoryList"
      multiple
      chips
      label="Categories"
      rounded
      outlined
      v-model="form.category_id"
    ></v-select>

    <v-textarea
      rounded
      outlined
      auto-grow
      label="Description"
      rows="4"
      row-height="30"
      v-model="form.description"
    ></v-textarea>
  </ContentContainer>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

import ContentContainer from "~/components/Profile/content-container";
export default {
  name: "general-info",
  components: {
    VuePhoneNumberInput,
    ContentContainer
  },
  data: () => ({
    form: {
      store_name: "",
      email: "",
      website_url: "",
      phone_number: "",
      address_line_1: "",
      country_id: [],
      state_id: [],
      city_id: [],
      category_id: [],
      business_id: []
    },
    phone: "",
    validPhone: false,
    countries: [],
    states: [],
    cities: [],
    stateLoading: false,
    cityLoading: false,
    loading: false,
    businessNatureList: []
  }),
  computed: {
    businessNature() {
      return this.businessNatureList.map(b => {
        return {
          text: b.label,
          value: b.value
        };
      });
    },
    categoryList() {
      return this.$store.state.PET_PRO_CATEGORY_LIST.map(category => {
        return {
          text: category.label,
          value: category.value
        };
      });
    },
    hasError() {
      const {
        store_name,
        email,
        phone_number,
        address_line_1,
        country_id,
        state_id,
        city_id,
        description,
        category_id,
        business_id
      } = this.form;

      if (
        !store_name ||
        !address_line_1 ||
        !phone_number ||
        !email ||
        !this.validPhone ||
        !description ||
        !country_id.length ||
        !state_id.length ||
        !city_id.length ||
        !business_id.length ||
        !category_id.length
      )
        return false;

      return true;
    }
  },
  methods: {
    save() {
      this.$emit("next-tab", this.form);
    },
    async fetchStates() {
      try {
        this.form.state_id = [];
        this.stateLoading = true;
        const resp = await this.$axios.get(
          `get-states/${this.form.country_id[0]}`
        );
        const states = resp.data.data
          .filter(c => c.id)
          .map(c => ({ text: c.name, ...c, value: c.id }));
        this.states = states;
        this.stateLoading = false;
      } catch (err) {
        this.stateLoading = false;
        console.log(err);
      }
    },
    async fetchCities() {
      try {
        this.form.city_id = [];
        this.cityLoading = true;
        const resp = await this.$axios.get(
          `get-cities/${this.form.state_id[0]}`
        );
        const cities = resp.data.data
          .filter(c => c.id)
          .map(c => ({ text: c.name, ...c, value: c.id }));
        this.cities = cities;
        this.cityLoading = false;
      } catch (err) {
        this.cityLoading = false;
        console.log(err);
      }
    },
    async fetchBusinessNatureList() {
      try {
        const resp = await this.$axios.post(
          "/pet-pro/get-business-nature-list"
        );
        this.businessNatureList = resp.data.data.business_nature_list;
      } catch (error) {
        console.log(error);
      }
    },
    getValues() {
      return this.form;
    },
    updatePhone({ formattedNumber, isValid }) {
      this.validPhone = isValid;
      this.form.phone_number = formattedNumber;
    }
  },
  async created() {
    try {
      this.loading = true;
      const resp = await this.$axios.post("get-country-list");
      this.fetchBusinessNatureList();
      const countries = resp.data.data.country_list;
      this.countries = countries
        .filter(c => c.value)
        .map(c => ({ id: c.value, text: c.label, ...c }));
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped></style>
