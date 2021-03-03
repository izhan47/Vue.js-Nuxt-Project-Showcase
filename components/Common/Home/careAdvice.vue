<template>
  <div class="grey-section">
    <div class="custom-container custom-height center-center" >
      <img class="img-fluid img-height" src="/images/Pink-Paw.png" alt="logo">
      <div>
        <h2  class="heading">{{ $t('top_pet_care_advice') }}</h2>
      </div>
        <v-row justify="center">
              <v-col cols="12" md="2" sm="12" class="section-align-center"  v-for="(item,i) in items.slice(0, end)" :key="i">
                <v-btn class="care-section-button" large outlined rounded>{{ item }}</v-btn>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <div class="align-content">
                  <v-btn v-if="items.length>10 && end !== items.length"
                         class=" mt-2 primary-color "
                         text
                         @click="seeMore()"
                  >
                    {{ $t('see_more') }}
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="12" sm="12">
                <div class="center-align">
                  <v-btn
                    v-if="end !== items.length"
                    class="browse-btn  mt-4 mb-4"
                    outlined
                    large
                    @click="browse()"
                  >
                    {{ $t('browse_all') }}
                  </v-btn>
                </div>
              </v-col>
        </v-row>
    </div>
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

.care-section-button{
  font-family: 'Nunito Sans', sans-serif;
  color: $grey;
  font-weight: bold;
  background-color: $white;
  text-transform: capitalize;
  border-width: 3px 3px 3px 3px;
}
.care-section-browse{
  color: #332E80 ;
  border-radius: 10px;
  border: 2px;
}
.align-content{
  width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;

  }
}
.browse-btn{
  color: $purple;
  background-color: $white;
  text-transform: capitalize;
  border-width: 2px 2px 2px 2px ;
  border-color: $grey;
  border-style: solid;
  border-radius: 10px 10px 10px 10px;

}
.browse-btn:hover{
  color: $white;
  background-color: $purple;
}

</style>
