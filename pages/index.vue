<template>
  <div>
    <pet-functions></pet-functions>
    <about></about>
    <client-only>
      <location-search @filter-data="filterData"></location-search>
    </client-only>
    <care-advice></care-advice>
    <featured-product></featured-product>
    <client-only>
      <news-letter></news-letter>
      <div id="fd-form-60d48b4dbcd89609fbf3e11d"></div>
      <script>
        window.fd("form", {
          formId: "60d48b4dbcd89609fbf3e11d",
          containerEl: "#fd-form-60d48b4dbcd89609fbf3e11d"
        });
      </script>
    </client-only>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
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
    if (process.browser) {
      let script = document.createElement("script");
      console.log(script);
      script.innerHTML = `(function(w, d, t, s, n) {
    w.FlodeskObject = n;
    var fn = function() {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    var f = d.getElementsByTagName(t)[0];
    var e = d.createElement(t);
    var h = '?v=' + new Date().getTime();
    e.async = true;
    e.src = s + h;
    f.parentNode.insertBefore(e, f);
  })(window, document, 'script', 'https://assets.flodesk.com/universal.js', 'fd');`;
      document.body.appendChild(script);
    }
    let filters = {
      form: {},
      page: this.page
    };
    this.POST_PET_PRO_LIST(filters);
    this.FETCH_PET_PRO_CATEGORY_LIST();
  },
  methods: {
    ...mapActions(["POST_PET_PRO_LIST", "FETCH_PET_PRO_CATEGORY_LIST"]),

    filterData(filters) {
      this.POST_PET_PRO_LIST(filters);
    }
  }
};
</script>

<style></style>
