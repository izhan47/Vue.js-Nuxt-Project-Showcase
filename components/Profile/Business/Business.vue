<template>
  <div class="profile-title">
    <h2>{{$t('my_business')}}</h2>
  </div>
</template>

<script>
import GeneralInfo from "@/components/Profile/Business/Info";
import Gallery from "@/components/Profile/Business/Gallery";
import HoursOfOperation from "@/components/Profile/Business/Operation";
import Services from "@/components/Profile/Business/Services";
import Featured from "@/components/Profile/Business/Featured";
import Link from "@/components/Profile/Business/Link";

export default {
  name: "Business.vue",
  components:{ GeneralInfo,Gallery,HoursOfOperation,Services,Featured,Link}
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";



</style>
