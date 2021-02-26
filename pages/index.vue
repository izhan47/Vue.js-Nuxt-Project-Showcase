<template>
<div>
  <banner-search></banner-search>
  <pet-functions></pet-functions>
  <about></about>
  <location-search></location-search>
  <care-advice></care-advice>
  <featured-product></featured-product>
  <news-letter></news-letter>

</div>
</template>

<script>
import bannerSearch from "@/components/Home/bannerSearch";
import petFunctions from "@/components/Home/petFunctions";
import about from "@/components/Home/about";
import locationSearch from "@/components/Home/locationSearch";
import careAdvice from "@/components/Home/careAdvice";
import featuredProduct from "@/components/Home/featuredProduct";
import newsLetter from "@/components/Home/newsLetter";
export default {
  name:"index",
  components:{
    bannerSearch,petFunctions,about,locationSearch,careAdvice,featuredProduct,newsLetter
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
