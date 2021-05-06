<template>
  <PetProfile />
</template>

<script>
import PetProfile from "@/components/Profile/PetProfile";
export default {
  name: "pet-profile",
  components: { PetProfile },
  middleware: ["auth"]
};
</script>

<style lang="scss" scoped></style>
