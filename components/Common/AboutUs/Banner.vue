<template>
  <div class="custom-container py-10  ">
    <div class="section-align-center">
      <div class="text-center">
        <img
          class="img-height img-fluid"
          src="/images/Pink-Paw.png"
          alt="logo"
        />
      </div>
      <div class="">
        <h2 class="about-banner-heading text-center line-height">
          {{ $t("from") }} {{ $t("pet_people") }}{{ $t("coma") }}
          {{ $t("with_love") }}
        </h2>
      </div>
      <div class="description mt-7 mb-5">
        <p>
          {{ $t("about_banner_description_first") }}
          <span>{{ $t("wag_enabled") }}</span
          >{{ $t("about_banner_description_last") }}
        </p>
      </div>
    </div>
    <div class="mt-5 mb-3">
      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutBanner.vue"
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

.bottom-divider {
  color: $white;
  width: 100px;
  height: 95px;
}
.divider {
  width: 100%;
  height: 1px;
  background: $silver-chalice;
  margin: 10px 0;
}
.description {
  max-width: 600px;
  margin: auto;
  text-align: center;
  width: 100%;
  span {
    color: $pink;
  }
}
.img-height {
  max-height: $img-max-height-90;
}
</style>
