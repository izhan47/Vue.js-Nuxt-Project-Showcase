<template>
  <Account />
</template>

<script>
import Account from "@/components/Profile/Account";
export default {
  name: "account",
  computed: { Account },
  middleware: ["auth"]
};
</script>

<style lang="scss" scoped></style>
