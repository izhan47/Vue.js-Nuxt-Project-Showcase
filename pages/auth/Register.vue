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
                  <h2 class="heading">{{$t('welcome')}}</h2>
                </div>
                <div class="mt-10">
                  <p class="description">{{$t('lorem_ipsum')}}</p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" sm="12" class="custom-card-padding  ">
            <div class="right-section">
              <div class="text-center">
                <img class="img-height img-fluid"  src="/images/Auth/Pom-3.png" alt="logo" />
              </div>
              <div>
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
                  <v-btn large class="log-in-btn white-text" outlined rounded @click="Register()"> {{ $t('sign_up') }}</v-btn>
                </div>
              </div>
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
        remember:false,
      },
      rules: {

        name: [val => (val || '').length > 0 || 'This field is required'],
        email: [val => (val || '').length > 0 || 'This field is required'],
        password: [ (value) => !!value || 'This field is required',
                     (value) => (value && value.length >= 6) || 'minimum 6 characters',
        ],
      },
    }
  },
  methods:{
    Register(){
      console.log('sign up',this.form)
      this.$store.dispatch('Register',this.form).then(response => {
        console.log('Register detail',response)
      })
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
    , #AFE2E3 0%, $green 100%);
}
.left-section{
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  min-height: 630px;
  padding: 75px;
  @media (max-width:767px) {
    padding: 12px;
  }
}
.logo{
  max-height: 70px;
  border-radius: 5px;
}

.heading{
  color: $white;
  font-size: $font-size-67;
  @media (max-width:767px) {
    font-size: 51px;
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
  background: $grey-light !important;
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
</style>
