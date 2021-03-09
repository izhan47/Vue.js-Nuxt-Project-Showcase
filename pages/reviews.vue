<template>
  <div class="custom-container center-center custom-padding bg-review-img">
      <div class="text-center">
        <h2 class="heading  line-height ">{{ $t('product_reviews') }}</h2>
      </div>
      <div class="space banner-description">
        <p>{{ $t('search_database_description') }}</p>
      </div>
      <!--   Filter Section Start     -->
      <v-form>
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
</template>

<script>
export default {
name: "reviews.vue",
data(){
  return{
    category: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    sorting: ['Latest', 'Oldest'],
    form:{
      category:'',
      location:'',
      keyword:''
    },
  }
}
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.bg-review-img{
  background-image: url("/images/Reviews/Reviews-Banner.png");
  background-position: 10% 90%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    background-image: none !important;
  }
}

.banner-description{
  max-width: 450px;
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

</style>
