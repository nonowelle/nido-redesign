<template>
    <div class="footer">
        <div class="container">
            <div class="footer-banner">
                <h2 class="footer-banner-title" v-if="footerContent && footerContent.title">{{ footerContent.title }}
                </h2>
                <div class="b-primary-light cta-button" v-if="footerContent">{{ footerContent.cta }} <svg width="15"
                        height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7H14M14 7L8.21431 1M14 7L8.21431 13" stroke="#222321" />
                    </svg>
                </div>
            </div>
            <div class="footer-menu" v-if="footerContent && footerContent.menu">
                <div class="menu-col" v-for="menu in footerContent.menu" :key="footerContent.menu">
                    <div class="footer-menu-item" v-for="menuItem in menu" :key="menuItem"> {{ menuItem }}
                    </div>
                </div>
            </div>
            <div class="footer-partners" v-if="footerContent && footerContent.logos">
                <div class="footer-partners-title">{{ footerContent.logos.title }}</div>
                <img :src="logo" class="footer-partners-logos" v-for="logo in footerContent.logos.logos" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';

const { loadContent, loading, error } = useContent();
const footerContent = ref(null);

onMounted(async () => {
    try {
        footerContent.value = await loadContent('components/footer');
        console.log(footerContent.value)
    } catch (e) {
        console.error('Failed to load footer content:', e);
    }
});
</script>

<style lang="scss" scoped>
.footer {
    background-color: var(--GreenAccent);
    padding: 100px 125px;
    display: flex;

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
    }

    &-banner {
        display: flex;
        flex-direction: column;
        width: 35%;
        margin-bottom: 57px;

        &-title {
            font-size: var(--font-size-h1);
            line-height: var(--line-height-h1);
            color: var(--BezhPrimary)
        }

        .cta-button {
            width: fit-content;
        }
    }

    &-menu {
        display: flex;
        width: 64%;

        justify-content: space-around;

        &-item {
            color: var(--BezhPrimary);
            font-size: var(--font-size-block-text);
            margin-bottom: 24px;
            flex-wrap: wrap;
            max-width: 200px;

        }
    }

    &-partners {
        color: var(--BezhPrimary);

        &-title {
            color: var(--BezhPrimary);
            opacity: 0.4;
        }

        &-logos {
            margin-right: 40px;
        }
    }
}
</style>