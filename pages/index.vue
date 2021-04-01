<template>
<div>
  <banner-search></banner-search>
  <pet-functions></pet-functions>
  <about></about>
  <location-search></location-search>
  <care-advice></care-advice>
  <featured-product></featured-product>
  <news-letter></news-letter>
</div >
</template>
<script>
import bannerSearch from "@/components/Common/Home/bannerSearch";
import petFunctions from "@/components/Common/Home/petFunctions";
import about from "@/components/Common/Home/about";
import locationSearch from "@/components/Common/Home/locationSearch";
import careAdvice from "@/components/Common/Home/careAdvice";
import featuredProduct from "@/components/Common/Home/featuredProduct";
import newsLetter from "@/components/Common/Home/newsLetter";
export default {
  name:"index",
  components:{
    bannerSearch,petFunctions,about,locationSearch,careAdvice,featuredProduct,newsLetter
  },
}
</script>

<style>

</style>
