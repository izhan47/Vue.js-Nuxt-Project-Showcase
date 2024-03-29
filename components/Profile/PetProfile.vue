<template>
  <div class="pa-5">
    <h3 class="mb-3">{{ $t("pet_profile") }}</h3>

    <div>
      <v-row>
        <v-col cols="12" md="4" sm="12" v-for="(pet, p) in petUser" :key="p">
          <div class="card-section mb-3">
            <div
              class="bg-img-height"
              :style="`background-image: url(${pet.pet_image_thumb_full_path})`"
            ></div>
            <div class="card-category">
              <h2 class="mb-2 mt-2">{{ pet.name }}</h2>
              <div class="delete-action" v-if="pet.breed">
                <span
                  class="category-title"
                  v-for="(cat, i) in pet.breed"
                  :key="i"
                >
                  {{ cat.name }}
                </span>
                <div @click="deletePetUser(pet.id)">
                  <v-icon size="20">mdi-delete</v-icon>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-dialog v-model="dialog" persistent max-width="700">
            <template v-slot:activator="{ on, attrs }">
              <v-card
                class="pet-add-section card-section center-center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="plus-icon" color="#fff" size="50"
                  >mdi-plus</v-icon
                >
                <v-card-title class="action-title"> Add More</v-card-title>
              </v-card>
            </template>

            <div class=" dialog-section">
              <v-form
                ref="form"
                class="dialog-custom-container search-form-filter"
                @submit.prevent="addPet"
              >
                <input
                  type="file"
                  accept="image/*"
                  id="file"
                  class="d-none"
                  @change="getProfileFile"
                  ref="inputFile"
                  required
                  :rules="[v => !!v || 'The Pet Image is required']"
                />
                <div class="change-avatar " @click="$refs.inputFile.click()">
                  <div class="avatar mt-8 mr-5">
                    <div
                      class="bg-img-height"
                      :style="`background-image: url(${imageURL})`"
                    ></div>
                    <div class="add-image">
                      <v-icon size="30" color="#fff">mdi-plus</v-icon>
                    </div>
                  </div>
                  <div class="change-profile" @click="$refs.inputFile.click()">
                    <h2>Change profile photo</h2>
                    <div class="image-description">
                      <span>Acceptable formats: jbg, png </span> <br />
                      <span>Max file size: 500 kb </span>
                    </div>
                  </div>
                </div>
                <div class="search-form-field">
                  <div class="search-filter-label">
                    <label>{{ $t("name") }}</label>
                  </div>
                  <v-text-field
                    v-model="form.name"
                    :placeholder="$t('name')"
                    class="search-field cross-icon mt-2"
                    color="#46259A"
                    solo
                    rounded
                    outlined
                    clearable
                    required
                    :rules="[v => !!v || 'Name is required']"
                  ></v-text-field>
                </div>

                <div class="search-form-field">
                  <div class="search-filter-label">
                    <label>{{ $t("breed") }}</label>
                  </div>
                  <v-select
                    class="search-field mt-2"
                    :placeholder="$t('all')"
                    :items="breedList"
                    v-model="form.breed_ids"
                    outlined
                    color="#46259A"
                    rounded
                    :rules="[v => !!v || 'Breed is required']"
                    required
                  ></v-select>
                </div>

                <div class="search-form-field w-full">
                  <div class="search-filter-label mb-2">
                    <label>{{ $t("adoption_date") }}</label>
                  </div>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="form.adoption_date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.adoption_date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        rounded
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.adoption_date"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(form.adoption_date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>

                <div class="action-section">
                  <v-btn text @click="dialog = false">
                    {{ $t("cancel") }}</v-btn
                  >
                  <v-btn
                    class="purple-section  search-btn"
                    outlined
                    large
                    @click="addPet"
                  >
                    {{ $t("update") }}
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const dashboardModule = createNamespacedHelpers("dashboard");
export default {
  data() {
    return {
      dialog: false,
      breedList: [],
      petUser: [],
      form: {
        adoption_date: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
        name: "",
        breed_ids: "",
        pet_image: ""
      },
      imageURL: "",
      menu: false
    };
  },
  created() {
    this.getPetProfile();
    this.getBreedList();
    console.log(this.form);
  },
  computed: {
    ...dashboardModule.mapState(["USER_PETS", "PET_BREED_LIST"])
  },
  methods: {
    ...dashboardModule.mapActions([
      "FETCH_USER_PET_PROFILE",
      "POST_ADD_USER_PET_PROFILE",
      "POST_DELETE_USER_PET_PROFILE",
      "FETCH_PET_BREED_LIST"
    ]),

    async getPetProfile() {
      await this.FETCH_USER_PET_PROFILE();
      this.petUser = this.USER_PETS;
    },
    async getBreedList() {
      await this.FETCH_PET_BREED_LIST();
      this.breedList = this.PET_BREED_LIST;
    },
    getProfileFile(event) {
      this.form.pet_image = event.target.files[0];
      if (!this.form.pet_image) return;
      this.imageURL = URL.createObjectURL(this.form.pet_image);
    },
    async addPet() {
      if (this.$refs.form.validate()) {
        let data = new FormData();
        for (var key in this.form) {
          if (this.form.hasOwnProperty(key)) {
            data.append(key, this.form[key]);
          }
        }
        await this.POST_ADD_USER_PET_PROFILE(data);
        await this.getPetProfile();
        this.dialog = false;
      }
    },
    async deletePetUser(id) {
      await this.POST_DELETE_USER_PET_PROFILE(id);
      await this.getPetProfile();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.custom-container {
  max-width: 1000px;
  padding: 0 1.5rem;
}
.card-section {
  min-height: 275px;
}
.bg-img-height {
  height: 170px;
}
.delete-action {
  display: flex;
  justify-content: space-between;
}
.pet-add-section {
  border: 0.325919px dashed rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 12.3849px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.plus-icon {
  background: rgba(30, 29, 31, 0.2);
  border-radius: 50px !important;
  //border-top-left-radius: 50px;
  //border-top-right-radius: 50px;
}
.action-title {
  font-family: $font-family-primary;
  font-style: normal;
  font-weight: $font-weight-normal;
  font-size: $font-size-16;
  line-height: 24px;
  /* identical to box height */
  color: $dark;
}
.dialog-section {
  background: $white;
  border-radius: 19px;
  box-sizing: border-box;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  max-width: 700px;
}
.dialog-custom-container {
  max-height: 660px;
  max-width: 585px;
  padding: 0 1rem;
  margin: 0 auto;
}
.change-avatar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  .avatar {
    width: 110px;
    position: relative;
    border: 2.3804px solid $blue_gem;
    box-sizing: border-box;
    border-radius: 21.4236px;
    .bg-img-height {
      height: 102px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 19px;
    }
  }
  .add-image {
    right: -12px;
    bottom: 0px;
    height: 30px;
    width: 30px;

    position: absolute;
    z-index: 1;
    //bottom: 27px;
    //right: 7px;
    //height: 20px;
    border-radius: 50%;

    cursor: pointer;
    background: $blue_gem;
    box-shadow: 0px 5.53142px 5.53142px rgba(0, 0, 0, 0.08);
  }
}
.change-profile {
  h2 {
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: $font-weight-500;
    font-size: $font-size-14;
    line-height: 21px;
    color: $blue_gem;
    cursor: pointer;
  }
  .image-description {
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: $font-weight-normal;
    font-size: $font-size-11;
    line-height: 147%;
    letter-spacing: -0.005em;
    color: $black;
    opacity: 0.5;
  }
}

.search-form-field {
  width: 100%;
}
.search-field::v-deep .v-input__slot {
  background: $white;
  min-height: 50px;
  box-shadow: unset !important;
  width: 100%;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary;
  .v-text-field__slot {
    font-weight: $font-weight-bold;
  }
  @media (max-width: 767px) {
    max-width: 273px;
    min-width: 0;
  }
}

.action-section {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
.search-btn {
  font-family: $font-family-primary;
  min-width: 110px;
  background-color: $blue_gem;
  color: $white;
  //border: 0.5px solid $blue_gem;
  box-sizing: border-box;
  border-radius: 50px;
}
.w-full {
  width: 100%;
}
</style>
