<template>
  <div class="purple-section">
    <v-container>
      <div class="purpose-section">
        <v-row justify="center">
          <v-col cols="12" md="10" sm="12"  >
            <div class="purpose">
              <div class="center-align mt-5 mb-5">
                <h2 class="purpose-heading">{{ $t('our_purpose') }} </h2>
              </div>
              <v-row justify="center">
                <v-col col="3" md="3" sm="3">
                  <div class="center-align mt-5 mb-5">
                    <img class="img-fluid " src="/images/About/wag.png" alt="">
                  </div>
                </v-col>
              </v-row>
              <div class="center-align mt-5 mb-5">
                <p class="purpose-description">{{ $t('purpose_description') }}</p>
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
.purpose-heading{
  color:$white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 45px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
}
.purpose-description{

  max-width: 800px;
  margin: auto;
  text-align: center;
  width: 100%;

  p{
    color:$white;
    font-weight: 400;
    font-size: 16px;

  }
}
.icon_divider{
  width:100%;
  color: #00AFAA;
  font-weight: 1.8;
  gap: 5px;
  //margin: 0 100px 0 100px;
}
.icon{
  color: $white;
  letter-spacing:18px
}


</style>
