<template>
  <div id="animate">
    <div class="purple-section">
      <v-container>
        <div class="purpose-section">
          <v-row justify="center">
            <v-col cols="12" md="10" sm="12"  >
              <div class="purpose">
                <div class="text-center ">
                  <h2 class="heading  mb-8">{{ $t('our_purpose') }} </h2>
                </div>
                <v-row justify="center">
                  <v-col col="3" md="3" sm="3">
                    <div class="text-center mt-5 mb-5">
                      <img class="img-fluid " src="/images/About/wag.png" alt="">
                    </div>
                  </v-col>
                </v-row>
                <div class="description mb-5">
                  <p>{{ $t('purpose_description') }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>

    </div>
    <div class="crew-img mt-8" id="dog-movement">
      <img class="img-fluid"
           src="/images/About/Teal-Ball.png" alt="logo" >
    </div>
  </div>

</template>

<script>
export default {
name: "Purpose.vue",
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
        if(offset<500){
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
.purpose-section {

  //max-width: 800px;
  //max-height: 250px;
  padding: 100px;
  @media (min-width: 320px)  and (max-width: 600px)  {
    padding: 30px;
  }
}
.heading{
  color:$white;
  font-size:$font-size-40;
}
.description{
  max-width: 800px;
  margin: auto;
  text-align: center;
  width: 100%;
  p{
    color:$white;
    font-weight: $font-weight-400;
    font-size: $font-size-16;
  }
}

.icon{
  color: $white;
  letter-spacing:18px
}

.crew-img{
  text-align: right;
  img{
    max-width: 50px;
  }
  @media (max-width: 767px) {
    img{
      display:none ;
    }
  }

}
</style>
