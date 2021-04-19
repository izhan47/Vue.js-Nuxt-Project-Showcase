<template>
  <div v-if="petDetail">
      <div class="pet-category-container ">
        <v-row >
          <v-col cols="12" md="7" sm="12" v-if="petDetail.cover_image">
            <img class="img-fluid img-height" :src="petDetail.cover_image.image_thumb_full_path" alt="">
          </v-col>
          <v-col cols="12" md="5" sm="12" class="bd-img-container">
            <div class="title-card">
               <span class="chip-title white-text" v-for="(cat,c) in petDetail.categories" :key="c"> {{cat.name}}
                  <span v-if="i !== petDetail.categories.length-1"> | </span>
               </span>
              <div class="love-section">
                <h2>{{petDetail.store_name}}</h2>
                <div class="mt-8">
                  <img v-if="is_liked===0" class="heart-img" src="/images/gray-love.svg" alt="" @click="like">
                  <img v-else class="heart-img" src="/images/pink-love.svg" alt="" @click="like">
                </div>
              </div>
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
                <img v-for="(img,i) in petDetail.images" :key="i" class="img-fluid category-img ml-3" :src="img.image_small_thumb_full_path" alt="">
                <div class="product-rating">
                  <v-rating class="mt-5 mb-5 " :value="4" length="1"
                            background-color="#00afaa" color="#00afaa" dense readonly size="30"
                  ></v-rating>
                  <span class="product-rating-child">{{petDetail.avg_rating}}</span>
                </div>

                <div class="category-section-container">
                  <p class="description  space">{{petDetail.description}}</p>
                </div>
              </div>
            </div>
            <div class="social-category-section mt-10">
              <hr class="dot-line space">
              <div class="space display-section">
                <p class="share-tag">{{ $t('share')}} :</p>
                <div v-for="(item,i) in social" :key="i"  class="social ml-2">
                  <v-icon color="#332e80" size="15" class="ml-2">{{item.icon}}</v-icon>
                  <span > {{item.title}}</span>
                </div>
              </div>

              <!--  Deals Offerd  -->
              <div class="category-section">
                <div class="space heading">
                  <v-icon  color="#332e80" size="30">mdi-percent-outline</v-icon>
                  <h2 class="pl-1">{{$t('deals_offered')}}</h2>
                </div>
                <hr class="dot-line space">
                <div v-if="petDetail.deals.length" >
                <v-card class="card-radius space"   v-for="(deal,d) in petDetail.deals" :key="d" >
                  <div class="custom-card-align">
                    <v-btn icon class="card-inner-icon">
                      <v-icon  color="#332e80" size="50">mdi-percent-outline</v-icon>
                    </v-btn>
                    <div>
<!--                      <v-card-subtitle class="card-sub-heading">{{card.subtitle}}</v-card-subtitle>-->
                      <v-card-title class="card-title mt-6">{{deal.deal}}</v-card-title>
                    </div>
                    <v-card-actions class="custom-card-padding">
<!--                      <v-dialog-->
<!--                        v-model="dialog"-->
<!--                        persistent-->
<!--                        max-width="490"-->
<!--                      >-->
<!--                        <template v-slot:activator="{ on, attrs }">-->
<!--                          <v-btn color="#1B3659" dark rounded x-large v-bind="attrs" v-on="on"> {{$t('claim')}}</v-btn>-->
<!--                        </template>-->
<!--                        <v-card>-->

