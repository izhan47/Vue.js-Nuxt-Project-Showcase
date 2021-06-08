<template>
  <Account />
</template>

<script>
import Account from "@/components/Profile/Account";
export default {
  name: "account",
  components: { Account },
  middleware: ["auth"]
};
</script>

<style lang="scss" scoped></style>
