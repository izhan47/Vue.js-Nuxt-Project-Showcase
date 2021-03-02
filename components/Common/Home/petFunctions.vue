<template>
<div class="grey-section">
  <v-container >
    <div class="pet-function">
      <v-row justify="center">
        <v-col cols="12" md="12"  sm="12">
          <div class="function-heading">
            <h2>{{ $t('for') }} {{ $t('pet_people') }}{{ $t('coma') }} {{ $t('by') }} {{ $t('pet_people') }}</h2>
          </div>
          <div class="function-description">
            <p>{{ $t('pet_functionality_description') }}</p>
          </div>
          <v-row>
            <v-col cols="12" md="4" sm="12" >
              <v-card class="green-section pa-4">
                <div>
                  <h2 class="card-heading">  {{ $t('find_a') }}</h2>
                  <h2 class="card-heading ">{{ $t('pet_professional') }}</h2>
                </div>
                <div class="card-arrow-icon one-card-icon">
                  <v-btn  large icon color="white"><v-icon >mdi-chevron-right</v-icon></v-btn>
                </div>
                <div class="card-img">
                  <img width="200"
                       src="/images/Column-Bone.png" alt="logo">
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="12">
              <v-card class="purple-section pa-4">
                <div>
                  <h2 class="card-heading">  {{ $t('discover_new') }}</h2>
                  <h2 class="card-heading ">{{ $t('pet_products') }}</h2>
                </div>
                <div class="card-arrow-icon second-card-icon">
                  <v-btn  large icon color="white"><v-icon >mdi-chevron-right</v-icon></v-btn>
                </div>
                <div class="card-img">
                  <img width="200"
                       src="/images/Column-Food-Dish.png" alt="logo">
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="12">
              <v-card class="pink-section pa-4">
                <div>
                  <h2 class="card-heading">  {{ $t('explore_pet_care') }}</h2>
                  <h2 class="card-heading ">{{ $t('advice') }}</h2>
                </div>
                <div class="card-arrow-icon third-card-icon">
                  <v-btn  large icon color="white"><v-icon >mdi-chevron-right</v-icon></v-btn>
                </div>
                <div class="card-img-third">
                  <img width="200"
                       src="/images/Column-Speech-Bubbles.png" alt="logo">
                </div>
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
  name: "petFunctions.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.pet-function{
  width: 1140px;
  padding-bottom: 20px;
}
.function-heading{
  color:$purple;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  font-size: 25px;
  line-height: 4.5em;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
}
.function-description{
  color: #323638;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 3.5em;
}
.card-heading{
  color: $white;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 25px;
  font-weight: 400;
  text-align: left;
}
.card-arrow-icon{
  size: 19px;
  color: $white;
  text-align: left;
}
.one-card-icon{
  background-color: #8DE0E0 ;
}
.second-card-icon{
  background-color:  #332E80;
}
.third-card-icon{
  background-color: #EDC5C7;
}
.card-img{
  padding: 60px 0 0 0;
  text-align: left;
  height: auto;
}
.card-img-third{
  text-align: left;
  height: auto;
}
</style>