<!--                          <v-card-subtitle class="headline">-->
<!--                            To use, show this at the store.-->
<!--                          </v-card-subtitle>-->
<!--                          <span class="ml-5 mt-2">Deal</span>-->
<!--                          <v-card-title>{{deal.deal}}</v-card-title>-->
<!--                          <hr class="dot-line space">-->
<!--                          <v-card-text>Fine Print</v-card-text>-->
<!--                          <v-card-text>{{deal.fine_print}}</v-card-text>-->
<!--                          <v-card-actions>-->
<!--                            <v-spacer></v-spacer>-->
<!--                            <v-btn-->
<!--                              color="#1B3659"-->
<!--                              text-->
<!--                              @click="dialog = false"-->
<!--                            >-->
<!--                              {{$t('cancel')}}-->
<!--                            </v-btn>-->
<!--                            <v-btn-->
<!--                              color="#1B3659" dark class=" white-text"-->
<!--                              rounded x-large-->
<!--                              @click="dialog = false"-->
<!--                            >-->
<!--                              {{$t('claimed_deal')}}-->
<!--                            </v-btn>-->
<!--                          </v-card-actions>-->
<!--                        </v-card>-->
<!--                      </v-dialog>-->
                      <v-btn v-if="is_claimed===0"  large class=" card-btn white-text" outlined rounded @click="claim(deal)"> {{$t('claim')}}</v-btn>
                      <v-btn v-else  large class=" card-btn white-text" outlined rounded readonly> {{$t('claimed')}}</v-btn>

                    </v-card-actions>
                  </div>
                </v-card>
                </div>
                <div class="not-found space"   v-else> {{$t('no_deals_found')}}</div>
              </div>
              <!--  Event -->
              <div  class="category-section">
                <div class="space heading">
                  <v-icon  color="#332e80" size="30">mdi-percent-outline</v-icon>
                  <h2 class="pl-1">{{$t('events')}}</h2>
                </div>
                <hr class="dot-line space">
                <div v-if="petDetail.events.length">
                <v-card class="card-radius space" >
                  <div class="custom-card-align" v-for="(event,e) in petDetail.events" :key="e">
                    <v-btn icon class="card-inner-icon">
                      <v-icon  color="#332e80" size="50">mdi-percent-outline</v-icon>
                    </v-btn>
                    <div>
                      <v-card-title class="card-title mb-2">{{event.name}}</v-card-title>
                      <v-card-subtitle class="card-sub-heading mb-1">{{event.formated_event_start_date}} - {{event.formated_event_end_date}} </v-card-subtitle>
                      <span class="card-description">{{event.formated_event_start_time}} - {{event.formated_event_end_time}} at {{event.address}} </span>

                    </div>
                    <v-card-actions class="custom-card-padding">
                      <v-btn   large class=" card-btn white-text" outlined rounded @click="getInfo(event.url)"> {{$t('info')}}</v-btn>
                    </v-card-actions>
                  </div>
                </v-card>
                </div>
                <div v-else class="not-found space"> {{$t('no_events_found')}}</div>

              </div>

              <!-- Reviews     -->
              <div  class="category-section">
                <div class="space heading">
                  <v-icon  color="#332e80" size="30">mdi-star</v-icon>
                  <h2 class="pl-1">{{$t('reviews')}}</h2>
                </div>
                <hr class="dot-line space">
                <v-row class="reviews-block">
                  <v-col cols="12" md="3" sm="12" class="">
                    <div class="reviews-section">
                      <v-icon  color="white" size="40">mdi-star</v-icon>
                      <span class="rating">{{petDetail.avg_rating}}</span>
                      <p class="count-review">{{reviews_count}}</p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="9" sm="12" class="reviews-comment-section" v-if="$store.state.user.isAuthenticated">
                    <v-form   ref="form">
                      <div class="mb-4">
                        <div class=" reviews-icon">
                            <div class="name-title" v-if="userDetail">
                              <input name="name" v-model="userDetail.name" placeholder="Name" disabled="" type="text" autocomplete="off" class="review-message" value="">
                            </div>
                            <div class="review-rating">
                              <v-rating
                                v-model="form.rate"
                                color="#332e80"
                                background-color="#332e80 lighten-3"
                                half-increments
                                hover
                                large
                                required
                              ></v-rating>
                            </div>
                        </div>
                      </div>
                      <div class="mb-4">
                        <div class="">
                          <v-textarea
                            outlined
                            name="input-7-4"
                            :label="$t('review')"
                            v-model="form.description"
                            required
                            :rules="rules.description"
                            rows="3"
                            row-height="20"
                          ></v-textarea>
                        </div>
                      </div>
                      <div class="review-submit">
                        <v-btn rounded x-large color="#332e80" class="review-submit-btn" @click="submitReview">{{$t('submit')}}</v-btn>
                      </div>
                    </v-form>
                  </v-col>
                  <nuxt-link v-else  to="/auth/login" class="unset-underline custom-container">
                  <v-btn rounded   class=" card-btn white-text"> {{$t('review_error')}}</v-btn>
                  </nuxt-link>
                </v-row>
              </div>


              <!-- Review List  -->
              <div class="reviews-details-block" v-if="reviewDetail.length">
                <div class="reviews-details-list-main" v-for="review in reviewDetail ">
                  <div class="clearfix">
                    <div class="reviews-use-pic">
                      <v-img v-if="review.user && review.user.profile_image_thumb_full_path"  :src="review.user.profile_image_thumb_full_path"></v-img>
                      <img v-else src="/images/placeholder.png" alt="">
                    </div>
                  </div>
                  <div class="reviews-details">
                    <div  v-if="userDetail && userDetail.id === review.user.id" class="delete-icon" @click="deleteReview(review.id)">
                      <v-icon>mdi-delete</v-icon>
                    </div>
                    <div class="reviews-star-details">

                      <h4 class="rate-text">{{review.rate}}<span>/5</span></h4>
                      <p class="date-text">{{review.formated_created_at}}</p>
                    </div>
                    <p class="comments-text">{{ review.description }}</p>
                    <p class="user-name">{{review.name}}</p>
                  </div>
                </div>
              </div>
              <div v-else class="reviews-details-block custom-container text-center">{{$t('no_reviews_found')}}</div>

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
              <div class="service-section mb-10" v-if="petDetail.services_offered.length">
                <h2 class="mb-6">{{$t('services_offered')}}</h2>
                <ul class="service-list" v-for="(service,s) in petDetail.services_offered" :key="s">
                  <li >{{service.service}}</li>
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
              <div class="operation-section">
                <h2>{{$t('hours_of_operation')}}</h2>
                <div v-for="(time,t) in petDetail.timetable" :key="t" class="mb-2">
                  <span>{{time.day}}</span>
                  <span class="separator"></span>
                  <span v-if="time.open || time.close">{{time.open}}-{{time.close}}</span>
                  <span v-else>00:00:00 - 00:00:00 </span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    <!--  card-section-start   -->
    <div class="find-pet-section-heading text-center">
        <h2 class="mb-8">{{$t('find_more_pet_pros')}}</h2>
      </div>
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
      dialog: false,
      showLoader:false,
      petDetail:'',
      is_liked:'',
      is_claimed:'',
      reviews_count:'',
      reviewDetail:'',
      form:{
        description:'',
        rate:0,
      },
      rules: {
        rate: [val => (val || '').length > 0 || 'This rate field is required'],
        description: [val => (val || '').length > 0 || 'This description field is required'],
      },
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
    this.getReviews()
    this.userDetail=this.$store.state.user.user
  },
  methods:{
    getPetDetail(){
      this.$store.commit('SHOW_LOADER', true)
      this.$store.dispatch('singlePetDetail',this.URL).then( response => {
        this.$store.commit('SHOW_LOADER', false)
        let res=response.data.data
        this.is_liked=res.is_liked
        this.petDetail = res.per_pro
      })
    },
   async like(){
      if (!this.$store.state.user.isAuthenticated) {
        this.$store.commit('SET_CURRENT_PATH',this.$route.path)
        return this.$router.push('/auth/Login')
        }
      else {
          let loader = true
          this.$store.commit('SHOW_LOADER', loader)
          await this.$store.dispatch('like',this.URL).then(response => {
            this.$store.commit('SHOW_LOADER', loader=false)
            this.$store.commit('SHOW_SNACKBAR', {snackbar:true, color:'green', message:response.data.message})
            if(this.is_liked===0){
              this.is_liked=1
            }else{
              this.is_liked=0
            }

          })
        }
    },
   async claim(deal){
     if (!this.$store.state.user.isAuthenticated) {
       this.$store.commit('SET_CURRENT_PATH',this.$route.path)
       return this.$router.push('/auth/Login')
     }
     else {

       let data={
         slug: this.petDetail.slug,
         pet_deal_id: deal.id
       }

       this.$store.commit('SHOW_LOADER', true)
       await this.$store.dispatch('claim',data).then(response => {
         this.$store.commit('SHOW_LOADER', false)
         this.$store.commit('SHOW_SNACKBAR', {snackbar:true, color:'green', message:response.data.message})
         if(this.is_claimed===0){
           this.is_claimed=1
         }else{
           this.is_claimed=0
         }
       })
     }
   },
   getInfo(url){
      window.location=url
   },
   async submitReview(){
     if (!this.$store.state.user.isAuthenticated) {
       this.$store.commit('SET_CURRENT_PATH',this.$route.path)
       return this.$router.push('/auth/Login')
     }
     else {
       let loader = true
       let data={
         slug: this.petDetail.slug,
         form: this.form
       }
       if(this.$refs.form.validate()) {
         this.$store.commit('SHOW_LOADER', loader)
         await this.$store.dispatch('review',data).then(response => {
           this.$store.commit('SHOW_LOADER', loader=false)
           this.$store.commit('SHOW_SNACKBAR', {snackbar:true, color:'green', message:response.data.message})
           data.form.rate=0
           data.form.description=''
           this.getReviews()
         })
       }

     }
   },
   async getReviews(){
     this.$store.commit('SHOW_LOADER', true)
    await this.$store.dispatch('getReview',this.URL).then( response => {
       this.$store.commit('SHOW_LOADER', false)
       this.reviews_count=response.data.data.reviews_count
       this.reviewDetail=response.data.data.pet_pro_reviews

     })
   },
   async deleteReview(id){
     if (!this.$store.state.user.isAuthenticated) {
       this.$store.commit('SET_CURRENT_PATH',this.$route.path)
       return this.$router.push('/auth/Login')
     }
     else {
       let data = {
         slug: this.petDetail.slug,
         id: id
       }
       this.$store.commit('SHOW_LOADER', true)
       await this.$store.dispatch('deleteReview', data).then(response => {
         this.$store.commit('SHOW_LOADER', false)
         this.$store.commit('SHOW_SNACKBAR', {snackbar: true, color: 'green', message: response.data.message})
         this.getReviews()
       })
     }
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
    @media(max-width:374px) {
      font-size:$font-size-55;
    }
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
.product-rating{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.product-rating-child{
  margin: 27px 0;
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
  font-weight: $font-weight-400;
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
.card-description{
  line-height: 24px;
  font-size: $font-size-18;
  text-align: justify;
  margin-top: 6px;
  font-weight: $font-weight-300;
  //color: $dark-charcoal;
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
      font-weight: $font-weight-400;

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

.love-section{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.heart-img{
  width: 45px;
  height: 45px;
  margin: auto;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.not-found{
  font-size: $font-size-20;
  font-family: $font-family-primary;
  font-weight: $font-weight-300;
  color:$light-charcoal;
  line-height: 30px;
  padding: 10px;

}
.reviews-section{
  background:  $purple;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  min-width: 150px;

}
.rating{
  font-size: $font-size-50;
  color: white;
  line-height: normal;
  font-family: $font-family-primary;
  font-weight: $font-weight-normal;
}
.count-review{
  font-family: $font-family-primary;
  font-weight: $font-weight-normal;
  color: white;
  font-size: $font-size-15;
}
.reviews-comment-section{
  flex: auto;
  width: calc(100% - 140px);
}
.reviews-icon{
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px){
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

}
.review-rating{
  //display: inline-flex;
  justify-content: space-between;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.name-title{
  width: 100%;
}
.review-message{
  width: 100%;
  font-size: $font-size-14;
  color: $dark-charcoal;
  font-family: $font-family-primary;
  font-weight: $font-weight-normal;
  background: $white;
  border: 1px solid $gainsboro;
  border-radius: 4px;
  padding: 12px;
}
.review-submit{
  justify-content: flex-end;
  width: 100%;
  display: flex;
}
.review-submit-btn{
  padding: 5px 15px 5px 15px;
  //background: #1B3659;
  //height: 45px;
  //min-width: 160px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 700;
  color: $white;
  border: none;
  text-transform: uppercase;
}



</style>
