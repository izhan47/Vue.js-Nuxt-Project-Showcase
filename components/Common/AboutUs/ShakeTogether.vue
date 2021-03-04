<template>
  <div class="grey-section">
    <v-container >
      <div class="shake-section mt-5">
        <v-row justify="center">
          <v-col cols="12" md="6" sm="6">
           <div class="mt-3 mb-3 center-align">
             <img class="shake-img img-fluid "
                    src="/images/About/Aly-dog.jpg" alt="logo"/>
           </div>

          </v-col>
          <v-col cols="12" md="6" sm="6" class="section-align-center">
            <div >
              <div class=" mt-3 mb-3">
                <h2 class="shake-section-heading line-height">{{ $t('better_together') }}</h2>

              </div>
              <div class=" mt-3 mb-3">
                <h2 class="shake-section-subheading line-height">{{ $t('join') }} {{ $t('wag_enabled') }}</h2>

              </div>
              <div class="shake-section-description mt-3 mb-3">
                <p class=" line-height">{{ $t('shake_description') }}</p>
              </div>
              <div class="align-content">
              <v-btn
                class="round-btn mt-3"
                outlined
                rounded
              >
                {{ $t('lets_shake') }}
              </v-btn>
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
  name: "ShakeTogether.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.shake-img{
  border-radius: 50px 0 50px 0;
  box-shadow:0 12px 20px 10px rgba(0, 0, 0, 0.07);
  max-width: 450px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
}
.shake-section-heading{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
  color:$black;
  text-transform: capitalize;
}
.shake-section-subheading{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 40px;
  color: $green;
}
.shake-section-description{
  padding-right: 90px;
  p{
    color: $black;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
}




</style>
