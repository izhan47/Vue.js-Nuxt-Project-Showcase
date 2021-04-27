<template>
<div class="custom-container mt-10">
  <h2 class="heading space">{{$t('pet_dashboard')}}</h2>
  <v-row >
    <v-col cols="12" md="3" sm="12">
      <div class="profile-sidebar-section">
        <v-list class="mt-4 mb-4">
          <v-list-item @click="showTab=1">
            <v-list-item-title >
              {{$t('pet_profile')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="showTab=2">
            <v-list-item-title>
              {{$t('account')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="showTab=3">
            <v-list-item-title>
              {{$t('my_vet_info')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="showTab=4">
            <v-list-item-title>
              {{$t('my_business')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="showTab=5">
            <v-list-item-title>
              {{$t('save_deals')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="showTab=6">
            <v-list-item-title>
              {{$t('loved_pet_pros')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="showTab=7">
            <v-list-item-title>
              {{$t('saved_pet_care_advice')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="showTab=8">
            <v-list-item-title>
              {{$t('my_reviews')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="showTab=9">
            <v-list-item-title>
              {{$t('deals_offered')}}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-col>
    <v-col  cols="12" md="9" sm="12">
      <div class="profile-right-section">
        <pet-profile v-if="showTab===1"></pet-profile>
        <account v-if="showTab===2"></account>
        <vet-info v-if="showTab===3"></vet-info>
        <business v-if="showTab===4"></business>
        <saved-deals v-if="showTab===5"></saved-deals>
        <loved-pet-pros v-if="showTab===6"></loved-pet-pros>
        <saved-pet-care v-if="showTab===7"></saved-pet-care>
        <reviews v-if="showTab===8"></reviews>
        <deals-offered v-if="showTab===9"></deals-offered>
      </div>
    </v-col>
  </v-row>
</div>
</template>

<script>
import PetProfile from "@/components/Profile/PetProfile";
import Account from "@/components/Profile/Account";
import VetInfo from "@/components/Profile/VetInfo";
import Business from "@/components/Profile/Business/Business";
import SavedDeals from "@/components/Profile/SavedDeals";
import LovedPetPros from "@/components/Profile/LovedPetPros";
import SavedPetCare from "@/components/Profile/SavedPetCare";
import Reviews from "@/components/Profile/Reviews";
import DealsOffered from "@/components/Profile/DealsOffered";
export default {
  name: "Profile.vue",
  middleware: [ 'auth'],
  components:{PetProfile,Account,VetInfo,Business,SavedPetCare,SavedDeals,LovedPetPros,Reviews,DealsOffered},
  data(){
    return{
      userDetail:'',
      showTab:2,
      cards:[
        {
          icon:'mdi-percent-outline',
          parent_heading:this.$i18n.t('saved_deals'),
        },
        {
          icon:'mdi-heart',
          parent_heading:'Loved Pet Pros',

        },
        {
          icon:'mdi-star',
          parent_heading:'Saved Pet Care Advice',

        },
        {
          icon:'mdi-paw',
          parent_heading:'My Reviews',

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
  min-width: 250px;
  min-height: 485px;
  background: $white;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 19px;
}
.profile-right-section{
  min-width: 290px;
  height: 817.05px;
  background: $white;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 19px;
}

</style>
