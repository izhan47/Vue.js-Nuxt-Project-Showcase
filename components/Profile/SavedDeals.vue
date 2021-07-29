<template>
  <div class="pa-5">
    <h3 class="mb-3">{{ $t("save_deals") }}</h3>

    <template v-if="claimedDeals.length">
      <Deals :deals="claimedDeals" />
    </template>

    <template v-if="claimedDealsWatchAndLearn.length">
      <Deals :deals="claimedDealsWatchAndLearn" />
    </template>

    <template v-if="!claimedDealsWatchAndLearn.length && !claimedDeals.length">
      <div class="empty-state">
        <div class="text-center">
          <img
            src="/images/empty-events.png"
            alt="events-empty.png"
            class="img-fluid"
          />
          <p class="bold">No Deals Found...!</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "SavedDeals",
  components: {
    Deals: () => import("~/components/pet-biz/deals-without-claim")
  },
  async created() {
    this.$store.commit("SHOW_LOADER", true);
    const resp = await this.$axios.post("/profile/get-claim-deals");
    this.claimedDeals = resp.data.data.claimedDeals;
    this.claimedDealsWatchAndLearn = resp.data.data.claimedDealsWatchAndLearn;
    console.log(resp);
    this.$store.commit("SHOW_LOADER", false);
  },
  data() {
    return {
      claimedDeals: [],
      claimedDealsWatchAndLearn: []
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
</style>
