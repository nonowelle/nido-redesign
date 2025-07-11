<template>
  <div ref="el">
    <Transition name="slide">
      <section v-if="isVisible" class="container">
        <div class="hero-banner">
          <div class="hero-content">
            <h1 v-if="heroContent">{{ heroContent.title }}</h1>

            <button v-if="heroContent?.cta?.text" class="cta-button b-primary">
              {{ heroContent.cta.text }}
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 12H19.5M19.5 12L13.7143 6M19.5 12L13.7143 18" stroke="currentColor" />
              </svg>
            </button>
            <button v-if="heroContent?.cta?.secondary?.text" class="cta-button b-secondary">
              {{ heroContent.cta.secondary.text }}
              <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 12H19.5M19.5 12L13.7143 6M19.5 12L13.7143 18" stroke="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';
import { useInViewport } from '@/composables/useInViewport';

const { isVisible, el } = useInViewport();

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
  @include flex-center;
  background-color: white;
  color: var(--GrafitPrimary);
  text-align: center;
  padding: var(--spacing-xl);

  @include respond-to(lg) {
    padding: 200px var(--spacing-xl) var(--spacing-xl) var(--spacing-xl);
  }
}

.hero-content {
  max-width: 800px;
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
