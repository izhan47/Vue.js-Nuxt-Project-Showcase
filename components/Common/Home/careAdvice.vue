<template>
  <div class="grey-section">
    <v-container >
      <div class="care-section">
        <v-row justify="center">
          <v-col cols="12"  md="12" sm="12">
            <v-row>
              <v-col cols="12" md="6" sm="6" offset-md="3" offset-sm="3">
                <img width="200"
                     src="/images/Pink-Paw.png" alt="logo">
              </v-col>
              <v-col cols="12" md="6" sm="6" offset-md="3" offset-sm="3">
                <div class="heading">
                  <h2>{{ $t('top_pet_care_advice') }}</h2>
                </div>
              </v-col>
              <v-col cols="12" md="4" sm="12" class="mt-5" v-for="(item,i) in items.slice(0, end)" :key="i">
                <v-btn
                  class="care-section-button"
                  outlined

                  rounded
                >
                  {{ item }}
                </v-btn>
              </v-col>
              <v-col cols="12" md="6" offset-md="3">
                <v-btn v-if="items.length>10 && end !== items.length"
                       class=" mt-8 menu-item"
                       text
                       @click="seeMore()"
                >
                  {{ $t('see_more') }}
                </v-btn>
              </v-col>
              <v-col cols="12" md="6" offset-md="3">
                <v-btn
                  v-if="end !== items.length"
                  class="menu-item mt-4"
                  outlined
                  @click="browse()"
                >
                  {{ $t('browse_all') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "careAdvice",
  data(){
    return{
      items:['Dog Behavior','Pet Adoption','Kids & Dogs','Pet Wellness','Dog Parks','Nutrition','Training Basics',
        'Buzz','Pet Toys',  'Cat Training','First Aid','Nutrition', 'Pet Toys','Pet Wellness', 'Pet Food',
        'Foo', 'Bar', 'Fizz', 'Photography'],
      end:9,
    }
  },
  methods:{
    seeMore(){
      this.end += 5
      this.end= this.end<this.items.length ? this.end : this.items.length
    },
    browse(){
      this.end=this.items.length

    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.care-section{
  width: 950px;
  height: auto;
  padding-bottom: 100px;
  //Parallax Effect
}
.care-section-img{
  width: 20%;
  margin-top: -20px;
  margin-bottom: -50px;
}
.care-section-button{
  font-family: 'Nunito Sans', sans-serif;
  color: #323638;
  font-weight: bold;
  //border-radius: 100px;
  //border: 3px;
}
.care-section-browse{
  color: #332E80 ;
  border-radius: 10px;
  border: 2px;
}

</style>
