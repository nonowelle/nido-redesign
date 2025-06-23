<template>
  <div ref="el">
    <Transition name="slide">
      <div v-if="isVisible" class="container">
        <div class="box-items-container" :class="{ 'is-dragging': isDragging }" v-if="boxItemsContent"
          ref="boxItemsContainer" @mousedown="startDrag" @mouseleave="endDrag" @mouseup="endDrag" @mousemove="doDrag"
          @touchstart="startDrag" @touchend="endDrag" @touchmove="doDrag">
          <img v-for="box in boxItemsContent.boxes" :key="box" :src="box" class="box-item" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import { useContent } from '@/composables/useContent';
import { useInViewport } from '@/composables/useInViewport';

const { isVisible, el } = useInViewport();

const { loadContent, loading, error } = useContent();
const boxItemsContent = ref(null);

const boxItemsContainer = ref(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
let animationFrameId = null;

const startDrag = (e) => {
  isDragging.value = true;
  e.preventDefault();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  startX.value = clientX - boxItemsContainer.value.getBoundingClientRect().left;
  scrollLeft.value = boxItemsContainer.value.scrollLeft;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

const endDrag = () => {
  isDragging.value = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  if (!boxItemsContainer.value) return;

  const itemWidth = boxItemsContainer.value.querySelector('.box-item').offsetWidth;
  const gap = 20; // Corresponds to var(--spacing-sm)
  const itemWidthWithGap = itemWidth + gap;
  const currentScroll = boxItemsContainer.value.scrollLeft;
  const snapToIndex = Math.round(currentScroll / itemWidthWithGap);
  const targetScroll = snapToIndex * itemWidthWithGap;

  boxItemsContainer.value.scrollTo({
    left: targetScroll,
    behavior: 'smooth',
  });
};

const doDrag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const x = clientX - boxItemsContainer.value.getBoundingClientRect().left;
  const walk = (x - startX.value) * 1;
  const targetScrollLeft = scrollLeft.value - walk;

  animationFrameId = requestAnimationFrame(() => {
    boxItemsContainer.value.scrollLeft = targetScrollLeft;
  });
};

onMounted(async () => {
  try {
    boxItemsContent.value = await loadContent('components/box-items');
  } catch (e) {
    console.error('Failed to load box items content:', e);
  }
});

onUnmounted(() => {
  // Removed programmatic event listeners clean-up
});
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;
@use '../styles/breakpoints' as *;

.box-items-container {
  flex-direction: column;

  @media (max-width: $breakpoint-lg-minus-1) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: var(--spacing-sm);
    padding-bottom: var(--spacing-sm);
    align-items: flex-start;
    justify-content: flex-start;
    cursor: grab;
    touch-action: pan-y;
    /* Disable user selection during drag */
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:active {
      cursor: grabbing;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
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

  @media (max-width: $breakpoint-lg-minus-1) {
    flex: 0 0 100%;
  }
}
</style>
