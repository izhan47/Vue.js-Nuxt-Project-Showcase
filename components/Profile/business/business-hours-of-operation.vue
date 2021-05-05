<template>
  <ContentContainer
    @cancel="cancel"
    @save="save"
    max-width="600px"
    :disableSave="disableSave"
  >
    <div class="week-day" v-for="(key, day, index) in weeks" :key="index">
      <v-checkbox
        v-model="weeks[day].disabled"
        :label="day"
        color="indigo"
        :value="day"
        hide-details
        class="mt-0 mr-5"
      ></v-checkbox>

      <time-range
        @selected="time_range => timeSelected(time_range, day)"
        :disabled="weeks[day].disabled"
      />
    </div>
  </ContentContainer>
</template>

<script>
import ContentContainer from "~/components/Profile/content-container";
import TimeRange from "./component/time-range";
export default {
  name: "services",
  components: { ContentContainer, TimeRange },
  data: () => ({
    weeks: {
      monday: {
        disabled: false,
        time_range: {}
      },
      tuesday: {
        disabled: false,
        time_range: {}
      },
      wednesday: {
        disabled: false,
        time_range: {}
      },
      thursday: {
        disabled: false,
        time_range: {}
      },
      firday: {
        disabled: false,
        time_range: {}
      },
      saturday: {
        disabled: false,
        time_range: {}
      },
      sunday: {
        disabled: false,
        time_range: {}
      }
    }
  }),
  computed: {
    disableSave() {
      let disabled = true;
      for (const day in this.weeks) {
        if (this.weeks[day].disabled) disabled = false;
      }

      return disabled;
    }
  },
  methods: {
    save() {
      const errors = this.isValid();

      if (!errors.length) {
        this.$emit("next-tab");
      } else {
        // errors.forEach(err => {
        //   this.$store.commit("SHOW_SNACKBAR", {
        //     snackbar: true,
        //     color: "red",
        //     message: err
        //   });
        // });
      }
    },
    isValid() {
      let errors = [];
      for (const day in this.weeks) {
        if (Object.hasOwnProperty.call(this.weeks, day)) {
          const element = this.weeks[day];
          if (!!element.disabled) {
            const { time_range } = element;
            if (!time_range.to || !time_range.from) {
              errors.push(`Time in ${day} is either invalid or missing`);
            }
          }
        }
      }

      return errors;
    },
    cancel() {
      this.$emit("skip-step");
    },
    timeSelected(time, day) {
      this.weeks[day].time_range = time;
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.week-day {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;

  &::v-deep .v-text-field__details {
    display: none;
  }

  &::v-deep .v-input--selection-controls.v-input {
    min-width: 130px;
  }

  .times {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
