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
      <div class="change-avatar space">
        <div class="avatar">
          <div
            class="bg-img-height"
            :style="
              `background-image: url(${userDetail.profile_image_thumb_full_path})`
            "
          ></div>
          <!--        <img class=" img-fluid img-height" src="/images/pet-2.jpg" alt="">-->
          <div class="add-image" @click="$refs.inputFile.click()">
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
            v-model="userDetail.name"
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
            v-model="userDetail.email"
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
        <div class="search-form-field">
          <div class="search-filter-label">
            <label>{{ $t("zipcode") }}</label>
          </div>
          <v-text-field
            v-model="userDetail.zipcode"
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

        <!--      <div class="search-form-field">-->
        <!--        <div class="search-filter-label">-->
        <!--          <label >{{ $t('gender') }}</label>-->
        <!--        </div>-->
        <!--        <v-radio-group class="radio-field search-field" v-model="form.gender" row>-->
        <!--          <v-radio :label="$t('male')" value="0" color="#46259A"></v-radio>-->
        <!--          <v-radio :label="$t('female')" value="1" color="#46259A"></v-radio>-->
        <!--          <v-radio  :label="$t('other')"  value="2" color="#46259A"></v-radio>-->
        <!--        </v-radio-group>-->

        <!--      </div>-->
        <!--      <div class="search-form-field mb-5">-->
        <!--        <div class="search-filter-label">-->
        <!--          <label>{{ $t('phone_no') }}</label>-->
        <!--        </div>-->
        <!--        <div class="search-field">-->
        <!--          <VuePhoneNumberInput-->
        <!--            color="#46259A"-->
        <!--            border-radius-28-->
        <!--            default-country-code="US"-->
        <!--            required-->
        <!--            :rules="rules.phone_no"-->

        <!--          class="phone" v-model="form.phone_no" />-->
        <!--        </div>-->
        <!--      </div>-->
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
// import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default {
  name: "Account.vue",
  components: { VuePhoneNumberInput: () => import("vue-phone-number-input") },

  data() {
    return {
      userDetail: "",
      form: {
        name: "",
        email: "",
        zipcode: ""
      },
      image: "",
      imageURL: "",
      rules: {
        name: [val => (val || "").length > 0 || "This name field is required"],
        email: [
          val => (val || "").length > 0 || "This address field is required"
        ],
        zipcode: [
          val => (val || "").length > 0 || "This address field is required"
        ]
      }
    };
  },

  created() {
    this.getProfileDetail();
  },
  methods: {
    async getProfileDetail() {
      this.$store.commit("SHOW_LOADER", true);
      await this.$store.dispatch("profileDetails").then(response => {
        this.$store.commit("SHOW_LOADER", false);
        this.userDetail = response.data.data.user_details;
      });
    },
    getProfileFile(event) {
      this.image = event.target.files[0];
      if (!this.image) return;
      this.userDetail.profile_image_thumb_full_path = URL.createObjectURL(
        this.image
      );
    },
    async updateProfile() {
      if (this.$refs.form.validate()) {
        let data = new FormData();
        data.append("image", this.image);
        data.append("name", this.userDetail.name);
        data.append("email", this.userDetail.email);
        data.append("zipcode", this.userDetail.zipcode);
        this.$store.commit("SHOW_LOADER", true);
        await this.$store
          .dispatch("updateProfile", data)
          .then(response => {
            this.$store.commit("SHOW_LOADER", false);
            this.$store.commit("SHOW_SNACKBAR", {
              snackbar: true,
              color: "green",
              message: response.data.message
            });
          })
          .catch(e => {
            let errors = e.response.data.data;
            this.$store.commit("SHOW_LOADER", false);
            for (let item in errors) {
              if (errors.hasOwnProperty(item))
                errors[item].forEach(err => {
                  this.$store.commit("SHOW_SNACKBAR", {
                    snackbar: true,
                    color: "red",
                    message: err
                  });
                });
            }
          });
      }
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
  .avatar {
    width: 110px;
    position: relative;
    border: 2.3804px solid $blue_gem;
    box-sizing: border-box;
    border-radius: 21.4236px;
    .bg-img-height {
      height: 102px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 19px;
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
.search-field::v-deep .v-input__slot {
  background: $white;
  min-height: 60px;
  box-shadow: unset !important;
  min-width: 380px;
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
