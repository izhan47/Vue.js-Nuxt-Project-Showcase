<template>
  <div class="pa-5">
    <h3 class="mb-3">{{ $t("loved_pet_pros") }}</h3>
    <div>
      <v-row v-if="petLoved.length">
        <v-col cols="12" md="6" sm="12" v-for="item in petLoved" :key="item.id">
          <div class="card-section mb-3">
            <div v-if="item.pet_pro.cover_image" class="rating-section">
              <nuxt-link :to="`/pet-category/${item.pet_pro.slug}`">
                <div
                  class="bg-img-height"
                  :style="
                    `background-image: url(${item.pet_pro.cover_image.image_full_path})`
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
                  {{ item.pet_pro.avg_rating }}
                </span>
              </div>
              <div class="delete-action" @click="removeLove(item.pet_pro.slug)">
                <img
                  class="img-fluid img-height"
                  src="/images/minus.svg"
                  alt=""
                />
              </div>
            </div>
            <div v-else>
              <nuxt-link :to="`/pet-category/${item.pet_pro.slug}`">
                <div class="place-holder"></div>
              </nuxt-link>
            </div>
            <div
              class="card-category"
              @click="$router.push(`/pet-category/${item.pet_pro.slug}`)"
            >
              <h2 class="mb-2 mt-2">{{ item.pet_pro.store_name }}</h2>
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
              <v-btn
                v-if="item.pet_pro.deals_count !== 0"
                class="cat-btn"
                outlined
                rounded
              >
                <img
                  class="img-fluid icon-img mr-1"
                  src="/images/tick.png"
                  alt=""
                />
                {{ $t("deals_offered") }}
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "LovedPetPros.vue",
  data() {
    return {
      petLoved: []
    };
  },
  created() {
    this.lovedPetPro();
  },
  methods: {
    async lovedPetPro() {
      this.$store.commit("SHOW_LOADER", true);
      await this.$store.dispatch("getLovedPet").then(response => {
        this.$store.commit("SHOW_LOADER", false);
        this.petLoved = response.data.data.loved_pet_pros;
      });
    },
    async removeLove(slug) {
      this.$store.commit("SHOW_LOADER", true);
      await this.$store.dispatch("like", slug).then(response => {
        this.$store.commit("SHOW_LOADER", false);
        this.$store.commit("SHOW_SNACKBAR", {
          snackbar: true,
          color: "green",
          message: response.data.message
        });
        this.lovedPetPro();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.custom-container {
  max-width: 1000px;
  padding: 0 1.5rem;
}
.cat-btn {
  background-color: $blue_gem;
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
.img-height {
  max-height: 60px;
}
.delete-action {
  position: absolute;
  z-index: 1;
  top: 25px;
  right: 10px;
}
</style>
