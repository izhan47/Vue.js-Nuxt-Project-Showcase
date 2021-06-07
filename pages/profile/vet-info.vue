<template>
  <div class="pa-5 ">
    <div class="grid">
      <div class="grid-item info-card" v-if="!showPlaceholder">
        <div class="pa-3">
          <p class="label">{{ form.vet_place_name }}</p>
          <p class="address">{{ form.vet_address }}</p>
          <p class="phone ">{{ form.vet_phone_number }}</p>
        </div>

        <div class="footer pa-3">
          <!-- <v-btn
            outlined
            color="#C21975"
            rounded
            @click="openModal('delete', info.id)"
            >Delete</v-btn
          > -->
          <v-btn
            rounded
            dark
            outlined
            color="#46259A"
            @click="openModal('edit')"
            >Edit</v-btn
          >
        </div>
      </div>

      <!-- placeholder -->
      <div
        class="grid-item add-address"
        v-else
        @click="(modalType = 'add'), (dialog = true)"
      >
        <div class="text-center">
          <v-icon x-large>mdi-plus</v-icon>
          <p class="mb-0 mt-3">Add new Address</p>
        </div>
      </div>
    </div>

    <!-- modal here -->
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card v-if="modalType !== 'delete'">
        <v-card-title>
          {{ modalType !== "add" ? "Update" : "Add" }} vet info
        </v-card-title>
        <v-card-text>
          <div ref="form" class="mt-4">
            <v-text-field
              label="Label As"
              placeholder="Enter Label"
              rounded
              outlined
              v-model="form.vet_place_name"
            ></v-text-field>

            <VuePhoneNumberInput
              v-model="phone"
              default-country-code="US"
              :border-radius="28"
              class="mb-7"
              valid-color="green"
              error-color="red"
              size="lg"
              @update="updatePhone"
            />

            <v-textarea
              rounded
              outlined
              auto-grow
              label="Enter Address"
              rows="4"
              row-height="30"
              v-model="form.vet_address"
            ></v-textarea>
          </div>

          <!-- will add btn here -->

          <div class="btn-actions">
            <v-btn elevation="0" rounded x-large @click="closeModal"
              >Cancel</v-btn
            >

            <v-btn
              rounded
              color="#46259A"
              :disabled="disableSave"
              x-large
              :dark="!disableSave"
              @click="addOrUpdateInfo"
              >{{ modalType !== "add" ? "Update" : "Add" }}</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
      <!-- delete confirmations -->
      <v-card v-else>
        <v-card-title>Delete Vet</v-card-title>
        <v-card-text>
          <div class="text-center">
            <img src="/images/trash.png" alt="" />
            <h2 class="dark--text my-5">
              Are you sure you want to remove address from your Vet list?
            </h2>

            <div class="btn-actions">
              <v-btn elevation="0" rounded x-large @click="closeModal"
                >Cancel</v-btn
              >

              <v-btn rounded color="#46259A" x-large dark @click="deleteInfo"
                >Confirm</v-btn
              >
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import VetInfo from "@/components/Profile/VetInfo";

// import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
export default {
  name: "vet-info",
  components: {
    VetInfo: () => import("@/components/Profile/VetInfo"),
    VuePhoneNumberInput: () => import("vue-phone-number-input")
  },
  middleware: ["auth"],
  data() {
    return {
      modalType: "",
      dialog: false,
      editMode: false,
      phone: "",
      isValid: false,
      form: {
        vet_place_name: "",
        vet_address: "",
        vet_phone_number: ""
      }
    };
  },
  computed: {
    disableSave() {
      const { vet_place_name, vet_address } = this.form;
      if (!vet_place_name || !vet_address || !this.isValid) return true;
      return false;
    },
    showPlaceholder() {
      const { vet_place_name, vet_address, vet_phone_number } = this.form;
      if (!vet_place_name && !vet_address && !vet_phone_number) return true;
      return false;
    }
  },
  methods: {
    openModal(type) {
      this.modalType = type;
      this.dialog = true;
    },
    updatePhone({ formattedNumber, isValid }) {
      this.isValid = isValid;
      this.form.vet_phone_number = formattedNumber;
    },
    closeModal() {
      this.dialog = false;
      this.modalType = "";
    },
    deleteInfo() {
      console.log("delete info");
    },
    async addOrUpdateInfo() {
      try {
        this.$store.commit("SHOW_LOADER", true);
        await this.$axios.post("profile/update-vet", this.form);
        this.closeModal();
        this.$store.commit("SHOW_LOADER", false);
      } catch (error) {
        console.log(error);
        this.$store.commit("SHOW_LOADER", false);
        this.closeModal();
        this.form.vet_address = "";
        this.form.vet_phone_number = "";
        this.form.vet_place_name = "";
        this.phone = "";
      }
    }
  },
  created() {
    const {
      vet_address,
      vet_phone_number,
      vet_place_name
    } = this.$store.state.user.user;
    this.phone = vet_phone_number;
    this.form = {
      vet_address,
      vet_phone_number,
      vet_place_name
    };
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 1.5rem;

  &-item {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    min-height: 200px;

    &.info-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        &.label {
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #1e1d1f;
          text-transform: capitalize;
        }

        &.address {
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          color: rgba(0, 11, 66, 0.7);
        }

        p.phone {
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          color: #000b42;
        }
      }

      .footer {
        border-top: 1px solid rgba(0, 0, 0, 0.2);
      }
    }

    &.add-address {
      border-style: dashed;
      display: grid;
      place-items: center;
      cursor: pointer;

      p {
        font-size: 16px;
        line-height: 24px;
        color: rgba(30, 29, 31, 0.5);
      }
    }
  }
}

.btn-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
