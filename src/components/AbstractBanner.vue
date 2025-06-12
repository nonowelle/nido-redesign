<template>
  <div class="container">
    <div class="abstract-banners" v-if="abstractBannerContent">
      <div
        v-for="abstractBanner in abstractBannerContent"
        :key="abstractBanner.title"
        class="abstract-banner"
      >
        <h3>{{ abstractBanner.title }}</h3>
        <p>{{ abstractBanner.description }}</p>

        <!-- Loop through the features of the current abstractBanner -->
        <div class="features">
          <div
            v-for="feature in abstractBanner.features"
            :key="feature.id"
            class="feature"
          >
            <h4>{{ feature.subtitle }}</h4>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';

const { loadContent, loading, error } = useContent();
const abstractBannerContent = ref(null);

onMounted(async () => {
  try {
    abstractBannerContent.value = await loadContent(
      'components/abstract-banner'
    );
    console.log(abstractBannerContent.value);
  } catch (e) {
    console.error('Failed to load abstract banner content:', e);
  }
});
</script>
