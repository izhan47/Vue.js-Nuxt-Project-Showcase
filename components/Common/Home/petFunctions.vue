<template>
  <div class="grey-section">
    <div class="custom-container custom-height custom-padding" id="animate">
      <div class="function-heading mb-5">
        <h2 class="heading text-center">
          {{ $t("only_best_for_pets") }}
        </h2>
      </div>
      <div class="description text-center space">
        <p>{{ $t("pet_functionality_description") }}</p>
      </div>
      <v-row justify="center">
        <v-col
          cols="12"
          md="4"
          sm="12"
          v-for="card in petProCards"
          :key="card.id"
        >
          <v-card class="card-radius pa-6" :class="card.class" :to="card.to">
            <div>
              <h2 class="card-heading">{{ $t(card.text1) }}</h2>
              <h2 class="card-heading ">{{ $t(card.text2) }}</h2>
            </div>
            <div class="card-arrow-icon" :class="card.class">
              <v-btn large icon color="white" class="circle"
                ><v-icon>mdi-chevron-right</v-icon></v-btn
              >
            </div>
            <div class="card-img ">
              <img class="img-fluid img-height" :src="card.image" alt="logo" />
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="search-img" id="dog-movement">
        <img
          class="img-fluid"
          src="/images/Wag-Enabled-HP-Dog.png"
          alt="logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "petFunctions.vue",
  computed: {
    petProCards() {
      return [
        {
          id: 1,
          text1: "find_a",
          text2: "local_business",
          to: "/find-a-pet-biz",
          image: "/images/Column-Bone.png",
          class: "green-section"
        },
        {
          id: 2,
          text1: "discover_best",
          text2: "pet_products",
          to: "/best-pet-products",
          image: "/images/Column-Food-Dish.png",
          class: "purple-section "
        },
        {
          id: 3,
          text1: "explore_pet_care",
          text2: "advice",
          to: "/pet-care-advice",
          image: "/images/Column-Speech-Bubbles.png",
          class: "pink-section"
        }
      ];
    }
  },
  mounted() {
    if (process.browser) {
      let dog = document.getElementById("dog-movement");
      if (dog) {
        (function() {
          let throttle = function(type, name, obj) {
            let object = obj || window;
            let running = false;
            let func = function() {
              if (running) {
                return;
              }
              running = true;
              requestAnimationFrame(function() {
                object.dispatchEvent(new CustomEvent(name));
                running = false;
              });
            };
            object.addEventListener(type, func);
          };
          throttle("scroll", "optimizedScroll");
        })();

        window.addEventListener("optimizedScroll", function() {
          const animate = document.getElementById("animate");
          if (animate) {
            let offset = window.pageYOffset - animate.offsetTop;
            if (offset < 350) {
              dog.style.transform = "translate(-" + offset + "px,0px)";
            }
            if (window.screen.width < 769) {
              dog.style.transform = "none";
            }
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.custom-padding {
  padding: 8rem 12px 12px 12px;
}
.function-heading {
  h2 {
    font-size: $font-size-45;
  }
}
.card-heading {
  color: $white;
  font-family: $font-family-primary;
  font-size: $font-size-25;
  font-weight: $font-weight-400;
  text-align: left;
}

.card-arrow-icon {
  size: 19px;
  color: $white;
  text-align: left;
}
.circle::v-deep.v-btn {
  background-color: rgb(256, 256, 256, 0.7);
  border-radius: 50%;
  height: 38px;
  width: 38px;
  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
}
.card-img {
  margin-top: 7rem;
}
.comment-img {
  margin-top: 1rem;
  max-height: $img-max-height-220;
}
.search-img {
  margin-top: 2rem;

  text-align: right;
  img {
    max-height: $img-max-height-255;
  }
}
</style>
