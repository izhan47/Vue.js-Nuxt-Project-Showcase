<template>
  <div>
    <div class="grey-section">
      <div class="custom-container custom-height">
        <div class="text-center">
          <img
            class="img-fluid img-height"
            src="/images/Pink-Paw.png"
            alt="logo"
          />
          <h2 class="heading mt-5">{{ $t("top_pet_care_advice") }}</h2>
        </div>
        <div class="categories-buttons ">
          <v-btn
            v-for="(item, i) in WAL_CATEGORY_LIST.slice(0, end)"
            :key="i"
            large
            outlined
            rounded
            class="category-button"
            :to="`/pet-care-advice?category=${item.value}`"
          >
            {{ item.text }}
          </v-btn>
        </div>

        <div class="text-center">
          <v-btn
            v-if="end < WAL_CATEGORY_LIST.length"
            class=" mt-4 mb-4 round-btn"
            outlined
            large
            rounded
            to="/pet-care-advice"
          >
            {{ $t("browse_all") }}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      end: 9
    };
  },
  mounted() {
    if (process.browser) {
      const images = document.querySelector(".animate");
      if (images) {
        let observer = new IntersectionObserver(entries => {
          if (entries[0].intersectionRatio > 0) {
            entries[0].target.classList.add("fade-in-ease-out");
          } else {
            entries[0].target.classList.remove("fade-in-ease-out");
          }
        });
        observer.observe(images);
      }
    }
  },
  computed: {
    ...mapState(["WAL_CATEGORY_LIST"])
  },
  methods: {
    ...mapActions(["FETCH_WAL_CATEGORY_LIST"])
  },
  async created() {
    this.FETCH_WAL_CATEGORY_LIST();
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.text-center {
  img {
    max-height: $img-max-height-120;
  }
  h2 {
    margin-bottom: 3rem;
  }
}
.align-content {
  width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.categories-buttons {
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  .category-button {
    font-family: $font-family-primary;
    font-size: $font-size-15;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    color: $black;
    background-color: $white;
    text-transform: $text-transform-capitalize;
    border-width: 3px;
    border-color: $grey;
    border-style: solid;
    font-weight: $font-weight-bold;
  }
}
.see-more-btn {
  margin-bottom: 1.5rem;
  text-transform: inherit;
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-700;
  color: $purple;
}
.browse-btn {
  color: $purple;
  background-color: $white;
  text-transform: $text-transform-capitalize;
  border-width: 2px;
  border-color: $grey;
  border-style: solid;
  border-radius: 10px 10px 10px 10px;
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-bold;
}
.browse-btn:hover {
  color: $white;
  background-color: $purple;
}

.fade-in-ease-out {
  animation: animate-up 2s forwards ease-out;
}
@keyframes animate-up {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
