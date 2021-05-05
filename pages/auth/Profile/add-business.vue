<template>
  <div class="main-container">
    <h3 class="mt-3">Add Business</h3>
    <!-- <v-tabs center-active v-model="tab">
      <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
    </v-tabs> -->

    <v-stepper v-model="e6" vertical>
      <template v-for="item in items">
        <v-stepper-step
          :complete="e6 > item.index"
          :step="item.index"
          :key="item.index"
        >
          {{ item.tab }}
        </v-stepper-step>

        <v-stepper-content
          :step="item.index"
          :key="item.index + item.component"
        >
          <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card> -->
          <component
            :is="item.component"
            :ref="item.component"
            @next-tab="nextTab"
            @skip-step="skipStep"
          />

          <!-- <v-btn color="primary" @click="nextTab(item)">
            Continue
          </v-btn> -->
          <!-- <v-btn color="primary" @click="nextTab(item)">
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn> -->
        </v-stepper-content>
      </template>
    </v-stepper>

    <!-- <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <div class="child-container">
          <component :is="item.component" />
        </div>
      </v-tab-item>
    </v-tabs-items> -->
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
    tab: "Gallery",
    e6: 1
  }),
  computed: {
    items() {
      return [
        { tab: "General Info", component: "generalInfo", index: 1 },
        { tab: "Gallery", component: "gallery", index: 2 },
        { tab: "Hours of Operation", component: "hoursOfOperation", index: 3 },
        { tab: "Services", component: "services", index: 4 },
        { tab: "Featured", component: "featured", index: 5 },
        { tab: "Link", component: "businessLink", index: 6 }
      ];
    }
  },
  methods: {
    nextTab(data) {
      this.e6++;
      console.log("NEXT TAB==>", data);
      window.scrollTo(100, 0);
    },
    skipStep() {
      this.e6++;
    },
    saveTab(item) {
      const component = this.$refs[item.component][0];
      console.log("save tab", component.getValues());
    }
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 0 2rem;
  padding-bottom: 1rem;
}

.child-container {
  margin-top: 1rem;
}
</style>
