<template>
  <div>
    <div class="pa-5">
      <h3>{{ $t("update_password") }}</h3>
      <div class="update-password-container">
        <v-form
          class="search-form-filter "
          @submit.prevent="updatePassword"
          ref="form"
        >
          <div class="search-form-field">
            <div class="search-filter-label">
              <label>{{ $t("password") }}</label>
            </div>
            <v-text-field
              v-model="form.password"
              class="search-field cross-icon mt-2"
              color="#46259A"
              solo
              rounded
              outlined
              clearable
              :rules="rules.password"
            ></v-text-field>
          </div>
          <div class="search-form-field">
            <div class="search-filter-label">
              <label>{{ $t("new_password") }}</label>
            </div>
            <v-text-field
              v-model="form.new_password"
              class="search-field cross-icon mt-2"
              color="#46259A"
              solo
              rounded
              outlined
              clearable
              :rules="rules.new_password"
            ></v-text-field>
          </div>
          <div class="search-form-field">
            <div class="search-filter-label">
              <label>{{ $t("confirm_password") }}</label>
            </div>
            <v-text-field
              v-model="form.confirm_password"
              class="search-field cross-icon mt-2"
              color="#46259A"
              solo
              rounded
              outlined
              clearable
              :rules="rules.confirm_password"
            ></v-text-field>
          </div>
          <div class="action-section">
            <v-btn text>{{ $t("cancel") }}</v-btn>
            <v-btn
              class="purple-section search-btn"
              outlined
              large
              @click="updatePassword"
            >
              {{ $t("update") }}
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        password: "",
        new_password: "",
        confirm_password: ""
      },
      rules: {
        password: [
          val => (val || "").length > 0 || "This password field is required"
        ],
        new_password: [
          val => (val || "").length > 0 || "This new password field is required"
        ],
        confirm_password: [
          val =>
            (val || "").length > 0 || "This confirm password field is required"
        ]
      }
    };
  },
  methods: {
    updatePassword() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updatePassword", this.form);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.update-password-container {
  max-width: 500px;
  margin: 2rem auto;
}

.search-form-field {
  width: 100%;
  margin: 0;
  .search-field::v-deep .v-input__slot {
    background-color: $white;
    min-height: 60px;
    box-shadow: unset !important;
    width: 100%;
    font-weight: $font-weight-bold;
    font-family: $font-family-primary;
    .v-text-field__slot {
      font-weight: $font-weight-bold;
    }
  }
}

.action-section {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 2rem 0rem;

  .search-btn {
    font-family: $font-family-primary;
    min-width: 110px;
    box-sizing: border-box;
    border-radius: 50px;
  }
}
</style>
