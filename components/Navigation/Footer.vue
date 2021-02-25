<template>
  <v-footer
    color="white"
    class="footer"
  >
    <v-container class="py-0 fill-height">
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" lg="2" md="2" sm="6">
          <v-row>
            <img  class="mr-10" width="200"
                  src="/images/WagEnabledLogo.jpg" alt="logo">
            <v-col cols="2" class="mr-2 mt-5" v-for="icon in icons" :key="icon">
              <v-btn  icon color="primary"> <v-icon>{{icon}}</v-icon></v-btn
              ></v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="3" md="3" sm="6"></v-col>

        <v-col cols="12" lg="2" md="6" sm="6">
          <h3 > {{ $t('product') }}</h3>
          <v-row>
            <v-col cols="2" class="mr-2 mt-5">
              <v-btn
                class="menu-item"
                v-for="item in products"
                :key="item.title"
                text
              >
                {{ item.title }}
              </v-btn></v-col>
          </v-row>

        </v-col>
        <v-col cols="12" lg="2" md="6" sm="6">
          <h3> {{ $t('company') }}</h3>
          <v-row class="mr-2 mt-5">
            <v-btn
              class="menu-item"
              v-for="item in company"
              :key="item.title"
              text
            >
              {{ item.title }}
            </v-btn>
          </v-row>

        </v-col>
        <v-col cols="12" lg="2" md="6" sm="6">
          <h3> {{ $t('follow') }}</h3>
          <v-row class="mr-2 mt-5">
            <v-btn
              class=" menu-item"
              v-for="item in social_accounts"
              :key="item.title"
              text
            >
              {{ item.title }}
            </v-btn>
          </v-row>

        </v-col>

        <v-col cols="12" lg="1" md="1" sm="6"></v-col>

      </v-row>
    </v-container>
    <v-row class="copy-rights">
      <v-col md="12">
        <p class="copy-rights-text">{{ $t('copy_right') }} | {{ $t('terms') }} | {{ $t('privacy') }}</p>
      </v-col>
      <v-progress-linear
        color="teal"
        height="10"
        value="100"

      ></v-progress-linear>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer.vue",
  data(){
    return{
      products: [
        // { title: 'Home', path: '/home', icon: 'home' },
        { title: this.$i18n.t('find_a_pet_pro')},
        { title: this.$i18n.t('product_reviews')},
        { title: this.$i18n.t('watch_and_learn')},
      ],
      company: [
        { title: this.$i18n.t('about_us')},
        { title: this.$i18n.t('Contact')},
      ],
      social_accounts: [
        {title: this.$i18n.t('blog'),path: '/blog',},
        {title: this.$i18n.t('facebook'),path: '/blog',},
        {title: this.$i18n.t('twitter'),path: '/blog',},
        {title: this.$i18n.t('instagram'),path: '/blog',},
        {title: this.$i18n.t('youtube'),path: '/blog',},

      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        'mdi-youtube',
      ]
    }
  }


}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.footer::v-deep .v-sheet{
  padding: 0;
}

.footer-menu-heading{
  color: $purple;
}
.copy-rights{
  background-color:$grey-light;
  float: left;
}
.copy-rights-text{
  margin-left: 3rem;
  color: #504d4bfc;
}
.progress{
  color: $green;
}

</style>
