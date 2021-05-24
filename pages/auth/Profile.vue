<template>
  <div class="custom-container mt-10">
    <h2 class="heading space">{{ $t("pet_dashboard") }}</h2>
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <div class="profile-sidebar-section">
          <v-list class="mt-4 mb-4">
            <v-list-item
              v-for="link in routeLinks"
              :key="link.text"
              :to="link.to"
              route
              exact
            >
              <v-list-item-title>
                {{ $t(link.text) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col cols="12" md="9" sm="12">
        <div class="profile-right-section">
          <nuxt-child></nuxt-child>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Profile.vue",
  middleware: ["auth"],
  components: {},
  data() {
    return {
      userDetail: "",
      showTab: 1
    };
  },
  computed: {
    routeLinks() {
      let prefix = "/auth/Profile";
      let arr = [
        {
          text: "pet_profile",
          to: prefix,
          show: true
        },
        {
          text: "account",
          to: `${prefix}/account`,
          show: true
        },
        {
          text: "my_vet_info",
          to: `${prefix}/vet-info`,
          show: false
        },
        {
          text: "add_business",
          to: `${prefix}/add-business`,
          show: true
        },
        {
          text: "my_business",
          to: `${prefix}/my-business`,
          show: true
        },
        {
          text: "save_deals",
          to: `${prefix}/save-deals`,
          show: true
        },
        {
          text: "loved_pet_pros",
          to: `${prefix}/loved-pet-pros`,
          show: true
        },
        {
          text: "my_reviews",
          to: `${prefix}/reviews`,
          show: false
        }
      ];

      return arr.filter(a => a.show);
    }
  },
  methods: {},
  created() {
    this.userDetail = this.$store.state.user.user;
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.heading {
  font-size: $font-size-32;
  color: $blue_gem;
  font-weight: $font-weight-500;
  font-style: normal;
  line-height: 40px;
  font-family: $font-family-secondary;
}
.profile-sidebar-section {
  min-width: 250px;
  min-height: 350px;
  background: $white;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 19px;
}
.profile-right-section {
  min-width: 290px;
  min-height: 400px;
  background: $white;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 19px;
}
</style>
