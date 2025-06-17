<template>
    <section class="resource-banner container">
        <div class="resource-banner-header">
            <h2 class="resource-banner-title">{{ content?.title }}</h2>
            <button class="resource-banner-button b-secondary">
                {{ content?.button }}
                <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L13.7143 6M19.5 12L13.7143 18" stroke="currentColor" />
                </svg>
            </button>
        </div>
        <div class="resource-banner-list">
            <div v-for="resource in content?.resources" :key="resource.id" class="resource-banner-card">
                <img :src="resource.image" :alt="resource.title" class="resource-banner-image" />
                <span class="resource-banner-type" :class="'type-' + resource.type.toLowerCase()">{{ resource.type
                    }}</span>
                <h3 class="resource-banner-card-title">{{ resource.title }}</h3>
                <p class="resource-banner-desc">{{ resource.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useContent } from '@/composables/useContent';

const { loadContent } = useContent();
const content = ref(null);

onMounted(async () => {
    content.value = await loadContent('components/resource-banner');
});
</script>

<style scoped lang="scss">
@use './../styles/mixins' as *;

.resource-banner {
    padding: 80px 0;
    background-color: var(--color-background);

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }

    &-title {
        font-size: 32px;
        font-weight: 600;
        color: var(--color-text);
    }

    &-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 500;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: var(--color-primary-light);
        }
    }

    &-list {
        display: grid;

        gap: 24px;
        grid-template-columns: 1fr;

        @include respond-to(lg) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &-card {
        position: relative;
        padding: 24px;
        border-radius: 12px;
        background-color: var(--color-white);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-4px);
        }
    }

    &-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 16px;
    }

    &-type {

        padding: 8px 10px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 16px;

        &.type-report {
            background-color: var(--GreenAccentTerciary);

        }

        &.type-video {
            background-color: var(--BezhPrimary);

        }

        &.type-event {
            background-color: var(--LightBlue);

        }
    }

    &-card-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: 8px;
    }

    &-desc {
        font-size: 14px;
        color: var(--color-text-light);
        line-height: 1.5;
    }
}
</style>