<template>
  <Reviews />
</template>

<script>
import Reviews from "@/components/Profile/Reviews";
export default {
  name: "reviews",
  components: { Reviews },
  middleware: ["auth"]
};
</script>

<style lang="scss" scoped></style>
