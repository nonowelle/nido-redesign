<template>
  <div class="app">
    <HeroBanner />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from './components/HeroBanner.vue';
</script>

<style lang="scss">
@use './styles/variables' as *;
@use './styles/mixins' as *;

.app {
  width: 100%;
  min-height: 100vh;
}
</style>
