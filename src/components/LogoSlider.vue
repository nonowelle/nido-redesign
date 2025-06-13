<template>
  <div class="">
    <div class="slider-container" v-if="logoSliderContent">
      <p class="logos-title">{{ logoSliderContent.title }}</p>
    </div>

    <div v-if="logoSliderContent" class="logos-container">
      <div class="logos-track">

        <img v-for="(logo, index) in logoSliderContent.src" :key="'first-' + index" class="logo" :src="logo" />

        <img v-for="(logo, index) in logoSliderContent.src" :key="'second-' + index" class="logo" :src="logo" />
      </div>
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
  color: var(--GrafitPrimaryi);
  opacity: 0.4;
  font-weight: 500;
}

.slider-container {
  @include flex-center;
}

.logos-container {
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  position: relative;
  padding: 30px 0 40px 0;
}

.logos-track {
  display: flex;
  animation: slide 80s linear infinite;
  width: fit-content;
  gap: 60px;

}

.logo {
  flex-shrink: 0;

  height: 50px;

  object-fit: contain;

  margin: 0;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
