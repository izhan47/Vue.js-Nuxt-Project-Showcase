<template>
  <div class="custom-container custom-height custom-padding">
    <v-row justify="center">
      <v-col cols="12" md="8" sm="12">
        <div>
          <h2 class="banner-heading text-center line-height">{{ $t('search_wag_enabled') }}</h2>
        </div>
        <div class="mt-5 space">
          <p class="description  text-center ">{{ $t('search_section_description') }}</p>
        </div>

          <form class="search-form" role="search" action="#" method="get">
            <div class="search-container">
              <input placeholder="Search Wag Enabled" class="search-form-input" type="search" name="s" title="Search" value="">
                <v-btn
                  elevation="0"
                  class="search-btn"
                  color="#270089"
                  @click="show"
                >
                  {{ $t('search') }}
                </v-btn>
            </div>
          </form>
        <div class="search-img" >
<!--          data-aos="slide-left" data-aos-easing="linear" data-aos-duration="3500"-->
          <img class="img-fluid" src="/images/Wag-Enabled-HP-Dog.png" alt="logo">
        </div>
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
.custom-padding{
  padding-top: 7rem;
}
.description{
  max-width: 600px;
  margin: auto;
}
.search-btn::v-deep.v-btn{
  color: $white;
  text-transform: capitalize;
  padding-right: 1rem;
  border-radius: 0;
  height: 56px;
}
.search-container{
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 13px 5px rgba(224, 224, 224, 0.9);

  padding: 0;
  border-radius: 100px;
  overflow: hidden;
}
.search-form-input{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  padding: 15px;
  display: inline-block;
  color: $black;
  background: $grey-light;
  margin: 0;
}
.search-form-input:focus,{
  background-color: $white;
  outline: none;
}
.search-img{
  margin-top:2rem;
  text-align: center;
  img{
    max-height: 255px;
  }
}
</style>
