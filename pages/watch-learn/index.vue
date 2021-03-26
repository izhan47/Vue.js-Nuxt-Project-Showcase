<template>
  <div>
    <div class="bg-review-img">
      <div class="custom-container center-center custom-padding ">
        <div class="text-center">
          <h2 class="heading  line-height mb-8">{{ $t('watch_and_learn') }}</h2>
        </div>
        <div class=" banner-description">
          <p>{{ $t('watch_learn_description') }}</p>
        </div>
        <!--   Filter Section Start     -->
        <v-form class="mt-8">
          <div class="search-form-filter">
            <div class="search-form-field">
              <label>{{ $t('sort_by') }}</label>
              <v-select
                class="search-field mt-2"
                :items="sorting"
                v-model="sorting[0]"
                outlined
                rounded
              ></v-select>
            </div>
            <div class="search-form-field">
                <label >{{ $t('category') }}</label>
              <v-select
                class="search-field mt-2"
                :items="category"
                v-model="category[0]"
                outlined
                rounded
              ></v-select>
            </div>
            <div class="search-form-field">
              <label >{{ $t('keyword') }}</label>
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
    <div class="custom-container  space">
      <v-row>
        <v-col cols="12" md="4" sm="12" v-for="(data,i) in watchData" :key="i" class="mt-8">
          <watch-category-card :item="data"></watch-category-card>
        </v-col>
      </v-row>
    </div>
    <!--  card-section-end   -->
  </div>

</template>

<script>
import WatchCategoryCard from "@/components/WatchCategoryCard";
export default {
name: "index.vue",
  components:{WatchCategoryCard},
  data(){
    return{
      category: ['All', 'Bar', 'Fizz', 'Buzz'],
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
          slug:"Pet-asd",
        },
        {
          src:"/images/WatchLearn/pic-1.jpg",
          name:"Exercises and Activities to Keep Your Pup Fit",
          description:"Play Time and Enrichment",
          slug:"Pet-asd",
        },
        {
          src:"/images/WatchLearn/pic-3.jpg",
          name:"4 Steps to Take After Bringing Home Your New Pup",
          description:"Pet Adoption",
          slug:"Pet-asd",
        },

        {
          src:"/images/WatchLearn/pic-2.jpg",
          name:"After Their Service",
          description:"Pet Adoption",
          slug:"Pet-asd",
        },
        {
          src:"/images/WatchLearn/pic-1.jpg",
          name:"Exercises and Activities to Keep Your Pup Fit",
          description:"Play Time and Enrichment",
          slug:"Pet-asd",
        },
        {
          src:"/images/WatchLearn/pic-3.jpg",
          name:"4 Steps to Take After Bringing Home Your New Pup",
          description:"Pet Adoption",
          slug:"Pet-asd",
        },
      ],
    }
  },
  computed:{
    watchData(){
      return this.$store.state.category_list
    }
  },
  created() {
    this.$store.dispatch('CategoryList')
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.bg-review-img{
  background-image: url("/images/WatchLearn/Pink-Dog-Running-Banner-1.png");
  //background-position:10% 33%;
  background-position: bottom -51px left 29px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1440px) {
    background-position:bottom -34px left 15px;
  }
  @media (max-width: 767px) {
    background-image: none !important;
  }
}
.banner-description{
  max-width: 580px;
}
.search-field::v-deep .v-input__slot{
  background: $white;
  min-height: 48px;
  box-shadow: unset !important;
  max-width: 170px;
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
  min-width: 140px;
  height: 52px;
}



</style>
