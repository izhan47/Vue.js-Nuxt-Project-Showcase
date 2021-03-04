<template>
  <div class="grey-section">
    <div class="custom-container custom-height " >
      <div class="center-align">
        <img class="img-fluid img-height" src="/images/Pink-Paw.png" alt="logo">
      </div>
      <div class="center-align line-height">
        <h2  class="heading space-heading">{{ $t('top_pet_care_advice') }}</h2>
      </div>
      <div class="categories-buttons" >
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






      <!--        <v-row justify="center" class="row-margin">-->
<!--              <v-col cols="12"  md="2" sm="12" class="section-align-center "  >-->
<!--                <v-btn class="care-section-button" large outlined rounded>{{ item }}</v-btn>-->
<!--              </v-col>-->
<!--              <v-col cols="12" md="6" sm="12">-->
<!--                <div class="align-content">-->
<!--                  <v-btn v-if="items.length>10 && end !== items.length"-->
<!--                         class=" mt-2 primary-color "-->
<!--                         text-->
<!--                         @click="seeMore()"-->
<!--                  >-->
<!--                    {{ $t('see_more') }}-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--              </v-col>-->
<!--            </v-row>-->

<!--      -->


<!--              <v-col cols="12" md="12" sm="12">-->
<!--                <div class="center-align">-->
<!--                  <v-btn-->
<!--                    v-if="end !== items.length"-->
<!--                    class="browse-btn  mt-4 mb-4"-->
<!--                    outlined-->
<!--                    large-->
<!--                    @click="browse()"-->
<!--                  >-->
<!--                    {{ $t('browse_all') }}-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--              </v-col>-->

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
.align-content{
  width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.space-heading{
  margin-bottom: 2rem;
}
.categories-buttons{
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;

  .category-button{
    margin-right: 1rem;
    margin-bottom: 1.5rem;
    color: $black;
    background-color: $white;
    text-transform: capitalize;
    border-width: 2px 2px 2px 2px ;
    border-color: $grey;
    border-style: solid;
    font-weight: bold;
    //border-radius: 10px 10px 10px 10px;
  }
}
.see-more-btn{
  margin-bottom: 1.5rem;
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
