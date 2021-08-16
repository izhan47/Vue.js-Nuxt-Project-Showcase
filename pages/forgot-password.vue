<template>
  <div class="custom-container  mt-10 ">
    <div class="text-center bg-img">
      <div class="mb-5">
        <h2 class="heading">{{ $t("forgot_description") }}</h2>
      </div>
      <v-text-field
        class="mb-5"
        v-model="form.email"
        :rules="rules.email"
        color="teal"
        :label="$t('email')"
        required
      ></v-text-field>
      <div class="text-center">
        <v-btn
          large
          class="log-in-btn white-text"
          outlined
          rounded
          @click="forgotPassword()"
        >
          {{ $t("reset_password") }}</v-btn
        >
      </div>
      <div class="mt-4 mb-2 ">
        <span class="forgot-pass">{{ $t("remember_password") }}</span>
        <nuxt-link class="auth-link" to="/login">{{ $t("login") }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  middleware: ["authenticated-user"],
  data() {
    return {
      form: {
        email: ""
      },
      rules: {
        email: [
          val => (val || "").length > 0 || "This email field is required",
          val =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
            "E-mail must be valid"
        ]
      }
    };
  },
  methods: {
    ...mapActions(["FORGOT_PASSWORD"]),

    forgotPassword() {
      this.FORGOT_PASSWORD(this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.custom-container {
  max-width: 400px;
}
.bg-img {
  padding: 10px;
  border-radius: 4px;
  background-image: linear-gradient(180deg, $white 0%, $white 99%);
}
.heading {
  font-size: $font-size-18;
  color: $black;
}

.log-in-btn::v-deep.v-btn {
  min-width: 340px;
  height: 52px;
  padding: 0 50px;
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-600;
  text-transform: $text-transform-uppercase;
  background-color: $white;
  color: $purple;
  letter-spacing: 0;
  border-style: solid;
  border-width: 3px;
  border-color: $purple;
  border-radius: 100px;
  @media (max-width: 767px) {
    min-width: 200px;
  }
}
.log-in-btn:hover {
  background-color: $purple;
  color: $white;
}
.forgot-pass {
  font-family: $font-family-primary;
  font-size: 0.85em;
  cursor: pointer;
  color: $black;
}
.forgot-pass:hover {
  color: $green;
}

.auth-link {
  font-family: $font-family-primary;
  font-size: $font-size-14;
  font-weight: $font-weight-bold;
  text-decoration: unset;
  color: $black;
}
.heading {
  text-transform: none;
}
</style>
