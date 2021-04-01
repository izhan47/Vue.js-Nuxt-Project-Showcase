<template>
  <div class="purple-section">
   <news-letter-img></news-letter-img>
    <div class="custom-container  center-center" >
      <div class="news-section ">
        <div class="text-center ">
          <h2 class="heading">{{ $t('newsletter') }} </h2>
        </div>
        <div class="text-center">
          <p class="description">{{ $t('newsletter_description') }}</p>
        </div>
        <div class="mb-5">
          <v-form
            ref="form"
            @submit.prevent="submit"
          >
            <v-row>
              <v-col cols="12" md="6" sm="12"  >
                <v-text-field
                  class="form-field news-section-label"
                  color="white"
                  :rules="rules.first_name"
                  v-model="form.first_name"
                  :label="$t('name')"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="12" >
                <v-text-field
                  class="form-field news-section-label"
                  color="white"
                  :rules="rules.zipcode"
                  v-model="form.zipcode"
                  :label="$t('your_zipcode')"
                  required
                ></v-text-field>
              </v-col>
              <v-col  cols="12" md="12" sm="12" class="pt-0">
                <v-text-field
                  class="form-field news-section-label"
                  color="white"
                  :rules="rules.email"
                  v-model="form.email"
                  :label="$t('email')"
                  required
                ></v-text-field>
                <div class="text-center">
                  <v-btn
                    class=" news-section-btn text-center white-text"
                    text
                    x-large
                    @click="submit()"
                  >
                    {{ $t('submit') }}
                  </v-btn>
                </div>
              </v-col>

            </v-row>
          </v-form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NewsLetterImg from "@/components/Common/Home/Svg";
export default {
  name: "newsLetter.vue",
  components:{
    NewsLetterImg
  },
  data(){
    return{
      errorMsg: '',
      showAlert:false,
      alertType: '',
      form:{
        first_name:'',
        zipcode:'',
        email:''
      },
      rules: {
        zipcode: [val => (val || '').length > 0 || 'This Zipcode is required'],
        email: [val => (val || '').length > 0 || 'This email field is required',
          val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'E-mail must be valid'],
        first_name: [val => (val || '').length > 0 || 'This Name is required'],
      },
    }
  },
  methods:{
    submit(){
      if(this.$refs.form.validate()) {
        let loader=true
        this.$store.commit('SHOW_LOADER', loader)
        this.$store.dispatch('newsLetter',this.form)
          .then(response => {
            this.$store.commit('SHOW_LOADER', loader=false)
            let data = {
              snackbar:true,
              color:'green',
              message:response.data.message
            }
            this.$store.commit('SHOW_SNACKBAR', data)
          }).catch(e => {
          this.$store.commit('SHOW_LOADER', loader=false)
          let errors = e.response.data.data
          for (let item in errors){
            if(errors.hasOwnProperty(item))
              errors[item].forEach(err => {
                let data = {
                  snackbar:true,
                  color:'red',
                  message:err
                }
                this.$store.commit('SHOW_SNACKBAR', data)
              })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.form-field::v-deep .v-label{
  color:$white
}
.form-field::v-deep .v-input{
  color:$white
}

.news-section{
  max-width: 800px;
  margin-top: 2rem;
}
.news-section-divider{

  color: #F6FEFF;
  width: 108px;
  height: 158px;
}
.heading{
  color:$white;
  margin-bottom: 2.3rem;
}
.description{
  color:$white;
  margin-bottom: 2.3rem;
}
.news-section-label::v-deep .v-input__slot{
&:before{
  border-color: $white !important;
}
  input{
    color:$white;
  }

}
.news-section-label{

  font-family:  $font-family-primary;
  font-weight: $font-weight-400;
  font-size:$font-size-16;
  background-color: #FFFFFF00;

}
.news-section-btn{
  color:$white;
  font-family:  $font-family-primary;
  font-weight: $font-weight-500;
  font-size: $font-size-30;
  text-transform: $text-transform-capitalize;
  margin-bottom: 2rem;
  letter-spacing: 0;
}
</style>

