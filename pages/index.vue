<template>
  <div>
    <pet-functions></pet-functions>
    <about></about>
    <!-- <location-search @filter-data="filterData"></location-search> -->
    <care-advice></care-advice>
    <featured-product></featured-product>
    <banner-search></banner-search>
    <news-letter></news-letter>
  </div>
</template>
<script>
// import BannerSearch from "@/components/Common/Home/bannerSearch";
// import PetFunctions from "@/components/Common/Home/petFunctions";
// import About from "@/components/Common/Home/about";
// import LocationSearch from "@/components/Common/Home/locationSearch";
// import CareAdvice from "@/components/Common/Home/careAdvice";
// import FeaturedProduct from "@/components/Common/Home/featuredProduct";
// import NewsLetter from "@/components/Common/Home/newsLetter";
export default {
  name: "index",
  components: {
    BannerSearch: () => import("@/components/Common/Home/bannerSearch"),
    PetFunctions: () => import("@/components/Common/Home/petFunctions"),
    About: () => import("@/components/Common/Home/about"),
    LocationSearch: () => import("@/components/Common/Home/locationSearch"),
    CareAdvice: () => import("@/components/Common/Home/careAdvice"),
    FeaturedProduct: () => import("@/components/Common/Home/featuredProduct"),
    NewsLetter: () => import("@/components/Common/Home/newsLetter")
  },
  data() {
    return {
      page: 1
    };
  },
  created() {
    let filters = {
      form: {},
      page: this.page
    };
    this.$store.dispatch("petProList", filters);
    this.$store.dispatch("petCategories");
  },
  methods: {
    filterData(filters) {
      console.log(filters);
      this.$store.dispatch("petProList", filters);
    }
  }
};
</script>

<style></style>
