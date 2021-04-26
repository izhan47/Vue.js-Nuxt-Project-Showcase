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
.profile-title{
  padding-top: 25px;
  padding-left: 2rem;
  h2{
    font-family:$font-family-secondary;
    font-style: normal;
    font-weight: $font-weight-500;
    font-size: $font-size-14;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: $black_currant;
  }
}


</style>
