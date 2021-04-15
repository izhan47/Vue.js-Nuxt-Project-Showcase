<template>
<div class="grey-section custom-padding">
 <div class="custom-container custom-height center-center ">
   <div class="about-section w-100 mt-5">
     <v-row justify="center">
       <v-col cols="12" md="6" sm="12">
         <div>
           <img class="img-fluid"
                src="/images/placeholder.png" alt="logo">
         </div>
       </v-col>
<!--       <v-col cols="12" md="6" sm="6" class="section-align pa-8">-->
       <v-col cols="12" md="6" sm="6">
         <div class="center">
           <div class="paw-print">
             <div class="paw-print-2">
               <div class="pad large"></div>
               <div class="pad small-1"></div>
               <div class="pad small-2"></div>
               <div class="pad small-3"></div>
               <div class="pad small-4"></div>
             </div>

             <div class="paw-print-3">
               <div class="pad large"></div>
               <div class="pad small-1"></div>
               <div class="pad small-2"></div>
               <div class="pad small-3"></div>
               <div class="pad small-4"></div>
             </div>

             <div class="paw-print-4">
               <div class="pad large"></div>
               <div class="pad small-1"></div>
               <div class="pad small-2"></div>
               <div class="pad small-3"></div>
               <div class="pad small-4"></div>
             </div>
           </div>

           <div class="align-content" >
             <h2 class="heading space">{{ $t('we_are') }} {{ $t('wag_enabled') }}</h2>
           </div>
           <div class="description  left-align">
             <p>{{ $t('wag_enabled_description_first') }}<span>{{ $t('wag_enabled_description_mid') }}</span>{{ $t('wag_enabled_description_last') }}</p>
           </div>
           <nuxt-link to="/about" class="align-content unset-underline">
             <v-btn
               large
               class="round-btn  mt-3 "
               outlined
               rounded
             >
               {{ $t('about_wag') }}
             </v-btn>

           </nuxt-link>
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
.custom-padding{
  padding: 3rem 0 3rem 0;
}
.paw-print{
  @media (max-width: 768px) {
    display: none;
  }
}

.about-heading{
  color:$purple;
  font-family:  $font-family-primary;
  font-weight: $font-weight-600;
  font-size: $font-size-45;
  text-shadow: -3px 2px 5px $text-shadow-primary;
  text-transform: $text-transform-capitalize;
}
.description{
  span{
    color: $pink;
  }
}
.about-img{
  width: 100%;
}
.center{
  margin:3rem 0 0 3rem;
  @media (max-width: 768px) {
    margin: 0;
  }
}
.description{
  margin-bottom: 1.12rem;
}
.align-content{
  width: 100%;
  text-align: left;
}
.about-btn{
  color: $purple;
  background-color: $white;
  font-weight: $font-weight-bold;
}



</style>
