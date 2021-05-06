<template>
  <div class="profile-title">
    <h2>{{$t('my_vet_info')}}</h2>
  </div>
</template>

<script>
export default {
  name: "VetInfo.vue",
  // async updateAccount(){
  //   if(this.$refs.form.validate()) {
  //     console.log('updateVet',this.form)
  //     this.$store.commit('SHOW_LOADER', true)
  //     await this.$store.dispatch('updateVet',this.form)
  //       .then(response => {
  //         this.$store.commit('SHOW_LOADER', false)
  //         console.log('res',response)
  //         console.log('user',this.userDetail)
  //
  //       })
  //
  //   }
  // },
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";

</style>
