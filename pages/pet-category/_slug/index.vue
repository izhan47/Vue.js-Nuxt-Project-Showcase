<template>
  <div v-if="petDetail">
      <div class="pet-category-container ">
        <v-row >
          <v-col cols="12" md="7" sm="12" v-if="petDetail.cover_image">
            <img class="img-fluid img-height" :src="petDetail.cover_image.image_thumb_full_path" alt="">
          </v-col>
          <v-col cols="12" md="5" sm="12" class="bd-img-container">
            <div class="title-card">
              <p  class="chip-title white-text">
                Homemade Treats and Food,Pet Store,Self-Serve Dog Wash </p>
              <h2>{{petDetail.store_name}}</h2>
            </div>
            <div class="bg-img-section">
            </div>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12" md="9" sm="12" >
            <div  class="category-left-section ">
              <div class="bg-category-img">
              </div>
              <div class="bg-category-section">
                <img v-for="img in petDetail.images" class="img-fluid category-img ml-3" :src="img.image_small_thumb_full_path" alt="">
                <v-rating class="mt-5 mb-5 "
                          :value="petDetail.avg_rating" :length="petDetail.avg_rating" background-color="#00afaa" color="#00afaa" dense readonly size="30"
                ></v-rating>
                <div class="category-section-container">
                  <p class="description  space">{{petDetail.description}}</p>
                </div>
              </div>
            </div>
            <div class="social-category-section mt-10">
              <hr class="dot-line space">
              <div class="space display-section">
                <p class="share-tag">{{ $t('share')}} :</p>
                <div v-for="(item,i) in social"  class="social ml-2">
                  <v-icon color="#332e80" size="15" class="ml-2">{{item.icon}}</v-icon>
                  <span > {{item.title}}</span>
                </div>
              </div>
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
          </v-col>
          <v-col cols="12" md="3" sm="12" >
            <div class="category-right-section">
              <div class="text-center space">
                <v-btn large class=" visit-btn white-text" outlined rounded > {{ $t('visit_website') }}</v-btn>
              </div>
              <div class="card-location mt-10 mb-10">
                <div class="bg-img-section-height">
                  <h2>{{petDetail.email}}</h2>
                  <v-icon>mdi-logout</v-icon>
                </div>
                <v-divider class="divider-section"></v-divider>
                <div class="bg-img-section-height">
                  <h2 class="phone-section">{{petDetail.phone_number}}</h2>
                  <v-icon>mdi-phone</v-icon>
                </div>
                <v-divider class="divider-section"></v-divider>
                <div class="bg-img-section-height">
                  <h2 >Get Directions <br> <h3>{{petDetail.address_line_1}} </h3></h2>
                  <!--              <h3></h3>-->
                  <v-icon>mdi-directions</v-icon>
                </div>
                <v-divider class="divider-section"></v-divider>
              </div>
              <div class="service-section mb-10">
                <h2 class="mb-6">{{$t('services_offered')}}</h2>
                <ul class="service-list" v-for="cat in petDetail.services_offered">
                  <li >{{cat.service}}</li>
                </ul>
              </div>
              <div class="mb-10">
                <GmapMap
                  :center="markers.length ? markers[0] : {lat:10, lng:10}"
                  :zoom="7"
                  map-type-id="terrain"
                  class="map-location"
                >
                  <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m"
                  />
                </GmapMap>
              </div>
<!--              <div class="operation-section">-->
<!--                <h2>{{$t('hours_of_operation')}}</h2>-->
<!--                <div v-for="time in petDetail.timetable" class="mb-2">-->
<!--                  <span>{{time.day}}</span>-->
<!--                  <span class="separator"></span>-->
<!--                  <span v-if="time.open || time.close">{{time.open}}-{{time.close}}</span>-->
<!--                  <span v-else>00:00:00 - 00:00:00 </span>-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="find-pet-section-heading text-center">
        <h2 class="mb-8">{{$t('find_more_pet_pros')}}</h2>
      </div>
      <!--  card-section-start   -->
      <div class="custom-height custom-container">
        <v-row>
          <v-col cols="12" md="4" sm="12" v-for="(data,i) in petProData.slice(0,3)"   :key="i"  class="custom-margin">
            <pet-category-card
              :item="data"
            ></pet-category-card>
          </v-col>
        </v-row>
      </div>
      <!--  card-section-end   -->
  </div>
