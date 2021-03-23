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

