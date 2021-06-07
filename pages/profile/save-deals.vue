<template>
  <SavedDeals />
</template>

<script>
import SavedDeals from "@/components/Profile/SavedDeals";
export default {
  name: "save-deals",
  components: {
    SavedDeals
  },
  middleware: ["auth"]
};
</script>

<style lang="scss" scoped></style>
