<template>
<div class="grey-section">
 <v-container >
   <div class="about-section mt-5">
     <v-row justify="center">
       <v-col cols="12" md="6" sm="6">
         <div>
           <img class="about-img"
                src="/images/placeholder.png" alt="logo">
         </div>

       </v-col>
       <v-col cols="12" md="6" sm="6">
         <div class="heading">
           <h2>{{ $t('we_are') }} {{ $t('wag_enabled') }}</h2>
         </div>
         <div class="description mt-5 mb-3">
           <p>{{ $t('wag_enabled_description') }}</p>
         </div>
         <div >
           <v-btn
             class="about-btn mt-3"
             outlined
             rounded
           >
             {{ $t('about_wag') }}
           </v-btn>

         </div>
       </v-col>
     </v-row>
   </div>
 </v-container>
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
  width: 1140px;
  //height: 800px;
  //Parallax Effect On Row
}

.about-img{
  width: 100%;
}
.about-btn{
  color: $purple;
  background-color: $white;
}
</style>
