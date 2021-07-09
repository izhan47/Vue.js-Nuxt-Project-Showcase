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
      <v-dialog v-model="dialog">
        <v-card>
          <v-container>
            <v-card-title class="p-0">
              <span class="text-h5">Contact Detail</span>
            </v-card-title>
          </v-container>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Name*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Business Name*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Contact Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <p>
                    Wag Enable strongly believes in positive reinforcement and
                    animal behavioral science. We do not promote brands or
                    businesses that encourage the use of dominance/alpha
                    training techniques, the use of e-collars, prongs, or other
                    similar methods.
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveContactDetails">
              Save
            </v-btn>
          </v-card-actions>
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
      dialog: false
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
    saveContactDetails() {}
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
</style>
