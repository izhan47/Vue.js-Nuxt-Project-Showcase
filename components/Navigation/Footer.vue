<template>
  <div>
    <v-footer color="white" class="custom-container custom-padding">
      <div class="divider"></div>
      <v-row class="custom-footer-padding">
        <v-col cols="12" md="2" sm="6">
          <v-row>
            <div>
              <img
                class="mr-10 mt-5 mb-3 img-fluid img-height"
                src="/images/WagEnabledLogo.jpg"
                alt="logo"
              />
            </div>

            <div class="d-flex align-items-center justify-space-between">
              <v-btn
                v-for="(icon, i) in social_accounts"
                :key="i"
                icon
                target="_blank"
                :href="icon.to"
                @mouseleave="hoverIcon = ''"
                @mouseover="hoverIcon = i"
                :color="hoverIcon === i ? '#ff8189' : '#332e80'"
                ><v-icon>{{ icon.icon }}</v-icon></v-btn
              >
            </div>
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
        <div class="copy-rights-text">
          <p>
            {{ $t("copy_right") }}
          </p>
          <p>&nbsp;|&nbsp;</p>
          <a href="/terms-and-policy" target="_blank">
            {{ $t("terms") }} &amp; {{ $t("privacy") }}
          </a>
        </div>
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
      hoverIcon: "",
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
          to: "https://www.facebook.com/WagEnabled",
          icon: "mdi-facebook"
        },
        {
          title: this.$i18n.t("Email"),
          to: "mailto:pets@wagenabled.com",
          icon: "mdi-email"
        },
        {
          title: this.$i18n.t("instagram"),
          to: "https://www.instagram.com/wagenabled/",
          icon: "mdi-instagram"
        },
        {
          title: this.$i18n.t("youtube"),
          to: "https://www.youtube.com/channel/UCW3lViiZvDUBz5lWZYw93CA",
          icon: "mdi-youtube"
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

.d-flex {
  display: flex;
  width: 100%;
}
.align-items-center {
  align-items: center;
}
.justify-space-between {
  justify-content: space-between;
}
</style>
