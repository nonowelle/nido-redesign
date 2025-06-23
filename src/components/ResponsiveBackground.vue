<template>
    <div class="responsive-background" :style="backgroundStyle">
        <slot />
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    mobileBg: {
        type: String,
        required: true
    },
    desktopBg: {
        type: String,
        required: true
    },
    tabletBg: {
        type: String,
        default: null
    }
});

const backgroundStyle = computed(() => ({
    backgroundImage: `url(${props.mobileBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}));
</script>

<style lang="scss" scoped>
@use '../styles/mixins' as *;

.responsive-background {
    width: 100%;
    height: 100%;
    min-height: 200px;

    // Mobile background (default)
    background-image: v-bind('mobileBg');

    // Tablet background
    @include respond-to(md) {
        @if v-bind('tabletBg') {
            background-image: v-bind('tabletBg');
        }
    }

    // Desktop background
    @include respond-to(lg) {
        background-image: v-bind('desktopBg');
    }
}
</style>