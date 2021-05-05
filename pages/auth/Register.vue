<template>
  <div class="register-card">
    <div class="custom-container space custom-height">
      <v-card class="card-radius">
        <v-row>
          <v-col cols="12" md="7" sm="12" class="card-align">
            <div class="bg-left-section">
              <div class="left-section">
                <img class="logo img-fluid"  src="/images/WagEnabledLogo.jpg" alt="logo" />
                <div class="mb-5 mt-10">
                  <h2 class="heading">{{$t('sing_up_heading')}}</h2>
                </div>
                <div class="mt-10">
                  <p class="description">{{$t('sing_up_subheading')}}</p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" sm="12" class="custom-card-padding  ">
            <div class="right-section">
              <div class="text-center">
                <img class="img-height img-fluid"  src="/images/Auth/Pom-3.png" alt="logo" />
              </div>
              <v-form ref="form">
                <v-text-field
                  class="input-field  mt-2"
                  :placeholder="$t('name')"
                  v-model="form.name"
                  :rules="rules.name"
                  required
                  solo
                  color="#00afaa"
                  rounded
                  outlined
                ></v-text-field>
                <v-text-field
                  class="input-field  mt-2"
                  :placeholder="$t('email')"
                  v-model="form.email"
                  :rules="rules.email"
                  required
                  solo
                  color="#00afaa"
                  rounded
                  outlined
                ></v-text-field>
                <v-text-field
                  class="input-field"
                  :placeholder="$t('password')"
                  v-model="form.password"
                  :rules="rules.password"
                  type="password"
                  required
                  solo
                  color="#00afaa"
                  rounded
                  outlined
                ></v-text-field>
                <div class=" text-center">
                  <v-btn large class="log-in-btn white-text" outlined rounded @click="Register"> {{ $t('sign_up') }}</v-btn>
                </div>
                <p class="mt-5 mb-5 or-divider">
                  <span>{{$t('or')}}</span>
                </p>

                <div class="text-center">
                  <v-btn large class="log-in-btn white-text" outlined rounded> {{ $t('sign_up_with_google') }}</v-btn>
                </div>
              </v-form>
              <div class="mt-4 mb-2 ">
                <span class="forgot-pass">{{$t('have_an_account')}}</span>
                <nuxt-link class="auth-link" to="/auth/Login">{{$t('login')}}</nuxt-link>
              </div>


            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script>

export default {
name: "Register.vue",
  data(){
    return{
      form:{
        name:'',
        email:'',
        password:'',
      },
      rules: {

        name: [val => (val || '').length > 0 || 'This name field is required'],
        email: [val => (val || '').length > 0 || 'This email field is required',
                val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'E-mail must be valid'],
        password: [ (value) => !!value || 'This password field is required',
                     (value) => (value && value.length >= 6) || 'minimum 6 characters',
        ],
      },
    }
  },
  created() {
    this.$store.commit('SHOW_LOADER', false)

  },
  methods:{
    Register(){
      if(this.$refs.form.validate()) {
        this.$store.commit('SHOW_LOADER', true)
        this.$store.dispatch('register',this.form).then(response => {
          this.$store.commit('SHOW_LOADER', false)
          this.$store.commit('SHOW_SNACKBAR', {snackbar:true,color:'green', message:response.data.message
          })
          this.$router.push('/auth/Profile')
        }).catch(e=>{
          this.$store.commit('SHOW_LOADER', false)
          let errors = e.response.data.data
          for (let item in errors){
            if(errors.hasOwnProperty(item))
              errors[item].forEach(err => {
                this.$store.commit('SHOW_SNACKBAR', {  snackbar:true,color:'red',message:err})
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
.custom-container{
 max-width: 1000px;;
}
.register-card{
  .card-radius{
    box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 24%);
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  }
}
.custom-card-padding{
  padding: 0;
  display: grid;
  place-items: center;

}
.card-align{
 padding: 0;
  @media (max-width:768px) {
    padding: 12px;
  }

}
.custom-height{
  min-height: 500px;
  margin-top: 8rem;
  @media (max-width:1440px) {
    margin-top: 0;
  }

}
.bg-left-section{
  background-color: transparent;
  background-image: linear-gradient(
      290deg
    , $powder_blue 0%, $green 100%);
}
.left-section{
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  min-height: 700px;
  padding: 75px;
  @media (max-width:768px) {
    padding: 12px;
    min-height: 400px;
  }
}
.logo{
  max-height: $img-max-height-70;
  border-radius: 5px;
}
.heading{
  color: $white;
  font-size: $font-size-45;
  @media (max-width:767px) {
    font-size: $font-size-51;
  }
}
.description{
  color: $white;
  font-weight: $font-weight-300;
  line-height: 1.9em;
}
.right-section{
  padding: 20px;
  @media (max-width:767px) {
    padding: 12px;
  }
}
.input-field::v-deep .v-input__slot{
  background: $cultured !important;
  border-color: rgba(145,156,167,0.27);
  border-width: 0;
  min-height: 48px;
  box-shadow: unset !important;
  //max-width: 170px;
  font-weight: $font-weight-300;
  font-family:$font-family-primary;

  fieldset{
    border-width: 0;
  }
}
.input-field::v-deep .v-text-field__details{
  margin-bottom: 0;
}
.custom-checkbox{
  margin-top: 0;
  padding-top: 0;
}
.custom-checkbox::v-deep .v-input__slot{
  margin-bottom: 0;
}
.log-in-btn::v-deep.v-btn{
  min-width: 340px;
  height: 52px;
  padding: 0 50px;
  font-family:$font-family-primary;
  font-size:$font-size-15;
  font-weight:  $font-weight-600;
  text-transform: $text-transform-capitalize;
  background-color: $white;
  color: $purple;
  letter-spacing: 0;
  border-style: solid;
  border-width: 3px;
  border-color: $purple;
  border-radius: 100px;
  @media (max-width:767px) {
    min-width: 200px;
  }
}
.log-in-btn:hover{
  background-color: $purple;
  color:$white ;
}
.forgot-pass{
  font-family: $font-family-primary;
  font-size: .85em;
  cursor: pointer;
  color: $black;
}
.forgot-pass:hover{
  color: $green;
}
.auth-link{
  font-family: $font-family-primary;
  font-size: $font-size-14;
  font-weight: $font-weight-bold;
  text-decoration: unset;
  color: $black;
}

p.or-divider{
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  span{
    font-size: $font-size-14;
    font-family: $font-family-primary;
    color: $lavender_gray;
    font-weight: $font-weight-500;
    display: inline-block;
    background: $white;
    padding: 0 1rem;
    position: relative;
    z-index: 1

  }
  &:after{
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 1px;
    background: $light_gray;
  }
}

</style>