</template>

<script>
import PetCategoryCard from "@/components/PetCategoryCard";
export default {
  name: "index.vue",
  components:{ PetCategoryCard},
  data(){
    return{
      showLoader:false,
      petDetail:'',
      social:[
        {
          icon:'mdi-facebook',
          title: this.$i18n.t('facebook'),
          path:'',
        },
        {
          icon:'mdi-twitter',
          title: this.$i18n.t('twitter'),
          path:'',
        },
        {
          icon:'mdi-pinterest',
          title: this.$i18n.t('pinterest'),
          path:'',
        },
        {
          icon:'mdi-email',
          title: this.$i18n.t('email'),
          path:'',
        },

      ],
      index : '',
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
          parent_heading:'Events',
          subtitle:'May 22, 2021',
          title:'Froyo Day',
          button_text:this.$i18n.t('sign_up'),
          path:''
        },
        {
          icon:'mdi-star',
          parent_heading:this.$i18n.t('reviews'),
          subtitle:this.$i18n.t('name'),
          title:'Review',
          button_text:this.$i18n.t('submit'),
          path:''
        },
      ],
      markers:[
        { "lat": -37.8265057, "lng": 144.7464312 },
        { "lat": -60.79249218273802, "lng": 98.52131582979746 },
        { "lat": -57.3633598628284, "lng": -149.33024667020254 },
      ],
    }
  },
  computed:{
    URL(){
      return this.$route.params.slug
    },
    petProData(){
      return this.$store.state.pet_pro_list
    }
  },
  created() {
    this.getPetDetail()
  },
  methods:{
    getPetDetail(){
      this.$store.commit('SHOW_LOADER', true)
      this.$store.dispatch('singlePetDetail',this.URL).then( response => {

        this.$store.commit('SHOW_LOADER', false)
        this.petDetail = response.data.data.per_pro
        console.log('sads',this.petDetail)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.pet-category-container{
  max-width: 1500px;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media (max-width:768px) {
    padding: 12px;
  }
}
.bd-img-container{
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
}
.bg-img-section{
  margin-left:39%;
  background-color:$cultured;
  border-radius: 20px 20px 20px 20px;
  position: absolute;
  bottom: -100px;
  z-index: -1;
  width: 390px;
  height: 390px;
}
@media (max-width: 767px) {
  .bg-img-section {
    display: none;
  }
  .chip-title{
    max-width: 300px;
  }
  .bg-category-img{
    display:none ;
  }
}
.img-section{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.img-height{
  max-height: 580px;
  border-radius: 0 20px  20px 0;
}
.chip-title{
  background-color: $green;
  color: $white;
  font-family:$font-family-primary;
  font-size: $font-size-15;
  letter-spacing: 0;
  font-weight: $font-weight-400;
  padding: 5px 20px ;
  border-radius: 15px;
  margin:auto ;
}
.title-card{
  h2{
    text-align: center;
    color: $purple;
    font-size:$font-size-65;
    font-weight:  $font-weight-400;
    text-transform: $text-transform-capitalize;
    font-style: normal;
    text-decoration: underline;
    line-height: 105px;
    letter-spacing: 0px;
    text-shadow: -3px 2px 5px $text-shadow-primary;
  }
}
.category-left-section{
  margin-top: 150px;
  display: flex;
  position: relative;
  z-index: 1;
}
.bg-category-img{
  position: absolute;
  z-index: -1;
  height: 600px;
  width: 700px;
  margin: 0;
  padding: 0;
  background-color: $cultured;
  border-radius: 20px;
}
.bg-category-section{
  padding: 0 52px;
  @media (max-width: 767px) {
    padding: 0;
    text-align: center;

  }
}
.category-img{
  max-height: 230px;
  border-radius: 10px;
}
.category-section-container{
  max-width: 965px;
}
.description{
  color: $mostly-black;
  font-size: $font-size-20;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 35px;
  letter-spacing: 0;
}
.social-category-section{
  max-width: 965px;
  padding: 0 0 0 20px;
  @media (max-width:768px) {
    padding: 0 ;
    }

}
hr.dot-line {
  border-top: 1px dotted $black;
}
.display-section{
  display: flex;
  flex-wrap: wrap;
}
.share-tag{
  color: $mostly-black;
  font-family:$font-family-primary;
  font-size:$font-size-16;
  font-weight:  $font-weight-600;
  text-transform: $text-transform-capitalize;
  font-style: normal;
  text-decoration: none;
  line-height: 24px;
  letter-spacing: 0;
}
.social{
  color: $blue;
  font-family:$font-family-primary;
  font-size:$font-size-16;
  font-weight:  $font-weight-600;
  text-transform: $text-transform-capitalize;
  font-style: normal;
  text-decoration: none;
  letter-spacing: 0;
  cursor: pointer;
}
.social:hover{
  color: $pink;
}
.heading{
  display: flex;
  h2{
    font-size: 25px;
    color: $blue;
    font-weight: 600;
  }
}
.category-section{
  .card-radius{
    border-radius: 20px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
    background-color: $cultured;
  }
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
  text-align: center;
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
.category-right-section{
  margin-top: 150px;
  padding-left: 50px;
  @media (max-width:768px) {
    padding: 0;
  }
  @media only screen and (max-width:1440px){
    padding-left: 0;
    padding-right: 20px;
  }
}
.visit-btn::v-deep.v-btn{
  min-width: 100px;
  height: 52px;
  padding: 0 50px 0 50px;
  font-family:$font-family-primary;
  font-size:$font-size-15;
  font-weight:  $font-weight-600;
  text-transform: $text-transform-capitalize;
  background-color: $blue;
  color: $white;
  letter-spacing: 0;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: $blue;
  border-radius: 100px 100px 100px 100px;
}
.visit-btn:hover{
  background-color: $white;
  color: $blue;
}
.card-location{
  border-style: solid;
  border-width: 3px 2px 0 2px;
  border-color: $cultured;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
}
.bg-img-section-height{
  display: flex;
  justify-content: space-around;
  h2{
    padding: 10px;
    color: $green;
    font-family: $font-family-primary;
    font-size: $font-size-18;
    font-weight: $font-weight-bold;
    line-height: 2.5em;
    cursor: pointer;
  }
  h3{
    color: $dark-grey;
    font-family: $font-family-primary;
    font-size: $font-size-12;
    font-weight: $font-weight-bold;
    cursor: pointer;
  }
  .phone-section{
    color: $mostly-black;
    font-family: $font-family-primary;
    font-size: $font-size-18;
    font-weight: $font-weight-bold;
  }
}
.divider-section{
  width: 90%;
  margin: 0 auto;
}
.service-section{
  h2{
    color: $pink;
    font-weight: $font-weight-600;
    font-size: $font-size-25;
    font-family: $font-family-primary;
  }
  .service-list{
    margin:  0 0 0 3em;
    padding: 0;
    li{
      color: $purple;
      font-family: $font-family-primary;
      font-size: $font-size-18;
      font-weight: $font-weight-600;

    }
  }
}
.map-location{
  width: 295px;
  height: 300px
}
.operation-section{
  h2{
    color: $pink;
    font-weight: $font-weight-400;
    font-size: $font-size-25;
    line-height: 2.5em;
  }
  span{
    color: $purple;
    font-weight: $font-weight-500;
    font-size: $font-size-15;
    &.separator{
      border-bottom-style: dashed;
      border-bottom-width: 2px;
      border-bottom-color: $purple;
      margin-left: 10px;
      margin-right: 10px;
      width: 60px;
      display: inline-block;
    }
  }

}
.find-pet-section-heading{
  color: $purple;
  font-family: $font-family-primary;
  font-size:$font-size-50;
  font-weight: $font-weight-600;
  text-transform: $text-transform-capitalize;
  text-shadow: -3px 2px 5px $text-shadow-primary;
  line-height: 2.5em;
}
</style>
