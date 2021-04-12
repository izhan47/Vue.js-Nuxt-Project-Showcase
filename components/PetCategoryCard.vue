<template>
<div>
<!--  <div class="card-section mb-8" v-for="card in cards">-->
<!--    <v-img-->
<!--      class="img-fluid card-img"-->
<!--      :src="card.src"-->
<!--    ></v-img>-->
<!--    <div class="card-category">-->
<!--      <span> {{card.features}}</span>-->
<!--      <h2 class="mt-1">{{card.name}}</h2>-->
<!--      <v-btn v-for="(cat,k) in card.category" :key="k" :class=" category[k] "   class="cat-btn"  outlined rounded>-->
<!--&lt;!&ndash;        <v-icon class="ml-1"&ndash;&gt;-->
<!--&lt;!&ndash;         left&ndash;&gt;-->
<!--&lt;!&ndash;          dark&ndash;&gt;-->
<!--&lt;!&ndash;        >&ndash;&gt;-->
<!--&lt;!&ndash;          mdi-cloud-upload&ndash;&gt;-->
<!--&lt;!&ndash;        </v-icon>&ndash;&gt;-->
<!--        <img class="img-fluid icon-img mr-1" src="/images/Vector.png" alt="">-->
<!--        {{ cat }}-->
<!--      </v-btn>-->
<!--      &lt;!&ndash;          <v-card-actions v-for="(item,p) in cards" :key="p">&ndash;&gt;-->
<!--      &lt;!&ndash;            <v-btn v-for="(cat,k) in item.categories" :key="k" :class=" category[k] "   class="card-btn"  outlined rounded>&ndash;&gt;-->
<!--      &lt;!&ndash;              {{ cat }}&ndash;&gt;-->
<!--      &lt;!&ndash;            </v-btn>&ndash;&gt;-->
<!--      &lt;!&ndash;          </v-card-actions>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
  <div class="category_card_section">
    <div class="paw-icons-parent" v-if="item.cover_image">
      <!--    for time being       -->
      <!--          <div  class="paw-icon" v-for="(item,y) in cards" :key="y">-->
      <!--            <v-icon  v-for="(icon,j) in item.icons" :key="j" class="paw mr-1" :class=" colors[j] ">{{icon}}</v-icon>-->
      <!--          </div>-->
      <nuxt-link :to="`/pet-category/${item.slug}`" >
        <div  class="bg-img-height" :style="`background-image: url(${item.cover_image.image_full_path})`">
        </div>
      </nuxt-link>

    </div>
    <v-card  class="card-radius card-padding card-custom-height" @click="$router.push(`/pet-category/${item.slug}`)">
      <v-card-title class="card-title-padding">
        <div class="card-flex">
          <h2 class="card-heading">  {{ item.store_name}}</h2>
          <div class="card-flex-rating">
            <v-rating :value="4" length="1" background-color="#00afaa" color="#00afaa" dense  readonly size="20"
            ></v-rating>
            <span class="card-heading-point">
                   {{ item.avg_rating }}
                  </span>
          </div>
        </div>
      </v-card-title>
      <v-card-text>
        <p class="card-description">{{item.description.length < 105 ? item.description : item.description.slice(0, 105) }}
          <span
            class="comment-color"> .... {{$t('read_more')}}</span>
        </p>
<!--        <nuxt-link :to="`/pet-category/${item.slug}`"><button>READ MORE</button></nuxt-link>-->
      </v-card-text>
      <!--    for time being       -->
      <!--          <v-card-actions v-for="(item,p) in cards" :key="p">-->
      <!--            <v-btn v-for="(cat,k) in item.categories" :key="k" :class=" category[k] "   class="card-btn"  outlined rounded>-->
      <!--              {{ cat }}-->
      <!--            </v-btn>-->
      <!--          </v-card-actions>-->
    </v-card>
  </div>
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
          name:"Paws On Chicon",
          rating:"5.0",
          features:"Pet Food",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered","Certified",],
          icons:["mdi-paw","mdi-paw","mdi-paw"],
        },
        {
          src:"/images/pet-2.jpg",
          name:"Liz's Pet Care",
          rating:"4.5",
          features:"Interactive Toys",
          description:"Homemade Treats and Food, Pet Store, Self Serve Dog...",
          category:["Deal Offered"],
          icons:["mdi-paw","mdi-paw"],

        },
        {
          src:"/images/pet-3.jpg",
          name:"Pet Behaviorist",
          rating:"5.0",
          features:"Treats",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category:["Deal Offered"],
          icons:["mdi-paw"],
        },
      ],
      readMore:false
    }
  },
  computed:{
    category(){
      return[
        'neon-blue',
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
  height: 270px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 10px 0 0;
}

.card-section{
  min-width: 350px;
  height: 412px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 19px;

}
.card-img{
  min-width: 350px;
  min-height: 269px;
  //background: url(.jpg), #C4C4C4;
  border-radius: 19px 19px 0 0  ;
}
.card-category{
  padding: 16px;
  span{
    min-width: 56px;
    min-height: 19px;
    font-family:$font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #878787;
  }
  h2{
    min-width: 296.36px;
    min-height: 35px;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #040430;
  }
  .neon-blue{
    background-color: #6161FF;
    color: $white;
  }
  .orange{
    background-color:  #FFA800;
    color: $white;
  }
}
.cat-btn{
  min-width: 130px;
  min-height: 25px;
  font-family: $font-family-primary;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #FFFFFF;
  margin-right: 4px;
  text-transform: capitalize;

}
.icon-img{
  max-height: 40px;
}
</style>
