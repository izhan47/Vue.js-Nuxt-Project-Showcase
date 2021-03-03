<template>
  <div class="custom-container">
    <v-row justify="center">
      <v-col cols="12" md="8" sm="12">
        <div>
          <h2 class="banner-heading center-align line-height">{{ $t('search_wag_enabled') }}</h2>
        </div>
        <div class="mt-5">
          <p class="description center-align line-height">{{ $t('search_section_description') }}</p>
        </div>
        <div class="mt-5">
          <form>
            <v-text-field
              class="search-box"
              :placeholder="$t('search_wag_enabled')"
              v-model="search"
              rounded
              dense
              solo
              @keypress.enter="show"
            >
              <template v-slot:append>
                <v-btn
                  elevation="0"
                  class="search-btn"
                  color="#270089"
                  @click="show"
                >
                  {{ $t('search') }}
                </v-btn>
              </template>
            </v-text-field>
          </form>
        </div>
        <v-row >
          <v-col md="6"  offset-md="2" class="pt-0">
            <img class="img-fluid" src="/images/Wag-Enabled-HP-Dog.png" alt="logo">
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  name: "bannerSearch.vue",
  data(){
    return{
      search:''
    }
  },
  methods:{
    show(){

    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.search-box{
  width: 100%;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  border-radius: 100px;
  //color: $grey;
  //box-shadow: 0 8px 13px 5px rgba(0, 0, 0, 0.9);
  //0px 8px 13px 5px rgb(0 0 0 / 9%

}
.search-box::v-deep .v-text-field__slot{
  min-height: 50px;
  color: $grey;
}
.search-btn {
  border-radius: 0 24px 24px 0;
  margin-right: -25px !important;
  min-height: 50px;
  color: $white;
}
</style>
