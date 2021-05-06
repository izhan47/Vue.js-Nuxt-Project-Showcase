<template>
  <ContentContainer
    @cancel="$emit('skip-step')"
    @save="save"
    :disable-save="!services.length"
  >
    <h3>Services Offered</h3>

    <div class="services mt-4">
      <div class="service" v-for="service in services" :key="service">
        <div class="name">{{ service }}</div>
        <div class="action">
          <v-btn
            fab
            x-small
            dark
            color="success"
            class="mr-3"
            @click="edit(service)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn fab x-small dark color="red" @click="deleteService(service)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <v-btn
      plain
      x-large
      rounded
      color="rgb(70, 37, 154)"
      class="bold mt-5"
      @click="dialog = true"
    >
      <v-icon left>
        mdi-plus
      </v-icon>
      Add Service Offered
    </v-btn>

    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title class="headline mb-5">
          Add Service
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Add Service"
            placeholder="Enter your service"
            rounded
            outlined
            type="text"
            v-model="form.service"
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="rgb(70, 37, 154)" text @click="addService">
            {{ !!editMode ? "Update" : "Add" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </ContentContainer>
</template>

<script>
import ContentContainer from "~/components/Profile/content-container";

export default {
  name: "services",
  components: { ContentContainer },
  data: () => ({
    dialog: false,
    form: {
      service: ""
    },
    services: [],
    editMode: ""
  }),
  methods: {
    addService() {
      if (!this.editMode) {
        this.services.push(this.form.service);
      } else {
        const index = this.services.findIndex(ser => ser === this.editMode);
        this.services[index] = this.form.service;
      }
      this.editMode = "";
      this.form.service = "";
      this.dialog = false;
    },
    edit(service) {
      this.form.service = service;
      this.editMode = service;
      this.dialog = true;
    },
    deleteService(service) {
      this.services = this.services.filter(s => s !== service);
    },
    save() {
      this.$emit("next-tab", { services: this.services });
    }
  }
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}

.services {
  .service {
    display: flex;
    align-items: center;
    padding: 1rem 1.3rem;
    border: 1px solid #ccc;
    border-radius: 30px;
    margin-bottom: 1rem;
    .name {
      flex: 1;
    }
  }
}
</style>
