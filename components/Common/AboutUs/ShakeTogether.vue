<template>
  <div>
    <v-container >
      <div class="shake-section mt-5">
        <v-row justify="center">
          <v-col cols="12" md="6" sm="6">
           <div class="custom-padding text-right">
             <img class="shake-img img-fluid "
                    src="/images/About/Aly-dog.jpg" alt="logo"/>
           </div>
          </v-col>
          <v-col cols="12" md="6" sm="6" class="shake-section">
            <div class="center">
              <div class=" mt-3 space">
                <h2 class="shake-section-heading line-height">{{ $t('better_together') }}</h2>
              </div>
              <div class="space">
                <h2 class="shake-section-subheading line-height">{{ $t('join') }} {{ $t('wag_enabled') }}</h2>
              </div>
              <div class="description mb-3">
                <p>{{ $t('shake_description') }}</p>
              </div>
              <div class="align-content">
              <v-btn
                class="round-btn mt-3"
                outlined
                rounded
                large
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
.shake-section{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.custom-padding{
  padding-top: 5rem;
  padding-right: 2rem;
  @media (max-width: 767px  ) {
    padding-right: 0;
  }
}
.space{
  margin-bottom: 1.6rem;
}
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
.description{
  max-width: 500px;
  p{
    color: $black;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
}




</style>
