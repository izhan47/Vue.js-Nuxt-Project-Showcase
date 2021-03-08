<template>
  <div class="custom-container center-center custom-padding bg-review-img">
    <div class="location-search">


      <div class="text-center">
        <h2 class="heading  line-height ">{{ $t('product_reviews') }}</h2>
      </div>
      <div class="space">
        <p class="review-description ">{{ $t('search_database_description') }}</p>
      </div>
      <!--   Filter Section Start     -->
      <v-form>
        <div class="form-filter">
          <div class="form-field">
            <div class="filter-label">
              <label class="ml-4 ">{{ $t('sort_by') }}</label>
            </div>
            <v-select
              class="search-box mt-2"
              :items="sorting"
              :label="$t('sorting')"
              v-model="form.category"
              outlined
              rounded
            ></v-select>
          </div>
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
      </v-form>
      <!--   Filter Section End     -->

    </div>
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
  background-position: 10% 90%;;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    background-image: none !important;
  }
}
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
.review-description{
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
  max-width: 170px;
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
  min-width: 140px;
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
</style>
