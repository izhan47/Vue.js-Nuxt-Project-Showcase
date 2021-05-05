<template>
  <ContentContainer
    @cancel="cancel"
    @save="save"
    hide-cancel
    :disable-save="!hasError"
    :loading="loading"
  >
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
      label="Website URL"
      placeholder="Website url"
      rounded
      outlined
      type="url"
      v-model="form.url"
    ></v-text-field>

    <VuePhoneNumberInput
      v-model="form.phone"
      default-country-code="US"
      :border-radius="28"
      class="mb-7"
      valid-color="green"
      error-color="red"
      size="lg"
    />

    <v-textarea
      rounded
      outlined
      auto-grow
      label="Address"
      rows="4"
      row-height="30"
      v-model="form.address"
    ></v-textarea>

    <v-select
      :items="countries"
      label="Countries"
      rounded
      outlined
      v-model="form.country"
      @change="fetchStates"
    ></v-select>

    <v-row>
      <v-col cols="4">
        <v-select
          :items="states"
          label="State"
          rounded
          outlined
          :disabled="!form.country"
          v-model="form.state"
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
          :disabled="!form.state"
          v-model="form.city"
          :loading="cityLoading"
        ></v-select>
      </v-col>
    </v-row>

    <v-select
      :items="businessNatureList"
      multiple
      chips
      label="Nature of Business"
      rounded
      outlined
      v-model="form.business"
    ></v-select>

    <v-select
      :items="categoryList"
      multiple
      chips
      label="Categories"
      rounded
      outlined
      v-model="form.category"
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
      url: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
      business: "",
      category: "",
      description: ""
    },
    countries: [],
    states: [],
    cities: [],
    stateLoading: false,
    cityLoading: false,
    loading: false
  }),
  computed: {
    businessNatureList() {
      return [
        {
          text: "Online",
          value: "online"
        },
        {
          text: "Virtual",
          value: "virtual"
        }
      ];
    },
    categoryList() {
      return this.$store.state.pet_category_list.map(category => {
        return {
          text: category.label,
          value: category.label
        };
      });
    },
    hasError() {
      const {
        store_name,
        email,
        phone,
        address,
        country,
        state,
        city,
        description
      } = this.form;

      if (
        !store_name ||
        !email ||
        !phone ||
        !address ||
        !country ||
        !state ||
        !city ||
        !description
      )
        return false;

      return true;
    }
  },
  methods: {
    async save() {
      try {
        // this.loading = true;
        // const resp = await this.$axios.post("pet-pros/new-pet-pro", this.form);

        // console.log(resp);
        this.$emit("next-tab");
        // this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    cancel() {},
    async fetchStates() {
      try {
        this.form.state = "";
        this.stateLoading = true;
        const resp = await this.$axios.get(`get-states/${this.form.country}`);
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
        this.form.city = "";
        this.cityLoading = true;
        const resp = await this.$axios.get(`get-cities/${this.form.state}`);
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
    getValues() {
      return this.form;
    }
  },
  async created() {
    try {
      const resp = await this.$axios.post("get-country-list");
      const countries = resp.data.data.country_list;
      this.countries = countries
        .filter(c => c.value)
        .map(c => ({ id: c.value, text: c.label, ...c }));
    } catch (error) {
      console.log(error);
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped></style>
