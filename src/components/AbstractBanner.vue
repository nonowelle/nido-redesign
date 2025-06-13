<template>
  <div class="container">
    <div class="abstract-banners" v-if="abstractBannerContent">
      <div v-for="abstractBanner in abstractBannerContent.banners" :key="abstractBanner.title" class="abstract-banner">



        <div class="feature">
          <h2>{{ abstractBanner.title }}</h2>
          <div v-for="feature in abstractBanner.features" :key="feature.id" class="feature-detail">
            <div class="feature-text">
              <div class="feature-title">
                <img :src="feature.logo" alt="Logo" class="logo" />
                <h5>{{ feature.subtitle }}</h5>
              </div>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </div>


        </div>
        <div class="feature-testimonial">
          <div class="background-container">
            <div class="calculation-container">
              <div class="text"></div>
              <div class="cta"></div>
              <div class="image"></div>
            </div>
          </div>
          <h3 class="testimonial">{{ abstractBanner.description }}</h3>
          <img :src="abstractBanner.logo" alt="Logo" class="testimonial-logo" />
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

<style scoped lang="scss">
.abstract-banner {
  display: flex;
  gap: 110px;
  justify-content: center;
  align-items: center;
  margin: 180px 77px 116px 77px;
}

.feature {
  width: 40%;
}

.feature-title {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.feature-description {
  font-size: var(--font-size-block-text);
}

.logo {
  max-height: 24px;
  margin-right: var(--spacing-xxs);

}

.testimonial-logo {
  max-width: 110px;
}
</style>
