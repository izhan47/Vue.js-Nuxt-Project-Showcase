<template>
  <v-card>
    <v-card-text>
      <div class="reviews">
        <h1>Comming Soon</h1>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "pet-biz-events",
  props: {
    reviews: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
// .reviews{

// }
</style>
