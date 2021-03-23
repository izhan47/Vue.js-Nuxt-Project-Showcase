<template>
  <div class="find_pro_section ">
    <div class="bg-review-img">
      <div class="custom-container custom-padding" >
        <div class="text-center">
          <h2 class="heading  line-height ">{{ $t('pet_pro_around_you') }}</h2>
        </div>
        <div class="space banner-description">
          <p>{{ $t('pet_pro_description') }}</p>
        </div>
        <!--   Filter Section Start     -->
        <v-form class="custom-margin">
          <div class="search-form-filter">
            <div class="search-form-field">
              <label>{{ $t('category') }}</label>
              <v-select
                class="search-field mt-2"
                :items="category"
                v-model="category[0]"
                outlined
                rounded
              ></v-select>
            </div>
            <div class="search-form-field">
              <label>{{ $t('location') }}</label>
              <v-text-field
                class="search-field-location  mt-2"
                :placeholder="$t('all')"
                v-model="form.location"
                color="#00afaa"
                solo
                clearable
                rounded
                outlined
              ></v-text-field>
            </div>
            <div class="search-form-field">
              <label>{{ $t('keyword') }}</label>

              <v-text-field
                class="search-field  mt-2"
                :placeholder="$t('all')"
                v-model="form.keyword"
                color="#00afaa"
                solo
                rounded
                outlined
              ></v-text-field>
            </div>
            <div >
              <v-btn
                class="purple-section  search-btn"
                outlined
                large
              >
                {{ $t('search') }}
              </v-btn>
            </div>
          </div>
        </v-form>
        <!--   Filter Section End     -->
      </div>
    </div>
    <!--  card-section-start   -->
    <div class="custom-height custom-container space">
      <v-row>
        <v-col cols="12" md="4" sm="12" v-for="(item,i) in cards" :key="i" class="custom-margin">
          <div class="paw-icons-parent">
            <div  class="paw-icon">
              <v-icon  v-for="(icon,j) in item.icons" :key="j" class="paw mr-1" :class=" colors[j] ">{{icon}}</v-icon>
            </div>
            <v-img
              class="img-fluid card-img"
              :src="item.src"
            ></v-img>
          </div>
          <v-card  class="card-radius card-padding">
            <v-card-title class="card-title-padding">
              <div class="card-flex">
                <h2 class="card-heading">  {{ item.name}}</h2>
                <div class="card-flex-rating">
                  <v-rating
                    :value="4"
                    length="1"
                    background-color="#00afaa"
                    color="#00afaa"
                    dense
                    readonly
                    size="20"
                  ></v-rating>
                  <span class="card-heading-point">
                   {{ item.rating }}
                  </span>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <p class="card-description">{{item.description.length < 50 ? item.description : item.description.slice(0, 50) }}
                <span
                  class="comment-color"
                  @click="loadMore()"> .... </span>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn   class="card-btn purple-section"  outlined rounded>
                {{ $t('deal_offered') }}
              </v-btn>
              <v-btn  class="pink-section card-btn" outlined  rounded >
                {{ $t('certified') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!--  card-section-end   -->
  </div>
</template>

<script>
export default {
  name: "index.vue",
  data(){
    return{
      cards:[
        {
          src:"/images/pet-1.png",
          name:"Paws On Chicon",
          rating:"5.0",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered","Certified",],
          icons:["mdi-paw","mdi-paw","mdi-paw"],
        },
        {
          src:"/images/pet-2.jpg",
          name:"Liz's Pet Care",
          rating:"4.5",
          description:"Homemade Treats and Food, Pet Store, Self Serve Dog...",
          category:["Deal Offered"],
          icons:["mdi-paw","mdi-paw"],

        },
        {
          src:"/images/pet-3.jpg",
          name:"Pet Behaviorist",
          rating:"5.0",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered"],
          icons:["mdi-paw"],

        },

        {
          src:"/images/pet-1.png",
          name:"Paws On Chicon",
          rating:"5.0",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered","Certified",],
          icons:["mdi-paw","mdi-paw","mdi-paw"],
        },
        {
          src:"/images/pet-2.jpg",
          name:"Liz's Pet Care",
          rating:"4.5",
          description:"Homemade Treats and Food, Pet Store, Self Serve Dog...",
          category:["Deal Offered"],
          icons:["mdi-paw","mdi-paw"],

        },
        {
          src:"/images/pet-3.jpg",
          name:"Pet Behaviorist",
          rating:"5.0",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered"],
          icons:["mdi-paw"],

        },

        {
          src:"/images/pet-1.png",
          name:"Paws On Chicon",
          rating:"5.0",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered","Certified",],
          icons:["mdi-paw","mdi-paw","mdi-paw"],
        },
        {
          src:"/images/pet-2.jpg",
          name:"Liz's Pet Care",
          rating:"4.5",
          description:"Homemade Treats and Food, Pet Store, Self Serve Dog...",
          category:["Deal Offered"],
          icons:["mdi-paw","mdi-paw"],

        },
        {
          src:"/images/pet-3.jpg",
          name:"Pet Behaviorist",
          rating:"5.0",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered"],
          icons:["mdi-paw"],

        },



      ],
      category: ['All', 'Bar', 'Fizz', 'Buzz'],
      form:{
        category:'',
        location:'',
        keyword:''
      },
      readMore:false
    }
  },
  computed:{
    colors(){
      return [
        'paw-purple',
        'paw-pink',
        'paw-green',
      ]
    }
  },
  methods:{
    loadMore() {
      this.readMore = true
    },
    loadLess() {
      this.readMore = false
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";


.find_pro_section{
  .card-radius{
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px rgb(0 0 0 / 9%);
  }
}
.custom-margin{
  margin-top: 2rem;
}
.custom-padding{
  padding-top: 3rem;
}

.banner-description{
  max-width: 650px;
  @media (max-width: 1024px) {
    max-width: 420px;
  }
}
.bg-review-img{
  background-image: url("/images/Great-Dane-Background-1.png");
  background-position: 210px -50px;
  background-size: 75% auto;
  background-repeat: no-repeat;
  @media (max-width: 1440px) {
    background-position:237px -37px;
  }
  @media (max-width: 1024px) {
    background-position:280px -30px;
  }
  @media (max-width: 768px) {
    background-image: none !important;
  }
}

.search-field::v-deep .v-input__slot{
  background: $white;
  min-height: 48px;
  box-shadow: unset !important;
  max-width: 200px;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary;
  .v-text-field__slot{
    font-weight: $font-weight-bold;
  }
  //fieldset{
  //  color: rgba(0, 0, 0, 0.7) !important;
  //}
}
.search-field-location::v-deep .v-input__slot{
  background: $white;
  min-height: 48px;
  box-shadow: unset !important;
  max-width: 400px;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary;
  .v-text-field__slot{
    font-weight: $font-weight-bold;
  }
  //fieldset{
  //  color: rgba(0, 0, 0, 0.7) !important;
  //}
}
.search-field::v-deep .v-label {
  top:14px;
}
.search-field::v-deep .v-input__append-inner{
  margin-top: 12px;
}
.search-btn::v-deep.v-btn{
  min-width: 160px;
  height: 52px;
}
.card-title-padding::v-deep.v-card__title{
  padding: 16px 16px 0 16px;
}

.card-padding{
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}



</style>
