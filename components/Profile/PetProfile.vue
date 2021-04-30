<template>
  <div>
    <div class="profile-title space">
      <h2>{{$t('pet_profile')}}</h2>
    </div>
    <div class="custom-container">
      <v-row>
        <v-col cols="12" md="4" sm="12" v-if="petUser.length" v-for="(pet,p) in petUser" :key="p">
          <div class="card-section mb-3" >
<!--            <nuxt-link :to="`/pet-category/${item.slug}`" >-->
              <div  class="bg-img-height" :style="`background-image: url(${pet.pet_image_thumb_full_path})`">
              </div>

<!--            </nuxt-link>-->
            <div class="card-category">
              <h2 class="mb-2 mt-2">{{pet.name}}</h2>
              <div class="delete-action" v-if="pet.breed">
                <span class="category-title" v-for="(cat,i) in pet.breed" :key="i"> {{cat.name}} </span>
                <div  @click="deletePetUser(pet.id)">
                  <v-icon size="20">mdi-delete</v-icon>
                </div>

              </div>
            </div>


          </div>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-card class="pet-add-section card-section center-center">
            <v-dialog
              v-model="dialog"
              persistent
              max-width="700"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="plus-icon" color="#fff" size="50" v-bind="attrs"
                        v-on="on">mdi-plus</v-icon>
              </template>

              <div class=" dialog-section">
                <v-form ref="form" class="dialog-custom-container search-form-filter" @submit.prevent="addPet">
                  <input
                    type="file"
                    accept="image/*"
                    id="file"
                    class="d-none"
                    @change="getProfileFile"
                    ref="inputFile"
                    required
                    :rules="[(v) => !!v || 'The Pet Image is required']"
                  />
                  <div class="change-avatar ">
                    <div class="avatar mt-8 mr-5">
                      <div  class="bg-img-height" :style="`background-image: url(${imageURL})`"></div>
                      <div class="add-image" @click="$refs.inputFile.click()">
                        <v-icon size="30"  color="#fff">mdi-plus</v-icon>
                      </div>
                    </div>
                    <div class="change-profile" @click="$refs.inputFile.click()">
                      <h2>Change profile photo </h2>
                      <div class="image-description">
                        <span>Acceptable formats: jbg, png </span> <br>
                        <span>Max file size: 500 kb </span>
                      </div>
                    </div>
                  </div>
                  <div class="search-form-field">
                    <div class="search-filter-label">
                      <label >{{ $t('name') }}</label>
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
                      :rules="[(v) => !!v || 'Name is required']"
                    ></v-text-field>
                  </div>
                  <div class="search-form-field">
                    <div class="search-filter-label">
                      <label >{{ $t('breed_name') }}</label>
                    </div>
                    {{form.breed_ids}}
                    <v-select
                      class="search-field mt-2"
                      :placeholder="$t('all')"
                      :items="breedList"
                      v-model="form.breed_ids"
                      outlined
                      color="#46259A"
                      rounded
                      :rules="[(v) => !!v || 'Breed is required']"
                      required
                    ></v-select>
                  </div>
                  <div class="action-section">
                    <v-btn  text @click="dialog = false"> {{$t('cancel')}}</v-btn>
                    <v-btn class="purple-section  search-btn" outlined large  @click="addPet">
                      {{ $t('update') }}
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </v-dialog>
            <v-card-title class="action-title"> Add More</v-card-title>
          </v-card>

        </v-col>
      </v-row>

    </div>

  </div>

</template>

