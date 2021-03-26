<template>
  <div class="purple-section">
    <v-container>
      <div class="purpose-section">
        <v-row justify="center">
          <v-col cols="12" md="10" sm="12"  >
            <div class="purpose">
              <div class="text-center ">
                <h2 class="heading  mb-8">{{ $t('our_purpose') }} </h2>
              </div>
              <v-row justify="center">
                <v-col col="3" md="3" sm="3">
                  <div class="text-center mt-5 mb-5">
                    <img class="img-fluid " src="/images/About/wag.png" alt="">
                  </div>
                </v-col>
              </v-row>
              <div class="description mb-5">
                <p>{{ $t('purpose_description') }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>

  </div>
</template>

<script>
export default {
name: "Purpose.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.purpose-section {

  //max-width: 800px;
  //max-height: 250px;
  padding: 100px;
  @media (min-width: 320px)  and (max-width: 600px)  {
    padding: 30px;
  }
}
.heading{
  color:$white;
  font-size:$font-size-40;
}
.description{
  max-width: 800px;
  margin: auto;
  text-align: center;
  width: 100%;
  p{
    color:$white;
    font-weight: $font-weight-400;
    font-size: $font-size-16;
  }
}

.icon{
  color: $white;
  letter-spacing:18px
}


</style>
