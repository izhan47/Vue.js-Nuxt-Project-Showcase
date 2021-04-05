<template>
  <div class="watch_and_learn_section">
      <v-img
        class="img-fluid card-img"
        :src="item.thumbnail_thumb_full_path"
      ></v-img>
    <v-card  class="card-radius card-custom-height card-padding" >
      <v-card-title class="card-heading">{{ item.title}}</v-card-title>
      <v-card-text>
        <p class="card-description card-des">{{item.blog_meta_description.length < 50 ? item.blog_meta_description : item.blog_meta_description.slice(0, 50) }}
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
.card-custom-height{
  min-height: 250px;
}
.card-padding{
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
.card-heading::v-deep.v-card__title{
  padding:6px;
  font-family: $font-family-primary;
  font-size: $font-size-24;
  font-weight: $font-weight-bold;
}
.card-des::v-deep.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 6px;
}
.card-description{
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-500;
}
.card-img {
  min-height: 285px;
}

</style>
