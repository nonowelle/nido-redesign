<template>
  <div class="">
    <Navigation />
    <HeroBanner />
    <LogoSlider />
    <BoxItems />
    <ImgBanner />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from './components/HeroBanner.vue';
import LogoSlider from './components/LogoSlider.vue';
import Navigation from './components/Navigation.vue';
import BoxItems from './components/BoxItems.vue';
import ImgBanner from './components/ImgBanner.vue';
</script>

<style lang="scss">
@use './styles/variables' as *;
@use './styles/mixins' as *;
</style>
