<template>
<div class="custom-container  mt-10 ">
  <div class="text-center bg-img">
    <div class="mb-5">
      <h2 class="heading">Enter your email and we'll send you a new password.</h2>
    </div>
    <v-text-field
      class="mb-5"
      v-model="form.email"
      :rules="rules.email"
      color="teal"
      :label="$t('email')"
      required
    ></v-text-field>
    <div class="text-center">
      <v-btn large class="log-in-btn white-text" outlined rounded @click="Login()"> {{ $t('reset_password') }}</v-btn>
    </div>
    <div class="mt-4 mb-2 ">
      <span class="forgot-pass">{{$t('remember_password')}}</span>
      <nuxt-link class="auth-link" to="/auth/Login">{{$t('login')}}</nuxt-link>
    </div>

  </div>
</div>
</template>

<script>
export default {
name: "Forgot-Password.vue",
  data(){
    return{
      form: {
        email: '',
      },
      rules: {
        email: [val => (val || '').length > 0 || 'This email field is required',
          val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'E-mail must be valid'],
      },
    }
  },
  methods:{
    Login(){
      let loader=true
      this.$store.commit('SHOW_LOADER', loader)
      this.$store.dispatch('forgotPassword',this.form)
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
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.custom-container{
  max-width: 400px;
}
.bg-img{
 padding: 10px;
  border-radius: 4px;
  background-image: linear-gradient(
      180deg
    , $white 0%, $white 99%);
}
.heading{
  font-size: $font-size-18;
  color: $black;
}

.log-in-btn::v-deep.v-btn{
  min-width: 340px;
  height: 52px;
  padding: 0 50px;
  font-family:$font-family-primary;
  font-size:$font-size-15;
  font-weight:  $font-weight-600;
  text-transform: $text-transform-uppercase;
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
