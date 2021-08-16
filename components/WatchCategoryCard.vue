<template>
  <div class="card-section mb-3">
    <nuxt-link :to="`/pet-care-advice/${item.slug}`">
      <div
        class="bg-img-height"
        v-lazy:background-image="item.thumbnail_full_path"
      ></div>
    </nuxt-link>
    <div
      class="card-category"
      @click="$router.push(`/pet-care-advice/${item.slug}`)"
    >
      <h2 class="mb-2 mt-2">{{ item.title }}</h2>
      <div class="mb-3">
        <span class="category-title"> {{ item.category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.card-custom-height {
  min-height: 240px;
}
.card-padding {
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
.card-heading::v-deep.v-card__title {
  padding: 6px;
}
.card-des::v-deep.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 6px;
}
.card-description {
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: normal;
  line-height: 1.87;
}
.bg-img-height {
  height: 270px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 10px 0 0;
}
</style>
