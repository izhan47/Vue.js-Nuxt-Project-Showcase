<template>
<div>
   <banner></banner>
  <slide-section></slide-section>
  <pusher></pusher>
  <purpose></purpose>
  <crew></crew>
  <shake-together></shake-together>
</div>
</template>

<script>
import Banner from "@/components/Common/AboutUs/Banner";
import SlideSection from "@/components/Common/AboutUs/SlideSection";
import Pusher from "@/components/Common/AboutUs/Pusher";
import Purpose from "@/components/Common/AboutUs/Purpose";
import crew from "@/components/Common/AboutUs/Crew";
import ShakeTogether from "@/components/Common/AboutUs/ShakeTogether";

export default {
name: "about.vue",
components:{ Banner,SlideSection,Pusher, Purpose,crew  ,ShakeTogether } ,
data(){
  return{

  }
}
}
</script>

<style scoped>

</style>
