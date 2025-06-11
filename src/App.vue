<template>
  <div class="container">
    <Navigation />
    <HeroBanner />
    <LogoSlider />
    <BoxItems />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from './components/HeroBanner.vue';
import LogoSlider from './components/LogoSlider.vue';
import Navigation from './components/Navigation.vue';
import BoxItems from './components/BoxItems.vue';
</script>

<style lang="scss">
@use './styles/variables' as *;
@use './styles/mixins' as *;
</style>
