<template>
  <div class="content-container" :style="{ 'max-width': maxWidth }">
    <div class="content ">
      <slot />
    </div>

    <div class="btn-actions text-right" v-if="!hideBtns">
      <v-btn
        class="mr-5"
        elevation="0"
        rounded
        x-large
        @click="$emit('cancel')"
        v-if="!hideCancel"
        :disabled="disableCancel || loading"
        :loading="loading"
        >Skip</v-btn
      >
      <v-btn
        rounded
        color="#46259A"
        :disabled="disableSave || loading"
        x-large
        :dark="!disableSave || loading"
        @click="$emit('save')"
        :loading="loading"
      >
        {{ saveBtnText }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "content-container",
  props: {
    hideBtns: {
      type: Boolean,
      default: false
    },
    hideCancel: {
      type: Boolean,
      default: false
    },
    disableCancel: {
      type: Boolean,
      default: false
    },
    disableSave: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      defyalt: "500px"
    },
    saveBtnText: {
      type: String,
      default: "save and continue"
    }
  }
};
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 500px;
  width: 100%;
  margin: auto;
  padding: 2rem 0;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    padding: 1rem;
  }
}
</style>
