<template>
    <section class="resource-banner container">
        <div class="resource-banner-header">
            <h2 class="resource-banner-title">{{ content?.title }}</h2>
            <button class="resource-banner-button b-secondary">
                {{ content?.button }}
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H12M12 6L7.04084 1M12 6L7.04084 11" stroke="#222321" />
                </svg>

            </button>
        </div>
        <div class="resource-banner-list">
            <div v-for="resource in content?.resources" :key="resource.id" class="resource-banner-card">
                <img :src="resource.image" :alt="resource.title" class="resource-banner-image" />
                <span class="resource-banner-type" :class="'type-' + resource.type.toLowerCase()">{{ resource.type
                    }}</span>
                <h3 class="resource-banner-card-title">{{ resource.title }}</h3>
            </div>
        </div>
        <button class="resource-banner-button b-secondary b-mobile">
            {{ content?.button }}
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H12M12 6L7.04084 1M12 6L7.04084 11" stroke="#222321" />
            </svg>

        </button>
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
    padding: 80px 20px;
    background-color: var(--color-background);

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    &-title {
        font-size: var(--font-size-h2);
        margin-bottom: 0;
    }

    &-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 10px;
        border-radius: 8px;
        font-weight: 500;
        font-size: var(--font-size-subtext);
        line-height: var(--line-height-subtext);
        transition: background-color 0.3s ease;
        display: none;

        &:hover {
            background-color: var(--color-primary-light);
        }

        @include respond-to(lg) {
            display: flex
        }

        &.b-mobile {
            display: flex;

            @include respond-to(lg) {
                display: none;
            }
        }
    }

    &-list {
        display: grid;

        gap: 24px;
        grid-template-columns: 1fr;
        margin: 70px 0;

        @include respond-to(lg) {
            grid-template-columns: repeat(3, 1fr);
            margin: 62px 0;
        }
    }

    &-card {


        transition: transform 0.3s ease;

        display: flex;
        flex-direction: column;
        gap: 10px;

        &:hover {
            transform: translateY(-4px);
        }
    }

    &-image {
        width: 100%;
        height: 240px;
        object-fit: cover;
    }

    &-type {
        width: min-content;
        padding: 8px 10px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 5px;

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
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 8px;
    }

    &-desc {
        font-size: 14px;
        color: var(--color-text-light);

    }
}
</style>