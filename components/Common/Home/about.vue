<template>
<div class="grey-section">
 <div class="custom-container custom-height center-center">
   <div class="about-section w-100 mt-5">
     <v-row justify="center">
       <v-col cols="12" md="6" sm="6">
         <div>
           <img class="img-fluid"
                src="/images/placeholder.png" alt="logo">
         </div>
       </v-col>
<!--       <v-col cols="12" md="6" sm="6" class="section-align pa-8">-->
       <v-col cols="12" md="6" sm="6" class="mt-8 pa-8">
         <div class="align-content" >
           <h2 class="heading">{{ $t('we_are') }} {{ $t('wag_enabled') }}</h2>
         </div>
         <div class="description left-align mt-5 mb-3">
           <p>{{ $t('wag_enabled_description') }}</p>
         </div>
         <div class="align-content">
           <v-btn
             large
             class="round-btn  mt-3 "
             outlined
             rounded
           >
             {{ $t('about_wag') }}
           </v-btn>

         </div>
       </v-col>
     </v-row>
   </div>
 </div>
</div>
</template>

<script>
export default {
name: "about.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.about-section{
  //width: 1140px;
  //height: 800px;
  //Parallax Effect On Row
}

.about-heading{
  color:$purple;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 45px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
  text-transform: capitalize;

}
.about-img{
  width: 100%;
}
.align-content{
  width: 100%;
  text-align: left;
}
.about-btn{
  color: $purple;
  background-color: $white;
  font-weight: bold;
}
</style>
