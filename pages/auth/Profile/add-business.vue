<template>
  <div class="main-container">
    <h3 class="mt-3">Add Business</h3>
    <v-tabs center-active v-model="tab">
      <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <div class="child-container">
          <component :is="item.component" />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import featured from "~/components/Profile/business/business-featured";
import gallery from "~/components/Profile/business/business-gallery";
import generalInfo from "~/components/Profile/business/business-general-info";
import hoursOfOperation from "~/components/Profile/business/business-hours-of-operation";
import services from "~/components/Profile/business/business-services";
import businessLink from "~/components/Profile/business/business-link";

export default {
  name: "my-business",
  components: {
    featured,
    gallery,
    generalInfo,
    hoursOfOperation,
    businessLink,
    services
  },
  middleware: ["auth"],
  data: () => ({
    tab: "Gallery"
  }),
  computed: {
    items() {
      return [
        { tab: "General Info", component: "generalInfo" },
        { tab: "Gallery", component: "gallery" },
        // { tab: "Hours of Operation", component: "hoursOfOperation" },
        { tab: "Services", component: "services" },
        { tab: "Featured", component: "featured" },
        { tab: "Link", component: "businessLink" }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 0 2rem;
}

.child-container {
  margin-top: 1rem;
}
</style>
