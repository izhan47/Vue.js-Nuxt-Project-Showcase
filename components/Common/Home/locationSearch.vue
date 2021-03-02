<template>
<div class="grey-section">
  <v-container >
    <div class="location-search">
      <v-row justify="center">
        <v-col cols="12"  md="12" sm="12">
          <v-row>
            <v-col cols="12" md="6" sm="6" offset-md="3" offset-sm="3">
              <img width="200"
                   src="/images/Pet-Pro-Finder-Collars.png" alt="logo">
            </v-col>
            <v-col cols="12" md="6" sm="6" offset-md="3" offset-sm="3">
              <div class="heading">
                <h2>{{ $t('pet_pro_around_you') }}</h2>
              </div>
              <div class="description mt-5 mb-3">
                <p>{{ $t('search_database_description') }}</p>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <!--   Filter Section Start     -->
        <v-col cols="12" md="12" sm="12">
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
              <v-col cols="12" md="2" sm="6">
                <v-btn
                  class="purple-section mt-6 search-btn"
                  outlined
                  x-large
                  rounded
                  max-height="50px"

                >
                  {{ $t('search') }}
                </v-btn>
              </v-col>
              <v-col col="3" md="3" sm="3" offset-md="9" offset-sm="9">
                  <h5 > {{ $t('sort_by') }} <strong style="color: #00AFAA">{{ $t('latest_v') }}</strong></h5>
                </v-col>
              </v-row>
            </v-form>
        </v-col>
        <!--   Filter Section End     -->
      </v-row>

    </div>
  </v-container>
  <v-container>
    <!--  card-section-start   -->
    <div class="card-section">
      <v-col cols="12" md="12" sm="12">
        <v-row justify="center">
          <!--              &lt;!&ndash; Comment check    &ndash;&gt;-->
          <!--              <td v-if="item.comment && readMore==false">-->
          <!--                {{ item.comment.length < 20 ? item.comment : item.comment.slice(0, 20) }}<span-->
          <!--                class="comment-color"-->
          <!--                @click="loadMore()"> .... More</span></td>-->
          <!--              <td v-else-if="item.comment && readMore==true">{{ item.comment }}<span class="comment-color"-->
          <!--                                                                                     @click="loadLess()">  ... Less </span>-->
          <!--              </td>-->
          <!--              <td v-else>{{ item.comment }}</td>-->

          <v-col cols="12" md="4" sm="12">
            <v-card rounded class="mx-auto my-12"  max-width="320">
              <v-img
                height="280"
                src="/images/pet-1.png"
              ></v-img>
              <v-card-title class="menu-item">Paws On Chicon
                <v-row
                  align="center"
                  class="mx-2"
                >
                  <v-rating
                    :value="4"
                    length="1"
                    background-color="green lighten-3"
                    color="green"
                    dense
                    readonly
                    size="20"
                  ></v-rating>
                  <div class="grey--text ">
                    4.5
                  </div>
                </v-row>
              </v-card-title>
              <v-card-text>
                <div >Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="purple-section white-text ml-3 mb-6" outlined rounded>
                  {{ $t('deal_offered') }}
                </v-btn>
                <v-btn  class="pink-section white-text ml-3 mb-6" outlined  rounded >
                  {{ $t('certified') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-card
              rounded
              class="mx-auto my-12"
              max-width="320"
            >
              <v-img
                height="280"
                src="/images/pet-2.jpg"
              ></v-img>

              <v-card-title class="menu-item">Paws On Chicon

                <v-row
                  align="center"
                  class="mx-2"
                >
                  <v-rating
                    :value="4"
                    length="1"
                    background-color="green lighten-3"
                    color="green"
                    dense
                    readonly
                    size="20"
                  ></v-rating>
                  <div class="grey--text ">
                    4.5
                  </div>
                </v-row>
              </v-card-title>

              <v-card-text>
                <div >Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>



              <v-card-actions>
                <v-btn
                  class="purple-section white-text ml-3 mb-6"
                  outlined
                  rounded
                >
                  {{ $t('deal_offered') }}
                </v-btn>
                <v-btn
                  class="pink-section white-text mb-6 ml-3 "
                  outlined
                  rounded
                >
                  {{ $t('certified') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-card
              rounded
              class="mx-auto my-12"
              max-width="320"
            >
              <v-img
                height="280"
                src="/images/pet-3.jpg"
              ></v-img>

              <v-card-title class="menu-item">Paws On Chicon

                <v-row
                  align="center"
                  class="mx-2"
                >
                  <v-rating
                    :value="4"
                    length="1"
                    background-color="green lighten-3"
                    color="green"
                    dense
                    readonly
                    size="20"
                  ></v-rating>
                  <div class="grey--text ">
                    4.5
                  </div>
                </v-row>
              </v-card-title>

              <v-card-text>
                <div >Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>



              <v-card-actions>
                <v-btn
                  class="purple-section white-text ml-3 mb-6"
                  outlined
                  rounded
                >
                  {{ $t('deal_offered') }}
                </v-btn>
                <v-btn
                  class="pink-section white-text ml-3 mb-6"
                  outlined
                  rounded
                >
                  {{ $t('certified') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </div>
    <!--  card-section-end   -->
  </v-container>
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
.location-search{
  width: 1290px;
  height:385px;
    //Parallax Effect
}
.location-search-img{
width:100%;
  padding-left: 50px;
}
//@media (min-width: 600px)  and (max-width: 1050px)  {
//
//}
.search-box{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #323638;
  //Column Gap 10px
}
.filter-label{
  text-align: left;
}
.search-btn{
  background-color: $purple;
  color: $white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
}
.card-section{
  width: 1140px;
  color:  #F7F7F7;

  //Parallax Effect
  @media (min-width: 380px)  and (max-width: 900px)  {
    margin-top: 21rem;
  }
  @media (min-width: 320px)  and (max-width: 379px)  {
    margin-top: 25rem;
  }
}
.card{
  border-radius: 15px;
  padding: 10px;
  text-shadow: -3px 10px 10px rgba(0, 0, 0, 0.09);

}
.card-img{
  height :280px;
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
  font-family: 'Nunito Sans', sans-serif;
  font-size: 12px;
  //background-color: #332E80 ;
  background-color:  $pink ;
  color: $white;
}



</style>
