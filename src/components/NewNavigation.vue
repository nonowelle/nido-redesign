<template>
    <div ref="navigation" class="navigation">
        <div class="desktop-nav container">
            <div class="logo">
                <svg width="139" height="26" viewBox="0 0 139 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_950_543)">
                        <path
                            d="M43.1924 21.7779L34.6241 5.73975H30.3672V25.1515H33.3656V9.08667L41.9339 25.1515H46.1908V5.73975H43.1924V21.7779Z"
                            fill="#222321" />
                        <path d="M52.9875 10.7471H50.2031V25.152H52.9875V10.7471Z" fill="#222321" />
                        <path d="M52.9875 5.73975H50.2031V8.81876H52.9875V5.73975Z" fill="#222321" />
                        <path
                            d="M66.4601 12.8621C65.5136 11.2736 64.0144 10.4791 61.9619 10.4791C60.2302 10.4791 58.7625 11.162 57.5574 12.5273C56.3523 13.8925 55.75 15.7092 55.75 17.9762C55.75 20.2432 56.3523 22.0861 57.5574 23.4514C58.7625 24.8171 60.2302 25.4995 61.9619 25.4995C64.0144 25.4995 65.5136 24.7055 66.4601 23.1165V25.1515H69.2445V5.73975H66.4601V12.8617V12.8621ZM65.4423 21.8449C64.6924 22.7287 63.746 23.1703 62.604 23.1703C61.462 23.1703 60.5064 22.7064 59.7924 21.7779C59.0785 20.8499 58.7213 19.5822 58.7213 17.9757C58.7213 16.3692 59.078 15.1064 59.7924 14.1871C60.5064 13.2679 61.4431 12.8083 62.604 12.8083C63.765 12.8083 64.6924 13.2461 65.4423 14.1202C66.1922 14.9947 66.5668 16.2799 66.5668 17.9757C66.5668 19.6715 66.1922 20.9611 65.4423 21.8444V21.8449Z"
                            fill="#222321" />
                        <path
                            d="M84.969 13.7591C84.2638 12.5904 83.3936 11.7507 82.3583 11.2421C81.3231 10.7334 80.2073 10.4791 79.0114 10.4791C77.8155 10.4791 76.7041 10.7334 75.6781 11.2421C74.6516 11.7507 73.7857 12.5899 73.081 13.7591C72.3758 14.9283 72.0234 16.343 72.0234 18.0029C72.0234 19.6628 72.3758 21.0509 73.081 22.22C73.7857 23.3892 74.6516 24.2284 75.6781 24.737C76.7041 25.2457 77.8155 25.5 79.0114 25.5C80.9033 25.5 82.5457 24.8574 83.9381 23.5722C85.3306 22.287 86.0265 20.4311 86.0265 18.0029C86.0265 16.343 85.6737 14.9283 84.969 13.7591ZM81.9036 21.8182C81.1178 22.702 80.1539 23.1437 79.0119 23.1437C77.8699 23.1437 76.9099 22.7064 76.1338 21.8318C75.3573 20.9572 74.969 19.6812 74.969 18.0029C74.969 16.3246 75.3573 15.0001 76.1338 14.1338C76.9104 13.2684 77.8694 12.835 79.0119 12.835C80.1544 12.835 81.1178 13.2728 81.9036 14.1469C82.6888 15.0214 83.0815 16.3066 83.0815 18.0024C83.0815 19.6982 82.6888 20.9344 81.9036 21.8177V21.8182Z"
                            fill="#222321" />
                        <path d="M0 25.1515H2.91206V15.3199L16.5128 25.1515H21.4837L0 9.62195V25.1515Z"
                            fill="#222321" />
                        <path
                            d="M8.24793 2.30111L18.5848 9.77344V14.6249L4.90101 4.73316L2.42188 6.53427L21.4968 20.3229V8.29315L10.7271 0.5L8.24793 2.30111Z"
                            fill="#222321" />
                    </g>
                    <defs>
                        <clipPath id="clip0_950_543">
                            <rect width="86.027" height="25" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div v-if="navigationContent?.links" class="nav-links-container">
                <a v-for="link in navigationContent.links" :key="link" class="menu-item" href="http://">{{ link }}</a>
            </div>
            <div class="option-menu-items">
                <a href="" class="lang option-menu-item">
                    EN
                    <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H6L3 4L0 0Z" fill="#222321" />
                    </svg>
                </a>
                <a href="" class="login option-menu-item b-secondary">Login</a>
            </div>
        </div>
        <div class="mobile-nav">
            <div class="logo">
                <svg width="139" height="26" viewBox="0 0 139 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_950_543)">
                        <path
                            d="M43.1924 21.7779L34.6241 5.73975H30.3672V25.1515H33.3656V9.08667L41.9339 25.1515H46.1908V5.73975H43.1924V21.7779Z"
                            fill="#222321" />
                        <path d="M52.9875 10.7471H50.2031V25.152H52.9875V10.7471Z" fill="#222321" />
                        <path d="M52.9875 5.73975H50.2031V8.81876H52.9875V5.73975Z" fill="#222321" />
                        <path
                            d="M66.4601 12.8621C65.5136 11.2736 64.0144 10.4791 61.9619 10.4791C60.2302 10.4791 58.7625 11.162 57.5574 12.5273C56.3523 13.8925 55.75 15.7092 55.75 17.9762C55.75 20.2432 56.3523 22.0861 57.5574 23.4514C58.7625 24.8171 60.2302 25.4995 61.9619 25.4995C64.0144 25.4995 65.5136 24.7055 66.4601 23.1165V25.1515H69.2445V5.73975H66.4601V12.8617V12.8621ZM65.4423 21.8449C64.6924 22.7287 63.746 23.1703 62.604 23.1703C61.462 23.1703 60.5064 22.7064 59.7924 21.7779C59.0785 20.8499 58.7213 19.5822 58.7213 17.9757C58.7213 16.3692 59.078 15.1064 59.7924 14.1871C60.5064 13.2679 61.4431 12.8083 62.604 12.8083C63.765 12.8083 64.6924 13.2461 65.4423 14.1202C66.1922 14.9947 66.5668 16.2799 66.5668 17.9757C66.5668 19.6715 66.1922 20.9611 65.4423 21.8444V21.8449Z"
                            fill="#222321" />
                        <path
                            d="M84.969 13.7591C84.2638 12.5904 83.3936 11.7507 82.3583 11.2421C81.3231 10.7334 80.2073 10.4791 79.0114 10.4791C77.8155 10.4791 76.7041 10.7334 75.6781 11.2421C74.6516 11.7507 73.7857 12.5899 73.081 13.7591C72.3758 14.9283 72.0234 16.343 72.0234 18.0029C72.0234 19.6628 72.3758 21.0509 73.081 22.22C73.7857 23.3892 74.6516 24.2284 75.6781 24.737C76.7041 25.2457 77.8155 25.5 79.0114 25.5C80.9033 25.5 82.5457 24.8574 83.9381 23.5722C85.3306 22.287 86.0265 20.4311 86.0265 18.0029C86.0265 16.343 85.6737 14.9283 84.969 13.7591ZM81.9036 21.8182C81.1178 22.702 80.1539 23.1437 79.0119 23.1437C77.8699 23.1437 76.9099 22.7064 76.1338 21.8318C75.3573 20.9572 74.969 19.6812 74.969 18.0029C74.969 16.3246 75.3573 15.0001 76.1338 14.1338C76.9104 13.2684 77.8694 12.835 79.0119 12.835C80.1544 12.835 81.1178 13.2728 81.9036 14.1469C82.6888 15.0214 83.0815 16.3066 83.0815 18.0024C83.0815 19.6982 82.6888 20.9344 81.9036 21.8177V21.8182Z"
                            fill="#222321" />
                        <path d="M0 25.1515H2.91206V15.3199L16.5128 25.1515H21.4837L0 9.62195V25.1515Z"
                            fill="#222321" />
                        <path
                            d="M8.24793 2.30111L18.5848 9.77344V14.6249L4.90101 4.73316L2.42188 6.53427L21.4968 20.3229V8.29315L10.7271 0.5L8.24793 2.30111Z"
                            fill="#222321" />
                    </g>
                    <defs>
                        <clipPath id="clip0_950_543">
                            <rect width="86.027" height="25" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div v-if="navigationContent" class="nav-links-container">
                <a v-for="link in navigationContent.links" :key="link" class="menu-item" href="http://">{{ link }}</a>
            </div>
            <div class="background">
                <img class="nav-background" src="./../styles/assets/backgrounds/background-nav.svg"
                    alt="Striped background pattern">
            </div>
            <div class="option-menu-items">
                <a href="" class="lang option-menu-item">
                    EN
                    <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H6L3 4L0 0Z" fill="#222321" />
                    </svg>
                </a>
                <a href="" class="login option-menu-item b-secondary">Login</a>
            </div>
        </div>
        <div class="hamburger-container">
            <div class="hamburger" @click="toggleNav" ref="hamburger">
                <img src="/src/styles/assets/icons/Statius=Regular.svg" alt="">
            </div>
        </div>

        <svg class="close-button" @click="toggleNav" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4.38462 3L21 19.6154L19.6154 21L3 4.38462L4.38462 3Z" fill="#222321" />
            <path d="M19.6154 3L3 19.6154L4.38462 21L21 4.38462L19.6154 3Z" fill="#222321" />
        </svg>
    </div>

