<template>
<div class="grey-section">
  <div class="custom-container" >
    <div class="location-search">
      <div class="center-align">
        <img  class="img-fluid img-height" src="/images/Pet-Pro-Finder-Collars.png" alt="logo">
      </div>
      <div class="mb-5 ">
        <h2 class="heading center-align line-height ">{{ $t('pet_pro_around_you') }}</h2>
      </div>
      <div class="space">
        <p class="location-description ">{{ $t('search_database_description') }}</p>
      </div>
        <!--   Filter Section Start     -->
      <v-form>
        <v-row justify="center">
          <v-col cols="12" md="3" sm="6">
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
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <div class="filter-label">
              <label class="ml-4 ">{{ $t('location') }}</label>
            </div>
            <v-text-field
              class="search-box  mt-2"
              :placeholder="$t('location_placeholder')"
              v-model="form.search"
              solo
              clearable
              rounded
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
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
          </v-col>
          <v-col cols="12" md="2" sm="6" class="mt-8">
            <v-btn
              class="purple-section  search-btn"
              outlined
              large


            >
              {{ $t('search') }}
            </v-btn>
            <h5 class="tag-align"> {{ $t('sort_by') }} <strong style="color: #00AFAA">{{ $t('latest_v') }}</strong></h5>
          </v-col>
<!--          <v-col col="12" md="12" sm="12" class="tag-align">-->
<!--            <h5 > {{ $t('sort_by') }} <strong style="color: #00AFAA">{{ $t('latest_v') }}</strong></h5>-->
<!--          </v-col>-->
        </v-row>
      </v-form>
        <!--   Filter Section End     -->
    </div>
    <!--  card-section-start   -->
    <div class="custom-height">
        <v-row>
          <v-col cols="12" md="4" sm="12" v-for="item in items">
            <v-img
              class="img-fluid card-img"
              :src="item.src"
            ></v-img>
            <v-card  class=" card-radius pa-6">
              <v-card-title>
                <div class=" card-flex">
                    <h2  class="card-heading">  {{ item.name}}</h2>
                  <div class="card-flex-rating">
                    <v-rating
                      :value="4"
                      length="1"
                      background-color="green "
                      color="green"
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
                <v-btn   class="card-button purple-section  ml-3 mb-3"  outlined rounded>
                  {{ $t('deal_offered') }}
                </v-btn>
                <v-btn  class="pink-section card-button  ml-3 mb-3" outlined  rounded >
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
    items:[
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
    category: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
.search-box{
  //font-size: 16px;
  //font-weight: bold;

  //min-height: 0;
  //Column Gap 10px
}
.search-box::v-deep .v-input__slot{
  min-height: 40px;
}

.filter-label{
  text-align: left;
  label{
    font-size: 14px;
    font-weight: 400;
    color: $black;
  }
}
.search-btn{
  background-color: $blue;
  color: $white;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  border-radius: 100px 100px 100px 100px;
  padding: 0 50px 0 50px;
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
  color: $black;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;

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
  padding: 5px 15px;
  color: $white;
  text-transform: capitalize;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 12px;
}
.tag-align{
  text-align: left;
  margin-top: 1rem;
  padding-left: 1rem;
}
.location-description{
    max-width: 500px;
    margin: auto;
    text-align: center;
    width: 100%;
  line-height: 2;
    p{
      color: $black;
      font-weight: 400;
      font-size: 16px;


    }

}

.comment-color{
  cursor: pointer;
  color: $green;
}

</style>
