<template>
  <div>
    <v-container >
      <div class="about-banner">
        <v-row justify="center">
              <v-col cols="12" md="6" sm="6" offset-md="3" >
                <img width="200"
                     src="/images/Pink-Paw.png" alt="logo">
              </v-col>
              <v-col cols="12" md="6" sm="6" offset-md="1">
                <div class="heading">
                  <h2>{{ $t('from') }} {{ $t('pet_people') }}{{ $t('coma') }} {{ $t('with_love') }}</h2>
                </div>
                <div class="description mt-5 mb-3">
                  <p>{{ $t('about_banner_description') }}</p>
                </div>
              </v-col>

          <v-col col="12" md="12" sm="12" >
            <v-divider></v-divider>
          </v-col>
        </v-row>

      </div>
    </v-container>
  </div>
</template>

<script>
export default {
name: "aboutBanner.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.about-banner{
  height: 500px;
  //width:900px;
}
.bottom-divider{
  color:  #F7F7F7;
  width: 100px;
  height: 95px;
}

.banner-img{
  width:100%;
  padding-left: 50px;
  //15%
  //-50 bottom padding
}
.divider{
  color:  #ADADAD;
  width: 100%;
  padding-bottom: 100px;

  //     Weight 1px

}


</style>
