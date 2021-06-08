<template>
  <v-container class="shake-section mt-5">
    <v-row justify="center">
      <v-col cols="12" md="6" sm="6">
        <div class="custom-padding text-right">
          <img
            class="shake-img img-fluid "
            src="/images/About/Join_Us.jpg"
            alt="logo"
          />
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="6" class="shake-section">
        <div class="center">
          <div class=" mt-3 space">
            <h2 class="shake-section-heading line-height">
              {{ $t("better_together") }}
            </h2>
          </div>
          <div class="space">
            <h2 class="shake-section-subheading line-height">
              {{ $t("join") }} {{ $t("wag_enabled") }}
            </h2>
          </div>
          <div class="description mb-3">
            <p>{{ $t("shake_description") }}</p>
          </div>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ShakeTogether.vue",
  methods: {
    goToPage() {
      const { user } = this.$store.state.user;
      if (user) {
        this.$router.push("/profile/add-business");
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.shake-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.custom-padding {
  padding-top: 2rem;
  padding-right: 2rem;
  @media (max-width: 767px) {
    padding-right: 0;
  }
}
.space {
  margin-bottom: 1.6rem;
}
.shake-img {
  border-radius: 50px 0 50px 0;
  box-shadow: 0 12px 20px 10px $text-shadow-secondary;
  max-width: 450px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
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
</style>
