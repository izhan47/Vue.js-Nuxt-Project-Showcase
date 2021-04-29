<template>
<div class="grey-section">
    <div class="custom-container custom-height custom-padding" id="animate">
      <div class="function-heading mb-5">
        <h2 class="heading text-center">
          {{ $t('for') }} {{ $t('pet_people') }}{{ $t('coma') }} {{ $t('by') }} {{ $t('pet_people') }}
        </h2>
      </div>
      <div  class="description text-center space">
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
              <v-btn  large icon color="white" class="circle" @click="$router.push('/pet-category')"><v-icon>mdi-chevron-right</v-icon></v-btn>
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
              <v-btn  large icon color="white" class="circle" @click="$router.push('/product-reviews')"><v-icon  >mdi-chevron-right</v-icon></v-btn>
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
              <v-btn  large icon color="white" class="circle" @click="$router.push('/watch-learn')"><v-icon>mdi-chevron-right</v-icon></v-btn>
            </div>
            <div class="">
              <img class="img-fluid comment-img" src="/images/Column-Speech-Bubbles.png" alt="logo">
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="search-img" id="dog-movement">
        <img class="img-fluid" src="/images/Wag-Enabled-HP-Dog.png" alt="logo">
      </div>
    </div>

</div>

</template>

<script>
export default {
  name: "petFunctions.vue",
  mounted(){
    if(process.browser){
      let dog = document.getElementById('dog-movement');
      ;(function(){
        let throttle = function(type, name, obj){
          let object = obj || window;
          let running = false;
          let func = function(){
            if (running){
              return;
            }
            running = true;
            requestAnimationFrame(function(){
              object.dispatchEvent(new CustomEvent(name));
              running = false;
            });
          };
          object.addEventListener(type, func);
        };
        throttle("scroll", "optimizedScroll");
      })();
      window.addEventListener("optimizedScroll", function(){
        let offset = window.pageYOffset-document.getElementById('animate').offsetTop
        if(offset<350){
          dog.style.transform = "translate(-" + (offset)  + "px,0px)";
        }
        if(window.screen.width < 769){
          dog.style.transform = "none";
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.custom-padding{
  padding: 8rem 12px 12px 12px
}
.function-heading{
  h2{
    font-size: $font-size-45;
  }
}
.card-heading{
  color: $white;
  font-family:  $font-family-primary;
  font-size: $font-size-25;
  font-weight: $font-weight-400;
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
  @media (max-width:768px) {
    height: 30px;
    width: 30px;
  }
}
.card-img{
  margin-top: 7rem;
}
.comment-img{
  margin-top: 1rem;
  max-height: $img-max-height-220;
}
.search-img{
  margin-top:2rem;

  text-align: right;
  img{
    max-height: $img-max-height-255;
  }
}
</style>