</template>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import { useContent } from '@/composables/useContent';
const navigationContent = ref(null);
const navigation = ref(null);

const { loadContent, loading, error } = useContent();

const toggleNav = () => {
    if (navigation.value) {
        if (navigation.value.classList.contains('mobile-nav-open')) {
            navigation.value.classList.remove('mobile-nav-open');
        } else {
            navigation.value.classList.add('mobile-nav-open');
        }
    }
}

const handleResize = () => {
    if (window.innerWidth > 1024 && navigation.value) {
        navigation.value.classList.remove('mobile-nav-open');
    }
}

onMounted(async () => {
    try {
        navigationContent.value = await loadContent('components/navigation');
        console.log(navigationContent.value);
    } catch (e) {
        console.error('Failed to load navigation content:', e);
    }

    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});



</script>
<style lang="scss" scoped>
@use './../styles/mixins' as *;

.desktop-nav {
    width: 100%;
    height: 80px;
    display: none;
    padding: 25px 20px;
    max-width: 1440px;
    margin: 0 auto;
    cursor: pointer;

    @include respond-to(lg) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        z-index: 100;
        background-color: white;
        margin: 0 auto;
        top: 0;
        left: 50%;
        width: 100vw;
        transform: translateX(-50%);
    }

    .menu-item {
        &:hover {
            text-decoration: underline;
        }
    }

    .option-menu-items {
        flex-direction: row;
        display: flex;
    }

    .lang {
        justify-content: center;
        align-items: center;
        display: flex;
        gap: 8px;
    }

    .login {
        text-decoration: none;
        padding: 10px 12px;
        margin: 0;
    }
}

.mobile-nav {

    flex-direction: column;
    padding: 20px 15px;
    position: fixed;
    height: 100vh;
    z-index: 100;
    background-color: var(--BezhPrimary);
    width: 100%;
    left: 100%;
    transition: left 1s ease;

    .nav-links-container {
        display: flex;
        flex-direction: column;
    }



}

.hamburger,
.close-button {
    display: none;
}

.hamburger-container {
    width: 100vw;
    position: fixed;
    top: 0;
    height: 60px;
    background-color: white;
    z-index: 10;

    @include respond-to(lg) {
        display: none;
    }
}

.mobile-nav-open {
    .mobile-nav {
        display: flex;
        position: fixed;
        left: 0;
        transition: left 1s ease;

        @include respond-to(lg) {
            display: none;
        }
    }

    .close-button {
        display: block;
        z-index: 2000;
        position: fixed;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    .hamburger {
        display: none;
    }
}


.hamburger {
    display: block;
    z-index: 2000;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;

    @include respond-to(lg) {
        display: none;
    }
}
</style>