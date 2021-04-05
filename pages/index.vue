<template>
<div>
  <banner-search></banner-search>
  <pet-functions></pet-functions>
  <about></about>
  <location-search @filter-data="filterData"></location-search>
  <care-advice></care-advice>
  <featured-product></featured-product>
  <news-letter></news-letter>
</div >
</template>
<script>
import BannerSearch from "@/components/Common/Home/bannerSearch";
import PetFunctions from "@/components/Common/Home/petFunctions";
import About from "@/components/Common/Home/about";
import LocationSearch from "@/components/Common/Home/locationSearch";
import CareAdvice from "@/components/Common/Home/careAdvice";
import FeaturedProduct from "@/components/Common/Home/featuredProduct";
import NewsLetter from "@/components/Common/Home/newsLetter";
export default {
  name:"index",
  components:{
    BannerSearch,PetFunctions,About,LocationSearch,CareAdvice,FeaturedProduct,NewsLetter
  },
  created() {
    this.$store.dispatch('petProList',{})
    this.$store.dispatch('petCategories')
  },
  methods: {
    filterData(filters) {
      this.$store.dispatch('petProList',filters)
    },
  }
}
</script>

<style>

</style>
