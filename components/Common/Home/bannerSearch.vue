<template>
<v-container fluid>
  <div class="banner">
    <v-row justify="center">
      <v-col cols="12" md="8" sm="12">
        <div class="mt-5">
          <h2 class="search-heading">{{ $t('search_wag_enabled') }}</h2>
        </div>
        <div class="mt-5">
          <p class="search-description">{{ $t('search_section_description') }}</p>
        </div>
        <div class="mt-5">
          <form action="" >
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
            <img width="300"
                 src="/images/Wag-Enabled-HP-Dog.png" alt="logo">
          </v-col>
        </v-row>


      </v-col>
    </v-row>
  </div>

</v-container>
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
.banner{
  height: 500px;
  width:900px;
}
.search-heading{
  color:$purple;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 45px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);

}
.search-description{
  color: $black;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;

  //150px left, right padding
}
.search-box{
  width: 100%;
  color: #535353;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  border-radius: 100px;
  text-shadow: 0 8px 13px 5px rgba(0, 0, 0, 0.09);
}
.search-box::v-deep .v-text-field__slot{
  min-height: 50px;
}
.search-btn {
  border-radius: 0px 24px 24px 0px;
  margin-right: -25px !important;
  min-height: 50px;

  color: #fff;
}
</style>
