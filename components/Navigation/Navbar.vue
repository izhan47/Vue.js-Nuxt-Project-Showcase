<template>
  <div>
    <v-app id="inspire">
      <!--Side Bar Code Start-->
      <template v-if="drawer">
        <v-navigation-drawer v-model="drawer" app>
          <div class="parent">
            <div class="show_img_mobile">
              <v-img
                max-width="250"
                max-height="250"
                @click="$router.push('/')"
                src="/images/WagEnabledLogo.jpg"
                alt="logo"
              ></v-img>
            </div>
            <div class="list-child">
              <v-list dense flat>
                <v-list-item
                  link
                  v-for="(item, i) in menuItems"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="nav-title"
                      v-text="item.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list-item
                v-if="$store.state.USER.isAuthenticated"
                to="/profile"
                link
              >
                <v-list-item-title class="nav-title">
                  {{ $t("my_profile") }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item link v-else to="/login">
                <v-list-item-content>
                  <v-list-item-title class="nav-title">{{
                    $t("sign_in")
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
            <div class="icon-child">
              <v-btn
                v-for="(icon, i) in icons"
                :key="i"
                icon
                @mouseleave="index = ''"
                @mouseover="index = i"
                :color="index === i ? '#ff8189' : '#332e80'"
                ><v-icon>{{ icon.name }}</v-icon></v-btn
              >
            </div>
          </div>
        </v-navigation-drawer>
      </template>
      <!--Side Bar Code End-->

      <!--Nav Bar Code STart-->
      <v-app-bar app color="#FDFDFD" dark height="110" class="remove-shadow">
        <div class="nav-container">
          <!--     Tab/Mobile screen   Start     -->
          <div class="show_img ">
            <img class="logo" src="/images/WagEnabledLogo.jpg" alt="logo" />
          </div>
          <div class="drawer-icon">
            <v-app-bar-nav-icon
              class="show_drawer app-icon"
              @click.stop="drawer = !drawer"
            />
          </div>
          <!--     Tab/Mobile screen End     -->
          <!--     Large screen       -->
          <v-toolbar-title class="header-title">
            <div class="accounts">
              <v-btn
                v-for="(icon, i) in icons"
                :key="i"
                icon
                @mouseleave="index = ''"
                @mouseover="index = i"
                :color="index === i ? '#ff8189' : '#332e80'"
                :href="icon.to"
                target="_blank"
                ><v-icon>{{ icon.name }}</v-icon></v-btn
              >
            </div>
            <div class="app-title">
              <nuxt-link
                class="nav-title unset-underline ml-4"
                to="/about-us"
                >{{ $t("about_us") }}</nuxt-link
              >
              <nuxt-link
                class="nav-title unset-underline ml-4"
                to="/best-pet-products"
                >{{ $t("best_pet_products") }}</nuxt-link
              >
              <div class=" nav-logo">
                <img
                  src="/images/WagEnabledLogo.jpg"
                  alt="logo"
                  @click="$router.push('/')"
                />
              </div>
              <nuxt-link
                class="nav-title unset-underline ml-4"
                to="/pet-care-advice"
                >{{ $t("pet_care_advice") }}</nuxt-link
              >

              <nuxt-link
                class="nav-title unset-underline ml-4"
                to="/find-a-pet-biz"
                >{{ $t("find_a_pet_biz") }}</nuxt-link
              >
            </div>
            <div>
              <v-menu offset-y v-if="$store.state.USER.isAuthenticated">
                <template v-slot:activator="{ on }">
                  <v-btn icon large v-on="on">
                    <v-avatar size="35px" item>
                      <v-img
                        v-if="
                          userDetail && userDetail.profile_image_thumb_full_path
                        "
                        :src="userDetail.profile_image_thumb_full_path"
                      ></v-img>
                      <v-img v-else src="/images/avatar.jpg"></v-img>
                    </v-avatar>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item to="/profile">
                    <v-list-item-title>
                      {{ $t("my_profile") }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="reset">
                    <v-list-item-title>
                      {{ $t("logout") }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <nuxt-link v-else to="/login" class="unset-underline">
                <v-btn outlined rounded class="sign-in-btn">{{
                  $t("sign_in")
                }}</v-btn>
              </nuxt-link>
            </div>
          </v-toolbar-title>
        </div>
      </v-app-bar>
      <!--Nav Bar Code End-->
    </v-app>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Navbar.vue",
  data() {
    return {
      index: "",
      menuItems: [
        {
          title: this.$i18n.t("about_us"),
          to: "/about-us"
        },
        {
          title: this.$i18n.t("best_pet_products"),
          to: "/best-pet-products"
        },
        { title: this.$i18n.t("pet_care_advice"), to: "/pet-care-advice" },
        { title: this.$i18n.t("find_a_pet_biz"), to: "/find-a-pet-biz" }
      ],
      icons: [
        {
          name: "mdi-facebook",
          to: "https://www.facebook.com/WagEnabled"
        },
        {
          name: "mdi-email",
          to: "mailto:pets@wagenabled.com"
        },
        {
          name: "mdi-instagram",
          to: "https://www.instagram.com/wagenabled/"
        },
        {
          name: "mdi-youtube",
          to: "https://www.youtube.com/channel/UCW3lViiZvDUBz5lWZYw93CA"
        }
      ],
      drawer: false,
      userDetail: {}
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", function(event) {
        const newWidth = window.innerWidth;
        this.drawer = newWidth < 768;
      });
      this.userDetail = this.$store.state.USER.user;
    }
  },
  methods: {
    ...mapActions(["RESET"]),

    async reset() {
      await this.RESET();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.remove-shadow::v-deep.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 0px -2px 13px 5px rgb(0 0 0 / 9%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
}
.show_drawer {
  @media (min-width: 769px) {
    display: none;
  }
}
.app-icon::v-deep .v-icon {
  color: $purple;
}
.sign-in-btn::v-deep.v-btn {
  height: 42px;
  min-width: 65px;
  width: auto;
  padding: 12px 24px;
}

.accounts {
  @media (min-width: 770px) and (max-width: 1100px) {
    display: none;
  }
}
</style>
