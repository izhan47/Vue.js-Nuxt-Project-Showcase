<template>
  <div class="times">
    <v-menu
      ref="mondayFrom"
      v-model="showFrom"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="open"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :label="`${day} Open`"
          readonly
          v-bind="attrs"
          v-on="on"
          :disabled="!disabled"
          :value="formatTime(open)"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="showFrom"
        v-model="open"
        full-width
        scrollable
        @click:minute="$refs.mondayFrom.save(open)"
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
      :return-value.sync="close"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :label="`${day} Close`"
          readonly
          v-bind="attrs"
          v-on="on"
          :disabled="!disabled"
          :value="formatTime(close)"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="showTo"
        v-model="close"
        a
        full-width
        scrollable
        @click:minute="$refs.mondayTo.save(close)"
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
    },
    day: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      open: "",
      close: "",
      showFrom: false,
      showTo: false
    };
  },
  watch: {
    open(val) {
      if (val) this.$emit("selected", { open: this.open, close: this.close });
    },
    close(val) {
      if (val) this.$emit("selected", { open: this.open, close: this.close });
    }
  },
  methods: {
    formatTime(time = "00:00") {
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join("");
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
