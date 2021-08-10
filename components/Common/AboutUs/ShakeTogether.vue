<template>
  <v-container class="shake-section mt-5">
    <v-row justify="center">
      <v-col cols="12" md="6" sm="6">
        <div class="img-wrapper">
          <img class="shake-img" src="/images/About/Join_Us.jpg" alt="logo" />
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <div class="shake-section">
          <div>
            <div>
              <h2 class="shake-section-heading">
                {{ $t("better_together") }}
              </h2>
            </div>
            <div>
              <h2 class="shake-section-subheading">
                {{ $t("join") }} {{ $t("wag_enabled") }}
              </h2>
            </div>
            <div class="description mb-3">
              <p>{{ $t("shake_description") }}</p>
            </div>
          </div>
          <div>
            <v-btn
              class="round-btn mt-3"
              outlined
              rounded
              large
              @click="goToPage"
            >
              {{ $t("lets_shake") }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="660px">
        <v-card>
          <div class="flex items-center justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfVyw-8iiMska4iMmQ8dtcB1OE7NBr3fEBp2jqjOAqh_97f8w/viewform?embedded=true"
              height="1200"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              >Loading…</iframe
            >
          </div>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ShakeTogether.vue",
  data() {
    return {
      dialog: false,
      form: {
        name: "",
        business_name: "",
        email: ""
      },
      rules: {
        // zipcode: [val => (val || '').length > 0 || 'This Zipcode is required'],
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
    goToPage() {
      this.dialog = true;
      // const { user } = this.$store.state.user;
      // if (user) {
      //   this.$router.push("/profile/add-business");
      // } else {
      //   this.$router.push("/login");
      // }
    },
    async submit() {
      if (this.$refs.form.validate()) {
        this.$store.commit("SHOW_LOADER", true);
        const mail_form = this.form;
        mail_form.address = this.form.email;
        const mailResp = await this.$axios.post(
          "/mail/contact-us-form",
          mail_form
        );
        this.$store.commit("SHOW_LOADER", false);
        this.$store.commit("SHOW_SNACKBAR", {
          snackbar: true,
          color: "green",
          message: "Thanks. We will contact you soon!"
        });
        this.dialog = false;
        // for (const key in this.form) {
        //   this.form[key] = "";
        // }
        this.$refs.form.reset();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.shake-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  @media only screen and (max-width: 767px) {
    padding-left: 10px;
  }
}
.img-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.shake-img {
  border-radius: 50px 0 50px 0;
  box-shadow: 0 12px 20px 10px $text-shadow-secondary;
  width: 100%;
}
.shake-section-heading {
  font-family: $font-family-primary;
  font-weight: $font-weight-bold;
  font-size: $font-size-20;
  text-shadow: -3px 2px 5px $text-shadow-primary;
  color: $black;
  text-transform: $text-transform-capitalize;
}
.shake-section-subheading {
  font-family: $font-family-primary;
  font-weight: $font-weight-600;
  font-size: $font-size-40;
  color: $green;
  @media only screen and (max-width: 1024px) {
    font-size: $font-size-25;
  }
}
.description {
  max-width: 500px;
  p {
    color: $black;
    font-family: $font-family-primary;
    font-weight: $font-weight-400;
    font-size: $font-size-16;
  }
}

.p-0 {
  padding: 16px 0 !important;
}

iframe {
  width: 100%;
}
</style>
