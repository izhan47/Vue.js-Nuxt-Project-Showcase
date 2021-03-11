<template>
<div class="grey-section">
    <div class="custom-container custom-height custom-padding">
      <div class="function-heading space">
        <h2 class="heading text-center">
          {{ $t('for') }} {{ $t('pet_people') }}{{ $t('coma') }} {{ $t('by') }} {{ $t('pet_people') }}
        </h2>
      </div>
      <div  class="description center-align space">
        <p>{{ $t('pet_functionality_description') }}</p>
      </div>
      <v-row justify="center">
        <v-col cols="12" md="4" sm="12">
          <v-card class="green-section card-radius pa-6">
            <div>
              <h2 class="card-heading">{{ $t('find_a') }}</h2>
              <h2 class="card-heading ">{{ $t('pet_professional') }}</h2>
            </div>
            <div class="card-arrow-icon green-section">
              <v-btn  large icon color="white" class="circle"><v-icon>mdi-chevron-right</v-icon></v-btn>
            </div>
            <div class="card-img ">
              <img class="img-fluid img-height"
                   src="/images/Column-Bone.png" alt="logo">
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-card class="purple-section card-radius pa-6">
            <div>
              <h2 class="card-heading">  {{ $t('discover_new') }}</h2>
              <h2 class="card-heading ">{{ $t('pet_products') }}</h2>
            </div>
            <div class="card-arrow-icon purple-section">
              <v-btn  large icon color="white" class="circle"><v-icon  >mdi-chevron-right</v-icon></v-btn>
            </div>
            <div class="card-img">
              <img  class="img-fluid img-height" src="/images/Column-Food-Dish.png" alt="logo">
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-card class="pink-section card-radius pa-6">
            <div>
              <h2 class="card-heading">  {{ $t('explore_pet_care') }}</h2>
              <h2 class="card-heading ">{{ $t('advice') }}</h2>
            </div>
            <div class="card-arrow-icon pink-section">
              <v-btn  large icon color="white" class="circle"><v-icon>mdi-chevron-right</v-icon></v-btn>
            </div>
            <div class="">
              <img class="img-fluid comment-img" src="/images/Column-Speech-Bubbles.png" alt="logo">
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
</div>

</template>

<script>
export default {
  name: "petFunctions.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.custom-padding{
  padding: 8rem 12px 8rem 12px
}
.function-heading{
  h2{
    font-size: 45px;
  }
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
.circle::v-deep.v-btn{
  background-color:rgb(256,256,256,0.7);
  border-radius: 50%;
  height: 38px;
  width: 38px;
}
.card-img{
  margin-top: 7rem;
}
.comment-img{
  margin-top: 1rem;
  max-height: 220px;
}
</style>

