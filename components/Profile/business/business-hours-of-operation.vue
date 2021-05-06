<template>
  <ContentContainer @cancel="cancel" @save="save" max-width="600px">
    <div class="week-day" v-for="(key, day, index) in weeks" :key="index">
      <v-checkbox
        v-model="weeks[day].disabled"
        :label="day.charAt(0).toUpperCase() + day.substr(1)"
        color="indigo"
        hide-details
        class="mt-0"
      ></v-checkbox>

      <time-range
        @selected="time_range => timeSelected(time_range, day)"
        :day="day"
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
        open: "",
        close: ""
      },
      tuesday: {
        disabled: false,
        open: "",
        close: ""
      },
      wednesday: {
        disabled: false,
        open: "",
        close: ""
      },
      thursday: {
        disabled: false,
        open: "",
        close: ""
      },
      friday: {
        disabled: false,
        open: "",
        close: ""
      },
      saturday: {
        disabled: false,
        open: "",
        close: ""
      },
      sunday: {
        disabled: false,
        open: "",
        close: ""
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
    },
    formatedPayload() {
      let obj = {};
      for (const key in this.weeks) {
        const element = this.weeks[key];

        if (!element.disabled) {
          // obj[`${key}_open`] = false;
          // obj[`${key}_close`] = false;
        } else {
          obj[`${key}_open`] = this.formatTime(element.open);
          obj[`${key}_close`] = this.formatTime(element.close);
          obj[key] = "on";
        }
      }
      return obj;
    }
  },
  methods: {
    formatTime(time) {
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
    },
    save() {
      const errors = this.isValid();

      if (!errors.length) {
        this.$emit("next-tab", this.formatedPayload);
      } else {
        console.log(errors);
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
            const { open, close } = element;
            if (!open || !close) {
              errors.push(`Time in ${day} is either invalid or missing`);
            }

            if (close <= open) {
              errors.push(`Close time should after the start time in ${day} `);
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
      this.weeks[day] = { ...this.weeks[day], ...time };
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