<script>
export default {
  name: "PetProfile.vue",
  data () {
    return {
      dialog: false,
      breedList: [],
      petUser: [],
      form:{
        name:'',
        breed_ids:'',
        pet_image:''
      },
      imageURL:''

    }
  },
  created() {
    this.getPetProfile();
    this.getBreedList();
  },
  methods: {
   async getPetProfile(){
       this.$store.commit('SHOW_LOADER', true)
       await this.$store.dispatch('getUserPet')
         .then(response => {
           this.$store.commit('SHOW_LOADER', false)
           this.petUser=response.data.data.users_pets
         })
   },
   async getBreedList(){
       await this.$store.commit('SHOW_LOADER', true)
         this.$store.dispatch('breedList')
          .then(response => {
            this.$store.commit('SHOW_LOADER', false)
            let arr = []
            // console.log('b', response.data.data.breed_list)

            // response.data.data.breed_list.filter(data => data.value).forEach(function (data) {
            response.data.data.breed_list.forEach(function (data) {
              // if(data.value === ''){
              //   this.form.breed_ids = data.value
              //   arr.push({
              //     'value': data.value,
              //     'text': data.label,
              //   })
              // } else {
              //   arr.push({
              //     'value': data.value,
              //     'text': data.label,
              //   })
              // }
              arr.push({
                'value': data.value,
                'label': data.label,
              })
            })
            this.breedList=arr
            // console.log('r',this.breedList)
          })
    },
   getProfileFile(event) {
      this.form.pet_image = event.target.files[0];
      if (!this.form.pet_image) return;
      this.imageURL = URL.createObjectURL(this.form.pet_image);
    },
   async addPet(){
      if(this.$refs.form.validate()) {
        let data = new FormData()
        data.append('pet_image',this.form.pet_image)
        data.append('breed_ids',this.form.breed_ids)
        data.append('name',this.form.name)
        this.$store.commit('SHOW_LOADER', true)
        await this.$store.dispatch('addPetProfile',data)
          .then(response => {
            this.$store.commit('SHOW_LOADER', false)
            this.$store.commit('SHOW_SNACKBAR', {snackbar: true, color: 'green', message: response.data.message})
            this.dialog=false

          })
          .catch(e=>{
            let errors = e.response.data.data
            this.$store.commit('SHOW_LOADER', false)
            for (let item in errors){
              if(errors.hasOwnProperty(item))
                errors[item].forEach(err => {
                  this.$store.commit('SHOW_SNACKBAR',{  snackbar:true,color:'red',message:err})
                })
            }
          })

      }
    },
   async deletePetUser(id){
     this.$store.commit('SHOW_LOADER', true)
     await this.$store.dispatch('deleteUserPet',id)
       .then(response => {
         this.getPetProfile();
         this.$store.commit('SHOW_LOADER', false)
         this.$store.commit('SHOW_SNACKBAR', {snackbar: true, color: 'green', message: response.data.message})
       })
       .catch(e=>{
         let errors = e.response.data.data
         this.$store.commit('SHOW_LOADER', false)
         for (let item in errors){
           if(errors.hasOwnProperty(item))
             errors[item].forEach(err => {
               this.$store.commit('SHOW_SNACKBAR',{  snackbar:true,color:'red',message:err})
             })
         }
       })
   }
  },

}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.custom-container{
  max-width: 1000px;
  padding: 0 1.5rem;
}
.card-section{
  min-height: 275px;
}
.bg-img-height{
  height: 170px;
}
.delete-action{
  display: flex;
  justify-content: space-between;

}







.pet-add-section{
  border: 0.325919px dashed rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 12.3849px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.plus-icon{
  background: rgba(30, 29, 31, 0.2);
  border-radius: 50px !important;
  //border-top-left-radius: 50px;
  //border-top-right-radius: 50px;
}
.action-title{
  font-family:$font-family-primary ;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: rgba(30, 29, 31, 0.5);
}
.dialog-section{
  background: $white;
  border-radius: 19px;
  box-sizing: border-box;
  border: 0.5px solid rgba(0,0,0,0.2);
  max-width: 700px;
}
.dialog-custom-container{
  max-height: 560px;
  max-width: 585px;
  padding: 0 1rem;
  margin:0 auto;
}
.change-avatar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .avatar {
    width: 110px;
    position: relative;
    border: 2.3804px solid #46259A;
    box-sizing: border-box;
    border-radius: 21.4236px;
    .bg-img-height{
      height: 102px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 19px ;
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
    background: #46259A;
    box-shadow: 0px 5.53142px 5.53142px rgba(0, 0, 0, 0.08);
  }
}
.change-profile{
  h2{
    font-family: $font-family-primary ;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: $blue_gem;
    cursor: pointer;
  }
  .image-description{
    font-family: $font-family-primary ;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 147%;
    letter-spacing: -0.005em;
    color: #000000;
    opacity: 0.5;
  }
}

.search-field::v-deep .v-input__slot{
  background: $white;
  min-height: 50px;
  box-shadow: unset !important;
  min-width: 500px;
  font-weight: $font-weight-bold;
  font-family: $font-family-primary ;
  .v-text-field__slot{
    font-weight: $font-weight-bold;
  }
  @media (max-width: 767px) {
    max-width: 273px;
    min-width: 0;
  }
}





.action-section{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.search-btn{
  font-family: $font-family-primary ;
  min-width: 110px;
  background-color: $blue_gem;
  color: $white;
  //border: 0.5px solid #46259A;
  box-sizing: border-box;
  border-radius: 50px;
}
</style>
