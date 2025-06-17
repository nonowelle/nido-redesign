<template>
    <section class="resource-banner container">
        <div class="resource-banner__header">
            <h2 class="resource-banner__title">Resources</h2>
            <button class="resource-banner__button b-secondary">Explore resources
                <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L13.7143 6M19.5 12L13.7143 18" stroke="currentColor" />
                </svg>
            </button>
        </div>
        <div class="resource-banner__list">
            <div v-for="resource in resources" :key="resource.id" class="resource-banner__card">
                <img :src="resource.image" :alt="resource.title" class="resource-banner__image" />
                <span class="resource-banner__type" :class="'type-' + resource.type.toLowerCase()">{{ resource.type
                }}</span>
                <h3 class="resource-banner__card-title">{{ resource.title }}</h3>
                <p class="resource-banner__desc">{{ resource.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const resources = ref([
    {
        id: 1,
        image: '/src/styles/assets/box-items-1.png',
        type: 'Report',
        title: 'Gather information with ease using voice assistant',
        description: '',
    },
    {
        id: 2,
        image: '/src/styles/assets/box-items-2.png',
        type: 'Video',
        title: 'Gather information with ease using voice assistant',
        description: '',
    },
    {
        id: 3,
        image: '/src/styles/assets/box-items-3.png',
        type: 'Event',
        title: 'Gather information with ease using voice assistant',
        description: '',
    },
]);
</script>

<style scoped lang="scss">
@use './../styles/mixins' as *;

.resource-banner {
    background: white;

    width: 100%;
    padding: 80px 16px;

    @include respond-to(lg) {
        padding: 80px 20px 120px 20px;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
        flex-wrap: wrap;
        gap: 16px;
    }

    &__title {
        font-size: 2rem;
        font-family: var(--font-family-heading, serif);
        margin: 0;
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;

        @media (min-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    &__image {
        width: 100%;
        height: 180px;
        object-fit: cover;
        background: #eaeaea;
    }

    &__type {
        display: inline-block;
        margin: 16px 0 0 16px;
        font-size: 0.85rem;
        padding: 2px 10px;
        border-radius: 4px;
        background: #eaeaea;
        color: #222321;

        &.type-report {
            background: #eaf5e9;
            color: #3a7d3b;
        }

        &.type-video {
            background: #f3f3f3;
            color: #222321;
        }

        &.type-event {
            background: #eaf3fa;
            color: #2a6ea8;
        }
    }

    &__card-title {
        font-size: 1.1rem;
        font-weight: 500;
        margin: 12px 16px 8px 16px;
        line-height: 1.3;
    }

    &__desc {
        font-size: 1rem;
        color: #555;
        margin: 0 16px 16px 16px;
        flex: 1 1 auto;
    }
}
</style>