<template>
  <div class="times">
    <v-menu
      ref="mondayFrom"
      v-model="showFrom"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="from"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="from"
          label="Time from "
          readonly
          v-bind="attrs"
          v-on="on"
          :disabled="!disabled"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="showFrom"
        v-model="from"
        full-width
        @click:minute="$refs.mondayFrom.save(from)"
      ></v-time-picker>
    </v-menu>

    <p class="mb-0">
      to
    </p>

    <v-menu
      ref="mondayTo"
      v-model="showTo"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="to"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="to"
          label="Time to"
          readonly
          v-bind="attrs"
          v-on="on"
          :disabled="!disabled"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="showTo"
        v-model="to"
        full-width
        @click:minute="$refs.mondayTo.save(to)"
      ></v-time-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {
      from: "",
      to: "",
      showFrom: false,
      showTo: false
    };
  },
  watch: {
    from(val) {
      if (val) this.$emit("selected", { to: this.to, from: this.from });
    },
    to(val) {
      if (val) this.$emit("selected", { to: this.to, from: this.from });
    }
  }
};
</script>

<style lang="scss" scoped>
.times {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  &::v-deep .v-input {
    max-width: 150px;
  }
}
</style>
