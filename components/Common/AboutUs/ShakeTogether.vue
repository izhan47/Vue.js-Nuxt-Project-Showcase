<template>
  <div class="grey-section">
    <v-container >
      <div class="shake-section mt-5">
        <v-row justify="center">
          <v-col cols="12" md="6" sm="6">
           <div class="mt-3 mb-3">
             <v-img class="shake-img"  max-width="600" max-height="600"
                    src="/images/About/Aly-dog.jpg" alt="logo"></v-img>
           </div>

          </v-col>
          <v-col cols="12" md="6" sm="6" class="section-align">
            <div >
              <div class="shake-section-heading mt-3 mb-3">
                <strong>{{ $t('better_together') }}</strong>

              </div>
              <div class="shake-section-subheading mt-3 mb-3">
                <h2>{{ $t('join') }} {{ $t('wag_enabled') }}</h2>

              </div>
              <div class="description mt-3 mb-3">
                <p>{{ $t('shake_description') }}</p>
              </div>
              <v-btn
                class="shake-section-btn mt-3"
                outlined
                rounded
              >
                {{ $t('lets_shake') }}
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
  name: "ShakeTogether.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.shake-section{
  //max-width: 1140px;
  //height: 800px;
  //padding: 120px 0 120px 0 ;
  //Parallax Effect On Row

  @media (min-width: 320px)  and (max-width: 600px)  {
    padding: 30px;
  }

}

.shake-img{
 //width: 80%;
  border-radius: 50px 0 50px 0;
  box-shadow: rgba(0, 0, 0, 0.07);
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.shake-section-heading{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
  color: #000000;
}
.shake-section-subheading{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: $green;
}
.shake-section-btn{
  color: $purple;
  background-color: $white;
}
.shake-section-btn:hover{
  color: $white;
  background-color: $purple;
  //Pulse Grow Effect

}



</style>
