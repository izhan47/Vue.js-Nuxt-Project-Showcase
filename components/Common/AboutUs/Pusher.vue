<template>
  <div class="grey-section">
    <div class="custom-container">
      <div class="pusher-section">
        <div class="text-center">
          <h2 class="heading line-height mb-8">
            {{ $t("pawsitivity_pushers") }}
          </h2>
        </div>
        <v-row justify="center">
          <v-col cols="12" md="4" sm="12">
            <v-card class="pa-8 card">
              <v-container>
                <div class="card-icon-parent">
                  <v-icon size="55" class="card-icon">mdi-dog-side</v-icon>
                </div>
                <div>
                  <h2 class="card-heading mb-2">{{ $t("cheer_over_fear") }}</h2>
                  <p class="card-description mt-2">
                    {{ $t("cheer_over_fear_description") }}
                  </p>
                </div>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-card class="pa-8 card">
              <v-container>
                <div class="card-icon-parent">
                  <v-icon size="55" class="card-icon">mdi-paw</v-icon>
                </div>
                <div>
                  <h2 class="card-heading mb-2">{{ $t("oouch_free") }}</h2>
                  <p class="card-description mt-2">
                    {{ $t("oouch_free_description") }}
                  </p>
                </div>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-card class="pa-8 card">
              <v-container>
                <div class="card-icon-parent">
                  <v-icon size="55" class="card-icon">mdi-cards-heart</v-icon>
                </div>
                <div>
                  <h2 class="card-heading  mb-2">{{ $t("local_love") }}</h2>
                  <p class="card-description mt-2">
                    {{ $t("local_love_description") }}
                  </p>
                </div>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pusherSection.vue",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.pusher-section {
  padding: 0 0 100px 0;
  color: $white;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}
.pusher-section-heading {
  text-align: center;
}
.card {
  color: $white;
  padding: 30px;
  text-shadow: 0 10px 20px $text-shadow-secondary;
  border-radius: 10px;
  height: 100%;
}
.card-icon-parent {
  padding: 10px;
  margin-bottom: 20px;
  border: 3px solid $pink;
  border-radius: 50%;
  box-sizing: border-box;
  height: 80px;
  width: 80px;
  cursor: pointer;
}
// .card-icon-parent:hover {
//   border: 3px solid $purple;
//   .card-icon {
//     color: $purple;
//   }
// }
.card-icon {
  fill: $pink;
  color: $pink;
}

.card-heading {
  color: $green;
  font-family: $font-family-primary;
  font-weight: $font-weight-600;
  font-size: $font-size-30;
}
.card-description {
  color: $black;
  font-family: $font-family-primary;
  font-weight: $font-weight-400;
  font-size: $font-size-16;
  line-height: 25px;
}
</style>
