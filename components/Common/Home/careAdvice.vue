<template>
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
          v-for="(item, i) in categories.slice(0, end)"
          :key="i"
          large
          outlined
          rounded
          class="category-button"
          :to="`/watch-learn?category=${item.value}`"
        >
          {{ item.label }}
        </v-btn>
      </div>

      <div class="text-center">
        <v-btn
          v-if="end !== items.length"
          class=" mt-4 mb-4 round-btn"
          outlined
          large
          rounded
          to="/watch-learn"
        >
          {{ $t("browse_all") }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "careAdvice",
  data() {
    return {
      items: [
        "Dog Behavior",
        "Pet Adoption",
        "Kids & Dogs",
        "Pet Wellness",
        "Dog Parks",
        "Nutrition",
        "Training Basics",
        "Buzz",
        "Pet Toys",
        "Cat Training",
        "First Aid",
        "Nutrition",
        "Pet Toys",
        "Pet Wellness",
        "Pet Food",
        "Foo",
        "Bar",
        "Fizz",
        "Photography"
      ],
      end: 9,
      categories: []
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
  methods: {
    seeMore() {
      this.end += 5;
      this.end = this.end < this.items.length ? this.end : this.items.length;
    },
    browse() {
      this.end = this.items.length;
    },
    async fetchCategories() {
      try {
        const resp = await this.$store.dispatch("watchCategories");
        const { category_list } = resp.data.data;
        this.categories = category_list.filter(cat => cat.value);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.fetchCategories();
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
