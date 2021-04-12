<template>
  <div class="watch_and_learn_section">
    <nuxt-link :to="`/product-reviews/${item.slug}`" >
      <div  class="bg-img-height" :style="`background-image: url(${item.thumbnail_thumb_full_path})`">
      </div>
    </nuxt-link>
<!--      <v-img-->
<!--        class="img-fluid card-img"-->
<!--        :src="item.thumbnail_thumb_full_path"-->
<!--      ></v-img>-->
    <v-card  class="card-radius card-custom-height card-padding" >
      <v-card-title class="card-heading">{{ item.title}}</v-card-title>
      <v-card-text v-if="item.categories" v-for="category in item.categories">
        <p class="card-description card-des">{{category.category.name }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProductReviewCard.vue",
  props:{
    item: {
      type: Object,
      required: true,
    },
  },

}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.watch_and_learn_section{
  .card-radius{
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
  }
}
//.card-custom-height{
//  min-height: 280px;
//}
.card-padding{
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
.card-heading::v-deep.v-card__title{
  padding:6px;
  color: $dark-charcoal;
  //font-size: $font-size-28;
  font-size: $font-size-22;
  //font-weight: $font-weight-600;
  font-weight: normal;
  line-height: 32px;
  margin-bottom: 10px;
  text-transform: $text-transform-capitalize;
  font-style: normal;
  word-break: break-word;
  font-family: $font-family-primary;
}
.card-des::v-deep.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 0 6px;
}
.card-description{
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-600;
  margin-bottom: 0;
}
.card-img {
  min-height: 285px;
}

</style>
