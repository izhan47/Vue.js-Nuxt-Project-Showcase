<template>
<div class="custom-container custom-height">
  <v-row>
    <v-col cols="12" md="7" sm="12">
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
    <v-col cols="12" md="5" sm="12">
      <div class="right-section">
        <div class="text-center">
          <img class="img-height img-fluid"  src="/images/Auth/Column-3-Dog.png" alt="logo" />
        </div>
        <div>
          <v-text-field
            class="input-field  mt-2"
            :placeholder="$t('username')"
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
            required
            solo
            color="#00afaa"
            rounded
            outlined
          ></v-text-field>
          <v-checkbox
            class="custom-checkbox"
            color="#332e80"
            v-model="form.remember"
            :label="$t('remember_me')"
          ></v-checkbox>
          <div class=" ">
            <v-btn large class="log-in-btn white-text" outlined rounded @click="Login()"> {{ $t('log_in') }}</v-btn>
          </div>
          <div class="mt-4 mb-2 forgot-pass">
            <span>{{$t('lost_password')}}</span>
          </div>
        </div>



      </div>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
name: "Login.vue",
data(){
  return{
    form:{
      email:'',
      password:'',
      remember:false,
    },
    rules: {

      email: [val => (val || '').length > 0 || 'This field is required'],
      password: [val => (val || '').length > 0 || 'This field is required'],
    },
  }
},
methods:{
  Login(){
    console.log('log in',this.form)
  }
}
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.custom-height{
  min-height: 500px;
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
  padding: 50px;
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
  font-size: .85em;
  color: $black;
}
.forgot-pass:hover{
  color: $green;
}
</style>
