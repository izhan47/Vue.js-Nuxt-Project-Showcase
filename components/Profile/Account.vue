<template>
  <div class="profile-title">
    <h2>{{$t('account')}}</h2>
  </div>
</template>

<script>
export default {
  name: "Account.vue"
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.profile-title{
  padding-top: 30px;
  padding-left: 4rem;
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
