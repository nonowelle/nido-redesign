<template>
  <div class="box-items-container" v-if="boxItemsContent">
    <img
      v-for="box in boxItemsContent.boxes"
      :key="box"
      :src="box"
      class="box-item"
    />
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

.box-items-container {
  @include flex-center;
  gap: var(--spacing-xxs);
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: var(--spacing-sm);
}

.box-item {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
