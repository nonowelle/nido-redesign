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
                <div class="footer-menu-col" v-for="menu in footerContent.menu" :key="footerContent.menu">
                    <div class="footer-menu-item" v-for="menuItem in menu" :key="menuItem"> {{ menuItem }}
                    </div>
                </div>
            </div>
            <div class="footer-partners" v-if="footerContent && footerContent.logos">
                <div class="footer-partners-title">{{ footerContent.logos.title }}</div>
                <div class="footer-partners-logos">
                    <img :src="logo" class="footer-partners-logos-logo" v-for="logo in footerContent.logos.logos" />
                </div>

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
@use './../styles/mixins' as *;

.footer {
    background-color: var(--GreenAccent);
    padding: 90px 0;
    display: flex;

    @include respond-to(lg) {
        padding: 100px 0;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
    }

    &-banner {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 57px;

        @include respond-to(lg) {
            width: 35%;
            align-items: flex-start;
        }

        &-title {
            font-size: var(--font-size-h1);
            line-height: var(--line-height-h1);
            color: var(--BezhPrimary);
            text-align: center;

            @include respond-to(lg) {
                text-align: left;
            }
        }

        .cta-button {
            width: fit-content;
        }
    }

    &-menu {
        display: flex;
        order: 3;



        flex-wrap: wrap;

        @include respond-to(lg) {
            width: 64%;
            justify-content: space-around;
            order: 2;
            flex-wrap: nowrap;
        }

        &-col {
            width: 50%;
            margin-bottom: 60px;

            @include respond-to(lg) {
                width: -webkit-fill-available;
                margin-bottom: 0;
            }
        }

        &-item {
            color: var(--BezhPrimary);
            font-size: var(--font-size-block-text-small);
            margin-bottom: 5px;
            flex-wrap: wrap;

            @include respond-to(lg) {
                font-size: var(--font-size-block-text);
                margin-bottom: 24px;
            }





        }
    }

    &-partners {
        color: var(--BezhPrimary);
        order: 2;
        margin-bottom: 80px;

        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        @include respond-to(lg) {
            order: 3;
            margin-bottom: 0;
            display: block;
        }

        &-title {
            color: var(--BezhPrimary);
            opacity: 0.4;
            margin-bottom: 30px;

            @include respond-to(lg) {
                margin-bottom: 20px;
            }
        }

        &-logos {
            display: flex;
            justify-content: space-between;

            @include respond-to(lg) {
                display: block;
            }

            &-logo {
                margin-right: 40px;

                width: calc(30% - 40px);

                @include respond-to(lg) {
                    width: auto;
                }

                &:last-of-type {
                    margin-right: 0;
                }
            }

        }
    }
}
</style>