<template>
<div class="watch_and_learn_section">
  <div class="bg-review-img">
    <div class="custom-container center-center custom-padding ">
      <div class="text-center">
        <h2 class="heading  line-height ">{{ $t('watch_and_learn') }}</h2>
      </div>
      <div class=" banner-description">
        <p>{{ $t('watch_learn_description') }}</p>
      </div>
      <!--   Filter Section Start     -->
      <v-form class="custom-margin">
        <div class="search-form-filter">
          <div class="search-form-field">
            <div class="search-filter-label">
              <label class="ml-4 ">{{ $t('sort_by') }}</label>
            </div>
            <v-select
              class="search-field mt-2"
              :items="sorting"
              :label="$t('sorting')"
              v-model="form.category"
              outlined
              rounded
            ></v-select>
          </div>
          <div class="search-form-field">
            <div class="filter-label">
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
            <div class="filter-label">
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
      </v-form>
      <!--   Filter Section End     -->
    </div>
  </div>
  <!--  card-section-start   -->
  <div class="custom-container custom-margin space">
      <v-row>
        <v-col cols="12" md="4" sm="12" v-for="(item,i) in cards" :key="i">
          <v-img
            class="img-fluid card-img"
            :src="item.src"
          ></v-img>
          <v-card  class="card-radius card-custom-height card-padding ">
            <v-card-title class="card-title-padding">
              <div class="card-heading">
                <h2>  {{ item.name}}</h2>
              </div>
            </v-card-title>
            <v-card-text>
              <p class="card-description">{{item.description.length < 50 ? item.description : item.description.slice(0, 50) }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
  <!--  card-section-end   -->
</div>
</template>

<script>
export default {
name: "WatchLearn.vue",
  data(){
    return{
      category: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      sorting: ['Latest', 'Oldest'],
      form:{
        category:'',
        location:'',
        keyword:''
      },
      cards:[
        {
          src:"/images/WatchLearn/pic-2.jpg",
          name:"After Their Service",
          description:"Pet Adoption",
        },
        {
          src:"/images/WatchLearn/pic-1.jpg",
          name:"Exercises and Activities to Keep Your Pup Fit",
          description:"Play Time and Enrichment",
        },
        {
          src:"/images/WatchLearn/pic-3.jpg",
          name:"4 Steps to Take After Bringing Home Your New Pup",
          description:"Pet Adoption",
        },

        {
          src:"/images/WatchLearn/pic-2.jpg",
          name:"After Their Service",
          description:"Pet Adoption",
        },
        {
          src:"/images/WatchLearn/pic-1.jpg",
          name:"Exercises and Activities to Keep Your Pup Fit",
          description:"Play Time and Enrichment",
        },
        {
          src:"/images/WatchLearn/pic-3.jpg",
          name:"4 Steps to Take After Bringing Home Your New Pup",
          description:"Pet Adoption",
        },



      ],
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.watch_and_learn_section{
  .card-radius{
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px rgb(0 0 0 / 9%);
  }
}
.card-custom-height{
  min-height: 250px;
}
.bg-review-img{
  background-image: url("/images/WatchLearn/Pink-Dog-Running-Banner-1.png");
  background-position:10% 33%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    background-image: none !important;
  }
}
.banner-description{
  max-width: 580px;
}
.card-heading{
  h2{
    font-family: 'Nunito Sans', sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
}
.card-description{
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
}
.card-img {
 min-height: 285px;
}
.custom-margin{
  margin-top: 2rem;
}

.search-field::v-deep .v-input__slot{
  background: $white;
  min-height: 48px;
  box-shadow: white;
  max-width: 170px;
}
.search-field::v-deep .v-label {
  top:14px;
}
.search-field::v-deep .v-input__append-inner{
  margin-top: 12px;
}
.search-btn::v-deep.v-btn{
  min-width: 140px;
  height: 52px;
}
.card-title-padding::v-deep.v-card__title{
  padding: 16px 0 0 16px;
}
.card-padding{
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}

</style>
