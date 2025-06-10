<template>
  <div class="app">
    <Navigation />
    <HeroBanner />
    <LogoSlider />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from './components/HeroBanner.vue';
import LogoSlider from './components/LogoSlider.vue';
import Navigation from './components/Navigation.vue';
</script>

<style lang="scss">
@use './styles/variables' as *;
@use './styles/mixins' as *;

.app {
  width: 100%;
  min-height: 100vh;
}
</style>
