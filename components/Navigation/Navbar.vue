<template>
  <div>
      <v-app id="inspire"  >
        <!--Side Bar Code Start-->
        <v-navigation-drawer
          v-model="drawer"
          v-if="drawer"
          app
          class="nav-draw"
        >
          <div class="parent">
            <div class="show_img_mobile">
              <v-img max-width="250" max-height="250" @click="$router.push('/')" src="/images/WagEnabledLogo.jpg" alt="logo"></v-img>
            </div>
            <div class="list-child">
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
              </v-list>

              <!-- <v-list dense flat v-for="item in menuItems"  :key="item.title">
                <v-list-item link :to="item.path">
                  <v-list-item-content>
                    <v-list-item-title class="nav-title">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list> -->
              <v-list-item link  to="/sign_in">
                <v-list-item-content>
                  <v-list-item-title class="nav-title">{{ $t('sign_in') }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
            <div class="icon-child">
              <v-btn  v-for="(icon,i) in icons" :key="i" icon color="#332e80"> <v-icon>{{icon.name}}</v-icon></v-btn>
            </div>
          </div>

        </v-navigation-drawer>
        <!--Side Bar Code End-->

        <!--Nav Bar Code STart-->
        <v-app-bar
          app
          color="white"
          dark
          height="80"

        >
          <div  class="nav-container">
          <div class="show_img ">
            <img class="logo"  src="/images/WagEnabledLogo.jpg" alt="logo" />
          </div>
          <div class="icon-position">
            <v-app-bar-nav-icon  class="show_drawer app-icon" @click.stop="drawer = !drawer" />
          </div>

          <v-toolbar-title  class="header-title">
            <div>
              <v-btn v-for="(icon,i) in icons" :key="i" icon color="#332e80"> <v-icon>{{icon.name}}</v-icon></v-btn>
            </div>
            <div class="app-title">
              <v-btn  text class="nav-title " @click="$router.push('/about')">{{$t('about_us')}}</v-btn>
              <v-btn  text class="nav-title" @click="$router.push('/reviews')">{{$t('reviews')}}</v-btn>
              <div class="mr-5 ml-5 pr-5 pl-5 nav-logo" >
                <img src="/images/WagEnabledLogo.jpg" alt="logo" />
              </div>
              <v-btn  text class="nav-title">{{$t('watch_and_learn')}}</v-btn>
              <v-btn  text class="nav-title">{{$t('find_a_pet_pro')}}</v-btn>
            </div>
            <div>
              <v-btn outlined rounded class="sign-in-btn mt-2">{{$t('sign_in')}}</v-btn>
            </div>

            <!--            <div v-for="item in menuItems"  :key="item.title">-->
<!--              <v-img-->
<!--                v-if="item.title===''"  class="mr-8" width="100"-->
<!--                src="/images/WagEnabledLogo.jpg" alt="logo"> </v-img>-->
<!--              <v-btn  text class="nav-title">{{item.title}}</v-btn>-->
<!--            </div>-->
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
      menuItems: [
        // { title: 'Home', path: '/home', icon: 'home' },
        {
          title: this.$i18n.t('about_us'),
          to: '/about',
        },
        {
          title: this.$i18n.t('reviews'),
          to: '/reviews',
        },

        // {
        //   title: '',
        //   to: '/',
        // },

        { title: this.$i18n.t('watch_and_learn'),
          to: '/watch_and_learn',},
        { title: this.$i18n.t('find_a_pet_pro'),
          to: '/find_a_pet_pro',},
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
      const newHeight = window.innerHeight;
      console.log(newWidth,'screen size', newHeight)
      this.drawer = newWidth < 768;
      console.log(this.drawer)
    });
  },
  mounted() {
    this.$store.commit('Drawer/UPDATE_DRAWER_VALUE',this.drawer)
  },
  methods:{
    // handleWindowResize() {
    //   console.log('screen size', window.innerWidth)
    //   this.drawer =  window.innerWidth < 769;
    //   console.log('val',this.drawer)
    //   this.$store.commit("Drawer/UPDATE_DRAWER_VALUE",this.drawer);
    // },
  }
}
</script>

<style  lang="scss" scoped>
@import "~/assets/sass/main.scss";
.show_drawer{
  @media (min-width: 769px)   {
  display: none;
  }
}
.icon-position{
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 769px)   {
    display: none;
  }

}
.app-icon::v-deep .v-icon{
  color: $purple;
}
.app-title{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.show_img {
 @media (min-width: 769px)   {
      display: none;
    }
    img{
      max-width: 100%;
      height: auto;
    }
  }
.nav-logo{
  img{
    max-width: 100%;
    height: 70px;
  }


}
.header-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px)  {
    display: none;
  }
}
.parent{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.list-child{
  flex: 1;
}
.icon-child{
text-align: center;
  padding-bottom: 1rem;
}
.show_img_mobile{
  padding: 1rem;
  align-items: center;
}
</style>




