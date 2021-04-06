<template>
  <div>
      <v-app id="inspire"  >
        <!--Side Bar Code Start-->
        <v-navigation-drawer
          v-model="drawer"
          v-if="drawer"
          app
        >
          <div class="parent">
            <div class="show_img_mobile">
              <v-img max-width="250" max-height="250" @click="$router.push('/')" src="/images/WagEnabledLogo.jpg" alt="logo"></v-img>
            </div>
            <div class="list-child">
              <v-list dense flat >
                <v-list-item
                  link
                  v-for="(item, i) in menuItems"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                >
                  <v-list-item-content>
                    <v-list-item-title class="nav-title" v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list-item link  to="/auth/Login">
                <v-list-item-content>
                  <v-list-item-title class="nav-title" >{{ $t('sign_in') }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
            <div class="icon-child">
              <v-btn v-for="(icon,i) in icons" :key="i" icon @mouseleave="index = ''" @mouseover="index = i"  :color="index === i ? '#ff8189' : '#332e80'"><v-icon >{{icon.name}}</v-icon></v-btn>
            </div>
          </div>

        </v-navigation-drawer>
        <!--Side Bar Code End-->

        <!--Nav Bar Code STart-->
        <v-app-bar
          app
          color="white"
          dark
          height="110"
          class="remove-shadow"
        >
          <div  class="nav-container">
         <!--     Tab/Mobile screen   Start     -->
          <div class="show_img ">
            <img class="logo"  src="/images/WagEnabledLogo.jpg" alt="logo" />
          </div>
          <div class="drawer-icon">
            <v-app-bar-nav-icon  class="show_drawer app-icon" @click.stop="drawer = !drawer" />
          </div>
          <!--     Tab/Mobile screen End     -->
          <!--     Large screen       -->
          <v-toolbar-title  class="header-title">
            <div>
              <v-btn v-for="(icon,i) in icons" :key="i" icon @mouseleave="index = ''" @mouseover="index = i"  :color="index === i ? '#ff8189' : '#332e80'"><v-icon >{{icon.name}}</v-icon></v-btn>
            </div>
            <div class="app-title">
              <div  class="nav-title  ml-4" @click="$router.push('/about')">{{$t('about_us')}}</div>
              <div   class="nav-title ml-4" @click="$router.push('/reviews')">{{$t('best_pet_products')}}</div>
              <div class=" nav-logo" >
                <img src="/images/WagEnabledLogo.jpg" alt="logo" @click="$router.push('/')" />
              </div>
              <div   class="nav-title ml-4" @click="$router.push('/watch-learn')">{{$t('pet_care_advice')}}</div>
              <div   class="nav-title ml-4" @click="$router.push('/pet-category')">{{$t('find_a_pet_pro')}}</div>
            </div>
            <div>
              <v-btn v-if="$store.state.user.isAuthenticated" outlined rounded class="sign-in-btn"  @click="reset()">{{$t('logout')}}</v-btn>
              <v-btn v-else outlined rounded class="sign-in-btn" @click="$router.push('/auth/Login')">{{$t('sign_in')}}</v-btn>
            </div>
          </v-toolbar-title>
          </div>

        </v-app-bar>
        <!--Nav Bar Code End-->
      </v-app>
  </div>
</template>

<script>
export default {
  name: "Navbar.vue",
  data(){
    return {
      index : '',
      menuItems: [
        {
          title: this.$i18n.t('about_us'),
          to: '/about',
        },
        {
          title: this.$i18n.t('best_pet_products'),
          to: '/reviews',
        },
        { title: this.$i18n.t('pet_care_advice'),
          to: '/watch-learn',},
        { title: this.$i18n.t('find_a_pet_pro'),
          to: '/pet-category',},
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
      ],
      drawer: false,
    }
  },
  created() {
    // window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener('resize', function(event){
      const newWidth = window.innerWidth;
      // const newHeight = window.innerHeight;
      this.drawer = newWidth < 768;
    });
  },
  methods:{
    reset () {
      this.$store.dispatch('reset').then(response => {
        this.$router.push('/auth/Login')
      })
    },
  }
}
</script>

<style  lang="scss" scoped>
@import "~/assets/sass/main.scss";
.remove-shadow::v-deep.v-toolbar:not(.v-sheet--outlined){
  box-shadow: 0px -2px 13px 5px rgb(0 0 0 / 9%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
}
.show_drawer{
  @media (min-width: 769px)   {
  display: none;
  }
}
.app-icon::v-deep .v-icon{
  color: $purple;
}
.sign-in-btn::v-deep.v-btn{
  height: 42px;
  min-width: 65px;
  width:auto;
  padding: 12px 24px;
}
</style>




