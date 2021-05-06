<template>
    <v-snackbar
      v-model="notify.snackbar"
      :multi-line="multiLine"
      :timeout="timeout"
      :color="notify.color"
    >
      {{ notify.message }}
<!--      <template v-slot:action="{ attrs }">-->
<!--        <v-btn-->
<!--          color="red"-->
<!--          text-->
<!--          v-bind="attrs"-->
<!--        >-->
<!--          Close-->
<!--        </v-btn>-->
<!--      </template>-->
    </v-snackbar>
</template>

<script>
export default {
name: "Snackbar.vue",
  data(){
    return{
      multiLine: true,
      timeout: 1500,
    }
  },
  computed:{
    notify(){
      return this.$store.state.alert
    }
  }
}
</script>

<style scoped>

</style>
