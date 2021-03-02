<template>
  <div>
    <v-container >
      <div class="crew-section">
        <v-row justify="center">
          <v-col cols="12"  md="10" sm="12">
            <div>
              <img class="crew-img"
                   src="/images/About/Teal-Ball.png" alt="logo">
            </div>
            <div class="crew-section-heading mt-5 mb-5">
              <h2>{{ $t('meet_crew') }} </h2>
            </div>
            <div class="crew-divider">
              <v-divider></v-divider>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="crew-card-section">
        <v-row justify="center">
          <v-col col="12" md="4" sm="12" v-for="item in items">
            <v-container>
              <div>
                <v-img   max-height="200" max-width="200" :src="item.src"  class="crew-card-img" > </v-img>
              </div>
              <div>
                <h2 class="crew-card-heading mt-5">{{item.title}}</h2>
                <p class="crew-card-sub-heading">{{item.sub_title}}</p>
              </div>

              <div class="crew-card-description">{{item.description}}</div>
            </v-container>


          </v-col>
        </v-row>
      </div>
    </v-container>

  </div>
</template>
<script>
export default {
name: "Crew.vue",
data(){
  return{
    items:[
      {
        src: '/images/About/Aly-About.jpg',
        // title: this.$i18n.t('about_us'),
        title: 'ALY',
        sub_title:'HUMAN IN CHARGE' ,
        description: 'Hi there! I’m Aly, the head person behind Wag Enabled. We needed a human to sign things after all. My approach to pet care emphasizes connecting through trust and love, not fear and intimidation.',
    },
      {
        src: '/images/About/Dog-About-1.jpg',
        title: 'TRUFFLE',
        sub_title:'SENIOR PRODUCT TESTER' ,
        description: 'No product enters Wag Enabled without the “Truffle Test.” He sniffs, tastes, tugs, and snuggles to guarantee that only the top toys, nibbles, and supplies join our roster. He takes his job seriously and has been known to put in overtime for treat trials.',
      },
      {
        src: '/images/About/Dog-About-2.jpg',
        title: 'BEAN',
        sub_title:'JUNIOR TROUBLE MAKER' ,
        description: 'Bean ensures that all businesses we work with value patience. As resident mischief finder, he requires extra doses of love and care, especially when his wild ways wreak havoc on our office. We trust those who know how to handle his spirit — and do so in a kind and constructive manner.',
      },


    ]
  }
}
}
</script>
<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.crew-section{
//width: 1140px;
//  padding: 80px 0 80px 0;
//  //text-align: center;
//  float: left;
//  @media  (max-width: 320px)   {
//    width: 250px;
//    padding: 0;
//    margin: 0 20px 0 20px;
//  }
//  @media (min-width: 321px) and (max-width: 375px)   {
//    width: 330px;
//    padding: 0;
//    margin: 0 20px 0 20px;
//  }
//  @media (min-width: 376px) and  (max-width: 425px)   {
//    width: 375px;
//    padding: 0;
//    margin: 0 20px 0 20px;
//  }
//  @media (min-width: 600px) and (max-width: 768px)  {
//    width: 500px;
//  }
//  @media only screen and (max-width: 1024px)  {
//    width: 930px;
//  }


}
.crew-section-heading{
  color:$purple;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
}
.crew-divider{
  width: 50%;
  text-align: center;

}
.crew-img{
  width: 5%;
  float: right;
}
.crew-card-section{
  //max-width: 1140px;
  margin-top: 20px;
}
.crew-card-img{

  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.07);

  display: block;
  margin-left: auto;
  margin-right: auto;
}
.crew-card-heading{

  color: $green;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 25px;
  //line-height: 34px;
  text-transform: uppercase;
}
.crew-card-sub-heading{
  color:  #323638 ;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
  letter-spacing: 5px;
  font-weight: bold;
  text-align: center;
}
.crew-card-description{
  color: $black;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 1px;
  text-align: center;

}





</style>
