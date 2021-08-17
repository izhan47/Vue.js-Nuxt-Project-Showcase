<template>
  <div class="profile-title">
    <h2>{{ $t("my_vet_info") }}</h2>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["POST_UPDATE_VET"]),
    async updateVet() {
      if (this.$refs.form.validate()) {
        await this.updateVet(this.form);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
</style>
