<template>
  <div class="grey-section" >
    <div class="custom-container custom-height ">
      <div class="text-center">
        <img class="img-fluid img-height" src="/images/Pink-Paw.png" alt="logo">
        <h2  class="heading mt-5">{{ $t('top_pet_care_advice') }}</h2>
      </div>
      <div class="categories-buttons " >
           <v-btn v-for="(item,i) in items.slice(0, end)" :key="i"
                  large outlined rounded
                  class="category-button"
           >
             {{item}}
           </v-btn>

          <v-btn v-if="items.length>10 && end !== items.length"
                 class="primary-color see-more-btn"
                 text
                 @click="seeMore()"
          >
            {{ $t('see_more') }}
          </v-btn>

      </div>

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
.text-center{
  img{
    max-height: 120px;
  }
  h2{
    margin-bottom: 3rem;
  }
}
.align-content{
  width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
}


.categories-buttons{
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  .category-button{
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    color: $black;
    background-color: $white;
    text-transform: capitalize;
    border-width: 3px;
    border-color: $grey;
    border-style: solid;
    font-weight: bold;
    //border-radius: 10px 10px 10px 10px;
  }
}
.see-more-btn{
  margin-bottom: 1.5rem;
  text-transform: inherit;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
}
.browse-btn{
  color: $purple;
  background-color: $white;
  text-transform: capitalize;
  border-width: 2px;
  border-color: $grey;
  border-style: solid;
  border-radius: 10px 10px 10px 10px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
  font-weight: bold;

}
.browse-btn:hover{
  color: $white;
  background-color: $purple;
}

</style>
