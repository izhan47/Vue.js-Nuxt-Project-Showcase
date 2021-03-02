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
                <v-btn  icon color="#332e80"> <v-icon>{{icon}}</v-icon></v-btn
                ></v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="6"></v-col>
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

          <v-col cols="12" lg="2" md="6" sm="6">
            <h2  class="footer-menu-heading"> {{ $t('product') }}</h2>
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
          <v-col cols="12" lg="2" md="6" sm="6">
            <h2  class="footer-menu-heading"> {{ $t('company') }}</h2>
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
          <v-col cols="12" lg="2" md="6" sm="6">
            <h2 class="footer-menu-heading"> {{ $t('follow') }}</h2>
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
      </v-container>

<!--      <v-row class="copy-rights">-->
<!--        <v-col md="12" cols="12" sm="12">-->
<!--          <p class="copy-rights-text">{{ $t('copy_right') }} | {{ $t('terms') }} | {{ $t('privacy') }}</p>-->
<!--          <div class="footer-color"></div>-->
<!--        </v-col>-->

<!--      </v-row>-->
    </v-footer>
    <div class="copy-rights">
      <p class="copy-rights-text">{{ $t('copy_right') }} | {{ $t('terms') }} | {{ $t('privacy') }}</p>
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
.footer::v-deep .v-sheet{
  padding: 0;
}

.footer-menu-heading{
  color: $black;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 17px;
  // text-align: left;
}
.footer-items{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 17px;

}
.copy-rights{
  background-color:$grey-light;
  float: left;
  width: 100%;
}
.copy-rights-text{
  margin-left: 3rem;
  color: #504d4bfc;
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
