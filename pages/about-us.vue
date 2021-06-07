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
// import Banner from "@/components/Common/AboutUs/Banner";
// import SlideSection from "@/components/Common/AboutUs/SlideSection";
// import Pusher from "@/components/Common/AboutUs/Pusher";
// import Purpose from "@/components/Common/AboutUs/Purpose";
// import crew from "@/components/Common/AboutUs/Crew";
// import ShakeTogether from "@/components/Common/AboutUs/ShakeTogether";

export default {
  name: "about-us",
  components: {
    Banner: () => import("@/components/Common/AboutUs/Banner"),
    SlideSection: () => import("@/components/Common/AboutUs/SlideSection"),
    Pusher: () => import("@/components/Common/AboutUs/Pusher"),
    Purpose: () => import("@/components/Common/AboutUs/Purpose"),
    crew: () => import("@/components/Common/AboutUs/Crew"),
    ShakeTogether: () => import("@/components/Common/AboutUs/ShakeTogether")
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
