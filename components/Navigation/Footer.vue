<template>
  <div>
    <v-footer
      color="white"
      class="footer"
    >
      <v-container class="py-0 fill-height">
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12"  md="2" sm="6">
            <v-row>
              <img  class="mr-10 mt-5 img-fluid img-height"
                    src="/images/WagEnabledLogo.jpg" alt="logo">
              <v-col cols="2" class="mr-2 mt-5" v-for="icon in icons" :key="icon">
                <v-btn  icon color="#332e80"> <v-icon>{{icon}}</v-icon></v-btn
                ></v-col>
            </v-row>
          </v-col>
          <v-col cols="12"  md="3" sm="6"></v-col>
<!--
           <v-list dense flat >
                <v-list-item
                  v-for="(item, i) in menuItems"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                >
                  <v-list-item-content>
                    <v-list-item-title class="nav-title" v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list> -->
          <v-col cols="12"  md="6" sm="12"  class="list-height">
            <v-row>
              <v-col cols="12" md="3" sm="12">
                <h2  class="footer-menu-heading mb-3"> {{ $t('product') }}</h2>
                <v-list  flat >
                  <v-list-item
                    v-for="(item, i) in products"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                  >
                    <v-list-item-content>
                      <v-list-item-title class="nav-title footer-items" v-text="item.title" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="3" sm="12">
                <h2  class="footer-menu-heading mb-3"> {{ $t('company') }}</h2>
                <v-list  flat >
                  <v-list-item
                    v-for="(item, i) in company"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                  >
                    <v-list-item-content>
                      <v-list-item-title class="nav-title footer-items" v-text="item.title" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="3" sm="12">
                <h2 class="footer-menu-heading mb-3"> {{ $t('follow') }}</h2>
                <v-list  flat >
                  <v-list-item
                    v-for="(item, i) in social_accounts"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                  >
                    <v-list-item-content>
                      <v-list-item-title class="nav-title footer-items" v-text="item.title" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>

          </v-col>
        </v-row>

      </v-container>

    </v-footer>
    <div class="copy-rights ">
      <h2 class="copy-rights-text">{{ $t('copy_right') }} | {{ $t('terms') }} | {{ $t('privacy') }}</h2>
      <div class="footer-color"></div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Footer.vue",
  data(){
    return{
      products: [
        // { title: 'Home', path: '/home', icon: 'home' },
        { title: this.$i18n.t('find_a_pet_pro'), to:'/'},
        { title: this.$i18n.t('product_reviews'), to:'/'},
        { title: this.$i18n.t('watch_and_learn'), to:'/'},
      ],
      company: [
        { title: this.$i18n.t('about_us'), to:'/about'},
        { title: this.$i18n.t('Contact'), to:'/'},
      ],
      social_accounts: [
        {title: this.$i18n.t('blog'),to: '/blog',},
        {title: this.$i18n.t('facebook'),to: '/blog',},
        {title: this.$i18n.t('twitter'),to: '/blog',},
        {title: this.$i18n.t('instagram'),to: '/blog',},
        {title: this.$i18n.t('youtube'),to: '/blog',},

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

.footer-menu-heading{
  color: $black;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 17px;
  text-align: left;
  margin-left: 1rem;
}
.footer-items{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 17px;
  text-align: left;

}
.copy-rights{
  background-color:$grey-light;
}
.copy-rights-text{
  color: $black;
  font-family: 'Nunito Sans', sans-serif;  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 1rem 2rem;
}

.footer-color{
  color: $green;
  border: 5px solid $green;
  width: 100%;
}
.footer-icon{
  color: $purple;
}

</style>
