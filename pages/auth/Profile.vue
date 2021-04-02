<template>
<div class="custom-container mt-10">
  <div class="heading-section">
    <div class="">
      <h2 class="heading">{{$t('pet_dashboard')}}</h2>
      <p class="description">{{$t('welcome_profile')}}</p>
    </div>
    <div class="">
      <img class="img-height img-fluid" src="/images/Auth/Wag-Enabled-Doggies-1.png" alt="">
    </div>

  </div>
  <v-row class="card-account space">
    <v-col co="12" md="6" sm="12">
      <v-card class="card-radius custom-card-padding">
        <img class="img-fluid img-border" src="/images/Auth/pet.png" alt="">
        <v-card-title class="card-title">{{$t('pet_profile')}}</v-card-title>
          <hr class="dot-line mb-5">
          <b >{{$t('pets')}}</b> <br>
          <span>Truffle, Breed Name, Age 7</span> <br>
          <span>Bean, Breed Name, Age 4</span> <br>
      </v-card>
    </v-col>
    <v-col co="12" md="6" sm="12">
      <v-card class="card-radius custom-card-padding space">
         <v-card-title class="card-title">{{$t('account_info')}}</v-card-title>
        <hr class="dot-line mb-5">
        <b >Human Name</b>: <b>{{userDetail.name}}</b> <br>
        <span>{{$t('address')}}</span>: <span>{{userDetail.city_id}}</span> <br>
        <span>{{$t('email')}}</span>:  <span>{{userDetail.email}}</span> <br>
        <span>{{$t('phone_number')}}</span>: <span>{{userDetail.phone_number}}</span><br>
      </v-card>
      <v-card class="card-radius custom-card-padding">
         <v-card-title class="card-title">{{$t('vet_info')}}</v-card-title>
        <hr class="dot-line mb-5">
        <b >{{userDetail.vet_place_name}}</b> <br>
        <span>{{userDetail.vet_address}}</span> <br>
        <span>{{userDetail.vet_phone_number}}</span> <br>
      </v-card>
    </v-col>
  </v-row>
  <div v-for="card in cards" class="category-section">
    <div class="space heading">
      <v-icon  color="#332e80" size="30">{{card.icon}}</v-icon>
      <h2 class="pl-1">{{card.parent_heading}}</h2>
    </div>
    <hr class="dot-line space">
    <v-card class="card-radius space">
      <div class="custom-card-align">
        <v-btn icon class="card-inner-icon">
          <v-icon  color="#332e80" size="50">{{card.icon}}</v-icon>
        </v-btn>
        <div>
          <v-card-subtitle class="card-sub-heading">{{card.subtitle}}</v-card-subtitle>
          <v-card-title class="card-title">{{card.title}}</v-card-title>
        </div>
        <v-card-actions class="custom-card-padding">
          <v-btn large class=" card-btn white-text" outlined rounded > {{card.button_text}}</v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
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
          parent_heading:this.$i18n.t('deals_offered'),
          subtitle:'Available Through 2.20.2021',
          title:'Free Dog Treats',
          button_text:'claim',
          path:''
        },
        {
          icon:'mdi-ice-cream',
          parent_heading:'Loved Pet Pros',
          subtitle:'May 22, 2021',
          title:'Froyo Day',
          button_text:this.$i18n.t('sign_up'),
          path:''
        },
        {
          icon:'mdi-star',
          parent_heading:'Saved Watch & Learn',
          subtitle:this.$i18n.t('name'),
          title:'Review',
          button_text:this.$i18n.t('submit'),
          path:''
        },
        {
          icon:'mdi-star',
          parent_heading:'Saved Reviews',
          subtitle:this.$i18n.t('name'),
          title:'Review',
          button_text:this.$i18n.t('submit'),
          path:''
        },
        {
          icon:'mdi-percent-outline',
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
.heading-section{
  display: flex;
  justify-content: space-between;
}
.card-account{
  .card-radius{
    border-radius: 20px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;

  }
}
.category-section{
  .card-radius{
    border-radius: 20px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
    background-color: $grey-light;
  }
}
.custom-card-padding{
  padding: 25px;
  b{
    font-family: $font-family-primary;
    font-size: $font-size-16;
    color: $black;
  }
  span{
    font-family: $font-family-primary;
    font-size: $font-size-16;
    color: $black;
  }
}
hr.dot-line {
  border-top: 1px dotted $black;
}
.img-border{
  border-radius: 20px;
}
.custom-card-align{
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
@media (max-width:380px){
  padding: 14px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-wrap: unset;
  align-items: center;
}
}
.card-inner-icon{
  margin-top: 40px;
@media (max-width:380px){
  margin: 10px 0;
}
}
.heading{
  display: flex;
  h2{
    font-size: 25px;
    color: $blue;
    font-weight: 600;
  }
}
.card-sub-heading::v-deep .theme--light.v-card > .v-card__text, .theme--light.v-card .v-card__subtitle{
  color: $green;
  padding: 0 16px 0 16px;
}
.card-sub-heading{
  color: $green;
  font-family:$font-family-primary;
  font-size:$font-size-15;
  font-weight:  $font-weight-400;
}
.card-title{
  color: $blue;
  font-family:$font-family-primary;
  font-size:$font-size-25;
  font-weight:  $font-weight-600;
  text-transform: $text-transform-capitalize;
  padding: 16px 16px 16px 0;
    @media (max-width:380px){
      padding: 5px;
    }
}
.custom-card-padding{
  padding-top: 32px;
@media (max-width:380px){
  padding: 5px;
}
}
.card-btn::v-deep.v-btn{
  min-width: 140px;
  height: 52px;
  font-family:$font-family-primary;
  font-size:$font-size-15;
  font-weight:  $font-weight-600;
  text-transform: $text-transform-uppercase;
  letter-spacing: 0;
  border-color: $blue;
  padding: 10px 50px 010px 50px;
  color: $white;
  background: $blue;
  border-style: solid;
  border-width: 3px 3px 3px 3px;
  box-shadow: 0 0 3px -1px rgb(0 0 0 / 20%);
@media (max-width:380px) {
  min-width: 42px;
  height: 48px;
}

}
.card-btn:hover{
  padding: 10px 50px 010px 50px;
  font-family:$font-family-primary;
  font-size:$font-size-15;
  font-weight:  $font-weight-600;
  text-transform: $text-transform-uppercase;
  background-color: $white;
  color: $blue;
}
</style>
