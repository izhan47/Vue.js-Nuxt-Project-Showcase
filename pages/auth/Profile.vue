<template>
<div class="custom-container mt-10">
  <h2 class="heading space">{{$t('pet_dashboard')}}</h2>
  <v-row >
    <v-col cols="12" md="3" sm="12">
      <div class="profile-sidebar-section">

      </div>
    </v-col>
    <v-col  cols="12" md="9" sm="12">
      <div class="profile-right-section">

      </div>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: "Profile.vue",
  middleware: [ 'auth'],
  data(){
    return{
      userDetail:'',
      cards:[
        {
          icon:'mdi-percent-outline',
          parent_heading:this.$i18n.t('saved_deals'),
          subtitle:'Available Through 2.20.2021',
          title:'Free Dog Treats',
          button_text:'claim',
          path:''
        },
        {
          icon:'mdi-heart',
          parent_heading:'Loved Pet Pros',
          subtitle:'May 22, 2021',
          title:'Froyo Day',
          button_text:this.$i18n.t('sign_up'),
          path:''
        },
        {
          icon:'mdi-star',
          parent_heading:'Saved Pet Care Advice',
          subtitle:this.$i18n.t('name'),
          title:'Review',
          button_text:this.$i18n.t('submit'),
          path:''
        },
        {
          icon:'mdi-paw',
          parent_heading:'My Reviews',
          subtitle:'Available Through 2.20.2021',
          title:'Free Dog Treats',
          button_text:'claim',
          path:''
        },
      ],
    }
  },
  methods:{
  },
  created() {
   this.userDetail=this.$store.state.user.user
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.heading{
    font-size: $font-size-32;
    color: $blue_gem;
    font-weight: $font-weight-500;
    font-style: normal;
    line-height: 40px;
     font-family: $font-family-secondary;
}
.profile-sidebar-section{
  width: 274.45px;
  height: 493.07px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 19px;
}
.profile-right-section{
  width: 804px;
  height: 817.05px;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 19px;
}

</style>
