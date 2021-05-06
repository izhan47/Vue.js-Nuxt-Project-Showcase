<template>
  <ContentContainer
    @cancel="$emit('skip-step')"
    @save="save"
    :disableSave="disableSave"
  >
    <v-text-field
      label="Feature Title"
      placeholder="Enter Store Name"
      rounded
      outlined
      type="text"
      v-model="form.featured_title"
    ></v-text-field>

    <v-textarea
      rounded
      outlined
      auto-grow
      label="Description"
      rows="4"
      row-height="30"
      v-model="form.featured_description"
    ></v-textarea>
  </ContentContainer>
</template>

<script>
import ContentContainer from "~/components/Profile/content-container";
export default {
  name: "featured",
  components: { ContentContainer },
  data: () => ({
    form: {
      featured_title: "",
      featured_description: ""
    }
  }),
  computed: {
    disableSave() {
      const { featured_title, featured_description } = this.form;
      if (!featured_title || !featured_description) return true;
      return false;
    }
  },
  methods: {
    save() {
      this.$emit("next-tab", {
        ...this.form,
        is_featured_pet_pro: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
