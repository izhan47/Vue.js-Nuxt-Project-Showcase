<template>
  <div>
    <v-card flat v-if="deals.length">
      <v-card-text>
        <div class="deals">
          <div class="deals-item" v-for="deal in deals" :key="deal.id">
            <v-row align="center">
              <v-col cols="2" class="text-center">
                <img src="/images/discount.png" alt="discount.png" />
              </v-col>
              <v-col cols="7">
                <p class="name">{{ deal.deal }}</p>
                <p class="light">{{ deal.fine_print }}</p>
              </v-col>
              <v-col cols="3">
                <v-btn
                  block
                  elevation="2"
                  rounded
                  x-large
                  color="#46259A"
                  :dark="!deal.is_claimed"
                  :disabled="!!deal.is_claimed"
                  @click="$emit('claim-deal', deal)"
                >
                  {{ !!deal.is_claimed ? "Claimed" : "Claim" }}
                </v-btn>
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
        <p class="bold">No Deals Found...!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pet-pro-deals",
  props: {
    deals: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
// deals
.deals {
  margin-top: 1.5rem;

  &-item {
    background: #f7f7f7;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1.5rem;

    p.name {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #1e1d1f;
      margin-bottom: 1rem;
    }

    p.light {
      font-size: 12px;
      line-height: 18px;
      color: rgba(0, 11, 66, 0.5);
    }
  }
}

.empty-state {
  min-height: 600px;
  display: grid;
  place-items: center;
}
</style>
