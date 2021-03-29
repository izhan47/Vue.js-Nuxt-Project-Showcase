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

  </div>
  <!--  card-section-start   -->
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
name: "locationSearch.vue",
components:{ PetCategoryCard},
  data(){
    return{
      category: ['All', 'Bar', 'Fizz', 'Buzz'],
      form:{
        category:'',
        location:'',
        keyword:''
      },
      readMore:false,

    }
  },
  computed:{
    petProData(){
      return this.$store.state.pet_pro_list
    }
  },
  created() {
    this.$store.dispatch('PetProList')
  },
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

.tag-align{
  text-align: right;
  text-transform: $text-transform-capitalize;
  font-family:  $font-family-primary;
  font-size: $font-size-16;
  font-weight: $font-weight-bold;

  padding-left: 1rem;
  strong{
    color:$green;
    text-transform:initial;
    font-weight:  $font-weight-700;
  }
}


</style>
