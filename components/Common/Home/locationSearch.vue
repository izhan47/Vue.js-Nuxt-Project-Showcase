<template>
<div class="grey-section">
  <div class="custom-container" >
    <div class="location-search"
         data-aos="fade-up"
         data-aos-easing="linear"
         data-aos-duration="2500"   >
      <div class="text-center">
        <img  class="img-fluid" src="/images/Pet-Pro-Finder-Collars.png" alt="logo">
      </div>
      <div class="text-center">
        <h2 class="heading  line-height ">{{ $t('pet_pro_around_you') }}</h2>
      </div>
      <div class="space">
        <p class="location-description ">{{ $t('search_database_description') }}</p>
      </div>
        <!--   Filter Section Start     -->
      <v-form>
        <div class="form-filter">
          <div class="form-field">
            <div class="filter-label">
              <label class="ml-4 ">{{ $t('category') }}</label>
            </div>
            <v-select
              class="search-box mt-2"
              :items="category"
              :label="$t('select_category')"
              v-model="form.category"
              outlined
              rounded
            ></v-select>
          </div>
          <div class="form-field">
            <div class="filter-label">
              <label class="ml-4">{{ $t('location') }}</label>
            </div>
            <v-text-field
              class="search-box  mt-2"
              :placeholder="$t('all')"
              v-model="form.keyword"
              solo
              clearable
              rounded
              outlined
            ></v-text-field>
          </div>
          <div class="form-field">
            <div class="filter-label">
              <label class="ml-4">{{ $t('keyword') }}</label>
            </div>
            <v-text-field
              class="search-box  mt-2"
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
            <v-img
              class="img-fluid card-img"
              :src="item.src"
            ></v-img>
            <v-card  class=" card-radius pa-6">
              <v-card-title class="card-padding">
                <div class="card-flex">
                    <h2 class="card-heading">  {{ item.name}}</h2>
                  <div class="card-flex-rating">
                    <v-rating
                      :value="4"
                      length="1"
                      background-color="##00afaa"
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
                <v-btn   class="card-button purple-section"  outlined rounded>
                  {{ $t('deal_offered') }}
                </v-btn>
                <v-btn  class="pink-section card-button" outlined  rounded >
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
    },
      {
      src:"/images/pet-2.jpg",
      name:"Liz's Pet Care",
      rating:"4.5",
      description:"Homemade Treats and Food, Pet Store, Self Serve Dog...",
    },
      {
      src:"/images/pet-3.jpg",
      name:"Pet Behaviorist",
      rating:"5.0",
      description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
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
.form-filter{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.form-field{
  margin-right: 1rem;
}
.text-center{
  img{
    max-height: 200px;
  }
  h2{
    margin-bottom: 2rem;
  }
}
.location-description{
  max-width: 500px;
  margin: auto;
  text-align: center;
  width: 100%;
  line-height: 1.87;
  p{
    color: $black;
    font-weight: 400;
    font-size: 17px;
  }
}
.search-box::v-deep .v-input__slot{
  background: $white;
  min-height: 48px;
  box-shadow: white;
}
.search-box::v-deep .v-label {
  top:14px;
}
.search-box::v-deep .v-input__append-inner{
  margin-top: 12px;
}
.filter-label{
  text-align: left;
  label{
    font-size: 14px;
    font-weight: 400;
    color: $black;
  }
}
.search-btn::v-deep.v-btn{
  min-width: 160px;
  height: 52px;
}
.search-btn{
  background-color: $blue;
  color: $white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-transform: capitalize;
  border-radius: 100px 100px 100px 100px;
  padding: 0 50px 0 50px;
  letter-spacing: 0;
}




.card-padding::v-deep.v-card__title{

  padding: 16px 16px 0 16px;
}
.card-flex{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.card-flex-rating{
  display: flex;
  align-items: baseline;
}
.card-heading{
  color: $purple;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 10px;
  text-transform: capitalize;
  font-style: normal;
}
.card-heading-point{
  padding-left: 2px;
  color: $grey;
  font-size: 15px;
}
.card-description{
  color: #4d4d4d;;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.87;
  font-family: 'Nunito Sans', sans-serif;
}
.card-img{
  max-height :270px;
  border-radius:10px 10px 0 0;

}
.card-category{
  font-weight: 700;
  font-size: 15px;
  background-color:#4D4D4D ;
  color: $white;
}
.card-icon{
  size: 20px;
  padding: 6px;
}
.card-button{
  padding: 5px 15px 5px 15px;
  color: $white;
  text-transform: capitalize;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 0;
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
.comment-color{
  cursor: pointer;
  color: $green;
}

</style>
