<template>
  <div class="card-section mb-3">
    <nuxt-link :to="`/best-pet-products/${item.slug}`">
      <div
        class="bg-img-height"
        v-lazy:background-image="item.thumbnail_full_path"
      >
        <!-- <img :src="`${item.thumbnail_full_path}`" /> -->
      </div>
    </nuxt-link>
    <div
      class="card-category"
      @click="$router.push(`/best-pet-products/${item.slug}`)"
    >
      <h2 class="mb-2 mt-2">{{ item.title }}</h2>
      <div class="mb-3" v-if="item.categories">
        <span
          class="category-title"
          v-for="(cat, i) in item.categories"
          :key="i"
        >
          {{ cat.category.name }}
          <span v-if="i !== item.categories.length - 1"> | </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductReviewCard.vue",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.watch_and_learn_section {
  .card-radius {
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
  }
}
.card-padding {
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
.card-heading::v-deep.v-card__title {
  padding: 6px;
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
.card-des::v-deep.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 0 6px;
}
.card-description {
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-600;
  margin-bottom: 0;
}
.card-img {
  min-height: 285px;
}
</style>
