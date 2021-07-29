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
            </v-row>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "deals-without-claim",
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
