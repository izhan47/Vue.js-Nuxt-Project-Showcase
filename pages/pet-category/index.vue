<template>
  <div class="find_pro_section ">
    <div class="bg-review-img">
      <div class="custom-container custom-padding" >
        <div class="text-center">
          <h2 class="heading  line-height mb-8">{{ $t('pet_pro_around_you') }}</h2>
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
                :placeholder="$t('all')"
                :items="category"
                v-model="form.category"
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
        <v-col cols="12" md="4" sm="12"  v-for="(data,i) in petProData"   :key="i" class="custom-margin">
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
      category: [],
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
    },
    petProData(){
      return this.$store.state.pet_pro_list
    }
  },
  created() {
    this.petCategory();
  },
  methods:{
    petCategory(){
      this.$store.dispatch('PetCategories').then(response => {
        let arr = []
        response.data.data.category_list.forEach(data => {
          arr.push({
            'value': data.value,
            'text': data.label,
          })
        })
        this.category = arr;
      })
    },
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
