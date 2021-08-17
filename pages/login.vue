<template>
  <div class="auth-card-wrapper">
    <div class="container">
      <v-card class="auth-card">
        <v-row>
          <v-col cols="12" md="7" sm="12" class="left-section-wrapper">
            <div class="bg-left-section">
              <div class="left-section">
                <div class="logo-wrapper mb-10">
                  <img src="/images/WagEnabledLogo.jpg" alt="logo" />
                </div>
                <div class="mb-10">
                  <h2 class="heading">{{ $t("sing_in_heading") }}</h2>
                </div>
                <div class="mb-10">
                  <p class="description">
                    {{ $t("sing_in_subheading") }}
                  </p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" sm="12" class="right-section-wrapper">
            <div class="right-section">
              <div class="d-flex justify-center">
                <div class="img-wrapper">
                  <img src="/images/Auth/Column-3-Dog.png" alt="dog" />
                </div>
              </div>

              <v-form ref="form" class="login-form">
                <v-text-field
                  class="input-field"
                  :placeholder="$t('username')"
                  v-model="form.email"
                  :rules="rules.email"
                  required
                  solo
                  color="#00afaa"
                  rounded
                  outlined
                ></v-text-field>
                <v-text-field
                  class="input-field"
                  :placeholder="$t('password')"
                  v-model="form.password"
                  :rules="rules.password"
                  required
                  solo
                  type="password"
                  color="#00afaa"
                  rounded
                  outlined
                  v-on:keypress.enter="Login"
                ></v-text-field>
                <v-checkbox
                  class="custom-checkbox"
                  color="#332e80"
                  v-model="form.remember"
                  :label="$t('remember_me')"
                ></v-checkbox>
                <div class="text-center">
                  <v-btn
                    large
                    class="log-in-btn white-text"
                    outlined
                    rounded
                    @click="Login"
                  >
                    {{ $t("log_in") }}</v-btn
                  >
                </div>
                <div class="mt-4 mb-4">
                  <span
                    class="forgot-pass"
                    @click="$router.push('/forgot-password')"
                    >{{ $t("lost_password") }}</span
                  >
                  <br />
                  <span class="forgot-pass">{{
                    $t("dont_have_an_account")
                  }}</span>
                  <nuxt-link class="auth-link" to="/register">{{
                    $t("sign_up")
                  }}</nuxt-link>
                </div>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
export default {
  layout: "auth-layout",
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false
      },
      rules: {
        email: [
          val => (val || "").length > 0 || "This email field is required",
          val =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
            "E-mail must be valid"
        ],
        password: [
          value => !!value || "This field is required",
          value => (value && value.length >= 6) || "minimum 6 characters"
        ]
      }
    };
  },
  methods: {
    ...userModule.mapActions(["VALIDATE_LOGIN"]),

    Login() {
      if (this.$refs.form.validate()) {
        this.VALIDATE_LOGIN(this.form);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.auth-card-wrapper {
  .auth-card {
    box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 24%);
    transition: background-color 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    margin: 35px auto;
    max-width: 950px;
  }
  .left-section-wrapper {
    padding: 0;
    @media only screen and (max-width: 768px) {
      padding: 0px 10px;
    }
    .bg-left-section {
      background-color: transparent;
      background-image: linear-gradient(290deg, $powder_blue 0%, $green 100%);
      height: 100%;
      .left-section {
        transition: background-color 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        padding: 75px;
        @media only screen and (max-width: 768px) {
          padding: 20px;
        }
        .logo-wrapper {
          width: 140px;
          height: auto;
          img {
            border-radius: 4px;
            width: 100%;
            height: auto;
          }
        }
        .heading {
          color: $white;
          font-size: $font-size-48;
          @media only screen and (max-width: 1200px) {
            font-size: $font-size-32;
          }
          @media only screen and (max-width: 768px) {
            font-size: $font-size-24;
          }
        }
        .description {
          color: $white;
          font-weight: $font-weight-300;
          line-height: 1.9em;
          margin: 0px;
        }
      }
    }
  }
  .right-section-wrapper {
    padding: 0px;
    @media (max-width: 768px) {
      padding: 0px 10px;
    }
    .right-section {
      padding: 75px 37px;
      @media only screen and (max-width: 768px) {
        padding: 20px;
      }
      .img-wrapper {
        width: 140px;
        height: auto;
        img {
          width: 100%;
          height: auto;
        }
      }
      .login-form {
        .input-field {
          ::v-deep .v-input__slot {
            background-color: $cultured !important;
            border-color: rgba(145, 156, 167, 0.27);
            border-width: 0;
            box-shadow: unset !important;
            font-weight: $font-weight-300;
            font-family: $font-family-primary;
            fieldset {
              border-width: 0;
            }
          }
        }
        .custom-checkbox {
          margin-top: 0;
          padding-top: 0;
          ::v-deep .v-input__slot {
            margin-bottom: 0;
          }
        }
        .log-in-btn {
          width: 100%;
          font-family: $font-family-primary;
          font-size: $font-size-15;
          font-weight: $font-weight-600;
          text-transform: $text-transform-capitalize;
          background-color: $white;
          color: $purple;
          letter-spacing: 0;
          border-style: solid;
          border-width: 3px;
          border-color: $purple;
          border-radius: 100px;
          &:hover {
            background-color: $purple;
            color: $white;
          }
        }
        .forgot-pass {
          font-family: $font-family-primary;
          font-size: 0.85em;
          cursor: pointer;
          color: $black;
          &:hover {
            color: $green;
          }
        }
        .auth-link {
          font-family: $font-family-primary;
          font-size: $font-size-14;
          font-weight: $font-weight-bold;
          text-decoration: unset;
          color: $black;
        }
      }
    }
  }
}
</style>
