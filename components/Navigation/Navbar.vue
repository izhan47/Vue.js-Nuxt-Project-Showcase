<template>
  <!--Nav Bar Code STart-->
  <v-app-bar
    app
    color="white"
    dark
    class="hide-height"
  >
      <v-row >
        <v-col md="2">
          <v-row>
            <v-col cols="2" class="mt-5" v-for="(icon,i) in icons" :key="i">
              <v-btn  icon color="primary"> <v-icon>{{icon.name}}</v-icon></v-btn
              ></v-col>
          </v-row>
        </v-col>
        <v-col md="1"></v-col>
        <v-col md="6">
          <v-row >
            <v-col cols="2" class="mt-5" v-for="item in menuItems"  :key="item.title">
              <img v-if="item.title===''"  class="mr-8" width="100"
                   src="/images/WagEnabledLogo.jpg" alt="logo">
              <v-btn
                class=" mt-2 menu-item"
                text
              >
                {{ item.title }}
              </v-btn>
            </v-col>
          </v-row>
          <!--        <v-col cols="12" lg="2" md="3" sm="6">-->
          <!--        </v-col>-->

        </v-col>
        <v-col md="1"></v-col>
        <v-col md="2 mt-6">
          <v-btn
            class="menu-item "
            style="float: right"
            outlined
            rounded

          >
            {{ $t('sign_in') }}
          </v-btn>
        </v-col>
      </v-row>
  </v-app-bar>
  <!--Nav Bar Code End-->
</template>

<script>
export default {
  name: "Navbar.vue",
  data(){
    return {
      menuItems: [
        // { title: 'Home', path: '/home', icon: 'home' },
        {
          title: this.$i18n.t('about_us'),
          path: '/about-us',
        },
        {
          title: this.$i18n.t('reviews'),
          path: '/reviews',
        },

        {
          title: '',
          path: '/',
        },

        { title: this.$i18n.t('watch_and_learn'),
          path: '/watch_and_learn',},
        { title: this.$i18n.t('find_a_pet_pro'),
          path: '/find_a_pet_pro',},
      ],
      icons:[
        {
          name:"mdi-facebook",
        },
        {
          name:"mdi-twitter",
        },
        {
          name:"mdi-instagram",
        },
        {
          name:"mdi-youtube",
        }
      ]
    }
  },
}
</script>

<style  lang="scss" scoped>
@import "~/assets/sass/main.scss";

.hide-height::v-deep .v-toolbar__content{
   height: 100px !important;
  }

.hide-height::v-deep .v-app-bar--fixed{
  height: 80px ;
}

</style>




