<template>
  <img
    v-if="imgBannerContent"
    :src="imgBannerContent.src"
    :alt="imgBannerContent.alt"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';

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
img {
  width: 100%;
  height: auto;
}
</style>
