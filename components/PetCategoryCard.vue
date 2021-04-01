<template>
  <div class="category_card_section">
    <div class="paw-icons-parent">
      <!--    for time being       -->
      <!--          <div  class="paw-icon" v-for="(item,y) in cards" :key="y">-->
      <!--            <v-icon  v-for="(icon,j) in item.icons" :key="j" class="paw mr-1" :class=" colors[j] ">{{icon}}</v-icon>-->
      <!--          </div>-->
      <nuxt-link :to="`/pet-category/${item.slug}`">
        <div class="bg-img-height" :style="`background-image: url(${item.cover_image.image_full_path})`">
        </div>
      </nuxt-link>

    </div>
    <v-card  class="card-radius card-padding">
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
        <p class="card-description">{{item.description.length < 50 ? item.description : item.description.slice(0, 50) }}
          <span
            class="comment-color"
            @click="loadMore()"> .... </span>
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
          categories:["Deal Offered","Certified",],
          icons:["mdi-paw","mdi-paw","mdi-paw"],
        },
        {
          categories:["Deal Offered"],
          icons:["mdi-paw","mdi-paw"],

        },
        {
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
    },
    petProData(){
      return this.$store.state.pet_pro_list
    }
  },
  created() {
    this.$store.dispatch('petProList')
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
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
    min-height: 240px;
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
}
</style>
