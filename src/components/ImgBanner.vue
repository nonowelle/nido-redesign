<template>
  <div ref="el">
    <Transition name="slide">
      <div v-if="isVisible" class="container">
        <img v-if="imgBannerContent" :src="imgBannerContent.src" :alt="imgBannerContent.alt" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';
import { useInViewport } from '@/composables/useInViewport';

const { isVisible, el } = useInViewport();

const { loadContent, loading, error } = useContent();
const imgBannerContent = ref(null);

onMounted(async () => {
  try {
    imgBannerContent.value = await loadContent('components/img-banner');
    console.log(imgBannerContent.value);
  } catch (e) {
    console.error('Failed to load img-banner content:', e);
  }
});
</script>

<style lang="scss" scoped>
@use '/src/styles/mixins' as *;

.container {
  margin: 0 auto;
  padding: 0;

  @include respond-to (lg) {
    padding: 0 20px;
  }
}

img {
  width: 100%;
  height: auto;
}
</style>
