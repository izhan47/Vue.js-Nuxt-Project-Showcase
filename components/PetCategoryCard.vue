<template>
<div>
  <div class="card-section mb-3">
    <div v-if="item.cover_image" class="rating-section">
      <nuxt-link :to="`/pet-category/${item.slug}`" >
        <div  class="bg-img-height" :style="`background-image: url(${item.cover_image.image_full_path})`">
        </div>

      </nuxt-link>
      <div class="rating-field">
        <v-rating :value="4" length="1" background-color="#00afaa" color="#00afaa" dense   readonly size="20"
        ></v-rating>
        <span class="card-heading-point">
         {{ item.avg_rating }}
        </span>
      </div>
    </div>
    <div v-else>
      <nuxt-link :to="`/pet-category/${item.slug}`" >
        <div  class="place-holder">
        </div>
      </nuxt-link>
    </div>
    <div class="card-category" @click="$router.push(`/pet-category/${item.slug}`)">
      <h2 class="mb-2 mt-2">{{item.store_name}}</h2>
      <div class="mb-3" >
        <span class="category-title" v-for="cat in item.categories"> {{cat.name}} |</span>
      </div>
      <v-btn v-if="item.deals_count !== 0 "   class="cat-btn"  outlined rounded>
        <img class="img-fluid icon-img mr-1" src="/images/tick.png" alt="">
        {{ $t('deals_offered')}}
      </v-btn>
    </div>
  </div>

<!--  <div class="category_card_section">-->
<!--    <div class="paw-icons-parent" v-if="item.cover_image">-->
<!--      <div  class="paw-icon" v-for="(item,y) in cards" :key="y">-->
<!--        <v-icon  v-for="(icon,j) in item.icons" :key="j" class="paw mr-1" :class=" colors[j] ">{{icon}}</v-icon>-->
<!--      </div>-->
<!--      <nuxt-link :to="`/pet-category/${item.slug}`" >-->
<!--        <div  class="bg-img-height" :style="`background-image: url(${item.cover_image.image_full_path})`">-->
<!--        </div>-->
<!--      </nuxt-link>-->
<!--    </div>-->
<!--    <v-card  class="card-radius card-padding card-custom-height" @click="$router.push(`/pet-category/${item.slug}`)">-->
<!--      <v-card-title class="card-title-padding">-->
<!--        <div class="card-flex">-->
<!--          <h2 class="card-heading">  {{ item.store_name}}</h2>-->
<!--          <div class="card-flex-rating">-->
<!--            <v-rating :value="4" length="1" background-color="#00afaa" color="#00afaa" dense  readonly size="20"-->
<!--            ></v-rating>-->
<!--            <span class="card-heading-point">-->
<!--                   {{ item.avg_rating }}-->
<!--                  </span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </v-card-title>-->
<!--      <v-card-text>-->
<!--        <p class="card-description">{{item.description.length < 105 ? item.description : item.description.slice(0, 105) }}-->
<!--          <span-->
<!--            class="comment-color"> .... {{$t('read_more')}}</span>-->
<!--        </p>-->
<!--        <nuxt-link :to="`/pet-category/${item.slug}`"><button>READ MORE</button></nuxt-link>-->
<!--      </v-card-text>-->
<!--      <v-card-actions v-for="(item,p) in cards" :key="p">-->
<!--        <v-btn v-for="(cat,k) in item.categories" :key="k" :class=" category[k] "   class="card-btn"  outlined rounded>-->
<!--          {{ cat }}-->
<!--        </v-btn>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->
<!--  </div>-->
</div>
</template>

<script>
export default {
  name: "PetCategoryCard.vue",
  props:{
    item: {
      type: Object,
      required: true,
    },
  },
  data(){
    return{

      items:[],
      cards:[
        {
          src:"/images/pet-1.png",
          name:"Best Dog Food For Dogs With Allergies: Jiminy's Cricket Crave",
          rating:"5.0",
          features:"Pet Food",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered","Certified",],
          icons:["mdi-paw","mdi-paw","mdi-paw"],
        },
      ],
      readMore:false
    }
  },
  computed:{
    category(){
      return[
        'blue-gem',
        'orange',
      ]
    },
    colors(){
      return [
        'paw-purple',
        'paw-pink',
        'paw-green',
      ]
    },
    petProData(){
      return this.$store.state.pet_pro_list
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.category_card_section{
  .card-radius{
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
    min-height: 280px;
  }
}
.card-title-padding::v-deep.v-card__title{
  padding: 16px 16px 0 16px;
}
.card-padding{
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
.bg-img-height{
  height: 269px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 19px 19px 0 0  ;
}
.place-holder{
  background-image: url("/images/Pink-Paw.png");
  height: 269px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 19px 19px 0 0  ;
}
.cat-btn{
  background-color: $blue_gem;
  color: $white;
}
.blue-gem{
  background-color: $blue_gem;
  color: $white;
  //background-image: url("/images/percent.png");
}
.orange{
  background-color: $orange;
  color: $white;
  //background-image: url("/images/tick.png");
}


.rating-section{
  position:relative;
}
.rating-field{
  position: absolute;
  background: #FFFFFF;
  border-radius: 51px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  width: 48.59px;
  height: 25.39px;
  left: 20px;
  top: 27px;
  border: 1px;

}
</style>
