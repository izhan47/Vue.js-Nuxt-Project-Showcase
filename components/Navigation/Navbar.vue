<template>
<div>
<!--  {{ $t('home') }}-->
  <v-app>
    <v-toolbar >
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn
          color="success"
          v-for="item in menuItems"
          :key="item.title"
         >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</div>
</template>

<script>
export default {
  name: "Navbar.vue",
  data(){
    return {
      appTitle: 'Wagenabled App',
      sidebar: false,
      menuItems: [
        // { title: 'Home', path: '/home', icon: 'home' },
        { title: this.$i18n.t('about_us')},
        { title: this.$i18n.t('find_a_pet_pro')},
        { title: this.$i18n.t('watch_and_learn')},
        { title: this.$i18n.t('login')},
        { title: this.$i18n.t('sign_up')},

      ]
    }
  },
}
</script>

<style scoped>

</style>




