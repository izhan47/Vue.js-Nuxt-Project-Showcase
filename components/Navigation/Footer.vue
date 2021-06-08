<template>
  <div>
    <v-footer color="white" class="custom-container custom-padding">
      <div class="divider"></div>
      <v-row class="custom-footer-padding">
        <v-col cols="12" md="2" sm="6">
          <v-row>
            <img
              class="mr-10 mt-5 img-fluid img-height"
              src="/images/WagEnabledLogo.jpg"
              alt="logo"
            />
            <v-col cols="2" class="mr-2 mt-5" v-for="icon in icons" :key="icon">
              <v-btn icon color="#332e80">
                <v-icon>{{ icon }}</v-icon></v-btn
              ></v-col
            >
          </v-row>
        </v-col>
        <v-col cols="12" md="4" sm="6"></v-col>
        <v-col cols="12" md="6" sm="12" class="list-height">
          <v-row>
            <v-col cols="12" md="4" sm="12" class="footer-nav">
              <h2 class="footer-menu-heading mb-3">{{ $t("product") }}</h2>
              <v-list flat>
                <v-list-item
                  v-for="(item, i) in products"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="footer-items"
                      v-text="item.title"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="4" sm="12" class="footer-nav">
              <h2 class="footer-menu-heading mb-3">{{ $t("company") }}</h2>
              <v-list flat>
                <v-list-item
                  v-for="(item, i) in company"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class=" footer-items"
                      v-text="item.title"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="4" sm="12" class="footer-nav">
              <h2 class="footer-menu-heading mb-3">{{ $t("follow") }}</h2>
              <v-list flat>
                <v-list-item
                  v-for="(item, i) in social_accounts"
                  :key="i"
                  :href="item.to"
                  target="_blank"
                  router
                  exact
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="footer-items"
                      v-text="item.title"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
    <div class="copy-rights  ">
      <div class="custom-container">
        <p class="copy-rights-text">
          {{ $t("copy_right") }} | {{ $t("terms") }} | {{ $t("privacy") }}
        </p>
      </div>
      <div class="footer-color"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer.vue",
  data() {
    return {
      products: [
        // { title: 'Home', path: '/home', icon: 'home' },
        { title: this.$i18n.t("find_a_pet_biz"), to: "/find-a-pet-biz" },
        { title: this.$i18n.t("product_reviews"), to: "/best-pet-products" },
        { title: this.$i18n.t("pet_care_advice"), to: "/pet-care-advice" }
      ],
      company: [{ title: this.$i18n.t("about_us"), to: "/about-us" }],
      social_accounts: [
        {
          title: this.$i18n.t("facebook"),
          to: "https://www.facebook.com/WagEnabled"
        },
        { title: this.$i18n.t("Email"), to: "mailto:pets@wagenabled.com" },
        {
          title: this.$i18n.t("instagram"),
          to: "https://www.instagram.com/wagenabled/"
        },
        {
          title: this.$i18n.t("youtube"),
          to: "https://www.youtube.com/channel/UCW3lViiZvDUBz5lWZYw93CA"
        }
      ],
      icons: ["mdi-facebook", "mdi-email", "mdi-instagram", "mdi-youtube"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.footer-items:hover {
  color: $pink;
  //Pulse Grow Effect
}
.footer-nav::v-deep a {
  padding: 0;
}
.custom-padding {
  padding-bottom: 6rem;
}
</style>
