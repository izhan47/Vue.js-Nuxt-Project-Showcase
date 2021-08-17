<template>
  <div class="custom-container  mt-10 ">
    <div class="text-center bg-img">
      <div class="mb-5">
        <h2 class="heading">{{ $t("reset_description") }}</h2>
      </div>
      <v-text-field
        type="password"
        class="mb-5"
        v-model="form.password"
        :rules="rules.password"
        color="teal"
        :label="$t('password')"
        required
      ></v-text-field>
      <v-text-field
        type="password"
        class="mb-5"
        v-model="form.password_confirmation"
        :rules="rules.password_confirmation"
        color="teal"
        :label="$t('confirm_password')"
        required
      ></v-text-field>
      <div class="text-center">
        <v-btn
          large
          class="log-in-btn white-text"
          outlined
          rounded
          @click="ResetPassword()"
        >
          {{ $t("reset_password") }}</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
export default {
  middleware: ["authenticated-user", "reset-password"],
  data() {
    return {
      form: {
        password: "",
        password_confirmation: ""
      },
      rules: {
        password: [
          val => (val || "").length > 0 || "This password field is required"
        ],
        password_confirmation: [
          val =>
            (val || "").length > 0 ||
            "This password confirmation field is required",
          val => val === this.form.password || "The passwords does not match."
        ]
      }
    };
  },
  methods: {
    ...userModule.mapActions(["RESET_PASSWORD"]),

    async ResetPassword() {
      await this.RESET_PASSWORD({
        ...this.form,
        token: this.$route.query.token
      });
      this.$router.push("/login");
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
