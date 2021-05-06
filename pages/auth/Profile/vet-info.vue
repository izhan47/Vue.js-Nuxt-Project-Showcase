<template>
  <VetInfo />
</template>

<script>
import VetInfo from "@/components/Profile/VetInfo";
export default {
  name: "vet-info",
  components: { VetInfo },
  middleware: ["auth"]
};
</script>

<style lang="scss" scoped></style>
