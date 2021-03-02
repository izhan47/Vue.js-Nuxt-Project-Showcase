<template>
  <div class="grey-section">
    <v-container>
      <div class="pusher-section">
        <v-row justify="center">
          <v-col cols="12" md="12"  sm="12">
            <div class="heading pusher-section-heading mb-5">
              <h2>{{ $t('pawsitivity_pushers') }} </h2>
            </div>
            <v-row>
              <v-col cols="12" md="4" sm="12" >
                <v-card class="pa-4 card">
                  <v-container>
                        <div class="mt-5 mb-5 ">
                          <v-icon size="55"   class="card-icon" >mdi-dog-side</v-icon>
                        </div>
                    <div>
                      <h2 class="card-heading mt-5 mb-5">  {{ $t('cheer_over_fear') }}</h2>
                      <p class="description mt-5 mb-5">{{ $t('cheer_over_fear_description') }}</p>
                    </div>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" sm="12" >
                <v-card class="pa-4 card">
                  <v-container>
                        <div class="mt-5 mb-5 ">
                          <v-icon size="55"  class="card-icon" >mdi-dog-side</v-icon>
                        </div>
                    <div>
                      <h2 class="card-heading mt-5 mb-5">  {{ $t('oouch_free') }}</h2>
                      <p class="description mt-5 mb-5">{{ $t('oouch_free_description') }}</p>
                    </div>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" sm="12" >
                <v-card class="pa-4 card">
                  <v-container>
                        <div class="mt-5 mb-5 ">
                          <v-icon size="55"   class="card-icon" >mdi-cards-heart</v-icon>
                        </div>
                    <div>
                      <h2 class="card-heading mt-5 mb-5">  {{ $t('local_love') }}</h2>
                      <p class="description mt-5 mb-5">{{ $t('local_love_description') }}</p>
                    </div>
                  </v-container>
                </v-card>
              </v-col>

            </v-row>
          </v-col>
        </v-row>

      </div>
    </v-container>
  </div>
</template>

<script>
export default {
name: "pusherSection.vue",
data(){
  return{

  }
}
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.pusher-section{
  max-width: 1400px;
  padding: 100px 0 100px 0;
  color:  #F7F7F7;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  //Parallax effect on row
}
.pusher-section-heading{
  text-align: center;
}
.card{
  color: $white;
  padding: 30px;
  margin: 0 15px 0 15px;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
  border-radius: 10px

}
.card-icon{
  fill: $pink;
  border: 3px solid $pink;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  color: $pink;
}
.card-heading{
  color: $green;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 30px;
}

</style>

