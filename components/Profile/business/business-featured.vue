<template>
  <ContentContainer @cancel="cancel" @save="save">
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
  methods: {
    save() {},
    cancel() {}
  }
};
</script>

<style lang="scss" scoped></style>
