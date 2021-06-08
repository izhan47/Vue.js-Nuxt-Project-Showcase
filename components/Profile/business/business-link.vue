<template>
  <ContentContainer
    @cancel="cancel"
    @save="save"
    hide-cancel
    saveBtnText="save"
  >
    <div class="d-flex align-items-center">
      <v-text-field
        label="Donation Link"
        placeholder="Donation link"
        rounded
        outlined
        type="text"
        v-model="form.donation_link"
        clearable
      ></v-text-field>
    </div>
  </ContentContainer>
</template>

<script>
import ContentContainer from "~/components/Profile/content-container";

export default {
  name: "business-link",
  components: { ContentContainer },
  data: () => ({
    form: {
      donation_link: ""
    }
  }),
  computed: {
    disableSave() {}
  },
  methods: {
    save() {
      this.$emit("save-business", this.form);
    },
    cancel() {
      this.$router.push("/profile");
    }
  }
};
</script>

<style lang="scss" scoped>
.link-container {
  max-width: 450px;
  width: 100%;
  margin: auto;
  padding: 2rem 0;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
