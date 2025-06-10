<template>
  <section class="hero-banner">
    <div class="hero-content">
      <h1 v-if="heroContent">{{ heroContent.title }}</h1>

      <button v-if="heroContent?.cta?.text" class="cta-button b-primary">
        {{ heroContent.cta.text }}
      </button>
      <button
        v-if="heroContent?.cta?.secondary?.text"
        class="cta-button b-secondary"
      >
        {{ heroContent.cta.secondary.text }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';

const { loadContent, loading, error } = useContent();
const heroContent = ref(null);

onMounted(async () => {
  try {
    heroContent.value = await loadContent('components/hero');
  } catch (e) {
    console.error('Failed to load hero content:', e);
  }
});
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
