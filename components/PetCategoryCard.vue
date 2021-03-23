<template>
  <!--  card-section-start   -->
  <div class="custom-height custom-container  category_card_section">
    <v-row>
      <v-col cols="12" md="4" sm="12" v-for="(item,i) in cards" :key="i" class="custom-margin">
        <div class="paw-icons-parent">
          <div  class="paw-icon">
            <v-icon  v-for="(icon,j) in item.icons" :key="j" class="paw mr-1" :class=" colors[j] ">{{icon}}</v-icon>
          </div>
          <v-img
            class="img-fluid card-img"
            :src="item.src"
          ></v-img>
        </div>
        <v-card  class="card-radius card-padding">
          <v-card-title class="card-title-padding">
            <div class="card-flex">
              <h2 class="card-heading">  {{ item.name}}</h2>
              <div class="card-flex-rating">
                <v-rating :value="4" length="1" background-color="#00afaa" color="#00afaa" dense  readonly size="20"
                ></v-rating>
                <span class="card-heading-point">
                   {{ item.rating }}
                  </span>
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            <p class="card-description">{{item.description.length < 50 ? item.description : item.description.slice(0, 50) }}
              <span
                class="comment-color"
                @click="loadMore()"> .... </span>
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn v-for="(cat,k) in item.categories" :key="k" :class=" category[k] "   class="card-btn"  outlined rounded>
              {{ cat }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <!--  card-section-end   -->
</template>

<script>
export default {
  name: "PetCategoryCard.vue",
  data(){
    return{
      cards:[
        {
          src:"/images/pet-1.png",
          name:"Paws On Chicon",
          rating:"5.0",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          categories:["Deal Offered","Certified",],
          icons:["mdi-paw","mdi-paw","mdi-paw"],
        },
        {
          src:"/images/pet-2.jpg",
          name:"Liz's Pet Care",
          rating:"4.5",
          description:"Homemade Treats and Food, Pet Store, Self Serve Dog...",
          categories:["Deal Offered"],
          icons:["mdi-paw","mdi-paw"],

        },
        {
          src:"/images/pet-3.jpg",
          name:"Pet Behaviorist",
          rating:"5.0",
          description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          categories:["Deal Offered"],
          icons:["mdi-paw"],

        },
      ],

      readMore:false
    }
  },
  computed:{
    category(){
      return[
        'purple-section',
        'pink-section',
      ]
    },
    colors(){
      return [
        'paw-purple',
        'paw-pink',
        'paw-green',
      ]
    }
  },
  methods:{
    loadMore() {
      this.readMore = true
    },
    loadLess() {
      this.readMore = false
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.category_card_section{
  .card-radius{
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px rgb(0 0 0 / 9%);
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
</style>
