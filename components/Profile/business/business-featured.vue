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
      v-model="form.title"
    ></v-text-field>

    <v-textarea
      rounded
      outlined
      auto-grow
      label="Description"
      rows="4"
      row-height="30"
      v-model="form.description"
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
      title: "",
      description: ""
    }
  }),
  computed: {
    disableSave() {
      const { title, description } = this.form;
      if (!title || !description) return true;
      return false;
    }
  },
  methods: {
    save() {
      this.$emit("next-tab");
    }
  }
};
</script>

<style lang="scss" scoped></style>
