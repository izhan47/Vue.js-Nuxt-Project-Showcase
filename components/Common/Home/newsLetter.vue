<template>
<div class="purple-section">
  <v-container >
    <div class="news-section">
      <v-row justify="center">
        <v-divider class="news-section-divider"></v-divider>
        <v-col cols="12" md="12" sm="12"  >
          <div class="news-section-heading mt-3 mb-3">
            <h2>{{ $t('newsletter') }} </h2>
          </div>
          <div class="news-description mt-3 mb-3">
            <p>{{ $t('newsletter_description') }}</p>
          </div>
        </v-col>
        <v-col cols="12" md="12" sm="12"  >

          <v-form
            ref="form"
            @submit.prevent="submit"
          >
            <v-row justify="center">
              <v-col cols="12" md="6" sm="12"  >
                <v-text-field
                  class="form-field news-section-label"
                  color="white"
                  :rules="rules.name"
                  v-model="form.name"
                  :label="$t('name')"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="12" >
                <v-text-field
                  class="form-field news-section-label"
                  color="white"
                  :rules="rules.zipCode"
                  v-model="form.zipCode"
                  :label="$t('your_zipcode')"
                  required
                ></v-text-field>
              </v-col>
              <v-col  cols="12" md="12" sm="12">
                <v-text-field
                  class="form-field news-section-label"
                  color="white"
                  :rules="rules.email"
                  v-model="form.email"
                  :label="$t('email')"
                  required
                ></v-text-field>
              </v-col>
              <v-col  cols="12" md="12" sm="12">
                <v-btn
                  class=" mt-2 white-text"
                  text
                  @click="submit()"
                >
                  {{ $t('submit') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-form>

        </v-col>
      </v-row>
    </div>
  </v-container>

</div>
</template>

<script>
export default {
  name: "newsLetter.vue",
  data(){
    return{
      form:{
        name:'',
        zipCode:'',
        email:''
      },
      rules: {
        zipCode: [val => (val || '').length > 0 || 'This field is required'],
        email: [val => (val || '').length > 0 || 'This field is required'],
        name: [val => (val || '').length > 0 || 'This field is required'],
      },
    }
  },
  methods:{
    submit(){
      console.log('submit',this.form)
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
  width: 1150px;
  height: 600px;
  //No Parallax
}
.news-section-divider{
  //Tilted Opacity #F6FEFF
  color: #F6FEFF;
  width: 108px;
  height: 158px;
}
.news-section-heading{
  color:$white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  font-size: 25px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
}
.news-section-description{
  color:$white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 0 175px 0 175px ;  //top right bottom left
}

.news-section-label{
  color:$white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
}
.news-section-btn{
  color:$white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 500;
  font-size: 30px;
}
</style>

