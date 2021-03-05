<template>
  <div class="custom-container center-center custom-padding">
    <v-row justify="center">
      <v-col cols="12" md="8" sm="12">
        <div>
          <h2 class="banner-heading center-align line-height">{{ $t('product_reviews') }}</h2>
        </div>
        <div class="mt-5 space">
          <p class="description center-align ">{{ $t('search_section_description') }}</p>
        </div>
        <!--   Filter Section Start     -->
        <v-form>
          <v-row justify="center">
<!--            <v-col cols="12" md="3" sm="6">-->
<!--              <div class="filter-label">-->
<!--                <img class="img-fluid img-height" src="" alt="">-->
<!--              </div>-->
<!--            </v-col>-->
            <v-col cols="12" md="3" sm="6">
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
            </v-col>
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
            </v-col>
          </v-row>
        </v-form>
        <!--   Filter Section End     -->
      </v-col>
    </v-row>
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
.search-box::v-deep .v-input__slot{
  min-height: 50px;
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
</style>
