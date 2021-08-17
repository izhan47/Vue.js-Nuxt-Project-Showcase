<template>
  <AppLayout>
    <Nuxt />
  </AppLayout>
</template>
<script>
import AppLayout from "./app-layout";
export default {
  middleware: "unauthenticated",
  components: {
    AppLayout
  }
};
</script>
<style lang="scss" scoped></style>
