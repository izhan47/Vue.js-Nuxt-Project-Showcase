<template>
<div class="grey-section">
  <div class="custom-container" >
    <div class="location-search">
      <div class="center-align">
        <img  class="img-fluid img-height" src="/images/Pet-Pro-Finder-Collars.png" alt="logo">
      </div>
      <div class="mb-5 ">
        <h2 class="heading center-align line-height">{{ $t('pet_pro_around_you') }}</h2>
      </div>
      <div>
        <p class="description center-align line-height ">{{ $t('search_database_description') }}</p>
      </div>
        <!--   Filter Section Start     -->
      <v-form>
        <v-row justify="center">
          <v-col cols="12" md="3" sm="6">
            <div class="filter-label">
              <label class="ml-4">{{ $t('category') }}</label>
            </div>
            <v-select
              class="search-box mt-2"
              :items="items"
              :label="$t('select_category')"
              v-model="form.category"
              outlined
              rounded
            ></v-select>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <div class="filter-label">
              <label class="ml-4">{{ $t('location') }}</label>
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
              max-height="50px"
              max-width="100px"

            >
              {{ $t('search') }}
            </v-btn>
          </v-col>
          <v-col col="12" md="12" sm="12" class="tag-align">
            <h5 > {{ $t('sort_by') }} <strong style="color: #00AFAA">{{ $t('latest_v') }}</strong></h5>
          </v-col>
        </v-row>
      </v-form>
        <!--   Filter Section End     -->
    </div>
    <!--  card-section-start   -->
    <div class="custom-height">
        <v-row>
          <v-col cols="12" md="4" sm="12">
            <v-img
              class="img-fluid card-img"
              src="/images/pet-1.png"
            ></v-img>
            <v-card  class=" card-radius pa-5">
              <v-card-title class="card-heading">Paws On Chicon

                  <v-rating
                    :value="4"
                    length="1"
                    background-color="green lighten-3"
                    color="green"
                    dense
                    readonly
                    size="20"
                  ></v-rating>
                  <span class="card-heading-point">
                    4.5
                  </span>
              </v-card-title>
              <v-card-text>
                <div class="card-description" >Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
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
          <v-col cols="12" md="4" sm="12">
            <v-img
              class="img-fluid card-img "
              src="/images/pet-2.jpg"
            ></v-img>
            <v-card  class=" card-radius pa-6">
              <v-card-title class="card-heading">Liz's Pet Care

                <v-rating
                  :value="4"
                  length="1"
                  background-color="green lighten-3"
                  color="green"
                  dense
                  readonly
                  size="20"
                ></v-rating>
                <span class="card-heading-point">
                    5.0
                  </span>
              </v-card-title>

              <v-card-text>
                <div class="card-description">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
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
          <v-col cols="12" md="4" sm="12">
            <v-img
              class="img-fluid "
              src="/images/pet-3.jpg"
            ></v-img>
            <v-card  class=" card-radius pa-6">
              <v-card-title class="card-heading">Pet Behaviorist
                <v-rating
                  :value="4"
                  length="1"
                  background-color="green lighten-3"
                  color="green"
                  dense
                  readonly
                  size="20"
                ></v-rating>
                <span class="card-heading-point">
                    4.5
                  </span>
              </v-card-title>

              <v-card-text>
                <div class="card-description">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
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
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
  font-family: 'Nunito Sans', sans-serif;
  //font-weight: 400;
  font-size: 14px;
  font-weight: bold;
  color: $black;
  //min-height: 0;
  //Column Gap 10px
}
.search-box::v-deep .v-input__slot{
  min-height: 40px;
}
.filter-label{
  text-align: left;
}
.search-btn{
  background-color: $blue;
  color: $white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  border-radius: 100px 100px 100px 100px;
  padding: 0px 50px 0px 50px;
}
//.card{
//  border-radius: 15px;
//  padding: 10px;
//  text-shadow: -3px 10px 10px rgba(0, 0, 0, 0.09);
//}
.card-heading{
  color: $purple;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 30px;
  font-weight: bold;
}
.card-heading-point{
  padding-left: 2px;
  color: $grey;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
}
.card-description{
  color: $black;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
}
.card-img{
  max-height :270px;
}
.card-category{
  font-family: 'Nunito Sans', sans-serif;
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
  text-align: right;
}
</style>
