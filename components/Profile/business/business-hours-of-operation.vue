<template>
  <ContentContainer @cancel="cancel" @save="save">
    <h1>business hour</h1>

    <div class="week-day">
      <v-checkbox
        v-model="monday.disabled"
        label="Monday"
        color="indigo"
        value="monday"
        hide-details
        class="mt-0"
      ></v-checkbox>

      <div class="times">
        <v-select
          :items="items"
          chips
          label="10:10"
          rounded
          outlined
          :disabled="!monday.disabled"
        ></v-select>

        to

        <v-select
          :items="items"
          chips
          label="10:10"
          rounded
          outlined
          :disabled="!monday.disabled"
        ></v-select>
      </div>
    </div>
  </ContentContainer>
</template>

<script>
import ContentContainer from "~/components/Profile/content-container";

export default {
  name: "services",
  components: { ContentContainer },
  data: () => ({
    monday: {
      disabled: false
    }
  }),
  computed: {
    items() {
      return [
        { text: "01:11", value: "11:200" },
        { text: "0s1:11", value: "11:20" },
        { text: "0d1:11", value: "11:40" },
        { text: "0f1:11", value: "11:500" },
        { text: "0g1:11", value: "11:600" },
        { text: "0a1:11", value: "11:700" }
      ];
    }
  },
  methods: {
    save() {},
    cancel() {}
  }
};
</script>

<style lang="scss" scoped>
.week-day {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &::v-deep .v-text-field__details {
    display: none;
  }

  .times {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
