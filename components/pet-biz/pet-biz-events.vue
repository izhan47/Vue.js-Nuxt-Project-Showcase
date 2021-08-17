<template>
  <div>
    <v-card v-if="events.lengt">
      <v-card-text>
        <div class="events">
          <div
            class="events-item"
            v-for="(event, index) in events"
            :key="index"
          >
            <v-row>
              <v-col cols="9">
                <p class="bold">{{ event.name }}</p>

                <p class="light">{{ event.description }}</p>

                <p class="details mt-3">Details</p>

                <div class="timings">
                  <div class="date">
                    <v-icon>mdi-calender</v-icon>

                    <p>
                      {{ event.formated_event_start_date }} -
                      {{ event.formated_event_end_date }}
                    </p>
                  </div>

                  <div class="time">
                    <v-icon>mdi-clock</v-icon>

                    <p>
                      {{ event.formated_event_start_time }} -
                      {{ event.formated_event_end_time }}
                    </p>
                  </div>

                  <div class="d-flex">
                    <v-icon>mdi-home</v-icon>
                    <p>{{ event.address }}</p>
                  </div>

                  <div class="d-flex">
                    <v-icon>mdi-link</v-icon>
                    <p>{{ event.url }}</p>
                  </div>
                </div>
              </v-col>
              <v-col cols="3">
                <div class="event-date">
                  <p>
                    {{ event.formated_event_start_date }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <div class="empty-state" v-else>
      <div class="text-center">
        <img
          src="/images/empty-events.png"
          alt="events-empty.png"
          class="img-fluid"
        />
        <p class="bold">No events Found...!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pet-biz-events",
  props: {
    events: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.events {
  margin-top: 1.5rem;
  &item {
    background: #f7f7f7;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1.5rem;

    p.bold {
      font-size: 18px;
      line-height: 32px;
      color: #000b42;
    }

    p.light {
      font-size: 14px;
      line-height: 24px;
      color: rgba(0, 11, 66, 0.5);
    }

    p.details {
      font-size: 14px;
      line-height: 32px;
      color: #000b42;
    }

    .d-flex {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }
  }
}

.event-date {
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;

  > p {
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000b42;
  }
}

.empty-state {
  min-height: 600px;
  display: grid;
  place-items: center;
}
</style>
