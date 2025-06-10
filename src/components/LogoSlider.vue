<template>
  <div class="container">
    <div class="slider-container">
      <p class="logos-title">{{ logoSliderContent.title }}</p>
    </div>

    <div v-if="logoSliderContent" class="logos-container">
      <img
        v-for="logo in logoSliderContent.src"
        :key="logo"
        class="logo"
        :src="logo"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';

const { loadContent, loading, error } = useContent();
const logoSliderContent = ref(null);

onMounted(async () => {
  try {
    logoSliderContent.value = await loadContent('components/logo-slider');
  } catch (e) {
    console.error('Failed to load logo slider content:', e);
  }
});
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;
.logos-title {
  margin-bottom: 0;
  color: var(--BlackGrafiti);
  opacity: 0.4;
  font-weight: 500;
}
.slider-container {
  @include flex-center;
}
.logos-container {
  @include flex-center;
  gap: 60px;
  padding: 30px var(--spacing-md);
}
</style>
