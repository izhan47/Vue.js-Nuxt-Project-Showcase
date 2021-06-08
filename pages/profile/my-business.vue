<template>
  <div class="pa-5">
    <h3 class="mb-3">My Business</h3>
    <v-row>
      <v-col
        cols="12"
        md="6"
        sm="12"
        v-for="(data, i) in petProList"
        :key="i"
        class="custom-margin"
      >
        <pet-category-card :item="data"></pet-category-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "my-business",
  data: () => ({
    petProList: []
  }),
  methods: {
    async fetchMyBusiness() {
      try {
        this.$store.commit("SHOW_LOADER", true);
        const resp = await this.$axios.post("pet-pro/get-user-pet-pro-list/1");
        const { pet_pro_list } = resp.data.data;
        this.petProList = pet_pro_list;
        this.$store.commit("SHOW_LOADER", false);
      } catch (error) {
        this.$store.commit("SHOW_LOADER", false);
        console.log(error);
      }
    }
  },
  created() {
    this.fetchMyBusiness();
  }
};
</script>

<style lang="scss" scoped></style>
