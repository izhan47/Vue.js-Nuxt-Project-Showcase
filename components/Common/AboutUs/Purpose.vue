<template>
  <div class="purple-section">
    <v-container>
      <div class="purpose-section">
        <v-row justify="center">
          <v-col cols="12" md="10" sm="12"  >
            <div class="purpose">
              <div class="purpose-section-heading mt-5 mb-5">
                <h2>{{ $t('our_purpose') }} </h2>
              </div>
              <v-row justify="center">
                <v-col col="3" md="3" sm="3">
                  <div class="icon_divider mt-5 mb-5">
                    <v-divider  inset> </v-divider>
                  </div>
                </v-col>
                <v-col col="1" md="1" sm="1">
                  <div class="icon mt-1">
                    <v-icon size="26" color="white" >mdi-cards-heart</v-icon>
                  </div>
                </v-col>
                <v-col col="3" md="3" sm="3">
                  <div class="icon_divider mt-5 mb-5">
                    <v-divider > </v-divider>
                  </div>
                </v-col>
              </v-row>


              <div class="purpose-description mt-5 mb-5">
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
.purpose-section-heading{
  color:$white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  font-size: 25px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
  text-align: center;
}
.purpose-section-description{
  color:$white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 0 175px 0 175px ;  //top right bottom left
  text-align: center;
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
