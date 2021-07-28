<template>
  <div>
    <div class="card-section mb-3">
      <div v-if="item.cover_image" class="rating-section">
        <nuxt-link :to="`/find-a-pet-biz/${item.slug}`">
          <div
            class="bg-img-height"
            :style="
              `background-image: url(${item.cover_image.image_full_path})`
            "
          ></div>
        </nuxt-link>
        <div class="rating-field">
          <v-rating
            :value="4"
            length="1"
            background-color="#00afaa"
            color="#00afaa"
            dense
            readonly
            size="20"
          ></v-rating>
          <span class="card-heading-point">
            {{ item.avg_rating }}
          </span>
        </div>
      </div>
      <div v-else>
        <nuxt-link :to="`/find-a-pet-biz/${item.slug}`">
          <div class="place-holder"></div>
        </nuxt-link>
      </div>
      <div
        class="card-category"
        @click="$router.push(`/find-a-pet-biz/${item.slug}`)"
      >
        <h2 class="mb-2 mt-2">{{ item.store_name }}</h2>
        <div class="mb-3">
          <span
            class="category-title"
            v-for="(cat, i) in item.categories"
            :key="i"
          >
            {{ cat.name }}
            <span v-if="i !== item.categories.length - 1"> | </span>
          </span>
        </div>
        <v-btn v-if="item.deals_count !== 0" class="cat-btn" outlined rounded>
          <img class="img-fluid icon-img mr-1" src="/images/tick.png" alt="" />
          {{ $t("deals_offered") }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetCategoryCard.vue",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: [],
      cards: [
        {
          src: "/images/pet-1.png",
          name: "Best Dog Food For Dogs With Allergies: Jiminy's Cricket Crave",
          rating: "5.0",
          features: "Pet Food",
          description:
            "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
          category: ["Deal Offered", "Certified"],
          icons: ["mdi-paw", "mdi-paw", "mdi-paw"]
        }
      ],
      readMore: false
    };
  },
  computed: {
    category() {
      return ["blue-gem", "orange"];
    },
    colors() {
      return ["paw-purple", "paw-pink", "paw-green"];
    },
    petProData() {
      return this.$store.state.pet_pro_list;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.category_card_section {
  .card-radius {
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
    min-height: 280px;
  }
}
.card-title-padding::v-deep.v-card__title {
  padding: 16px 16px 0 16px;
}
.card-padding {
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
.bg-img-height {
  height: 269px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 19px 19px 0 0;
}
.place-holder {
  background-image: url("/images/Pink-Paw.png");
  height: 269px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 19px 19px 0 0;
}
.cat-btn {
  background-color: $blue_gem;
  color: $white;
}
.blue-gem {
  background-color: $blue_gem;
  color: $white;
}
.orange {
  background-color: $orange;
  color: $white;
}

.rating-section {
  position: relative;
}
.rating-field {
  position: absolute;
  background: #ffffff;
  border-radius: 51px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  width: 60px;
  height: 25.39px;
  left: 20px;
  top: 27px;
  border: 1px;
}
</style>
