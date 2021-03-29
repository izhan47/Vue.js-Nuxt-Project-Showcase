<template>
  <div>
    <div class="bg-review-img">
      <div class="custom-container center-center custom-padding ">
        <div class="text-center">
          <h2 class="heading  line-height mb-8">{{ $t('product_reviews') }}</h2>
        </div>
        <div class="space banner-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <!--   Filter Section Start     -->
        <v-form>
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
                :placeholder="$t('all')"
                class="search-field mt-2"
                :items="categoryList"
                v-model="form.category"
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
                solo
                color="#00afaa"
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
          <v-col cols="12" md="4" sm="12" v-for="(data,i) in reviewData" :key="i" class="mt-8">
            <product-review-card :item="data"></product-review-card>
          </v-col>
        </v-row>
      </div>
      <!--  card-section-end   -->

  </div>

</template>

<script>
import ProductReviewCard from "@/components/ProductReviewCard";
export default {
name: "reviews.vue",
data(){
  return{
    category: ['All', 'Bar', 'Fizz', 'Buzz'],
    sorting: ['Latest', 'Popular','Deal offered'],
    form:{
      category:'',
      sorting:'',
      keyword:''
    },
  }
},
  components:{ProductReviewCard},
  computed:{
    reviewData(){
      return this.$store.state.review_list
    },
    categoryList(){
      let categories= this.$store.state.product_review_category_list
      let arr = []
      categories.forEach(function (data) {
        arr.push({
          'value':data.value,
          'text': data.label,
        })
      })
      console.log(arr);
     return arr
    }
  },
  created() {
    this.$store.dispatch('ReviewList')
    this.$store.dispatch('ReviewCategories')
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.bg-review-img{
  background-image: url("/images/Reviews/Product-Reviews-Banner-2.png");
  //background-image: url("/images/Reviews/Reviews-Banner.png");
  background-position: 10% 56%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1440px) {
    background-position:10% 82%;
  }
  @media (max-width: 1024px) {
    background-position: 10% 175%;
  }
  @media (max-width: 768px) {
    background-image: none !important;
  }
}

.banner-description{
  max-width: 550px;
}
.search-field::v-deep .v-input__slot{
  background: $white;
  min-height: 48px;
   box-shadow: unset !important;
  max-width: 170px;
  font-weight: $font-weight-bold;
  font-family:$font-family-primary;
  .v-text-field__slot{
    font-weight: $font-weight-bold;
  }
  fieldset{
    color: rgba(0, 0, 0, 0.7) !important;
  }
  //.v-input__append-inner{
  //  margin-top: 0;
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
