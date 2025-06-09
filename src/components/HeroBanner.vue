<template>
  <section class="hero-banner">
    <div class="hero-content">
      <h1>Launch or scale your heat pump business. Instantly.</h1>

      <button class="cta-button b-primary">Start free trial</button>
      <button class="cta-button b-secondary">Book a demo</button>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here
</script>

<style lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.hero-banner {
  width: 100%;
  min-height: 80vh;
  @include flex-center;
  background-color: white;
  color: var(--BlackGrafit);
  text-align: center;
  padding: var(--spacing-lg);
}

.hero-content {
  max-width: 800px;
}

h1 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.cta-button {
  @include button-base;
}
</style>
