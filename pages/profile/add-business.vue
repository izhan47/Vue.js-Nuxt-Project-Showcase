<template>
  <div class="pa-5">
    <h3 class="mb-3">Add Business</h3>
    <v-tabs center-active v-model="tab">
      <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
    </v-tabs>

    <v-stepper v-model="currentStep" vertical>
      <template v-for="item in items">
        <v-stepper-step
          :complete="currentStep > item.index"
          :step="item.index"
          :key="item.index"
          :editable="currentStep > item.index"
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
            @save-business="addNewBusiness"
          />
        </v-stepper-content>
      </template>
    </v-stepper>
  </div>
</template>

<script>
// import featured from "~/components/Profile/business/business-featured";
// import gallery from "~/components/Profile/business/business-gallery";
// import generalInfo from "~/components/Profile/business/business-general-info";
// import hoursOfOperation from "~/components/Profile/business/business-hours-of-operation";
// import services from "~/components/Profile/business/business-services";
// import businessLink from "~/components/Profile/business/business-link";

export default {
  name: "my-business",
  components: {
    featured: () => import("~/components/Profile/business/business-featured"),
    gallery: () => import("~/components/Profile/business/business-gallery"),
    generalInfo: () =>
      import("~/components/Profile/business/business-general-info"),
    hoursOfOperation: () =>
      import("~/components/Profile/business/business-hours-of-operation"),
    businessLink: () => import("~/components/Profile/business/business-link"),
    services: () => import("~/components/Profile/business/business-services")
  },
  middleware: ["auth"],
  data: () => ({
    tab: "Gallery",
    currentStep: 1,
    form: {
      store_name: "",
      email: "",
      website_url: "",
      phone_number: "",
      address_line_1: "",
      category_id: [],
      business_id: [],
      country_id: [],
      state_id: [],
      city_id: [],
      donation_link: "",
      is_featured_pet_pro: 0,
      featured_title: "",
      featured_description: "",
      services: [],
      is_cover_image: 1
      // monday_open: "",
      // monday_close: "",
      // tuesday_open: "",
      // tuesday_close: "",
      // wednesday_open: "",
      // wednesday_close: "",
      // thursday_open: "",
      // thursday_close: "",
      // friday_open: "",
      // friday_close: "",
      // saturday_open: "",
      // saturday_close: "",
      // sunday_open: "",
      // sunday_close: ""
    }
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
      if (!!data) {
        this.form = {
          ...this.form,
          ...data
        };
      }
      this.currentStep++;
      window.scrollTo(100, 0);
    },
    skipStep() {
      this.currentStep++;
    },
    async addNewBusiness(data) {
      try {
        this.$store.commit("SHOW_LOADER", true);
        if (data) {
          this.form = {
            ...this.form,
            ...data
          };
        }
        const fd = new FormData();

        for (const key in this.form) {
          const element = this.form[key];

          if (element) {
            if (Array.isArray(element)) {
              if (key === "row") {
                element.forEach((e, index) => {
                  fd.append(`${key}[${index}][image]`, e.image);
                  fd.append(`${key}[${index}][cropped_image]`, e.cropped_image);
                });
              } else {
                element.forEach((e, index) => {
                  fd.append(`${key}[${index}]`, e);
                });
              }
            } else {
              fd.append(key, element);
            }
          }
        }

        const resp = await this.$axios.post("pet-pro/new-pet-pro", fd, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        console.log(resp);

        this.$store.commit("SHOW_LOADER", false);
        this.$router.push("/find-a-pet-biz");
      } catch (err) {
        this.$store.commit("SHOW_LOADER", false);
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.child-container {
  margin-top: 1rem;
}
</style>
