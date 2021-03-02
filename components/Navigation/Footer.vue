<template>
  <div>
<!--    <v-footer>-->
<!--&lt;!&ndash;          <v-divider></v-divider>&ndash;&gt;-->
<!--      <v-row >-->
<!--        <v-col  cols="2"  md="2" sm="12">-->
<!--          <div>-->
<!--            <img  width="200"-->
<!--                  src="/images/WagEnabledLogo.jpg" alt="logo">-->
<!--          </div>-->
<!--          <v-btn class="mr-2"  v-for="icon in icons" :key="icon" icon color="#332e80"> <v-icon>{{icon}}</v-icon>-->
<!--          </v-btn>-->
<!--        </v-col>-->

<!--        <v-col   cols="2"  md="2" sm="12" >-->
<!--          <h2 class="footer-menu-heading ml-4"> {{ $t('product') }}</h2>-->
<!--          <v-row>-->
<!--            <v-col cols="6" md="6" sm="12">-->
<!--              <v-list  v-for="item in products"-->
<!--                       :key="item.title"-->
<!--                       color="white">-->
<!--                <v-list-item link :to="item.path">-->
<!--                  <v-list-item-content >-->
<!--                    <v-list-item-title>   {{ item.title }}</v-list-item-title>-->
<!--                  </v-list-item-content>-->
<!--                </v-list-item>-->
<!--              </v-list>-->
<!--              <v-btn-->
<!--                class="menu-item"-->
<!--                v-for="item in products"-->
<!--                :key="item.title"-->
<!--                text-->
<!--              >-->
<!--                {{ item.title }}-->
<!--              </v-btn>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-col>-->
<!--        <v-col cols="2"  md="2" sm="12">-->
<!--          <h2 class="footer-menu-heading ml-4"> {{ $t('company') }}</h2>-->
<!--              <v-btn-->
<!--                class="menu-item"-->
<!--                v-for="item in company"-->
<!--                :key="item.title"-->
<!--                text-->
<!--              >-->
<!--                {{ item.title }}-->
<!--              </v-btn>-->
<!--        </v-col>-->
<!--        <v-col cols="2"  md="2"  sm="12">-->
<!--          <h2 class="footer-menu-heading ml-4"> {{ $t('follow') }}</h2>-->
<!--              <v-btn-->
<!--                class="menu-item"-->
<!--                v-for="item in social_accounts"-->
<!--                :key="item.title"-->
<!--                text-->
<!--              >-->
<!--                {{ item.title }}-->
<!--              </v-btn>-->
<!--        </v-col>-->
<!--      </v-row>-->



<!--    </v-footer>-->
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
        <v-col md="12" cols="12" sm="12">
          <p class="copy-rights-text">{{ $t('copy_right') }} | {{ $t('terms') }} | {{ $t('privacy') }}</p>
        </v-col>
        <v-progress-linear
          color="teal"
          height="10"
          value="100"

        ></v-progress-linear>
      </v-row>
    </v-footer>
  </div>

</template>

<script>
export default {
  name: "Footer.vue",
  data(){
    return{
      products: [
        // { title: 'Home', path: '/home', icon: 'home' },
        { title: this.$i18n.t('find_a_pet_pro'), path:'/'},
        { title: this.$i18n.t('product_reviews'), path:'/'},
        { title: this.$i18n.t('watch_and_learn'), path:'/'},
      ],
      company: [
        { title: this.$i18n.t('about_us'), path:'/'},
        { title: this.$i18n.t('Contact'), path:'/'},
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
  color: $black;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 17px;
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


.footer-icon{
  color: $purple;
}
</style>
