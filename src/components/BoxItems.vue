<template>
  <div class="container">
    <div class="box-items-container" v-if="boxItemsContent">
      <img v-for="box in boxItemsContent.boxes" :key="box" :src="box" class="box-item" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';

const { loadContent, loading, error } = useContent();
const boxItemsContent = ref(null);

onMounted(async () => {
  try {
    boxItemsContent.value = await loadContent('components/box-items');
  } catch (e) {
    console.error('Failed to load box items content:', e);
  }
});
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;
@use '../styles/breakpoints' as *;

.box-items-container {
  flex-direction: column;

  @media (min-width: $breakpoint-xs) and (max-width: $breakpoint-lg-minus-1) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    align-items: flex-start;
    justify-content: flex-start;
  }

  @include respond-to(lg) {
    @include flex-center;
    flex-direction: row;
    gap: var(--spacing-xxs);
    align-items: stretch;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: var(--spacing-sm);
  }
}

.box-item {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: $breakpoint-xs) and (max-width: $breakpoint-lg-minus-1) {
    flex: 0 0 100%;
    scroll-snap-align: start;
  }
}
</style>
