<template>
  <LovedPetPros />
</template>

<script>
import LovedPetPros from "@/components/Profile/LovedPetPros";
export default {
  name: "loved-pet-pros",
  components: {
    LovedPetPros
  },
  middleware: ["auth"]
};
</script>

<style lang="scss" scoped></style>
