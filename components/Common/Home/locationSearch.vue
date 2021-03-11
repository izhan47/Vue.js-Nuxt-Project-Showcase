<template>
<div class="grey-section">
  <div class="custom-container" >
<!--    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500">-->
    <div >
      <div class="text-center">
        <img  class="img-fluid img-height" src="/images/Pet-Pro-Finder-Collars.png" alt="logo">
      </div>
      <div class="text-center">
        <h2 class="heading  line-height ">{{ $t('pet_pro_around_you') }}</h2>
      </div>
      <div class=" banner-description">
        <p class="space">{{ $t('search_database_description') }}</p>
      </div>
        <!--   Filter Section Start     -->
      <v-form>
        <div class="search-form-filter">
          <div class="search-form-field">
            <div class="search-filter-label">
              <label class="ml-4 ">{{ $t('category') }}</label>
            </div>
            <v-select
              class="search-field mt-2"
              :items="category"
              :label="$t('select_category')"
              v-model="form.category"
              outlined
              rounded
            ></v-select>
          </div>
          <div class="search-form-field">
            <div class="search-filter-label">
              <label class="ml-4">{{ $t('location') }}</label>
            </div>
            <v-text-field
              class="search-field  mt-2"
              :placeholder="$t('all')"
              v-model="form.keyword"
              solo
              clearable
              rounded
              outlined
            ></v-text-field>
          </div>
          <div class="search-form-field">
            <div class="search-filter-label">
              <label class="ml-4">{{ $t('keyword') }}</label>
            </div>
            <v-text-field
              class="search-field  mt-2"
              :placeholder="$t('all')"
              v-model="form.keyword"
              solo
              clearable
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
        <div>
          <h5 class="tag-align"> {{ $t('sort_by') }} <strong>{{ $t('latest_v') }}</strong></h5>
        </div>
      </v-form>
        <!--   Filter Section End     -->
    </div>
    <!--  card-section-start   -->
    <div class="custom-height">
        <v-row>
          <v-col cols="12" md="4" sm="12" v-for="(item,i) in cards" :key="i">
            <div class="paw-icons-parent">
              <div  class="paw-icon">
                <v-icon  v-for="(icon,j) in item.icons" :key="j" class=" mr-1" :class=" colors[j] ">{{icon}}</v-icon>
              </div>
              <v-img
                class="img-fluid card-img"
                :src="item.src"
              ></v-img>
            </div>
            <v-card  class=" card-radius card-padding">
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
</div>
</template>

<script>
export default {
name: "locationSearch.vue",
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
.img-height{
  max-height: 250px;
}

.banner-description{
  max-width: 500px;
}
.search-field::v-deep .v-input__slot{
  background: $white;
  min-height: 48px;
  box-shadow: unset !important;
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
.tag-align{
  text-align: right;
  text-transform: capitalize;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-weight: bold;
;
  padding-left: 1rem;
  strong{
    color:$green;
    text-transform:initial;
    font-weight: 700;
  }
}


</style>
