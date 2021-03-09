<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
    <path class="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
    <path class="elementor-shape-fill" style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
    <path class="elementor-shape-fill" style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
  </svg>
</template>

<script>
export default {
  name: "Svg.vue"
}
</script>

<style scoped>
.elementor-shape-fill{
  fill: #F6FEFF;
  transform-origin: center;
  transform: rotateY( 0deg );
}
svg{
  width: calc(108% + 1.3px);
  height: 158px;

/*@media (max-width: 768px) {*/
/*  width: calc(100% + 1.3px);*/
/*}*/
}
</style>
