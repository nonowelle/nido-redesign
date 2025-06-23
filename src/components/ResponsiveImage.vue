<template>
    <picture class="responsive-image">

        <source media="(max-width: 767px)" :srcset="mobileSrc" />

        <source v-if="tabletSrc" media="(min-width: 768px) and (max-width: 1023px)" :srcset="tabletSrc" />

        <img :src="desktopSrc" :alt="alt" :class="imgClass" @load="onImageLoad" @error="onImageError" />
    </picture>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    mobileSrc: {
        type: String,
        required: true
    },
    desktopSrc: {
        type: String,
        required: true
    },
    tabletSrc: {
        type: String,
        default: null
    },
    alt: {
        type: String,
        default: ''
    },
    imgClass: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['load', 'error']);

const onImageLoad = (event) => {
    emit('load', event);
};

const onImageError = (event) => {
    emit('error', event);
};
</script>

<style lang="scss" scoped>
.responsive-image {
    display: block;
    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
}
</style>