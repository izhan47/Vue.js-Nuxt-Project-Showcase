<template>
  <div  >

    <v-container >
      <div class="crew-card-section" >

        <div class="space heading">
          <h2>{{ $t('meet_crew') }} </h2>
        </div>
        <div class="crew-divider">
          <v-divider></v-divider>
        </div>
        <v-row justify="center">
          <v-col col="12" md="4" sm="12" v-for="(item,i) in items" :key="i">
            <v-container>
              <div>
                <v-img   max-height="200" max-width="200" :src="item.src"  class="crew-card-img" > </v-img>
              </div>
              <div>
                <h2 class="crew-card-heading mt-5">{{item.title}}</h2>
                <p class="crew-card-sub-heading ">{{item.sub_title}}</p>
              </div>

              <p class="crew-card-description">{{item.description}}</p>
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
},

}
</script>
<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.heading{
 h2{
   font-size: $font-size-60;
   font-weight: $font-weight-550;
 }
}
.space{
  margin: 6rem 0;
}

.crew-divider{
  width: 50%;
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width: 769px) {
    width: 100%;
  }
}

.crew-card-section{
  max-width: 1140px;
  margin: auto;

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
  font-family:  $font-family-primary;
  font-size: $font-size-25;
  font-weight: $font-weight-600;

  //line-height: 34px;
  text-transform: $text-transform-uppercase;
}
.crew-card-sub-heading{
  color:  $black ;
  font-family:  $font-family-primary;
  font-size: $font-size-16;
  letter-spacing: 5px;
  font-weight: $font-weight-bold;
  text-align: center;
  margin-bottom: 2rem;
}
.crew-card-description{
  color: $black;
  font-family:  $font-family-primary;
  font-weight: $font-weight-400;
  font-size: $font-size-16;
  line-height: 30px;
  //letter-spacing: 1px;
  text-align: center;

}
</style>
