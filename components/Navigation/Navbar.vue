<template>
  <div>
      <v-app id="inspire"  >
        <!--Side Bar Code Start-->
        <v-navigation-drawer
          v-model="drawer"
          app
        >
          <div class="parent">
            <div class="list-child">
              <v-list dense flat v-for="item in menuItems"  :key="item.title">
                <v-list-item link :to="item.path">
                  <v-list-item-content>
                    <v-list-item-title class="nav-title">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
          height="100"
        >
          <div class="show_img">
            <v-img max-width="150" max-height="150" src="/images/WagEnabledLogo.jpg" alt="logo"></v-img>
          </div>
          <div class="icon-position">
            <v-app-bar-nav-icon  class="show_drawer app-icon" @click.stop="drawer = !drawer" />
          </div>

          <v-toolbar-title  class="header-title">
            <div>
              <v-btn v-for="(icon,i) in icons" :key="i" icon color="#332e80"> <v-icon>{{icon.name}}</v-icon></v-btn>
            </div>
            <div class="app-title">
              <v-btn  text class="nav-title">{{$t('about_us')}}</v-btn>
              <v-btn  text class="nav-title">{{$t('reviews')}}</v-btn>
              <div class="mr-5 ml-5 pr-5 pl-5" >
                <v-img max-width="100" max-height="100" src="/images/WagEnabledLogo.jpg" alt="logo"></v-img>
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
          path: '/about',
        },
        {
          title: this.$i18n.t('reviews'),
          path: '/reviews',
        },

        // {
        //   title: '',
        //   path: '/',
        // },

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
      ],
      drawer: false,
    }
  },
  mounted() {
    window.addEventListener('resize', function(event){
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      console.log(newWidth,'screen size', newHeight)
      this.drawer = newWidth < 768;
      console.log(this.drawer)
    });
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
.nav-title{
  color: $purple;
  cursor: pointer;
}
.nav-title:hover{
  color: $pink;
  //Pulse Grow Effect
}
.sign-in-btn{
  color: $purple;
  background-color: $white;
}
.sign-in-btn:hover{
  color: $white;
  background-color: $purple;
  //Pulse Grow Effect

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

}
</style>




