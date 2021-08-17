<template>
  <div class="pa-5">
    <h3 class="mb-3">{{ $t("account") }}</h3>
    <div class="account-container ">
      <input
        type="file"
        accept="image/*"
        id="myfile"
        class="d-none"
        @change="getProfileFile"
        ref="inputFile"
      />
      <div class="change-avatar space" @click="$refs.inputFile.click()">
        <div class="avatar">
          <div
            class="bg-img-height"
            :style="`background-image: url(${imageURL})`"
          ></div>
          <div class="add-image">
            <v-icon size="30" color="#fff">mdi-plus</v-icon>
          </div>
        </div>
        <div class="change-profile" @click="$refs.inputFile.click()">
          <h2>Change profile photo</h2>
          <div class="image-description">
            <span>Acceptable formats: jbg, png </span> <br />
            <span>Max file size: 500 kb </span>
          </div>
        </div>
      </div>
      <v-form
        class="search-form-filter "
        @submit.prevent="updateProfile"
        ref="form"
      >
        <div class="search-form-field">
          <div class="search-filter-label">
            <label>{{ $t("name") }}</label>
          </div>
          <v-text-field
            v-model="form.name"
            class="search-field cross-icon mt-2"
            color="#46259A"
            solo
            rounded
            outlined
            clearable
            required
            :rules="rules.name"
          ></v-text-field>
        </div>
        <div class="search-form-field">
          <div class="search-filter-label">
            <label>{{ $t("email") }}</label>
          </div>
          <v-text-field
            v-model="form.email"
            class="search-field cross-icon mt-2"
            color="#46259A"
            solo
            rounded
            outlined
            clearable
            required
            :rules="rules.email"
          ></v-text-field>
        </div>

        <div class="search-form-field mb-8">
          <div class="search-filter-label">
            <label>{{ $t("address") }}</label>
          </div>
          <GmapAutocomplete
            class="search-location"
            :placeholder="$t('all')"
            @input="inputLocation($event)"
          >
          </GmapAutocomplete>
        </div>

        <div class="search-form-field">
          <div class="search-filter-label">
            <label>{{ $t("zipcode") }}</label>
          </div>
          <v-text-field
            v-model="form.zipcode"
            class="search-field cross-icon mt-2"
            color="#46259A"
            solo
            rounded
            outlined
            clearable
            required
            :rules="rules.zipcode"
          ></v-text-field>
        </div>
        <div class="action-section">
          <v-btn text>{{ $t("cancel") }}</v-btn>
          <v-btn
            class="purple-section  search-btn"
            outlined
            large
            @click="updateProfile"
          >
            {{ $t("update") }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { createNamespacedHelpers } from "vuex";
const dashboardModule = createNamespacedHelpers("dashboard");

export default {
  components: {
    VuePhoneNumberInput: () => import("vue-phone-number-input")
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        zipcode: "",
        address: ""
      },
      image: "",
      imageURL: "",
      rules: {
        name: [val => (val || "").length > 0 || "This name field is required"],
        email: [val => (val || "").length > 0 || "This email field is required"]
      }
    };
  },

  created() {
    this.getProfileDetail();
  },

  methods: {
    ...dashboardModule.mapActions(["POST_UPDATE_USER_PROFILE"]),

    async getProfileDetail() {
      for (var key in this.$auth.user) {
        if (this.form.hasOwnProperty(key)) {
          this.form[key] = this.$auth.user[key];
        }
      }
      this.imageURL = this.$auth.user.profile_image_thumb_full_path;
    },
    getProfileFile(event) {
      let file = event.target.files[0];
      if (!file) return;
      this.image = file;
      this.form.image = file;
      this.imageURL = URL.createObjectURL(this.image);
    },
    updateProfile() {
      if (this.$refs.form.validate()) {
        let data = new FormData();
        for (var key in this.form) {
          if (this.form.hasOwnProperty(key)) {
            data.append(key, this.form[key]);
          }
        }
        this.POST_UPDATE_USER_PROFILE(data);
      }
    },
    inputLocation(event) {
      this.form.address = event.target.value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.account-container {
  max-width: 500px;
  margin: auto;
  padding: 0 1rem;
}
.change-avatar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  .avatar {
    width: 110px;
    position: relative;
    border: 2px solid $blue_gem;
    box-sizing: border-box;
    border-radius: 22px;
    .bg-img-height {
      height: 102px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 20px;
    }
  }
  .add-image {
    right: -12px;
    bottom: 0px;
    height: 30px;
    width: 30px;

    position: absolute;
    z-index: 1;
    //bottom: 27px;
    //right: 7px;
    //height: 20px;
    border-radius: 50%;

    cursor: pointer;
    background: $blue_gem;
    box-shadow: 0px 5.53142px 5.53142px rgba(0, 0, 0, 0.08);
  }
}
.change-profile {
  h2 {
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: $font-weight-500;
    font-size: $font-size-14;
    line-height: 21px;
    color: $blue_gem;
    cursor: pointer;
  }
  .image-description {
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: $font-weight-normal;
    font-size: $font-size-11;
    line-height: 147%;
    letter-spacing: -0.005em;
    color: $black;
    opacity: 0.5;
  }
}

.search-form-field {
  width: 100%;
}
.search-field::v-deep .v-input__slot {
  background: $white;
  min-height: 60px;
  box-shadow: unset !important;
  width: 100%;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary;
  .v-text-field__slot {
    font-weight: $font-weight-bold;
  }
  @media (max-width: 767px) {
    max-width: 273px;
    min-width: 0;
  }
}
.search-location {
  width: 100%;
  max-width: 100%;
  min-height: 60px;
}
.radio-field {
  margin-top: 0;
}

.phone::v-deep .select-country-container {
  margin-right: 40px;
}
.phone::v-deep .input-tel__input {
  border-radius: 28px !important;
}
.phone::v-deep .country-selector__input {
  border-radius: 28px !important;
}
.search-btn {
  font-family: $font-family-primary;
  min-width: 110px;
  //border: 0.5px solid #46259A;
  box-sizing: border-box;
  border-radius: 50px;
}
.action-section {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 5rem;
}
</style>
